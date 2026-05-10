import { GOLD, NAVY, gridBg } from "../../constants/theme";
import { PROCESS_STEPS } from "../../data/content";
import { Eyebrow, DisplayH2, SectionContainer } from "../ui";

export default function ProcessSection() {
  return (
    <section id="process" style={{ background: NAVY, position: "relative", overflow: "hidden", padding: "88px 0" }}>
      <div style={{ position: "absolute", inset: 0, ...gridBg, pointerEvents: "none" }} />
      <SectionContainer style={{ position: "relative", zIndex: 1 }}>
        <Eyebrow label="Our Approach" dark />
        <DisplayH2 light>
          From Enrolment to<br />
          Offer Letter —{" "}
          <em style={{ fontStyle: "italic", color: GOLD }}>Step by Step.</em>
        </DisplayH2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginTop: 60, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {PROCESS_STEPS.map((s, i) => (
            <div
              key={s.num}
              style={{
                padding: `40px ${i < PROCESS_STEPS.length - 1 ? "36px" : "0"} 40px ${i > 0 ? "36px" : "0"}`,
                borderRight: i < PROCESS_STEPS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                display: "flex", flexDirection: "column", gap: 14,
              }}
            >
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 48, fontWeight: 700, color: "rgba(255,255,255,0.07)", lineHeight: 1, marginBottom: -8, letterSpacing: "-2px" }}>
                {s.num}
              </div>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: GOLD, marginBottom: 4 }} />
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 17, fontWeight: 700, color: "white", lineHeight: 1.3, letterSpacing: "-0.3px" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontWeight: 300 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
