import { GAME_CONFIG } from "@/data/gameConfig";
import { shuffle } from "./rng";
import { penaltyShootout, simulateMatch } from "./simulation";
import type { Cup, CupTie, Player, Team } from "./types";

function roundName(teams: number): string {
  if (teams === 2) return "Final";
  if (teams === 4) return "Meias-finais";
  if (teams === 8) return "Quartos de final";
  if (teams === 16) return "Oitavos de final";
  return `${teams / 2}.ª eliminatória`;
}

function tiesFrom(ids: number[]): CupTie[] {
  const ties: CupTie[] = [];
  for (let i = 0; i < ids.length; i += 2) {
    ties.push({
      homeId: ids[i] as number,
      awayId: ids[i + 1] as number,
      homeGoals: null,
      awayGoals: null,
      winnerId: null,
    });
  }
  return ties;
}

export function createCup(allTeamIds: number[]): Cup {
  const drawn = shuffle(allTeamIds).slice(0, GAME_CONFIG.cupTeams);
  return {
    rounds: [{ name: roundName(drawn.length), ties: tiesFrom(drawn) }],
    currentRound: 0,
    winnerId: null,
  };
}

/** Joga a eliminatória atual e sorteia a seguinte. */
export function playCupRound(
  cup: Cup,
  teams: Record<number, Team>,
  players: Record<number, Player>,
): Cup {
  if (cup.winnerId !== null) return cup;
  const round = cup.rounds[cup.currentRound];
  if (!round) return cup;

  const playedTies: CupTie[] = round.ties.map((tie) => {
    if (tie.winnerId !== null) return tie;
    const home = teams[tie.homeId];
    const away = teams[tie.awayId];
    if (!home || !away) return tie;
    const result = simulateMatch(home, away, players);
    let winnerId: number;
    let penalties = false;
    if (result.homeGoals > result.awayGoals) winnerId = home.id;
    else if (result.awayGoals > result.homeGoals) winnerId = away.id;
    else {
      winnerId = penaltyShootout(home.id, away.id);
      penalties = true;
    }
    return { ...tie, homeGoals: result.homeGoals, awayGoals: result.awayGoals, winnerId, penalties };
  });

  const rounds = [...cup.rounds];
  rounds[cup.currentRound] = { ...round, ties: playedTies };

  const winners = playedTies.map((t) => t.winnerId).filter((id): id is number => id !== null);
  if (winners.length <= 1) {
    return { rounds, currentRound: cup.currentRound, winnerId: winners[0] ?? null };
  }

  rounds.push({ name: roundName(winners.length), ties: tiesFrom(shuffle(winners)) });
  return { rounds, currentRound: cup.currentRound + 1, winnerId: null };
}
