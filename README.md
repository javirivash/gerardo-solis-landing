# Gerardo Solís — Landing Page

Single-page marketing site for a real estate agent in Bahía de Banderas / Riviera Nayarit, Mexico. Built as a freelance project focused on clean design, accessible interactions, and a lightweight lead-capture flow that routes straight into WhatsApp.

**Live:** https://gs-landing-preview.netlify.app

## What's on the page

- **Hero** — scroll-expansion effect over a muted aerial video of the coast
- **About** — bio and certified-advisor positioning
- **Properties** — featured listings with expandable-card modals (focus-trapped, scroll-locked, Escape to close)
- **Contact** — form that writes to Supabase and then opens WhatsApp pre-filled with the lead's message

## Tech stack

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 with a custom dark + gold design system (Cinzel + Josefin Sans)
- **UI primitives:** shadcn/ui on top of Base UI (`@base-ui/react`)
- **Animation:** `motion` v12 (the successor to framer-motion) + `magicui` components
- **Icons:** lucide-react, react-icons
- **Backend:** Supabase (Postgres for lead storage, edge function for WhatsApp notifications)
- **Hosting:** Netlify

## Project structure

```
src/
  app/          Next.js App Router entry (layout, page, metadata, JSON-LD, icon)
  components/   Section components (hero, about, properties, contact, footer) + UI primitives
  lib/          Shared constants (contact info, nav links, WhatsApp URL builder)
```

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

### Environment variables

Create a `.env.local` with:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_SITE_URL=https://gs-landing-preview.netlify.app
```

## Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start the local dev server     |
| `npm run build` | Production build               |
| `npm start`     | Serve the production build     |
| `npm run lint`  | ESLint (Next.js flat config)   |

## Quality passes applied

The project was shipped through a structured workflow (see `CLAUDE.md`) that includes:

- Tailwind / design-token validation (typography scale, z-index scale, animation durations capped at 200ms)
- WCAG accessibility audit (focus traps, ARIA labels, keyboard nav, form errors, contrast)
- SEO metadata (Open Graph, Twitter cards, canonical, robots, `RealEstateAgent` JSON-LD)
- Motion performance (CSS containment on scroll-linked sections, compositor-friendly properties)
- Cross-viewport browser testing via Playwright
