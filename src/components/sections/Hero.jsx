import { GOLD, NAVY, gridBg } from "../../constants/theme";
import { HERO_STATS } from "../../data/content";
import BookingForm from "../ui/BookingForm";

export default function Hero() {
  return (
    <section
      style={{
        background: NAVY, position: "relative", overflow: "hidden",
        padding: "0 60px",
        display: "grid", gridTemplateColumns: "1fr 420px",
        gap: 60, alignItems: "center", minHeight: 600,
      }}
    >
      {/* Decorative overlays */}
      <div style={{ position: "absolute", inset: 0, ...gridBg, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: GOLD }} />

      <HeroContent />

      <div style={{ position: "relative", zIndex: 1, margin: "48px 0" }}>
        <BookingForm />
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div style={{ padding: "80px 0", position: "relative", zIndex: 1 }}>
      {/* Eyebrow */}
      <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
        <div style={{ width: 32, height: 1, background: GOLD }} />
        <span style={{ fontSize: 11, fontWeight: 600, color: GOLD, letterSpacing: "2.5px", textTransform: "uppercase" }}>
          Professional Training &amp; Career Placement
        </span>
      </div>

      <h1
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(38px, 4.5vw, 64px)", fontWeight: 700,
          color: "white", lineHeight: 1.08, letterSpacing: "-1px", marginBottom: 24,
        }}
      >
        Where Ambition<br />Becomes a<br />
        <em style={{ fontStyle: "italic", color: GOLD }}>Career.</em>
      </h1>

      <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: 500, marginBottom: 40, fontWeight: 300 }}>
        Industry-aligned training in Business Analysis, Project Management, Cyber Security, and Data Science — with
        dedicated placement support from enrolment to offer letter.
      </p>

      <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
        <a href="#enrol" style={{ background: GOLD, color: NAVY, fontSize: 14, fontWeight: 700, padding: "14px 28px", borderRadius: 2, textDecoration: "none" }}>
          Speak to an Advisor
        </a>
        <a href="#programs" style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: 500, padding: "14px 28px", borderRadius: 2, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
          Explore Programs
        </a>
      </div>

      <StatRow />
    </div>
  );
}

function StatRow() {
  return (
    <div style={{ display: "flex", gap: 0, marginTop: 56, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 32 }}>
      {HERO_STATS.map((s, i, arr) => (
        <div
          key={s.num}
          style={{
            paddingRight: 36,
            borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
            marginRight: i < arr.length - 1 ? 36 : 0,
          }}
        >
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 700, color: "white", lineHeight: 1, marginBottom: 4 }}>
            {s.num}
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>{s.lbl}</div>
        </div>
      ))}
    </div>
  );
}
