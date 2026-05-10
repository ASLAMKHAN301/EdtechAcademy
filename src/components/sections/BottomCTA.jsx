import { GOLD, NAVY, gridBg } from "../../constants/theme";
import { CTA_CHECKLIST } from "../../data/content";
import { SectionContainer, CheckIcon } from "../ui";
import BookingForm from "../ui/BookingForm";

export default function BottomCTA() {
  return (
    <section id="enrol" style={{ background: NAVY, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, ...gridBg, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: GOLD }} />
      <SectionContainer style={{ position: "relative", zIndex: 1 }}>
        <div style={{ padding: "80px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <CTACopy />
          <BookingForm light />
        </div>
      </SectionContainer>
    </section>
  );
}

function CTACopy() {
  return (
    <div>
      <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, color: "white", lineHeight: 1.12, letterSpacing: "-0.8px", marginBottom: 16 }}>
        One Conversation<br />
        Can Change Your{" "}
        <em style={{ fontStyle: "italic", color: GOLD }}>Career.</em>
      </h2>
      <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontWeight: 300, marginBottom: 32 }}>
        Our advisors are working professionals who have been exactly where you are. No scripts, no hard sell — just honest
        guidance about which path is right for you and your goals.
      </p>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, padding: 0, margin: 0 }}>
        {CTA_CHECKLIST.map((item) => (
          <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "rgba(255,255,255,0.75)" }}>
            <CheckIcon />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
