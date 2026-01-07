import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Builders & Sparkle Cleans",
  description:
    "Post-construction builders and sparkle cleans for developments, refurbishments, and handover projects across Dundee, Tayside, Fife, and Angus.",
  alternates: {
    canonical: "/services/builders-sparkle-cleans",
  },
}

const highlights = [
  "Removal of dust, debris, and residue after construction",
  "Detailed wipe-downs for fixtures, glass, and fittings",
  "Handover-ready presentation for show units",
  "Flexible scheduling around snagging timelines",
]

export default function BuildersSparkleCleansPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Builders & sparkle cleans</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Builders / sparkle cleans</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            Post-construction cleans designed for developers, fit-out teams, and property managers preparing buildings
            for occupancy.
          </p>
          <Button asChild className="mt-6 bg-red-600 text-white hover:bg-red-700">
            <Link href="/contact">Schedule a sparkle clean</Link>
          </Button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold">What&apos;s included</h2>
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
              <h3 className="text-lg font-semibold">Project-ready support</h3>
              <p className="mt-2 text-sm text-slate-600">
                We coordinate with site managers to align cleaning schedules with snagging and handover deadlines.
              </p>
              <Button asChild variant="outline" className="mt-4 border-slate-200">
                <Link href="/contact">Request availability</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
