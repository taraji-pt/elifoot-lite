/**
 * EXEMPLO DE FICHEIRO DE CLUBES — modelo para a tua base de dados personalizada.
 *
 * Este ficheiro NÃO é usado pelo jogo. Serve apenas como referência.
 * O jogo lê os clubes de `src/data/teams.ts`.
 *
 * Para personalizares os clubes:
 *   1. Abre `src/data/teams.ts`.
 *   2. Substitui ou edita os blocos conforme o modelo abaixo.
 *   3. Mantém sempre 10 equipas por divisão (ou ajusta `teamsPerDivision`
 *      em `src/data/gameConfig.ts`).
 *
 * Regras importantes:
 *   - `id` tem de ser único em todo o ficheiro (1, 2, 3, ...).
 *   - `division` vai de 1 (melhor) a 4.
 *   - `abbreviation` deve ter 2-4 letras (aparece nas tabelas e resultados).
 *   - `badge` pode ficar vazio ("") — nesse caso o jogo gera um emblema
 *     automático com as cores do clube. Se quiseres um emblema real,
 *     coloca a imagem em `public/assets/badges/` e usa o caminho,
 *     por exemplo: "/assets/badges/benfica.png".
 *   - As cores são códigos hexadecimais (#RRGGBB).
 *   - `budget` é o dinheiro inicial do clube para transferências.
 *   - `playerIds` e `lineup` NÃO se escrevem aqui — o jogo preenche-os
 *     automaticamente quando começas uma nova partida.
 */

import type { TeamSeed } from "./teams";

export const EXAMPLE_TEAMS: TeamSeed[] = [
  // ---------------- DIVISÃO 1 (exemplo) ----------------
  {
    id: 1,
    name: "Benfica",
    abbreviation: "SLB",
    country: "Portugal",
    division: 1,
    badge: "",
    primaryColor: "#E30613",
    secondaryColor: "#FFFFFF",
    accentColor: "#1A1A1A",
    budget: 5000000,
  },
  {
    id: 2,
    name: "FC Porto",
    abbreviation: "FCP",
    country: "Portugal",
    division: 1,
    badge: "",
    primaryColor: "#0A3D91",
    secondaryColor: "#FFFFFF",
    accentColor: "#8FB8FF",
    budget: 4800000,
  },
  {
    id: 3,
    name: "Sporting CP",
    abbreviation: "SCP",
    country: "Portugal",
    division: 1,
    badge: "",
    primaryColor: "#0B7A3B",
    secondaryColor: "#FFFFFF",
    accentColor: "#F2C500",
    budget: 4500000,
  },
  // ... continuar até teres 10 equipas nesta divisão ...

  // ---------------- DIVISÃO 2 (exemplo) ----------------
  {
    id: 11,
    name: "CD Nacional",
    abbreviation: "CDN",
    country: "Portugal",
    division: 2,
    badge: "",
    primaryColor: "#1C4E80",
    secondaryColor: "#FFFFFF",
    accentColor: "#7FB2E5",
    budget: 1400000,
  },
  // ... etc ...
];
