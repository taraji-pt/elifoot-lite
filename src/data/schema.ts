import type { Position } from "@/game/types";

/** Jogador no ficheiro de clubes: só nome, posição e nacionalidade (código 3 letras). */
export interface PlayerSeed {
  name: string;
  position: Position;
  nationality: string;
}

/** Clube no ficheiro de dados. Rating dos jogadores e orçamento são calculados. */
export interface TeamSeed {
  id: number;
  name: string;
  country: string;
  division: number;
  /** força do clube 0-100 */
  rating: number;
  /** "" = emblema gerado; ou "/assets/badges/x.png" */
  badge: string;
  primaryColor: string;
  secondaryColor: string;
  /** opcional; posições em falta são geradas automaticamente */
  players?: PlayerSeed[];
}
