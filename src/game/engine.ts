import { GAME_CONFIG } from "@/data/gameConfig";
import { createCup, playCupRound } from "./cup";
import { RESERVE_DIVISION, buildLeagues, seasonLabel, splitByActivity } from "./newGame";
import { bestLineup, teamRating } from "./ratings";
import { shuffle } from "./rng";
import { penaltyShootout, simulateMatch } from "./simulation";
import { computeStandings } from "./standings";
import type { Fixture, GameState, GoalStats, Player, Team } from "./types";

export function divisionTeamIds(state: GameState, division: number): number[] {
  return Object.values(state.teams)
    .filter((t) => t.division === division)
    .map((t) => t.id);
}

export function totalRounds(state: GameState): number {
  const lengths = Object.values(state.leagues).map((r) => r.length);
  return lengths.length ? Math.max(...lengths) : 0;
}

export function userTeam(state: GameState): Team {
  return state.teams[state.userTeamId] as Team;
}

function addScorerGoals(state: GameState, scorerIds: number[], competition: "league" | "cup") {
  if (!state.scorerStats) state.scorerStats = {};
  for (const playerId of scorerIds) {
    const current: GoalStats = state.scorerStats[playerId] ?? { league: 0, cup: 0 };
    current[competition] += 1;
    state.scorerStats[playerId] = current;
  }
}

function addMatchDiscipline(state: GameState, cards: { playerId: number; type: "yellow" | "red" }[]) {
  if (!state.suspensions) state.suspensions = {};
  if (!state.yellowCards) state.yellowCards = {};

  for (const card of cards) {
    if (card.type === "red") {
      // O valor 2 faz com que a preparação do próximo jogo consuma 1,
      // deixando o jogador efetivamente de fora desse jogo.
      state.suspensions[card.playerId] = 2;
      continue;
    }

    const next = (state.yellowCards[card.playerId] ?? 0) + 1;
    if (next >= 5) {
      state.yellowCards[card.playerId] = 0;
      state.suspensions[card.playerId] = Math.max(state.suspensions[card.playerId] ?? 0, 2);
    } else {
      state.yellowCards[card.playerId] = next;
    }
  }
}

function addRedCardSuspensions(state: GameState, playerIds: number[]) {
  addMatchDiscipline(state, playerIds.map((playerId) => ({ playerId, type: "red" as const })));
}

export function prepareTeamForMatch(state: GameState, team: Team): number[] {
  if (!state.suspensions) state.suspensions = {};
  for (const id of team.playerIds) {
    const remaining = state.suspensions[id] ?? 0;
    if (remaining > 0) state.suspensions[id] = remaining - 1;
  }
  return team.lineup.filter((id) => (state.suspensions?.[id] ?? 0) <= 0);
}

export function availableLineup(state: GameState, team: Team): number[] {
  const suspended = new Set(Object.keys(state.suspensions ?? {}).filter((id) => (state.suspensions?.[Number(id)] ?? 0) > 0).map(Number));
  return team.lineup.filter((id) => !suspended.has(id));
}


export function userFixture(state: GameState): Fixture | null {
  const team = userTeam(state);
  const rounds = state.leagues[team.division];
  const round = rounds?.[state.round - 1];
  if (!round) return null;
  return round.find((f) => f.homeId === team.id || f.awayId === team.id) ?? null;
}

/** Eliminatória da Taça atual que envolve o clube do utilizador, se existir. */
export function userCupTie(state: GameState) {
  const round = state.cup.rounds[state.cup.currentRound];
  if (!round) return null;
  return round.ties.find((tie) =>
    (tie.homeId === state.userTeamId || tie.awayId === state.userTeamId) &&
    tie.winnerId === null
  ) ?? null;
}

/** Simula todos os jogos da jornada atual, exceto o do utilizador se já registado. */
function simulateRound(state: GameState) {
  for (const divKey of Object.keys(state.leagues)) {
    const division = Number(divKey);
    const round = state.leagues[division]?.[state.round - 1];
    if (!round) continue;
    for (const fixture of round) {
      if (fixture.homeGoals !== null) continue;
      const home = state.teams[fixture.homeId];
      const away = state.teams[fixture.awayId];
      if (!home || !away) continue;
      const homeLineup = prepareTeamForMatch(state, home);
      const awayLineup = prepareTeamForMatch(state, away);
      const result = simulateMatch(home, away, state.players, homeLineup, awayLineup);
      fixture.homeGoals = result.homeGoals;
      fixture.awayGoals = result.awayGoals;
      fixture.scorerIds = result.scorers.map((s) => s.playerId);
      fixture.redCardIds = result.cards.filter((c) => c.type === "red").map((c) => c.playerId);
      addScorerGoals(state, fixture.scorerIds, "league");
      addMatchDiscipline(state, result.cards.map((c) => ({ playerId: c.playerId, type: c.type })));
    }
  }
}

export function recordUserResult(state: GameState, homeGoals: number, awayGoals: number, scorerIds: number[] = []) {
  const fixture = userFixture(state);
  if (fixture) {
    fixture.homeGoals = homeGoals;
    fixture.awayGoals = awayGoals;
    fixture.scorerIds = [...scorerIds];
    addScorerGoals(state, scorerIds, "league");
  }
}

export function recordUserCupResult(
  state: GameState,
  homeGoals: number,
  awayGoals: number,
  penaltyWinnerId?: number,
  scorerIds: number[] = [],
) {
  const tie = userCupTie(state);
  if (!tie) return;
  tie.homeGoals = homeGoals;
  tie.awayGoals = awayGoals;
  tie.scorerIds = [...scorerIds];
  addScorerGoals(state, scorerIds, "cup");

  if (homeGoals > awayGoals) {
    tie.winnerId = tie.homeId;
    tie.penalties = false;
  } else if (awayGoals > homeGoals) {
    tie.winnerId = tie.awayId;
    tie.penalties = false;
  } else if (penaltyWinnerId !== undefined) {
    tie.winnerId = penaltyWinnerId;
    tie.penalties = true;
  }
}

export function dismissCelebration(state: GameState) {
  state.celebration = null;
}

/** Avança a jornada: simula a Liga e, nas jornadas de Taça, abre primeiro o jogo do utilizador. */
export function advanceRound(state: GameState) {
  simulateRound(state);

  if ((GAME_CONFIG.cupRounds as readonly number[]).includes(state.round)) {
    const pendingCupTie = userCupTie(state);
    if (pendingCupTie) {
      state.match = null;
      return;
    }
    const cupRoundIndex = state.cup.currentRound;
    state.cup = playCupRound(state.cup, state.teams, state.players, state.suspensions ?? {});
    const playedCupRound = state.cup.rounds[cupRoundIndex];
    for (const tie of playedCupRound?.ties ?? []) {
      const userTie = tie.homeId === state.userTeamId || tie.awayId === state.userTeamId;
      if (!userTie && tie.scorerIds?.length) addScorerGoals(state, tie.scorerIds, "cup");
      if (tie.yellowCardIds?.length) {
        addMatchDiscipline(state, tie.yellowCardIds.map((playerId) => ({ playerId, type: "yellow" as const })));
      }
      if (tie.redCardIds?.length) {
        addMatchDiscipline(state, tie.redCardIds.map((playerId) => ({ playerId, type: "red" as const })));
      }
    }
    if (state.cup.winnerId === state.userTeamId) {
      const season = seasonLabel(state.seasonYear);
      state.celebration = {
        type: "cup",
        season,
        teamId: state.userTeamId,
      };
    }
  }

  if (state.round >= totalRounds(state)) {
    endSeason(state);
  } else {
    state.round += 1;
  }
  state.match = null;
  state.bids = generateBids(state);
}

/* ------------------ PROPOSTAS PELOS TEUS JOGADORES ------------------ */

function generateBids(state: GameState) {
  const team = userTeam(state);
  if (team.playerIds.length <= 12 || Math.random() > 0.4) return [];
  const pid = shuffle(team.playerIds)[0] as number;
  const player = state.players[pid];
  if (!player) return [];
  const amount = Math.round((player.transferValue * (0.9 + Math.random() * 0.5)) / 10000) * 10000;
  const buyers = Object.values(state.teams).filter(
    (t) => t.id !== team.id && t.budget >= amount,
  );
  const buyer = shuffle(buyers)[0];
  return buyer ? [{ playerId: pid, teamId: buyer.id, amount }] : [];
}

export function acceptBid(state: GameState, playerId: number): string {
  const bid = state.bids?.find((b) => b.playerId === playerId);
  const team = userTeam(state);
  const buyer = bid ? state.teams[bid.teamId] : undefined;
  const player = state.players[playerId];
  if (!bid || !buyer || !player) return "Proposta já não está disponível.";
  if (team.playerIds.length <= 12) return "Plantel demasiado pequeno para vender.";
  team.playerIds = team.playerIds.filter((id) => id !== playerId);
  team.lineup = team.lineup.filter((id) => id !== playerId);
  if (team.lineup.length < 11) team.lineup = bestLineup(team.playerIds, state.players);
  team.budget += bid.amount;
  buyer.budget -= bid.amount;
  buyer.playerIds = [...buyer.playerIds, playerId];
  buyer.lineup = bestLineup(buyer.playerIds, state.players);
  state.bids = (state.bids ?? []).filter((b) => b.playerId !== playerId);
  return `${player.name} vendido ao ${buyer.name} por €${bid.amount.toLocaleString("pt-PT")}.`;
}

export function rejectBid(state: GameState, playerId: number): string {
  state.bids = (state.bids ?? []).filter((b) => b.playerId !== playerId);
  return "Proposta recusada.";
}

type Outcome = "promoted" | "stayed" | "relegated" | "out";

/** Clubes fora das divisões (Reserva). */
export function reserveTeams(state: GameState): Team[] {
  return Object.values(state.teams).filter((t) => t.division === RESERVE_DIVISION);
}

function strength(state: GameState, team: Team): number {
  return teamRating(team, state.players);
}

/** Propostas de outros clubes para treinar na época seguinte. */
function generateOffers(state: GameState, userDivision: number, outcome: Outcome): number[] {
  const N = GAME_CONFIG.numberOfDivisions;
  const targets: number[] = [];
  if (outcome === "out") targets.push(N, Math.max(1, N - 1));
  else if (outcome === "promoted") targets.push(Math.max(1, userDivision - 1), userDivision);
  else if (outcome === "relegated") targets.push(userDivision, Math.min(N, userDivision + 1));
  else targets.push(userDivision);

  const candidates = Object.values(state.teams)
    .filter((t) => t.id !== state.userTeamId && targets.includes(t.division))
    .map((t) => t.id);
  const count = outcome === "stayed" ? 2 : 3;
  return shuffle(candidates).slice(0, count);
}

function endSeason(state: GameState) {
  const { numberOfDivisions: N, promotionSpots, relegationSpots } = GAME_CONFIG;

  // Garante que a Taça está concluída antes de apresentar o balanço final.
  let guard = 0;
  while (state.cup.winnerId === null && guard++ < 12) {
    state.cup = playCupRound(state.cup, state.teams, state.players);
  }

  const promoted: number[] = [];
  const relegatedDown: number[] = [];
  const bottomOfLast: number[] = [];
  let userInfo: { division: number; position: number; points: number; up: boolean; down: boolean } | null = null;

  for (let d = 1; d <= N; d++) {
    const ids = divisionTeamIds(state, d);
    const rows = computeStandings(state.leagues[d] ?? [], ids);
    rows.forEach((row, index) => {
      const position = index + 1;
      const up = d > 1 && position <= promotionSpots;
      const down = position > rows.length - relegationSpots;
      if (up) promoted.push(row.teamId);
      if (down) (d < N ? relegatedDown : bottomOfLast).push(row.teamId);
      if (row.teamId === state.userTeamId) {
        userInfo = { division: d, position, points: row.points, up, down };
      }
    });
  }

  const climbers = reserveTeams(state)
    .sort((a, b) => strength(state, b) - strength(state, a))
    .slice(0, relegationSpots);
  const droppedOut = bottomOfLast.slice(Math.max(0, bottomOfLast.length - climbers.length));

  const info = userInfo as { division: number; position: number; points: number; up: boolean; down: boolean } | null;
  if (!info) return;

  let outcome: Outcome = "stayed";
  if (info.up) outcome = "promoted";
  else if (info.down && info.division < N) outcome = "relegated";
  else if (info.down && droppedOut.includes(state.userTeamId)) outcome = "out";

  const leagueChampion = info.division === 1 && info.position === 1;
  const cupWinner = state.cup.winnerId === state.userTeamId;
  if (leagueChampion || cupWinner || outcome === "promoted") {
    state.celebration = {
      type: leagueChampion && cupWinner ? "double" : leagueChampion ? "league" : cupWinner ? "cup" : "promotion",
      season: seasonLabel(state.seasonYear),
      teamId: state.userTeamId,
    };
  }

  state.seasonReview = {
    season: seasonLabel(state.seasonYear),
    userDivision: info.division,
    userPosition: info.position,
    userPoints: info.points,
    cupWinnerId: state.cup.winnerId,
    promoted,
    relegatedDown,
    droppedOut,
    climbers: climbers.slice(0, droppedOut.length).map((t) => t.id),
    outcome,
    scorers: Object.fromEntries(
      Object.entries(state.scorerStats ?? {}).map(([id, stats]) => [id, { ...stats }]),
    ),
  };
}

/** Fecha a época terminada depois de o utilizador consultar a classificação, calendário e Taça. */
export function continueAfterSeasonReview(state: GameState) {
  const review = state.seasonReview;
  if (!review) return;

  const { numberOfDivisions: N } = GAME_CONFIG;

  for (const id of review.promoted) {
    const team = state.teams[id];
    if (team) team.division = Math.max(1, team.division - 1);
  }
  for (const id of review.relegatedDown) {
    const team = state.teams[id];
    if (team) team.division = Math.min(N, team.division + 1);
  }
  for (const id of review.droppedOut) {
    const team = state.teams[id];
    if (team) team.division = RESERVE_DIVISION;
  }
  for (const id of review.climbers) {
    const team = state.teams[id];
    if (team) team.division = N;
  }

  const leagueChampion = review.userDivision === 1 && review.userPosition === 1;
  const cupWinner = review.cupWinnerId === state.userTeamId;
  const note =
    leagueChampion
      ? cupWinner
        ? "Campeão! Venceu a Taça!"
        : "Campeão!"
      : review.outcome === "promoted"
        ? "Subiu de divisão!"
        : review.outcome === "relegated"
          ? "Desceu de divisão."
          : review.outcome === "out"
            ? "Caiu fora das divisões!"
            : cupWinner
              ? "Manteve a divisão. Venceu a Taça!"
              : "Manteve a divisão.";

  state.history = [
    ...state.history,
    {
      season: review.season,
      clubId: state.userTeamId,
      club: state.teams[state.userTeamId]?.name ?? "—",
      division: review.userDivision,
      position: review.userPosition,
      points: review.userPoints,
      note,
      leagueChampion,
      cupWinner,
      promoted: review.outcome === "promoted",
    },
  ];

  state.seasonYear += 1;
  state.round = 1;
  state.scorerStats = {};
  state.leagues = buildLeagues(state.teams);
  const { active, reserve } = splitByActivity(state.teams);
  state.cup = createCup(active, reserve, state.userTeamId);
  const userDivision = state.teams[state.userTeamId]?.division ?? N;
  state.offers = generateOffers(state, userDivision || N, review.outcome);
  state.offersMandatory = review.outcome === "out";
  state.careerOver = review.outcome === "out" && state.offers.length === 0;
  state.seasonReview = null;
}

/** Aceita uma proposta: passas a treinar outro clube. */
/** Aceita uma proposta: passas a treinar outro clube. */
export function acceptOffer(state: GameState, teamId: number): string {
  const team = state.teams[teamId];
  if (!team) return "Clube não encontrado.";
  state.userTeamId = teamId;
  state.offers = [];
  state.offersMandatory = false;
  return `És o novo treinador do ${team.name}.`;
}

export function declineOffers(state: GameState): string {
  if (state.offersMandatory) return "Sem clube nas divisões: tens de aceitar uma proposta.";
  state.offers = [];
  return `Continuas no ${state.teams[state.userTeamId]?.name ?? "teu clube"}.`;
}

/* ------------------------- TRANSFERÊNCIAS ------------------------- */

export function marketPlayers(state: GameState): { player: Player; teamId: number | null }[] {
  const list: { player: Player; teamId: number | null }[] = [];
  for (const id of state.freeAgents) {
    const player = state.players[id];
    if (player) list.push({ player, teamId: null });
  }
  for (const team of Object.values(state.teams)) {
    if (team.id === state.userTeamId) continue;
    for (const pid of team.playerIds) {
      const player = state.players[pid];
      if (player) list.push({ player, teamId: team.id });
    }
  }
  return list;
}

export function buyPlayer(state: GameState, playerId: number): string {
  const team = userTeam(state);
  const player = state.players[playerId];
  if (!player) return "Jogador não encontrado.";
  if (team.budget < player.transferValue) return "Orçamento insuficiente.";

  const seller = Object.values(state.teams).find((t) => t.playerIds.includes(playerId));
  if (seller) {
    if (seller.playerIds.length <= 12) return `${seller.name} não pode vender mais jogadores.`;
    seller.playerIds = seller.playerIds.filter((id) => id !== playerId);
    seller.lineup = bestLineup(seller.playerIds, state.players);
    seller.budget += player.transferValue;
  } else {
    state.freeAgents = state.freeAgents.filter((id) => id !== playerId);
  }

  team.budget -= player.transferValue;
  team.playerIds = [...team.playerIds, playerId];
  return `${player.name} contratado por €${player.transferValue.toLocaleString("pt-PT")}.`;
}

export function sellPlayer(state: GameState, playerId: number): string {
  const team = userTeam(state);
  const player = state.players[playerId];
  if (!player) return "Jogador não encontrado.";
  if (team.playerIds.length <= 12) return "Plantel demasiado pequeno para vender.";

  team.playerIds = team.playerIds.filter((id) => id !== playerId);
  team.lineup = team.lineup.filter((id) => id !== playerId);
  if (team.lineup.length < 11) team.lineup = bestLineup(team.playerIds, state.players);
  team.budget += player.transferValue;
  state.freeAgents = [...state.freeAgents, playerId];
  return `${player.name} vendido por €${player.transferValue.toLocaleString("pt-PT")}.`;
}
