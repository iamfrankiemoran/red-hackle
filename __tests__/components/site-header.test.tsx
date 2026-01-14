import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SiteHeader } from "@/components/site/header"

describe("SiteHeader", () => {
  it("renders primary navigation links", () => {
    render(<SiteHeader />)

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/")
    expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute("href", "/services")
  })

  it("toggles the mobile menu state", async () => {
    const user = userEvent.setup()
    render(<SiteHeader />)

    const toggleButton = screen.getByRole("button", { name: /toggle navigation/i })
    expect(toggleButton).toHaveAttribute("aria-expanded", "false")

    await user.click(toggleButton)
    expect(toggleButton).toHaveAttribute("aria-expanded", "true")
    expect(screen.getAllByRole("link", { name: /contact/i })[0]).toHaveAttribute("href", "/contact")

    await user.click(toggleButton)
    expect(toggleButton).toHaveAttribute("aria-expanded", "false")
  })
})
