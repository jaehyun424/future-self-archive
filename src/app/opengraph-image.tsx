import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "미래의 나에게 보내는 기록";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const [imgBuffer, fontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/og-cat.jpg")),
    fetch(
      "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/public/static/Pretendard-Bold.otf"
    ).then((res) => res.arrayBuffer()),
  ]);

  const imgSrc = `data:image/jpeg;base64,${imgBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
        }}
      >
        {/* Cat background */}
        <img
          src={imgSrc}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />

        {/* Pink gradient overlay at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "55%",
            background:
              "linear-gradient(180deg, transparent 0%, rgba(255,216,230,0.85) 50%, rgba(255,183,213,0.95) 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 50,
            fontFamily: "Pretendard",
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#854d67",
              display: "flex",
            }}
          >
            미래의 나에게 보내는 기록
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#6a364f",
              marginTop: 12,
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
              marginTop: 24,
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
