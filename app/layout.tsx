import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileCta } from "@/components/mobile-cta"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.redhacklecleaningservices.com"),
  title: {
    default: "Red Hackle Cleaning Services | Commercial Cleaning in Dundee, Tayside, Fife & Angus",
    template: "%s | Red Hackle Cleaning Services",
  },
  description:
    "Commercial-first cleaning partner for offices, property managers, retail, hospitality, and construction teams across Dundee, Tayside, Fife, and Angus.",
  keywords:
    "commercial cleaning, contract cleaning, office cleaning, property management cleaning, Dundee, Tayside, Fife, Angus",
  authors: [{ name: "Red Hackle Cleaning Services" }],
  creator: "Red Hackle Cleaning Services",
  publisher: "Red Hackle Cleaning Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Red Hackle Cleaning Services | Commercial Cleaning in Dundee, Tayside, Fife & Angus",
    description:
      "Operationally-led commercial cleaning with clear SLAs, quality assurance, and reporting. Serving Dundee, Tayside, Fife, and Angus.",
    url: "https://www.redhacklecleaningservices.com/",
    siteName: "Red Hackle Cleaning Services",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/images/team-photo.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Hackle Cleaning Services | Commercial Cleaning in Dundee, Tayside, Fife & Angus",
    description:
      "Commercial-first cleaning partner with SLA-backed delivery, quality checks, and reporting for Dundee, Tayside, Fife, and Angus.",
    images: ["/images/team-photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "wNnr855I09kRLLMfWF5YbdhTgODBUYzqgnwPxq5JHF0",
  },
  generator: "Next.js",
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.redhacklecleaningservices.com/#business",
      name: "Red Hackle Cleaning Services",
      url: "https://www.redhacklecleaningservices.com/",
      image: "https://www.redhacklecleaningservices.com/images/team-photo.jpg",
      telephone: "+447966881555",
      priceRange: "££",
      address: {
        "@type": "PostalAddress",
        streetAddress: "165 Brook Street",
        addressLocality: "Dundee",
        addressRegion: "Dundee City",
        postalCode: "DD5 1DJ",
        addressCountry: "GB",
      },
      areaServed: ["Dundee", "Tayside", "Fife", "Angus", "Broughty Ferry", "Carnoustie", "St Andrews"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+447966881555",
          contactType: "sales",
          areaServed: "GB",
        },
      ],
      sameAs: ["https://www.facebook.com/profile.php?id=61555545779742", "https://instagram.com/redhacklegroup"],
    },
    {
      "@type": "Organization",
      name: "Red Hackle Cleaning Services",
      url: "https://www.redhacklecleaningservices.com/",
      description:
        "Commercial cleaning services with SLA-backed delivery, quality assurance, and transparent reporting for business sites.",
    },
    ...[
      {
        name: "Office and workplace cleaning",
        description: "Daily or scheduled cleans for offices, meeting rooms, washrooms, and shared amenities.",
      },
      {
        name: "Contract cleaning",
        description: "Planned cleaning programmes with service level agreements and dedicated site management.",
      },
      {
        name: "End of tenancy cleaning",
        description: "Move-out cleans for managed properties, including detailed kitchen and washroom resets.",
      },
      {
        name: "Builders and sparkle cleans",
        description: "Post-construction detailing to prepare new builds and refurbishments for handover.",
      },
      {
        name: "Deep and one-off cleans",
        description: "Intensive cleaning for refreshes, audits, or seasonal reset visits.",
      },
    ].map((service) => ({
      "@type": "Service",
      name: service.name,
      description: service.description,
      provider: { "@id": "https://www.redhacklecleaningservices.com/#business" },
    })),
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div id="main-content" className="pb-20 sm:pb-0">
          {children}
        </div>
        <SiteFooter />
        <MobileCta />
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17541701344" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
if (typeof window !== 'undefined') {
  gtag('js', new Date());
  gtag('config', 'AW-17541701344');
}`}
        </Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  )
}
