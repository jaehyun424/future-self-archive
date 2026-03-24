"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import LottieWrapper from "@/components/LottieWrapper";

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
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-sticker-texture">
      {/* Decorative background */}
      <div className="absolute top-20 left-10 opacity-20 select-none">
        <span className="material-symbols-outlined text-6xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
          lock
        </span>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 select-none rotate-12">
        <span className="material-symbols-outlined text-7xl text-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
          key
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 120 }}
        className="w-full max-w-sm relative"
      >
        {/* Glassmorphism card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] p-8 sm:p-10 puffy-shadow relative overflow-hidden">
          {/* Top decoration */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-5 py-1 rounded-full text-xs font-bold shadow-sm">
            SECRET VAULT 🔐
          </div>

          <div className="text-center space-y-6 pt-4">
            {/* Icon */}
            <motion.div
              animate={{ rotate: success ? [0, -10, 10, 0] : undefined }}
              transition={{ duration: 0.5 }}
              className="text-5xl"
            >
              {success ? "🎉" : "🔒"}
            </motion.div>

            <div>
              <h1 className="font-headline font-extrabold text-2xl text-primary mb-2">
                {success ? "환영합니다!" : "비밀 기록 보관소"}
              </h1>
              <p className="text-sm text-on-surface-variant font-body">
                {success ? "잠시만 기다려주세요..." : "비밀번호를 입력하세요"}
              </p>
            </div>

            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-4"
                >
                  <LottieWrapper
                    src="https://lottie.host/c1b97e3a-771a-4fc9-8aa0-91fcd804d957/V8YPGCX7Nv.lottie"
                    className="w-32 h-32 mx-auto"
                    loop={false}
                  />
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
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

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-error font-bold flex items-center justify-center gap-1"
                    >
                      <span className="material-symbols-outlined text-sm">error</span>
                      {error}
                    </motion.p>
                  )}

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
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="material-symbols-outlined text-lg"
                        >
                          progress_activity
                        </motion.span>
                        확인 중...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-lg">lock_open</span>
                        열기
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
          이 보관소는 본인만 접근 가능합니다
        </p>
      </motion.div>
    </div>
  );
}
