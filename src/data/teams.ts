import type { TeamSeed } from "./schema";

/**
 * CLUBES — 4 divisões x 10 equipas. Ver modelo em `teams.example.ts`.
 * `rating` (0-100) define a força dos jogadores E o orçamento inicial.
 * `players` é opcional: posições em falta são geradas automaticamente.
 */
export const TEAMS: TeamSeed[] = [
  // ---------------- DIVISÃO 1 ----------------
  { id: 1, name: "Lisboa FC", country: "Portugal", division: 1, rating: 82, badge: "", primaryColor: "#E30613", secondaryColor: "#FFFFFF" },
  { id: 2, name: "Douro Sport", country: "Portugal", division: 1, rating: 81, badge: "", primaryColor: "#0A3D91", secondaryColor: "#FFFFFF" },
  { id: 3, name: "Alvalade União", country: "Portugal", division: 1, rating: 80, badge: "", primaryColor: "#0B7A3B", secondaryColor: "#FFFFFF" },
  { id: 4, name: "Minho Atlético", country: "Portugal", division: 1, rating: 79, badge: "", primaryColor: "#8E1B2E", secondaryColor: "#F3E9D2" },
  { id: 5, name: "Costa Nova", country: "Portugal", division: 1, rating: 78, badge: "", primaryColor: "#00707F", secondaryColor: "#FFFFFF" },
  { id: 6, name: "Serra Clube", country: "Portugal", division: 1, rating: 77, badge: "", primaryColor: "#3B2E5A", secondaryColor: "#EDE7FA" },
  { id: 7, name: "Ribeira SC", country: "Portugal", division: 1, rating: 76, badge: "", primaryColor: "#1F6F4A", secondaryColor: "#FFFFFF" },
  { id: 8, name: "Vale Real", country: "Portugal", division: 1, rating: 75, badge: "", primaryColor: "#B8860B", secondaryColor: "#2B2B2B" },
  { id: 9, name: "Ilha Marítimo", country: "Portugal", division: 1, rating: 74, badge: "", primaryColor: "#0F4C81", secondaryColor: "#FFD400" },
  { id: 10, name: "Pinhal Unidos", country: "Portugal", division: 1, rating: 73, badge: "", primaryColor: "#44712E", secondaryColor: "#F5F3E7" },
  // ---------------- DIVISÃO 2 ----------------
  { id: 11, name: "Tejo Clube", country: "Portugal", division: 2, rating: 70, badge: "", primaryColor: "#1C4E80", secondaryColor: "#FFFFFF" },
  { id: 12, name: "Sado FC", country: "Portugal", division: 2, rating: 69, badge: "", primaryColor: "#0D6E6E", secondaryColor: "#F1FAFA" },
  { id: 13, name: "Estrela Norte", country: "Portugal", division: 2, rating: 68, badge: "", primaryColor: "#C1272D", secondaryColor: "#FFF6E5" },
  { id: 14, name: "Beira Sport", country: "Portugal", division: 2, rating: 67, badge: "", primaryColor: "#5A3E2B", secondaryColor: "#F6EFE6" },
  { id: 15, name: "Marina AD", country: "Portugal", division: 2, rating: 66, badge: "", primaryColor: "#0E5FA4", secondaryColor: "#FFFFFF" },
  { id: 16, name: "Lagoa FC", country: "Portugal", division: 2, rating: 65, badge: "", primaryColor: "#2E7D68", secondaryColor: "#EFFBF6" },
  { id: 17, name: "Fontes SC", country: "Portugal", division: 2, rating: 64, badge: "", primaryColor: "#6B2D5C", secondaryColor: "#FDEFF9" },
  { id: 18, name: "Monte Verde", country: "Portugal", division: 2, rating: 63, badge: "", primaryColor: "#3E7B27", secondaryColor: "#F4FBEF" },
  { id: 19, name: "Aurora CD", country: "Portugal", division: 2, rating: 62, badge: "", primaryColor: "#D96C06", secondaryColor: "#FFF7ED" },
  { id: 20, name: "Praia Atlético", country: "Portugal", division: 2, rating: 61, badge: "", primaryColor: "#00809D", secondaryColor: "#FFFFFF" },
  // ---------------- DIVISÃO 3 ----------------
  { id: 21, name: "Campo Largo", country: "Portugal", division: 3, rating: 60, badge: "", primaryColor: "#4A5D23", secondaryColor: "#F7F8F0" },
  { id: 22, name: "Ponte SC", country: "Portugal", division: 3, rating: 59, badge: "", primaryColor: "#2F4858", secondaryColor: "#EEF3F6" },
  { id: 23, name: "Alto Douro", country: "Portugal", division: 3, rating: 58, badge: "", primaryColor: "#7B1E3C", secondaryColor: "#FCEEF2" },
  { id: 24, name: "Foz União", country: "Portugal", division: 3, rating: 57, badge: "", primaryColor: "#0F6B58", secondaryColor: "#EFF9F6" },
  { id: 25, name: "Vila Nova AC", country: "Portugal", division: 3, rating: 56, badge: "", primaryColor: "#8A5A00", secondaryColor: "#FFF8E8" },
  { id: 26, name: "Sobral FC", country: "Portugal", division: 3, rating: 55, badge: "", primaryColor: "#38618C", secondaryColor: "#F0F5FB" },
  { id: 27, name: "Carvalhal SC", country: "Portugal", division: 3, rating: 54, badge: "", primaryColor: "#5C4033", secondaryColor: "#F7F1EB" },
  { id: 28, name: "Azul Mar", country: "Portugal", division: 3, rating: 53, badge: "", primaryColor: "#1565C0", secondaryColor: "#EAF3FD" },
  { id: 29, name: "Quinta AD", country: "Portugal", division: 3, rating: 52, badge: "", primaryColor: "#6D6875", secondaryColor: "#F5F3F7" },
  { id: 30, name: "Pedras SC", country: "Portugal", division: 3, rating: 51, badge: "", primaryColor: "#495057", secondaryColor: "#F1F3F5" },
  // ---------------- DIVISÃO 4 ----------------
  { id: 31, name: "Aldeia FC", country: "Portugal", division: 4, rating: 50, badge: "", primaryColor: "#7A5C3E", secondaryColor: "#FAF4EC" },
  { id: 32, name: "Riacho SC", country: "Portugal", division: 4, rating: 49, badge: "", primaryColor: "#2C6E63", secondaryColor: "#EFF8F6" },
  { id: 33, name: "Fonte Nova", country: "Portugal", division: 4, rating: 48, badge: "", primaryColor: "#9E2A2B", secondaryColor: "#FDEDED" },
  { id: 34, name: "Cruzeiro AD", country: "Portugal", division: 4, rating: 47, badge: "", primaryColor: "#264653", secondaryColor: "#EDF3F5" },
  { id: 35, name: "Chã Sport", country: "Portugal", division: 4, rating: 46, badge: "", primaryColor: "#5F0F40", secondaryColor: "#FBEFF7" },
  { id: 36, name: "Olival FC", country: "Portugal", division: 4, rating: 45, badge: "", primaryColor: "#556B2F", secondaryColor: "#F6F8EF" },
  { id: 37, name: "Barrosas SC", country: "Portugal", division: 4, rating: 44, badge: "", primaryColor: "#3D405B", secondaryColor: "#F1F1F6" },
  { id: 38, name: "Terras Altas", country: "Portugal", division: 4, rating: 43, badge: "", primaryColor: "#0B6E4F", secondaryColor: "#EEF9F4" },
  { id: 39, name: "Salgueiro AC", country: "Portugal", division: 4, rating: 42, badge: "", primaryColor: "#8D6A9F", secondaryColor: "#F7F1FA" },
  { id: 40, name: "Vento Sul", country: "Portugal", division: 4, rating: 41, badge: "", primaryColor: "#1D3557", secondaryColor: "#EDF2F8" },
];
