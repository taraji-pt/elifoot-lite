import { Flag } from "@/components/Flag";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { GAME_CONFIG } from "@/data/gameConfig";
import { TEAMS } from "@/data/teams";
import { TeamIdentity } from "@/components/TeamIdentity";
import { TeamBadge } from "@/components/TeamBadge";
import { GameProvider, useGame } from "@/state/GameProvider";
import { divisionTeamIds, marketPlayers, totalRounds, userFixture, userTeam } from "@/game/engine";
import { seasonLabel } from "@/game/newGame";
import { formatMoney, getPlayers, sortSquad, teamRating } from "@/game/ratings";
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
  const [division, setDivision] = useState<number>(GAME_CONFIG.numberOfDivisions);
  const teams = TEAMS.filter((t) => t.division === division);
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-4xl font-bold tracking-tight">
        Mini <span className="text-primary">Elifoot</span>
      </h1>
      <p className="mt-2 text-muted-foreground">Escolhe uma equipa e tenta chegar à 1.ª divisão.</p>
      {saveExists && (
        <button className={`${btn} mt-6`} onClick={load}>
          Continuar jogo guardado
        </button>
      )}
      <div className="mt-8 flex gap-2">
        {Array.from({ length: GAME_CONFIG.numberOfDivisions }, (_, i) => i + 1).map((d) => (
          <button
            key={d}
            className={d === division ? btn : btn2}
            onClick={() => setDivision(d)}
          >
            Divisão {d}
          </button>
        ))}
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {teams.map((t) => (
          <button
            key={t.id}
            onClick={() => newGame(t.id)}
            className={`${card} flex items-center justify-between text-left hover:border-primary`}
          >
            <TeamIdentity team={{ ...t, budget: 0, playerIds: [], lineup: [] }} />
            <span className="text-right font-mono-num text-xs text-muted-foreground">
              Força {t.rating}
              <br />~{formatMoney(Math.round(transferValueFor(t.rating) * 1.3 / 10000) * 10000)}
            </span>
          </button>
        ))}
      </div>
    </div>
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
              Época {seasonLabel(state.seasonYear)} · Divisão {team.division} · Jornada {state.round}/
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
  const [division, setDivision] = useState(userTeam(state).division);
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
                <td><TeamIdentity team={t} size={20} /></td>
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
                <td className="text-right"><TeamIdentity team={state.teams[f.homeId] as Team} size={20} /></td>
                <td className="px-3 text-center font-mono-num">
                  {f.homeGoals === null ? "–" : `${f.homeGoals}-${f.awayGoals}`}
                </td>
                <td><TeamIdentity team={state.teams[f.awayId] as Team} size={20} /></td>
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
                  {player.name}
                  <div className="text-xs text-muted-foreground">
                    {teamId ? state.teams[teamId]?.name : "Livre"}
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
                <td>{p.name}</td>
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
                <div key={j} className={`flex items-center justify-between rounded px-2 py-1 text-sm ${mine ? "bg-primary/10" : ""}`}>
                  <span className={tie.winnerId === h.id ? "font-bold" : ""}><TeamIdentity team={h} size={18} /></span>
                  <span className="font-mono-num">
                    {tie.homeGoals === null ? "–" : `${tie.homeGoals}-${tie.awayGoals}${tie.penalties ? " (p)" : ""}`}
                  </span>
                  <span className={tie.winnerId === a.id ? "font-bold" : ""}><TeamIdentity team={a} size={18} /></span>
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
