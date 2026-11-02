import { simulateHalf } from "@/game/simulation";
import type { Player, Team } from "@/game/types";

type Scenario = {
  name: string;
  homeRating: number;
  awayRating: number;
  awayPlayers: number;
};

type Metrics = {
  matches: number;
  avgGoals: number;
  avgHomeGoals: number;
  avgAwayGoals: number;
  homeWinsPct: number;
  drawsPct: number;
  awayWinsPct: number;
  avgCards: number;
  avgDismissals: number;
  matchesWithDismissalPct: number;
};

const MATCHES_PER_SCENARIO = 10_000;
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

function makeTeam(id: number, name: string, rating: number, players: Record<number, Player>): Team {
  const playerIds: number[] = [];
  for (let index = 0; index < 18; index++) {
    const playerId = id * 100 + index + 1;
    const position = POSITIONS[index % POSITIONS.length]!;
    players[playerId] = {
      id: playerId,
      name: `${name} ${index + 1}`,
      position,
      rating,
      nationality: "PRT",
      transferValue: 0,
    };
    playerIds.push(playerId);
  }
  const lineup = [
    ...playerIds.filter((playerId) => players[playerId]!.position === "GR").slice(0, 1),
    ...playerIds.filter((playerId) => players[playerId]!.position === "DEF").slice(0, 4),
    ...playerIds.filter((playerId) => players[playerId]!.position === "MED").slice(0, 4),
    ...playerIds.filter((playerId) => players[playerId]!.position === "AV").slice(0, 2),
  ];
  return {
    id,
    name,
    country: "PRT",
    division: 1,
    rating,
    badge: "",
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
    budget: 0,
    playerIds,
    lineup,
    lineupFormation: { DEF: 4, MED: 4, AV: 2 },
  };
}

function runScenario(scenario: Scenario, seed: number): Metrics {
  const originalRandom = Math.random;
  Math.random = seededRandom(seed);
  try {
    const players: Record<number, Player> = {};
    const home = makeTeam(1, "Casa", scenario.homeRating, players);
    const away = makeTeam(2, "Fora", scenario.awayRating, players);
    const homeLineup = [...home.lineup];
    const awayLineup = away.lineup.slice(0, scenario.awayPlayers);
    let homeGoalsTotal = 0;
    let awayGoalsTotal = 0;
    let homeWins = 0;
    let draws = 0;
    let awayWins = 0;
    let cardsTotal = 0;
    let dismissalsTotal = 0;
    let matchesWithDismissal = 0;

    for (let match = 0; match < MATCHES_PER_SCENARIO; match++) {
      const first = simulateHalf(home, away, players, homeLineup, awayLineup, 1, 45);
      const firstDismissals = first.cards
        .filter((card) => card.type === "red" || card.type === "second-yellow")
        .map((card) => card.playerId);
      const secondHome = homeLineup.filter((id) => !firstDismissals.includes(id));
      const secondAway = awayLineup.filter((id) => !firstDismissals.includes(id));
      const second = simulateHalf(
        home,
        away,
        players,
        secondHome,
        secondAway,
        46,
        90,
        firstDismissals,
        0,
        0,
        first.cards.filter((card) => card.type === "yellow").map((card) => card.playerId),
      );
      const homeGoals = first.homeGoals + second.homeGoals;
      const awayGoals = first.awayGoals + second.awayGoals;
      const cards = [...first.cards, ...second.cards];
      const dismissals = cards.filter((card) => card.type === "red" || card.type === "second-yellow").length;

      homeGoalsTotal += homeGoals;
      awayGoalsTotal += awayGoals;
      cardsTotal += cards.length;
      dismissalsTotal += dismissals;
      if (dismissals > 0) matchesWithDismissal++;
      if (homeGoals > awayGoals) homeWins++;
      else if (homeGoals === awayGoals) draws++;
      else awayWins++;
    }

    return {
      matches: MATCHES_PER_SCENARIO,
      avgGoals: round((homeGoalsTotal + awayGoalsTotal) / MATCHES_PER_SCENARIO, 3),
      avgHomeGoals: round(homeGoalsTotal / MATCHES_PER_SCENARIO, 3),
      avgAwayGoals: round(awayGoalsTotal / MATCHES_PER_SCENARIO, 3),
      homeWinsPct: percent(homeWins),
      drawsPct: percent(draws),
      awayWinsPct: percent(awayWins),
      avgCards: round(cardsTotal / MATCHES_PER_SCENARIO, 3),
      avgDismissals: round(dismissalsTotal / MATCHES_PER_SCENARIO, 3),
      matchesWithDismissalPct: percent(matchesWithDismissal),
    };
  } finally {
    Math.random = originalRandom;
  }
}

function round(value: number, decimals: number) {
  return Number(value.toFixed(decimals));
}

function percent(value: number) {
  return round((value / MATCHES_PER_SCENARIO) * 100, 2);
}

const scenarios: Scenario[] = [
  { name: "Ratings iguais (70 vs 70)", homeRating: 70, awayRating: 70, awayPlayers: 11 },
  { name: "Pequena vantagem casa (73 vs 70)", homeRating: 73, awayRating: 70, awayPlayers: 11 },
  { name: "Vantagem moderada casa (77 vs 70)", homeRating: 77, awayRating: 70, awayPlayers: 11 },
  { name: "Grande vantagem casa (85 vs 60)", homeRating: 85, awayRating: 60, awayPlayers: 11 },
  { name: "Casa com 11 vs fora com 10", homeRating: 70, awayRating: 70, awayPlayers: 10 },
  { name: "Casa com 11 vs fora com 9", homeRating: 70, awayRating: 70, awayPlayers: 9 },
];

const results = scenarios.map((scenario, index) => ({
  scenario: scenario.name,
  ...runScenario(scenario, 20261102 + index * 100_003),
}));

console.log("# Auditoria estatística do motor — Mini Elifoot");
console.log(`Amostra: ${MATCHES_PER_SCENARIO.toLocaleString("pt-PT")} jogos por cenário (${(MATCHES_PER_SCENARIO * scenarios.length).toLocaleString("pt-PT")} no total).`);
console.log("");
console.log("| Cenário | Golos/jogo | Golos casa | Golos fora | V casa | Empate | V fora | Cartões/jogo | Expulsões/jogo | Jogos c/ expulsão |");
console.log("|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|");
for (const row of results) {
  console.log(`|${row.scenario}|${row.avgGoals}|${row.avgHomeGoals}|${row.avgAwayGoals}|${row.homeWinsPct}%|${row.drawsPct}%|${row.awayWinsPct}%|${row.avgCards}|${row.avgDismissals}|${row.matchesWithDismissalPct}%|`);
}
console.log("");
console.log("Nota: os cenários de 10 e 9 jogadores representam inferioridade numérica desde o início; não simulam uma expulsão ocorrida a meio do jogo. A influência temporal de expulsões durante o jogo fica coberta pela simulação cronológica do motor e deverá ser avaliada numa segunda bateria específica.");
