import { useState, useEffect } from "react";
import { NAVY, GOLD, gridBg } from "../../constants/theme";
import { TOOLS } from "../../data/content";
import { Eyebrow, DisplayH2 } from "../ui";

export default function ToolsSection() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive logic for grid columns
  const getGridColumns = () => {
    if (windowWidth < 640) return "1fr"; // Mobile
    if (windowWidth < 1024) return "repeat(2, 1fr)"; // Tablet
    return "repeat(4, 1fr)"; // Desktop
  };

  return (
    <section id="tools" style={{ 
      background: NAVY, 
      position: "relative", 
      overflow: "hidden", 
      padding: windowWidth < 768 ? "60px 0" : "88px 0", 
      borderBottom: "1px solid rgba(255,255,255,0.08)" 
    }}>
      {/* Background Grid Pattern */}
      <div style={{ position: "absolute", inset: 0, ...gridBg, pointerEvents: "none" }} />

      {/* Main Container with 20px padding */}
      <div style={{ 
        maxWidth: "1160px", 
        margin: "0 auto", 
        padding: "0 20px", 
        position: "relative", 
        zIndex: 1 
      }}>
        
        <Eyebrow label="Curriculum Tools" dark />
        
        <DisplayH2 light>
          Tools You Will <em style={{ fontStyle: "italic", color: GOLD }}>Learn.</em>
        </DisplayH2>
        
        <p style={{ 
          fontSize: windowWidth < 480 ? 14 : 16, 
          color: "rgba(255,255,255,0.5)", 
          lineHeight: 1.75, 
          maxWidth: 520, 
          fontWeight: 300, 
          marginTop: 14 
        }}>
          Master the exact tools used by product managers and analysts at top companies — from wireframing to automation.
        </p>

        {/* Dynamic Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: getGridColumns(), 
          gap: windowWidth < 768 ? 16 : 24, 
          marginTop: windowWidth < 768 ? 32 : 52 
        }}>
          {TOOLS.map((t) => <ToolCard key={t.name} tool={t} windowWidth={windowWidth} />)}
        </div>
      </div>
    </section>
  );
}

function ToolCard({ tool, windowWidth }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(201,168,76,0.08)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: 8, 
        padding: windowWidth < 480 ? "20px" : "24px 20px",
        display: "flex", 
        flexDirection: "column", 
        alignItems: "flex-start", 
        gap: 14,
        transition: "background 0.2s, border-color 0.2s, transform 0.2s",
        transform: hovered ? "translateY(-4px)" : "none",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: 56, height: 56, borderRadius: 12,
          background: tool.bg,
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          boxShadow: hovered ? "0 8px 16px rgba(0,0,0,0.2)" : "none",
          transition: "box-shadow 0.2s"
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 700, color: "white", letterSpacing: "-0.5px" }}>
          {tool.name.slice(0, 2).toUpperCase()}
        </span>
      </div>
      
      <div>
        <div style={{ 
          fontSize: 14, 
          fontWeight: 600, 
          color: "white", 
          lineHeight: 1.3, 
          marginBottom: 4 
        }}>
          {tool.name}
        </div>
        <div style={{ 
          fontSize: 12, 
          color: "rgba(255,255,255,0.4)", 
          lineHeight: 1.5 
        }}>
          {tool.desc}
        </div>
      </div>
    </div>
  );
}