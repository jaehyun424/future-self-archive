"use client";

import { useCallback, useState } from "react";
import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";

interface LottieWrapperProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  fallbackEmoji?: string;
}

export default function LottieWrapper({
  src,
  className = "",
  loop = true,
  autoplay = true,
  fallbackEmoji = "✨",
}: LottieWrapperProps) {
  const [hasError, setHasError] = useState(false);

  const dotLottieRefCallback = useCallback((dotLottie: DotLottie | null) => {
    if (dotLottie) {
      dotLottie.addEventListener("loadError", () => {
        setHasError(true);
      });
    }
  }, []);

  if (hasError) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <span className="text-2xl opacity-60">{fallbackEmoji}</span>
      </div>
    );
  }

  return (
    <div className={className}>
      <DotLottieReact
        src={src}
        loop={loop}
        autoplay={autoplay}
        dotLottieRefCallback={dotLottieRefCallback}
      />
    </div>
  );
}
