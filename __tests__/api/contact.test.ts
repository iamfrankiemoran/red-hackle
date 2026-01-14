// @vitest-environment node
import { NextRequest } from "next/server"
import { afterEach, describe, expect, it, vi } from "vitest"
import { GET, POST } from "@/app/api/contact/route"

type FormEntries = Record<string, string>

const buildRequest = (entries: FormEntries, ip = "1.1.1.1") => {
  const formData = new FormData()
  Object.entries(entries).forEach(([key, value]) => {
    formData.set(key, value)
  })

  return new NextRequest("http://localhost/api/contact", {
    method: "POST",
    headers: { "x-forwarded-for": ip },
    body: formData,
  })
}

describe("contact API route", () => {
  const originalEnv = { ...process.env }
  const originalFetch = global.fetch

  afterEach(() => {
    process.env = { ...originalEnv }
    vi.restoreAllMocks()
    global.fetch = originalFetch
  })

  it("rejects non-POST requests", async () => {
    const response = await GET()
    expect(response.status).toBe(405)
  })

  it("blocks spam submissions", async () => {
    const request = buildRequest({
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@example.com",
      phone: "07966881555",
      message: "Test",
      timestamp: Date.now().toString(),
      website: "spam",
    }, "2.2.2.2")

    const response = await POST(request)
    expect(response.status).toBe(400)
  })

  it("returns validation errors for missing email service", async () => {
    delete process.env.RESEND_API_KEY

    const request = buildRequest({
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@example.com",
      phone: "07966881555",
      message: "Test",
      timestamp: Date.now().toString(),
      website: "",
    }, "3.3.3.3")

    const response = await POST(request)
    expect(response.status).toBe(500)
  })

  it("sends emails for valid requests", async () => {
    process.env.RESEND_API_KEY = "test-key"

    const fetchMock = vi.fn().mockResolvedValue({ ok: true })
    global.fetch = fetchMock as unknown as typeof fetch

    const request = buildRequest({
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@example.com",
      phone: "07966881555",
      message: "Test message",
      timestamp: Date.now().toString(),
      website: "",
    }, "4.4.4.4")

    const response = await POST(request)
    expect(response.status).toBe(200)
    expect(fetchMock).toHaveBeenCalled()
  })
})
