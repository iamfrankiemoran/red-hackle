import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contract Cleaning Service",
  description:
    "Contract cleaning services for commercial sites with SLA-backed delivery, QA audits, and reporting.",
  alternates: {
    canonical: "/services/contract-cleaning",
  },
}

const highlights = [
  "Dedicated account lead and site mobilisation",
  "Documented task matrix and compliance checks",
  "Scheduled QA audits with corrective actions",
  "Reporting aligned to stakeholder requirements",
]

export default function ContractCleaningServicePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Contract cleaning</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Contract cleaning service</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            Structured delivery for single or multi-site portfolios with clear accountability, defined standards, and
            proactive reporting.
          </p>
          <Button asChild className="mt-6 bg-red-600 text-white hover:bg-red-700">
            <Link href="/contact">Request a contract quote</Link>
          </Button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold">What this service includes</h2>
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
              <h3 className="text-lg font-semibold">Related resources</h3>
              <p className="mt-2 text-sm text-slate-600">
                Explore how SLAs and QA reporting are structured for contract clients.
              </p>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <Link href="/slas" className="block font-semibold text-red-600">
                  Service level agreements →
                </Link>
                <Link href="/quality-assurance" className="block font-semibold text-red-600">
                  Quality assurance →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
