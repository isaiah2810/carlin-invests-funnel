# Carlin Invests — The Anti-Guru Guide Landing Page

Lead capture funnel for *The Anti-Guru Guide: 7 Steps to Invest Without Blind Faith*.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Component Library:** shadcn/ui (configured, ready to use)
- **Fonts:** Georgia (headings), Sora (subheadings/brand), Inter (body)
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Theme, brand colors, custom CSS
│   ├── layout.tsx           # Root layout with fonts & metadata
│   └── page.tsx             # Main page (composes all sections)
├── components/
│   ├── sections/
│   │   ├── navbar.tsx       # Sticky navigation with CTA
│   │   ├── hero.tsx         # Hero with grid pattern & ebook mockup
│   │   ├── sneak-peek.tsx   # "What's Inside" cards
│   │   ├── proof.tsx        # Credentials / social proof
│   │   ├── pain-benefits.tsx # Pain points vs benefits
│   │   ├── chapters.tsx     # 7-chapter breakdown
│   │   ├── quick-wins.tsx   # Immediate value highlights
│   │   ├── about.tsx        # Author bio
│   │   ├── faqs.tsx         # FAQ accordion
│   │   ├── final-cta.tsx    # Final email capture CTA
│   │   └── footer.tsx       # Site footer
│   └── ui/
│       ├── bg-pattern.tsx   # Grid/dots/stripes background pattern
│       ├── email-form.tsx   # Email capture form (ConvertKit placeholder)
│       ├── fade-up.tsx      # Scroll fade-in animation wrapper
│       └── section-divider.tsx
└── lib/
    └── utils.ts             # cn() utility (shadcn)
```

## Brand Colors

| Name      | Hex       | Usage                    |
|-----------|-----------|--------------------------|
| bg        | `#0D0B14` | Page background          |
| surface   | `#16131F` | Card/section backgrounds |
| accent    | `#D4D4D8` | Links, subtle highlights |
| cta       | `#22C55E` | CTA buttons              |
| text      | `#FFFFFF` | Primary text             |
| secondary | `#9A95A8` | Body text, labels        |

## Email Integration

Email forms are currently placeholders. To connect ConvertKit:

1. Get your ConvertKit form ID and API key
2. Update the `handleSubmit` function in `src/components/ui/email-form.tsx`

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — deploy with defaults

Or use the Vercel CLI:

```bash
npx vercel
```

### Custom Domain

Configure your domain in Vercel project settings → Domains.

## License

© 2026 Carlin Invests. All rights reserved.
