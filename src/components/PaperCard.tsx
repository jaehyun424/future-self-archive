"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Paper } from "@/lib/types";
import { paperEmoji } from "@/lib/typeLabels";

const paperCardBg: Record<string, string> = {
  "wp1-1": "linear-gradient(135deg, #fdf2f8 0%, #ffffff 100%)",
  "wp1-2": "linear-gradient(135deg, #fffbeb 0%, #ffffff 100%)",
  "wp2-1": "linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)",
  "wp2-2": "linear-gradient(135deg, #f5f3ff 0%, #ffffff 100%)",
  "wp3": "linear-gradient(135deg, #fef2f2 0%, #ffffff 100%)",
  "wp4": "linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)",
  "wp5": "linear-gradient(135deg, #ecfeff 0%, #ffffff 100%)",
  "wp6": "linear-gradient(135deg, #fefce8 0%, #ffffff 100%)",
  "wp7": "linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)",
  "wp8": "linear-gradient(135deg, #fff7ed 0%, #ffffff 100%)",
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
  const emoji = paperEmoji[paper.id] || "📄";
  const href = isVault ? `/vault/paper/${paper.id}` : `/paper/${paper.id}`;
  const bgGradient =
    paperCardBg[paper.id] ||
    "linear-gradient(135deg, #fce7f3 0%, #ffffff 100%)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        type: "spring",
        damping: 25,
        stiffness: 120,
      }}
      whileTap={{ scale: 0.93, rotate: -1 }}
      whileHover={{
        y: -12,
        transition: { type: "spring", damping: 25, stiffness: 120 },
      }}
    >
      <Link href={href} className="block group">
        <div
          className="relative rounded-[2rem] shadow-[0_12px_40px_-4px_rgba(133,77,103,0.1)] p-3 sm:p-5 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-[0_20px_60px_-8px_rgba(133,77,103,0.18)] overflow-hidden min-h-[180px] sm:min-h-[220px]"
          style={{ background: bgGradient }}
        >
          {/* Icon circle with per-paper emoji */}
          <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-white/60 flex items-center justify-center mb-3 shadow-inner backdrop-blur-sm">
            <span className="text-3xl sm:text-4xl">{emoji}</span>
          </div>

          {/* Title */}
          <h3 className="font-headline font-bold text-sm sm:text-base text-on-surface mb-1 leading-tight">
            {paper.title}
          </h3>
          {paper.timeline && (
            <p className="text-[10px] sm:text-xs text-outline font-body italic">
              {paper.timeline}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
