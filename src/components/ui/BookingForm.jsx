import { useState } from "react";
import { NAVY, STONE } from "../../constants/theme";
import { FormField, FormSelect } from "./index";
import { PROGRAM_OPTIONS, STATUS_OPTIONS } from "../../data/content";

export default function BookingForm({ light = false }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      style={{
        background: "white", borderRadius: 4, padding: "36px 32px",
        boxShadow: light ? "0 32px 80px rgba(0,0,0,0.3)" : "0 24px 64px rgba(0,0,0,0.25)",
      }}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 20, fontWeight: 700, color: NAVY,
          marginBottom: 4, letterSpacing: "-0.3px",
        }}
      >
        {light ? "Book Your Free Session" : "Book a Free Counselling Session"}
      </div>
      <div style={{ fontSize: 13, color: STONE, marginBottom: 24, lineHeight: 1.5 }}>
        {light
          ? "A career advisor will call you within 24 hours."
          : "Speak with a career advisor in 24 hours. No pressure, no scripts."}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <FormField label="First Name" placeholder="Rahul" />
        <FormField label="Last Name"  placeholder="Sharma" />
      </div>
      <FormField label="Phone / WhatsApp" type="tel"   placeholder="+91 98765 43210" />
      <FormField label="Email Address"    type="email" placeholder="rahul@example.com" />
      <FormSelect label="Program of Interest" options={PROGRAM_OPTIONS} />
      <FormSelect label="Current Status"      options={STATUS_OPTIONS} />

      <button
        onClick={() => setSubmitted(true)}
        style={{
          width: "100%", background: submitted ? "#16A34A" : NAVY,
          color: "white", border: "none", borderRadius: 2,
          padding: "14px 20px", fontSize: 14, fontWeight: 600,
          fontFamily: "'Outfit', sans-serif",
          cursor: submitted ? "default" : "pointer",
          letterSpacing: "0.2px", marginTop: 6, transition: "background 0.15s",
        }}
      >
        {submitted ? "✓ We'll be in touch within 24 hours" : "Book My Free Session →"}
      </button>
      <p style={{ fontSize: 11, color: STONE, textAlign: "center", marginTop: 10, lineHeight: 1.5 }}>
        🔒 No spam. No pressure. Your information is completely confidential.
      </p>
    </div>
  );
}
