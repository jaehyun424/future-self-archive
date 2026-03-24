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
  { emoji: "🌸", top: "6%", left: "3%", delay: 0, duration: 6 },
  { emoji: "🦋", top: "18%", right: "5%", delay: 1, duration: 7 },
  { emoji: "🎀", top: "32%", left: "2%", delay: 2, duration: 5.5 },
  { emoji: "🍰", top: "50%", right: "3%", delay: 0.5, duration: 8 },
  { emoji: "🧸", top: "65%", left: "4%", delay: 1.5, duration: 6.5 },
  { emoji: "🌷", top: "78%", right: "6%", delay: 3, duration: 7.5 },
  { emoji: "💫", top: "88%", left: "8%", delay: 2.5, duration: 5.5 },
  { emoji: "🍬", top: "12%", left: "88%", delay: 0.8, duration: 6.8 },
  { emoji: "🍭", top: "42%", right: "2%", delay: 1.8, duration: 7.2 },
  { emoji: "🪷", top: "92%", right: "10%", delay: 2.2, duration: 6.2 },
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
            y: [-14, 14, -14],
            rotate: [-10, 10, -10],
            opacity: [0.15, 0.4, 0.15],
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
      <div className="absolute top-[15%] left-[10%] w-48 h-48 bg-primary-container/25 rounded-full blur-3xl" />
      <div className="absolute top-[55%] right-[8%] w-56 h-56 bg-tertiary-container/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[15%] left-[45%] w-52 h-52 bg-secondary-container/20 rounded-full blur-3xl" />
      <div className="absolute top-[35%] left-[60%] w-40 h-40 bg-primary-container/15 rounded-full blur-3xl" />
    </div>
  );
}
