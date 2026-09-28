import { Flag } from "@/components/Flag";
import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { GAME_CONFIG } from "@/data/gameConfig";
import { countryList, loadDatabase } from "@/data/db";
import { COUNTRIES } from "@/data/countries";
import type { TeamSeed } from "@/data/schema";
import { TeamIdentity } from "@/components/TeamIdentity";
import { TeamBadge } from "@/components/TeamBadge";
import { GameProvider, useGame } from "@/state/GameProvider";
import { divisionTeamIds, marketPlayers, totalRounds, userFixture, userTeam } from "@/game/engine";
import { activeSlots, previewDivisions, seasonLabel, seedsForCountries } from "@/game/newGame";
import { formatMoney, getPlayers, sortSquad, teamRating } from "@/game/ratings";
import { validateSquad } from "@/game/players";
import { computeStandings } from "@/game/standings";
import type { GameState, Player, Position, Team } from "@/game/types";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mini Elifoot — Gere a tua equipa" },
      { name: "description", content: "Escolhe titulares, joga, faz substituições e sobe de divisão." },
      { property: "og:title", content: "Mini Elifoot — Gere a tua equipa" },
      { property: "og:description", content: "Escolhe titulares, joga, faz substituições e sobe de divisão." },
    ],
  }),
  component: () => (
    <GameProvider>
      <App />
    </GameProvider>
  ),
});

type Tab = "equipa" | "jogo" | "classificacao" | "calendario" | "transferencias" | "taca" | "historico";
const TABS: [Tab, string][] = [
  ["equipa", "Plantel"],
  ["jogo", "Jogar"],
  ["classificacao", "Classificação"],
  ["calendario", "Calendário"],
  ["transferencias", "Transferências"],
  ["taca", "Taça"],
  ["historico", "Histórico"],
];

const btn =
  "rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-40";
const btn2 =
  "rounded-md border border-border bg-secondary px-3 py-1.5 text-sm hover:bg-accent disabled:opacity-40";
const card = "rounded-lg border border-border bg-card p-4";

function App() {
  const { ready, state } = useGame();
  if (!ready) return <div className="min-h-screen bg-background" />;
  return (
    <div className="min-h-screen bg-background text-foreground">
      {state ? <Game state={state} /> : <Start />}
    </div>
  );
}

function Start() {
  const { newGame, saveExists, load } = useGame();
  const [db] = useState<TeamSeed[]>(() => loadDatabase());
  const countries = useMemo(() => countryList(db), [db]);
  const [selected, setSelected] = useState<string[]>(() => [countries[0]?.code ?? "POR"]);
  const [division, setDivision] = useState<number>(GAME_CONFIG.numberOfDivisions);
  const seeds = useMemo(() => seedsForCountries(db, selected), [db, selected]);
  const invalidTeams = useMemo(() => seeds.filter((t) => validateSquad(t.players)), [seeds]);
  const preview = useMemo(() => previewDivisions(seeds), [seeds]);
  const active = preview.filter((p) => p.division > 0).length;
  const reserve = preview.length - active;
  const toggle = (code: string) =>
    setSelected((cur) => (cur.includes(code) ? cur.filter((c) => c !== code) : [...cur, code]));
  const list = preview.filter((p) => p.division === division);
  const enough = active >= GAME_CONFIG.teamsPerDivision * GAME_CONFIG.numberOfDivisions;
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Mini <span className="text-primary">Elifoot</span>
        </h1>
        <Link to="/editor" className={btn2}>Editor de clubes</Link>
      </div>
      <p className="mt-2 text-muted-foreground">
        Escolhe os países: os {activeSlots()} clubes mais fortes formam as divisões, os restantes ficam de fora.
      </p>
      {saveExists && (
        <button className={`${btn} mt-6`} onClick={load}>
          Continuar jogo guardado
        </button>
      )}
      <h2 className="mt-8 text-sm font-semibold uppercase text-muted-foreground">1. Países</h2>
      <div className="mt-2 flex flex-wrap gap-2">
        {countries.map((c) => (
          <button
            key={c.code}
            onClick={() => toggle(c.code)}
            className={`${selected.includes(c.code) ? btn : btn2} flex items-center gap-2`}
          >
            <Flag code={c.code} /> {COUNTRIES[c.code]?.name ?? c.code} ({c.count})
          </button>
        ))}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        {active} nas divisões · {reserve} de fora (mercado, Taça e acesso à {GAME_CONFIG.numberOfDivisions}.ª divisão)
      </p>
      {!enough && (
        <p className="mt-2 text-sm text-destructive">
          São precisos {activeSlots()} clubes. Seleciona mais países ou cria clubes no editor.
        </p>
      )}
      {invalidTeams.length > 0 && (
        <div className="mt-3 rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          <b>Há {invalidTeams.length} clube(s) com plantel incompleto.</b>{" "}
          Cada clube precisa de pelo menos 11 jogadores definidos na base de dados.
          Nenhum jogador aleatório será criado.
          <div className="mt-1 text-xs">
            {invalidTeams.slice(0, 8).map((t) => t.name + " (" + (t.players?.length ?? 0) + "/11)").join(" · ")}
            {invalidTeams.length > 8 ? " · +" + (invalidTeams.length - 8) + " outros" : ""}
          </div>
        </div>
      )}
      {enough && (
        <>
          <h2 className="mt-8 text-sm font-semibold uppercase text-muted-foreground">2. O teu clube</h2>
          <div className="mt-2 flex gap-2">
            {Array.from({ length: GAME_CONFIG.numberOfDivisions }, (_, i) => i + 1).map((d) => (
              <button key={d} className={d === division ? btn : btn2} onClick={() => setDivision(d)}>
                Divisão {d}
              </button>
            ))}
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {list.map(({ seed: t }) => (
              <button
                key={t.id}
                onClick={() => newGame(t.id, seeds)}
                disabled={!enough || invalidTeams.length > 0}
                className={`${card} flex items-center justify-between text-left hover:border-primary disabled:cursor-not-allowed disabled:opacity-50`}
              >
                <TeamIdentity team={{ ...t, division, budget: 0, playerIds: [], lineup: [] }} />
                <span className="text-right font-mono-num text-xs text-muted-foreground">
                  Força {t.rating}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function divisionLabel(d: number) {
  return d === 0 ? "Fora das divisões" : `Divisão ${d}`;
}

function TeamIdentityWithFlag({ team, size = 26, bold = false }: { team: Team; size?: number; bold?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 min-w-0">
      <Flag code={team.country} size={16} />
      <TeamIdentity team={team} size={size} bold={bold} />
    </span>
  );
}

function CoachOffers({ state }: { state: GameState }) {
  const { takeOffer, rejectOffers, deleteSave } = useGame();
  if (state.careerOver) {
    return (
      <div className={`${card} mt-4 border-destructive`}>
        <div className="text-lg font-bold">Fim de carreira</div>
        <p className="text-sm text-muted-foreground">O teu clube caiu fora das divisões e ninguém te quis contratar.</p>
        <button className={`${btn} mt-3`} onClick={deleteSave}>Novo jogo</button>
      </div>
    );
  }
  if (!state.offers.length) return null;
  return (
    <div className={`${card} mt-4 border-primary`}>
      <div className="text-lg font-bold">Propostas de treinador para {seasonLabel(state.seasonYear)}</div>
      {state.offersMandatory && (
        <p className="text-sm text-destructive">O teu clube caiu fora das divisões: tens de aceitar uma proposta.</p>
      )}
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {state.offers.map((id) => {
          const t = state.teams[id];
          if (!t) return null;
          return (
            <div key={id} className="rounded-md border border-border p-3">
              <TeamIdentityWithFlag team={t} />
              <div className="mt-2 text-xs text-muted-foreground">
                {divisionLabel(t.division)} · Rating {teamRating(t, state.players)} · {formatMoney(t.budget)}
              </div>
              <button className={`${btn} mt-2 w-full`} onClick={() => takeOffer(id)}>Aceitar convite</button>
            </div>
          );
        })}
      </div>
      {!state.offersMandatory && (
        <button className={`${btn2} mt-3`} onClick={rejectOffers}>
          Recusar e continuar no {userTeam(state).name}
        </button>
      )}
    </div>
  );
}

function PlayerBids({ state }: { state: GameState }) {
  const { takeBid, refuseBid } = useGame();
  const bids = state.bids ?? [];
  if (!bids.length || state.match) return null;
  return (
    <>
      {bids.map((b) => {
        const p = state.players[b.playerId];
        const t = state.teams[b.teamId];
        if (!p || !t) return null;
        return (
          <div key={b.playerId} className={`${card} mt-4 flex flex-wrap items-center justify-between gap-3`}>
            <div className="flex items-center gap-3 text-sm">
              <TeamIdentityWithFlag team={t} size={32} />
              <span>
                O <b>{t.name}</b> oferece <b className="text-primary">{formatMoney(b.amount)}</b> por{" "}
                <span className="inline-flex items-center gap-1 align-middle">
                  <Flag code={p.nationality} size={16} />
                  <b>{p.name}</b>
                </span>{" "}
                ({p.position}, {p.rating}) — valor {formatMoney(p.transferValue)}
              </span>
            </div>
            <div className="flex gap-2">
              <button className={btn} onClick={() => takeBid(b.playerId)}>Aceitar</button>
              <button className={btn2} onClick={() => refuseBid(b.playerId)}>Recusar</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

function Game({ state }: { state: GameState }) {
  const { message, setMessage, save, deleteSave } = useGame();
  const [tab, setTab] = useState<Tab>("equipa");
  const team = userTeam(state);
  const activeTab: Tab = state.match ? "jogo" : tab;

  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <TeamBadge team={team} size={44} />
          <div>
            <div className="text-xl font-bold">{team.name}</div>
            <div className="text-sm text-muted-foreground">
              Época {seasonLabel(state.seasonYear)} · {divisionLabel(team.division)} · Jornada {state.round}/
              {totalRounds(state)} · Rating {teamRating(team, state.players)}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono-num text-sm text-primary">{formatMoney(team.budget)}</span>
          <button className={btn2} onClick={save}>Guardar</button>
          <button
            className={btn2}
            onClick={() => confirm("Apagar o jogo e começar de novo?") && deleteSave()}
          >
            Novo jogo
          </button>
        </div>
      </header>

      <nav className="mt-4 flex flex-wrap gap-1">
        {TABS.map(([id, label]) => (
          <button
            key={id}
            disabled={Boolean(state.match) && id !== "jogo"}
            onClick={() => setTab(id)}
            className={activeTab === id ? btn : btn2}
          >
            {label}
          </button>
        ))}
      </nav>

      {message && (
        <div className="mt-4 flex justify-between rounded-md border border-primary/50 bg-primary/10 px-3 py-2 text-sm">
          {message}
          <button onClick={() => setMessage(null)}>✕</button>
        </div>
      )}

      <CoachOffers state={state} />
      <PlayerBids state={state} />

      <main className="mt-4">
        {activeTab === "equipa" && <Squad state={state} team={team} />}
        {activeTab === "jogo" && <Match state={state} />}
        {activeTab === "classificacao" && <Standings state={state} />}
        {activeTab === "calendario" && <Calendar state={state} />}
        {activeTab === "transferencias" && <Transfers state={state} />}
        {activeTab === "taca" && <CupView state={state} />}
        {activeTab === "historico" && <History state={state} />}
      </main>
    </div>
  );
}

function lineupCounts(ids: number[], players: Record<number, Player>) {
  const c: Record<Position, number> = { GR: 0, DEF: 0, MED: 0, AV: 0 };
  for (const p of getPlayers(ids, players)) c[p.position]++;
  return c;
}

function Squad({ state, team }: { state: GameState; team: Team }) {
  const { setLineup } = useGame();
  const squad = sortSquad(getPlayers(team.playerIds, state.players));
  const counts = lineupCounts(team.lineup, state.players);
  const toggle = (id: number) => {
    if (team.lineup.includes(id)) setLineup(team.lineup.filter((x) => x !== id));
    else if (team.lineup.length < 11) setLineup([...team.lineup, id]);
  };
  return (
    <div className={card}>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm">
          Titulares: <b>{team.lineup.length}/11</b> · GR {counts.GR} · DEF {counts.DEF} · MED{" "}
          {counts.MED} · AV {counts.AV}
        </div>
        <span className="text-xs text-muted-foreground">Clica num jogador para o pôr/tirar do onze.</span>
      </div>
      <PlayerTable
        players={squad}
        highlight={team.lineup}
        onClick={toggle}
        action={(p) => (team.lineup.includes(p.id) ? "Titular" : "")}
      />
    </div>
  );
}

function PlayerTable({
  players,
  highlight = [],
  onClick,
  action,
}: {
  players: Player[];
  highlight?: number[];
  onClick?: (id: number) => void;
  action?: (p: Player) => React.ReactNode;
}) {
  return (
    <table className="w-full text-sm">
      <thead className="text-left text-xs text-muted-foreground">
        <tr>
          <th className="py-1">Pos</th>
          <th>Nome</th>
          <th>Nac.</th>
          <th className="text-right">Rating</th>
          <th className="text-right">Valor</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {players.map((p) => (
          <tr
            key={p.id}
            onClick={() => onClick?.(p.id)}
            className={`border-t border-border ${onClick ? "cursor-pointer hover:bg-accent" : ""} ${
              highlight.includes(p.id) ? "bg-primary/10" : ""
            }`}
          >
            <td className="py-1.5 font-mono-num text-xs">{p.position}</td>
            <td>{p.name}</td>
            <td><Flag code={p.nationality} /></td>
            <td className="text-right font-mono-num">{p.rating}</td>
            <td className="text-right font-mono-num text-muted-foreground">{formatMoney(p.transferValue)}</td>
            <td className="pl-2 text-right text-xs text-primary">{action?.(p)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Match({ state }: { state: GameState }) {
  const { startMatch, substitute, playSecondHalf, finishMatch } = useGame();
  const [outId, setOutId] = useState<number | null>(null);
  const team = userTeam(state);
  const match = state.match;
  const fixture = userFixture(state);

  if (!match) {
    if (!fixture) return <div className={card}>Sem jogo nesta jornada.</div>;
    const home = state.teams[fixture.homeId] as Team;
    const away = state.teams[fixture.awayId] as Team;
    const ok = team.lineup.length === 11;
    return (
      <div className={`${card} text-center`}>
        <div className="text-sm text-muted-foreground">Jornada {state.round}</div>
        <div className="my-6 flex items-center justify-center gap-6 text-lg">
          <TeamIdentity team={home} size={40} bold />
          <span className="text-muted-foreground">vs</span>
          <TeamIdentity team={away} size={40} bold />
        </div>
        {!ok && <p className="mb-3 text-sm text-destructive">Precisas de 11 titulares no Plantel.</p>}
        <button className={btn} disabled={!ok} onClick={startMatch}>
          Jogar 1.ª parte
        </button>
      </div>
    );
  }

  const home = state.teams[match.homeId] as Team;
  const away = state.teams[match.awayId] as Team;
  const starters = sortSquad(getPlayers(match.userLineup, state.players));
  const bench = sortSquad(
    getPlayers(team.playerIds.filter((id) => !match.userLineup.includes(id)), state.players),
  );

  return (
    <div className="space-y-4">
      <div className={`${card} text-center`}>
        <div className="text-sm text-muted-foreground">{match.finished ? "Final" : "Intervalo"}</div>
        <div className="my-4 flex items-center justify-center gap-6">
          <TeamIdentity team={home} size={40} bold />
          <span className="font-mono-num text-4xl font-bold">
            {match.homeGoals} - {match.awayGoals}
          </span>
          <TeamIdentity team={away} size={40} bold />
        </div>
        <ul className="text-sm text-muted-foreground">
          {match.events.length ? match.events.map((e, i) => <li key={i}>⚽ {e}</li>) : <li>Sem golos.</li>}
        </ul>
        <div className="mt-4">
          {match.finished ? (
            <button className={btn} onClick={finishMatch}>
              Avançar jornada
            </button>
          ) : (
            <button className={btn} onClick={playSecondHalf}>
              Jogar 2.ª parte
            </button>
          )}
        </div>
      </div>

      {!match.finished && (
        <div className="grid gap-4 md:grid-cols-2">
          <div className={card}>
            <div className="mb-2 text-sm font-semibold">
              Titulares — escolhe quem sai ({match.subsUsed}/{GAME_CONFIG.maxSubstitutions} substituições)
            </div>
            <PlayerTable
              players={starters}
              highlight={outId ? [outId] : []}
              onClick={(id) => setOutId(id === outId ? null : id)}
            />
          </div>
          <div className={card}>
            <div className="mb-2 text-sm font-semibold">Suplentes — escolhe quem entra</div>
            <PlayerTable
              players={bench}
              onClick={(id) => {
                if (outId && match.subsUsed < GAME_CONFIG.maxSubstitutions) {
                  substitute(outId, id);
                  setOutId(null);
                }
              }}
              action={() => (outId ? "Entrar" : "")}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function Standings({ state }: { state: GameState }) {
  const [division, setDivision] = useState(userTeam(state).division || GAME_CONFIG.numberOfDivisions);
  const rows = computeStandings(state.leagues[division] ?? [], divisionTeamIds(state, division));
  const { promotionSpots, relegationSpots, numberOfDivisions } = GAME_CONFIG;
  return (
    <div className={card}>
      <DivisionPicker value={division} onChange={setDivision} />
      <table className="mt-3 w-full text-sm">
        <thead className="text-left text-xs text-muted-foreground">
          <tr>
            <th>#</th><th>Equipa</th><th className="text-right">J</th><th className="text-right">V</th>
            <th className="text-right">E</th><th className="text-right">D</th><th className="text-right">GM-GS</th>
            <th className="text-right">Pts</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const t = state.teams[r.teamId] as Team;
            const up = division > 1 && i < promotionSpots;
            const down = division < numberOfDivisions && i >= rows.length - relegationSpots;
            return (
              <tr key={r.teamId} className={`border-t border-border ${t.id === state.userTeamId ? "bg-primary/10" : ""}`}>
                <td className={`py-1.5 font-mono-num ${up ? "text-primary" : down ? "text-destructive" : ""}`}>{i + 1}</td>
                <td><TeamIdentityWithFlag team={t} size={20} /></td>
                <td className="text-right font-mono-num">{r.played}</td>
                <td className="text-right font-mono-num">{r.won}</td>
                <td className="text-right font-mono-num">{r.drawn}</td>
                <td className="text-right font-mono-num">{r.lost}</td>
                <td className="text-right font-mono-num">{r.goalsFor}-{r.goalsAgainst}</td>
                <td className="text-right font-mono-num font-bold">{r.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function DivisionPicker({ value, onChange }: { value: number; onChange: (d: number) => void }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: GAME_CONFIG.numberOfDivisions }, (_, i) => i + 1).map((d) => (
        <button key={d} className={d === value ? btn : btn2} onClick={() => onChange(d)}>
          Div. {d}
        </button>
      ))}
    </div>
  );
}

function Calendar({ state }: { state: GameState }) {
  const team = userTeam(state);
  const rounds = state.leagues[team.division] ?? [];
  return (
    <div className={card}>
      <table className="w-full text-sm">
        <tbody>
          {rounds.map((round, i) => {
            const f = round.find((x) => x.homeId === team.id || x.awayId === team.id);
            if (!f) return null;
            return (
              <tr key={i} className={`border-t border-border ${i + 1 === state.round ? "bg-primary/10" : ""}`}>
                <td className="py-1.5 font-mono-num text-xs text-muted-foreground">J{i + 1}</td>
                <td className="text-right"><TeamIdentityWithFlag team={state.teams[f.homeId] as Team} size={20} /></td>
                <td className="px-3 text-center font-mono-num">
                  {f.homeGoals === null ? "–" : `${f.homeGoals}-${f.awayGoals}`}
                </td>
                <td><TeamIdentityWithFlag team={state.teams[f.awayId] as Team} size={20} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Transfers({ state }: { state: GameState }) {
  const { buy, sell } = useGame();
  const [pos, setPos] = useState<Position | "ALL">("ALL");
  const [maxPrice, setMaxPrice] = useState(true);
  const team = userTeam(state);
  const market = useMemo(
    () =>
      marketPlayers(state)
        .filter(({ player }) => pos === "ALL" || player.position === pos)
        .filter(({ player }) => !maxPrice || player.transferValue <= team.budget)
        .sort((a, b) => b.player.rating - a.player.rating)
        .slice(0, 40),
    [state, pos, maxPrice, team.budget],
  );
  const mine = sortSquad(getPlayers(team.playerIds, state.players));
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className={card}>
        <div className="mb-2 font-semibold">Mercado</div>
        <div className="mb-3 flex flex-wrap items-center gap-1">
          {(["ALL", "GR", "DEF", "MED", "AV"] as const).map((p) => (
            <button key={p} className={pos === p ? btn : btn2} onClick={() => setPos(p)}>
              {p === "ALL" ? "Todos" : p}
            </button>
          ))}
          <label className="ml-2 flex items-center gap-1 text-xs">
            <input type="checkbox" checked={maxPrice} onChange={(e) => setMaxPrice(e.target.checked)} />
            Só os que posso pagar
          </label>
        </div>
        <table className="w-full text-sm">
          <tbody>
            {market.map(({ player, teamId }) => (
              <tr key={player.id} className="border-t border-border">
                <td className="py-1.5 font-mono-num text-xs">{player.position}</td>
                <td>
                  <span className="inline-flex items-center gap-1">
                    <Flag code={player.nationality} size={16} />
                    {player.name}
                  </span>
                  <div className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    {teamId ? (
                      <>
                        <Flag code={state.teams[teamId]?.country ?? ""} size={14} />
                        {state.teams[teamId]?.name}
                      </>
                    ) : "Livre"}
                  </div>
                </td>
                <td className="text-right font-mono-num">{player.rating}</td>
                <td className="text-right font-mono-num text-xs">{formatMoney(player.transferValue)}</td>
                <td className="pl-2 text-right">
                  <button className={btn2} onClick={() => buy(player.id)}>Comprar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={card}>
        <div className="mb-2 font-semibold">O meu plantel ({mine.length})</div>
        <table className="w-full text-sm">
          <tbody>
            {mine.map((p) => (
              <tr key={p.id} className="border-t border-border">
                <td className="py-1.5 font-mono-num text-xs">{p.position}</td>
                <td>
                  <span className="inline-flex items-center gap-1">
                    <Flag code={p.nationality} size={16} />
                    {p.name}
                  </span>
                </td>
                <td className="text-right font-mono-num">{p.rating}</td>
                <td className="text-right font-mono-num text-xs">{formatMoney(p.transferValue)}</td>
                <td className="pl-2 text-right">
                  <button className={btn2} onClick={() => sell(p.id)}>Vender</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CupView({ state }: { state: GameState }) {
  const cup = state.cup;
  return (
    <div className="space-y-4">
      {cup.winnerId !== null && (
        <div className={`${card} text-center`}>
          🏆 Vencedor: <TeamIdentity team={state.teams[cup.winnerId] as Team} bold />
        </div>
      )}
      <p className="text-xs text-muted-foreground">
        Eliminatórias disputadas nas jornadas {GAME_CONFIG.cupRounds.join(", ")}.
      </p>
      {[...cup.rounds].reverse().map((round, i) => (
        <div key={i} className={card}>
          <div className="mb-2 font-semibold">{round.name}</div>
          <div className="grid gap-1 sm:grid-cols-2">
            {round.ties.map((tie, j) => {
              const h = state.teams[tie.homeId] as Team;
              const a = state.teams[tie.awayId] as Team;
              const mine = tie.homeId === state.userTeamId || tie.awayId === state.userTeamId;
              return (
                <div
                  key={j}
                  className={`grid grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] items-center gap-2 rounded px-2 py-1 text-sm ${mine ? "bg-primary/10" : ""}`}
                >
                  <div className={`min-w-0 ${tie.winnerId === h.id ? "font-bold" : ""}`}>
                    <TeamIdentityWithFlag team={h} size={18} />
                  </div>
                  <span className="w-14 text-center font-mono-num">
                    {tie.homeGoals === null ? "–" : `${tie.homeGoals}-${tie.awayGoals}${tie.penalties ? " (p)" : ""}`}
                  </span>
                  <div className={`min-w-0 flex justify-end ${tie.winnerId === a.id ? "font-bold" : ""}`}>
                    <TeamIdentityWithFlag team={a} size={18} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function History({ state }: { state: GameState }) {
  if (!state.history.length)
    return <div className={card}>Ainda não terminaste nenhuma época.</div>;
  return (
    <div className={card}>
      <table className="w-full text-sm">
        <thead className="text-left text-xs text-muted-foreground">
          <tr><th>Época</th><th>Divisão</th><th>Posição</th><th>Pts</th><th>Nota</th></tr>
        </thead>
        <tbody>
          {state.history.map((h, i) => (
            <tr key={i} className="border-t border-border">
              <td className="py-1.5">{h.season}</td>
              <td>{h.division}</td>
              <td>{h.position}.º</td>
              <td>{h.points}</td>
              <td>{h.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
