import type React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { GAME_CONFIG } from "@/data/gameConfig";
import type { TeamSeed } from "@/data/schema";
import {
  acceptBid,
  acceptOffer,
  rejectBid,
  advanceRound,
  buyPlayer,
  declineOffers,
  continueAfterSeasonReview,
  recordUserResult,
  recordUserCupResult,
  recordMatchDiscipline,
  dismissCelebration,
  sellPlayer,
  userFixture,
  userCupTie,
  prepareTeamForMatch,
  availableLineup,
} from "@/game/engine";
import { createNewGame } from "@/game/newGame";
import { penaltyShootout, simulateHalf } from "@/game/simulation";
import { clearSave, hasSave, loadGame, saveGame } from "@/game/storage";
import type { GameState, Team } from "@/game/types";

interface GameContextValue {
  ready: boolean;
  state: GameState | null;
  saveExists: boolean;
  message: string | null;
  setMessage: (m: string | null) => void;
  newGame: (teamId: number, seeds: TeamSeed[], careerImage?: string | null, seasonYear?: number) => void;
  takeOffer: (teamId: number) => void;
  rejectOffers: () => void;
  takeBid: (playerId: number) => void;
  refuseBid: (playerId: number) => void;
  save: () => void;
  setCareerImage: (image: string | null) => void;
  load: () => void;
  deleteSave: () => void;
  setLineup: (lineup: number[], formation?: { DEF: number; MED: number; AV: number }) => void;
  buy: (playerId: number) => void;
  sell: (playerId: number) => void;
  startMatch: () => void;
  simulateMatch: () => void;
  substitute: (outId: number, inId: number) => void;
  setTacticalIntent: (value: number) => void;
  playSecondHalf: () => void;
  finishMatch: () => void;
  dismissCelebration: () => void;
  continueSeason: () => void;
}

const g = globalThis as { __gameCtx?: React.Context<GameContextValue | null> };
const GameContext = (g.__gameCtx ??= createContext<GameContextValue | null>(null));

const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

function deriveTacticalIntent(startingIds: number[], currentIds: number[], players: GameState["players"]): number {
  const count = (ids: number[]) => {
    const result = { DEF: 0, MED: 0, AV: 0 };
    for (const id of ids) {
      const position = players[id]?.position;
      if (position === "DEF" || position === "MED" || position === "AV") result[position] += 1;
    }
    return result;
  };
  const start = count(startingIds);
  const current = count(currentIds);
  const change = (current.AV - start.AV) * 2 + (current.MED - start.MED) - (current.DEF - start.DEF) * 2;
  return Math.max(-100, Math.min(100, change * 25));
}

function halftimeAiChanges(
  team: Team,
  lineup: number[],
  players: GameState["players"],
  goalsFor: number,
  goalsAgainst: number,
): { lineup: number[]; events: string[]; incomingIds: number[] } {
  let current = [...lineup];
  const events: string[] = [];
  const incomingIds: number[] = [];
  for (let change = 0; change < GAME_CONFIG.maxSubstitutions; change++) {
    const currentPlayers = current.map((id) => players[id]).filter(Boolean);
    const bench = team.playerIds.map((id) => players[id]).filter((p) => p && !current.includes(p.id));
    if (!bench.length) break;
    const preferred = goalsFor < goalsAgainst
      ? ["AV", "MED", "DEF", "GR"]
      : goalsFor > goalsAgainst
        ? ["DEF", "MED", "AV", "GR"]
        : ["MED", "AV", "DEF", "GR"];
    const candidates = preferred.flatMap((position) => currentPlayers
      .filter((p) => p.position === position)
      .sort((a, b) => a.rating - b.rating)
      .map((out) => ({ out, incoming: bench.filter((p) => p.position === position).sort((a, b) => b.rating - a.rating)[0] }))
      .filter((pair) => pair.incoming && pair.incoming.rating > pair.out.rating));
    const choice = candidates[0];
    if (!choice) break;
    current = current.filter((id) => id !== choice.out.id);
    current.push(choice.incoming.id);
    incomingIds.push(choice.incoming.id);
    events.push(`1|45|${team.id}|S|${choice.out.name}|${choice.incoming.name}`);
  }
  return { lineup: current, events, incomingIds };
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GameState | null>(null);
  const [ready, setReady] = useState(false);
  const [saveExists, setSaveExists] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const loaded = loadGame();
    if (loaded) setState(loaded);
    setSaveExists(hasSave());
    setReady(true);
  }, []);

  const persist = useCallback((next: GameState) => {
    setState(next);
    saveGame(next);
    setSaveExists(true);
  }, []);

  const mutate = useCallback(
    (fn: (draft: GameState) => string | void) => {
      setState((current) => {
        if (!current) return current;
        const draft = clone(current);
        const result = fn(draft);
        if (typeof result === "string") setMessage(result);
        saveGame(draft);
        return draft;
      });
      setSaveExists(true);
    },
    [],
  );

  const value = useMemo<GameContextValue>(
    () => ({
      ready,
      state,
      saveExists,
      message,
      setMessage,
      newGame: (teamId: number, seeds: TeamSeed[], careerImage: string | null = null, seasonYear: number = GAME_CONFIG.firstSeasonYear) => {
        setMessage(null);
        persist(createNewGame(teamId, seeds, careerImage, seasonYear));
      },
      takeOffer: (teamId: number) => mutate((draft) => acceptOffer(draft, teamId)),
      rejectOffers: () => mutate((draft) => declineOffers(draft)),
      takeBid: (id: number) => mutate((draft) => acceptBid(draft, id)),
      refuseBid: (id: number) => mutate((draft) => rejectBid(draft, id)),
      save: () => {
        if (state) {
          saveGame(state);
          setSaveExists(true);
          setMessage("Jogo guardado.");
        }
      },
      setCareerImage: (image: string | null) =>
        mutate((draft) => {
          draft.careerImage = image;
        }),
      load: () => {
        const loaded = loadGame();
        if (loaded) {
          setState(loaded);
          setMessage("Jogo carregado.");
        } else {
          setMessage("Não existe jogo guardado.");
        }
      },
      deleteSave: () => {
        clearSave();
        setState(null);
        setSaveExists(false);
        setMessage(null);
      },
      setLineup: (lineup: number[], formation?: { DEF: number; MED: number; AV: number }) =>
        mutate((draft) => {
          const team = draft.teams[draft.userTeamId];
          if (!team) return;
          const unique = [...new Set(lineup)];
          if (unique.length !== lineup.length || unique.some((id) => !team.playerIds.includes(id))) return "Escolhe apenas jogadores do teu plantel.";
          if (unique.some((id) => (draft.suspensions?.[id] ?? 0) > 0)) return "Não podes incluir jogadores suspensos no onze.";
          const activeFormation = formation ?? team.lineupFormation ?? {
            DEF: GAME_CONFIG.startingLineup.DEF,
            MED: GAME_CONFIG.startingLineup.MED,
            AV: GAME_CONFIG.startingLineup.AV,
          };
          const counts: Record<string, number> = { GR: 0, DEF: 0, MED: 0, AV: 0 };
          for (const id of unique) {
            const position = draft.players[id]?.position;
            if (position) counts[position] = (counts[position] ?? 0) + 1;
          }
          const maximums = { GR: 1, ...activeFormation };
          for (const position of ["GR", "DEF", "MED", "AV"] as const) {
            const maximum = maximums[position];
            if (counts[position] > maximum) return `Só podes escolher ${maximum} jogador(es) para a posição ${position}.`;
          }
          team.lineup = unique;
          team.lineupFormation = { ...activeFormation };
        }),
      buy: (playerId: number) => mutate((draft) => buyPlayer(draft, playerId)),
      sell: (playerId: number) => mutate((draft) => sellPlayer(draft, playerId)),
      simulateMatch: () =>
        mutate((draft) => {
          if (draft.seasonReview) return "Consulta primeiro o balanço da época antes de começar a nova época.";
          const fixture = userFixture(draft);
          const cupTie = userCupTie(draft);
          const playCup = Boolean(cupTie && fixture && fixture.homeGoals !== null && fixture.awayGoals !== null);
          const homeId = playCup ? cupTie!.homeId : fixture?.homeId;
          const awayId = playCup ? cupTie!.awayId : fixture?.awayId;
          if (homeId === undefined || awayId === undefined) return "Não há jogo nesta jornada.";
          const home = draft.teams[homeId] as Team;
          const away = draft.teams[awayId] as Team;
          const userTeam = draft.teams[draft.userTeamId] as Team;
          const previewLineup = availableLineup(draft, userTeam);
          if (previewLineup.length !== 11) return "Tens jogadores suspensos. Não tens 11 jogadores disponíveis para este jogo.";
          const counts: Record<string, number> = { GR: 0, DEF: 0, MED: 0, AV: 0 };
          for (const id of previewLineup) {
            const position = draft.players[id]?.position;
            if (position) counts[position] = (counts[position] ?? 0) + 1;
          }
          const formation = userTeam.lineupFormation ?? { DEF: GAME_CONFIG.startingLineup.DEF, MED: GAME_CONFIG.startingLineup.MED, AV: GAME_CONFIG.startingLineup.AV };
          const required = { GR: 1, DEF: formation.DEF, MED: formation.MED, AV: formation.AV };
          if ((["GR", "DEF", "MED", "AV"] as const).some((position) => counts[position] !== required[position])) {
            return "O onze tem de respeitar as posições definidas na formação.";
          }
          const unavailablePlayerIds = [...userTeam.playerIds].filter((id) => (draft.suspensions?.[id] ?? 0) > 0);
          const homeLineup = prepareTeamForMatch(draft, home, home.id === draft.userTeamId);
          const awayLineup = prepareTeamForMatch(draft, away, away.id === draft.userTeamId);
          const userLineup = draft.userTeamId === home.id ? homeLineup : awayLineup;
          const first = simulateHalf(home, away, draft.players, homeLineup, awayLineup, 1, 45);
          const firstRedIds = first.cards.filter((c) => c.type === "red" || c.type === "second-yellow").map((c) => c.playerId);
          const firstHomeLineup = homeLineup.filter((id) => !firstRedIds.includes(id));
          const firstAwayLineup = awayLineup.filter((id) => !firstRedIds.includes(id));
          const homeChanges = halftimeAiChanges(home, firstHomeLineup, draft.players, first.homeGoals, first.awayGoals);
          const awayChanges = halftimeAiChanges(away, firstAwayLineup, draft.players, first.awayGoals, first.homeGoals);
          const second = simulateHalf(home, away, draft.players, homeChanges.lineup, awayChanges.lineup, 46, 90, firstRedIds, 0, 0, first.cards.filter((c) => c.type === "yellow").map((c) => c.playerId));
          const events = [
            ...first.scorers.map((s) => `1|${s.minute}|${s.teamId}|G|${draft.teams[s.teamId]?.name}: ${s.playerName}`),
            ...first.cards.map((c) => `1|${c.minute}|${c.teamId}|${c.type === "yellow" ? "Y" : c.type === "second-yellow" ? "2Y" : "R"}|${draft.teams[c.teamId]?.name}: ${c.playerName}`),
            ...homeChanges.events, ...awayChanges.events,
            ...second.scorers.map((s) => `2|${s.minute}|${s.teamId}|G|${draft.teams[s.teamId]?.name}: ${s.playerName}`),
            ...second.cards.map((c) => `2|${c.minute}|${c.teamId}|${c.type === "red" ? "R" : c.type === "second-yellow" ? "2Y" : "Y"}|${draft.teams[c.teamId]?.name}: ${c.playerName}`),
          ].sort((a, b) => Number(a.split("|")[1]) - Number(b.split("|")[1]));
          const allCards = [...first.cards, ...second.cards];
          const homeGoals = first.homeGoals + second.homeGoals;
          const awayGoals = first.awayGoals + second.awayGoals;
          const penaltyWinner = playCup && homeGoals === awayGoals ? penaltyShootout(home.id, away.id) : undefined;
          if (penaltyWinner !== undefined) events.push(`P|90|-1|Penáltis — passou o ${draft.teams[penaltyWinner]?.name ?? "equipa vencedora"}.`);
          draft.match = {
            competition: playCup ? "cup" : "league", homeId: home.id, awayId: away.id,
            homeGoals, awayGoals, half: 2, userLineup: [...(draft.userTeamId === home.id ? homeChanges.lineup : awayChanges.lineup)], startingUserLineup: [...userLineup],
            unavailablePlayerIds, tacticalIntent: 0, appearedPlayerIds: [...new Set([...homeLineup, ...awayLineup])],
            subsUsed: 0, events, scorerIds: [...first.scorers, ...second.scorers].map((s) => s.playerId),
            redCardIds: allCards.filter((c) => c.type === "red" || c.type === "second-yellow").map((c) => c.playerId),
            yellowCardIds: allCards.filter((c) => c.type === "yellow" || c.type === "second-yellow").map((c) => c.playerId),
            secondYellowCardIds: allCards.filter((c) => c.type === "second-yellow").map((c) => c.playerId),
            finished: true,
            instantSimulation: true,
            ...(penaltyWinner !== undefined ? { cupPenaltyWinnerId: penaltyWinner } : {}),
          };
        }),
      startMatch: () =>
        mutate((draft) => {
          if (draft.seasonReview) return "Consulta primeiro o balanço da época antes de começar a nova época.";
          const fixture = userFixture(draft);
          const cupTie = userCupTie(draft);
          const playCup = Boolean(
            cupTie &&
            fixture &&
            fixture.homeGoals !== null &&
            fixture.awayGoals !== null,
          );

          const homeId = playCup ? cupTie!.homeId : fixture?.homeId;
          const awayId = playCup ? cupTie!.awayId : fixture?.awayId;
          if (homeId === undefined || awayId === undefined) return "Não há jogo nesta jornada.";

          const home = draft.teams[homeId] as Team;
          const away = draft.teams[awayId] as Team;
          const previewUserLineup = availableLineup(draft, draft.teams[draft.userTeamId] as Team);
          if (previewUserLineup.length < 11) return "Tens jogadores suspensos. Não tens 11 jogadores disponíveis para este jogo.";
          const positionCounts: Record<string, number> = { GR: 0, DEF: 0, MED: 0, AV: 0 };
          for (const id of previewUserLineup) {
            const position = draft.players[id]?.position;
            if (position) positionCounts[position] = (positionCounts[position] ?? 0) + 1;
          }
          const requiredFormation = { GR: 1, DEF: draft.teams[draft.userTeamId]?.lineupFormation?.DEF ?? GAME_CONFIG.startingLineup.DEF, MED: draft.teams[draft.userTeamId]?.lineupFormation?.MED ?? GAME_CONFIG.startingLineup.MED, AV: draft.teams[draft.userTeamId]?.lineupFormation?.AV ?? GAME_CONFIG.startingLineup.AV };
          if ((["GR", "DEF", "MED", "AV"] as const).some((position) => positionCounts[position] !== requiredFormation[position])) {
            return "O onze tem de respeitar as posições definidas na formação.";
          }
          const unavailablePlayerIds = [...(draft.teams[draft.userTeamId]?.playerIds ?? [])].filter((id) => (draft.suspensions?.[id] ?? 0) > 0);
          const homeLineup = prepareTeamForMatch(draft, home, home.id === draft.userTeamId);
          const awayLineup = prepareTeamForMatch(draft, away, away.id === draft.userTeamId);
          const userLineup = draft.userTeamId === home.id ? homeLineup : awayLineup;
          const half = simulateHalf(draft.teams[homeId] as Team, draft.teams[awayId] as Team, draft.players, homeLineup, awayLineup, 1, 45);
          draft.match = {
            competition: playCup ? "cup" : "league",
            homeId: home.id,
            awayId: away.id,
            homeGoals: half.homeGoals,
            awayGoals: half.awayGoals,
            half: 1,
            userLineup: [...userLineup],
            startingUserLineup: [...userLineup],
            unavailablePlayerIds,
            tacticalIntent: 0,
            appearedPlayerIds: [...new Set([...homeLineup, ...awayLineup])],
            subsUsed: 0,
            events: [
              ...half.scorers.map((s) => `1|${s.minute}|${s.teamId}|G|${draft.teams[s.teamId]?.name}: ${s.playerName}`),
              ...half.cards.map((c) => `1|${c.minute}|${c.teamId}|${c.type === "red" ? "R" : "Y"}|${draft.teams[c.teamId]?.name}: ${c.playerName}`),
            ].sort((a, b) => Number(a.split("|")[1]) - Number(b.split("|")[1])),
            scorerIds: half.scorers.map((s) => s.playerId),
            redCardIds: half.cards.filter((c) => c.type === "red" || c.type === "second-yellow").map((c) => c.playerId),
            yellowCardIds: half.cards.filter((c) => c.type === "yellow").map((c) => c.playerId),
            secondYellowCardIds: half.cards.filter((c) => c.type === "second-yellow").map((c) => c.playerId),
            finished: false,
          };
          return undefined;
        }),
      substitute: (outId: number, inId: number) =>
        mutate((draft) => {
          const match = draft.match;
          if (!match || match.half !== 1) return;
          if (match.subsUsed >= GAME_CONFIG.maxSubstitutions) return "Substituições esgotadas.";
          const index = match.userLineup.indexOf(outId);
          if (index === -1) return;
          const team = draft.teams[draft.userTeamId];
          const outgoing = draft.players[outId];
          const incoming = draft.players[inId];
          if ((match.redCardIds ?? []).includes(outId)) return "Um jogador expulso não pode ser substituído: já foi excluído do jogo.";
          if ((match.redCardIds ?? []).includes(inId)) return "Um jogador expulso não pode voltar a entrar em campo.";
          if ((match.unavailablePlayerIds ?? []).includes(inId)) return "Esse jogador está suspenso e não pode ser utilizado neste jogo.";
          if (!team?.playerIds.includes(inId) || match.userLineup.includes(inId) || !outgoing || !incoming) return "Escolhe um suplente válido.";
          if ((outgoing.position === "GR" || incoming.position === "GR") && outgoing.position !== incoming.position) return "Um guarda-redes só pode ser substituído por outro guarda-redes.";
          if ((draft.suspensions?.[inId] ?? 0) > 0) return "Esse jogador está suspenso.";
          match.userLineup[index] = inId;
          match.events.push(`1|45|${draft.userTeamId}|S|${outgoing.name}|${incoming.name}`);
          match.events.sort((a, b) => Number(a.split("|")[1]) - Number(b.split("|")[1]));
          match.tacticalIntent = deriveTacticalIntent(match.startingUserLineup ?? match.userLineup, match.userLineup, draft.players);
          match.appearedPlayerIds = [...new Set([...(match.appearedPlayerIds ?? match.userLineup), inId])];
          match.subsUsed += 1;
          if (team) team.lineup = [...match.userLineup];
          const out = draft.players[outId];
          const inn = draft.players[inId];
          return `${out?.name} → ${inn?.name}`;
        }),
      setTacticalIntent: (value: number) =>
        mutate((draft) => {
          if (!draft.match || draft.match.half !== 1) return;
          draft.match.tacticalIntent = Math.max(-100, Math.min(100, Math.round(value)));
        }),
      playSecondHalf: () =>
        mutate((draft) => {
          const match = draft.match;
          if (!match || match.half !== 1) return;
          const home = draft.teams[match.homeId] as Team;
          const away = draft.teams[match.awayId] as Team;
          const userIsHome = draft.userTeamId === match.homeId;
          const sentOff = new Set(match.redCardIds ?? []);
          // Expulsões da primeira parte retiram efetivamente jogadores das duas equipas.
          const homeLineup = (userIsHome ? match.userLineup : home.lineup).filter((id) => !sentOff.has(id));
          const awayLineup = (userIsHome ? away.lineup : match.userLineup).filter((id) => !sentOff.has(id));
          match.userLineup = [...(userIsHome ? homeLineup : awayLineup)];
          const userTeam = draft.teams[draft.userTeamId];
          if (userTeam) userTeam.lineup = [...match.userLineup];
          const userIntent = match.tacticalIntent ?? 0;
          const homeChanges = userIsHome
            ? { lineup: homeLineup, events: [], incomingIds: [] as number[] }
            : halftimeAiChanges(home, homeLineup, draft.players, match.homeGoals, match.awayGoals);
          const awayChanges = userIsHome
            ? halftimeAiChanges(away, awayLineup, draft.players, match.awayGoals, match.homeGoals)
            : { lineup: awayLineup, events: [], incomingIds: [] as number[] };
          const effectiveHomeLineup = homeChanges.lineup;
          const effectiveAwayLineup = awayChanges.lineup;
          const half = simulateHalf(home, away, draft.players, effectiveHomeLineup, effectiveAwayLineup, 46, 90, [], userIsHome ? userIntent : 0, userIsHome ? 0 : userIntent, (match.yellowCardIds ?? []));
          match.events.push(...homeChanges.events, ...awayChanges.events);
          match.appearedPlayerIds = [...new Set([...(match.appearedPlayerIds ?? []), ...homeChanges.incomingIds, ...awayChanges.incomingIds])];
          match.homeGoals += half.homeGoals;
          match.awayGoals += half.awayGoals;
          match.half = 2;
          match.finished = true;
          match.events.push(
            ...[
              ...half.scorers.map((s) => `2|${s.minute}|${s.teamId}|G|${draft.teams[s.teamId]?.name}: ${s.playerName}`),
              ...half.cards.map((c) => `2|${c.minute}|${c.teamId}|${c.type === "red" ? "R" : c.type === "second-yellow" ? "2Y" : "Y"}|${draft.teams[c.teamId]?.name}: ${c.playerName}`),
            ].sort((a, b) => Number(a.split("|")[1]) - Number(b.split("|")[1])),
          );
          (match.scorerIds ??= []).push(...half.scorers.map((s) => s.playerId));
          match.redCardIds = [...(match.redCardIds ?? []), ...half.cards.filter((c) => c.type === "red" || c.type === "second-yellow").map((c) => c.playerId)];
          match.yellowCardIds = [...(match.yellowCardIds ?? []), ...half.cards.filter((c) => c.type === "yellow" || c.type === "second-yellow").map((c) => c.playerId)];
          match.secondYellowCardIds = [...(match.secondYellowCardIds ?? []), ...half.cards.filter((c) => c.type === "second-yellow").map((c) => c.playerId)];

          if (match.competition === "cup" && match.homeGoals === match.awayGoals) {
            match.cupPenaltyWinnerId = penaltyShootout(match.homeId, match.awayId);
            const winnerName = draft.teams[match.cupPenaltyWinnerId]?.name ?? "equipa vencedora";
            match.events.push(
              `P|90|-1|Penáltis — passou o ${winnerName}.`,
            );
          }
        }),
      finishMatch: () =>
        mutate((draft) => {
          const match = draft.match;
          if (!match || !match.finished) return;

          const disciplineCards = [
            ...(match.redCardIds ?? []).filter((playerId) => !(match.secondYellowCardIds ?? []).includes(playerId)).map((playerId) => ({ playerId, type: "red" as const })),
            ...(match.yellowCardIds ?? []).map((playerId) => ({ playerId, type: "yellow" as const })),
            ...(match.secondYellowCardIds ?? []).map((playerId) => ({ playerId, type: "second-yellow" as const })),
          ];

          const userTeam = draft.teams[draft.userTeamId];
          const suspensionMessages = disciplineCards
            .filter((card) => userTeam?.playerIds.includes(card.playerId))
            .filter((card) => card.type === "red" || card.type === "second-yellow" || (card.type === "yellow" && (draft.yellowCards?.[card.playerId] ?? 0) >= 4))
            .map((card) => {
              const player = draft.players[card.playerId];
              const games = card.type === "red" ? 2 : 1;
              return player ? `${player.name} fica de fora por ${games} jogo${games === 1 ? "" : "s"}.` : null;
            })
            .filter((message): message is string => Boolean(message));

          recordMatchDiscipline(draft, disciplineCards);

          if (suspensionMessages.length > 0) {
            setMessage(`Suspensões: ${suspensionMessages.join(" ")}`);
          }

          if (match.competition === "cup") {
            recordUserCupResult(draft, match.homeGoals, match.awayGoals, match.cupPenaltyWinnerId, match.scorerIds, match.appearedPlayerIds ?? match.userLineup);
          } else {
            recordUserResult(draft, match.homeGoals, match.awayGoals, match.scorerIds, match.appearedPlayerIds ?? match.userLineup);
          }
          advanceRound(draft);
        }),
      dismissCelebration: () => mutate((draft) => dismissCelebration(draft)),
      continueSeason: () =>
        mutate((draft) => {
          try {
            continueAfterSeasonReview(draft);
          } catch (error) {
            console.error("Erro ao iniciar nova época:", error);
            return "Não foi possível iniciar a nova época. A época anterior foi mantida.";
          }
        }),
    }),
    [ready, state, saveExists, message, mutate, persist],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame deve ser usado dentro de GameProvider");
  return ctx;
}
