import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Commercial Cleaning",
  description:
    "Commercial cleaning tailored for offices, property managers, retail, hospitality, and construction sites across Dundee, Tayside, Fife, and Angus.",
  alternates: {
    canonical: "/commercial-cleaning",
  },
}

const focusAreas = [
  "Office floors, meeting rooms, receptions, and washrooms",
  "Touchpoint hygiene and consumable restocking",
  "Secure access, alarm procedures, and keyholding",
  "Out-of-hours or daytime cleaning around occupancy",
  "Documented site checks and issue resolution tracking",
]

export default function CommercialCleaningPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Commercial cleaning</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Operationally-led commercial cleaning for busy sites
            </h1>
            <p className="text-base text-slate-200 sm:text-lg">
              We deliver cleaning programmes that align with your operational priorities, from daily office cleans to
              after-hours presentation checks. Our teams work to clear scopes, documented standards, and transparent
              reporting.
            </p>
            <Button asChild className="bg-red-600 text-white hover:bg-red-700">
              <Link href="/contact">Request a quote</Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-800">
            <Image
              src="/images/team-leader-smiling.jpg"
              alt="Site supervisor overseeing a commercial cleaning plan"
              width={520}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-semibold">What commercial clients can expect</h2>
              <p className="mt-4 text-sm text-slate-600">
                Every programme is built around a site survey, a clear scope of work, and service-level expectations
                agreed with your stakeholders.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-red-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold">Coverage areas</h3>
              <p className="mt-2 text-sm text-slate-600">
                Dundee, Tayside, Fife, and Angus, including Broughty Ferry, Carnoustie, St Andrews, and surrounding
                towns.
              </p>
              <Button asChild variant="outline" className="mt-4 border-slate-200">
                <Link href="/coverage-areas">View full coverage</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Responsive scheduling</h3>
              <p className="mt-2 text-sm text-slate-600">
                Shift cleaning times to support occupancy, events, or seasonal demand.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Dedicated account lead</h3>
              <p className="mt-2 text-sm text-slate-600">
                A single point of contact for audits, supply updates, and service requests.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">SLA-backed delivery</h3>
              <p className="mt-2 text-sm text-slate-600">
                Clear quality standards, reporting cadence, and escalation steps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
