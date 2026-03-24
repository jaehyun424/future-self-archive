import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Future Self Archive — 미래의 나에게 보내는 기록",
  description: "과거에서 온 행복한 메시지가 당신을 기다리고 있어요. 미래의 나에게 보내는 기록 보관소.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "미래의 나에게 보내는 기록",
    description: "과거에서 온 행복한 메시지가 당신을 기다리고 있어요",
    type: "website",
    images: [{ url: "/opengraph-image?v=5", width: 1200, height: 630 }],
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
          <p>미래의 나에게 보내는 기록</p>
        </footer>
      </body>
    </html>
  );
}
