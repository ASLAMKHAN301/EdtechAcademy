import { GOLD, NAVY, STONE, CREAM, BORDER } from "../../constants/theme";
import { PARTNERS } from "../../data/content";
import { Eyebrow, DisplayH2, SectionContainer } from "../ui";

export default function PartnersSection() {
  return (
    <section style={{ background: "white", borderBottom: `1px solid ${BORDER}`, padding: "88px 0" }}>
      <SectionContainer>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <Eyebrow label="Hiring Network" />
            <DisplayH2>
              150+ Companies<br />
              Actively <em style={{ fontStyle: "italic", color: GOLD }}>Hiring.</em>
            </DisplayH2>
            <p style={{ fontSize: 16, color: STONE, lineHeight: 1.75, maxWidth: 420, fontWeight: 300, marginTop: 20 }}>
              Our hiring partners range from global consulting firms and IT majors to funded startups and fintech companies
              across India. We maintain active relationships — not passive job board listings.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: BORDER, border: `1px solid ${BORDER}` }}>
            {PARTNERS.map((p, i) => (
              <div
                key={i}
                style={{
                  background: i === PARTNERS.length - 1 ? NAVY : CREAM,
                  padding: "20px 16px",
                  fontSize: 13,
                  fontWeight: i === PARTNERS.length - 1 ? 700 : 600,
                  color: i === PARTNERS.length - 1 ? GOLD : NAVY,
                  textAlign: "center",
                  fontFamily: i === PARTNERS.length - 1 ? "'Playfair Display', Georgia, serif" : "inherit",
                  fontStyle: i === PARTNERS.length - 1 ? "italic" : "normal",
                  letterSpacing: "0.2px",
                }}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
