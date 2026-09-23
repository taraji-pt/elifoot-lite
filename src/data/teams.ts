import type { Team } from "@/game/types";

/**
 * DADOS DAS EQUIPAS — 4 divisões x 10 equipas.
 * Editar livremente: nome, abreviatura, país, divisão, orçamento, cores, badge.
 * `badge` aponta para uma imagem (ex: "/assets/badges/benfica.png").
 * Se estiver vazio, é usado um badge gerado automaticamente com as cores.
 * `playerIds` e `lineup` são preenchidos na criação do jogo.
 */
export type TeamSeed = Omit<Team, "playerIds" | "lineup">;

export const TEAMS: TeamSeed[] = [
  // ---------------- DIVISÃO 1 ----------------
  { id: 1, name: "Lisboa FC", abbreviation: "LIS", country: "Portugal", division: 1, badge: "", primaryColor: "#E30613", secondaryColor: "#FFFFFF", accentColor: "#1A1A1A", budget: 5000000 },
  { id: 2, name: "Douro Sport", abbreviation: "DOU", country: "Portugal", division: 1, badge: "", primaryColor: "#0A3D91", secondaryColor: "#FFFFFF", accentColor: "#8FB8FF", budget: 4800000 },
  { id: 3, name: "Alvalade União", abbreviation: "ALV", country: "Portugal", division: 1, badge: "", primaryColor: "#0B7A3B", secondaryColor: "#FFFFFF", accentColor: "#F2C500", budget: 4500000 },
  { id: 4, name: "Minho Atlético", abbreviation: "MIN", country: "Portugal", division: 1, badge: "", primaryColor: "#8E1B2E", secondaryColor: "#F3E9D2", accentColor: "#D9A441", budget: 3200000 },
  { id: 5, name: "Costa Nova", abbreviation: "CNV", country: "Portugal", division: 1, badge: "", primaryColor: "#00707F", secondaryColor: "#FFFFFF", accentColor: "#FF7A45", budget: 2600000 },
  { id: 6, name: "Serra Clube", abbreviation: "SER", country: "Portugal", division: 1, badge: "", primaryColor: "#3B2E5A", secondaryColor: "#EDE7FA", accentColor: "#B79CFF", budget: 2400000 },
  { id: 7, name: "Ribeira SC", abbreviation: "RIB", country: "Portugal", division: 1, badge: "", primaryColor: "#1F6F4A", secondaryColor: "#FFFFFF", accentColor: "#9BE3B4", budget: 2100000 },
  { id: 8, name: "Vale Real", abbreviation: "VAL", country: "Portugal", division: 1, badge: "", primaryColor: "#B8860B", secondaryColor: "#2B2B2B", accentColor: "#FFE08A", budget: 2000000 },
  { id: 9, name: "Ilha Marítimo", abbreviation: "ILH", country: "Portugal", division: 1, badge: "", primaryColor: "#0F4C81", secondaryColor: "#FFD400", accentColor: "#FFFFFF", budget: 1900000 },
  { id: 10, name: "Pinhal Unidos", abbreviation: "PIN", country: "Portugal", division: 1, badge: "", primaryColor: "#44712E", secondaryColor: "#F5F3E7", accentColor: "#C7E39B", budget: 1700000 },

  // ---------------- DIVISÃO 2 ----------------
  { id: 11, name: "Tejo Clube", abbreviation: "TEJ", country: "Portugal", division: 2, badge: "", primaryColor: "#1C4E80", secondaryColor: "#FFFFFF", accentColor: "#7FB2E5", budget: 1400000 },
  { id: 12, name: "Sado FC", abbreviation: "SAD", country: "Portugal", division: 2, badge: "", primaryColor: "#0D6E6E", secondaryColor: "#F1FAFA", accentColor: "#5FD4D4", budget: 1300000 },
  { id: 13, name: "Estrela Norte", abbreviation: "ENO", country: "Portugal", division: 2, badge: "", primaryColor: "#C1272D", secondaryColor: "#FFF6E5", accentColor: "#FFC145", budget: 1250000 },
  { id: 14, name: "Beira Sport", abbreviation: "BEI", country: "Portugal", division: 2, badge: "", primaryColor: "#5A3E2B", secondaryColor: "#F6EFE6", accentColor: "#D8A25A", budget: 1200000 },
  { id: 15, name: "Marina AD", abbreviation: "MAR", country: "Portugal", division: 2, badge: "", primaryColor: "#0E5FA4", secondaryColor: "#FFFFFF", accentColor: "#8AD3FF", budget: 1100000 },
  { id: 16, name: "Lagoa FC", abbreviation: "LAG", country: "Portugal", division: 2, badge: "", primaryColor: "#2E7D68", secondaryColor: "#EFFBF6", accentColor: "#94E5CB", budget: 1050000 },
  { id: 17, name: "Fontes SC", abbreviation: "FON", country: "Portugal", division: 2, badge: "", primaryColor: "#6B2D5C", secondaryColor: "#FDEFF9", accentColor: "#E39BD4", budget: 1000000 },
  { id: 18, name: "Monte Verde", abbreviation: "MVE", country: "Portugal", division: 2, badge: "", primaryColor: "#3E7B27", secondaryColor: "#F4FBEF", accentColor: "#B7E89A", budget: 950000 },
  { id: 19, name: "Aurora CD", abbreviation: "AUR", country: "Portugal", division: 2, badge: "", primaryColor: "#D96C06", secondaryColor: "#FFF7ED", accentColor: "#FFC480", budget: 900000 },
  { id: 20, name: "Praia Atlético", abbreviation: "PRA", country: "Portugal", division: 2, badge: "", primaryColor: "#00809D", secondaryColor: "#FFFFFF", accentColor: "#FFD98A", budget: 880000 },

  // ---------------- DIVISÃO 3 ----------------
  { id: 21, name: "Campo Largo", abbreviation: "CLA", country: "Portugal", division: 3, badge: "", primaryColor: "#4A5D23", secondaryColor: "#F7F8F0", accentColor: "#B3C77B", budget: 600000 },
  { id: 22, name: "Ponte SC", abbreviation: "PON", country: "Portugal", division: 3, badge: "", primaryColor: "#2F4858", secondaryColor: "#EEF3F6", accentColor: "#86B3C9", budget: 580000 },
  { id: 23, name: "Alto Douro", abbreviation: "ADO", country: "Portugal", division: 3, badge: "", primaryColor: "#7B1E3C", secondaryColor: "#FCEEF2", accentColor: "#E39AB2", budget: 560000 },
  { id: 24, name: "Foz União", abbreviation: "FOZ", country: "Portugal", division: 3, badge: "", primaryColor: "#0F6B58", secondaryColor: "#EFF9F6", accentColor: "#7FD9C3", budget: 540000 },
  { id: 25, name: "Vila Nova AC", abbreviation: "VNA", country: "Portugal", division: 3, badge: "", primaryColor: "#8A5A00", secondaryColor: "#FFF8E8", accentColor: "#FFD98A", budget: 520000 },
  { id: 26, name: "Sobral FC", abbreviation: "SOB", country: "Portugal", division: 3, badge: "", primaryColor: "#38618C", secondaryColor: "#F0F5FB", accentColor: "#9CC2EA", budget: 500000 },
  { id: 27, name: "Carvalhal SC", abbreviation: "CAR", country: "Portugal", division: 3, badge: "", primaryColor: "#5C4033", secondaryColor: "#F7F1EB", accentColor: "#D6A77A", budget: 480000 },
  { id: 28, name: "Azul Mar", abbreviation: "AZM", country: "Portugal", division: 3, badge: "", primaryColor: "#1565C0", secondaryColor: "#EAF3FD", accentColor: "#90CAF9", budget: 460000 },
  { id: 29, name: "Quinta AD", abbreviation: "QUI", country: "Portugal", division: 3, badge: "", primaryColor: "#6D6875", secondaryColor: "#F5F3F7", accentColor: "#B8B3C4", budget: 440000 },
  { id: 30, name: "Pedras SC", abbreviation: "PED", country: "Portugal", division: 3, badge: "", primaryColor: "#495057", secondaryColor: "#F1F3F5", accentColor: "#ADB5BD", budget: 420000 },

  // ---------------- DIVISÃO 4 ----------------
  { id: 31, name: "Aldeia FC", abbreviation: "ALD", country: "Portugal", division: 4, badge: "", primaryColor: "#7A5C3E", secondaryColor: "#FAF4EC", accentColor: "#D9B98B", budget: 250000 },
  { id: 32, name: "Riacho SC", abbreviation: "RIA", country: "Portugal", division: 4, badge: "", primaryColor: "#2C6E63", secondaryColor: "#EFF8F6", accentColor: "#8FD3C7", budget: 240000 },
  { id: 33, name: "Fonte Nova", abbreviation: "FNO", country: "Portugal", division: 4, badge: "", primaryColor: "#9E2A2B", secondaryColor: "#FDEDED", accentColor: "#E88B8B", budget: 230000 },
  { id: 34, name: "Cruzeiro AD", abbreviation: "CRZ", country: "Portugal", division: 4, badge: "", primaryColor: "#264653", secondaryColor: "#EDF3F5", accentColor: "#8AB6C4", budget: 220000 },
  { id: 35, name: "Chã Sport", abbreviation: "CHA", country: "Portugal", division: 4, badge: "", primaryColor: "#5F0F40", secondaryColor: "#FBEFF7", accentColor: "#CE84B6", budget: 210000 },
  { id: 36, name: "Olival FC", abbreviation: "OLI", country: "Portugal", division: 4, badge: "", primaryColor: "#556B2F", secondaryColor: "#F6F8EF", accentColor: "#BACB8A", budget: 200000 },
  { id: 37, name: "Barrosas SC", abbreviation: "BAR", country: "Portugal", division: 4, badge: "", primaryColor: "#3D405B", secondaryColor: "#F1F1F6", accentColor: "#A3A7C9", budget: 190000 },
  { id: 38, name: "Terras Altas", abbreviation: "TAL", country: "Portugal", division: 4, badge: "", primaryColor: "#0B6E4F", secondaryColor: "#EEF9F4", accentColor: "#7FD3B4", budget: 180000 },
  { id: 39, name: "Salgueiro AC", abbreviation: "SAL", country: "Portugal", division: 4, badge: "", primaryColor: "#8D6A9F", secondaryColor: "#F7F1FA", accentColor: "#CDB3DB", budget: 170000 },
  { id: 40, name: "Vento Sul", abbreviation: "VSU", country: "Portugal", division: 4, badge: "", primaryColor: "#1D3557", secondaryColor: "#EDF2F8", accentColor: "#89A9D0", budget: 160000 },
];
