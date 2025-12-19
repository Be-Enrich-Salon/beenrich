# Be Enrich Salon & Spa

Premium Next.js (App Router) + Tailwind homepage for Be Enrich Salon & Spa. Built for a luxurious, scalable foundation with centralized brand colors in `src/theme/colors.ts`.

## Tech
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS with custom palette from the brand logo
- lucide-react icons

## Structure
- src/app: App Router entry, layout, and homepage
- src/components/home: Hero, Features, Stats, ServicesPreview, CTA, Footer
- src/theme/colors.ts: Single source of truth for brand colors
- src/styles: Future shared styles (globals in `src/app/globals.css`)

## Run locally
```bash
npm install
npm run dev
```

## Notes
- All color tokens are defined in `src/theme/colors.ts` and consumed via Tailwind config—no hardcoded colors inside components.
- Typography uses Playfair Display (display) and Manrope (body) via `next/font`.
