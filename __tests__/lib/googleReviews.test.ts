import { fetchGoogleReviews } from "@/lib/googleReviews"
import { vi } from "vitest"

describe("fetchGoogleReviews", () => {
  const originalEnv = { ...process.env }
  const originalFetch = global.fetch

  afterEach(() => {
    process.env = { ...originalEnv }
    vi.restoreAllMocks()
    global.fetch = originalFetch
  })

  it("returns empty array when environment variables are missing", async () => {
    delete process.env.GOOGLE_PLACES_API_KEY
    delete process.env.GOOGLE_PLACE_ID

    const result = await fetchGoogleReviews()
    expect(result).toEqual([])
  })

  it("returns empty array when API response is not ok", async () => {
    process.env.GOOGLE_PLACES_API_KEY = "test-key"
    process.env.GOOGLE_PLACE_ID = "test-place"

    global.fetch = vi.fn().mockResolvedValue({ ok: false }) as unknown as typeof fetch

    const result = await fetchGoogleReviews()
    expect(result).toEqual([])
  })

  it("maps review data into normalized entries", async () => {
    process.env.GOOGLE_PLACES_API_KEY = "test-key"
    process.env.GOOGLE_PLACE_ID = "test-place"

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        googleMapsUri: "https://maps.google.com/?q=test",
        reviews: [
          {
            rating: 5,
            text: { text: "Excellent service" },
            relativePublishTimeDescription: "2 days ago",
            publishTime: "2025-01-01T00:00:00Z",
            authorAttribution: { displayName: "Jane Doe", uri: "https://maps.google.com/jane" },
          },
        ],
      }),
    }) as unknown as typeof fetch

    const result = await fetchGoogleReviews()
    expect(result).toHaveLength(1)
    expect(result[0].name).toBe("Jane Doe")
    expect(result[0].quote).toBe("Excellent service")
    expect(result[0].url).toBe("https://maps.google.com/?q=test")
  })
})
