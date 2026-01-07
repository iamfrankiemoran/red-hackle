import type { Metadata } from "next"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Coverage Areas",
  description:
    "Commercial cleaning coverage across Dundee, Tayside, Fife, Angus, and surrounding towns.",
  alternates: {
    canonical: "/coverage-areas",
  },
}

const areas = [
  "Dundee",
  "Broughty Ferry",
  "Tayside",
  "Angus",
  "Fife",
  "St Andrews",
  "Carnoustie",
  "Monifieth",
  "Newport-on-Tay",
  "Perth",
]

export default function CoverageAreasPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Coverage areas</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Serving commercial sites across East Scotland</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            We support offices, property managers, retailers, and construction teams across Dundee, Tayside, Fife, and
            Angus. If you&apos;re just outside these areas, we&apos;re happy to review availability.
          </p>
          <Button asChild className="mt-6 bg-red-600 text-white hover:bg-red-700">
            <Link href="/contact">Check availability</Link>
          </Button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
                <MapPin className="h-4 w-4 text-red-600" />
                <span className="text-sm font-semibold text-slate-800">{area}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-600">
            We frequently support multi-site portfolios across the region. Let us know if you need coordinated
            delivery across multiple locations.
          </p>
        </div>
      </section>
    </main>
  )
}
