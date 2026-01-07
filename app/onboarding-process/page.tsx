import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Onboarding Process",
  description:
    "Step-by-step onboarding process for new commercial cleaning sites, from survey to mobilisation and go-live.",
  alternates: {
    canonical: "/onboarding-process",
  },
}

const onboardingSteps = [
  {
    title: "Discovery call",
    description: "Confirm site priorities, compliance needs, and occupancy patterns.",
  },
  {
    title: "Site survey",
    description: "Walkthrough with risk assessment, equipment review, and access requirements.",
  },
  {
    title: "Scope & schedule",
    description: "Task matrix, frequencies, and shift plan shared for approval.",
  },
  {
    title: "Mobilisation",
    description: "Team briefing, supply setup, and access controls completed before go-live.",
  },
  {
    title: "Go-live & QA",
    description: "Initial check-ins, quality audits, and reporting cadence confirmed.",
  },
]

export default function OnboardingProcessPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Onboarding</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">A structured onboarding process for every site</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            We remove the uncertainty from switching or starting a cleaning partner by following a clear, documented
            onboarding plan.
          </p>
          <Button asChild className="mt-6 bg-red-600 text-white hover:bg-red-700">
            <Link href="/contact">Schedule a site survey</Link>
          </Button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {onboardingSteps.map((step, index) => (
              <div key={step.title} className="rounded-xl border border-slate-200 p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">Step {index + 1}</p>
                <h2 className="mt-3 text-lg font-semibold">{step.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
