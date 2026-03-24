"use client";

import { motion } from "framer-motion";

export default function PrivatePlaceholder({ count }: { count?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative"
    >
      <div className="p-6 sm:p-8 bg-surface-container-low rounded-[2rem] relative overflow-hidden">
        {/* Top secret badge */}
        <div className="absolute -top-3 left-8 bg-primary text-white px-4 py-1 rounded-full text-xs font-black shadow-md z-10">
          비공개
        </div>

        {/* Sparkle decoration */}
        <div className="absolute top-3 right-4 text-2xl opacity-40 select-none">
          <motion.span
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            🔒
          </motion.span>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <span className="text-xl opacity-40">🔒</span>
          <p className="text-primary/60 italic font-body text-sm sm:text-base">
            {count && count > 1
              ? `이 구간에는 비공개 내용 ${count}개가 포함되어 있습니다`
              : "[비공개 내용입니다]"}
          </p>
        </div>

        {/* Washi tape bars */}
        <div className="mt-4 flex flex-wrap gap-2">
          <motion.span
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="bg-primary-container w-24 h-5 rounded-full inline-block"
          />
          <motion.span
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="bg-tertiary-container w-32 h-5 rounded-full inline-block"
          />
          <motion.span
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="bg-secondary-container w-16 h-5 rounded-full inline-block"
          />
        </div>
      </div>
    </motion.div>
  );
}
