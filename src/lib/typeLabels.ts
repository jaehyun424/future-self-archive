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
  checklist: "📋",
  imagination: "🌈",
  priorities: "👑",
  goals: "🚀",
  steps: "🧭",
};

export const typeGradients: Record<string, { bg: string; emoji: string }> = {
  letter: { bg: "from-pink-200 via-pink-100 to-rose-50", emoji: "💌" },
  checklist: { bg: "from-emerald-200 via-emerald-100 to-green-50", emoji: "📋" },
  imagination: { bg: "from-violet-200 via-violet-100 to-purple-50", emoji: "🌈" },
  priorities: { bg: "from-amber-200 via-amber-100 to-yellow-50", emoji: "👑" },
  goals: { bg: "from-sky-200 via-sky-100 to-blue-50", emoji: "🚀" },
  steps: { bg: "from-orange-200 via-orange-100 to-amber-50", emoji: "🧭" },
};

// paper.id별 고유 이모지 매핑 (카드, 히어로에 사용)
export const paperEmoji: Record<string, string> = {
  "wp1-1": "💗",
  "wp1-2": "🕰️",
  "wp2-1": "📮",
  "wp2-2": "🔮",
  "wp3": "⚡",
  "wp4": "🌈",
  "wp5": "💎",
  "wp6": "🎯",
  "wp7": "🚀",
  "wp8": "🪜",
};

// paper.id별 그라데이션
export const paperGradients: Record<string, string> = {
  "wp1-1": "from-pink-200 via-pink-100 to-rose-50",
  "wp1-2": "from-amber-200 via-amber-100 to-yellow-50",
  "wp2-1": "from-green-200 via-emerald-100 to-green-50",
  "wp2-2": "from-violet-200 via-violet-100 to-purple-50",
  "wp3": "from-red-200 via-orange-100 to-yellow-50",
  "wp4": "from-sky-200 via-sky-100 to-blue-50",
  "wp5": "from-cyan-200 via-cyan-100 to-teal-50",
  "wp6": "from-amber-300 via-yellow-100 to-orange-50",
  "wp7": "from-blue-200 via-indigo-100 to-blue-50",
  "wp8": "from-orange-200 via-orange-100 to-amber-50",
};

// paper.id별 이미지 경로
export const paperImages: Record<string, string> = {
  "wp1-1": "/images/wp1-1.jpg",
  "wp1-2": "/images/wp1-2.jpg",
  "wp2-1": "/images/wp2-1.jpg",
  "wp2-2": "/images/wp2-2.jpg",
  "wp3": "/images/wp3.jpg",
  "wp4": "/images/wp4.jpg",
  "wp5": "/images/wp5.jpg",
  "wp6": "/images/wp6.jpg",
  "wp7": "/images/wp7.jpg",
  "wp8": "/images/wp8.jpg",
};

// paper.id별 구분선 이모지 (각 페이지마다 다른 조합)
export const paperDividers: Record<string, [string, string, string]> = {
  "wp1-1": ["🌸", "💕", "🌸"],
  "wp1-2": ["⏳", "✧", "⏳"],
  "wp2-1": ["🌿", "☘️", "🌿"],
  "wp2-2": ["🌙", "⭐", "🌙"],
  "wp3": ["🔥", "💥", "🔥"],
  "wp4": ["☁️", "🦋", "☁️"],
  "wp5": ["✧", "💎", "✧"],
  "wp6": ["🏹", "✦", "🏹"],
  "wp7": ["🌟", "🛤️", "🌟"],
  "wp8": ["🪜", "✦", "🪜"],
};
