import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Office & Workplace Cleaning",
  description:
    "Office and workplace cleaning services with hygiene touchpoints, washroom care, and presentation checks for Dundee, Tayside, Fife, and Angus.",
  alternates: {
    canonical: "/services/office-workplace-cleaning",
  },
}

const highlights = [
  "Daily or scheduled cleans aligned to occupancy",
  "Washroom care, consumable replenishment, and odour control",
  "Meeting room resets and shared space presentation",
  "Secure access procedures and alarm protocols",
]

export default function OfficeCleaningPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Office cleaning</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Office & workplace cleaning</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            Create a professional workplace environment with reliable daily cleans, scheduled hygiene checks, and
            presentation-ready meeting spaces.
          </p>
          <Button asChild className="mt-6 bg-red-600 text-white hover:bg-red-700">
            <Link href="/contact">Request a quote</Link>
          </Button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold">Service highlights</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-red-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold">Ideal for</h3>
              <p className="mt-2 text-sm text-slate-600">
                Office suites, co-working spaces, professional services, and administrative hubs requiring daily
                presentation standards.
              </p>
              <Button asChild variant="outline" className="mt-4 border-slate-200">
                <Link href="/slas">Review SLA options</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
