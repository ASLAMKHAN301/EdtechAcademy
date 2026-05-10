import { GOLD, NAVY, STONE, CREAM, BORDER, INK } from "../../constants/theme";
import { OUTCOME_BULLETS, OUTCOME_STATS } from "../../data/content";
import { Eyebrow, DisplayH2, SectionContainer } from "../ui";

export default function OutcomesSection() {
  return (
    <section id="outcomes" style={{ background: "white", borderBottom: `1px solid ${BORDER}`, padding: "88px 0" }}>
      <SectionContainer>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <OutcomesLeft />
          <OutcomesRight />
        </div>
      </SectionContainer>
    </section>
  );
}

function OutcomesLeft() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div>
        <Eyebrow label="Track Record" />
        <DisplayH2>
          Numbers That<br />
          Speak for <em style={{ fontStyle: "italic", color: GOLD }}>Themselves.</em>
        </DisplayH2>
      </div>
      <p style={{ fontSize: 16, color: STONE, lineHeight: 1.75, maxWidth: 520, fontWeight: 300 }}>
        We measure success by how quickly you get hired and what you earn — not by enrolment numbers or vanity metrics.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 8 }}>
        {OUTCOME_BULLETS.map((text, i) => (
          <div
            key={i}
            style={{
              display: "grid", gridTemplateColumns: "20px 1fr", gap: 14,
              alignItems: "flex-start", padding: "16px 0",
              borderBottom: `1px solid ${BORDER}`,
              borderTop: i === 0 ? `1px solid ${BORDER}` : "none",
            }}
          >
            <div style={{ width: 8, height: 8, background: GOLD, borderRadius: "50%", marginTop: 6, flexShrink: 0 }} />
            <p style={{ fontSize: 14, color: INK, lineHeight: 1.6 }}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OutcomesRight() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: BORDER, border: `1px solid ${BORDER}`, alignSelf: "start", marginTop: 8 }}>
      {OUTCOME_STATS.map((s) => (
        <div key={s.num} style={{ background: s.dark ? NAVY : CREAM, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 38, fontWeight: 700, color: s.dark ? GOLD : NAVY, lineHeight: 1, letterSpacing: "-1px" }}>
            {s.num}
          </div>
          <div style={{ fontSize: 12, color: s.dark ? "rgba(255,255,255,0.5)" : STONE, lineHeight: 1.5 }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
