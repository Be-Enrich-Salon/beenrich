# Copilot Instructions for Be Enrich

## Architecture

- Next.js 14 App Router + TypeScript. Root layout in [src/app/layout.tsx](src/app/layout.tsx) wires Playfair Display/Manrope fonts, wraps pages with [Navbar](src/components/home/Navbar.tsx), [Footer](src/components/home/Footer.tsx), and [GlobalBookingButton](src/components/booking/GlobalBookingButton.tsx) inside the [BookingProvider](src/context/BookingContext.tsx).
- Homepage [src/app/page.tsx](src/app/page.tsx) is client-only and lazy-loads every below-the-fold section with `dynamic(..., { ssr: false, loading: () => <div className="h-96 bg-*" /> })` placeholders for perceived performance.
- Services listing [src/app/services/page.tsx](src/app/services/page.tsx) renders `ServicesHero` + `ServicesShowcase` + `SignaturePackages`, then a framer-motion CTA with phone/WhatsApp/booking actions that call `openBooking()`.
- Service detail [src/app/services/%5Bslug%5D/page.tsx](src/app/services/%5Bslug%5D/page.tsx) pulls `slug` via `useParams()`, hydrates from [src/content/servicesContent.js](src/content/servicesContent.js) plus [src/content/faqData.js](src/content/faqData.js) and [src/content/detailedServices.js](src/content/detailedServices.js); calls `notFound()` when missing. Uses `useScroll({ target: containerRef })` + `useTransform` for hero parallax and alternates layouts with `idx % 2 === 0` checks.

## Styling

- Brand tokens live in [src/theme/colors.ts](src/theme/colors.ts) and are registered in [tailwind.config.ts](tailwind.config.ts); never inline hex—use Tailwind classes (`bg-gold`, `text-ink`, `bg-paper`, etc.).
- Global utilities in [src/app/globals.css](src/app/globals.css): `.section-shell` for responsive gutters, `.pill` for rounded badges. Body defaults to `bg-paper text-ink` from layout.
- Typography: headings inherit the display font via CSS vars; apply `font-display`/`font-sans` classes as needed. Use `Next/Image` with WebP assets from [public/images](public/images) per [next.config.mjs](next.config.mjs).

## Content Model

- Homepage copy, stats, services preview, gallery, testimonials, brands, and contact live in [src/content/homeContent.js](src/content/homeContent.js).
- Services catalog and per-slug data (hero, journey sections, pricing, related) are in [src/content/servicesContent.js](src/content/servicesContent.js); slug keys must match route folders under [src/app/services/%5Bslug%5D](src/app/services/%5Bslug%5D).
- Supplemental tables/FAQ text live in [src/content/detailedServices.js](src/content/detailedServices.js), [src/content/faqData.js](src/content/faqData.js), and about page copy in [src/content/aboutContent.js](src/content/aboutContent.js).
- Preserve currency strings exactly (e.g., `₹1500`, `5000 onwards`)—do not reformat.

## UI Patterns

- Add "use client" to components using hooks/framer-motion/Lenis. Dynamic imports should keep SSR off for heavy visuals and include skeleton `loading` fallbacks.
- Booking flows rely on [BookingContext](src/context/BookingContext.tsx); call `openBooking()`/`toggleBooking()` to render [BookingContainer](src/components/booking/BookingContainer.tsx). Layout already mounts the floating button.
- Scroll-based stacks use [ScrollStack](src/components/home/ScrollStack.tsx); do not change defaults (`itemDistance`, `baseScale`, `itemStackDistance`, `useWindowScroll`) as they control Lenis smoothing and GPU-friendly transforms (`will-change-transform`, `backfaceVisibility: hidden`).
- Service detail sections alternate with `idx % 2` layout checks, use `containerRef` as `useScroll` target, and keep anchor IDs `#services`, `#contact`, `#booking` stable for CTAs.

## Integrations & Scripts

- Email: `nodemailer` is installed; add POST handler in [src/app/api/send-email/route.ts](src/app/api/send-email/route.ts) when wiring forms.
- Asset helpers in [scripts](scripts): `optimize-images.mjs` (PNG/JPG → WebP, quality 80), `generate-favicons.mjs`, `generate-brand-assets.mjs`, `fetch-real-logos.mjs`.

## Developer Workflows

- Install/run: `npm install`, `npm run dev` (localhost:3000), `npm run lint`, `npm run build`, `npm run start`.
- Keep images in WebP and descriptive alt text; run `node scripts/optimize-images.mjs` when adding raw assets.

## Critical Gotchas

- New service routes need both content entry in [servicesContent.js](src/content/servicesContent.js) and a folder under [src/app/services/%5Bslug%5D](src/app/services/%5Bslug%5D); otherwise `notFound()` triggers.
- Do not hardcode colors/fonts; rely on Tailwind tokens and font classes set in layout.
- Maintain `containerRef` wrapper in service detail pages; removing it breaks `useScroll` transforms.
- Avoid touching ScrollStack config or removing `ssr: false` homepage dynamic imports—both are tied to smooth animations and above-the-fold performance.# Copilot Instructions for Be Enrich

## Architecture

- **Next.js 14 App Router + TypeScript.** [src/app/layout.tsx](src/app/layout.tsx) defines font CSS vars (`--font-display`, `--font-sans`) and wraps all pages with `Navbar`/`Footer`. All routes inherit `bg-paper text-ink` body styles.
- **Homepage** [src/app/page.tsx](src/app/page.tsx) is client-only (`"use client"`). Lazy-loads below-the-fold sections using `dynamic(..., { ssr: false, loading: () => <div className="h-96 bg-paper" /> })` for performance. Fixed floating "Book Now" button toggles [src/components/booking/BookingContainer.tsx](src/components/booking/BookingContainer.tsx).
- **Services listing** [src/app/services/page.tsx](src/app/services/page.tsx) renders `ServicesHero`, `ServicesShowcase`, and `SignaturePackages` with framer-motion CTA (phone/WhatsApp/booking actions).
- **Service details** [src/app/services/[slug]/page.tsx](src/app/services/%5Bslug%5D/page.tsx):
  - Extract `slug` via `useParams()`, fetch from [src/content/servicesContent.js](src/content/servicesContent.js)
  - Call `notFound()` when slug missing
  - Use `useScroll({ target: containerRef })` with `useTransform` for scroll-based animations
  - Alternate section layouts via `idx % 2 === 0` checks with `cn()` for conditional classes

## Styling

- **Brand colors** from [src/theme/colors.ts](src/theme/colors.ts) (gold, goldSoft, goldDim, ink, charcoal, paper, mist, etc.) registered in [tailwind.config.ts](tailwind.config.ts). **Never use inline hex**—use `bg-gold`, `text-ink`, `bg-paper`.
- **Typography**: Playfair Display (display) and Manrope (sans) loaded via `next/font/google` in layout. Apply via `font-display` or `font-sans` classes. Headings inherit `font-display` globally.
- **Global utilities** in [src/app/globals.css](src/app/globals.css):
  - `.section-shell`: responsive horizontal padding (`px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32`)
  - `.pill`: rounded full badge (`bg-stone/80 px-4 py-2 text-sm text-mist backdrop-blur`)
- **Class merging** via [src/utils/cn.ts](src/utils/cn.ts) (combines `clsx` + `tailwind-merge`). Use for conditional classes.
- **Icons** from `lucide-react`. **Images** use Next/Image with WebP format (see [next.config.mjs](next.config.mjs)).

## Content Model

- **Homepage sections** → [src/content/homeContent.js](src/content/homeContent.js): hero slides, stats, features, services preview, signature packages, gallery, testimonials, brands, contact.
- **Services catalog** → [src/content/servicesContent.js](src/content/servicesContent.js): category cards, per-slug `hero`, `detailedSections`, `pricing`, `related`. **Slug keys MUST match route folders** under [src/app/services/[slug]](src/app/services/%5Bslug%5D).
- **Supplemental data** → [src/content/detailedServices.js](src/content/detailedServices.js) (tabular service lists), [src/content/aboutContent.js](src/content/aboutContent.js) (about page copy), [src/content/faqData.js](src/content/faqData.js) (per-slug FAQs).
- **Currency formatting**: preserve exact strings from content (e.g., `₹1500`, `5000 onwards`)—never reformat.
- **Images** in [public/images](public/images) with descriptive alt text in components.

## Components & Patterns

- **Client components**: Most UI requires `"use client"` (hooks, framer-motion, Lenis smooth scroll). Add directive when using `useState`, `useRef`, `useScroll`, `motion.*`.
- **Anchor IDs** for CTAs: `#services`, `#contact`, `#booking`. Keep stable during refactoring.
- **ScrollStack** [src/components/home/ScrollStack.tsx](src/components/home/ScrollStack.tsx): uses Lenis + custom scroll transforms. **Preserve** `itemDistance`, `baseScale`, `itemStackDistance`, `useWindowScroll` props. Cards have `will-change-transform` + `backfaceVisibility: hidden` for GPU optimization.
- **Dynamic imports pattern** (homepage):
  ```tsx
  const Section = dynamic(() => import("@/components/home/Section"), {
    ssr: false,
    loading: () => <div className="h-96 bg-paper" />,
  });
  ```
- **Service detail layout**: alternating columns via `idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'`. Wrap page in `containerRef` for `useScroll` target.

## Integrations & Scripts

- **Email**: `nodemailer` installed. API routes go in [src/app/api/send-email](src/app/api/send-email) (currently empty—add `route.ts` for server-side email).
- **Image optimization**: [scripts/optimize-images.mjs](scripts/optimize-images.mjs) converts PNG/JPG to WebP (quality 80) using Sharp. Run via `node scripts/optimize-images.mjs`.
- **Asset scripts**: [scripts](scripts) includes `generate-favicons.mjs`, `generate-brand-assets.mjs`, `fetch-real-logos.mjs`.
- **Next.js config** [next.config.mjs](next.config.mjs): WebP formats enforced, console removal in production, optimizePackageImports for framer-motion/lucide-react.

## Developer Workflows

```bash
npm install            # Install dependencies
npm run dev            # Dev server (localhost:3000)
npm run lint           # ESLint check
npm run build          # Production build
npm run start          # Serve production build
node scripts/optimize-images.mjs  # Convert images to WebP
```

## Critical Gotchas

- **New service route**: requires BOTH a matching key in [src/content/servicesContent.js](src/content/servicesContent.js) AND a folder under [src/app/services/[slug]](src/app/services/%5Bslug%5D). Missing either triggers `notFound()`.
- **Anchor IDs**: changing `#services`, `#contact`, `#booking` breaks homepage CTAs. Keep stable.
- **Brand tokens**: NEVER hardcode colors/fonts—use Tailwind utilities from [src/theme/colors.ts](src/theme/colors.ts). Layout already provides Navbar/Footer globally.
- **Currency formatting**: preserve exact strings from content files (e.g., `₹1500`, `5000 onwards`)—no reformatting.
- **ScrollStack config**: changing `itemDistance`, `baseScale`, `itemStackDistance`, or `useWindowScroll` in [src/components/home/ScrollStack.tsx](src/components/home/ScrollStack.tsx) breaks card stacking animations.
- **Service detail `containerRef`**: removing the page-level ref wrapper breaks `useScroll` transforms. Keep wrapping `<div ref={containerRef}>`.

## Examples

### Add a new service

1. Create [src/app/services/new-slug/page.tsx](src/app/services/new-slug/page.tsx) (copy pattern from existing slugs)
2. Add `new-slug` object to [src/content/servicesContent.js](src/content/servicesContent.js) with:
   ```js
   "new-slug": {
     hero: { title, subtitle, image },
     detailedSections: [{ title, description, items: [{ icon, title, description, price }] }],
     pricing: [{ service, price }],
     related: ["other-slug"]
   }
   ```

### Lazy-load a component

```tsx
const MySection = dynamic(() => import("@/components/home/MySection"), {
  ssr: false,
  loading: () => <div className="h-96 bg-paper" />,
});
```

### Add email API route

Create [src/app/api/send-email/route.ts](src/app/api/send-email/route.ts) with nodemailer POST handler.
