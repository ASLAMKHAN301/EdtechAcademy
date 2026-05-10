import { NAVY, GOLD, MIST, BORDER, STONE } from "../../constants/theme";
import { TRUST_ITEMS } from "../../data/content";

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill={GOLD}>
      <polygon points="6.5,1 8,5 12.5,5 9,8 10.5,13 6.5,10 2.5,13 4,8 0.5,5 5,5" />
    </svg>
  );
}

export default function TrustStrip() {
  return (
    <div
      style={{
        background: MIST, borderBottom: `1px solid ${BORDER}`,
        padding: "20px 60px",
        display: "flex", alignItems: "center", gap: 0, overflowX: "auto",
      }}
    >
      <span
        style={{
          fontSize: 10, fontWeight: 700, color: STONE,
          letterSpacing: "2px", textTransform: "uppercase",
          whiteSpace: "nowrap", marginRight: 32, flexShrink: 0,
        }}
      >
        Why Edtech
      </span>

      <div style={{ display: "flex", gap: 0, alignItems: "center", flexWrap: "wrap" }}>
        {TRUST_ITEMS.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "0 28px",
              borderRight: i < TRUST_ITEMS.length - 1 ? `1px solid ${BORDER}` : "none",
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                width: 30, height: 30, background: NAVY, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}
            >
              <StarIcon />
            </div>
            <strong style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>{item}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
