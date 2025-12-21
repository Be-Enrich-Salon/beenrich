# Copilot Instructions for Be Enrich

## Architecture

- Next.js 14 App Router with TypeScript; [src/app/layout.tsx](src/app/layout.tsx) wires next/font vars plus global Navbar/Footer around every route.
- Homepage [src/app/page.tsx](src/app/page.tsx) is client-side, lazy-loading below-the-fold sections (ssr: false) with simple div loaders; floating Book Now button toggles BookingContainer modal.
- Services list at [src/app/services/page.tsx](src/app/services/page.tsx) renders ServicesHero, ServicesList, and a dynamically loaded SignaturePackages plus framer-motion CTA block.
- Service details in [src/app/services/[slug]/page.tsx](src/app/services/%5Bslug%5D/page.tsx) read the slug via useParams, fetch data from servicesContent, and call notFound() when missing; framer-motion useScroll transforms rely on containerRef plus cn() for alternating layouts.

## Styling System

- Tailwind tokens come from [src/theme/colors.ts](src/theme/colors.ts) and are registered in [tailwind.config.ts](tailwind.config.ts); prefer classes like bg-gold/text-paper over hex literals.
- Fonts (Playfair Display, Manrope) are set as CSS vars in layout; use font-display/font-sans utilities instead of hardcoded stacks.
- Global helpers live in [src/app/globals.css](src/app/globals.css), including .section-shell gutters and .pill badge styling; body already applies bg-paper and text-ink.
- Merge class names with cn() from [src/utils/cn.ts](src/utils/cn.ts); lucide-react supplies icons.

## Content Model

- Homepage copy/media lives in [src/content/homeContent.js](src/content/homeContent.js) (hero slides, stats, features, services preview, signature packages, gallery, contact, testimonials, brands).
- Services catalog and per-slug detail data live in [src/content/servicesContent.js](src/content/servicesContent.js); slug keys must match routes under services/[slug]; preserve currency strings and formatting as stored.
- Supplemental tables live in [src/content/detailedServices.js](src/content/detailedServices.js); about page text is in [src/content/aboutContent.js](src/content/aboutContent.js).
- Add or update images under public/images/\* and keep descriptive alt text in components using Next/Image.

## Components & Patterns

- Most UI is client-side due to hooks and framer-motion; add "use client" when introducing state, refs, or animations.
- Homepage sections expose ids used by CTAs (#services, #contact, #booking); keep them stable when reordering or extracting.
- ServicesPreview stacking relies on ScrollStack config in [src/components/home/ScrollStack.tsx](src/components/home/ScrollStack.tsx); preserve spacing props like itemDistance/baseScale.
- Service detail sections alternate columns via idx checks; keep containerRef wrapping the page to avoid breaking useScroll transforms.

## Assets & Icons

- Prefer lucide-react icons already in use instead of new icon packages.
- Respect Next/Image fill usage and existing aspect ratios defined by content or component layout.

## Commands & Checks

- Install: npm install; Dev: npm run dev; Lint: npm run lint; Build/Start: npm run build then npm run start.

## Gotchas

- Adding a new service route requires matching data in servicesContent and a folder slug under services/[slug], otherwise notFound() triggers.
- Keep brand tokens centralized; avoid inline hex colors or ad-hoc font stacks.
- Layout already provides Navbar/Footer and base colors—avoid wrapping pages with extra chrome unless intentional.
