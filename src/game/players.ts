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
 * Cria o plantel de um clube a partir do rating do clube.
 * Usa os jogadores do ficheiro (por ordem = importância) e gera os que faltam
 * até cumprir GAME_CONFIG.squadStructure. Titulares ≈ rating +0..+4, suplentes -3..-10.
 */
export function createSquad(startId: number, teamRating: number, seeds: PlayerSeed[] = []): Player[] {
  const players: Player[] = [];
  let id = startId;
  for (const [pos, count] of Object.entries(GAME_CONFIG.squadStructure) as [Position, number][]) {
    const starters = GAME_CONFIG.startingLineup[pos];
    const given = seeds.filter((s) => s.position === pos);
    const total = Math.max(count, given.length);
    for (let i = 0; i < total; i++) {
      const seed: PlayerSeed = given[i] ?? {
        name: `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`,
        position: pos,
        nationality: weightedPick(NATIONALITY_WEIGHTS),
      };
      const rating = i < starters ? teamRating + randInt(0, 4) : teamRating - randInt(3, 10);
      players.push(makePlayer(id++, seed, rating));
    }
  }
  return players;
}

/** Jogador aleatório (mercado livre). */
export function createPlayer(id: number, position: Position, rating: number): Player {
  return makePlayer(
    id,
    { name: `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`, position, nationality: weightedPick(NATIONALITY_WEIGHTS) },
    rating + randInt(-6, 6),
  );
}
