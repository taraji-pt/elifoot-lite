import { GAME_CONFIG } from "@/data/gameConfig";
import { teamRating } from "@/game/ratings";
import type { Player, Team } from "@/game/types";

const MATCHES = 10_000;
const MINUTES = [15, 30, 45, 60, 75];
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
  let k = 0;
  let product = 1;
  do {
    k++;
    product *= Math.random();
  } while (product > limit);
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

function simulateInterval(
  home: Team, away: Team, players: Record<number, Player>, homeLineup: number[], awayLineup: number[],
  start: number, end: number, homeTactical = 0, awayTactical = 0,
) {
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
  const scale = 0.025;
  const hAttack = hRating + hs.attack + homeTactical * scale;
  const hDefence = hRating + hs.defence - homeTactical * scale;
  const aAttack = aRating + as.attack + awayTactical * scale;
  const aDefence = aRating + as.defence - awayTactical * scale;
  const duration = end - start + 1;
  return {
    homeGoals: poisson(lambda(hAttack, aDefence, true, duration)),
    awayGoals: poisson(lambda(aAttack, hDefence, false, duration)),
  };
}

type Result = { minute: number; dismissals: number; matches: number; avgGoals: number; winPct: number; drawPct: number; lossPct: number; comebackPct: number; recoverOrHoldPct: number; avgGoalsAfter: number };

function run(minute: number, dismissals: number, seed: number): Result {
  const originalRandom = Math.random;
  Math.random = seededRandom(seed);
  try {
    const players: Record<number, Player> = {};
    const home = makeTeam(1, "Casa", 70, players);
    const away = makeTeam(2, "Fora", 70, players);
    const h = [...home.lineup], a = [...away.lineup];
    // Expulsões sempre na equipa visitante; o cenário espelhado será avaliado separadamente.
    const reducedAway = a.slice(0, 11 - dismissals);
    const first = simulateInterval(home, away, players, h, a, 1, minute - 1);
    const afterFirst = simulateInterval(home, away, players, h, reducedAway, minute, 45);
    const halfHome = first.homeGoals + afterFirst.homeGoals;
    const halfAway = first.awayGoals + afterFirst.awayGoals;
    const second = simulateInterval(home, away, players, h, reducedAway, 46, 90);
    const finalHome = halfHome + second.homeGoals;
    const finalAway = halfAway + second.awayGoals;
    // Para avaliar recuperação, considera-se a equipa expulsa (visitante).
    const wasBehind = halfAway < halfHome;
    const tiedAtDismissal = halfAway === halfHome;
    let wins = 0, draws = 0, losses = 0, comebacks = 0, recoverOrHold = 0;
    let goals = 0, goalsAfter = 0;
    for (let i = 0; i < MATCHES; i++) {
      const before = simulateInterval(home, away, players, h, a, 1, minute - 1);
      const after = simulateInterval(home, away, players, h, reducedAway, minute, 45);
      const halfH = before.homeGoals + after.homeGoals;
      const halfA = before.awayGoals + after.awayGoals;
      const rest = simulateInterval(home, away, players, h, reducedAway, 46, 90);
      const fh = halfH + rest.homeGoals, fa = halfA + rest.awayGoals;
      goals += fh + fa;
      goalsAfter += after.homeGoals + after.awayGoals + rest.homeGoals + rest.awayGoals;
      if (fa > fh) { wins++; if (halfA < halfH) comebacks++; }
      else if (fa === fh) { draws++; if (halfA <= halfH) recoverOrHold++; }
      else losses++;
      if (fa > fh || fa === fh) recoverOrHold++;
    }
    return {
      minute, dismissals, matches: MATCHES,
      avgGoals: round(goals / MATCHES, 3),
      winPct: pct(wins), drawPct: pct(draws), lossPct: pct(losses),
      comebackPct: pct(comebacks),
      recoverOrHoldPct: pct(recoverOrHold),
      avgGoalsAfter: round(goalsAfter / MATCHES, 3),
    };
  } finally { Math.random = originalRandom; }
}

function round(n: number, digits: number) { return Number(n.toFixed(digits)); }
function pct(n: number) { return round(n / MATCHES * 100, 2); }

console.log("# Fase 3 — Bateria de expulsões a meio do jogo");
console.log(`Amostra: ${MATCHES.toLocaleString("pt-PT")} jogos por cenário. Expulsões visitantes; ratings 70–70.`);
console.log("Modelo: reprodução isolada da fórmula de golos atual, segmentada no minuto da expulsão; não altera nem importa efeitos secundários do jogo.");
console.log("");
console.log("| Minuto | Expulsões | Golos/jogo | Vitória expulsa | Empate | Derrota expulsa | Recupera se perdia | Não perde | Golos após expulsão |");
console.log("|---:|---:|---:|---:|---:|---:|---:|---:|---:|");
let index = 0;
for (const minute of MINUTES) {
  for (const dismissals of [1, 2]) {
    const result = run(minute, dismissals, 20261103 + index++ * 70001);
    console.log(`|${result.minute}'|${result.dismissals}|${result.avgGoals}|${result.winPct}%|${result.drawPct}%|${result.lossPct}%|${result.comebackPct}%|${result.recoverOrHoldPct}%|${result.avgGoalsAfter}|`);
  }
}
console.log("");
console.log("Nota metodológica: a equipa visitante sofre a expulsão; os resultados não devem ser comparados diretamente com jogos 11v11 sem controlar a vantagem caseira. A coluna 'recupera se perdia' mede vitórias finais após estar em desvantagem ao intervalo (proxy conservadora, não o marcador exato no minuto da expulsão).");
