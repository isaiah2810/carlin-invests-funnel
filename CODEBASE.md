# Carlin Invests Funnel — Codebase Overview

> **Purpose:** Reference document for AI agents and models working on this codebase. Read this before making changes.

---

## What This Is

A single-page **free ebook landing page / lead magnet funnel** for **Carlin Invests** — an investment research & education platform. The page collects email addresses in exchange for a free ebook called _"The Anti-Guru Guide: 7 Steps to Invest Without Blind Faith"_.

**Live deployment target:** Vercel  
**Author:** Carlin Peton (former investment banker at Jefferies)

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | **Next.js** (App Router) | 16.1.6 |
| Language | **TypeScript** | ^5 |
| React | **React 19** | 19.2.3 |
| Styling | **Tailwind CSS v4** + CSS custom properties | ^4 |
| UI Components | **shadcn/ui** (New York style) | via `shadcn` CLI |
| Icons | **Lucide React** | ^0.564.0 |
| Animations | **tw-animate-css** + custom CSS | ^1.4.0 |
| Utilities | **clsx** + **tailwind-merge** (via `cn()`) | — |
| Deployment | **Vercel** | vercel.json configured |

### Key Technical Notes
- **Tailwind v4** — uses `@theme inline {}` blocks in CSS, NOT `tailwind.config.js`. All theme extensions are in `globals.css`.
- **App Router** — all pages under `src/app/`. No `pages/` directory.
- **Path alias:** `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- **Fonts loaded via `next/font/google`:** Inter (body) and Sora (headings). Georgia is referenced via CSS `font-family` (system font).
- **No API routes yet** — email form submission is a TODO (placeholder for ConvertKit integration)

---

## Brand Design System

This site follows the **Carlin Invests Brand Guidelines v21**. All design decisions must comply.

### Colour Palette

| Token | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| Background | `#0D0B14` | `--color-bg` | Page background |
| Surface | `#16131F` | `--color-surface` | Cards, containers |
| Surface Light | `#1E1A2A` | `--color-surface-light` | Elevated surfaces, glows |
| Accent | `#D4D4D8` | `--color-accent` | Links, secondary emphasis |
| CTA | `#22C55E` | `--color-cta` | Buttons, action elements |
| Text | `#FFFFFF` | `--color-text` | Primary text |
| Secondary | `#9A95A8` | `--color-secondary` | Body text, descriptions |

**Critical rules:**
- Dark mode ONLY — there is no light mode
- Green (`#22C55E`) is ONLY for clickable action elements (buttons, CTAs). Never for decoration or text
- Borders are typically `border-white/5` (5% white opacity)

### Typography (3-Font System)

| Role | Font | Weight/Style | CSS Class | Usage |
|------|------|-------------|-----------|-------|
| **Editorial** | Georgia | Bold Italic + UPPERCASE | `.heading-style` | H1 headlines, section titles — the signature brand voice |
| **Structural** | Sora | Bold (700) | `.title-style` | H2/H3 subheadings, card titles, navigation |
| **Body** | Inter | Regular (400) / Medium (500) | `font-sans` (default) | All body text, buttons, labels, UI |

**Critical rules:**
- Georgia headings are ALWAYS uppercase, italic, bold, with slight letter-spacing
- Sora is the "workhorse" for structural elements
- Inter is the default and doesn't need explicit class assignment
- Section labels (e.g. "What's Inside", "The 7 Steps") use Inter with `text-sm tracking-widest uppercase text-secondary`

### Component Patterns

| Pattern | Spec |
|---------|------|
| **Cards** | `bg-surface rounded-xl p-6 border border-white/5` |
| **Primary CTA button** | `bg-cta text-bg font-sans font-semibold text-sm px-6 py-3 rounded-full` + `.cta-glow` class for hover glow |
| **Secondary CTA** | Outline: `border border-cta text-cta rounded-full` with fill on hover |
| **Section spacing** | `py-20 sm:py-28` between sections |
| **Max content width** | `max-w-4xl mx-auto px-4 sm:px-6` (some sections use `max-w-6xl` or `max-w-3xl`) |
| **Section divider** | Gradient line: `linear-gradient(to right, transparent, rgba(154, 149, 168, 0.2), transparent)` |
| **Fade-in animation** | Wrap section in `<FadeUp>` component (IntersectionObserver, 10% threshold) |
| **Background pattern** | `<BGPattern variant="grid" mask="fade-edges" size={48} fill="rgba(154, 149, 168, 0.06)" />` — used on Hero only |

---

## File Structure

```
carlin-invests-funnel/
├── public/
│   ├── logo.svg              # CP monogram (white)
│   └── og-image.jpg          # OpenGraph social preview
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind v4 theme, brand variables, all custom CSS
│   │   ├── layout.tsx         # Root layout — loads Inter + Sora fonts, sets metadata
│   │   └── page.tsx           # Homepage — assembles all sections in order
│   ├── components/
│   │   ├── sections/          # Page sections (top to bottom)
│   │   │   ├── navbar.tsx     # Fixed top nav — logo + CTA button
│   │   │   ├── hero.tsx       # Hero — headline, subtitle, email form, ebook mockup
│   │   │   ├── sneak-peek.tsx # "What's Inside" — 3 value prop cards
│   │   │   ├── proof.tsx      # "Why Listen to Me" — credibility/IB background
│   │   │   ├── pain-benefits.tsx # Pain points vs benefits — 2-column grid
│   │   │   ├── chapters.tsx   # "The 7 Steps" — chapter cards with descriptions
│   │   │   ├── quick-wins.tsx # "What You'll Know" — 6 takeaway bullets
│   │   │   ├── about.tsx      # Author bio — photo placeholder + story
│   │   │   ├── faqs.tsx       # FAQ accordion (6 questions, client component)
│   │   │   ├── final-cta.tsx  # Bottom CTA — email form + trust signals
│   │   │   └── footer.tsx     # Footer — logo, copyright, Privacy/Terms links
│   │   └── ui/               # Reusable UI primitives
│   │       ├── bg-pattern.tsx # Configurable background pattern (grid/dots/stripes)
│   │       ├── email-form.tsx # Email capture form (client component, TODO: ConvertKit)
│   │       ├── fade-up.tsx    # Scroll-triggered fade-in animation wrapper
│   │       └── section-divider.tsx # Gradient horizontal line between sections
│   └── lib/
│       └── utils.ts           # `cn()` helper (clsx + tailwind-merge)
├── components.json            # shadcn/ui config (New York style, neutral base)
├── next.config.ts             # Next.js config (Turbopack root)
├── tsconfig.json              # TypeScript config (paths: @/* → ./src/*)
├── vercel.json                # Vercel deployment config
└── package.json               # Dependencies and scripts
```

---

## Page Section Order (top → bottom)

1. **Navbar** — Fixed. Logo left, "Get the Free Guide" button right (anchors to `#get-the-guide`)
2. **Hero** — Full viewport height. Grid background pattern. Headline + email form + ebook mockup (CSS 3D perspective transform)
3. **SneakPeek** — "What's Inside" — 3 cards: Think Independently, Build With Structure, Manage Real Risk
4. **Proof** — "Why Listen to Me" — IB credentials, Jefferies background, credential tags
5. **PainBenefits** — 2-column: 3 pain points (✕ red) vs 3 benefits (✓ accent)
6. **Chapters** — 7 numbered chapter cards with titles and descriptions
7. **QuickWins** — 6 specific takeaway bullets (Tesla test, Price ≠ Value, etc.)
8. **About** — Author card: photo placeholder + bio
9. **FAQs** — 6-item accordion (client-side state)
10. **FinalCTA** — Second email form (`id="get-the-guide"` — navbar scroll target) + trust signals
11. **Footer** — Logo, copyright, Privacy/Terms links

Each section is separated by a `<SectionDivider />` (gradient line).

---

## Client vs Server Components

| Component | Type | Why |
|-----------|------|-----|
| `layout.tsx` | Server | Static layout |
| `page.tsx` | Server | Assembles static sections |
| All `sections/*` except below | Server | Static content, no interactivity |
| `faqs.tsx` | **Client** (`"use client"`) | useState for accordion toggle |
| `email-form.tsx` | **Client** (`"use client"`) | useState for form + submission |
| `fade-up.tsx` | **Client** (`"use client"`) | useEffect + IntersectionObserver |
| `bg-pattern.tsx` | Server | Pure CSS, no JS needed |

---

## TODOs / Incomplete Items

1. **Email form backend** — `email-form.tsx` has a placeholder for ConvertKit API. Needs real `FORM_ID` and `API_KEY`
2. **OG image** — `og-image.jpg` exists but may need updating
3. **Author photo** — Currently shows logo as placeholder. Needs real headshot
4. **Privacy/Terms pages** — Footer links point to `#` (no pages created)
5. **Analytics** — No tracking installed (Vercel Analytics, Plausible, etc.)
6. **Ebook mockup** — Pure CSS, no actual ebook cover image used
7. **Performance chart** — Landing copy references a chart showing S&P 500 vs selected stocks (not yet built)

---

## How to Run

```bash
cd /Users/danielpeton/danieldevfolder/carlin-invests-funnel
npm install
npm run dev        # → http://localhost:3000
npm run build      # Production build
npm run start      # Serve production build
```

---

## Important Conventions

1. **All colours use CSS custom properties** — never hardcode hex values in components. Use Tailwind classes like `text-cta`, `bg-surface`, `text-secondary`, `border-white/5`
2. **Typography classes** — use `.heading-style` for Georgia headlines, `.title-style` for Sora subheadings, `font-sans` is implicit for Inter body
3. **Sections are self-contained** — each section file in `sections/` contains its own content data (chapter list, FAQ list, pain points, etc.). No central content file
4. **Animation** — wrap sections in `<FadeUp>` for scroll-triggered fade-in. The CSS class `.fade-up` / `.visible` handles the transition
5. **CTA buttons** — always `rounded-full` (pill shape). Primary: `bg-cta text-bg`. Add `.cta-glow` class for hover glow effect
6. **No Tailwind config file** — Tailwind v4 uses `@theme inline {}` in `globals.css`. Extend colours and tokens there
7. **shadcn/ui** — configured (New York style) but not heavily used yet. Components should be added via `npx shadcn@latest add <component>`
8. **Responsive** — mobile-first. Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px). Always test mobile layout

---

## Quick Reference: Adding a New Section

```tsx
// 1. Create src/components/sections/my-section.tsx
import { FadeUp } from "@/components/ui/fade-up";

export function MySection() {
  return (
    <FadeUp className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-secondary text-sm tracking-widest uppercase mb-4 font-sans">
            Section Label
          </p>
          <h2 className="heading-style text-2xl sm:text-3xl text-text">
            SECTION TITLE HERE
          </h2>
        </div>
        {/* Content */}
      </div>
    </FadeUp>
  );
}

// 2. Add to src/app/page.tsx in the desired position:
// import { MySection } from "@/components/sections/my-section";
// <SectionDivider />
// <MySection />
```

---

*Last updated: 2026-02-17*
