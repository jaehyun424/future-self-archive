"use client";

import { motion } from "framer-motion";
import PaperCard from "@/components/PaperCard";
import FloatingDecorations from "@/components/FloatingDecorations";
import type { Paper } from "@/lib/types";

export default function CoverClient({ papers }: { papers: Paper[] }) {
  return (
    <div className="relative overflow-hidden">
      <FloatingDecorations />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 pb-12 pt-8">
        <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-6 sm:space-y-8">
          {/* Hero image - clean, no overlays */}
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

          {/* Sparkle emoji animation (replaces Lottie) */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl -mt-4 pointer-events-none"
          >
            ✨
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

      {/* Papers Grid Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
