import { GAME_CONFIG } from "@/data/gameConfig";
import { pick, poisson, randInt } from "./rng";
import { getPlayers, teamRating } from "./ratings";
import type { Player, Team } from "./types";

const { baseGoalsPerHalf, ratingImpact, homeAdvantage } = GAME_CONFIG.simulation;

function lambdaFor(attack: number, defence: number, home: boolean) {
  const diff = attack - defence;
  const value = baseGoalsPerHalf * Math.exp(diff * ratingImpact) + (home ? homeAdvantage : 0);
  return Math.max(0.05, Math.min(4, value));
}

export interface MatchCard {
  teamId: number;
  playerId: number;
  playerName: string;
  minute: number;
  type: "yellow" | "red" | "second-yellow";
}

export interface HalfResult {
  homeGoals: number;
  awayGoals: number;
  scorers: { teamId: number; playerId: number; playerName: string; minute: number }[];
  cards: MatchCard[];
}

function scorerFrom(team: Team, lineup: number[], players: Record<number, Player>): Player | null {
  const squad = getPlayers(lineup, players).filter((p) => p.position !== "GR");
  if (!squad.length) return null;
  // avançados marcam mais
  const weighted: Player[] = [];
  for (const p of squad) {
    const times = p.position === "AV" ? 5 : p.position === "MED" ? 3 : 1;
    for (let i = 0; i < times; i++) weighted.push(p);
  }
  return pick(weighted);
}

/**
 * Simula uma parte cronologicamente. Os golos de cada intervalo são calculados
 * com a força disponível nesse momento; uma expulsão altera imediatamente
 * os ratings usados nos minutos seguintes.
 */
export function simulateHalf(
  home: Team,
  away: Team,
  players: Record<number, Player>,
  homeLineup: number[],
  awayLineup: number[],
  minuteStart = 1,
  minuteEnd = 45,
  excludedPlayerIds: number[] = [],
  homeTacticalIntent = 0,
  awayTacticalIntent = 0,
  previousYellowCardIds: number[] = [],
): HalfResult {
  const cards: MatchCard[] = [];
  const blocked = new Set(excludedPlayerIds);
  const candidates = [...homeLineup.map((id) => ({ id, teamId: home.id })), ...awayLineup.map((id) => ({ id, teamId: away.id }))]
    .filter((x) => !blocked.has(x.id));
  // Entre um e três cartões por parte; probabilidade de vermelho direto de 6%.
  const cardCount = randInt(1, 3);
  const used = new Set<number>();
  for (let i = 0; i < cardCount && candidates.length; i++) {
    const available = candidates.filter((x) => !used.has(x.id));
    if (!available.length) break;
    const chosen = pick(available);
    used.add(chosen.id);
    const player = players[chosen.id];
    if (!player) continue;
    const secondYellow = previousYellowCardIds.includes(player.id);
    const type = secondYellow ? "second-yellow" : Math.random() < 0.06 ? "red" : "yellow";
    cards.push({ teamId: chosen.teamId, playerId: player.id, playerName: player.name, minute: randInt(minuteStart, minuteEnd), type });
  }
  cards.sort((a, b) => a.minute - b.minute);

  let activeHomeLineup = homeLineup.filter((id) => !blocked.has(id));
  let activeAwayLineup = awayLineup.filter((id) => !blocked.has(id));
  const scorers: HalfResult["scorers"] = [];
  const fullDuration = Math.max(1, minuteEnd - minuteStart + 1);
  const tacticalScale = 0.025;
  let cursor = minuteStart;

  const simulateGoalsUntil = (intervalEnd: number) => {
    if (intervalEnd < cursor) return;
    const missingHomePlayers = Math.max(0, 11 - activeHomeLineup.length);
    const missingAwayPlayers = Math.max(0, 11 - activeAwayLineup.length);
    const ratingHome = teamRating({ ...home, lineup: activeHomeLineup }, players) - missingHomePlayers * 4;
    const ratingAway = teamRating({ ...away, lineup: activeAwayLineup }, players) - missingAwayPlayers * 4;
    const homeAttack = ratingHome + homeTacticalIntent * tacticalScale;
    const homeDefence = ratingHome - homeTacticalIntent * tacticalScale;
    const awayAttack = ratingAway + awayTacticalIntent * tacticalScale;
    const awayDefence = ratingAway - awayTacticalIntent * tacticalScale;
    const duration = intervalEnd - cursor + 1;
    const homeGoals = poisson(lambdaFor(homeAttack, awayDefence, true) * duration / fullDuration);
    const awayGoals = poisson(lambdaFor(awayAttack, homeDefence, false) * duration / fullDuration);

    for (let i = 0; i < homeGoals; i++) {
      const scorer = scorerFrom(home, activeHomeLineup, players);
      if (scorer) scorers.push({ teamId: home.id, playerId: scorer.id, playerName: scorer.name, minute: randInt(cursor, intervalEnd) });
    }
    for (let i = 0; i < awayGoals; i++) {
      const scorer = scorerFrom(away, activeAwayLineup, players);
      if (scorer) scorers.push({ teamId: away.id, playerId: scorer.id, playerName: scorer.name, minute: randInt(cursor, intervalEnd) });
    }
    cursor = intervalEnd + 1;
  };

  for (const card of cards) {
    simulateGoalsUntil(card.minute - 1);
    if (card.type === "red" || card.type === "second-yellow") {
      if (card.teamId === home.id) activeHomeLineup = activeHomeLineup.filter((id) => id !== card.playerId);
      else activeAwayLineup = activeAwayLineup.filter((id) => id !== card.playerId);
    }
    cursor = Math.max(cursor, card.minute);
  }
  simulateGoalsUntil(minuteEnd);

  scorers.sort((a, b) => a.minute - b.minute);
  return {
    homeGoals: scorers.filter((s) => s.teamId === home.id).length,
    awayGoals: scorers.filter((s) => s.teamId === away.id).length,
    scorers,
    cards,
  };
}

/** Simula um jogo completo (usado para jogos da IA e da Taça). */
export function simulateMatch(
  home: Team,
  away: Team,
  players: Record<number, Player>,
  homeLineup = home.lineup,
  awayLineup = away.lineup,
): { homeGoals: number; awayGoals: number; scorers: HalfResult["scorers"]; cards: MatchCard[] } {
  const h1 = simulateHalf(home, away, players, homeLineup, awayLineup, 1, 45);
  const redFirstHalf = h1.cards.filter((c) => c.type === "red" || c.type === "second-yellow").map((c) => c.playerId);
  const h2 = simulateHalf(home, away, players, homeLineup.filter((id) => !redFirstHalf.includes(id)), awayLineup.filter((id) => !redFirstHalf.includes(id)), 46, 90, redFirstHalf, 0, 0, h1.cards.filter((c) => c.type === "yellow").map((c) => c.playerId));
  return { homeGoals: h1.homeGoals + h2.homeGoals, awayGoals: h1.awayGoals + h2.awayGoals, scorers: [...h1.scorers, ...h2.scorers], cards: [...h1.cards, ...h2.cards] };
}

/** Penáltis simples para a Taça. */
export function penaltyShootout(homeId: number, awayId: number): number {
  return randInt(0, 1) === 0 ? homeId : awayId;
}
