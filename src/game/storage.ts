import type { GameState } from "./types";
import { loadDatabase } from "@/data/db";

const KEY = "elifoot-mini-save-v3";

export function saveGame(state: GameState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(state));
}

export function loadGame(): GameState | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    const state = JSON.parse(raw) as GameState;
    const database = loadDatabase();
    const byId = new Map(database.map((team) => [team.id, team]));
    for (const team of Object.values(state.teams)) {
      const seed = byId.get(team.id);
      if (!seed) continue;
      team.stadium = seed.stadium;
      team.city = seed.city;
      team.stadiumImage = seed.stadiumImage;
    }
    return state;
  } catch {
    return null;
  }
}

export function hasSave(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(KEY) !== null;
}

export function clearSave() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}
