import { COUNTRIES } from "@/data/countries";

/** Bandeira SVG (flag-icons, open-source MIT) a partir do código de 3 letras. */
export function Flag({ code, size = 18 }: { code: string; size?: number }) {
  const c = COUNTRIES[code];
  if (!c) return <span className="text-xs text-muted-foreground">{code}</span>;
  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/${c.iso2}.svg`}
      alt={c.name}
      title={c.name}
      width={size}
      height={Math.round((size * 3) / 4)}
      loading="lazy"
      className="inline-block rounded-[2px] shadow-sm"
      style={{ width: size, height: Math.round((size * 3) / 4) }}
    />
  );
}
