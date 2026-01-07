import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "End of Tenancy Cleaning",
  description:
    "End of tenancy cleaning for landlords, agents, and property managers across Dundee, Tayside, Fife, and Angus.",
  alternates: {
    canonical: "/services/end-of-tenancy-cleaning",
  },
}

const highlights = [
  "Inventory-ready kitchens, washrooms, and appliances",
  "Detailed skirtings, doors, and high-touch areas",
  "Flexible scheduling for key handovers",
  "Optional add-ons for carpets and upholstery",
]

export default function EndOfTenancyCleaningPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">End of tenancy</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">End of tenancy cleaning</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            Efficient, detailed move-out cleaning for managed properties, landlords, and lettings teams with clear
            completion standards.
          </p>
          <Button asChild className="mt-6 bg-red-600 text-white hover:bg-red-700">
            <Link href="/contact">Book a tenancy clean</Link>
          </Button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold">Coverage focus</h2>
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
                Property managers, landlords, and serviced accommodation operators looking for reliable turnaround
                support.
              </p>
              <Button asChild variant="outline" className="mt-4 border-slate-200">
                <Link href="/coverage-areas">Coverage areas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
