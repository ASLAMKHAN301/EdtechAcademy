import { GOLD, NAVY } from "../../constants/theme";

export default function StickyMobileCTA() {
  return (
    <div
      style={{
        display: "flex", position: "fixed", bottom: 0, left: 0, right: 0,
        zIndex: 200, background: NAVY, borderTop: `2px solid ${GOLD}`,
        padding: "14px 20px", alignItems: "center", justifyContent: "space-between", gap: 12,
      }}
    >
      <p style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.75)", margin: 0 }}>
        Free career counselling available
      </p>
      <a
        href="#enrol"
        style={{ background: GOLD, color: NAVY, fontSize: 13, fontWeight: 700, padding: "10px 20px", borderRadius: 2, textDecoration: "none", whiteSpace: "nowrap" }}
      >
        Book Now →
      </a>
    </div>
  );
}
