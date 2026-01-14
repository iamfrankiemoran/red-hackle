import { render, screen } from "@testing-library/react"
import { vi } from "vitest"
import HomePage from "@/app/page"

vi.mock("@/lib/googleReviews", () => ({
  fetchGoogleReviews: vi.fn().mockResolvedValue([
    {
      id: "google:review-1",
      source: "google",
      rating: 5,
      quote: "Fantastic service",
      name: "Test Reviewer",
      role: "Google review",
      url: "https://maps.google.com",
      time: 1735689600,
    },
  ]),
}))

describe("HomePage", () => {
  it("renders hero content and review highlights", async () => {
    render(await HomePage())

    expect(screen.getByRole("heading", { name: /commercial & contract cleaning services/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /contact us/i })).toHaveAttribute("href", "/contact")
    expect(screen.getByText(/fantastic service/i)).toBeInTheDocument()
  })
})
