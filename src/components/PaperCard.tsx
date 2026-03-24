"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Paper } from "@/lib/types";

const typeConfig: Record<
  Paper["type"],
  { icon: string; emoji: string; color: string; bgColor: string; iconColor: string }
> = {
  letter: {
    icon: "mail",
    emoji: "💌",
    color: "from-pink-100 to-rose-50",
    bgColor: "#FCE7F3",
    iconColor: "#9D174D",
  },
  checklist: {
    icon: "checklist",
    emoji: "✅",
    color: "from-emerald-100 to-green-50",
    bgColor: "#DCFCE7",
    iconColor: "#166534",
  },
  imagination: {
    icon: "cloud",
    emoji: "🌈",
    color: "from-violet-100 to-purple-50",
    bgColor: "#F5F3FF",
    iconColor: "#5B21B6",
  },
  priorities: {
    icon: "emoji_events",
    emoji: "👑",
    color: "from-amber-100 to-yellow-50",
    bgColor: "#FEF9C3",
    iconColor: "#854D0E",
  },
  goals: {
    icon: "rocket_launch",
    emoji: "🚀",
    color: "from-sky-100 to-blue-50",
    bgColor: "#E0F2FE",
    iconColor: "#0369A1",
  },
  steps: {
    icon: "footprint",
    emoji: "🧭",
    color: "from-orange-100 to-amber-50",
    bgColor: "#FFEDD5",
    iconColor: "#9A3412",
  },
};

export default function PaperCard({
  paper,
  index,
  isVault,
}: {
  paper: Paper;
  index: number;
  isVault?: boolean;
}) {
  const config = typeConfig[paper.type];
  const href = isVault ? `/vault/paper/${paper.id}` : `/paper/${paper.id}`;
  const privateCount = paper.blocks.filter((b) => b.isPrivate).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, type: "spring", damping: 25, stiffness: 120 }}
      whileTap={{ scale: 0.96 }}
    >
      <Link href={href} className="block group">
        <div className="relative bg-white rounded-[2rem] shadow-[0_12px_40px_-4px_rgba(133,77,103,0.1)] p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-8px_rgba(133,77,103,0.18)] overflow-hidden">
          {/* Decorative rotation badge */}
          {index % 3 === 0 && (
            <div className="absolute -top-2 -right-2 w-16 h-6 bg-secondary-container opacity-80 rotate-[4deg] rounded-sm" />
          )}

          {/* Icon circle */}
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 shadow-inner"
            style={{ backgroundColor: config.bgColor }}
          >
            <span
              className="material-symbols-outlined text-3xl sm:text-4xl"
              style={{ color: config.iconColor, fontVariationSettings: "'FILL' 1" }}
            >
              {config.icon}
            </span>
          </div>

          {/* Emoji decoration */}
          <span className="absolute top-4 left-4 text-2xl opacity-60 select-none">
            {config.emoji}
          </span>

          {/* Title */}
          <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface mb-1 leading-tight">
            {paper.title}
          </h3>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant mb-1">
            {paper.subtitle}
          </p>
          {paper.timeline && (
            <p className="text-xs text-outline font-body italic">{paper.timeline}</p>
          )}

          {/* Num badge */}
          <div className="mt-4 px-4 py-1 bg-primary-container text-on-primary-container rounded-full text-[10px] font-bold uppercase tracking-widest"
            style={{ transform: index % 2 === 0 ? "rotate(3deg)" : "rotate(-3deg)" }}
          >
            Work Paper {paper.num}
          </div>

          {/* Private indicator */}
          {privateCount > 0 && !isVault && (
            <div className="mt-3 flex items-center gap-1 text-xs text-outline">
              <span className="material-symbols-outlined text-sm">lock</span>
              <span>비공개 {privateCount}개</span>
            </div>
          )}
          {isVault && (
            <div className="mt-3 flex items-center gap-1 text-xs text-tertiary font-bold">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
              <span>전체 공개</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
