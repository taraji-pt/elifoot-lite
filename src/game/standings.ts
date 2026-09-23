import { GAME_CONFIG } from "@/data/gameConfig";
import type { Fixture } from "./types";

export interface StandingRow {
  teamId: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDiff: number;
  points: number;
}

export function computeStandings(rounds: Fixture[][], teamIds: number[]): StandingRow[] {
  const table = new Map<number, StandingRow>();
  for (const id of teamIds) {
    table.set(id, {
      teamId: id,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDiff: 0,
      points: 0,
    });
  }

  for (const round of rounds) {
    for (const f of round) {
      if (f.homeGoals === null || f.awayGoals === null) continue;
      const home = table.get(f.homeId);
      const away = table.get(f.awayId);
      if (!home || !away) continue;
      home.played++;
      away.played++;
      home.goalsFor += f.homeGoals;
      home.goalsAgainst += f.awayGoals;
      away.goalsFor += f.awayGoals;
      away.goalsAgainst += f.homeGoals;
      if (f.homeGoals > f.awayGoals) {
        home.won++;
        away.lost++;
        home.points += GAME_CONFIG.points.win;
        away.points += GAME_CONFIG.points.loss;
      } else if (f.homeGoals < f.awayGoals) {
        away.won++;
        home.lost++;
        away.points += GAME_CONFIG.points.win;
        home.points += GAME_CONFIG.points.loss;
      } else {
        home.drawn++;
        away.drawn++;
        home.points += GAME_CONFIG.points.draw;
        away.points += GAME_CONFIG.points.draw;
      }
    }
  }

  const rows = [...table.values()].map((r) => ({ ...r, goalDiff: r.goalsFor - r.goalsAgainst }));
  rows.sort(
    (a, b) =>
      b.points - a.points || b.goalDiff - a.goalDiff || b.goalsFor - a.goalsFor || a.teamId - b.teamId,
  );
  return rows;
}
