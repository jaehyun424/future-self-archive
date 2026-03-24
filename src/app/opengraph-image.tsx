import { ImageResponse } from "next/og";

export const alt = "미래의 나에게 보내는 기록";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const fontData = await fetch(
    "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/public/static/Pretendard-Bold.otf"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #fff0f5 0%, #ffd8e6 50%, #fff5f9 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Pretendard",
          position: "relative",
        }}
      >
        {/* Top left decoration */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 60,
            fontSize: 64,
            display: "flex",
            opacity: 0.6,
          }}
        >
          🌸
        </div>

        {/* Top right decoration */}
        <div
          style={{
            position: "absolute",
            top: 50,
            right: 80,
            fontSize: 52,
            display: "flex",
            opacity: 0.5,
          }}
        >
          💕
        </div>

        {/* Bottom left decoration */}
        <div
          style={{
            position: "absolute",
            bottom: 50,
            left: 80,
            fontSize: 48,
            display: "flex",
            opacity: 0.5,
          }}
        >
          💕
        </div>

        {/* Bottom right decoration */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 60,
            fontSize: 64,
            display: "flex",
            opacity: 0.6,
          }}
        >
          🌸
        </div>

        {/* Center sparkle */}
        <div
          style={{
            fontSize: 80,
            marginBottom: 20,
            display: "flex",
            gap: 24,
          }}
        >
          ✨
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#854d67",
            marginBottom: 16,
            display: "flex",
            textAlign: "center",
          }}
        >
          미래의 나에게 보내는 기록
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#8d6f7a",
            display: "flex",
          }}
        >
          과거에서 온 행복한 메시지가 당신을 기다리고 있어요
        </div>

        {/* Decorative dots */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 32,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#ffd8e6",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#ede4aa",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#b2f2bb",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Pretendard",
          data: fontData,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
