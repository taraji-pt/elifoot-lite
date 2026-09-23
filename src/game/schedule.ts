import type { Fixture } from "./types";

/** Round-robin a duas voltas. */
export function generateFixtures(teamIds: number[]): Fixture[][] {
  const ids = [...teamIds];
  if (ids.length % 2 === 1) ids.push(-1);
  const n = ids.length;
  const half = n / 2;
  let list = [...ids];
  const first: Fixture[][] = [];

  for (let r = 0; r < n - 1; r++) {
    const round: Fixture[] = [];
    for (let i = 0; i < half; i++) {
      const a = list[i] as number;
      const b = list[n - 1 - i] as number;
      if (a === -1 || b === -1) continue;
      const home = r % 2 === 0 ? a : b;
      const away = r % 2 === 0 ? b : a;
      round.push({ homeId: home, awayId: away, homeGoals: null, awayGoals: null });
    }
    first.push(round);
    const fixed = list[0] as number;
    const last = list[n - 1] as number;
    list = [fixed, last, ...list.slice(1, n - 1)];
  }

  const second: Fixture[][] = first.map((round) =>
    round.map((f) => ({ homeId: f.awayId, awayId: f.homeId, homeGoals: null, awayGoals: null })),
  );

  return [...first, ...second];
}

export function totalRounds(leagues: Record<number, Fixture[][]>): number {
  return Math.max(0, ...Object.values(leagues).map((r) => r.length));
}
