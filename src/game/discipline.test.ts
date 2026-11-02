import { describe, expect, test } from "bun:test";
import { recordMatchDiscipline, prepareTeamForMatch } from "./engine";
import { playCupRound } from "./cup";
import type { GameState, Player, Team } from "./types";

function makeSquad(teamId: number, firstPlayerId: number): { team: Team; players: Record<number, Player> } {
  const positions: Player["position"][] = [
    "GR",
    "DEF", "DEF", "DEF", "DEF",
    "MED", "MED", "MED", "MED",
    "AV", "AV",
    "DEF",
  ];
  const players: Record<number, Player> = {};
  const playerIds = positions.map((position, index) => {
    const id = firstPlayerId + index;
    players[id] = {
      id,
      name: `Jogador ${id}`,
      position,
      rating: 60 + index,
      nationality: "POR",
      transferValue: 100000,
    };
    return id;
  });
  const team: Team = {
    id: teamId,
    name: `Equipa ${teamId}`,
    country: "POR",
    division: 1,
    rating: 60,
    badge: "",
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
    budget: 0,
    playerIds,
    lineup: playerIds.slice(0, 11),
  };
  return { team, players };
}

function makeState(team: Team, players: Record<number, Player>): GameState {
  return {
    seasonYear: 2026,
    round: 1,
    userTeamId: team.id,
    offers: [],
    offersMandatory: false,
    careerOver: false,
    teams: { [team.id]: team },
    players,
    freeAgents: [],
    leagues: {},
    cup: { rounds: [], currentRound: 0, winnerId: null },
    match: null,
    scorerStats: {},
    history: [],
    suspensions: {},
    yellowCards: {},
    nextPlayerId: Math.max(...Object.keys(players).map(Number)) + 1,
  };
}

describe("disciplina — regras e suspensões", () => {
  test("cinco amarelos acumulados suspendem por um jogo e reiniciam a contagem", () => {
    const { team, players } = makeSquad(1, 1);
    const state = makeState(team, players);
    const playerId = team.playerIds[1];
    state.yellowCards![playerId] = 4;

    recordMatchDiscipline(state, [{ playerId, type: "yellow" }]);

    expect(state.yellowCards![playerId]).toBe(0);
    expect(state.suspensions![playerId]).toBe(1);
    expect(state.playerClubSeasonStats![playerId][team.id]?.yellowCards).toBe(1);
  });

  test("vermelho direto suspende por dois jogos oficiais", () => {
    const { team, players } = makeSquad(1, 1);
    const state = makeState(team, players);
    const playerId = team.playerIds[1];

    recordMatchDiscipline(state, [{ playerId, type: "red" }]);
    expect(state.suspensions![playerId]).toBe(2);

    prepareTeamForMatch(state, team);
    expect(team.lineup).not.toContain(playerId);
    expect(state.suspensions![playerId]).toBe(1);

    prepareTeamForMatch(state, team);
    expect(team.lineup).not.toContain(playerId);
    expect(state.suspensions![playerId]).toBe(0);

    prepareTeamForMatch(state, team);
    expect(state.suspensions![playerId]).toBe(0);
    // A suspensão terminou: o jogador volta a estar elegível para seleção,
    // mas não é automaticamente recolocado no onze escolhido pelo treinador.
  });

  test("segundo amarelo conta como amarelo e vermelho e suspende por um jogo", () => {
    const { team, players } = makeSquad(1, 1);
    const state = makeState(team, players);
    const playerId = team.playerIds[1];

    recordMatchDiscipline(state, [{ playerId, type: "second-yellow" }]);

    expect(state.suspensions![playerId]).toBe(1);
    expect(state.yellowCards![playerId]).toBe(1);
    expect(state.playerClubSeasonStats![playerId][team.id]).toMatchObject({
      yellowCards: 1,
      redCards: 1,
    });
  });

  test("jogador suspenso não pode integrar o onze e é substituído por jogador elegível", () => {
    const { team, players } = makeSquad(1, 1);
    const state = makeState(team, players);
    const suspendedId = team.lineup[1];
    state.suspensions![suspendedId] = 1;

    const lineup = prepareTeamForMatch(state, team);

    expect(lineup).toHaveLength(11);
    expect(lineup).not.toContain(suspendedId);
    expect(new Set(lineup).size).toBe(11);
  });
});

describe("Taça — elegibilidade e suspensões", () => {
  test("substitui titular suspenso e não o regista como participante", () => {
    const home = makeSquad(1, 1);
    const away = makeSquad(2, 101);
    const players = { ...home.players, ...away.players };
    const suspendedId = home.team.lineup[1];
    const suspensions: Record<number, number> = { [suspendedId]: 1 };
    const cup = {
      rounds: [{
        name: "Final",
        ties: [{
          homeId: home.team.id,
          awayId: away.team.id,
          homeGoals: null,
          awayGoals: null,
          winnerId: null,
        }],
      }],
      currentRound: 0,
      winnerId: null,
    };

    const result = playCupRound(cup, { 1: home.team, 2: away.team }, players, suspensions);
    const tie = result.rounds[0].ties[0];

    expect(tie.appearanceIds).toHaveLength(22);
    expect(tie.appearanceIds).not.toContain(suspendedId);
    expect(suspensions[suspendedId]).toBe(0);
  });
});
