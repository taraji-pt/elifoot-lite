/**
 * CONFIGURAÇÃO CENTRAL DO JOGO
 * Todos os valores estruturais do jogo vivem aqui. Nada disto deve ser
 * duplicado na lógica ou na interface.
 */
export const GAME_CONFIG = {
  numberOfDivisions: 4,
  teamsPerDivision: 10,
  promotionSpots: 2,
  relegationSpots: 2,

  playersPerTeam: 18,
  squadStructure: { GR: 2, DEF: 6, MED: 6, AV: 4 },
  startingLineup: { GR: 1, DEF: 4, MED: 4, AV: 2 },

  minPlayerRating: 0,
  maxPlayerRating: 100,

  /** Faixa de rating típica por divisão (1 = melhor). */
  ratingRangeByDivision: {
    1: [62, 88],
    2: [54, 78],
    3: [46, 70],
    4: [38, 62],
  } as Record<number, [number, number]>,

  /** valor = (rating ^ exponent) * factor  (arredondado) */
  transferValue: { factor: 42, exponent: 2.6 },

  points: { win: 3, draw: 1, loss: 0 },

  /** Substituições permitidas ao intervalo. */
  maxSubstitutions: 3,

  /** Época inicial (1996/97). */
  firstSeasonYear: 1996,

  /** Taça: nº de equipas sorteadas (potência de 2). */
  cupTeams: 32,
  /** Jornadas de campeonato em que se disputa uma eliminatória da Taça. */
  cupRounds: [3, 6, 9, 12, 15],

  /** Motor de simulação. */
  simulation: {
    baseGoalsPerHalf: 0.72,
    ratingImpact: 0.055,
    homeAdvantage: 0.12,
  },
} as const;

export type GameConfig = typeof GAME_CONFIG;
