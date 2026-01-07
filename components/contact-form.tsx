"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formError, setFormError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormStatus("submitting")
    setFormError(null)

    const form = event.currentTarget
    const payload = new FormData(form)
    payload.append("timestamp", Date.now().toString())
    payload.append("website", "")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      })
      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.error || "Unable to send message")
      }

      setFormStatus("success")
      form.reset()
    } catch (error) {
      setFormStatus("error")
      setFormError(error instanceof Error ? error.message : "Something went wrong")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Input name="firstName" placeholder="First name" required aria-label="First name" />
        <Input name="lastName" placeholder="Last name" required aria-label="Last name" />
      </div>
      <Input name="company" placeholder="Company / organisation" aria-label="Company or organisation" />
      <div className="grid gap-4 md:grid-cols-2">
        <Input name="email" type="email" placeholder="Work email" required aria-label="Work email" />
        <Input name="phone" type="tel" placeholder="Phone number" required aria-label="Phone number" />
      </div>
      <Textarea
        name="message"
        placeholder="Tell us about your site, schedule, and any compliance needs."
        rows={5}
        required
        aria-label="Project details"
      />
      <Button type="submit" className="w-full bg-red-600 text-white hover:bg-red-700" disabled={formStatus === "submitting"}>
        {formStatus === "submitting" ? "Sending..." : "Request a quote"}
      </Button>
      {formStatus === "success" ? (
        <p className="text-sm font-semibold text-emerald-600">Thank you. We will be in touch shortly.</p>
      ) : null}
      {formStatus === "error" && formError ? (
        <p className="text-sm font-semibold text-red-600">{formError}</p>
      ) : null}
    </form>
  )
}
