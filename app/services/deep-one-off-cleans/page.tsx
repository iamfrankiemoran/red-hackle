import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Deep & One-Off Cleans",
  description:
    "Deep and one-off cleaning services for seasonal resets, audits, and detailed hygiene refreshes across Dundee, Tayside, Fife, and Angus.",
  alternates: {
    canonical: "/services/deep-one-off-cleans",
  },
}

const highlights = [
  "Intensive kitchen, washroom, and high-touch detailing",
  "Targeted cleans for audits or compliance checks",
  "Specialist focus on neglected or high-traffic areas",
  "Flexible scheduling for one-off or seasonal work",
]

export default function DeepOneOffCleansPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Deep & one-off cleans</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Deep / one-off cleaning</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            Ideal for seasonal resets, compliance audits, or high-impact refreshes that require extra attention to
            detail.
          </p>
          <Button asChild className="mt-6 bg-red-600 text-white hover:bg-red-700">
            <Link href="/contact">Book a deep clean</Link>
          </Button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold">Where we focus</h2>
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
              <h3 className="text-lg font-semibold">Planning support</h3>
              <p className="mt-2 text-sm text-slate-600">
                We&apos;ll align deep cleans with your operational calendar, shutdown windows, and compliance deadlines.
              </p>
              <Button asChild variant="outline" className="mt-4 border-slate-200">
                <Link href="/contact">Plan a deep clean</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
