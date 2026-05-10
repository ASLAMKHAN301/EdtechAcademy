import { CREAM, INK } from "./constants/theme";

// Layout
import AnnounceBar      from "./components/sections/AnnounceBar";
import Nav              from "./components/sections/Nav";
import StickyMobileCTA  from "./components/sections/StickyMobileCTA";
import Footer           from "./components/sections/Footer";

// Page sections
import Hero             from "./components/sections/Hero";
import TrustStrip       from "./components/sections/TrustStrip";
import ProgramsSection  from "./components/sections/ProgramsSection";
import ToolsSection     from "./components/sections/ToolsSection";
import ProcessSection   from "./components/sections/ProcessSection";
import OutcomesSection  from "./components/sections/OutcomesSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import PartnersSection  from "./components/sections/PartnersSection";
import PlacementSection from "./components/sections/PlacementSection";
import SuccessSection   from "./components/sections/SuccessSection";
import FAQSection       from "./components/sections/FAQSection";
import BottomCTA        from "./components/sections/BottomCTA";

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', sans-serif; background: ${CREAM}; color: ${INK}; overflow-x: hidden; }
      `}</style>

      <div style={{ fontFamily: "'Outfit', sans-serif", background: CREAM, color: INK, overflowX: "hidden" }}>
        {/* ── Top chrome ─── */}
        <AnnounceBar />
        <Nav />

        {/* ── Main content ─ */}
        <Hero />
        <TrustStrip />
        <ProgramsSection />
        <ToolsSection />
        <ProcessSection />
        <OutcomesSection />
        <TestimonialsSection />
        <PartnersSection />
        <PlacementSection />
        <SuccessSection />
        <FAQSection />
        <BottomCTA />

        {/* ── Bottom chrome ─ */}
        <Footer />
        <StickyMobileCTA />
      </div>
    </>
  );
}
