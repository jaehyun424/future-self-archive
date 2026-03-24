"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface LottieWrapperProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export default function LottieWrapper({
  src,
  className = "",
  loop = true,
  autoplay = true,
}: LottieWrapperProps) {
  return (
    <div className={className}>
      <DotLottieReact src={src} loop={loop} autoplay={autoplay} />
    </div>
  );
}
