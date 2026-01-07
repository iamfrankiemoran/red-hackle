import { NextResponse } from "next/server"

const baseUrl = "https://www.redhacklecleaningservices.com"

const pages = [
  "",
  "/commercial-cleaning",
  "/contract-cleaning",
  "/slas",
  "/onboarding-process",
  "/quality-assurance",
  "/reporting",
  "/services",
  "/services/office-workplace-cleaning",
  "/services/contract-cleaning",
  "/services/end-of-tenancy-cleaning",
  "/services/builders-sparkle-cleans",
  "/services/deep-one-off-cleans",
  "/about",
  "/coverage-areas",
  "/case-studies",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
]

export function GET() {
  const lastmod = new Date().toISOString()

  const urls = pages
    .map((path) => {
      const loc = `${baseUrl}${path}`
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${path === "" ? "1.0" : "0.7"}</priority>\n  </url>`
    })
    .join("\n")

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
