import { useState, useEffect } from "react";
import { NAVY, STONE, CREAM, BORDER } from "../../constants/theme";
import { LogoMark } from "../ui";
import { NAV_LINKS } from "../../data/content";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);

      // Close menu automatically on desktop
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      style={{
        background: CREAM,
        borderBottom: `1px solid ${BORDER}`,
        padding: "0 20px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Top Navbar */}
      <div
        style={{
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          <LogoMark />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <strong
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? 14 : 16,
                fontWeight: 700,
                color: NAVY,
                lineHeight: 1.1,
                letterSpacing: "-0.3px",
              }}
            >
              Edtech Academy
            </strong>

            <span
              style={{
                fontSize: 10,
                fontWeight: 500,
                color: STONE,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Training & Placement
            </span>
          </div>
        </a>

        {/* Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              fontSize: 28,
              color: NAVY,
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}

        {/* Desktop Menu */}
        {!isMobile && (
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: 8,
              alignItems: "center",
              margin: 0,
              padding: 0,
            }}
          >
            {NAV_LINKS.map((item) => (
              <li key={item}>
                <NavLink
                  href={`#${item.toLowerCase().replace(/ /g, "")}`}
                >
                  {item}
                </NavLink>
              </li>
            ))}

            <li>
              <a
                href="#enrol"
                style={{
                  background: NAVY,
                  color: "white",
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "10px 22px",
                  borderRadius: 4,
                  textDecoration: "none",
                  marginLeft: 10,
                  display: "block",
                }}
              >
                Speak to an Advisor
              </a>
            </li>
          </ul>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <ul
          style={{
            listStyle: "none",
            padding: "10px 0 20px",
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {NAV_LINKS.map((item) => (
            <li key={item}>
              <NavLink
                href={`#${item.toLowerCase().replace(/ /g, "")}`}
              >
                {item}
              </NavLink>
            </li>
          ))}

          <li>
            <a
              href="#enrol"
              style={{
                background: NAVY,
                color: "white",
                fontSize: 14,
                fontWeight: 600,
                padding: "12px 20px",
                borderRadius: 4,
                textDecoration: "none",
                display: "inline-block",
                marginTop: 10,
              }}
            >
              Speak to an Advisor
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

function NavLink({ href, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      style={{
        textDecoration: "none",
        color: hovered ? NAVY : STONE,
        fontSize: 14,
        fontWeight: 500,
        padding: "8px 14px",
        borderRadius: 4,
        display: "block",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}