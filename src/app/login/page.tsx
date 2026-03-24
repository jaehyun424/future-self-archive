"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const confettiEmojis = ["🎉", "🎊", "✨", "💖", "🌸", "🎀", "🍰", "🦋"];

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      setSuccess(true);
      setTimeout(() => {
        router.push("/vault");
        router.refresh();
      }, 1500);
    } else {
      setError("비밀번호가 틀렸습니다.");
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-[80vh] flex items-center justify-center px-4 py-12 relative"
      style={{
        background: "linear-gradient(180deg, #fff5f9 0%, #f8f9fa 100%)",
      }}
    >
      {/* Decorative background */}
      <div className="absolute top-20 left-10 opacity-15 select-none text-6xl">
        💭
      </div>
      <div className="absolute bottom-20 right-10 opacity-15 select-none text-7xl rotate-12">
        🪄
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 120 }}
        className="w-full max-w-sm relative"
      >
        {/* Confetti burst on success */}
        <AnimatePresence>
          {success &&
            confettiEmojis.map((emoji, i) => (
              <motion.div
                key={`confetti-${i}`}
                initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [1, 1, 0],
                  scale: [0, 1.2, 0.8],
                  x: (i % 2 === 0 ? -1 : 1) * (40 + Math.random() * 60),
                  y: -(60 + Math.random() * 80),
                  rotate: Math.random() * 360,
                }}
                transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
                className="absolute top-1/3 left-1/2 text-2xl pointer-events-none z-20"
              >
                {emoji}
              </motion.div>
            ))}
        </AnimatePresence>

        {/* Glassmorphism card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] p-6 sm:p-8 puffy-shadow relative overflow-hidden">
          <div className="text-center space-y-3">
            {/* Icon */}
            <motion.div
              animate={{ rotate: success ? [0, -10, 10, 0] : undefined }}
              transition={{ duration: 0.5 }}
              className="text-5xl"
            >
              {success ? "🎉" : "🐱"}
            </motion.div>

            <div>
              <h1 className="font-headline font-extrabold text-2xl text-primary mb-2">
                {success ? "환영합니다!" : "비밀이야~"}
              </h1>
              <p className="text-sm text-on-surface-variant font-body">
                {success
                  ? "잠시만 기다려주세요..."
                  : "비밀번호를 알려줘~"}
              </p>
            </div>

            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6"
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-7xl"
                  >
                    🎉
                  </motion.div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-3"
                >
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="비밀번호"
                      className="w-full px-6 py-4 bg-surface-container-high/50 rounded-[1.5rem] text-center text-lg font-body text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:bg-primary-container/20 transition-all placeholder:text-outline/50"
                      autoFocus
                    />
                  </div>

                  {/* Error message */}
                  <div className="min-h-[1.5rem]">
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-error font-bold flex items-center justify-center gap-1"
                      >
                        <span>⚠️</span>
                        {error}
                      </motion.p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading || !password}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-white font-headline font-bold text-base rounded-[1.5rem] puffy-shadow disabled:opacity-50 transition-all hover:scale-[1.02]"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="inline-block"
                        >
                          ⏳
                        </motion.span>
                        확인 중...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        들어갈래~ ✨
                      </span>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom hint */}
        <p className="text-center text-xs text-outline/50 mt-6">
          🐾 나만 볼 수 있는 비밀 공간
        </p>
      </motion.div>
    </div>
  );
}
