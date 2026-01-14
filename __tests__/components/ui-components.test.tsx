import { render, screen } from "@testing-library/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

describe("UI components", () => {
  it("renders a badge", () => {
    render(<Badge>Featured</Badge>)
    expect(screen.getByText("Featured")).toBeInTheDocument()
  })

  it("renders a button and supports asChild", () => {
    const { rerender } = render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument()

    rerender(
      <Button asChild>
        <a href="/contact">Contact</a>
      </Button>,
    )
    expect(screen.getByRole("link", { name: /contact/i })).toHaveAttribute("href", "/contact")
  })

  it("renders card, input, and textarea elements", () => {
    render(
      <Card>
        <CardContent>
          <Input aria-label="Email" />
          <Textarea aria-label="Message" />
        </CardContent>
      </Card>,
    )

    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.getByLabelText("Message")).toBeInTheDocument()
  })
})
