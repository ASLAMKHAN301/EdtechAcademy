import { useState } from "react";
import { NAVY, GOLD, gridBg } from "../../constants/theme";
import { TOOLS } from "../../data/content";
import { Eyebrow, DisplayH2, SectionContainer } from "../ui";

export default function ToolsSection() {
  return (
    <section id="tools" style={{ background: NAVY, position: "relative", overflow: "hidden", padding: "88px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ position: "absolute", inset: 0, ...gridBg, pointerEvents: "none" }} />
      <SectionContainer style={{ position: "relative", zIndex: 1 }}>
        <Eyebrow label="Curriculum Tools" dark />
        <DisplayH2 light>
          Tools You Will <em style={{ fontStyle: "italic", color: GOLD }}>Learn.</em>
        </DisplayH2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: 520, fontWeight: 300, marginTop: 14 }}>
          Master the exact tools used by product managers and analysts at top companies — from wireframing to automation.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 52 }}>
          {TOOLS.map((t) => <ToolCard key={t.name} tool={t} />)}
        </div>
      </SectionContainer>
    </section>
  );
}

function ToolCard({ tool }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(201,168,76,0.08)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: 8, padding: "24px 20px",
        display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14,
        transition: "background 0.2s, border-color 0.2s, transform 0.2s",
        transform: hovered ? "translateY(-2px)" : "none",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: 56, height: 56, borderRadius: 12,
          background: tool.bg,
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 700, color: "white", letterSpacing: "-0.5px" }}>
          {tool.name.slice(0, 2)}
        </span>
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: "white", lineHeight: 1.3 }}>{tool.name}</div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>{tool.desc}</div>
      </div>
    </div>
  );
}
