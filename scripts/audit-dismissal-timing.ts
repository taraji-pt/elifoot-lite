import { GAME_CONFIG } from "@/data/gameConfig";
import { teamRating } from "@/game/ratings";
import type { Player, Team } from "@/game/types";

const MATCHES = 10_000;
const MINUTES = [15, 45, 75];
const RATING_PAIRS: [number, number][] = [[70, 70], [77, 70], [70, 77]];
const DISMISSALS = [1, 2] as const;
const SIDES = ["home", "away"] as const;
const POSITIONS: Player["position"][] = ["GR", "DEF", "DEF", "DEF", "DEF", "MED", "MED", "MED", "MED", "AV", "AV"];

function seededRandom(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function poisson(lambda: number) {
  const limit = Math.exp(-Math.max(0, lambda));
  let k = 0, product = 1;
  do { k++; product *= Math.random(); } while (product > limit);
  return k - 1;
}

function makeTeam(id: number, name: string, rating: number, players: Record<number, Player>): Team {
  const playerIds: number[] = [];
  for (let i = 0; i < 18; i++) {
    const playerId = id * 100 + i + 1;
    players[playerId] = {
      id: playerId, name: `${name} ${i + 1}`, position: POSITIONS[i % POSITIONS.length]!,
      rating, nationality: "PRT", transferValue: 0,
    };
    playerIds.push(playerId);
  }
  const lineup = [
    ...playerIds.filter((id) => players[id]!.position === "GR").slice(0, 1),
    ...playerIds.filter((id) => players[id]!.position === "DEF").slice(0, 4),
    ...playerIds.filter((id) => players[id]!.position === "MED").slice(0, 4),
    ...playerIds.filter((id) => players[id]!.position === "AV").slice(0, 2),
  ];
  return {
    id, name, country: "PRT", division: 1, rating, badge: "", primaryColor: "#000000",
    secondaryColor: "#ffffff", budget: 0, playerIds, lineup,
    lineupFormation: { DEF: 4, MED: 4, AV: 2 },
  };
}

function lambda(attack: number, defence: number, home: boolean, duration: number) {
  const { baseGoalsPerHalf, ratingImpact, homeAdvantage } = GAME_CONFIG.simulation;
  const value = baseGoalsPerHalf * Math.exp((attack - defence) * ratingImpact) + (home ? homeAdvantage : 0);
  return Math.max(0.05, Math.min(4, value)) * duration / 45;
}

function simulateInterval(home: Team, away: Team, players: Record<number, Player>, homeLineup: number[], awayLineup: number[], start: number, end: number) {
  if (end < start) return { homeGoals: 0, awayGoals: 0 };
  const shape = (lineup: number[]) => {
    const count = { DEF: 0, MED: 0, AV: 0 };
    for (const id of lineup) {
      const pos = players[id]?.position;
      if (pos === "DEF" || pos === "MED" || pos === "AV") count[pos]++;
    }
    return {
      attack: (count.AV - 2) * 1.8 + (count.MED - 4) * 0.8 - (count.DEF - 4) * 0.5,
      defence: (count.DEF - 4) * 1.7 + (count.MED - 4) * 0.6 - (count.AV - 2) * 0.8,
    };
  };
  const hMissing = Math.max(0, 11 - homeLineup.length);
  const aMissing = Math.max(0, 11 - awayLineup.length);
  const hRating = teamRating({ ...home, lineup: homeLineup }, players) - hMissing * 4;
  const aRating = teamRating({ ...away, lineup: awayLineup }, players) - aMissing * 4;
  const hs = shape(homeLineup), as = shape(awayLineup);
  const hAttack = hRating + hs.attack, hDefence = hRating + hs.defence;
  const aAttack = aRating + as.attack, aDefence = aRating + as.defence;
  const duration = end - start + 1;
  return {
    homeGoals: poisson(lambda(hAttack, aDefence, true, duration)),
    awayGoals: poisson(lambda(aAttack, hDefence, false, duration)),
  };
}

function round(n: number, digits = 2) { return Number(n.toFixed(digits)); }

function run(minute: number, dismissals: number, dismissedSide: typeof SIDES[number], homeRating: number, awayRating: number, seed: number) {
  const originalRandom = Math.random;
  Math.random = seededRandom(seed);
  try {
    const players: Record<number, Player> = {};
    const home = makeTeam(1, "Casa", homeRating, players);
    const away = makeTeam(2, "Fora", awayRating, players);
    const h = [...home.lineup], a = [...away.lineup];
    const reducedHome = dismissedSide === "home" ? h.slice(0, 11 - dismissals) : h;
    const reducedAway = dismissedSide === "away" ? a.slice(0, 11 - dismissals) : a;
    let dismissedWins = 0, draws = 0, dismissedLosses = 0;
    let totalGoals = 0, goalsAfter = 0;
    for (let i = 0; i < MATCHES; i++) {
      const firstBefore = simulateInterval(home, away, players, h, a, 1, Math.min(45, minute - 1));
      const secondBefore = minute > 45
        ? simulateInterval(home, away, players, h, a, 46, minute - 1)
        : { homeGoals: 0, awayGoals: 0 };
      const after = minute <= 45
        ? simulateInterval(home, away, players, reducedHome, reducedAway, minute, 45)
        : simulateInterval(home, away, players, reducedHome, reducedAway, minute, 90);
      const secondAfter = minute <= 45
        ? simulateInterval(home, away, players, reducedHome, reducedAway, 46, 90)
        : { homeGoals: 0, awayGoals: 0 };
      const beforeH = firstBefore.homeGoals + secondBefore.homeGoals;
      const beforeA = firstBefore.awayGoals + secondBefore.awayGoals;
      const finalH = beforeH + after.homeGoals + secondAfter.homeGoals;
      const finalA = beforeA + after.awayGoals + secondAfter.awayGoals;
      const dismissedScore = dismissedSide === "home" ? finalH : finalA;
      const opponentScore = dismissedSide === "home" ? finalA : finalH;
      if (dismissedScore > opponentScore) dismissedWins++;
      else if (dismissedScore === opponentScore) draws++;
      else dismissedLosses++;
      totalGoals += finalH + finalA;
      goalsAfter += after.homeGoals + after.awayGoals + secondAfter.homeGoals + secondAfter.awayGoals;
    }
    return {
      minute, dismissals, side: dismissedSide, ratings: `${homeRating}-${awayRating}`,
      win: round(dismissedWins / MATCHES * 100), draw: round(draws / MATCHES * 100),
      loss: round(dismissedLosses / MATCHES * 100),
      goals: round(totalGoals / MATCHES, 3), goalsAfter: round(goalsAfter / MATCHES, 3),
    };
  } finally { Math.random = originalRandom; }
}

console.log("# Fase 3 — Auditoria espelhada de expulsões");
console.log(`Amostra: ${MATCHES.toLocaleString("pt-PT")} jogos por cenário; ${MATCHES * MINUTES.length * DISMISSALS.length * SIDES.length * RATING_PAIRS.length} jogos no total.`);
console.log("Cenários: expulsão da equipa da casa e visitante; ratings 70–70, 77–70 e 70–77; minutos 15, 45 e 75; uma ou duas expulsões.");
console.log("Modelo isolado da fórmula atual de golos, com intervalos 1–45 e 46–90. Não altera o motor nem representa substituições/táticas da partida.");
console.log("");
console.log("| Min. | Expulsões | Expulsa | Ratings casa-fora | Vitória expulsa | Empate | Derrota expulsa | Golos/jogo | Golos após expulsão |");
console.log("|---:|---:|---|---:|---:|---:|---:|---:|---:|");
let index = 0;
for (const [homeRating, awayRating] of RATING_PAIRS) {
  for (const minute of MINUTES) {
    for (const dismissals of DISMISSALS) {
      for (const side of SIDES) {
        const result = run(minute, dismissals, side, homeRating, awayRating, 20261104 + index++ * 70001);
        console.log(`|${result.minute}'|${result.dismissals}|${result.side === "home" ? "Casa" : "Fora"}|${result.ratings}|${result.win}%|${result.draw}%|${result.loss}%|${result.goals}|${result.goalsAfter}|`);
      }
    }
  }
}
