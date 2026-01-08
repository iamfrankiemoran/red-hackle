import "server-only"

import { unstable_cache } from "next/cache"

export type Review = {
  id: string
  authorName: string
  rating: number
  comment: string
  createTime: string
  updateTime: string
  profilePhotoUrl?: string
  isAnonymous?: boolean
}

export type Summary = {
  averageRating?: number
  totalReviewCount?: number
}

type ReviewsResponse = {
  reviews?: Array<{
    reviewId?: string
    name?: string
    reviewer?: {
      displayName?: string
      profilePhotoUrl?: string
      isAnonymous?: boolean
    }
    starRating?: string | number
    comment?: string
    createTime?: string
    updateTime?: string
  }>
  averageRating?: number | string
  totalReviewCount?: number | string
  reviewsSummary?: {
    averageRating?: number | string
    totalReviewCount?: number | string
  }
}

const GBP_API_BASE_URL = "https://businessprofile.googleapis.com/v1"
const GBP_TOKEN_URL = "https://oauth2.googleapis.com/token"
const GBP_REVIEWS_CACHE_TTL_SECONDS = 60 * 60 * 6

function normalizeRating(starRating?: string | number): number {
  if (typeof starRating === "number") {
    return starRating
  }

  const ratingLookup: Record<string, number> = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
  }

  return ratingLookup[starRating ?? ""] ?? 0
}

function normalizeLocationName(locationId: string): string {
  if (locationId.includes("/")) {
    return locationId
  }

  return `locations/${locationId}`
}

function parseOptionalNumber(value?: number | string): number | undefined {
  if (typeof value === "number") {
    return value
  }

  if (typeof value === "string") {
    const parsed = Number(value)
    if (!Number.isNaN(parsed)) {
      return parsed
    }
  }

  return undefined
}

async function getAccessToken(): Promise<string | null> {
  const clientId = process.env.GBP_GOOGLE_CLIENT_ID
  const clientSecret = process.env.GBP_GOOGLE_CLIENT_SECRET
  const refreshToken = process.env.GBP_GOOGLE_REFRESH_TOKEN

  if (!clientId || !clientSecret || !refreshToken) {
    console.warn("[GBP] Missing OAuth credentials for Google Business Profile.")
    return null
  }

  const response = await fetch(GBP_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
    }).toString(),
    cache: "no-store",
  })

  if (!response.ok) {
    console.warn(`[GBP] Failed to fetch access token (${response.status}).`)
    return null
  }

  const payload = (await response.json()) as { access_token?: string }

  if (!payload.access_token) {
    console.warn("[GBP] Access token missing in OAuth response.")
    return null
  }

  return payload.access_token
}

export async function listGbpLocations() {
  const accountId = process.env.GBP_ACCOUNT_ID
  if (!accountId) {
    console.warn("[GBP] GBP_ACCOUNT_ID is missing; cannot list locations.")
    return []
  }

  const accessToken = await getAccessToken()
  if (!accessToken) {
    return []
  }

  const url = new URL(`${GBP_API_BASE_URL}/accounts/${accountId}/locations`)
  url.searchParams.set("readMask", "name,title,storefrontAddress")

  const response = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  })

  if (!response.ok) {
    console.warn(`[GBP] Failed to list locations (${response.status}).`)
    return []
  }

  const payload = (await response.json()) as {
    locations?: Array<{
      name?: string
      title?: string
      storefrontAddress?: { addressLines?: string[]; locality?: string }
    }>
  }

  return payload.locations ?? []
}

async function fetchLocationReviews(locationName: string): Promise<{ reviews: Review[]; summary?: Summary } | null> {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return null
  }

  const url = new URL(`${GBP_API_BASE_URL}/${locationName}/reviews`)
  url.searchParams.set("pageSize", "20")

  const response = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  })

  if (!response.ok) {
    console.warn(`[GBP] Failed to fetch reviews (${response.status}).`)
    return null
  }

  const payload = (await response.json()) as ReviewsResponse
  const summarySource = payload.reviewsSummary ?? payload
  const summary: Summary = {
    averageRating: parseOptionalNumber(summarySource.averageRating),
    totalReviewCount: parseOptionalNumber(summarySource.totalReviewCount),
  }

  const reviews = (payload.reviews ?? []).map((review) => ({
    id: review.reviewId ?? review.name ?? crypto.randomUUID(),
    authorName: review.reviewer?.displayName ?? "Google reviewer",
    rating: normalizeRating(review.starRating),
    comment: review.comment ?? "",
    createTime: review.createTime ?? "",
    updateTime: review.updateTime ?? review.createTime ?? "",
    profilePhotoUrl: review.reviewer?.profilePhotoUrl,
    isAnonymous: review.reviewer?.isAnonymous,
  }))

  return { reviews, summary }
}

export async function getGoogleReviewsData(): Promise<{ reviews: Review[]; summary?: Summary } | null> {
  const locationId = process.env.GBP_LOCATION_ID
  if (!locationId) {
    console.warn("[GBP] GBP_LOCATION_ID is missing; skipping reviews fetch.")
    return null
  }

  const locationName = normalizeLocationName(locationId)
  const getCachedReviews = unstable_cache(
    () => fetchLocationReviews(locationName),
    ["gbp-reviews", locationName],
    { revalidate: GBP_REVIEWS_CACHE_TTL_SECONDS },
  )

  return getCachedReviews()
}
