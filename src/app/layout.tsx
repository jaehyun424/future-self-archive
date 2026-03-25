import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "퓨처 셀프 아카이브",
  description: "미래의 나와 현재의 내가 주고받은\n편지와 기록",
  robots: { index: true, follow: true },
  openGraph: {
    title: "퓨처 셀프 아카이브",
    description: "미래의 나와 현재의 내가 주고받은\n편지와 기록",
    type: "website",
    images: [{ url: "/og/og-rabbit-v2.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/og-rabbit-v2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col text-on-surface font-body">
        <ScrollToTop />
        <Navigation />
        <main className="flex-1 relative z-10">{children}</main>
        <footer className="text-center py-8 text-xs text-outline/60 font-body relative z-10">
          <p>2026 퓨처 셀프 아카이브</p>
        </footer>
      </body>
    </html>
  );
}
