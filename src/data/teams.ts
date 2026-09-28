import type { TeamSeed } from "./schema";

/**
 * CLUBES — base de dados livre. Ver modelo em `teams.example.ts`.
 * `country` = código de 3 letras (ver countries.ts).
 * `rating` (0-100) define a força dos jogadores E o orçamento inicial.
 * `players` é opcional: posições em falta são geradas automaticamente.
 *
 * A DIVISÃO não se escreve aqui: no início do jogo escolhes os países e os
 * clubes mais fortes ocupam as 4 divisões; os restantes ficam na Reserva
 * (mercado de transferências, Taça e acesso à última divisão).
 */
export const TEAMS: TeamSeed[] = [
  // ---------------- PORTUGAL ----------------
  { id: 1, name: "Lisboa FC", country: "POR", rating: 82, badge: "", primaryColor: "#E30613", secondaryColor: "#FFFFFF" },
  { id: 2, name: "Douro Sport", country: "POR", rating: 81, badge: "", primaryColor: "#0A3D91", secondaryColor: "#FFFFFF" },
  { id: 3, name: "Alvalade União", country: "POR", rating: 80, badge: "", primaryColor: "#0B7A3B", secondaryColor: "#FFFFFF" },
  { id: 4, name: "Minho Atlético", country: "POR", rating: 79, badge: "", primaryColor: "#8E1B2E", secondaryColor: "#F3E9D2" },
  { id: 5, name: "Costa Nova", country: "POR", rating: 78, badge: "", primaryColor: "#00707F", secondaryColor: "#FFFFFF" },
  { id: 6, name: "Serra Clube", country: "POR", rating: 77, badge: "", primaryColor: "#3B2E5A", secondaryColor: "#EDE7FA" },
  { id: 7, name: "Ribeira SC", country: "POR", rating: 76, badge: "", primaryColor: "#1F6F4A", secondaryColor: "#FFFFFF" },
  { id: 8, name: "Vale Real", country: "POR", rating: 75, badge: "", primaryColor: "#B8860B", secondaryColor: "#2B2B2B" },
  { id: 9, name: "Ilha Marítimo", country: "POR", rating: 74, badge: "", primaryColor: "#0F4C81", secondaryColor: "#FFD400" },
  { id: 10, name: "Pinhal Unidos", country: "POR", rating: 73, badge: "", primaryColor: "#44712E", secondaryColor: "#F5F3E7" },
  { id: 11, name: "Tejo Clube", country: "POR", rating: 70, badge: "", primaryColor: "#1C4E80", secondaryColor: "#FFFFFF" },
  { id: 12, name: "Sado FC", country: "POR", rating: 69, badge: "", primaryColor: "#0D6E6E", secondaryColor: "#F1FAFA" },
  { id: 13, name: "Estrela Norte", country: "POR", rating: 68, badge: "", primaryColor: "#C1272D", secondaryColor: "#FFF6E5" },
  { id: 14, name: "Beira Sport", country: "POR", rating: 67, badge: "", primaryColor: "#5A3E2B", secondaryColor: "#F6EFE6" },
  { id: 15, name: "Marina AD", country: "POR", rating: 66, badge: "", primaryColor: "#0E5FA4", secondaryColor: "#FFFFFF" },
  { id: 16, name: "Lagoa FC", country: "POR", rating: 65, badge: "", primaryColor: "#2E7D68", secondaryColor: "#EFFBF6" },
  { id: 17, name: "Fontes SC", country: "POR", rating: 64, badge: "", primaryColor: "#6B2D5C", secondaryColor: "#FDEFF9" },
  { id: 18, name: "Monte Verde", country: "POR", rating: 63, badge: "", primaryColor: "#3E7B27", secondaryColor: "#F4FBEF" },
  { id: 19, name: "Aurora CD", country: "POR", rating: 62, badge: "", primaryColor: "#D96C06", secondaryColor: "#FFF7ED" },
  { id: 20, name: "Praia Atlético", country: "POR", rating: 61, badge: "", primaryColor: "#00809D", secondaryColor: "#FFFFFF" },
  { id: 21, name: "Campo Largo", country: "POR", rating: 60, badge: "", primaryColor: "#4A5D23", secondaryColor: "#F7F8F0" },
  { id: 22, name: "Ponte SC", country: "POR", rating: 59, badge: "", primaryColor: "#2F4858", secondaryColor: "#EEF3F6" },
  { id: 23, name: "Alto Douro", country: "POR", rating: 58, badge: "", primaryColor: "#7B1E3C", secondaryColor: "#FCEEF2" },
  { id: 24, name: "Foz União", country: "POR", rating: 57, badge: "", primaryColor: "#0F6B58", secondaryColor: "#EFF9F6" },
  { id: 25, name: "Vila Nova AC", country: "POR", rating: 56, badge: "", primaryColor: "#8A5A00", secondaryColor: "#FFF8E8" },
  { id: 26, name: "Sobral FC", country: "POR", rating: 55, badge: "", primaryColor: "#38618C", secondaryColor: "#F0F5FB" },
  { id: 27, name: "Carvalhal SC", country: "POR", rating: 54, badge: "", primaryColor: "#5C4033", secondaryColor: "#F7F1EB" },
  { id: 28, name: "Azul Mar", country: "POR", rating: 53, badge: "", primaryColor: "#1565C0", secondaryColor: "#EAF3FD" },
  { id: 29, name: "Quinta AD", country: "POR", rating: 52, badge: "", primaryColor: "#6D6875", secondaryColor: "#F5F3F7" },
  { id: 30, name: "Pedras SC", country: "POR", rating: 51, badge: "", primaryColor: "#495057", secondaryColor: "#F1F3F5" },
  { id: 31, name: "Aldeia FC", country: "POR", rating: 50, badge: "", primaryColor: "#7A5C3E", secondaryColor: "#FAF4EC" },
  { id: 32, name: "Riacho SC", country: "POR", rating: 49, badge: "", primaryColor: "#2C6E63", secondaryColor: "#EFF8F6" },
  { id: 33, name: "Fonte Nova", country: "POR", rating: 48, badge: "", primaryColor: "#9E2A2B", secondaryColor: "#FDEDED" },
  { id: 34, name: "Cruzeiro AD", country: "POR", rating: 47, badge: "", primaryColor: "#264653", secondaryColor: "#EDF3F5" },
  { id: 35, name: "Chã Sport", country: "POR", rating: 46, badge: "", primaryColor: "#5F0F40", secondaryColor: "#FBEFF7" },
  { id: 36, name: "Olival FC", country: "POR", rating: 45, badge: "", primaryColor: "#556B2F", secondaryColor: "#F6F8EF" },
  { id: 37, name: "Barrosas SC", country: "POR", rating: 44, badge: "", primaryColor: "#3D405B", secondaryColor: "#F1F1F6" },
  { id: 38, name: "Terras Altas", country: "POR", rating: 43, badge: "", primaryColor: "#0B6E4F", secondaryColor: "#EEF9F4" },
  { id: 39, name: "Salgueiro AC", country: "POR", rating: 42, badge: "", primaryColor: "#8D6A9F", secondaryColor: "#F7F1FA" },
  { id: 40, name: "Vento Sul", country: "POR", rating: 41, badge: "", primaryColor: "#1D3557", secondaryColor: "#EDF2F8" },
  // Portugal — clubes de acesso (ficam de fora das 4 divisões se jogares só com Portugal)
  { id: 41, name: "Moinhos FC", country: "POR", rating: 40, badge: "", primaryColor: "#A4161A", secondaryColor: "#FFF1F1" },
  { id: 42, name: "Souto SC", country: "POR", rating: 39, badge: "", primaryColor: "#14746F", secondaryColor: "#EAF7F6" },
  { id: 43, name: "Lameira AD", country: "POR", rating: 38, badge: "", primaryColor: "#6A4C93", secondaryColor: "#F3EEFA" },
  { id: 44, name: "Feira Nova", country: "POR", rating: 37, badge: "", primaryColor: "#BC6C25", secondaryColor: "#FFF6EA" },
  { id: 45, name: "Póvoa Unidos", country: "POR", rating: 36, badge: "", primaryColor: "#023E8A", secondaryColor: "#EAF2FC" },
  { id: 46, name: "Cabeço FC", country: "POR", rating: 35, badge: "", primaryColor: "#432818", secondaryColor: "#F6EFE9" },
  { id: 47, name: "Régua SC", country: "POR", rating: 34, badge: "", primaryColor: "#2D6A4F", secondaryColor: "#EAF6F0" },
  { id: 48, name: "Mós Atlético", country: "POR", rating: 33, badge: "", primaryColor: "#7F5539", secondaryColor: "#F8F1EA" },

  // ---------------- ESPANHA ----------------
  { id: 101, name: "Real Castilla", country: "ESP", rating: 85, badge: "", primaryColor: "#FFFFFF", secondaryColor: "#1D3557" },
  { id: 102, name: "Catalunya CF", country: "ESP", rating: 84, badge: "", primaryColor: "#8B1E3F", secondaryColor: "#123C7A" },
  { id: 103, name: "Atlético Manzanares", country: "ESP", rating: 80, badge: "", primaryColor: "#C8102E", secondaryColor: "#FFFFFF" },
  { id: 104, name: "Sevilla Bética", country: "ESP", rating: 76, badge: "", primaryColor: "#00A550", secondaryColor: "#FFFFFF" },
  { id: 105, name: "Bilbao Athletic", country: "ESP", rating: 74, badge: "", primaryColor: "#EE2523", secondaryColor: "#FFFFFF" },
  { id: 106, name: "Valencia Turia", country: "ESP", rating: 72, badge: "", primaryColor: "#F5A300", secondaryColor: "#0B1F3B" },
  { id: 107, name: "Vigo Celeste", country: "ESP", rating: 68, badge: "", primaryColor: "#8AC3EA", secondaryColor: "#FFFFFF" },
  { id: 108, name: "Granada Alhambra", country: "ESP", rating: 64, badge: "", primaryColor: "#A50044", secondaryColor: "#FFF0F5" },
  { id: 109, name: "Zaragoza Ebro", country: "ESP", rating: 60, badge: "", primaryColor: "#0B3C8C", secondaryColor: "#FFFFFF" },
  { id: 110, name: "Málaga Costa", country: "ESP", rating: 56, badge: "", primaryColor: "#1478C8", secondaryColor: "#EAF3FB" },
  { id: 111, name: "Gijón Mar", country: "ESP", rating: 52, badge: "", primaryColor: "#E4002B", secondaryColor: "#FFFFFF" },
  { id: 112, name: "Murcia Segura", country: "ESP", rating: 48, badge: "", primaryColor: "#B5121B", secondaryColor: "#FFF4F4" },
  { id: 113, name: "Cádiz Amarillo", country: "ESP", rating: 44, badge: "", primaryColor: "#FFD100", secondaryColor: "#123C7A" },
  { id: 114, name: "Huesca Pirineo", country: "ESP", rating: 40, badge: "", primaryColor: "#0E3B70", secondaryColor: "#EAF0F8" },

  // ---------------- ITÁLIA ----------------
  { id: 201, name: "Milano Nerazzurri", country: "ITA", rating: 84, badge: "", primaryColor: "#0B1C8C", secondaryColor: "#0B0B0B" },
  { id: 202, name: "Juventus", country: "ITA", rating: 83, badge: "/assets/badges/juventus.png", primaryColor: "#111111", secondaryColor: "#FFFFFF" },
  { id: 203, name: "Napoli Vesuvio", country: "ITA", rating: 81, badge: "", primaryColor: "#009EE0", secondaryColor: "#FFFFFF" },
  { id: 204, name: "Roma Lupi", country: "ITA", rating: 78, badge: "", primaryColor: "#8E1F2F", secondaryColor: "#F6A800" },
  { id: 205, name: "Milano Rossoneri", country: "ITA", rating: 77, badge: "", primaryColor: "#C8102E", secondaryColor: "#111111" },
  { id: 206, name: "Firenze Viola", country: "ITA", rating: 73, badge: "", primaryColor: "#6C2C91", secondaryColor: "#FFFFFF" },
  { id: 207, name: "Bergamo Atalante", country: "ITA", rating: 71, badge: "", primaryColor: "#1B65A6", secondaryColor: "#111111" },
  { id: 208, name: "Lazio Aquile", country: "ITA", rating: 69, badge: "", primaryColor: "#7FC3E8", secondaryColor: "#FFFFFF" },
  { id: 209, name: "Bologna Felsina", country: "ITA", rating: 63, badge: "", primaryColor: "#1B2A4A", secondaryColor: "#A8112A" },
  { id: 210, name: "Genova Grifone", country: "ITA", rating: 58, badge: "", primaryColor: "#B01B2E", secondaryColor: "#14315C" },
  { id: 211, name: "Udine Friuli", country: "ITA", rating: 54, badge: "", primaryColor: "#0D0D0D", secondaryColor: "#FFFFFF" },
  { id: 212, name: "Cagliari Sardegna", country: "ITA", rating: 50, badge: "", primaryColor: "#8B1A33", secondaryColor: "#123C7A" },
  { id: 213, name: "Palermo Sicilia", country: "ITA", rating: 46, badge: "", primaryColor: "#E89EBE", secondaryColor: "#111111" },
  { id: 214, name: "Bari Adriatico", country: "ITA", rating: 42, badge: "", primaryColor: "#C1272D", secondaryColor: "#FFFFFF" },

  // ---------------- BRASIL ----------------
  { id: 301, name: "Rio Flamenguense", country: "BRA", rating: 82, badge: "", primaryColor: "#C52613", secondaryColor: "#111111" },
  { id: 302, name: "São Paulo Tricolor", country: "BRA", rating: 79, badge: "", primaryColor: "#E30613", secondaryColor: "#FFFFFF" },
  { id: 303, name: "Minas Atlético", country: "BRA", rating: 75, badge: "", primaryColor: "#111111", secondaryColor: "#FFFFFF" },
  { id: 304, name: "Santos Praiano", country: "BRA", rating: 70, badge: "", primaryColor: "#FFFFFF", secondaryColor: "#111111" },
  { id: 305, name: "Grêmio Sul", country: "BRA", rating: 66, badge: "", primaryColor: "#0D5FA6", secondaryColor: "#111111" },
  { id: 306, name: "Bahia Salvador", country: "BRA", rating: 59, badge: "", primaryColor: "#0057B8", secondaryColor: "#E30613" },
  { id: 307, name: "Ceará Nordeste", country: "BRA", rating: 51, badge: "", primaryColor: "#111111", secondaryColor: "#FFFFFF" },
  { id: 308, name: "Goiás Cerrado", country: "BRA", rating: 43, badge: "", primaryColor: "#0B7A3B", secondaryColor: "#FFFFFF" },
];
