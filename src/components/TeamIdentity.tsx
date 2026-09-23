import { TeamBadge } from "./TeamBadge";
import type { Team } from "@/game/types";

interface Props {
  team: Team;
  size?: number;
  showDivision?: boolean;
  bold?: boolean;
  className?: string;
}

/** [BADGE] Nome da equipa — usa automaticamente as cores da equipa. */
export function TeamIdentity({
  team,
  size = 26,
  showDivision = false,
  bold = false,
  className = "",
}: Props) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <TeamBadge team={team} size={size} />
      <span className="inline-flex flex-col leading-tight">
        <span
          className={bold ? "font-semibold" : ""}
          style={{ borderBottom: `2px solid ${team.primaryColor}` }}
        >
          {team.name}
        </span>
        {showDivision && (
          <span className="text-xs text-muted-foreground">Divisão {team.division}</span>
        )}
      </span>
    </span>
  );
}
