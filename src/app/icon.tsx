import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ffd8e6 0%, #ffb7d5 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 1px 3px rgba(133,77,103,0.3)",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: 800,
            lineHeight: 1,
            display: "flex",
            fontFamily: "sans-serif",
          }}
        >
          F
        </div>
      </div>
    ),
    { ...size }
  );
}
