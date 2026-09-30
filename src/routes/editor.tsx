import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Flag } from "@/components/Flag";
import { TeamBadge } from "@/components/TeamBadge";
import { COUNTRIES } from "@/data/countries";
import {
  countryList,
  defaultDatabase,
  emptyPlayer,
  emptyTeam,
  isCustomDatabase,
  loadDatabase,
  nextTeamId,
  parseDatabase,
  resetDatabase,
  saveDatabase,
  serializeDatabase,
} from "@/data/db";
import type { PlayerSeed, TeamSeed } from "@/data/schema";
import { POSITIONS, type Position } from "@/game/types";

export const Route = createFileRoute("/editor")({
  head: () => ({
    meta: [
      { title: "Editor de Clubes — Mini Elifoot" },
      { name: "description", content: "Cria e edita clubes, plantéis, cores e países da tua base de dados." },
      { property: "og:title", content: "Editor de Clubes — Mini Elifoot" },
      { property: "og:description", content: "Cria e edita clubes, plantéis, cores e países da tua base de dados." },
    ],
  }),
  component: Editor,
});

const btn =
  "rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-40";
const btn2 =
  "rounded-md border border-border bg-secondary px-3 py-1.5 text-sm hover:bg-accent disabled:opacity-40";
const card = "rounded-lg border border-border bg-card p-4";
const input =
  "w-full rounded-md border border-border bg-background px-2 py-1.5 text-sm outline-none focus:border-primary";

const COUNTRY_CODES = Object.keys(COUNTRIES);

function Editor() {
  const [teams, setTeams] = useState<TeamSeed[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const db = loadDatabase();
    setTeams(db);
    setSelectedId(db[0]?.id ?? null);
  }, []);

  const commit = (next: TeamSeed[], message?: string) => {
    setTeams(next);
    saveDatabase(next);
    if (message) setInfo(message);
  };

  const selected = teams.find((t) => t.id === selectedId) ?? null;
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return teams
      .filter((t) => !q || t.name.toLowerCase().includes(q) || t.country.toLowerCase().includes(q))
      .sort((a, b) => a.country.localeCompare(b.country) || b.rating - a.rating);
  }, [teams, search]);

  const update = (patch: Partial<TeamSeed>) => {
    if (!selected) return;
    commit(teams.map((t) => (t.id === selected.id ? { ...t, ...patch } : t)));
  };

  const updatePlayers = (players: PlayerSeed[]) => update({ players });

  const addTeam = () => {
    const team = emptyTeam(nextTeamId(teams));
    commit([...teams, team], "Clube criado.");
    setSelectedId(team.id);
  };

  const removeTeam = () => {
    if (!selected) return;
    if (!confirm(`Apagar ${selected.name}?`)) return;
    const next = teams.filter((t) => t.id !== selected.id);
    commit(next, "Clube apagado.");
    setSelectedId(next[0]?.id ?? null);
  };

  const exportDb = () => {
    const blob = new Blob([serializeDatabase(teams)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "clubes.json";
    a.click();
    URL.revokeObjectURL(url);
    setInfo("Ficheiro clubes.json descarregado.");
  };

  const importDb = async (file: File) => {
    try {
      const parsed = parseDatabase(await file.text());
      commit(parsed, `${parsed.length} clubes importados.`);
      setSelectedId(parsed[0]?.id ?? null);
    } catch (error) {
      setInfo(error instanceof Error ? error.message : "Ficheiro inválido.");
    }
  };

  const restore = () => {
    if (!confirm("Voltar aos clubes originais e apagar as tuas edições?")) return;
    resetDatabase();
    const db = defaultDatabase();
    setTeams(db);
    setSelectedId(db[0]?.id ?? null);
    setInfo("Base de dados original restaurada.");
  };

  const countries = countryList(teams);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
          <div>
            <h1 className="text-2xl font-bold">Editor de Clubes</h1>
            <p className="text-sm text-muted-foreground">
              {teams.length} clubes · {countries.length} países{isCustomDatabase() ? " · base de dados personalizada" : ""}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/" className={btn2}>Voltar ao jogo</Link>
            <button className={btn2} onClick={exportDb}>Exportar</button>
            <button className={btn2} onClick={() => fileRef.current?.click()}>Importar</button>
            <button className={btn2} onClick={restore}>Restaurar original</button>
            <button className={btn} onClick={addTeam}>Novo clube</button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) void importDb(file);
                e.target.value = "";
              }}
            />
          </div>
        </header>

        {info && (
          <div className="mt-4 flex justify-between rounded-md border border-primary/50 bg-primary/10 px-3 py-2 text-sm">
            {info}
            <button onClick={() => setInfo(null)}>✕</button>
          </div>
        )}

        <div className="mt-4 grid gap-4 lg:grid-cols-[320px_1fr]">
          <div className={card}>
            <input
              className={input}
              placeholder="Procurar clube ou país…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="mt-3 max-h-[60vh] space-y-1 overflow-y-auto">
              {filtered.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedId(t.id)}
                  className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm ${
                    t.id === selectedId ? "bg-primary/15" : "hover:bg-accent"
                  }`}
                >
                  <TeamBadge team={{ ...t, division: 0, budget: 0, playerIds: [], lineup: [] }} size={22} />
                  <span className="flex-1 truncate">{t.name}</span>
                  <Flag code={t.country} size={16} />
                  <span className="font-mono-num text-xs text-muted-foreground">{t.rating}</span>
                </button>
              ))}
              {!filtered.length && <p className="text-sm text-muted-foreground">Nenhum clube encontrado.</p>}
            </div>
          </div>

          {selected ? (
            <div className="space-y-4">
              <div className={card}>
                <div className="mb-4 flex items-center gap-3">
                  <TeamBadge team={{ ...selected, division: 0, budget: 0, playerIds: [], lineup: [] }} size={48} />
                  <div className="text-lg font-bold">{selected.name}</div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="text-sm">
                    Nome
                    <input className={input} value={selected.name} onChange={(e) => update({ name: e.target.value })} />
                  </label>
                  <label className="text-sm">
                    País
                    <select className={input} value={selected.country} onChange={(e) => update({ country: e.target.value })}>
                      {COUNTRY_CODES.map((code) => (
                        <option key={code} value={code}>
                          {code} — {COUNTRIES[code]?.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="text-sm">
                    Estádio
                    <input className={input} value={selected.stadium ?? ""} placeholder="Ex.: Stadio Artemio Franchi" onChange={(e) => update({ stadium: e.target.value })} />
                  </label>
                  <label className="text-sm">
                    Cidade
                    <input className={input} value={selected.city ?? ""} placeholder="Ex.: Florença" onChange={(e) => update({ city: e.target.value })} />
                  </label>
                  <label className="text-sm">
                    Foto do estádio
                    <input className={input} value={selected.stadiumImage ?? ""} placeholder="Ex.: san-siro.jpg" onChange={(e) => update({ stadiumImage: e.target.value })} />
                    <span className="mt-1 block text-xs text-muted-foreground">
                      Ficheiro em <code>public/assets/stadiums/</code>.
                    </span>
                  </label>
                  <label className="text-sm">
                    Força do clube: <b className="font-mono-num">{selected.rating}</b>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={selected.rating}
                      onChange={(e) => update({ rating: Number(e.target.value) })}
                      className="w-full accent-primary"
                    />
                    <span className="text-xs text-muted-foreground">
                      Define a força dos jogadores e o orçamento inicial.
                    </span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="text-sm">
                      Cor principal
                      <input
                        type="color"
                        className="h-9 w-full rounded-md border border-border bg-background"
                        value={selected.primaryColor}
                        onChange={(e) => update({ primaryColor: e.target.value })}
                      />
                    </label>
                    <label className="text-sm">
                      Cor secundária
                      <input
                        type="color"
                        className="h-9 w-full rounded-md border border-border bg-background"
                        value={selected.secondaryColor}
                        onChange={(e) => update({ secondaryColor: e.target.value })}
                      />
                    </label>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className={btn2} onClick={removeTeam}>Apagar clube</button>
                </div>
              </div>

              <div className={card}>
                <div className="mb-3 flex items-center justify-between">
                  <div className="font-semibold">
                    Plantel ({selected.players?.length ?? 0})
                    <span className="ml-2 text-xs font-normal text-muted-foreground">
                      Os jogadores do plantel são definidos aqui. O jogo não gera jogadores automaticamente.
                    </span>
                  </div>
                  <button
                    className={btn2}
                    onClick={() => updatePlayers([...(selected.players ?? []), emptyPlayer()])}
                  >
                    Adicionar jogador
                  </button>
                </div>
                <div className="space-y-2">
                  {(selected.players ?? []).map((p, i) => (
                    <div key={i} className="flex flex-wrap items-center gap-2">
                      <span className="w-6 font-mono-num text-xs text-muted-foreground">{i + 1}</span>
                      <input
                        className={`${input} max-w-[240px] flex-1`}
                        placeholder="Nome do jogador"
                        value={p.name}
                        onChange={(e) => {
                          const next = [...(selected.players ?? [])];
                          next[i] = { ...p, name: e.target.value };
                          updatePlayers(next);
                        }}
                      />
                      <select
                        className={`${input} w-24`}
                        value={p.position}
                        onChange={(e) => {
                          const next = [...(selected.players ?? [])];
                          next[i] = { ...p, position: e.target.value as Position };
                          updatePlayers(next);
                        }}
                      >
                        {POSITIONS.map((pos) => (
                          <option key={pos} value={pos}>{pos}</option>
                        ))}
                      </select>
                      <select
                        className={`${input} w-40`}
                        value={p.nationality}
                        onChange={(e) => {
                          const next = [...(selected.players ?? [])];
                          next[i] = { ...p, nationality: e.target.value };
                          updatePlayers(next);
                        }}
                      >
                        {COUNTRY_CODES.map((code) => (
                          <option key={code} value={code}>
                            {code} — {COUNTRIES[code]?.name}
                          </option>
                        ))}
                      </select>
                      <Flag code={p.nationality} />
                      <button
                        className={btn2}
                        onClick={() => updatePlayers((selected.players ?? []).filter((_, j) => j !== i))}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  {!(selected.players ?? []).length && (
                    <p className="text-sm text-muted-foreground">
                      Sem jogadores definidos — o jogo não gera jogadores automaticamente e este clube não poderá iniciar uma época.
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className={card}>Cria o teu primeiro clube.</div>
          )}
        </div>
      </div>
    </div>
  );
}
