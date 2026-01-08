# Red Hackle Cleaning Services website

Commercial-first marketing site for Red Hackle Cleaning Services built with Next.js (App Router) and Tailwind CSS.

## Key areas
- `app/page.tsx`: Commercial-first homepage with sectors, services, proof, and CTA content.
- `app/commercial-cleaning/page.tsx`: Contract cleaning overview and onboarding.
- `app/services/*`: Individual service pages.
- `app/contact/page.tsx`: Quote enquiry form and contact details.
- `app/sitemap.xml/route.ts` and `app/robots.txt/route.ts`: SEO assets.

## Running locally
```bash
pnpm dev
```
Visit http://localhost:3000.

## Google Business Profile reviews
Set the following environment variables (see `.env.example`):
- `GBP_ACCOUNT_ID`: Google Business Profile account ID (currently `214-716-3556`).
- `GBP_LOCATION_ID`: Location resource name returned by the discovery script (for example `locations/123456789`).
- `GBP_GOOGLE_CLIENT_ID`, `GBP_GOOGLE_CLIENT_SECRET`, `GBP_GOOGLE_REFRESH_TOKEN`: OAuth 2.0 credentials for server-side access.
- `GBP_REVIEWS_URL`: Public Google Maps reviews URL for the "View all reviews" CTA.

### Discovering location IDs
Run the location discovery helper to list available locations for the account:
```bash
node scripts/gbp-list-locations.mjs
```
Copy the `locations/…` value into `GBP_LOCATION_ID`.

### Editing the homepage proof section
The Google Reviews section is rendered in `components/site/google-reviews.tsx` and included in:
- `app/page.tsx` (homepage proof section)
- `app/about/page.tsx` (secondary placement)

## Build
```bash
pnpm build
pnpm start
```

## SEO + structured data
- Global metadata, Open Graph, and Twitter cards are configured in `app/layout.tsx`.
- JSON-LD LocalBusiness and Service schema is injected in `app/layout.tsx`.
- `app/sitemap.xml/route.ts` and `app/robots.txt/route.ts` provide crawl-ready assets.

## Dependency update tooling
- Dependabot config: `.github/dependabot.yml`.
- Renovate config: `renovate.json`.

## Copy and assets updates
- Replace imagery in `public/images` with real photography when available.
- Update testimonials and case studies in `app/page.tsx` and `app/case-studies/page.tsx`.
- Contact details are set in `components/site/footer.tsx` and `app/contact/page.tsx`.
