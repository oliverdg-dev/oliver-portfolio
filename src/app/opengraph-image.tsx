import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.shortName} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0a0b",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(198,243,90,0.18), transparent 45%)",
          color: "#edece7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#9a9aa1", letterSpacing: 4 }}>
          <span>OLIVER GARCIA</span>
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 12, height: 12, borderRadius: 12, background: "#c6f35a" }} />
            SOFTWARE DEVELOPER
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1, letterSpacing: -3, fontWeight: 600 }}>
          <span>Engineering software.</span>
          <span style={{ color: "#c6f35a" }}>Automating the complex.</span>
          <span>Designing better experiences.</span>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#9a9aa1" }}>
          Full-stack · AI integrations · Workflow automation
        </div>
      </div>
    ),
    size,
  );
}
