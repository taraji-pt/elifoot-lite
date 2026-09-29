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
  newGame: (teamId: number, seeds: TeamSeed[]) => void;
  takeOffer: (teamId: number) => void;
  rejectOffers: () => void;
  takeBid: (playerId: number) => void;
  refuseBid: (playerId: number) => void;
  save: () => void;
  load: () => void;
  deleteSave: () => void;
  setLineup: (lineup: number[]) => void;
  buy: (playerId: number) => void;
  sell: (playerId: number) => void;
  startMatch: () => void;
  substitute: (outId: number, inId: number) => void;
  playSecondHalf: () => void;
  finishMatch: () => void;
  dismissCelebration: () => void;
  continueSeason: () => void;
}

const g = globalThis as { __gameCtx?: React.Context<GameContextValue | null> };
const GameContext = (g.__gameCtx ??= createContext<GameContextValue | null>(null));

const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

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
      newGame: (teamId: number, seeds: TeamSeed[]) => {
        setMessage(null);
        persist(createNewGame(teamId, seeds));
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
      setLineup: (lineup: number[]) =>
        mutate((draft) => {
          const team = draft.teams[draft.userTeamId];
          if (team) team.lineup = lineup;
        }),
      buy: (playerId: number) => mutate((draft) => buyPlayer(draft, playerId)),
      sell: (playerId: number) => mutate((draft) => sellPlayer(draft, playerId)),
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
          const homeLineup = prepareTeamForMatch(draft, home);
          const awayLineup = prepareTeamForMatch(draft, away);
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
            subsUsed: 0,
            events: [
              ...half.scorers.map((s) => `1|${s.minute}|${s.teamId}|G|${draft.teams[s.teamId]?.name}: ${s.playerName}`),
              ...half.cards.map((c) => `1|${c.minute}|${c.teamId}|${c.type === "red" ? "R" : "Y"}|${draft.teams[c.teamId]?.name}: ${c.playerName}`),
            ].sort((a, b) => Number(a.split("|")[1]) - Number(b.split("|")[1])),
            scorerIds: half.scorers.map((s) => s.playerId),
            redCardIds: half.cards.filter((c) => c.type === "red").map((c) => c.playerId),
            yellowCardIds: half.cards.filter((c) => c.type === "yellow").map((c) => c.playerId),
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
          match.userLineup[index] = inId;
          match.subsUsed += 1;
          const team = draft.teams[draft.userTeamId];
          if (team) team.lineup = [...match.userLineup];
          const out = draft.players[outId];
          const inn = draft.players[inId];
          return `${out?.name} → ${inn?.name}`;
        }),
      playSecondHalf: () =>
        mutate((draft) => {
          const match = draft.match;
          if (!match || match.half !== 1) return;
          const home = draft.teams[match.homeId] as Team;
          const away = draft.teams[match.awayId] as Team;
          const userIsHome = draft.userTeamId === match.homeId;
          const homeLineup = userIsHome ? match.userLineup : home.lineup;
          const awayLineup = userIsHome ? away.lineup : match.userLineup;
          const half = simulateHalf(home, away, draft.players, homeLineup, awayLineup, 46, 90, match.redCardIds ?? []);
          match.homeGoals += half.homeGoals;
          match.awayGoals += half.awayGoals;
          match.half = 2;
          match.finished = true;
          match.events.push(
            ...[
              ...half.scorers.map((s) => `2|${s.minute}|${s.teamId}|G|${draft.teams[s.teamId]?.name}: ${s.playerName}`),
              ...half.cards.map((c) => `2|${c.minute}|${c.teamId}|${c.type === "red" ? "R" : "Y"}|${draft.teams[c.teamId]?.name}: ${c.playerName}`),
            ].sort((a, b) => Number(a.split("|")[1]) - Number(b.split("|")[1])),
          );
          (match.scorerIds ??= []).push(...half.scorers.map((s) => s.playerId));
          match.redCardIds = [...(match.redCardIds ?? []), ...half.cards.filter((c) => c.type === "red").map((c) => c.playerId)];
          match.yellowCardIds = [...(match.yellowCardIds ?? []), ...half.cards.filter((c) => c.type === "yellow").map((c) => c.playerId)];

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
            ...(match.redCardIds ?? []).map((playerId) => ({ playerId, type: "red" as const })),
            ...(match.yellowCardIds ?? []).map((playerId) => ({ playerId, type: "yellow" as const })),
          ];

          const userTeam = draft.teams[draft.userTeamId];
          const suspensionMessages = disciplineCards
            .filter((card) => {
              if (!userTeam?.playerIds.includes(card.playerId)) return false;
              if (card.type === "red") return true;
              return (draft.yellowCards?.[card.playerId] ?? 0) >= 4;
            })
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
            recordUserCupResult(draft, match.homeGoals, match.awayGoals, match.cupPenaltyWinnerId, match.scorerIds);
          } else {
            recordUserResult(draft, match.homeGoals, match.awayGoals, match.scorerIds);
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
