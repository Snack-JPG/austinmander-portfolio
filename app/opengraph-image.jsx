import { ImageResponse } from "next/og";

export const alt = "Austin Mander portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "56px",
          background:
            "radial-gradient(circle at top left, rgba(34, 211, 238, 0.32), transparent 34%), linear-gradient(180deg, #070b19 0%, #02050b 100%)",
          color: "#f4f7fb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "32px",
            padding: "40px",
            background: "rgba(8,16,31,0.7)",
          }}
        >
          <div style={{ display: "flex", fontSize: 24, letterSpacing: "0.3em", textTransform: "uppercase" }}>
            Austin Mander
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "820px" }}>
            <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.02 }}>
              AI engineer building production-ready agent systems.
            </div>
            <div style={{ fontSize: 30, color: "#cbd5e1", lineHeight: 1.4 }}>
              Portfolio of AI agents, enterprise software, and solo-built systems with real operational weight.
            </div>
          </div>
          <div style={{ display: "flex", gap: "18px", color: "#7dd3fc", fontSize: 24 }}>
            <span>AI agents</span>
            <span>Enterprise systems</span>
            <span>Next.js</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
