/**
 * BASE DE DADOS DE CLUBES
 * Fonte: `data/teams.ts` (embutida). Se o utilizador editar ou importar
 * clubes no Editor, a versão editada fica guardada no navegador e passa a
 * ser a base usada pelo jogo.
 */
import { POSITIONS, type Position } from "@/game/types";
import type { PlayerSeed, TeamSeed } from "./schema";
import { TEAMS } from "./teams";

const KEY = "elifoot-db-v1";
type RawRec = { [K in "id" | "name" | "country" | "rating" | "badge" | "primaryColor" | "secondaryColor" | "players" | "position" | "nationality"]?: unknown };

const deepClone = <T,>(v: T): T => JSON.parse(JSON.stringify(v)) as T;

export function defaultDatabase(): TeamSeed[] {
  return deepClone(TEAMS);
}

export function loadDatabase(): TeamSeed[] {
  if (typeof window === "undefined") return defaultDatabase();
  const raw = window.localStorage.getItem(KEY);
  if (!raw) return defaultDatabase();
  try {
    const parsed = parseDatabase(raw);
    return parsed.length ? parsed : defaultDatabase();
  } catch {
    return defaultDatabase();
  }
}

export function saveDatabase(teams: TeamSeed[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(teams));
}

export function resetDatabase() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}

export function isCustomDatabase(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(KEY) !== null;
}

export function serializeDatabase(teams: TeamSeed[]): string {
  return JSON.stringify(teams, null, 2);
}

function toPosition(value: unknown): Position {
  const v = String(value ?? "").toUpperCase() as Position;
  return POSITIONS.includes(v) ? v : "MED";
}

function clampRating(value: unknown): number {
  const n = Number(value);
  if (!Number.isFinite(n)) return 50;
  return Math.max(0, Math.min(100, Math.round(n)));
}

/** Lê e valida um ficheiro JSON de clubes (aceita ficheiros antigos com `division`). */
export function parseDatabase(json: string): TeamSeed[] {
  const raw = JSON.parse(json) as unknown;
  const list = Array.isArray(raw)
    ? raw
    : Array.isArray((raw as { teams?: unknown })?.teams)
      ? ((raw as { teams: unknown[] }).teams)
      : null;
  if (!list) throw new Error("O ficheiro tem de conter uma lista de clubes.");

  const used = new Set<number>();
  const teams: TeamSeed[] = [];
  list.forEach((item, index) => {
    const t = item as RawRec;
    const name = String(t.name ?? "").trim();
    if (!name) return;
    let id = Number(t.id);
    if (!Number.isFinite(id) || id <= 0 || used.has(id)) id = index + 1;
    while (used.has(id)) id += 1;
    used.add(id);
    const players = Array.isArray(t.players)
      ? (t.players as unknown[])
          .map((p) => {
            const ps = p as RawRec;
            const pname = String(ps.name ?? "").trim();
            if (!pname) return null;
            return {
              name: pname,
              position: toPosition(ps.position),
              nationality: String(ps.nationality ?? "POR").toUpperCase(),
            } satisfies PlayerSeed;
          })
          .filter((p): p is PlayerSeed => p !== null)
      : undefined;

    teams.push({
      id,
      name,
      country: String(t.country ?? "POR").toUpperCase().slice(0, 3),
      rating: clampRating(t.rating),
      badge: String(t.badge ?? ""),
      primaryColor: String(t.primaryColor ?? "#1F6F4A"),
      secondaryColor: String(t.secondaryColor ?? "#FFFFFF"),
      ...(players && players.length ? { players } : {}),
    });
  });
  if (!teams.length) throw new Error("Nenhum clube válido encontrado no ficheiro.");
  return teams;
}

export function nextTeamId(teams: TeamSeed[]): number {
  return teams.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

/** Países presentes na base de dados, com o número de clubes de cada um. */
export function countryList(teams: TeamSeed[]): { code: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const t of teams) counts.set(t.country, (counts.get(t.country) ?? 0) + 1);
  return [...counts.entries()]
    .map(([code, count]) => ({ code, count }))
    .sort((a, b) => b.count - a.count || a.code.localeCompare(b.code));
}

export function emptyTeam(id: number): TeamSeed {
  return {
    id,
    name: "Novo Clube",
    country: "POR",
    rating: 50,
    badge: "",
    primaryColor: "#1F6F4A",
    secondaryColor: "#FFFFFF",
    players: [],
  };
}

export function emptyPlayer(): PlayerSeed {
  return { name: "", position: "MED", nationality: "POR" };
}
