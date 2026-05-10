import { useState } from "react";
import { NAVY, STONE, CREAM, BORDER } from "../../constants/theme";
import { LogoMark } from "../ui";
import { NAV_LINKS } from "../../data/content";

export default function Nav() {
  return (
    <nav
      style={{
        background: CREAM, borderBottom: `1px solid ${BORDER}`,
        padding: "0 60px", height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 100,
      }}
    >
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
        <LogoMark />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 16, fontWeight: 700, color: NAVY, lineHeight: 1.1, letterSpacing: "-0.3px",
            }}
          >
            Edtech Academy
          </strong>
          <span style={{ fontSize: 10, fontWeight: 500, color: STONE, letterSpacing: "1.5px", textTransform: "uppercase" }}>
            Training &amp; Placement
          </span>
        </div>
      </a>

      <ul style={{ display: "flex", listStyle: "none", gap: 2, alignItems: "center", margin: 0, padding: 0 }}>
        {NAV_LINKS.map((item) => (
          <li key={item}>
            <NavLink href={`#${item.toLowerCase().replace(/ /g, "")}`}>{item}</NavLink>
          </li>
        ))}
        <li>
          <a
            href="#enrol"
            style={{
              background: NAVY, color: "white", fontSize: 14, fontWeight: 600,
              padding: "8px 22px", borderRadius: 2, textDecoration: "none",
              marginLeft: 8, display: "block",
            }}
          >
            Speak to an Advisor
          </a>
        </li>
      </ul>
    </nav>
  );
}

function NavLink({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      style={{
        textDecoration: "none", color: hovered ? NAVY : STONE,
        fontSize: 14, fontWeight: 500, padding: "7px 16px",
        borderRadius: 2, display: "block", transition: "color 0.15s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}
