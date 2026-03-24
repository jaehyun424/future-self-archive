"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PrivateHighlight from "@/components/PrivateHighlight";
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

export default function VaultReaderClient({
  paper,
  prevPaper,
  nextPaper,
}: {
  paper: Paper;
  prevPaper: Paper | null;
  nextPaper: Paper | null;
}) {
  return (
    <div className="bg-vault-texture min-h-[80vh]">
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
              FULL ACCESS ✨
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
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5">
              <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                visibility
              </span>
              <span className="text-sm font-bold text-tertiary">전체 공개</span>
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

        {/* Lottie sparkle */}
        <div className="flex justify-center mb-6">
          <LottieWrapper
            src="https://lottie.host/2bc21e6b-433e-4060-9160-15204dde2a6a/UkfXxMFfaP.lottie"
            className="w-16 h-16 opacity-60"
          />
        </div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-12 overflow-hidden border-t-[6px] border-tertiary-container"
        >
          {/* Background decoration */}
          <div className="absolute top-4 right-6 -rotate-12 opacity-10 select-none">
            <span className="material-symbols-outlined text-8xl text-tertiary">auto_awesome</span>
          </div>

          {/* Mood bar */}
          <div className="flex items-center gap-3 p-4 bg-surface-container-low rounded-[1.5rem] mb-8">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-xl shadow-inner">
              {typeEmoji[paper.type]}
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-primary/60">타입</p>
              <p className="text-sm font-bold text-on-surface-variant capitalize">{paper.type}</p>
            </div>
            <div className="ml-auto flex items-center gap-1 text-xs text-tertiary font-bold bg-tertiary-container/30 px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>lock_open</span>
              비공개 포함
            </div>
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
                  <PrivateHighlight>
                    {block.text.startsWith("##") ? (
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                        {block.text.replace(/^##\s*/, "")}
                      </h2>
                    ) : (
                      <p className="font-body text-base sm:text-lg leading-[1.9] text-on-surface">
                        {block.text}
                      </p>
                    )}
                  </PrivateHighlight>
                ) : block.text.startsWith("##") ? (
                  <div className="pt-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-1 h-px bg-outline-variant/30" />
                      <span className="material-symbols-outlined text-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
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

          {/* Bottom decoration */}
          <div className="mt-10 flex justify-center">
            <div className="bg-tertiary-container/30 px-8 py-3 rotate-1 rounded-sm shadow-sm">
              <span className="font-headline font-bold text-tertiary tracking-wider text-sm">
                {typeEmoji[paper.type]} 전체 기록 열람 완료
              </span>
            </div>
          </div>
        </motion.article>

        {/* Emoji divider */}
        <div className="flex items-center justify-center gap-4 py-8">
          <span className="text-2xl opacity-40">✨</span>
          <div className="h-px w-16 bg-outline-variant/30" />
          <span className="text-2xl opacity-40">💫</span>
          <div className="h-px w-16 bg-outline-variant/30" />
          <span className="text-2xl opacity-40">✨</span>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          {prevPaper ? (
            <Link href={`/vault/paper/${prevPaper.id}`} className="flex-1 group">
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
            href="/vault"
            className="w-12 h-12 flex items-center justify-center bg-tertiary-container rounded-full puffy-shadow hover:scale-110 transition-transform shrink-0"
          >
            <span className="material-symbols-outlined text-on-tertiary-container">dashboard</span>
          </Link>

          {nextPaper ? (
            <Link href={`/vault/paper/${nextPaper.id}`} className="flex-1 group">
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
    </div>
  );
}
