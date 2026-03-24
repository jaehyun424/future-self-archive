"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PrivatePlaceholder from "@/components/PrivatePlaceholder";
import LottieWrapper from "@/components/LottieWrapper";
import type { Paper, Block } from "@/lib/types";
import { typeLabelsKo, paperEmoji, paperGradients, paperImages, paperDividers } from "@/lib/typeLabels";
import { useMemo } from "react";

type GroupedBlock =
  | { kind: "private"; count: number; key: string }
  | { kind: "block"; block: Block; index: number };

function groupBlocks(blocks: Block[]): GroupedBlock[] {
  const result: GroupedBlock[] = [];
  let i = 0;
  while (i < blocks.length) {
    if (blocks[i].isPrivate) {
      let count = 0;
      const key = blocks[i].id;
      while (i < blocks.length && blocks[i].isPrivate) {
        count++;
        i++;
      }
      result.push({ kind: "private", count, key });
    } else {
      result.push({ kind: "block", block: blocks[i], index: i });
      i++;
    }
  }
  return result;
}

function isHeadingPattern(text: string): boolean {
  return /^(위협 \d+:|진실 \d+:|우선순위 \d+:|창업 목표 \d+:|정치 목표 \d+:|가족 목표 \d+:|\d+단계:)/.test(text);
}

function isPriorityHeading(text: string): boolean {
  return /^우선순위 \d+:/.test(text);
}

function isGoalHeading(text: string): boolean {
  return /^(창업|정치|가족) 목표 \d+:/.test(text);
}

function isStepHeading(text: string): boolean {
  return /^\d+단계:/.test(text);
}

function getGoalCategory(text: string): string | null {
  const match = text.match(/^(창업|정치|가족) 목표/);
  return match ? match[1] : null;
}

function renderLetterBlock(block: Block) {
  if (block.text.startsWith("##")) {
    return (
      <div className="pt-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex-1 h-px bg-outline-variant/30" />
          <span className="text-primary-container text-lg">✦</span>
          <div className="flex-1 h-px bg-outline-variant/30" />
        </div>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary text-center">
          {block.text.replace(/^##\s*/, "")}
        </h2>
      </div>
    );
  }
  // First line of a letter (starts with "안녕") - make it bigger and serif
  if (block.text.startsWith("안녕")) {
    return (
      <p className="font-serif text-lg sm:text-xl leading-[1.75] text-on-surface font-bold">
        {block.text}
      </p>
    );
  }
  return (
    <p className="font-body text-base sm:text-lg leading-[1.75] text-on-surface-variant">
      {block.text}
    </p>
  );
}

function renderChecklistBlock(block: Block) {
  if (block.text.startsWith("##")) {
    return (
      <div className="pt-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex-1 h-px bg-outline-variant/30" />
          <span className="text-primary-container text-lg">✦</span>
          <div className="flex-1 h-px bg-outline-variant/30" />
        </div>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary text-center">
          {block.text.replace(/^##\s*/, "")}
        </h2>
      </div>
    );
  }
  if (isHeadingPattern(block.text)) {
    return (
      <div className="border-l-4 border-primary/40 pl-4 py-2 bg-primary-container/10 rounded-r-xl">
        <p className="font-headline font-bold text-base sm:text-lg text-primary">
          {block.text}
        </p>
      </div>
    );
  }
  return (
    <p className="font-body text-base sm:text-lg leading-[1.75] text-on-surface-variant pl-5">
      {block.text}
    </p>
  );
}

function renderImaginationBlock(block: Block) {
  if (block.text.startsWith("##")) {
    const headingText = block.text.replace(/^##\s*/, "");
    const isPast = headingText.includes("10년 전");
    return (
      <div className="pt-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-3xl">{isPast ? "🔍" : "🔮"}</span>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <div className="flex-1 h-px bg-outline-variant/30" />
          <div className="flex-1 h-px bg-outline-variant/30" />
        </div>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary text-center">
          {headingText}
        </h2>
      </div>
    );
  }
  return (
    <p className="font-body text-base sm:text-lg leading-[1.75] text-on-surface-variant">
      {block.text}
    </p>
  );
}

function renderPrioritiesBlock(block: Block) {
  if (block.text.startsWith("##")) {
    return (
      <div className="pt-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex-1 h-px bg-outline-variant/30" />
          <span className="text-primary-container text-lg">✦</span>
          <div className="flex-1 h-px bg-outline-variant/30" />
        </div>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary text-center">
          {block.text.replace(/^##\s*/, "")}
        </h2>
      </div>
    );
  }
  if (isPriorityHeading(block.text)) {
    const match = block.text.match(/^우선순위 (\d+):\s*(.*)/);
    if (match) {
      return (
        <div className="flex items-start gap-4 py-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-200 to-yellow-100 flex items-center justify-center shrink-0 shadow-md">
            <span className="font-headline font-extrabold text-lg sm:text-xl text-amber-800">{match[1]}</span>
          </div>
          <div className="pt-1">
            <p className="font-headline font-bold text-lg sm:text-xl text-on-surface">{match[2]}</p>
          </div>
        </div>
      );
    }
  }
  return (
    <p className="font-body text-base sm:text-lg leading-[1.75] text-on-surface-variant">
      {block.text}
    </p>
  );
}

function renderGoalsBlock(block: Block, prevBlock?: Block) {
  if (block.text.startsWith("##")) {
    return (
      <div className="pt-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex-1 h-px bg-outline-variant/30" />
          <span className="text-primary-container text-lg">✦</span>
          <div className="flex-1 h-px bg-outline-variant/30" />
        </div>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary text-center">
          {block.text.replace(/^##\s*/, "")}
        </h2>
      </div>
    );
  }
  if (isGoalHeading(block.text)) {
    const category = getGoalCategory(block.text);
    const categoryEmoji: Record<string, string> = { "창업": "🚀", "정치": "🏛️", "가족": "👨‍👩‍👧" };
    const needsCategoryLabel = !prevBlock || getGoalCategory(prevBlock.text) !== category;
    const goalText = block.text.replace(/^(창업|정치|가족) 목표 \d+:\s*/, "");
    const goalNum = block.text.match(/목표 (\d+)/)?.[1];
    return (
      <>
        {needsCategoryLabel && category && (
          <div className="mt-4 mb-2 flex items-center gap-2">
            <span className="text-xl">{categoryEmoji[category] || "📌"}</span>
            <span className="font-headline font-bold text-base text-primary">{category}</span>
            <div className="flex-1 h-px bg-outline-variant/20" />
          </div>
        )}
        <div className="flex items-start gap-3 py-1.5 pl-2">
          <span className="text-sm mt-0.5">☐</span>
          <p className="font-body text-base sm:text-lg leading-[1.75] text-on-surface-variant">
            <span className="text-xs text-outline mr-1">목표{goalNum}</span>
            {goalText}
          </p>
        </div>
      </>
    );
  }
  return (
    <p className="font-body text-base sm:text-lg leading-[1.75] text-on-surface-variant">
      {block.text}
    </p>
  );
}

function renderStepsBlock(block: Block) {
  if (block.text.startsWith("##")) {
    return (
      <div className="pt-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex-1 h-px bg-outline-variant/30" />
          <span className="text-primary-container text-lg">✦</span>
          <div className="flex-1 h-px bg-outline-variant/30" />
        </div>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary text-center">
          {block.text.replace(/^##\s*/, "")}
        </h2>
      </div>
    );
  }
  if (isStepHeading(block.text)) {
    const match = block.text.match(/^(\d+)단계:\s*(.*)/);
    if (match) {
      return (
        <div className="flex items-start gap-4 py-3">
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-orange-300 to-amber-100 flex items-center justify-center shadow-md border-2 border-white">
              <span className="font-headline font-extrabold text-sm sm:text-base text-orange-800">{match[1]}</span>
            </div>
            <div className="w-0.5 h-4 bg-orange-200 mt-1" />
          </div>
          <div className="pt-1.5">
            <p className="font-headline font-bold text-base sm:text-lg text-on-surface">{match[2]}</p>
          </div>
        </div>
      );
    }
  }
  // Step answer blocks (indented content after step heading)
  return (
    <p className="font-body text-base sm:text-lg leading-[1.75] text-on-surface-variant pl-[3.25rem]">
      {block.text}
    </p>
  );
}

function renderBlockByType(type: string, block: Block, allBlocks: Block[], blockIdx: number) {
  switch (type) {
    case "letter":
      return renderLetterBlock(block);
    case "checklist":
      return renderChecklistBlock(block);
    case "imagination":
      return renderImaginationBlock(block);
    case "priorities":
      return renderPrioritiesBlock(block);
    case "goals": {
      const prevVisible = allBlocks.slice(0, blockIdx).filter(b => !b.isPrivate).pop();
      return renderGoalsBlock(block, prevVisible);
    }
    case "steps":
      return renderStepsBlock(block);
    default:
      return renderLetterBlock(block);
  }
}

export default function PaperReaderClient({
  paper,
  prevPaper,
  nextPaper,
}: {
  paper: Paper;
  prevPaper: Paper | null;
  nextPaper: Paper | null;
}) {
  const grouped = useMemo(() => groupBlocks(paper.blocks), [paper.blocks]);
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
            기록 {paper.num} ✿
          </div>
        </div>

        {/* Hero image with gradient overlay and emoji */}
        <div className="relative w-full aspect-[16/9] rounded-[2rem] sm:rounded-[3rem] overflow-hidden puffy-shadow mb-6">
          <img src={paperImages[paper.id]} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-br ${paperGradients[paper.id]} opacity-50`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl sm:text-8xl drop-shadow-lg">{paperEmoji[paper.id]}</span>
          </div>
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-lg">
            <span className="text-sm font-bold text-primary flex items-center gap-1">
              <span className="text-lg">{paperEmoji[paper.id]}</span>
              {typeLabelsKo[paper.type]}
            </span>
          </div>
        </div>

        {/* Badge & Title */}
        <div className="text-center space-y-3">
          <div className="inline-block px-6 py-1.5 bg-primary-container text-on-primary-container rounded-full font-bold text-xs tracking-wider">
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
          src="/lottie/envelope.json"
          className="w-20 h-20 opacity-70"
          fallbackEmoji="💌"
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
        <div className="absolute top-4 right-6 -rotate-12 opacity-10 select-none text-8xl text-primary">
          ✦
        </div>

        <div className="space-y-5 relative z-10">
          {grouped.map((item, i) => (
            <motion.div
              key={item.kind === "private" ? item.key : item.block.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05, type: "spring", damping: 25 }}
            >
              {item.kind === "private" ? (
                <PrivatePlaceholder count={item.count} />
              ) : (
                renderBlockByType(paper.type, item.block, paper.blocks, item.index)
              )}
            </motion.div>
          ))}
        </div>

      </motion.article>

      {/* Emoji divider */}
      <div className="flex items-center justify-center gap-4 py-8">
        <span className="text-2xl opacity-40">{(paperDividers[paper.id] || ["·","·","·"])[0]}</span>
        <div className="h-px w-16 bg-outline-variant/30" />
        <span className="text-2xl opacity-40">{(paperDividers[paper.id] || ["·","·","·"])[1]}</span>
        <div className="h-px w-16 bg-outline-variant/30" />
        <span className="text-2xl opacity-40">{(paperDividers[paper.id] || ["·","·","·"])[2]}</span>
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
              <span className="text-primary text-xl">←</span>
              <div className="min-w-0">
                <p className="text-[10px] text-outline tracking-wider font-bold">이전</p>
                <p className="text-sm font-bold text-on-surface truncate">{prevPaper.title}</p>
              </div>
            </motion.div>
          </Link>
        ) : <div className="flex-1" />}

        <Link
          href="/"
          className="w-12 h-12 flex items-center justify-center bg-primary-container rounded-full puffy-shadow hover:scale-110 transition-transform shrink-0"
        >
          <span className="text-xl">🏠</span>
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
                <p className="text-[10px] text-outline tracking-wider font-bold">다음</p>
                <p className="text-sm font-bold text-on-surface truncate">{nextPaper.title}</p>
              </div>
              <span className="text-primary text-xl">→</span>
            </motion.div>
          </Link>
        ) : <div className="flex-1" />}
      </div>
    </div>
  );
}
