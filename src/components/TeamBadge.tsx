import { useState } from "react";
import type { Team } from "@/game/types";

interface Props {
  team: Team;
  size?: number;
  className?: string;
}

/** Badge da equipa: usa a imagem em team.badge; se não existir, gera um escudo com as cores. */
export function TeamBadge({ team, size = 32, className = "" }: Props) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(team.badge) && !failed;

  if (showImage) {
    return (
      <img
        src={team.badge}
        alt={team.name}
        width={size}
        height={size}
        onError={() => setFailed(true)}
        className={`shrink-0 object-contain ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center font-bold ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.34,
        borderRadius: size * 0.22,
        background: `linear-gradient(140deg, ${team.primaryColor} 0%, ${team.primaryColor} 55%, ${team.accentColor} 55%, ${team.accentColor} 100%)`,
        color: team.secondaryColor,
        border: `1px solid ${team.accentColor}`,
        letterSpacing: "0.02em",
      }}
      aria-label={team.name}
    >
      {team.abbreviation}
    </span>
  );
}
