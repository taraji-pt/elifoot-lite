import { GAME_CONFIG } from "@/data/gameConfig";
import { NATIONALITY_WEIGHTS } from "@/data/countries";
import { FIRST_NAMES, LAST_NAMES } from "@/data/names";
import type { PlayerSeed } from "@/data/schema";
import { pick, randInt, weightedPick } from "./rng";
import type { Player, Position } from "./types";

export function transferValueFor(rating: number) {
  const { factor, exponent } = GAME_CONFIG.transferValue;
  const raw = Math.pow(Math.max(1, rating), exponent) * factor;
  return Math.round(raw / 1000) * 1000;
}

/** Orçamento inicial derivado do rating do clube (clubes fortes têm mais dinheiro). */
export function budgetForRating(rating: number) {
  const base = transferValueFor(rating) * 1.3;
  const variation = 0.85 + Math.random() * 0.3;
  return Math.round((base * variation) / 10000) * 10000;
}

function clampRating(r: number) {
  return Math.max(GAME_CONFIG.minPlayerRating, Math.min(GAME_CONFIG.maxPlayerRating, Math.round(r)));
}

function makePlayer(id: number, seed: PlayerSeed, rating: number): Player {
  const r = clampRating(rating);
  return { id, name: seed.name, position: seed.position, nationality: seed.nationality, rating: r, transferValue: transferValueFor(r) };
}

/**
 * Cria o plantel exclusivamente a partir dos jogadores definidos na base de dados.
 * Nunca gera jogadores para completar o plantel.
 */
export function createSquad(startId: number, teamRating: number, seeds: PlayerSeed[] = []): Player[] {
  const counts: Record<Position, number> = { GR: 0, DEF: 0, MED: 0, AV: 0 };
  return seeds.map((seed, index) => {
    const positionIndex = counts[seed.position]++;
    const starters = GAME_CONFIG.startingLineup[seed.position];
    const rating = positionIndex < starters ? teamRating + randInt(0, 4) : teamRating - randInt(3, 10);
    return makePlayer(startId + index, seed, rating);
  });
}

/** Valida o mínimo necessário para uma equipa poder disputar jogos. */
export function validateSquad(seeds: PlayerSeed[] | undefined): string | null {
  const total = seeds?.length ?? 0;
  return total >= 11 ? null : `Plantel incompleto: ${total}/11 jogadores definidos na base de dados.`;
}

/** Jogador aleatório (mercado livre). */
export function createPlayer(id: number, position: Position, rating: number): Player {
  return makePlayer(
    id,
    { name: `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`, position, nationality: weightedPick(NATIONALITY_WEIGHTS) },
    rating + randInt(-6, 6),
  );
}
