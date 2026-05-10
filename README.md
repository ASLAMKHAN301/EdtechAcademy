# Edtech Academy — Modular React App

## Project Structure

```
src/
├── App.jsx                          # Root — composes all sections
│
├── constants/
│   └── theme.js                     # Design tokens (colors, shared styles)
│
├── data/
│   └── content.jsx                  # All static copy & data arrays
│
└── components/
    ├── ui/                          # Reusable primitive components
    │   ├── index.jsx                # LogoMark, Eyebrow, DisplayH2, FormField,
    │   │                            # FormSelect, StarRow, SectionContainer,
    │   │                            # SectionHead, ArrowIcon, CheckIcon
    │   └── BookingForm.jsx          # Standalone booking form widget
    │
    └── sections/                    # One file per page section
        ├── AnnounceBar.jsx
        ├── Nav.jsx
        ├── Hero.jsx
        ├── TrustStrip.jsx
        ├── ProgramsSection.jsx
        ├── ToolsSection.jsx
        ├── ProcessSection.jsx
        ├── OutcomesSection.jsx
        ├── TestimonialsSection.jsx
        ├── PartnersSection.jsx
        ├── PlacementSection.jsx
        ├── SuccessSection.jsx
        ├── FAQSection.jsx
        ├── BottomCTA.jsx
        ├── Footer.jsx
        └── StickyMobileCTA.jsx
```

## Design Decisions

| Layer | File | Responsibility |
|---|---|---|
| Tokens | `constants/theme.js` | Single source of truth for all colors + shared CSS-in-JS objects |
| Data | `data/content.jsx` | All copy, labels, arrays — swap content without touching components |
| UI primitives | `components/ui/` | Eyebrow, DisplayH2, FormField, etc. — shared across sections |
| Sections | `components/sections/` | Each section is self-contained; imports only what it needs |
| Root | `App.jsx` | Thin composition layer — no logic, just ordering |

## Extending

- **Add a section:** create `src/components/sections/MySection.jsx`, import in `App.jsx`
- **Change colors:** edit `src/constants/theme.js` — updates everywhere
- **Edit copy:** edit `src/data/content.jsx` — no component changes needed
- **Add a form field:** update `BookingForm.jsx` + add an option to the relevant array in `content.jsx`
