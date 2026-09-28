export type Position = "GR" | "DEF" | "MED" | "AV";

export const POSITIONS: Position[] = ["GR", "DEF", "MED", "AV"];

export interface Player {
  id: number;
  name: string;
  position: Position;
  rating: number;
  /** código de 3 letras (ver data/countries.ts) */
  nationality: string;
  transferValue: number;
}

export interface Team {
  id: number;
  name: string;
  country: string;
  /** 1..N = divisões a competir; 0 = Reserva (fora das divisões) */
  division: number;
  /** força do clube (0-100) — gera ratings e orçamento */
  rating: number;
  /** caminho para imagem, ex: "/assets/badges/benfica.png". Vazio = badge gerado. */
  badge: string;
  primaryColor: string;
  secondaryColor: string;
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

export type MatchCompetition = "league" | "cup";

export interface MatchState {
  competition: MatchCompetition;
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
  cupPenaltyWinnerId?: number;
}

export interface SeasonReview {
  season: string;
  userDivision: number;
  userPosition: number;
  userPoints: number;
  cupWinnerId: number | null;
  promoted: number[];
  relegatedDown: number[];
  droppedOut: number[];
  climbers: number[];
  outcome: "promoted" | "stayed" | "relegated" | "out";
}

export interface Celebration {
  type: "league" | "cup" | "double";
  season: string;
  teamId: number;
}

export interface SeasonSummary {
  season: string;
  division: number;
  position: number;
  points: number;
  note: string;
}

export interface Bid {
  playerId: number;
  teamId: number;
  amount: number;
}

export interface GameState {
  /** propostas de outros clubes pelos jogadores do utilizador */
  bids?: Bid[];
  seasonYear: number;
  round: number;
  userTeamId: number;
  /** propostas de outros clubes para treinar (fim de época) */
  offers: number[];
  /** true quando o clube do utilizador caiu fora das divisões: tem de aceitar */
  offersMandatory: boolean;
  /** sem clube e sem propostas = fim de carreira */
  careerOver: boolean;
  teams: Record<number, Team>;
  players: Record<number, Player>;
  /** jogadores sem equipa (mercado livre) */
  freeAgents: number[];
  /** fixtures por divisão: leagues[division][round] */
  leagues: Record<number, Fixture[][]>;
  cup: Cup;
  match: MatchState | null;
  celebration?: Celebration | null;
  seasonReview?: SeasonReview | null;
  history: SeasonSummary[];
  nextPlayerId: number;
}
