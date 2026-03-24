"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PrivateHighlight({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative"
    >
      <div className="p-6 sm:p-8 bg-primary-container/20 rounded-[2rem] relative overflow-hidden border-l-4 border-primary/30">
        {/* Private label */}
        <div className="absolute -top-3 right-6 bg-primary/80 text-white px-3 py-0.5 rounded-full text-[10px] font-bold shadow-sm flex items-center gap-1">
          <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
            visibility
          </span>
          PRIVATE
        </div>

        <div className="pt-1">{children}</div>
      </div>
    </motion.div>
  );
}
