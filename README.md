# Red Hackle Cleaning Services website

Commercial-first marketing site for Red Hackle Cleaning Services built with Next.js (App Router) and Tailwind CSS.

## Tech stack
- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4

## Running locally
```bash
pnpm install
pnpm dev
```
Visit http://localhost:3000.

## Build & deployment
```bash
pnpm build
pnpm start
```

## SEO & structured data
- Per-page metadata with Open Graph + Twitter cards in each route.
- JSON-LD for LocalBusiness and services in `app/layout.tsx`.
- Dynamic `sitemap.xml` and `robots.txt` route handlers.

## Dependency update tooling
- Renovate config: `renovate.json`.
- Dependabot config: `.github/dependabot.yml`.

## Where to edit content
- **Homepage:** `app/page.tsx`
- **Commercial & contract pages:** `app/commercial-cleaning/page.tsx`, `app/contract-cleaning/page.tsx`
- **Service pages:** `app/services/*/page.tsx`
- **Operations & compliance pages:** `app/slas/page.tsx`, `app/onboarding-process/page.tsx`, `app/quality-assurance/page.tsx`, `app/reporting/page.tsx`
- **Case studies:** `app/case-studies/page.tsx`
- **Contact form:** `components/contact-form.tsx`
- **Header & footer:** `components/site-header.tsx`, `components/site-footer.tsx`

## Adding or updating assets
- **Images:** `public/images/`
- **Logos / review embeds:** Update the placeholder block on `app/page.tsx`.
- **Copy updates:** Edit text directly in the page files above.

## Notes
- Keep analytics scripts in `app/layout.tsx` to avoid removing tracking.
- Update `app/sitemap.xml/route.ts` if new routes are added.
