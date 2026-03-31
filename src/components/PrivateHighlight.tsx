"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PrivateHighlight({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="relative pl-4 border-l-[3px] border-primary/25">
        <div className="py-1">{children}</div>
        <div className="mt-1">
          <span className="text-[10px] text-primary/40 font-bold tracking-wider">비공개</span>
        </div>
      </div>
    </motion.div>
  );
}
