"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Paper } from "@/lib/types";
import { paperEmoji } from "@/lib/typeLabels";

const cardBgGradients = [
  "linear-gradient(135deg, #fce7f3 0%, #ffffff 100%)",
  "linear-gradient(135deg, #fef3c7 0%, #ffffff 100%)",
  "linear-gradient(135deg, #dcfce7 0%, #ffffff 100%)",
  "linear-gradient(135deg, #ede9fe 0%, #ffffff 100%)",
  "linear-gradient(135deg, #ffedd5 0%, #ffffff 100%)",
  "linear-gradient(135deg, #e0f2fe 0%, #ffffff 100%)",
  "linear-gradient(135deg, #fdf2f8 0%, #ffffff 100%)",
  "linear-gradient(135deg, #ccfbf1 0%, #ffffff 100%)",
  "linear-gradient(135deg, #fef9c3 0%, #ffffff 100%)",
  "linear-gradient(135deg, #f3e8ff 0%, #ffffff 100%)",
];

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
  const bgGradient = cardBgGradients[index % cardBgGradients.length];

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
      whileTap={{ scale: 0.95, rotate: 1 }}
      whileHover={{
        y: -8,
        transition: { type: "spring", damping: 25, stiffness: 120 },
      }}
    >
      <Link href={href} className="block group">
        <div
          className="relative rounded-[2rem] shadow-[0_12px_40px_-4px_rgba(133,77,103,0.1)] p-4 sm:p-6 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-[0_20px_60px_-8px_rgba(133,77,103,0.18)] overflow-hidden min-h-[180px] sm:min-h-[220px]"
          style={{ background: bgGradient }}
        >
          {/* Icon circle with per-paper emoji */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/60 flex items-center justify-center mb-3 shadow-inner backdrop-blur-sm">
            <span className="text-4xl sm:text-5xl">{emoji}</span>
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
