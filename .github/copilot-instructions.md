# Copilot Instructions for Be Enrich

## Architecture

- Next.js 14 App Router + TypeScript. See [src/app/layout.tsx](src/app/layout.tsx) for `next/font` CSS vars and global `Navbar`/`Footer` applied to all routes.
- Homepage [src/app/page.tsx](src/app/page.tsx) is client-only and lazy-loads below-the-fold sections with `dynamic(..., { ssr: false })` and simple loaders. A floating “Book Now” button toggles [src/components/booking/BookingContainer.tsx](src/components/booking/BookingContainer.tsx).
- Services [src/app/services/page.tsx](src/app/services/page.tsx) renders `ServicesHero`, `ServicesShowcase`, and dynamic `SignaturePackages`, plus a framer-motion CTA with phone/WhatsApp/booking actions.
- Service details [src/app/services/[slug]/page.tsx](src/app/services/%5Bslug%5D/page.tsx) read `slug` via `useParams`, load content from [src/content/servicesContent.js](src/content/servicesContent.js), and call `notFound()` when missing. `useScroll` transforms depend on a `containerRef`, and alternating layouts use `idx` checks with `cn()`.

## Styling

- Tailwind brand tokens come from [src/theme/colors.ts](src/theme/colors.ts) and are registered in [tailwind.config.ts](tailwind.config.ts). Use utilities like `bg-gold`, `text-paper`, `bg-ink`; avoid inline hex colors.
- Fonts (Playfair Display, Manrope) are set as CSS vars in layout; use `font-display`/`font-sans`. Global helpers live in [src/app/globals.css](src/app/globals.css), including `.section-shell` gutters and `.pill` styling.
- Merge class names via [src/utils/cn.ts](src/utils/cn.ts) and prefer `lucide-react` for icons. Respect Next/Image `fill` usage and existing aspect ratios.

## Content Model

- Homepage copy/media: [src/content/homeContent.js](src/content/homeContent.js) (hero slides, stats, features, services preview, signature packages, gallery, contact, testimonials, brands).
- Services catalog and per-slug detail data: [src/content/servicesContent.js](src/content/servicesContent.js). Slug keys must match folders under [src/app/services/[slug]](src/app/services/%5Bslug%5D); preserve currency strings and formatting as stored.
- Supplemental tables: [src/content/detailedServices.js](src/content/detailedServices.js). About page copy: [src/content/aboutContent.js](src/content/aboutContent.js).
- Images live under [public/images](public/images); keep descriptive alt text in components using Next/Image.

## Components & Patterns

- Most UI is client-side due to hooks/framer-motion—add "use client" when introducing state, refs, animations.
- Homepage anchors power CTAs: `#services`, `#contact`, `#booking`. Keep IDs stable when refactoring.
- `ScrollStack` config in [src/components/home/ScrollStack.tsx](src/components/home/ScrollStack.tsx): preserve `itemDistance`, `baseScale`, `itemStackDistance`, and `useWindowScroll` behavior to avoid breaking transforms.
- Service detail sections alternate columns via `idx` checks and `cn()`. Keep the page-wide `containerRef` wrapping to preserve `useScroll` transforms.

## Integrations & Scripts

- Email: `nodemailer` is available. Add a Next.js route (e.g., `route.ts`) under [src/app/api/send-email](src/app/api/send-email) when implementing server-side email.
- Assets: maintenance scripts live in [scripts](scripts) (`optimize-images.mjs`, `generate-favicons.mjs`, `generate-brand-assets.mjs`, `fetch-real-logos.mjs`) for logos/images and favicons.

## Developer Workflows

- Install: `npm install`
- Dev: `npm run dev`
- Lint: `npm run lint`
- Build/Start: `npm run build` then `npm run start`

## Gotchas

- New service routes require a matching content key in [src/content/servicesContent.js](src/content/servicesContent.js) and a folder under [src/app/services/[slug]](src/app/services/%5Bslug%5D); otherwise `notFound()` triggers.
- Preserve homepage anchor IDs and centralized brand tokens; avoid ad‑hoc fonts/colors and extra layout chrome—[src/app/layout.tsx](src/app/layout.tsx) already supplies Navbar/Footer and base colors.
- Preserve currency formatting (e.g., `₹1500`, `5000 onwards`) exactly as stored.

## Examples

- Add a service: create [src/app/services/new-slug/page.tsx](src/app/services/new-slug/page.tsx) and add a `new-slug` object in [src/content/servicesContent.js](src/content/servicesContent.js) with `hero`, `detailedSections`, `pricing`, `related`.
- Lazy-load a section: `dynamic(() => import('@/components/home/Features'), { ssr: false, loading: () => <div className="h-96 bg-paper" /> })`.
