/**
 * MODELO DE CLUBE (não usado pelo jogo — copiar blocos para teams.ts).
 * - rating: força do clube 0-100. Gera o rating de cada jogador e o orçamento.
 * - players: só nome, posição (GR/DEF/MED/AV) e nacionalidade (código 3 letras,
 *   ver data/countries.ts). Ordem dentro de cada posição = importância
 *   (os primeiros são titulares). Posições em falta são completadas automaticamente.
 * - badge: "" gera emblema com as cores; ou "/assets/badges/benfica.png"
 *   (imagem em public/assets/badges/).
 */
import type { TeamSeed } from "./schema";

export const EXAMPLE_TEAMS: TeamSeed[] = [
  {
    id: 1,
    name: "Benfica",
    country: "Portugal",
    division: 1,
    rating: 84,
    badge: "",
    primaryColor: "#E30613",
    secondaryColor: "#FFFFFF",
    players: [
      { name: "Trubin", position: "GR", nationality: "UKR" },
      { name: "Samuel Soares", position: "GR", nationality: "POR" },
      { name: "António Silva", position: "DEF", nationality: "POR" },
      { name: "Otamendi", position: "DEF", nationality: "ARG" },
      { name: "Dahl", position: "DEF", nationality: "SWE" },
      { name: "Bah", position: "DEF", nationality: "DEN" },
      { name: "Aursnes", position: "MED", nationality: "NOR" },
      { name: "Kökçü", position: "MED", nationality: "TUR" },
      { name: "Florentino", position: "MED", nationality: "POR" },
      { name: "Di María", position: "AV", nationality: "ARG" },
      { name: "Pavlidis", position: "AV", nationality: "GRE" },
    ],
  },
];
