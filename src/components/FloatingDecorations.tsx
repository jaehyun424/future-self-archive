"use client";

import { motion } from "framer-motion";

const floatingItems: {
  emoji: string;
  top: string;
  left?: string;
  right?: string;
  delay: number;
  duration: number;
  size: string;
}[] = [
  { emoji: "🌸", top: "3%", left: "2%", delay: 0, duration: 6, size: "text-5xl" },
  { emoji: "🦋", top: "12%", right: "4%", delay: 0.8, duration: 7, size: "text-6xl" },
  { emoji: "🎀", top: "25%", left: "3%", delay: 1.5, duration: 5.5, size: "text-5xl" },
  { emoji: "🍰", top: "38%", right: "2%", delay: 0.3, duration: 8, size: "text-6xl" },
  { emoji: "🧸", top: "50%", left: "4%", delay: 1.2, duration: 6.5, size: "text-6xl" },
  { emoji: "🌷", top: "62%", right: "5%", delay: 2.5, duration: 7.5, size: "text-5xl" },
  { emoji: "🍬", top: "8%", left: "85%", delay: 0.6, duration: 6.8, size: "text-5xl" },
  { emoji: "🍭", top: "33%", right: "1%", delay: 1.8, duration: 7.2, size: "text-5xl" },
  { emoji: "🪷", top: "85%", right: "8%", delay: 2.2, duration: 6.2, size: "text-6xl" },
  { emoji: "🌺", top: "18%", left: "48%", delay: 0.2, duration: 6.4, size: "text-5xl" },
  { emoji: "🐱", top: "70%", right: "42%", delay: 1.0, duration: 7.8, size: "text-6xl" },
  { emoji: "💕", top: "78%", left: "6%", delay: 2.0, duration: 5.5, size: "text-5xl" },
  { emoji: "🎠", top: "45%", left: "90%", delay: 3.0, duration: 7.0, size: "text-5xl" },
  { emoji: "🧁", top: "92%", left: "30%", delay: 1.6, duration: 6.6, size: "text-6xl" },
  { emoji: "🌈", top: "58%", left: "50%", delay: 0.9, duration: 8.2, size: "text-5xl" },
];

export default function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingItems.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.size} select-none`}
          style={{ top: item.top, left: item.left, right: item.right }}
          animate={{
            y: [-16, 16, -16],
            rotate: [-12, 12, -12],
            opacity: [0.2, 0.5, 0.2],
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

      {/* Soft gradient orbs - bigger and more vivid */}
      <div className="absolute top-[15%] left-[10%] w-64 h-64 bg-primary-container/30 rounded-full blur-3xl" />
      <div className="absolute top-[55%] right-[8%] w-72 h-72 bg-tertiary-container/25 rounded-full blur-3xl" />
      <div className="absolute bottom-[15%] left-[45%] w-64 h-64 bg-secondary-container/25 rounded-full blur-3xl" />
      <div className="absolute top-[35%] left-[60%] w-56 h-56 bg-primary-container/20 rounded-full blur-3xl" />
    </div>
  );
}
