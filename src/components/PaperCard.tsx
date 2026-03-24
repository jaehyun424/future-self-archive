"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Paper } from "@/lib/types";
import { paperEmoji } from "@/lib/typeLabels";

const typeColors: Record<
  Paper["type"],
  { bgColor: string }
> = {
  letter: { bgColor: "#FCE7F3" },
  checklist: { bgColor: "#DCFCE7" },
  imagination: { bgColor: "#F5F3FF" },
  priorities: { bgColor: "#FEF9C3" },
  goals: { bgColor: "#E0F2FE" },
  steps: { bgColor: "#FFEDD5" },
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
  const colors = typeColors[paper.type];
  const emoji = paperEmoji[paper.id] || "📄";
  const href = isVault ? `/vault/paper/${paper.id}` : `/paper/${paper.id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, type: "spring", damping: 25, stiffness: 120 }}
      whileTap={{ scale: 0.96 }}
    >
      <Link href={href} className="block group">
        <div className="relative bg-white rounded-[2rem] shadow-[0_12px_40px_-4px_rgba(133,77,103,0.1)] p-4 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 active:scale-[0.97] hover:shadow-[0_20px_60px_-8px_rgba(133,77,103,0.18)] overflow-hidden min-h-[200px] sm:min-h-[240px]">
          {/* Icon circle with per-paper emoji */}
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-3 shadow-inner"
            style={{ backgroundColor: colors.bgColor }}
          >
            <span className="text-3xl sm:text-4xl">{emoji}</span>
          </div>

          {/* Title */}
          <h3 className="font-headline font-bold text-sm sm:text-base text-on-surface mb-1 leading-tight">
            {paper.title}
          </h3>
          {paper.timeline && (
            <p className="text-[10px] sm:text-xs text-outline font-body italic">{paper.timeline}</p>
          )}

          {/* Num badge */}
          <div className="mt-auto pt-3 px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-[10px] font-bold tracking-wider">
            기록 {paper.num}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
