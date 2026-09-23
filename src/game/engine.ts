import { GAME_CONFIG } from "@/data/gameConfig";
import { playCupRound } from "./cup";
import { buildLeagues, seasonLabel } from "./newGame";
import { bestLineup } from "./ratings";
import { simulateMatch } from "./simulation";
import { computeStandings } from "./standings";
import type { Fixture, GameState, Player, SeasonSummary, Team } from "./types";

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

export function userFixture(state: GameState): Fixture | null {
  const team = userTeam(state);
  const rounds = state.leagues[team.division];
  const round = rounds?.[state.round - 1];
  if (!round) return null;
  return round.find((f) => f.homeId === team.id || f.awayId === team.id) ?? null;
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
      const result = simulateMatch(home, away, state.players);
      fixture.homeGoals = result.homeGoals;
      fixture.awayGoals = result.awayGoals;
    }
  }
}

export function recordUserResult(state: GameState, homeGoals: number, awayGoals: number) {
  const fixture = userFixture(state);
  if (fixture) {
    fixture.homeGoals = homeGoals;
    fixture.awayGoals = awayGoals;
  }
}

/** Avança a jornada: simula o resto dos jogos, Taça e, se for o caso, fim de época. */
export function advanceRound(state: GameState) {
  simulateRound(state);
  if ((GAME_CONFIG.cupRounds as readonly number[]).includes(state.round)) {
    state.cup = playCupRound(state.cup, state.teams, state.players);
  }
  if (state.round >= totalRounds(state)) {
    endSeason(state);
  } else {
    state.round += 1;
  }
  state.match = null;
}

function endSeason(state: GameState) {
  const { numberOfDivisions, promotionSpots, relegationSpots } = GAME_CONFIG;

  // Taça: concluir eliminatórias que faltem
  let guard = 0;
  while (state.cup.winnerId === null && guard++ < 10) {
    state.cup = playCupRound(state.cup, state.teams, state.players);
  }

  const promoted: number[] = [];
  const relegated: number[] = [];
  const summary: SeasonSummary[] = [];

  for (let d = 1; d <= numberOfDivisions; d++) {
    const ids = divisionTeamIds(state, d);
    const rows = computeStandings(state.leagues[d] ?? [], ids);
    rows.forEach((row, index) => {
      const position = index + 1;
      if (d > 1 && position <= promotionSpots) promoted.push(row.teamId);
      if (d < numberOfDivisions && position > rows.length - relegationSpots) relegated.push(row.teamId);
      if (row.teamId === state.userTeamId) {
        const note =
          d > 1 && position <= promotionSpots
            ? "Subiu de divisão!"
            : d < numberOfDivisions && position > rows.length - relegationSpots
              ? "Desceu de divisão."
              : "Manteve a divisão.";
        summary.push({
          season: seasonLabel(state.seasonYear),
          division: d,
          position,
          points: row.points,
          note:
            state.cup.winnerId === state.userTeamId ? `${note} Venceu a Taça!` : note,
        });
      }
    });
  }

  for (const id of promoted) {
    const team = state.teams[id];
    if (team) team.division = Math.max(1, team.division - 1);
  }
  for (const id of relegated) {
    const team = state.teams[id];
    if (team) team.division = Math.min(numberOfDivisions, team.division + 1);
  }

  state.history = [...state.history, ...summary];
  state.seasonYear += 1;
  state.round = 1;
  state.leagues = buildLeagues(state.teams);
  state.cup = { rounds: [], currentRound: 0, winnerId: null };
  const { createCup } = require("./cup") as { createCup: typeof import("./cup").createCup };
  state.cup = createCup(Object.keys(state.teams).map(Number));
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
