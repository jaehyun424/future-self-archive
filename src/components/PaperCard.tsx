"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Paper } from "@/lib/types";
import { paperEmoji } from "@/lib/typeLabels";

const cardBgGradients = [
  "linear-gradient(135deg, #fff0f5 0%, #ffe8ef 100%)",
  "linear-gradient(135deg, #fef3e2 0%, #fde8cd 100%)",
  "linear-gradient(135deg, #f0f4ff 0%, #e8edff 100%)",
  "linear-gradient(135deg, #f0fff4 0%, #dcffe7 100%)",
  "linear-gradient(135deg, #fef9f0 0%, #fdf2dc 100%)",
  "linear-gradient(135deg, #f5f0ff 0%, #ede4ff 100%)",
  "linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%)",
  "linear-gradient(135deg, #f0fffe 0%, #dcfff9 100%)",
  "linear-gradient(135deg, #fff8f0 0%, #ffedd5 100%)",
  "linear-gradient(135deg, #fdf0ff 0%, #f5dcff 100%)",
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
      whileTap={{ scale: 0.96 }}
      whileHover={{
        rotate: [-0.5, 0.5, -0.5, 0],
        transition: { duration: 0.4, repeat: Infinity },
      }}
    >
      <Link href={href} className="block group">
        <div
          className="relative rounded-[2rem] shadow-[0_12px_40px_-4px_rgba(133,77,103,0.1)] p-4 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 active:scale-[0.97] hover:shadow-[0_20px_60px_-8px_rgba(133,77,103,0.18)] overflow-hidden min-h-[180px] sm:min-h-[220px]"
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
