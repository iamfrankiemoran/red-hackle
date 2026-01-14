import { buildPageMetadata } from "@/lib/seo"

describe("buildPageMetadata", () => {
  it("builds Open Graph and Twitter metadata", () => {
    const metadata = buildPageMetadata({
      title: "About",
      description: "Learn more about our company.",
      path: "/about",
    })

    expect(metadata.openGraph?.url).toBe("https://www.redhacklecleaningservices.com/about")
    expect(metadata.openGraph?.title).toBe("About | Red Hackle Cleaning Services")
    expect(metadata.twitter?.card).toBe("summary_large_image")
  })
})
