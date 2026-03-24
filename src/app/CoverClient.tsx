"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FloatingDecorations from "@/components/FloatingDecorations";

const groups = [
  { title: "현재 → 미래에게 보내는 편지", emoji: "💌", href: "/paper/wp1-1", sub: "3년 후 · 10년 후", bg: "linear-gradient(135deg, #fdf2f8 0%, #fff5f9 50%, #ffffff 100%)" },
  { title: "미래 → 현재에게 보내는 편지", emoji: "📮", href: "/paper/wp2-1", sub: "3년 후 · 10년 후", bg: "linear-gradient(135deg, #f0fdf4 0%, #f5fff8 50%, #ffffff 100%)" },
  { title: "위협 요인 7가지", emoji: "⚡", href: "/paper/wp3", bg: "linear-gradient(135deg, #fef2f2 0%, #fff5f5 50%, #ffffff 100%)" },
  { title: "미래의 나 상상 도구", emoji: "🌈", href: "/paper/wp4", bg: "linear-gradient(135deg, #f0f9ff 0%, #f5faff 50%, #ffffff 100%)" },
  { title: "진실 7가지", emoji: "💎", href: "/paper/wp5", bg: "linear-gradient(135deg, #ecfeff 0%, #f2feff 50%, #ffffff 100%)" },
  { title: "세 가지 우선순위 ①", emoji: "🎯", href: "/paper/wp6", bg: "linear-gradient(135deg, #fefce8 0%, #fffef2 50%, #ffffff 100%)" },
  { title: "세 가지 우선순위 ②", emoji: "🚀", href: "/paper/wp7", bg: "linear-gradient(135deg, #eff6ff 0%, #f5f9ff 50%, #ffffff 100%)" },
  { title: "미래의 내가 되는 7단계", emoji: "🪜", href: "/paper/wp8", bg: "linear-gradient(135deg, #fff7ed 0%, #fffaf5 50%, #ffffff 100%)" },
];

export default function CoverClient() {
  return (
    <div className="relative overflow-hidden">
      <FloatingDecorations />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 pb-12 pt-8">
        <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-6 sm:space-y-8">
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="relative w-full max-w-md"
          >
            <div className="rounded-[3rem] overflow-hidden puffy-shadow">
              <img
                src="/images/cover-hero.jpg"
                alt=""
                className="w-full h-48 sm:h-64 object-cover"
              />
            </div>
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", damping: 25, stiffness: 120 }}
            className="space-y-4 -mt-4"
          >
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary font-bold leading-tight">
              미래의 나에게 보내는 기록
            </p>
            <p className="text-base sm:text-lg text-on-surface-variant font-body">
              과거에서 온{" "}
              <span className="text-primary font-bold">행복한 메시지</span>가
              <br className="sm:hidden" /> 당신을 기다리고 있어요
            </p>
            <p className="text-sm text-outline font-body max-w-md mx-auto">
              {"(벤저민 하디 '퓨처 셀프' 워크지를 바탕으로 작성한 내용)"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 8 Group Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {groups.map((group, index) => (
            <motion.div
              key={group.href}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                type: "spring",
                damping: 25,
                stiffness: 120,
              }}
              whileTap={{ scale: 0.93, rotate: -1 }}
              className="group"
            >
              <Link href={group.href} className="block">
                <div
                  className="relative rounded-[2rem] shadow-[0_12px_40px_-4px_rgba(133,77,103,0.1)] p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_24px_60px_-8px_rgba(133,77,103,0.25)] overflow-hidden min-h-[180px] sm:min-h-[220px] will-change-transform"
                  style={{ background: group.bg }}
                >
                  <span className="text-4xl sm:text-5xl mb-3">{group.emoji}</span>
                  <h3 className="font-headline font-bold text-sm sm:text-base text-on-surface leading-tight">
                    {group.title}
                  </h3>
                  {group.sub && (
                    <p className="text-xs text-outline mt-1.5">{group.sub}</p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-10 mb-6 text-center opacity-40">
          <span className="text-xl">🐾 🌸 🐾</span>
        </div>
      </section>
    </div>
  );
}
