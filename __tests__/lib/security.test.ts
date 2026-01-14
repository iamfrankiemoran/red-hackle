import {
  checkRateLimit,
  generateSecureToken,
  isValidEmail,
  isValidPhone,
  isValidPostcode,
  sanitizeInput,
} from "@/lib/security"
import { vi } from "vitest"

describe("security utilities", () => {
  it("sanitizes input strings", () => {
    const result = sanitizeInput("<script>alert('x')</script>  ")
    expect(result).toBe("alert('x')")
  })

  it("validates email addresses", () => {
    expect(isValidEmail("hello@example.com")).toBe(true)
    expect(isValidEmail("bad@@example")).toBe(false)
  })

  it("validates UK phone numbers", () => {
    expect(isValidPhone("07966 881 555")).toBe(true)
    expect(isValidPhone("12345")).toBe(false)
  })

  it("validates UK postcodes", () => {
    expect(isValidPostcode("DD5 1DJ")).toBe(true)
    expect(isValidPostcode("NOT A POSTCODE")).toBe(false)
  })

  it("enforces rate limiting windows", () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date("2025-01-01T00:00:00Z"))

    expect(checkRateLimit("client-a", 2, 1000)).toBe(true)
    expect(checkRateLimit("client-a", 2, 1000)).toBe(true)
    expect(checkRateLimit("client-a", 2, 1000)).toBe(false)

    vi.setSystemTime(new Date("2025-01-01T00:00:02Z"))
    expect(checkRateLimit("client-a", 2, 1000)).toBe(true)

    vi.useRealTimers()
  })

  it("generates secure tokens", () => {
    const token = generateSecureToken()
    expect(token).toBeTruthy()
    expect(token.length).toBeGreaterThan(10)
  })
})
