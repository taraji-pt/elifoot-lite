import { GAME_CONFIG } from "@/data/gameConfig";
import { TEAMS } from "@/data/teams";
import { createCup } from "./cup";
import { budgetForRating, createSquad } from "./players";
import { bestLineup } from "./ratings";
import { generateFixtures } from "./schedule";
import type { GameState, Player, Team } from "./types";

/** Constrói equipas + plantéis a partir dos dados (sem estado de jogo). */
export function buildWorld() {
  const teams: Record<number, Team> = {};
  const players: Record<number, Player> = {};
  let nextPlayerId = 1000;

  for (const seed of TEAMS) {
    const squad = createSquad(nextPlayerId, seed.rating, seed.players);
    nextPlayerId += squad.length;
    for (const p of squad) players[p.id] = p;
    const playerIds = squad.map((p) => p.id);
    const { players: _seedPlayers, ...rest } = seed;
    teams[seed.id] = {
      ...rest,
      budget: budgetForRating(seed.rating),
      playerIds,
      lineup: bestLineup(playerIds, players),
    };
  }

  return { teams, players, nextPlayerId };
}

export function buildLeagues(teams: Record<number, Team>) {
  const leagues: Record<number, ReturnType<typeof generateFixtures>> = {};
  for (let d = 1; d <= GAME_CONFIG.numberOfDivisions; d++) {
    const ids = Object.values(teams)
      .filter((t) => t.division === d)
      .map((t) => t.id);
    leagues[d] = generateFixtures(ids);
  }
  return leagues;
}

export function createNewGame(userTeamId: number): GameState {
  const { teams, players, nextPlayerId } = buildWorld();
  const freeAgents: number[] = [];

  return {
    seasonYear: GAME_CONFIG.firstSeasonYear,
    round: 1,
    userTeamId,
    teams,
    players,
    freeAgents,
    leagues: buildLeagues(teams),
    cup: createCup(Object.keys(teams).map(Number)),
    match: null,
    history: [],
    nextPlayerId,
  };
}

export function seasonLabel(year: number) {
  return `${year}/${String((year + 1) % 100).padStart(2, "0")}`;
}
