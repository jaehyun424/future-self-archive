"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Paper } from "@/lib/types";

const vaultGroups = [
  { title: "현재 → 미래에게 보내는 편지", emoji: "💌", href: "/vault/paper/wp1-1", sub: "3년 후 · 10년 후", bg: "linear-gradient(135deg, #fdf2f8 0%, #fff5f9 50%, #ffffff 100%)" },
  { title: "미래 → 현재에게 보내는 편지", emoji: "📮", href: "/vault/paper/wp2-1", sub: "3년 후 · 10년 후", bg: "linear-gradient(135deg, #f0fdf4 0%, #f5fff8 50%, #ffffff 100%)" },
  { title: "위협 요인 7가지", emoji: "⚡", href: "/vault/paper/wp3", bg: "linear-gradient(135deg, #fef2f2 0%, #fff5f5 50%, #ffffff 100%)" },
  { title: "미래의 나 상상 도구", emoji: "🌈", href: "/vault/paper/wp4", bg: "linear-gradient(135deg, #f0f9ff 0%, #f5faff 50%, #ffffff 100%)" },
  { title: "진실 7가지", emoji: "💎", href: "/vault/paper/wp5", bg: "linear-gradient(135deg, #ecfeff 0%, #f2feff 50%, #ffffff 100%)" },
  { title: "세 가지 우선순위 ①", emoji: "🎯", href: "/vault/paper/wp6", bg: "linear-gradient(135deg, #fefce8 0%, #fffef2 50%, #ffffff 100%)" },
  { title: "세 가지 우선순위 ②", emoji: "🚀", href: "/vault/paper/wp7", bg: "linear-gradient(135deg, #eff6ff 0%, #f5f9ff 50%, #ffffff 100%)" },
  { title: "미래의 내가 되는 7단계", emoji: "🪜", href: "/vault/paper/wp8", bg: "linear-gradient(135deg, #fff7ed 0%, #fffaf5 50%, #ffffff 100%)" },
];

export default function VaultDashboardClient({
  papers,
}: {
  papers: Paper[];
}) {
  return (
    <div className="bg-vault-texture min-h-[80vh] pb-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8">
        {/* Hero Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 120 }}
          className="mb-4"
        >
          <h1 className="font-headline font-extrabold text-2xl sm:text-3xl text-primary mb-2 leading-tight">
            나만 볼 수 있는 기록들 🐾
          </h1>
          <p className="text-on-surface-variant text-sm sm:text-base font-body max-w-md">
            비공개 내용을 포함한 전체 기록
          </p>
        </motion.div>

        {/* 8 Group Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {vaultGroups.map((group, index) => (
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
                  className="relative rounded-[2rem] shadow-[0_12px_40px_-4px_rgba(133,77,103,0.1)] p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_24px_60px_-8px_rgba(133,77,103,0.25)] will-change-transform overflow-hidden min-h-[150px] sm:min-h-[180px]"
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
        <div className="mt-4 mb-6 text-center opacity-40">
          <span className="text-xl">🐾 🌸 🐾</span>
        </div>
      </div>
    </div>
  );
}
