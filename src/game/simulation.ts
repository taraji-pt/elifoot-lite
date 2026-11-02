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
  const squad = getPlayers(lineup.length ? lineup : team.playerIds, players).filter(
    (p) => p.position !== "GR",
  );
  if (!squad.length) return null;
  // avançados marcam mais
  const weighted: Player[] = [];
  for (const p of squad) {
    const times = p.position === "AV" ? 5 : p.position === "MED" ? 3 : 1;
    for (let i = 0; i < times; i++) weighted.push(p);
  }
  return pick(weighted);
}

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
  const missingHomePlayers = Math.max(0, 11 - homeLineup.length);
  const missingAwayPlayers = Math.max(0, 11 - awayLineup.length);
  // Cada jogador em falta por expulsão reduz a força efetiva da equipa.
  const ratingHome = teamRating({ ...home, lineup: homeLineup }, players) - missingHomePlayers * 4;
  const ratingAway = teamRating({ ...away, lineup: awayLineup }, players) - missingAwayPlayers * 4;

  const tacticalScale = 0.025; // intensidade máxima altera o rating em 2,5 pontos
  const homeAttack = ratingHome + homeTacticalIntent * tacticalScale;
  const homeDefence = ratingHome - homeTacticalIntent * tacticalScale;
  const awayAttack = ratingAway + awayTacticalIntent * tacticalScale;
  const awayDefence = ratingAway - awayTacticalIntent * tacticalScale;
  const homeGoals = poisson(lambdaFor(homeAttack, awayDefence, true));
  const awayGoals = poisson(lambdaFor(awayAttack, homeDefence, false));
  const blocked = new Set(excludedPlayerIds);

  const scorers: HalfResult["scorers"] = [];
  for (let i = 0; i < homeGoals; i++) {
    const scorer = scorerFrom(home, homeLineup.filter((id) => !blocked.has(id)), players);
    if (scorer) scorers.push({ teamId: home.id, playerId: scorer.id, playerName: scorer.name, minute: randInt(minuteStart, minuteEnd) });
  }
  for (let i = 0; i < awayGoals; i++) {
    const scorer = scorerFrom(away, awayLineup.filter((id) => !blocked.has(id)), players);
    if (scorer) scorers.push({ teamId: away.id, playerId: scorer.id, playerName: scorer.name, minute: randInt(minuteStart, minuteEnd) });
  }

  const cards: MatchCard[] = [];
  const candidates = [...homeLineup.map((id) => ({ id, teamId: home.id })), ...awayLineup.map((id) => ({ id, teamId: away.id }))]
    .filter((x) => !blocked.has(x.id));
  // Em média, cerca de dois a três cartões por jogo; expulsões directas são raras.
  const cardCount = randInt(0, 2);
  const used = new Set<number>();
  for (let i = 0; i < cardCount && candidates.length; i++) {
    const available = candidates.filter((x) => !used.has(x.id));
    if (!available.length) break;
    const chosen = pick(available);
    used.add(chosen.id);
    const player = players[chosen.id];
    if (!player) continue;
    const secondYellow = previousYellowCardIds.includes(player.id);
    const type = secondYellow ? "second-yellow" : Math.random() < 0.025 ? "red" : "yellow";
    cards.push({ teamId: chosen.teamId, playerId: player.id, playerName: player.name, minute: randInt(minuteStart, minuteEnd), type });
  }

  scorers.sort((a, b) => a.minute - b.minute);
  cards.sort((a, b) => a.minute - b.minute);
  return { homeGoals, awayGoals, scorers, cards };
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
  const redFirstHalf = h1.cards.filter((c) => c.type === "red").map((c) => c.playerId);
  const h2 = simulateHalf(home, away, players, homeLineup.filter((id) => !redFirstHalf.includes(id)), awayLineup.filter((id) => !redFirstHalf.includes(id)), 46, 90, redFirstHalf, 0, 0, h1.cards.filter((c) => c.type === "yellow").map((c) => c.playerId));
  return { homeGoals: h1.homeGoals + h2.homeGoals, awayGoals: h1.awayGoals + h2.awayGoals, scorers: [...h1.scorers, ...h2.scorers], cards: [...h1.cards, ...h2.cards] };
}

/** Penáltis simples para a Taça. */
export function penaltyShootout(homeId: number, awayId: number): number {
  return randInt(0, 1) === 0 ? homeId : awayId;
}
