import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ContactForm } from "@/components/site/contact-form"
import { vi } from "vitest"

const originalFetch = global.fetch

describe("ContactForm", () => {
  beforeEach(() => {
    global.fetch = vi.fn()
  })

  afterEach(() => {
    vi.clearAllMocks()
    global.fetch = originalFetch
  })

  it("shows validation errors when required fields are missing", async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.click(screen.getByRole("button", { name: /send enquiry/i }))

    expect(screen.getByText(/please enter your first name/i)).toBeInTheDocument()
    expect(screen.getByText(/please enter your last name/i)).toBeInTheDocument()
    expect(screen.getByText(/enter a valid work email/i)).toBeInTheDocument()
    expect(screen.getByText(/enter a valid uk phone number/i)).toBeInTheDocument()
    expect(screen.getByText(/please tell us about your cleaning requirements/i)).toBeInTheDocument()
  })

  it("submits the form and shows a success message", async () => {
    const user = userEvent.setup()
    ;(global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    })

    render(<ContactForm />)

    await user.type(screen.getByLabelText(/first name/i), "Jane")
    await user.type(screen.getByLabelText(/last name/i), "Doe")
    await user.type(screen.getByLabelText(/work email/i), "jane@example.com")
    await user.type(screen.getByLabelText(/phone number/i), "07966 881 555")
    await user.type(screen.getByLabelText(/cleaning requirements/i), "Need daily office cleaning.")

    await user.click(screen.getByRole("button", { name: /send enquiry/i }))

    expect(await screen.findByRole("status")).toHaveTextContent(/received your enquiry/i)
    expect(global.fetch).toHaveBeenCalledWith("/api/contact", expect.any(Object))
  })

  it("shows an error message when the API responds with an error", async () => {
    const user = userEvent.setup()
    ;(global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: false,
      json: async () => ({ error: "Unable to send message" }),
    })

    render(<ContactForm />)

    await user.type(screen.getByLabelText(/first name/i), "Jane")
    await user.type(screen.getByLabelText(/last name/i), "Doe")
    await user.type(screen.getByLabelText(/work email/i), "jane@example.com")
    await user.type(screen.getByLabelText(/phone number/i), "07966 881 555")
    await user.type(screen.getByLabelText(/cleaning requirements/i), "Need daily office cleaning.")

    await user.click(screen.getByRole("button", { name: /send enquiry/i }))

    expect(await screen.findByRole("alert")).toHaveTextContent(/unable to send message/i)
  })
})
