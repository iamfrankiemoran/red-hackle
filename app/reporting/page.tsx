import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Reporting",
  description:
    "Transparent reporting for commercial cleaning clients, including audit scores, KPIs, and action tracking.",
  alternates: {
    canonical: "/reporting",
  },
}

const reportingHighlights = [
  {
    title: "Audit scores",
    description: "Routine inspection results with pass/fail summaries and improvement actions.",
  },
  {
    title: "KPI snapshots",
    description: "Completion rates, response times, and service trends mapped to your SLA.",
  },
  {
    title: "Issue tracking",
    description: "Logged actions for incidents, repairs, or compliance updates.",
  },
  {
    title: "Meeting notes",
    description: "Monthly or quarterly review notes for stakeholder visibility.",
  },
]

export default function ReportingPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Reporting</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Clear reporting for every stakeholder</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            We provide structured reporting so facilities, operations, and property teams can see service performance
            and planned improvements at a glance.
          </p>
          <Button asChild className="mt-6 bg-red-600 text-white hover:bg-red-700">
            <Link href="/contact">Request reporting examples</Link>
          </Button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-2">
          {reportingHighlights.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-semibold">Delivery insights that help you plan ahead</h2>
            <p className="mt-3 text-sm text-slate-600">
              Our reporting cadence is agreed during onboarding, and we tailor detail levels for facilities, operations,
              and executive stakeholders.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-red-600 text-white hover:bg-red-700">
                <Link href="/slas">See SLA structure</Link>
              </Button>
              <Button asChild variant="outline" className="border-slate-200">
                <Link href="/quality-assurance">Quality assurance</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
