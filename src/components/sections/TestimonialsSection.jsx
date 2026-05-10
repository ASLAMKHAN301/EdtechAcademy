import { GOLD, NAVY, STONE, CREAM, BORDER, MIST, INK } from "../../constants/theme";
import { TESTIMONIALS } from "../../data/content";
import { Eyebrow, DisplayH2, SectionContainer, SectionHead, StarRow } from "../ui";

export default function TestimonialsSection() {
  return (
    <section style={{ background: CREAM, borderBottom: `1px solid ${BORDER}`, padding: "88px 0" }}>
      <SectionContainer>
        <SectionHead linkText="Read all stories →">
          <Eyebrow label="Graduate Stories" />
          <DisplayH2>
            Heard From Those<br />
            Who <em style={{ fontStyle: "italic", color: GOLD }}>Made It.</em>
          </DisplayH2>
        </SectionHead>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} testimonial={t} />)}
        </div>
      </SectionContainer>
    </section>
  );
}

function TestimonialCard({ testimonial: t }) {
  return (
    <div style={{ background: "white", border: `1px solid ${BORDER}`, borderRadius: 4, padding: "32px 28px", display: "flex", flexDirection: "column", gap: 20 }}>
      <StarRow />

      <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 15, fontStyle: "italic", color: INK, lineHeight: 1.75, flex: 1 }}>
        <span style={{ color: GOLD, fontSize: 40, lineHeight: 0, verticalAlign: -16, marginRight: 4 }}>"</span>
        {t.quote}
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 18, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: NAVY, color: GOLD, fontFamily: "'Playfair Display', serif", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          {t.initials}
        </div>
        <div>
          <strong style={{ display: "block", fontSize: 13, fontWeight: 600, color: NAVY, lineHeight: 1.3 }}>{t.name}</strong>
          <span style={{ fontSize: 12, color: STONE }}>{t.role}</span>
        </div>
        <div style={{ marginLeft: "auto", fontSize: 10, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", color: STONE, background: MIST, padding: "3px 8px", borderRadius: 1, whiteSpace: "nowrap" }}>
          {t.tag}
        </div>
      </div>
    </div>
  );
}
