"use client";

import { motion } from "framer-motion";
import PaperCard from "@/components/PaperCard";
import LottieWrapper from "@/components/LottieWrapper";
import FloatingDecorations from "@/components/FloatingDecorations";
import type { Paper } from "@/lib/types";

export default function CoverClient({ papers }: { papers: Paper[] }) {
  return (
    <div className="relative overflow-hidden">
      <FloatingDecorations />

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center px-6 pb-12 pt-8"
        style={{ background: "linear-gradient(180deg, #fff5f9 0%, #f8f9fa 100%)" }}
      >
        <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-6 sm:space-y-8">
          {/* Hero image with emoji overlay */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="relative w-full max-w-md"
          >
            <div className="relative rounded-[3rem] overflow-hidden puffy-shadow">
              <img src="/images/cover-hero.jpg" alt="" className="w-full h-48 sm:h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-5 text-5xl sm:text-6xl">
                <motion.span
                  animate={{ rotate: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  💌
                </motion.span>
                <motion.span
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                >
                  🔮
                </motion.span>
                <motion.span
                  animate={{ rotate: [5, -5, 5] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                >
                  🚀
                </motion.span>
              </div>
            </div>

            {/* Sticker badge */}
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 12 }}
              transition={{ delay: 0.5, type: "spring", damping: 15 }}
              className="absolute -bottom-4 -right-3 sm:-right-5 bg-primary-container text-on-primary-container px-4 py-2 rounded-full font-headline font-bold text-xs sm:text-sm puffy-shadow border-4 border-white"
            >
              너를 위한 기록
            </motion.div>
          </motion.div>

          {/* Lottie sparkle */}
          <div className="w-24 h-24 pointer-events-none opacity-60">
            <LottieWrapper
              src="/lottie/sparkle.json"
              className="w-full h-full"
            />
          </div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", damping: 25 }}
            className="space-y-3"
          >
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary font-bold leading-tight">
              미래의 나에게 보내는 기록
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-headline font-extrabold tracking-tighter text-on-surface-variant leading-tight">
              Future Self Archive
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant font-body mt-2">
              과거에서 온 <span className="text-primary font-bold">행복한 메시지</span>가
              <br className="sm:hidden" /> 당신을 기다리고 있어요
            </p>
          </motion.div>

          {/* Private badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 rounded-full"
          >
            <span className="text-base">🔒</span>
            <span className="text-sm text-primary font-bold">일부 내용은 비공개입니다</span>
          </motion.div>
        </div>
      </section>

      {/* Papers Grid Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 -mt-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-container text-on-primary-container rounded-full font-bold text-sm tracking-wider">
            <span className="text-lg">📖</span>
            <span>{papers.length}개의 기록</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
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
