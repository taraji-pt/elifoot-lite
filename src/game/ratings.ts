import { GAME_CONFIG } from "@/data/gameConfig";
import type { Player, Position, Team } from "./types";

export const POSITION_ORDER: Position[] = ["GR", "DEF", "MED", "AV"];

export function getPlayers(ids: number[], players: Record<number, Player>): Player[] {
  return ids.map((id) => players[id]).filter((p): p is Player => Boolean(p));
}

/** Rating da equipa = média dos titulares (calculado, nunca editável). */
export function teamRating(team: Team, players: Record<number, Player>): number {
  const squad = getPlayers(team.lineup.length ? team.lineup : team.playerIds, players);
  if (!squad.length) return 0;
  const total = squad.reduce((sum, p) => sum + p.rating, 0);
  return Math.round(total / squad.length);
}

/** Escolhe automaticamente o melhor onze segundo GAME_CONFIG.startingLineup. */
export function bestLineup(playerIds: number[], players: Record<number, Player>): number[] {
  const squad = getPlayers(playerIds, players);
  const lineup: number[] = [];
  for (const pos of POSITION_ORDER) {
    const needed = GAME_CONFIG.startingLineup[pos];
    const candidates = squad
      .filter((p) => p.position === pos)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, needed);
    lineup.push(...candidates.map((p) => p.id));
  }
  // se faltarem jogadores (plantel incompleto), preencher com os melhores restantes
  if (lineup.length < 11) {
    const rest = squad
      .filter((p) => !lineup.includes(p.id))
      .sort((a, b) => b.rating - a.rating);
    for (const p of rest) {
      if (lineup.length >= 11) break;
      lineup.push(p.id);
    }
  }
  return lineup;
}

export function sortSquad(squad: Player[]): Player[] {
  return [...squad].sort((a, b) => {
    const pa = POSITION_ORDER.indexOf(a.position);
    const pb = POSITION_ORDER.indexOf(b.position);
    if (pa !== pb) return pa - pb;
    return b.rating - a.rating;
  });
}

export function formatMoney(value: number): string {
  return "€" + value.toLocaleString("pt-PT");
}
