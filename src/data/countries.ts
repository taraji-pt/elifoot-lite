/**
 * NACIONALIDADES — código de 3 letras usado nos jogadores (ex: "POR").
 * `iso2` é o código usado para carregar a bandeira SVG (biblioteca open-source flag-icons).
 * Para adicionar um país: nova linha com código, nome e iso2 (ver https://flagicons.lipis.dev).
 */
export const COUNTRIES: Record<string, { name: string; iso2: string }> = {
  POR: { name: "Portugal", iso2: "pt" },
  ESP: { name: "Espanha", iso2: "es" },
  FRA: { name: "França", iso2: "fr" },
  BRA: { name: "Brasil", iso2: "br" },
  ARG: { name: "Argentina", iso2: "ar" },
  ENG: { name: "Inglaterra", iso2: "gb-eng" },
  SCO: { name: "Escócia", iso2: "gb-sct" },
  ITA: { name: "Itália", iso2: "it" },
  GER: { name: "Alemanha", iso2: "de" },
  NED: { name: "Países Baixos", iso2: "nl" },
  BEL: { name: "Bélgica", iso2: "be" },
  MAR: { name: "Marrocos", iso2: "ma" },
  ALG: { name: "Argélia", iso2: "dz" },
  SEN: { name: "Senegal", iso2: "sn" },
  NGA: { name: "Nigéria", iso2: "ng" },
  GHA: { name: "Gana", iso2: "gh" },
  CPV: { name: "Cabo Verde", iso2: "cv" },
  ANG: { name: "Angola", iso2: "ao" },
  MOZ: { name: "Moçambique", iso2: "mz" },
  GNB: { name: "Guiné-Bissau", iso2: "gw" },
  URU: { name: "Uruguai", iso2: "uy" },
  COL: { name: "Colômbia", iso2: "co" },
  CRO: { name: "Croácia", iso2: "hr" },
  SRB: { name: "Sérvia", iso2: "rs" },
  DEN: { name: "Dinamarca", iso2: "dk" },
  SWE: { name: "Suécia", iso2: "se" },
  NOR: { name: "Noruega", iso2: "no" },
  POL: { name: "Polónia", iso2: "pl" },
  UKR: { name: "Ucrânia", iso2: "ua" },
  GRE: { name: "Grécia", iso2: "gr" },
  TUR: { name: "Turquia", iso2: "tr" },
  JPN: { name: "Japão", iso2: "jp" },
  KOR: { name: "Coreia do Sul", iso2: "kr" },
  USA: { name: "EUA", iso2: "us" },
  MEX: { name: "México", iso2: "mx" },
};

/** Pesos usados só para jogadores gerados automaticamente (quando o plantel não está completo). */
export const NATIONALITY_WEIGHTS: Record<string, number> = {
  POR: 45, BRA: 10, ESP: 4, FRA: 3, ARG: 3, CPV: 3, ANG: 3, MAR: 2, SEN: 2,
  URU: 2, COL: 2, ITA: 2, GER: 1, NED: 1, BEL: 1, NGA: 1, GHA: 1, MOZ: 1,
  GNB: 1, SRB: 1, CRO: 1, UKR: 1, GRE: 1, TUR: 1, JPN: 1,
};
