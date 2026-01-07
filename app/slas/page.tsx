import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Service Level Agreements (SLAs)",
  description:
    "Clear service level agreements covering scope, frequencies, escalation, and reporting for commercial cleaning clients.",
  alternates: {
    canonical: "/slas",
  },
}

const slaElements = [
  {
    title: "Scope of work",
    description: "Task matrix, frequencies, and acceptance standards agreed before mobilisation.",
  },
  {
    title: "Response times",
    description: "Defined response and resolution targets for urgent issues or client requests.",
  },
  {
    title: "Quality checks",
    description: "Audit schedule, scoring methodology, and improvement actions.",
  },
  {
    title: "Reporting cadence",
    description: "Weekly or monthly reporting with KPIs and compliance observations.",
  },
]

export default function SlasPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">SLAs</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Service level agreements that protect your standards</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            Our SLAs document cleaning outcomes, communication pathways, and escalation steps so stakeholders have full
            visibility on delivery.
          </p>
          <Button asChild className="mt-6 bg-red-600 text-white hover:bg-red-700">
            <Link href="/contact">Request an SLA template</Link>
          </Button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-2">
          {slaElements.map((item) => (
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
            <h2 className="text-2xl font-semibold">Why SLAs matter</h2>
            <p className="mt-3 text-sm text-slate-600">
              SLAs create consistent expectations across multiple stakeholders. They also provide the framework for QA
              checks, reporting, and continual improvement conversations.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-red-600 text-white hover:bg-red-700">
                <Link href="/quality-assurance">Quality assurance process</Link>
              </Button>
              <Button asChild variant="outline" className="border-slate-200">
                <Link href="/reporting">Reporting overview</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
