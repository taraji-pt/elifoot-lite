import { GAME_CONFIG } from "@/data/gameConfig";
import { createCup, playCupRound } from "./cup";
import { RESERVE_DIVISION, buildLeagues, seasonLabel, splitByActivity } from "./newGame";
import { bestLineup, teamRating } from "./ratings";
import { shuffle } from "./rng";
import { penaltyShootout, simulateMatch } from "./simulation";
import { transferValueFor } from "./players";
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

function addAppearances(state: GameState, playerIds: number[]) {
  if (!state.appearanceStats) state.appearanceStats = {};
  state.playerClubSeasonStats ??= {};
  for (const id of new Set(playerIds)) {
    state.appearanceStats[id] = (state.appearanceStats[id] ?? 0) + 1;
    const team = Object.values(state.teams).find((candidate) => candidate.playerIds.includes(id));
    if (!team) continue;
    const byClub = state.playerClubSeasonStats[id] ??= {};
    const stats = byClub[team.id] ??= { appearances: 0, goalsLeague: 0, goalsCup: 0, yellowCards: 0, redCards: 0 };
    stats.appearances += 1;
  }
}

function addScorerGoals(state: GameState, scorerIds: number[], competition: "league" | "cup") {
  if (!state.scorerStats) state.scorerStats = {};
  state.playerClubSeasonStats ??= {};
  for (const playerId of scorerIds) {
    const current: GoalStats = state.scorerStats[playerId] ?? { league: 0, cup: 0 };
    current[competition] += 1;
    state.scorerStats[playerId] = current;
    const team = Object.values(state.teams).find((candidate) => candidate.playerIds.includes(playerId));
    if (team) {
      const byClub = state.playerClubSeasonStats[playerId] ??= {};
      const stats = byClub[team.id] ??= { appearances: 0, goalsLeague: 0, goalsCup: 0, yellowCards: 0, redCards: 0 };
      if (competition === "league") stats.goalsLeague += 1;
      else stats.goalsCup += 1;
    }
  }
}

export function recordMatchDiscipline(state: GameState, cards: { playerId: number; type: "yellow" | "red" | "second-yellow" }[]) {
  if (!state.suspensions) state.suspensions = {};
  if (!state.yellowCards) state.yellowCards = {};

  for (const card of cards) {
    const club = Object.values(state.teams).find((candidate) => candidate.playerIds.includes(card.playerId));
    if (club) {
      state.playerClubSeasonStats ??= {};
      const byClub = state.playerClubSeasonStats[card.playerId] ??= {};
      const stats = byClub[club.id] ??= { appearances: 0, goalsLeague: 0, goalsCup: 0, yellowCards: 0, redCards: 0 };
      if (card.type === "yellow" || card.type === "second-yellow") stats.yellowCards = (stats.yellowCards ?? 0) + 1;
      if (card.type === "red" || card.type === "second-yellow") stats.redCards = (stats.redCards ?? 0) + 1;
    }
    let suspended = false;

    if (card.type === "red" || card.type === "second-yellow") {
      // O valor 2 faz com que a preparação do próximo jogo consuma 1,
      // deixando o jogador efetivamente de fora desse jogo.
      state.suspensions[card.playerId] = card.type === "red" ? 2 : 1;
      suspended = true;
    }
    if (card.type === "yellow" || card.type === "second-yellow") {
      const next = (state.yellowCards[card.playerId] ?? 0) + 1;
      if (next >= 5) {
        state.yellowCards[card.playerId] = 0;
        // 5 amarelos = 1 jogo de suspensão.
        // A suspensão é atribuída no fim do jogo e consumida na preparação do jogo seguinte.
        state.suspensions[card.playerId] = Math.max(state.suspensions[card.playerId] ?? 0, 1);
        suspended = true;
      } else {
        state.yellowCards[card.playerId] = next;
      }
    }

    // Se for o nosso jogador, retira-o do onze guardado para podermos
    // escolher imediatamente um substituto para o próximo jogo.
    if (suspended && state.userTeamId) {
      const team = state.teams[state.userTeamId];
      if (team) {
        // Retira o suspenso do onze e coloca automaticamente o melhor
        // substituto disponível, para o plantel continuar com 11 titulares.
        team.lineup = team.lineup.filter((id) => id !== card.playerId);
        const suspendedPlayer = state.players[card.playerId];
        const available = team.playerIds
          .filter((id) => (state.suspensions?.[id] ?? 0) <= 0 && !team.lineup.includes(id) && state.players[id]?.position === suspendedPlayer?.position)
          .sort((a, b) => (state.players[b]?.rating ?? 0) - (state.players[a]?.rating ?? 0));
        if (team.lineup.length < 11 && available.length > 0) {
          team.lineup.push(available[0]);
        }
      }
    }
  }
}


export function prepareTeamForMatch(state: GameState, team: Team, preserveSelectedLineup = false): number[] {
  if (!state.suspensions) state.suspensions = {};
  const formation = team.lineupFormation ?? {
    DEF: GAME_CONFIG.startingLineup.DEF,
    MED: GAME_CONFIG.startingLineup.MED,
    AV: GAME_CONFIG.startingLineup.AV,
  };
  // Primeiro excluímos os suspensos; só depois consumimos a jornada de suspensão.
  const availableIds = team.playerIds.filter((id) => (state.suspensions?.[id] ?? 0) <= 0);
  const candidateLineup = team.lineup.filter((id) => availableIds.includes(id));
  const counts: Record<string, number> = { GR: 0, DEF: 0, MED: 0, AV: 0 };
  for (const id of candidateLineup) {
    const position = state.players[id]?.position;
    if (position) counts[position] = (counts[position] ?? 0) + 1;
  }
  const required = { GR: 1, DEF: formation.DEF, MED: formation.MED, AV: formation.AV };
  const valid = candidateLineup.length === 11 &&
    (["GR", "DEF", "MED", "AV"] as const).every((position) => counts[position] === required[position]);
  team.lineup = preserveSelectedLineup ? candidateLineup : valid ? candidateLineup : bestLineup(availableIds, state.players, formation);
  for (const id of team.playerIds) {
    const remaining = state.suspensions[id] ?? 0;
    if (remaining > 0) state.suspensions[id] = remaining - 1;
  }
  return [...team.lineup];
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
      fixture.appearanceIds = [...homeLineup, ...awayLineup];
      addAppearances(state, fixture.appearanceIds);
      fixture.redCardIds = result.cards.filter((c) => c.type === "red").map((c) => c.playerId);
      addScorerGoals(state, fixture.scorerIds, "league");
      recordMatchDiscipline(state, result.cards.map((c) => ({ playerId: c.playerId, type: c.type })));
    }
  }
}

export function recordUserResult(state: GameState, homeGoals: number, awayGoals: number, scorerIds: number[] = [], appearanceIds: number[] = []) {
  const fixture = userFixture(state);
  if (fixture) {
    fixture.homeGoals = homeGoals;
    fixture.awayGoals = awayGoals;
    fixture.scorerIds = [...scorerIds];
    fixture.appearanceIds = [...new Set(appearanceIds)];
    addAppearances(state, fixture.appearanceIds);
    addScorerGoals(state, scorerIds, "league");
  }
}

export function recordUserCupResult(
  state: GameState,
  homeGoals: number,
  awayGoals: number,
  penaltyWinnerId?: number,
  scorerIds: number[] = [],
  appearanceIds: number[] = [],
) {
  const tie = userCupTie(state);
  if (!tie) return;
  tie.homeGoals = homeGoals;
  tie.awayGoals = awayGoals;
  tie.scorerIds = [...scorerIds];
  tie.appearanceIds = [...new Set(appearanceIds)];
  addAppearances(state, tie.appearanceIds);
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
      if (!userTie && tie.appearanceIds?.length) addAppearances(state, tie.appearanceIds);
      if (tie.yellowCardIds?.length) {
        recordMatchDiscipline(state, tie.yellowCardIds.map((playerId) => ({ playerId, type: "yellow" as const })));
      }
      if (tie.redCardIds?.length) {
        recordMatchDiscipline(state, tie.redCardIds.filter((playerId) => !(tie.secondYellowCardIds ?? []).includes(playerId)).map((playerId) => ({ playerId, type: "red" as const })));
      }
      if (tie.secondYellowCardIds?.length) {
        recordMatchDiscipline(state, tie.secondYellowCardIds.map((playerId) => ({ playerId, type: "second-yellow" as const })));
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

  const climbers = shuffle(reserveTeams(state)).slice(0, relegationSpots);
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
    playerDevelopment: [],
  };

  const teamByPlayer = new Map<number, Team>();
  for (const team of Object.values(state.teams)) for (const playerId of team.playerIds) teamByPlayer.set(playerId, team);
  const championId = computeStandings(state.leagues[1] ?? [], divisionTeamIds(state, 1))[0]?.teamId;
  state.seasonReview.playerDevelopment = Object.entries(state.appearanceStats ?? {}).flatMap(([id, appearances]) => {
    const playerId = Number(id);
    const player = state.players[playerId];
    const team = teamByPlayer.get(playerId);
    if (!player || !team || appearances <= 0) return [];
    const leagueMatches = Object.values(state.leagues).flat().filter((round) => round.some((fixture) => (fixture.homeId === team.id || fixture.awayId === team.id) && fixture.homeGoals !== null)).length;
    const cupMatches = state.cup.rounds.reduce((total, round) => total + round.ties.filter((tie) => (tie.homeId === team.id || tie.awayId === team.id) && tie.homeGoals !== null).length, 0);
    const matchesPlayed = leagueMatches + cupMatches;
    if (matchesPlayed === 0) return [];
    const participation = appearances / matchesPlayed;
    const goals = (state.scorerStats?.[playerId]?.league ?? 0) + (state.scorerStats?.[playerId]?.cup ?? 0);
    // Presenças são relativas aos jogos efectivamente disputados pelo clube:
    // titular ou suplente utilizado conta uma presença, sem duplicar por jogo.
    let change = participation >= 0.75 ? 1 : participation >= 0.4 ? 0 : -1;
    const goalThreshold = player.position === "AV" ? 10 : player.position === "MED" ? 6 : player.position === "DEF" ? 3 : Infinity;
    if (goals >= goalThreshold) change += 1;
    if (promoted.includes(team.id) || championId === team.id || state.cup.winnerId === team.id) change += 1;
    if (relegatedDown.includes(team.id) || droppedOut.includes(team.id)) change -= 1;
    change = Math.max(-2, Math.min(3, change));
    const newRating = Math.max(GAME_CONFIG.minPlayerRating, Math.min(GAME_CONFIG.maxPlayerRating, player.rating + change));
    return [{ playerId, previousRating: player.rating, newRating, change: newRating - player.rating, appearances, matchesPlayed, goals }];
  }).filter((item) => item.change !== 0);
}

/** Fecha a época terminada depois de o utilizador consultar a classificação, calendário e Taça. */
export function continueAfterSeasonReview(state: GameState) {
  const review = state.seasonReview;
  if (!review) return;

  const { numberOfDivisions: N } = GAME_CONFIG;

  for (const development of review.playerDevelopment ?? []) {
    const player = state.players[development.playerId];
    if (!player) continue;
    player.rating = development.newRating;
    player.transferValue = transferValueFor(player.rating);
  }

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

  // Uma linha por clube, para não atribuir ao último clube os golos feitos antes de uma transferência.
  state.playerSeasonHistory ??= {};
  for (const player of Object.values(state.players)) {
    const byClub = state.playerClubSeasonStats?.[player.id] ?? {};
    const clubEntries = Object.entries(byClub);
    const fallbackTeam = Object.values(state.teams).find((candidate) => candidate.playerIds.includes(player.id));
    const entries: [string, { appearances: number; goalsLeague: number; goalsCup: number }][] = clubEntries.length
      ? clubEntries
      : fallbackTeam
        ? [[String(fallbackTeam.id), {
            appearances: state.appearanceStats?.[player.id] ?? 0,
            goalsLeague: state.scorerStats?.[player.id]?.league ?? 0,
            goalsCup: state.scorerStats?.[player.id]?.cup ?? 0,
            yellowCards: 0,
            redCards: 0,
          }]]
        : [];
    for (const [teamId, stats] of entries) {
      const club = state.teams[Number(teamId)];
      const records = state.playerSeasonHistory[player.id] ?? [];
      records.push({
        season: review.season,
        teamId: Number(teamId),
        teamName: club?.name ?? "Clube desconhecido",
        appearances: stats.appearances,
        goalsLeague: stats.goalsLeague,
        goalsCup: stats.goalsCup,
        yellowCards: stats.yellowCards ?? 0,
        redCards: stats.redCards ?? 0,
        rating: player.rating,
      });
      state.playerSeasonHistory[player.id] = records;
    }
  }

  state.seasonYear += 1;
  state.round = 1;
  state.scorerStats = {};
  state.appearanceStats = {};
  state.playerClubSeasonStats = {};
  state.yellowCards = {};
  // As suspensões disciplinares não transitam para a nova época.
  state.suspensions = {};
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
