"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Paper } from "@/lib/types";
import { typeLabelsKo } from "@/lib/typeLabels";

const typeConfig: Record<
  Paper["type"],
  { emoji: string; color: string; bgColor: string; iconColor: string }
> = {
  letter: {
    emoji: "💌",
    color: "from-pink-100 to-rose-50",
    bgColor: "#FCE7F3",
    iconColor: "#9D174D",
  },
  checklist: {
    emoji: "✅",
    color: "from-emerald-100 to-green-50",
    bgColor: "#DCFCE7",
    iconColor: "#166534",
  },
  imagination: {
    emoji: "🌈",
    color: "from-violet-100 to-purple-50",
    bgColor: "#F5F3FF",
    iconColor: "#5B21B6",
  },
  priorities: {
    emoji: "👑",
    color: "from-amber-100 to-yellow-50",
    bgColor: "#FEF9C3",
    iconColor: "#854D0E",
  },
  goals: {
    emoji: "🚀",
    color: "from-sky-100 to-blue-50",
    bgColor: "#E0F2FE",
    iconColor: "#0369A1",
  },
  steps: {
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
        <div className="relative bg-white rounded-[2rem] shadow-[0_12px_40px_-4px_rgba(133,77,103,0.1)] p-4 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 active:scale-[0.97] hover:shadow-[0_20px_60px_-8px_rgba(133,77,103,0.18)] overflow-hidden">
          {/* Decorative rotation badge */}
          {index % 3 === 0 && (
            <div className="absolute -top-2 -right-2 w-16 h-6 bg-secondary-container opacity-80 rotate-[4deg] rounded-sm" />
          )}

          {/* Icon circle with emoji */}
          <div
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 shadow-inner"
            style={{ backgroundColor: config.bgColor }}
          >
            <span className="text-2xl sm:text-3xl">{config.emoji}</span>
          </div>

          {/* Type label */}
          <span className="absolute top-3 left-3 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full opacity-70" style={{ backgroundColor: config.bgColor, color: config.iconColor }}>
            {config.emoji}{typeLabelsKo[paper.type]}
          </span>

          {/* Title */}
          <h3 className="font-headline font-bold text-sm sm:text-base text-on-surface mb-1 leading-tight">
            {paper.title}
          </h3>
          <p className="font-body text-[10px] sm:text-xs text-on-surface-variant mb-1">
            {paper.subtitle}
          </p>
          {paper.timeline && (
            <p className="text-[10px] sm:text-xs text-outline font-body italic">{paper.timeline}</p>
          )}

          {/* Num badge */}
          <div className="mt-3 px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-[10px] font-bold tracking-wider"
            style={{ transform: index % 2 === 0 ? "rotate(3deg)" : "rotate(-3deg)" }}
          >
            워크페이퍼 {paper.num}
          </div>

          {/* Private indicator */}
          {privateCount > 0 && !isVault && (
            <div className="mt-2 flex items-center gap-1 text-[10px] sm:text-xs text-outline">
              <span>🔒</span>
              <span>비공개 {privateCount}개</span>
            </div>
          )}
          {isVault && (
            <div className="mt-2 flex items-center gap-1 text-[10px] sm:text-xs text-tertiary font-bold">
              <span>👁️</span>
              <span>전체 공개</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
