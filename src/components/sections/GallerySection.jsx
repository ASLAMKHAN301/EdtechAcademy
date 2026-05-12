import { useState } from "react";
import { Eyebrow, DisplayH2, SectionContainer } from "../ui";

// All 12 real photos with descriptive captions
// Images live in /public/gallery/ and are served by Vite as static assets
const PHOTOS = [
  { id: "g01", src: "/gallery/g01.jpg", label: "Cohort group photo — classroom batch", pos: "center top" },
  { id: "g02", src: "/gallery/g02.jpg", label: "Students writing notes in class",       pos: "center center" },
  { id: "g03", src: "/gallery/g03.jpg", label: "Large seminar — auditorium session",    pos: "center center" },
  { id: "g04", src: "/gallery/g04.jpg", label: "Industry workshop — hotel venue",       pos: "center center" },
  { id: "g05", src: "/gallery/g05.jpg", label: "400+ students — outdoor campus event",  pos: "center top" },
  { id: "g06", src: "/gallery/g06.jpg", label: "Placement drive orientation session",   pos: "center center" },
  { id: "g07", src: "/gallery/g07.jpg", label: "Batch standing in semicircle outdoors", pos: "center center" },
  { id: "g08", src: "/gallery/g08.jpg", label: "150+ alumni at campus placement day",   pos: "center top" },
  { id: "g09", src: "/gallery/g09.jpg", label: "Open-hall batch session",               pos: "center center" },
  { id: "g10", src: "/gallery/g10.jpg", label: "Evening seminar — packed hall",         pos: "center center" },
  { id: "g11", src: "/gallery/g11.jpg", label: "Weekend batch group photo",             pos: "center center" },
  { id: "g12", src: "/gallery/g12.jpg", label: "Alumni networking event",               pos: "center center" },
];

// ─── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({ photo, onClose }) {
  if (!photo) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[500] flex items-center justify-center bg-black/85 backdrop-blur-sm"
      style={{ cursor: "zoom-out" }}
    >
      <div className="relative max-w-4xl w-full mx-5" onClick={e => e.stopPropagation()}>
        <img
          src={photo.src}
          alt={photo.label}
          className="w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
        />
        <p className="text-white/70 text-[13px] text-center mt-3 font-light">{photo.label}</p>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-9 h-9 bg-white/10 hover:bg-white/20
            rounded-full flex items-center justify-center text-white text-lg
            border border-white/20 transition-colors duration-150"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
}

// ─── Single photo tile ───────────────────────────────────────────────────────
function Tile({ photo, className = "", onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View photo: ${photo.label}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(photo)}
      onKeyDown={e => e.key === "Enter" && onClick(photo)}
      className={`relative overflow-hidden rounded-[3px] cursor-zoom-in group select-none ${className}`}
    >
      {/* Real photo */}
      <img
        src={photo.src}
        alt={photo.label}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
        style={{
          objectPosition: photo.pos || "center center",
          transform: hovered ? "scale(1.04)" : "scale(1)",
        }}
      />

      {/* Bottom gradient — always present for caption readability */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.65) 100%)" }}
      />

      {/* Gold overlay on hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: "rgba(201,168,76,0.12)",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Zoom icon */}
      <div
        className="absolute top-3 right-3 w-7 h-7 bg-black/40 rounded-full
          flex items-center justify-center transition-opacity duration-200"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
          <path d="M9 1h4v4M13 1L8 6M5 13H1V9M1 13l5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Caption */}
      <div
        className="absolute bottom-0 left-0 right-0 px-3 py-2.5 transition-all duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(4px)",
        }}
      >
        <p className="text-white text-[11px] font-medium leading-tight drop-shadow">
          {photo.label}
        </p>
      </div>
    </div>
  );
}

// ─── Main section ────────────────────────────────────────────────────────────
export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <Lightbox photo={lightbox} onClose={() => setLightbox(null)} />

      <section id="gallery" className="bg-cream border-b border-border py-16 md:py-[88px]">
        <SectionContainer style={{ position: "relative", zIndex: 1 ,padding: "0 20px"}}>

          {/* ── Header ── */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-10 md:mb-12">
            <div>
              <Eyebrow label="Life at Edtech" />
              <DisplayH2>
                See Learning<br />
                in <em className="italic text-gold">Action.</em>
              </DisplayH2>
            </div>
            <p className="text-[14px] text-stone font-light leading-[1.7]
              max-w-[320px] lg:max-w-[240px] lg:text-right lg:pt-10">
              Real classrooms. Real trainers. Real students making real career transitions.
            </p>
          </div>

          {/* ── Desktop bento grid (md+) ─────────────────────────────
              Layout matches the original HTML screenshot exactly:

              col:  [ 1  ] [ 2  ] [ 3  ] [ 4  ]
              row1: [  LARGE (×2)  ] [  sm ] [  sm ]
              row2: [  LARGE (×2)  ] [  sm ] [  sm ]
              row3: [ sm  ] [ sm  ] [  WIDE (×2)   ]
              row4: [ sm  ] [ sm  ] [ sm  ] [ sm  ]
          ──────────────────────────────────────────────── */}
          <div
            className="hidden md:grid gap-[6px]"
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows:    "210px 210px 168px 156px",
            }}
          >
            {/* [LARGE] col 1-2, row 1-2 — cohort group photo */}
            <Tile
              photo={PHOTOS[0]}
              className="col-span-2 row-span-2"
              onClick={setLightbox}
            />

            {/* Top-right stack: row 1 */}
            <Tile photo={PHOTOS[1]} className="col-span-1 row-span-1" onClick={setLightbox} />
            <Tile photo={PHOTOS[2]} className="col-span-1 row-span-1" onClick={setLightbox} />

            {/* Top-right stack: row 2 */}
            <Tile photo={PHOTOS[3]} className="col-span-1 row-span-1" onClick={setLightbox} />
            <Tile photo={PHOTOS[4]} className="col-span-1 row-span-1" onClick={setLightbox} />

            {/* Row 3: 2 small left + 1 wide right */}
            <Tile photo={PHOTOS[5]} className="col-span-1 row-span-1" onClick={setLightbox} />
            <Tile photo={PHOTOS[6]} className="col-span-1 row-span-1" onClick={setLightbox} />
            <Tile photo={PHOTOS[7]} className="col-span-2 row-span-1" onClick={setLightbox} />

            {/* Row 4: 4 equal thumbnails */}
            <Tile photo={PHOTOS[8]}  className="col-span-1 row-span-1" onClick={setLightbox} />
            <Tile photo={PHOTOS[9]}  className="col-span-1 row-span-1" onClick={setLightbox} />
            <Tile photo={PHOTOS[10]} className="col-span-1 row-span-1" onClick={setLightbox} />
            <Tile photo={PHOTOS[11]} className="col-span-1 row-span-1" onClick={setLightbox} />
          </div>

          {/* ── Mobile grid (< md) ── */}
          <div className="md:hidden grid grid-cols-2 gap-2">
            {/* Hero — full width */}
            <div className="col-span-2 relative rounded-[3px] overflow-hidden" style={{ height: 220 }}>
              <Tile photo={PHOTOS[0]} className="absolute inset-0 w-full h-full" onClick={setLightbox} />
            </div>

            {/* 2-col rows */}
            {PHOTOS.slice(1, 9).map(p => (
              <div key={p.id} className="relative rounded-[3px] overflow-hidden" style={{ height: 130 }}>
                <Tile photo={p} className="absolute inset-0 w-full h-full" onClick={setLightbox} />
              </div>
            ))}

            {/* Wide image */}
            <div className="col-span-2 relative rounded-[3px] overflow-hidden" style={{ height: 150 }}>
              <Tile photo={PHOTOS[9]} className="absolute inset-0 w-full h-full" onClick={setLightbox} />
            </div>

            {/* Last row */}
            {PHOTOS.slice(10).map(p => (
              <div key={p.id} className="relative rounded-[3px] overflow-hidden" style={{ height: 120 }}>
                <Tile photo={p} className="absolute inset-0 w-full h-full" onClick={setLightbox} />
              </div>
            ))}
          </div>

          {/* ── Photo count badge ── */}
          <div className="flex items-center justify-between mt-5 flex-wrap gap-3">
            <p className="text-[12px] text-stone/70 font-light">
              {PHOTOS.length} photos · Click any image to expand
            </p>
            <a
              href="#enrol"
              className="inline-flex items-center gap-2 text-[13px] font-semibold
                text-stone hover:text-navy border border-border hover:border-navy
                px-5 py-2.5 rounded-sm no-underline transition-colors duration-200"
            >
              View more
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </a>
          </div>

        </SectionContainer>
      </section>
    </>
  );
}
