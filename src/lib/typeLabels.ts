export const typeLabelsKo: Record<string, string> = {
  letter: "편지",
  checklist: "체크리스트",
  imagination: "상상",
  priorities: "우선순위",
  goals: "목표",
  steps: "실행",
};

export const typeEmoji: Record<string, string> = {
  letter: "💌",
  checklist: "✅",
  imagination: "🌈",
  priorities: "👑",
  goals: "🚀",
  steps: "🧭",
};

export const typeGradients: Record<string, { bg: string; emoji: string }> = {
  letter: { bg: "from-pink-200 via-pink-100 to-rose-50", emoji: "💌" },
  checklist: { bg: "from-emerald-200 via-emerald-100 to-green-50", emoji: "✅" },
  imagination: { bg: "from-violet-200 via-violet-100 to-purple-50", emoji: "🌈" },
  priorities: { bg: "from-amber-200 via-amber-100 to-yellow-50", emoji: "👑" },
  goals: { bg: "from-sky-200 via-sky-100 to-blue-50", emoji: "🚀" },
  steps: { bg: "from-orange-200 via-orange-100 to-amber-50", emoji: "🧭" },
};
