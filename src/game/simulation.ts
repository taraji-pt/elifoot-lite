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
  type: "yellow" | "red";
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
): HalfResult {
  const ratingHome = teamRating({ ...home, lineup: homeLineup }, players);
  const ratingAway = teamRating({ ...away, lineup: awayLineup }, players);

  const homeGoals = poisson(lambdaFor(ratingHome, ratingAway, true));
  const awayGoals = poisson(lambdaFor(ratingAway, ratingHome, false));
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
  const cardCount = randInt(1, 4);
  const used = new Set<number>();
  for (let i = 0; i < cardCount && candidates.length; i++) {
    const available = candidates.filter((x) => !used.has(x.id));
    if (!available.length) break;
    const chosen = pick(available);
    used.add(chosen.id);
    const player = players[chosen.id];
    if (!player) continue;
    cards.push({
      teamId: chosen.teamId,
      playerId: player.id,
      playerName: player.name,
      minute: randInt(minuteStart, minuteEnd),
      type: Math.random() < 0.045 ? "red" : "yellow",
    });
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
): { homeGoals: number; awayGoals: number; scorers: HalfResult["scorers"]; cards: MatchCard[] } {
  const h1 = simulateHalf(home, away, players, home.lineup, away.lineup, 1, 45);
  const redFirstHalf = h1.cards.filter((c) => c.type === "red").map((c) => c.playerId);
  const h2 = simulateHalf(home, away, players, home.lineup, away.lineup, 46, 90, redFirstHalf);
  return { homeGoals: h1.homeGoals + h2.homeGoals, awayGoals: h1.awayGoals + h2.awayGoals, scorers: [...h1.scorers, ...h2.scorers], cards: [...h1.cards, ...h2.cards] };
}

/** Penáltis simples para a Taça. */
export function penaltyShootout(homeId: number, awayId: number): number {
  return randInt(0, 1) === 0 ? homeId : awayId;
}
