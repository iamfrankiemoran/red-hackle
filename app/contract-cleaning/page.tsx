import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contract Cleaning",
  description:
    "Contract cleaning services with structured SLAs, reporting, and QA checks for businesses across Dundee, Tayside, Fife, and Angus.",
  alternates: {
    canonical: "/contract-cleaning",
  },
}

const contractBenefits = [
  "Clear scope of work with frequency and task matrix",
  "Mobilisation plan with onboarding and access controls",
  "Regular service reviews and reporting cadence",
  "Escalation path for urgent issues and compliance updates",
]

export default function ContractCleaningPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Contract cleaning</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Consistent delivery with clear accountability</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            Our contract cleaning service provides structured delivery across single or multi-site portfolios. We
            document tasks, confirm frequencies, and build in reporting so your operational stakeholders stay informed.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-red-600 text-white hover:bg-red-700">
              <Link href="/contact">Request a contract proposal</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-slate-900"
            >
              <Link href="/slas">Review our SLA approach</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold">What&apos;s included in contract cleaning</h2>
              <p className="mt-4 text-sm text-slate-600">
                We align your cleaning plan with building usage, compliance requirements, and access protocols.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {contractBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-red-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold">Operational support</h3>
              <p className="mt-2 text-sm text-slate-600">
                Our account leads manage onboarding, ongoing QA, and reporting so your teams can focus on core
                operations.
              </p>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p>• Routine audits with documented actions.</p>
                <p>• Supply monitoring and restock coordination.</p>
                <p>• Planned enhancements for seasonal or event-based needs.</p>
              </div>
              <Button asChild className="mt-6 bg-red-600 text-white hover:bg-red-700">
                <Link href="/quality-assurance">Quality assurance overview</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
