import { render, screen } from "@testing-library/react"
import { SiteFooter } from "@/components/site/footer"

describe("SiteFooter", () => {
  it("renders compliance links", () => {
    render(<SiteFooter />)

    expect(screen.getByRole("link", { name: /privacy policy/i })).toHaveAttribute("href", "/privacy-policy")
    expect(screen.getByRole("link", { name: /terms of service/i })).toHaveAttribute("href", "/terms-of-service")
  })
})
