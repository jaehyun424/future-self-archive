"use client";

import { motion } from "framer-motion";

const floatingItems: {
  emoji: string;
  top: string;
  left?: string;
  right?: string;
  delay: number;
  duration: number;
}[] = [
  { emoji: "🌺", top: "8%", left: "4%", delay: 0, duration: 6 },
  { emoji: "🎀", top: "20%", right: "6%", delay: 1, duration: 7 },
  { emoji: "🍬", top: "55%", left: "2%", delay: 2, duration: 5 },
  { emoji: "🧸", top: "70%", right: "4%", delay: 0.5, duration: 8 },
  { emoji: "🌷", top: "35%", left: "90%", delay: 1.5, duration: 6.5 },
  { emoji: "💫", top: "80%", left: "8%", delay: 3, duration: 7.5 },
  { emoji: "🦋", top: "45%", right: "3%", delay: 2.5, duration: 5.5 },
  { emoji: "📬", top: "12%", left: "85%", delay: 0.8, duration: 6.8 },
  { emoji: "🌟", top: "90%", right: "12%", delay: 1.8, duration: 7.2 },
];

export default function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingItems.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl sm:text-4xl opacity-25 select-none"
          style={{ top: item.top, left: item.left, right: item.right }}
          animate={{
            y: [-12, 12, -12],
            rotate: [-8, 8, -8],
            opacity: [0.15, 0.35, 0.15],
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
      <div className="absolute top-[20%] left-[15%] w-40 h-40 bg-primary-container/20 rounded-full blur-3xl" />
      <div className="absolute top-[60%] right-[10%] w-48 h-48 bg-tertiary-container/15 rounded-full blur-3xl" />
      <div className="absolute bottom-[20%] left-[50%] w-44 h-44 bg-secondary-container/15 rounded-full blur-3xl" />
    </div>
  );
}
