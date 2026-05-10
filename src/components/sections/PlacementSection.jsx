import { GOLD, NAVY, gridBg } from "../../constants/theme";
import { PLACEMENT_FEATURES, PLACEMENT_STATS } from "../../data/content";
import { Eyebrow, DisplayH2, SectionContainer } from "../ui";

export default function PlacementSection() {
  return (
    <section style={{ background: NAVY, position: "relative", overflow: "hidden", padding: "88px 0" }}>
      <div style={{ position: "absolute", inset: 0, ...gridBg, pointerEvents: "none" }} />
      <SectionContainer style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <PlacementLeft />
          <PlacementCard />
        </div>
      </SectionContainer>
    </section>
  );
}

function PlacementLeft() {
  return (
    <div>
      <Eyebrow label="Placement Support" dark />
      <DisplayH2 light>
        We Don't Stop at<br />
        <em style={{ fontStyle: "italic", color: GOLD }}>Graduation.</em>
      </DisplayH2>
      <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: 520, fontWeight: 300, marginTop: 16, marginBottom: 32 }}>
        100% placement assistance means exactly that — dedicated, active support until you receive an offer.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {PLACEMENT_FEATURES.map((f) => (
          <div key={f.title} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ width: 48, height: 48, background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill={GOLD}><circle cx="11" cy="11" r="9" /></svg>
            </div>
            <h4 style={{ fontSize: 14, fontWeight: 600, color: "white", lineHeight: 1.3 }}>{f.title}</h4>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlacementCard() {
  return (
    <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "40px 36px" }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: GOLD, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 8 }}>
        Placement Track Record
      </div>
      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 28, fontWeight: 700, color: "white", lineHeight: 1.2, letterSpacing: "-0.5px", marginBottom: 28 }}>
        The numbers behind our{" "}
        <em style={{ fontStyle: "italic", color: GOLD }}>promise.</em>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 }}>
        {PLACEMENT_STATS.map((s) => (
          <div key={s.num} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 8, padding: "20px 16px" }}>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 700, color: GOLD, lineHeight: 1, marginBottom: 4 }}>
              {s.num}
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.4 }}>{s.lbl}</div>
          </div>
        ))}
      </div>
      <a href="#enrol" style={{ display: "block", textAlign: "center", background: GOLD, color: NAVY, fontSize: 14, fontWeight: 700, padding: "14px 20px", borderRadius: 6, textDecoration: "none" }}>
        Start Your Placement Journey →
      </a>
    </div>
  );
}
