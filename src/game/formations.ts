/** Formações disponíveis, agrupadas por orientação táctica. */
export const FORMATION_GROUPS = [
  {
    name: "Mais defensivas",
    containerClass: "border-sky-500/25 bg-sky-500/5",
    labelClass: "text-sky-700 dark:text-sky-300",
    buttonClass: "border-sky-500/25 bg-sky-500/5 hover:bg-sky-500/10",
    formations: [
      { name: "5-4-1", DEF: 5, MED: 4, AV: 1 },
      { name: "4-5-1", DEF: 4, MED: 5, AV: 1 },
    ],
  },
  {
    name: "Mais equilibradas",
    containerClass: "border-emerald-500/25 bg-emerald-500/5",
    labelClass: "text-emerald-700 dark:text-emerald-300",
    buttonClass: "border-emerald-500/25 bg-emerald-500/5 hover:bg-emerald-500/10",
    formations: [
      { name: "4-4-2", DEF: 4, MED: 4, AV: 2 },
      { name: "3-5-2", DEF: 3, MED: 5, AV: 2 },
    ],
  },
  {
    name: "Mais ofensivas",
    containerClass: "border-orange-500/25 bg-orange-500/5",
    labelClass: "text-orange-700 dark:text-orange-300",
    buttonClass: "border-orange-500/25 bg-orange-500/5 hover:bg-orange-500/10",
    formations: [
      { name: "4-3-3", DEF: 4, MED: 3, AV: 3 },
      { name: "3-4-3", DEF: 3, MED: 4, AV: 3 },
    ],
  },
] as const;
