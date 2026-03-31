"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOwner, setIsOwner] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isVault = pathname.startsWith("/vault");

  useEffect(() => {
    fetch("/api/auth/session")
      .then((r) => r.json())
      .then((data) => setIsOwner(data.isOwner));
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setIsOwner(false);
    router.push("/");
    router.refresh();
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 rounded-b-[3rem] transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-[0_12px_40px_-4px_rgba(255,183,213,0.2)]"
          : "bg-white/60 backdrop-blur-lg shadow-[0_12px_40px_-4px_rgba(255,183,213,0.1)]"
      }`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 sm:px-8 py-5">
        <Link
          href={isVault ? "/vault" : "/"}
          className="flex items-center gap-2"
        >
          <span className="text-2xl">{isVault ? "🔓" : "💌"}</span>
          <span className="font-headline font-extrabold tracking-tight text-lg sm:text-xl text-primary">
            퓨처 셀프 아카이브
          </span>
        </Link>
        <div className="flex items-center gap-3">
          {isOwner ? (
            <>
              {!isVault && (
                <Link
                  href="/vault"
                  className="flex items-center gap-1.5 px-4 py-2 bg-primary-container text-on-primary-container rounded-full text-sm font-bold hover:scale-105 transition-transform"
                >
                  <span className="text-base">🔓</span>
                  전체 보기
                </Link>
              )}
              {isVault && (
                <Link
                  href="/"
                  className="flex items-center gap-1.5 px-4 py-2 bg-surface-container text-on-surface rounded-full text-sm font-bold hover:scale-105 transition-transform"
                >
                  <span className="text-base">🌐</span>
                  공개
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-4 py-2 text-outline text-sm font-bold hover:text-primary transition-colors"
              >
                <span className="text-base">👋</span>
                로그아웃
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-1.5 px-5 py-2.5 bg-primary text-white rounded-full text-sm font-bold hover:scale-105 transition-transform puffy-shadow"
            >
              <span className="text-base">🐾</span>
              로그인
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
