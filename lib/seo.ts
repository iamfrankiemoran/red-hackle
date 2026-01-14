import type { Metadata } from "next"

const siteUrl = "https://www.redhacklecleaningservices.com"
const siteName = "Red Hackle Cleaning Services"
const defaultImage = "/images/team-photo.jpg"

type PageMetadataInput = {
  title: string
  description: string
  path: string
  image?: string
  type?: "website" | "article"
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  type = "website",
}: PageMetadataInput): Metadata {
  const absoluteUrl = `${siteUrl}${path}`
  const fullTitle = `${title} | ${siteName}`

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl,
      siteName,
      locale: "en_GB",
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} hero image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  }
}

export const siteMeta = {
  siteUrl,
  siteName,
  defaultImage,
}
