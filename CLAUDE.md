# Gerardo Solís — Landing Page

Landing page for real estate agent Gerardo Solís. Built with a structured workflow that leverages specific skills, plugins, and MCP servers at each phase.

## Workflow

Follow this workflow in order. Do not skip phases. Use the specified tool for each step.

### Phase 1 — Design & Planning

| Step | Tool | Action |
|------|------|--------|
| 1.1 | `/ui-ux-pro-max` | Define visual identity: color palette, font pairing, style direction (real estate / luxury / modern) |
| 1.2 | `/frontend-design` | Generate full page layout and component structure from the design direction |

### Phase 2 — Build

| Step | Tool | Action |
|------|------|--------|
| 2.1 | shadcn MCP | Pull base UI components (buttons, forms, cards, navigation) |
| 2.2 | magicui MCP | Add animated components (hero effects, scroll animations, property card transitions) |
| 2.3 | supabase MCP | Set up backend: contact form table, property catalog, WhatsApp edge function |
| 2.4 | `/feature-dev` | Guided implementation of each section: Hero, About, Properties, Contact |

### Phase 3 — Quality

| Step | Tool | Action |
|------|------|--------|
| 3.1 | `/baseline-ui` | Validate Tailwind utilities, typography scale, animation durations |
| 3.2 | `/fixing-accessibility` | WCAG audit: contrast, ARIA, keyboard nav, form errors |
| 3.3 | `/fixing-metadata` | SEO meta tags, Open Graph, JSON-LD real estate schema |
| 3.4 | `/fixing-motion-performance` | Ensure animations are smooth on mobile |
| 3.5 | `/playwright-cli` | Automated browser testing across viewports |

### Phase 4 — Ship

| Step | Tool | Action |
|------|------|--------|
| 4.1 | `/commit` | Commit changes |
| 4.2 | `/commit-push-pr` | Push and open PR if needed |
| 4.3 | Netlify CLI | Deploy to production |

## Landing Page Sections

- Hero (image/video background)
- About Me (Gerardo's profile)
- Property Catalog (featured listings)
- Contact Form + WhatsApp integration

## Rules

- **Always use the designated tool** for each workflow step. Do not manually replicate what a skill or MCP server provides.
- **Keep this file updated.** When a new task, section, convention, or decision is added to the project, update this document immediately — before starting the implementation. This file is the single source of truth for how the project is built.
- **Follow phase order.** Complete design before building. Complete building before quality checks. Quality must pass before shipping.
- **Run quality skills after every significant change**, not just at the end. Run `/baseline-ui` and `/fixing-accessibility` after building each section.
- When using shadcn or magicui MCP, always check available components first (`list`/`search`) before fetching or installing.
- Commit frequently with `/commit` — at minimum after completing each workflow step.
- **Learn from corrections.** When the user flags a mistake or a better practice ("good catch" moments), immediately document the correct approach in this file under **Go-To Practices** so the same mistake is never repeated.

## Go-To Practices

| Area | Practice |
|------|----------|
| Animations / Motion | Use `motion` package (v12) with `import { ... } from "motion/react"`. Do NOT install or import `framer-motion` — it's a legacy wrapper. |
| Fixed overlays inside animated wrappers | Components using `position: fixed` inside a parent with CSS transforms (e.g. `BlurFade`, any motion wrapper) must use `createPortal(... , document.body)` + a `mounted` state guard for SSR. Transforms create a new containing block that breaks fixed positioning. |
| Motion `useSpring` config | `useSpring` does NOT accept a plain `duration` param. Use `stiffness` and `damping` to control timing. High damping (e.g. 200) kills the tail fast. Current number-ticker uses `stiffness: 50, damping: 200`. |

## Pre-deploy TODOs

- [ ] Set `NEXT_PUBLIC_SITE_URL` env var to the real production domain (currently falls back to placeholder `https://gerardosolis.mx` in `src/app/layout.tsx`)
- [ ] Replace Open Graph image with a dedicated 1200×630 social card (currently reuses `/hero-image-2.jpg`)

## Progress

- [x] 1.1 — Visual identity (Dark + Gold palette, Cinzel + Josefin Sans, Exaggerated Minimalism style)
- [x] 1.2 — Page layout and component structure (Next.js + Tailwind v4, 6 components)
- [x] 2.1 — Base UI components (shadcn base-nova: button, card, input, textarea, label, sheet, badge)
- [x] 2.2 — Animated components (magicui: blur-fade, animated-shiny-text, number-ticker)
- [x] 2.3 — Supabase backend (contact_submissions table + notify-whatsapp edge function, properties stay in frontend)
- [x] 2.4 — Section implementation: Hero ✓, About ✓, Properties ✓, Contact ✓
- [x] 2.5 — Polish pass (21 fixes): foundation constants/tokens, ExpandableCard a11y + design tokens, ScrollExpansionHero merged h1/a11y/nav bypass, Contact success state, Properties exact price, About image fixes, footer nav
- [x] 3.1 — Tailwind validation (baseline-ui: capped interaction animations at 200ms, text-balance/text-pretty/tabular-nums, size-* squares, z-scale fixed)
- [x] 3.2 — Accessibility audit (focus trap + body-scroll lock on ExpandableCard modal, decorative SVGs aria-hidden, contact inputs required + aria-busy)
- [x] 3.3 — SEO metadata (metadataBase, OG, Twitter, canonical, robots, JSON-LD RealEstateAgent)
- [x] 3.4 — Motion performance (scroll-expansion-hero: contain/will-change on wrapper; expandable-card backdrop-blur-md → sm)
- [x] 3.5 — Browser testing (playwright-cli: title, console clean, mobile nav, form validation, card expansion + Escape close)
- [x] 4.1 — Final commit (3fe6785: Netlify config + .netlify ignore)
- [x] 4.2 — Pushed to origin/main (no PR — direct to main)
- [x] 4.3 — Deployed to https://gerardo-solis-landing.netlify.app
