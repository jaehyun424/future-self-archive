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
          background:
            "linear-gradient(135deg, #fff5f9 0%, #ffd8e6 50%, #fff0f5 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Pretendard",
        }}
      >
        <div
          style={{
            fontSize: 72,
            marginBottom: 24,
            display: "flex",
            gap: 16,
          }}
        >
          📬✨
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#854d67",
            marginBottom: 16,
            display: "flex",
          }}
        >
          미래의 나에게 보내는 기록
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#8d6f7a",
            display: "flex",
          }}
        >
          과거에서 온 행복한 메시지가 당신을 기다리고 있어요
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
