"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PaperCard from "@/components/PaperCard";
import LottieWrapper from "@/components/LottieWrapper";
import type { Paper } from "@/lib/types";

export default function CoverClient({ papers }: { papers: Paper[] }) {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 pb-16 pt-8 bg-sticker-texture">
        {/* Decorative background elements */}
        <div className="absolute top-10 left-6 -rotate-12 opacity-30 select-none">
          <span
            className="material-symbols-outlined text-6xl text-primary-container"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        </div>
        <div className="absolute bottom-40 right-8 rotate-12 opacity-30 select-none">
          <span
            className="material-symbols-outlined text-7xl text-tertiary-container"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            favorite
          </span>
        </div>
        <div className="absolute top-1/3 right-4 rotate-6 opacity-20 select-none hidden md:block">
          <span
            className="material-symbols-outlined text-8xl text-secondary-container"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            auto_awesome
          </span>
        </div>

        <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-8 sm:space-y-12">
          {/* Hero Image with Polaroid Frame */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="relative group"
          >
            {/* Washi tape decorations */}
            <div className="absolute -top-3 -right-6 w-20 h-6 bg-secondary-container opacity-80 rotate-[4deg] z-10 hidden sm:block rounded-sm" />
            <div className="absolute -bottom-3 -left-6 w-20 h-6 bg-tertiary-container opacity-70 rotate-[6deg] z-10 hidden sm:block rounded-sm" />

            <div className="relative bg-white p-4 sm:p-6 rounded-[3rem] puffy-shadow transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="relative w-full max-w-sm mx-auto aspect-[4/3] rounded-[2rem] overflow-hidden">
                <Image
                  src="/images/hero-journal.jpg"
                  alt="Journal aesthetic"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Sticker badge */}
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 12 }}
                transition={{ delay: 0.5, type: "spring", damping: 15 }}
                className="absolute -bottom-5 -right-4 sm:-right-6 bg-primary-container text-on-primary-container px-5 py-3 rounded-full font-headline font-bold text-sm sm:text-base puffy-shadow border-4 border-white"
              >
                FOR YOU ✨
              </motion.div>
            </div>
          </motion.div>

          {/* Lottie sparkle */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32 pointer-events-none opacity-60">
            <LottieWrapper
              src="https://lottie.host/2bc21e6b-433e-4060-9160-15204dde2a6a/UkfXxMFfaP.lottie"
              className="w-full h-full"
            />
          </div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", damping: 25 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold tracking-tighter text-primary leading-tight">
              Future Self Archive
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-on-primary-container font-bold">
              미래의 나에게 보내는 기록
            </p>
            <p className="text-base sm:text-lg text-on-surface-variant font-body mt-2">
              과거에서 온 <span className="text-primary font-bold">행복한 메시지</span>가
              <br className="sm:hidden" /> 당신을 기다리고 있어요
            </p>
            <p className="text-sm text-outline italic font-body">
              김재현 · 2026.03.24
            </p>
          </motion.div>

          {/* Private badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 rounded-full"
          >
            <span className="material-symbols-outlined text-primary text-base">lock</span>
            <span className="text-sm text-primary font-bold">일부 내용은 비공개입니다</span>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-4"
          >
            <span className="material-symbols-outlined text-3xl text-outline/40">
              keyboard_arrow_down
            </span>
          </motion.div>
        </div>
      </section>

      {/* Papers Grid Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-container text-on-primary-container rounded-full font-bold text-sm tracking-wider">
            <span className="text-lg">📜</span>
            <span>8 Work Papers</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {papers.map((paper, index) => (
            <PaperCard key={paper.id} paper={paper} index={index} />
          ))}
        </div>

        {/* Bottom decorative dots */}
        <div className="mt-16 flex justify-center gap-3">
          <div className="w-3 h-3 rounded-full bg-primary-container" />
          <div className="w-3 h-3 rounded-full bg-secondary-container" />
          <div className="w-3 h-3 rounded-full bg-tertiary-container" />
        </div>
      </section>
    </div>
  );
}
