// Hero.jsx

import { GOLD, NAVY, gridBg } from "../../constants/theme";
import { HERO_STATS } from "../../data/content";
import BookingForm from "../ui/BookingForm";

export default function Hero() {
  return (
    <section
      style={{
        background: NAVY,
        position: "relative",
        overflow: "hidden",
        padding: "40px 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: 40,
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {/* Decorative overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          ...gridBg,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: GOLD,
        }}
      />

      <HeroContent />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 420,
          margin: "0 auto",
        }}
      >
        <BookingForm />
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div
      style={{
        padding: "20px 0",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Eyebrow */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 24,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: 32,
            height: 1,
            background: GOLD,
          }}
        />

        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: GOLD,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Professional Training & Career Placement
        </span>
      </div>

      <h1
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(34px, 8vw, 64px)",
          fontWeight: 700,
          color: "white",
          lineHeight: 1.1,
          letterSpacing: "-1px",
          marginBottom: 20,
        }}
      >
        Where Ambition
        <br />
        Becomes a
        <br />
        <em style={{ fontStyle: "italic", color: GOLD }}>
          Career.
        </em>
      </h1>

      <p
        style={{
          fontSize: 16,
          color: "rgba(255,255,255,0.7)",
          lineHeight: 1.8,
          maxWidth: 520,
          marginBottom: 36,
          fontWeight: 300,
        }}
      >
        Industry-aligned training in Business Analysis,
        Project Management, Cyber Security, and Data
        Science — with dedicated placement support from
        enrolment to offer letter.
      </p>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        <a
          href="#enrol"
          style={{
            background: GOLD,
            color: NAVY,
            fontSize: 14,
            fontWeight: 700,
            padding: "14px 28px",
            borderRadius: 4,
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Speak to an Advisor
        </a>

        <a
          href="#programs"
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: 14,
            fontWeight: 500,
            padding: "14px 28px",
            borderRadius: 4,
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.2)",
            textAlign: "center",
          }}
        >
          Explore Programs
        </a>
      </div>

      <StatRow />
    </div>
  );
}

function StatRow() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(120px, 1fr))",
        gap: 24,
        marginTop: 50,
        borderTop: "1px solid rgba(255,255,255,0.1)",
        paddingTop: 30,
      }}
    >
      {HERO_STATS.map((s) => (
        <div key={s.num}>
          <div
            style={{
              fontFamily:
                "'Playfair Display', Georgia, serif",
              fontSize: 30,
              fontWeight: 700,
              color: "white",
              marginBottom: 6,
            }}
          >
            {s.num}
          </div>

          <div
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.5,
            }}
          >
            {s.lbl}
          </div>
        </div>
      ))}
    </div>
  );
}