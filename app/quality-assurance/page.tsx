import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "Quality assurance approach for commercial cleaning, including site audits, checklists, and corrective actions.",
  alternates: {
    canonical: "/quality-assurance",
  },
}

const qaSteps = [
  {
    title: "Site checklists",
    description: "Location-specific checklists aligned to scope and compliance needs.",
  },
  {
    title: "Supervisor audits",
    description: "Routine inspections with documented scores and corrective actions.",
  },
  {
    title: "Client feedback loop",
    description: "Feedback captured during reviews and actioned with clear timelines.",
  },
  {
    title: "Continuous improvement",
    description: "Trend analysis to refine schedules, training, and supply usage.",
  },
]

export default function QualityAssurancePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Quality assurance</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Quality control that protects your reputation</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            We monitor delivery with structured audits, supervisor checks, and documented actions so standards stay
            consistent across every site.
          </p>
          <Button asChild className="mt-6 bg-red-600 text-white hover:bg-red-700">
            <Link href="/contact">Discuss QA requirements</Link>
          </Button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-2">
          {qaSteps.map((step) => (
            <div key={step.title} className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-lg font-semibold">{step.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-semibold">QA documentation includes</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Site inspection reports and improvement actions.</li>
              <li>• Supervisory visit logs and compliance notes.</li>
              <li>• KPI summaries aligned to the SLA.</li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-red-600 text-white hover:bg-red-700">
                <Link href="/reporting">View reporting approach</Link>
              </Button>
              <Button asChild variant="outline" className="border-slate-200">
                <Link href="/slas">Review SLAs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
