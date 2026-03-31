"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";
import PrivateHighlight from "@/components/PrivateHighlight";
import type { Paper, Block } from "@/lib/types";
import { typeLabelsKo, paperEmoji, paperImages } from "@/lib/typeLabels";

function isHeadingPattern(text: string): boolean {
  return /^(위협 \d+:|진실 \d+:|우선순위 \d+:|창업 목표 \d+:|정치 목표 \d+:|가족 목표 \d+:|\d+단계:)/.test(
    text
  );
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

const goalCategoryEmoji: Record<string, string> = {
  창업: "💡",
  정치: "🏛️",
  가족: "👨‍👩‍👧",
};

const stepBadgeStyles = [
  { bg: "#f9a8d4", bgLight: "#fce7f3", text: "#9d174d", line: "#fbcfe8" },
  { bg: "#7dd3fc", bgLight: "#e0f2fe", text: "#0c4a6e", line: "#bae6fd" },
  { bg: "#6ee7b7", bgLight: "#d1fae5", text: "#065f46", line: "#a7f3d0" },
  { bg: "#c4b5fd", bgLight: "#ede9fe", text: "#5b21b6", line: "#ddd6fe" },
  { bg: "#fcd34d", bgLight: "#fef3c7", text: "#92400e", line: "#fde68a" },
  { bg: "#5eead4", bgLight: "#ccfbf1", text: "#115e59", line: "#99f6e4" },
  { bg: "#fda4af", bgLight: "#ffe4e6", text: "#9f1239", line: "#fecdd3" },
];

const priorityBadgeStyles = [
  { bg: "#fda4af", bgLight: "#ffe4e6", text: "#9f1239" },
  { bg: "#fcd34d", bgLight: "#fef3c7", text: "#92400e" },
  { bg: "#6ee7b7", bgLight: "#d1fae5", text: "#065f46" },
];

function renderLetterBlock(block: Block) {
  if (block.text.startsWith("##")) {
    return (
      <div className="pt-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex-1 h-px bg-outline-variant/30" />
          <span className="text-tertiary-container text-lg">✦</span>
          <div className="flex-1 h-px bg-outline-variant/30" />
        </div>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary text-center">
          {block.text.replace(/^##\s*/, "")}
        </h2>
      </div>
    );
  }
  if (block.text.startsWith("안녕")) {
    return (
      <p className="font-serif text-lg sm:text-xl leading-[1.75] text-on-surface font-bold">
        <span className="text-primary mr-1">🌸</span>
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
          <span className="text-tertiary-container text-lg">✦</span>
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
      <div className="border-l-4 border-tertiary/40 pl-4 py-2 bg-tertiary-container/10 rounded-r-xl">
        <p className="font-headline font-bold text-base sm:text-lg text-primary flex items-start gap-2">
          <span className="shrink-0">🌷</span>
          <span>{block.text}</span>
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
          <span className="text-3xl">{isPast ? "🔍" : "🪐"}</span>
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
          <span className="text-tertiary-container text-lg">✦</span>
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
      const colorIdx = Math.min(
        parseInt(match[1]) - 1,
        priorityBadgeStyles.length - 1
      );
      const style = priorityBadgeStyles[colorIdx];
      return (
        <div className="flex items-start gap-4 py-3">
          <div
            className="w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center shrink-0 shadow-md"
            style={{
              background: `linear-gradient(135deg, ${style.bg}, ${style.bgLight})`,
            }}
          >
            <span
              className="font-headline font-extrabold text-lg sm:text-xl"
              style={{ color: style.text }}
            >
              {match[1]}
            </span>
          </div>
          <div className="pt-1.5">
            <p className="font-headline font-bold text-lg sm:text-xl text-on-surface">
              {match[2]}
            </p>
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

function renderGoalsBlock(block: Block) {
  if (block.text.startsWith("##")) {
    return (
      <div className="pt-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex-1 h-px bg-outline-variant/30" />
          <span className="text-tertiary-container text-lg">✦</span>
          <div className="flex-1 h-px bg-outline-variant/30" />
        </div>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary text-center">
          {block.text.replace(/^##\s*/, "")}
        </h2>
      </div>
    );
  }
  if (isGoalHeading(block.text)) {
    const goalText = block.text.replace(
      /^(창업|정치|가족) 목표 \d+:\s*/,
      ""
    );
    return (
      <div className="flex items-start gap-3 py-2.5">
        <span className="text-base mt-0.5">🌱</span>
        <p className="font-body text-base sm:text-lg leading-[1.75] text-on-surface-variant">
          {goalText}
        </p>
      </div>
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
          <span className="text-tertiary-container text-lg">✦</span>
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
      const stepNum = parseInt(match[1]) - 1;
      const style = stepBadgeStyles[stepNum % stepBadgeStyles.length];
      return (
        <div className="flex items-start gap-4 py-3">
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md border-2 border-white"
              style={{
                background: `linear-gradient(135deg, ${style.bg}, ${style.bgLight})`,
              }}
            >
              <span
                className="font-headline font-extrabold text-sm sm:text-base"
                style={{ color: style.text }}
              >
                {match[1]}
              </span>
            </div>
            <div
              className="w-0.5 h-4 mt-1"
              style={{ background: style.line }}
            />
          </div>
          <div className="pt-1.5">
            <p className="font-headline font-bold text-base sm:text-lg text-on-surface">
              {match[2]}
            </p>
          </div>
        </div>
      );
    }
  }
  return (
    <p className="font-body text-base sm:text-lg leading-[1.75] text-on-surface-variant pl-[3.25rem]">
      {block.text}
    </p>
  );
}

function renderBlockByType(type: string, block: Block) {
  switch (type) {
    case "letter":
      return renderLetterBlock(block);
    case "checklist":
      return renderChecklistBlock(block);
    case "imagination":
      return renderImaginationBlock(block);
    case "priorities":
      return renderPrioritiesBlock(block);
    case "goals":
      return renderGoalsBlock(block);
    case "steps":
      return renderStepsBlock(block);
    default:
      return renderLetterBlock(block);
  }
}

export default function VaultReaderClient({
  paper,
  prevPaper,
  nextPaper,
}: {
  paper: Paper;
  prevPaper: Paper | null;
  nextPaper: Paper | null;
}) {
  const goalsCategoryHeaders = useMemo(() => {
    if (paper.type !== "goals") return {};
    const map: Record<number, string> = {};

    const categories: string[] = [];
    for (const block of paper.blocks) {
      if (!block.isPrivate && isGoalHeading(block.text)) {
        const cat = getGoalCategory(block.text);
        if (cat && !categories.includes(cat)) categories.push(cat);
      }
    }

    if (categories.length === 0) return map;

    const perCat = Math.ceil(paper.blocks.length / categories.length);

    for (let c = 0; c < categories.length; c++) {
      const startIdx = c * perCat;
      if (startIdx < paper.blocks.length) {
        map[startIdx] = categories[c];
      }
    }

    return map;
  }, [paper.blocks, paper.type]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", damping: 22, stiffness: 100, duration: 0.6 }}
    >
      <div className="bg-gradient-to-b from-[#fdf5ea]/50 to-surface min-h-[80vh]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Hero Header */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="relative mb-8 sm:mb-12"
          >
            {/* Hero image */}
            <div className="relative w-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden puffy-shadow mb-4">
              <img
                src={paperImages[paper.id]}
                alt=""
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
            </div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", damping: 25, stiffness: 120 }}
              className="text-center space-y-3"
            >
              <div className="inline-block px-4 py-1 bg-primary-container/40 text-on-primary-container/70 rounded-full font-bold text-[10px] tracking-wider">
                {paper.subtitle}
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight">
                {paper.title}
              </h1>
              {paper.timeline && (
                <p className="text-sm text-outline italic font-body">
                  {paper.timeline}
                </p>
              )}
            </motion.div>
          </motion.section>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              type: "spring",
              damping: 25,
              stiffness: 120,
            }}
            className="relative bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-12 overflow-hidden border-t-[3px] border-tertiary-container"
          >
            {/* Background decoration */}
            <div className="absolute top-4 right-6 -rotate-12 opacity-[0.05] select-none text-8xl text-tertiary">
              ✦
            </div>

            {/* Mood bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-surface-container-low/50 rounded-2xl mb-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-lg">{paperEmoji[paper.id]}</span>
                <span className="font-bold text-on-surface-variant">{typeLabelsKo[paper.type]}</span>
              </div>
              <span className="text-[11px] text-outline font-medium">🗝️ 비공개 포함</span>
            </div>

            <div className="space-y-5 relative z-10">
              {paper.type === "priorities" ? (
                <div className="space-y-8">
                  {/* 섹션 1: 미래의 나 (비공개) */}
                  {paper.blocks[0] && (
                    <div>
                      <p className="text-xs font-bold text-primary/50 tracking-wider mb-3">미래의 나</p>
                      {paper.blocks[0].isPrivate ? (
                        <PrivateHighlight>{renderBlockByType(paper.type, paper.blocks[0])}</PrivateHighlight>
                      ) : renderBlockByType(paper.type, paper.blocks[0])}
                    </div>
                  )}

                  {/* 섹션 2: 3대 우선순위 */}
                  <div>
                    <p className="text-xs font-bold text-primary/50 tracking-wider mb-3">3대 우선순위</p>
                    <div className="space-y-3">
                      {paper.blocks.slice(1, 4).map((block) => (
                        <div key={block.id}>
                          {block.isPrivate ? (
                            <PrivateHighlight>{renderBlockByType(paper.type, block)}</PrivateHighlight>
                          ) : renderBlockByType(paper.type, block)}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 섹션 3: 줄일 것 (비공개) */}
                  {paper.blocks[4] && (
                    <div>
                      <p className="text-xs font-bold text-primary/50 tracking-wider mb-3">내려놓을 것</p>
                      {paper.blocks[4].isPrivate ? (
                        <PrivateHighlight>{renderBlockByType(paper.type, paper.blocks[4])}</PrivateHighlight>
                      ) : renderBlockByType(paper.type, paper.blocks[4])}
                    </div>
                  )}

                  {/* 섹션 4: 한 줄 결심 */}
                  {paper.blocks[5] && (
                    <div>
                      <p className="text-xs font-bold text-primary/50 tracking-wider mb-3">미래의 내가 돌아온다면</p>
                      <p className="font-serif text-lg sm:text-xl font-bold text-primary leading-relaxed">
                        {paper.blocks[5].text}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
              paper.blocks.map((block, i) => {
                const isPrivateBlock = block.isPrivate;
                const isLetterStart =
                  paper.type === "letter" && block.text.startsWith("안녕");

                return (
                  <motion.div
                    key={block.id}
                    initial={{
                      opacity: 0,
                      ...(isPrivateBlock
                        ? { x: -20 }
                        : isLetterStart
                          ? { scale: 1.04, y: 15 }
                          : { y: 25 }),
                    }}
                    animate={{
                      opacity: 1,
                      ...(isPrivateBlock
                        ? { x: 0 }
                        : isLetterStart
                          ? { scale: 1, y: 0 }
                          : { y: 0 }),
                    }}
                    transition={{
                      delay: 0.06 * i,
                      type: "spring",
                      damping: 25,
                      stiffness: isPrivateBlock ? 100 : 120,
                    }}
                  >
                    {/* Goals category header */}
                    {goalsCategoryHeaders[i] && (
                      <div className="mt-4 mb-2 flex items-center gap-2">
                        <span className="text-xl">
                          {goalCategoryEmoji[goalsCategoryHeaders[i]] || "📌"}
                        </span>
                        <span className="font-headline font-bold text-base text-primary">
                          {goalsCategoryHeaders[i]}
                        </span>
                        <div className="flex-1 h-px bg-outline-variant/20" />
                      </div>
                    )}

                    {block.isPrivate ? (
                      <PrivateHighlight>
                        {renderBlockByType(paper.type, block)}
                      </PrivateHighlight>
                    ) : (
                      renderBlockByType(paper.type, block)
                    )}
                  </motion.div>
                );
              })
              )}

              {/* Letter date at end */}
              {paper.type === "letter" && paper.timeline && (
                <div className="text-right mt-8">
                  <p className="text-sm text-outline italic font-serif">
                    🌷 {paper.timeline.split("→")[0].trim()} 🌷
                  </p>
                </div>
              )}
            </div>
          </motion.article>

          {/* Dock Navigation */}
          <div className="flex items-center justify-center py-10">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl rounded-full px-4 py-2.5 puffy-shadow">
              {prevPaper ? (
                <Link
                  href={`/vault/paper/${prevPaper.id}`}
                  className="px-4 py-2 text-sm font-bold text-primary rounded-full hover:bg-primary-container/30 active:scale-95 transition-all"
                >
                  ← 이전
                </Link>
              ) : (
                <div className="w-16" />
              )}

              <Link
                href="/vault"
                className="w-11 h-11 flex items-center justify-center bg-tertiary-container rounded-full active:scale-90 transition-transform"
              >
                <span className="text-lg">🏠</span>
              </Link>

              {nextPaper ? (
                <Link
                  href={`/vault/paper/${nextPaper.id}`}
                  className="px-4 py-2 text-sm font-bold text-primary rounded-full hover:bg-primary-container/30 active:scale-95 transition-all"
                >
                  다음 →
                </Link>
              ) : (
                <div className="w-16" />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
