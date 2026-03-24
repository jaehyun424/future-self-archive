"use client";

import { motion } from "framer-motion";
import PaperCard from "@/components/PaperCard";
import LottieWrapper from "@/components/LottieWrapper";
import type { Paper } from "@/lib/types";

export default function VaultDashboardClient({ papers }: { papers: Paper[] }) {
  return (
    <div className="bg-vault-texture min-h-[80vh] pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Hero Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 sm:mb-14 relative"
        >
          {/* Washi tape label */}
          <div className="absolute -top-4 -left-2 sm:-left-4 z-10">
            <div className="bg-secondary-container text-on-secondary-container px-4 py-1.5 font-bold text-xs shadow-sm -rotate-3 rounded-sm">
              비밀 보관소 🔐
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1 pt-4">
              <h1 className="font-headline font-extrabold text-3xl sm:text-4xl md:text-5xl text-primary mb-3 leading-tight">
                소중한 기록들을
                <br />
                모두 열어보세요
              </h1>
              <p className="text-on-surface-variant text-base sm:text-lg font-body max-w-md">
                비밀 보관소에 오신 것을 환영합니다. 모든 비공개 내용을 포함한 전체 기록을 확인할 수
                있습니다.
              </p>
            </div>

            {/* Lottie decoration */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0">
              <LottieWrapper
                src="https://lottie.host/2bc21e6b-433e-4060-9160-15204dde2a6a/UkfXxMFfaP.lottie"
                className="w-full h-full"
                fallbackEmoji="✨"
              />
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full puffy-shadow text-sm">
              <span className="text-base">👁️</span>
              <span className="font-bold text-on-surface">{papers.length}개의 기록</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full puffy-shadow text-sm">
              <span className="text-base">🔓</span>
              <span className="font-bold text-on-surface">전체 공개 모드</span>
            </div>
          </div>
        </motion.div>

        {/* Papers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {papers.map((paper, index) => (
            <PaperCard key={paper.id} paper={paper} index={index} isVault />
          ))}
        </div>

        {/* Decorative dots */}
        <div className="mt-16 flex justify-center gap-3">
          <div className="w-3 h-3 rounded-full bg-primary-container" />
          <div className="w-3 h-3 rounded-full bg-secondary-container" />
          <div className="w-3 h-3 rounded-full bg-tertiary-container" />
        </div>
      </div>
    </div>
  );
}
