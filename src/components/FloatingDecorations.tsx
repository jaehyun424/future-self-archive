"use client";

import { motion } from "framer-motion";

const floatingItems: { emoji: string; top: string; left?: string; right?: string; delay: number; duration: number }[] = [
  { emoji: "✨", top: "10%", left: "5%", delay: 0, duration: 6 },
  { emoji: "💫", top: "25%", right: "8%", delay: 1, duration: 7 },
  { emoji: "🌸", top: "60%", left: "3%", delay: 2, duration: 5 },
  { emoji: "💖", top: "75%", right: "5%", delay: 0.5, duration: 8 },
  { emoji: "⭐", top: "40%", left: "92%", delay: 1.5, duration: 6.5 },
  { emoji: "🦋", top: "85%", left: "10%", delay: 3, duration: 7.5 },
];

export default function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingItems.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl sm:text-3xl opacity-20 select-none"
          style={{ top: item.top, left: item.left, right: item.right }}
          animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* Soft gradient orbs */}
      <div className="absolute top-[20%] left-[15%] w-32 h-32 bg-primary-container/20 rounded-full blur-3xl" />
      <div className="absolute top-[60%] right-[10%] w-40 h-40 bg-tertiary-container/15 rounded-full blur-3xl" />
      <div className="absolute bottom-[20%] left-[50%] w-36 h-36 bg-secondary-container/15 rounded-full blur-3xl" />
    </div>
  );
}
