"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PrivatePlaceholder from "@/components/PrivatePlaceholder";
import LottieWrapper from "@/components/LottieWrapper";
import type { Paper } from "@/lib/types";

const typeImages: Record<string, string> = {
  letter: "/images/letter-writing.jpg",
  checklist: "/images/mountain-stars.jpg",
  imagination: "/images/pastel-clouds.jpg",
  priorities: "/images/sunrise-person.jpg",
  goals: "/images/landscape.jpg",
  steps: "/images/cozy-desk.jpg",
};

const typeEmoji: Record<string, string> = {
  letter: "💌",
  checklist: "✅",
  imagination: "🌈",
  priorities: "👑",
  goals: "🚀",
  steps: "🧭",
};

export default function PaperReaderClient({
  paper,
  prevPaper,
  nextPaper,
}: {
  paper: Paper;
  prevPaper: Paper | null;
  nextPaper: Paper | null;
}) {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Hero Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-8 sm:mb-12"
      >
        {/* Washi tape label */}
        <div className="absolute -top-3 -left-2 sm:-left-4 z-10">
          <div className="bg-secondary-container text-on-secondary-container px-4 sm:px-6 py-1.5 font-bold text-xs shadow-sm -rotate-3 rounded-sm">
            Work Paper {paper.num} ✿
          </div>
        </div>

        {/* Hero image */}
        <div className="relative w-full aspect-[16/9] rounded-[2rem] sm:rounded-[3rem] overflow-hidden puffy-shadow mb-6 group">
          <Image
            src={typeImages[paper.type] || "/images/letter-writing.jpg"}
            alt={paper.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-lg">
            <span className="text-sm font-bold text-primary flex items-center gap-1">
              <span className="text-lg">{typeEmoji[paper.type]}</span>
              {paper.type}
            </span>
          </div>
        </div>

        {/* Badge & Title */}
        <div className="text-center space-y-3">
          <div className="inline-block px-6 py-1.5 bg-primary-container text-on-primary-container rounded-full font-bold text-xs tracking-widest uppercase">
            {paper.subtitle}
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight">
            {paper.title}
          </h1>
          {paper.timeline && (
            <p className="text-sm text-outline italic font-body">{paper.timeline}</p>
          )}
        </div>
      </motion.section>

      {/* Lottie envelope animation */}
      <div className="flex justify-center mb-6">
        <LottieWrapper
          src="https://lottie.host/aa610ec0-08e7-4a88-961c-98b5bb1e58e5/EqFkBXJhIt.lottie"
          className="w-20 h-20 opacity-70"
        />
      </div>

      {/* Content */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-12 overflow-hidden border-t-[6px] border-primary-container"
      >
        {/* Background decoration */}
        <div className="absolute top-4 right-6 -rotate-12 opacity-10 select-none">
          <span className="material-symbols-outlined text-8xl text-primary">auto_awesome</span>
        </div>

        <div className="space-y-5 relative z-10">
          {paper.blocks.map((block, i) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05, type: "spring", damping: 25 }}
            >
              {block.isPrivate ? (
                <PrivatePlaceholder />
              ) : block.text.startsWith("##") ? (
                <div className="pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-1 h-px bg-outline-variant/30" />
                    <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                      auto_awesome
                    </span>
                    <div className="flex-1 h-px bg-outline-variant/30" />
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary text-center">
                    {block.text.replace(/^##\s*/, "")}
                  </h2>
                </div>
              ) : (
                <p className="font-body text-base sm:text-lg leading-[1.9] text-on-surface-variant">
                  {block.text}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom washi tape */}
        <div className="mt-10 flex justify-center">
          <div className="bg-secondary-container/50 px-8 py-3 rotate-1 rounded-sm shadow-sm">
            <span className="font-headline font-bold text-primary tracking-wider text-sm">
              {typeEmoji[paper.type]} Work Paper {paper.num} 완료
            </span>
          </div>
        </div>
      </motion.article>

      {/* Emoji divider */}
      <div className="flex items-center justify-center gap-4 py-8">
        <span className="text-2xl opacity-40">💫</span>
        <div className="h-px w-16 bg-outline-variant/30" />
        <span className="text-2xl opacity-40">✨</span>
        <div className="h-px w-16 bg-outline-variant/30" />
        <span className="text-2xl opacity-40">💫</span>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center gap-4">
        {prevPaper ? (
          <Link
            href={`/paper/${prevPaper.id}`}
            className="flex-1 group"
          >
            <motion.div
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-3 p-4 bg-white rounded-[1.5rem] puffy-shadow hover:-translate-y-1 transition-all"
            >
              <span className="material-symbols-outlined text-primary">arrow_back</span>
              <div className="min-w-0">
                <p className="text-[10px] text-outline uppercase tracking-wider font-bold">이전</p>
                <p className="text-sm font-bold text-on-surface truncate">{prevPaper.title}</p>
              </div>
            </motion.div>
          </Link>
        ) : <div className="flex-1" />}

        <Link
          href="/"
          className="w-12 h-12 flex items-center justify-center bg-primary-container rounded-full puffy-shadow hover:scale-110 transition-transform shrink-0"
        >
          <span className="material-symbols-outlined text-on-primary-container">home</span>
        </Link>

        {nextPaper ? (
          <Link
            href={`/paper/${nextPaper.id}`}
            className="flex-1 group"
          >
            <motion.div
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-end gap-3 p-4 bg-white rounded-[1.5rem] puffy-shadow hover:-translate-y-1 transition-all"
            >
              <div className="min-w-0 text-right">
                <p className="text-[10px] text-outline uppercase tracking-wider font-bold">다음</p>
                <p className="text-sm font-bold text-on-surface truncate">{nextPaper.title}</p>
              </div>
              <span className="material-symbols-outlined text-primary">arrow_forward</span>
            </motion.div>
          </Link>
        ) : <div className="flex-1" />}
      </div>
    </div>
  );
}
