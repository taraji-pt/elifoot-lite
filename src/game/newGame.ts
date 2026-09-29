import { GAME_CONFIG } from "@/data/gameConfig";
import type { TeamSeed } from "@/data/schema";
import { createCup } from "./cup";
import { budgetForRating, createSquad, validateSquad } from "./players";
import { bestLineup } from "./ratings";
import { generateFixtures } from "./schedule";
import type { GameState, Player, Team } from "./types";

/** Clubes fora das 4 divisões (mercado, Taça e acesso à última divisão). */
export const RESERVE_DIVISION = 0;

export function activeSlots(): number {
  return GAME_CONFIG.numberOfDivisions * GAME_CONFIG.teamsPerDivision;
}

export function seedsForCountries(all: TeamSeed[], countries: string[]): TeamSeed[] {
  return all.filter((t) => countries.includes(t.country));
}

/** Ordena os clubes por força (mais forte primeiro). */
export function rankSeeds(seeds: TeamSeed[]): TeamSeed[] {
  return [...seeds].sort((a, b) => b.rating - a.rating || a.id - b.id);
}

export function divisionForRank(index: number): number {
  if (index >= activeSlots()) return RESERVE_DIVISION;
  return Math.floor(index / GAME_CONFIG.teamsPerDivision) + 1;
}

/** Pré-visualização das divisões a partir dos clubes escolhidos. */
export function previewDivisions(seeds: TeamSeed[]): { seed: TeamSeed; division: number }[] {
  return rankSeeds(seeds).map((seed, index) => ({ seed, division: divisionForRank(index) }));
}

/** Constrói equipas + plantéis a partir dos dados (sem estado de jogo). */
export function buildWorld(seeds: TeamSeed[]) {
  const teams: Record<number, Team> = {};
  const players: Record<number, Player> = {};
  let nextPlayerId = 1000;

  const invalid = seeds.filter((seed) => validateSquad(seed.players));
  if (invalid.length) {
    throw new Error(`Há ${invalid.length} clube(s) com plantel incompleto. Cada clube precisa de pelo menos 11 jogadores definidos na base de dados.`);
  }

  previewDivisions(seeds).forEach(({ seed, division }) => {
    const squad = createSquad(nextPlayerId, seed.rating, seed.players);
    nextPlayerId += squad.length;
    for (const p of squad) players[p.id] = p;
    const playerIds = squad.map((p) => p.id);
    const { players: _seedPlayers, division: _legacy, ...rest } = seed;
    teams[seed.id] = {
      ...rest,
      division,
      budget: budgetForRating(seed.rating),
      playerIds,
      lineup: bestLineup(playerIds, players),
    };
  });

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

export function splitByActivity(teams: Record<number, Team>) {
  const active: number[] = [];
  const reserve: number[] = [];
  for (const team of Object.values(teams)) {
    (team.division === RESERVE_DIVISION ? reserve : active).push(team.id);
  }
  return { active, reserve };
}

export function createNewGame(userTeamId: number, seeds: TeamSeed[]): GameState {
  const { teams, players, nextPlayerId } = buildWorld(seeds);
  const { active, reserve } = splitByActivity(teams);

  return {
    seasonYear: GAME_CONFIG.firstSeasonYear,
    round: 1,
    userTeamId,
    offers: [],
    offersMandatory: false,
    careerOver: false,
    teams,
    players,
    freeAgents: [],
    leagues: buildLeagues(teams),
    cup: createCup(active, reserve, userTeamId),
    match: null,
    history: [],
    scorerStats: {},
    nextPlayerId,
  };
}

export function seasonLabel(year: number) {
  return `${year}/${String((year + 1) % 100).padStart(2, "0")}`;
}
