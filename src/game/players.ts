import { GAME_CONFIG } from "@/data/gameConfig";
import { NATIONALITY_WEIGHTS } from "@/data/countries";
import { FIRST_NAMES, LAST_NAMES } from "@/data/names";
import { pick, randInt, weightedPick } from "./rng";
import type { Player, Position } from "./types";

export function transferValueFor(rating: number) {
  const { factor, exponent } = GAME_CONFIG.transferValue;
  const raw = Math.pow(Math.max(1, rating), exponent) * factor;
  return Math.round(raw / 1000) * 1000;
}

function clampRating(r: number) {
  return Math.max(GAME_CONFIG.minPlayerRating, Math.min(GAME_CONFIG.maxPlayerRating, Math.round(r)));
}

export function createPlayer(id: number, position: Position, division: number): Player {
  const range = GAME_CONFIG.ratingRangeByDivision[division] ?? [45, 75];
  const [min, max] = range;
  // média das duas amostras -> distribuição mais central
  const rating = clampRating((randInt(min, max) + randInt(min, max)) / 2);
  const name = `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`;
  return {
    id,
    name,
    position,
    rating,
    nationality: weightedPick(NATIONALITY_WEIGHTS),
    transferValue: transferValueFor(rating),
  };
}

/** Gera um plantel completo segundo GAME_CONFIG.squadStructure. */
export function createSquad(startId: number, division: number): Player[] {
  const players: Player[] = [];
  let id = startId;
  for (const [pos, count] of Object.entries(GAME_CONFIG.squadStructure)) {
    for (let i = 0; i < count; i++) {
      players.push(createPlayer(id++, pos as Position, division));
    }
  }
  return players;
}
