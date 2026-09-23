export type Position = "GR" | "DEF" | "MED" | "AV";

export const POSITIONS: Position[] = ["GR", "DEF", "MED", "AV"];

export interface Player {
  id: number;
  name: string;
  position: Position;
  rating: number;
  nationality: string;
  transferValue: number;
}

export interface Team {
  id: number;
  name: string;
  abbreviation: string;
  country: string;
  division: number;
  /** caminho para imagem, ex: "/assets/badges/benfica.png". Vazio = badge gerado. */
  badge: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  budget: number;
  playerIds: number[];
  /** 11 titulares (ids). */
  lineup: number[];
}

export interface Fixture {
  homeId: number;
  awayId: number;
  homeGoals: number | null;
  awayGoals: number | null;
}

export interface CupTie {
  homeId: number;
  awayId: number;
  homeGoals: number | null;
  awayGoals: number | null;
  /** true se decidido nos penáltis */
  penalties?: boolean;
  winnerId: number | null;
}

export interface CupRound {
  name: string;
  ties: CupTie[];
}

export interface Cup {
  rounds: CupRound[];
  currentRound: number;
  winnerId: number | null;
}

export interface MatchState {
  homeId: number;
  awayId: number;
  homeGoals: number;
  awayGoals: number;
  half: 1 | 2;
  /** lineup do utilizador durante o jogo */
  userLineup: number[];
  subsUsed: number;
  events: string[];
  finished: boolean;
}

export interface SeasonSummary {
  season: string;
  division: number;
  position: number;
  points: number;
  note: string;
}

export interface GameState {
  seasonYear: number;
  round: number;
  userTeamId: number;
  teams: Record<number, Team>;
  players: Record<number, Player>;
  /** jogadores sem equipa (mercado livre) */
  freeAgents: number[];
  /** fixtures por divisão: leagues[division][round] */
  leagues: Record<number, Fixture[][]>;
  cup: Cup;
  match: MatchState | null;
  history: SeasonSummary[];
  nextPlayerId: number;
}
