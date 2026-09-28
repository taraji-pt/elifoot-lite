import type { Position } from "@/game/types";

/** Jogador no ficheiro de clubes: só nome, posição e nacionalidade (código 3 letras). */
export interface PlayerSeed {
  name: string;
  position: Position;
  nationality: string;
}

/**
 * Clube na base de dados. O rating dos jogadores, o orçamento e a DIVISÃO
 * são calculados automaticamente (a divisão sai do ranking de força dos
 * clubes dos países escolhidos no início do jogo).
 */
export interface TeamSeed {
  id: number;
  name: string;
  /** código de 3 letras do país (ver data/countries.ts) */
  country: string;
  /** força do clube 0-100 */
  rating: number;
  /** "" = emblema gerado; ou "/assets/badges/x.png" */
  badge: string;
  primaryColor: string;
  secondaryColor: string;
  /** opcional; quando definido, contém os jogadores reais do plantel inicial */
  players?: PlayerSeed[];
  /** legado/ignorado: a divisão é calculada pelo ranking de força */
  division?: number;
}
