import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Examples of commercial cleaning outcomes delivered for offices, property managers, and construction teams in Dundee, Tayside, Fife, and Angus.",
  alternates: {
    canonical: "/case-studies",
  },
}

const caseStudies = [
  {
    title: "Regional legal firm — Dundee",
    summary:
      "A multi-floor office required evening cleaning with strict access control and boardroom presentation standards.",
    outcomes: [
      "Implemented a rotating supervisor audit schedule with weekly reporting.",
      "Reduced morning rework requests by introducing a sign-off checklist.",
      "Improved meeting room readiness during client-heavy weeks.",
    ],
  },
  {
    title: "Property management portfolio — Fife",
    summary:
      "A property manager needed consistent end-of-tenancy cleans across multiple short-let properties.",
    outcomes: [
      "Created a standard turnover checklist for kitchens, bathrooms, and linens.",
      "Aligned cleans with key handover windows to avoid missed check-ins.",
      "Provided monthly reporting to identify repeat maintenance issues.",
    ],
  },
  {
    title: "Retail fit-out handover — Angus",
    summary:
      "A retail developer required a sparkle clean ahead of tenant handover and opening inspections.",
    outcomes: [
      "Scheduled late-night cleans to avoid contractor overlap.",
      "Delivered a snag list of dust-prone zones for follow-up.",
      "Completed the handover with a final walkthrough and QA checklist.",
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Case studies</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Outcomes-focused commercial cleaning examples</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            These representative examples show how we scope work, deliver consistent service, and report outcomes for
            commercial stakeholders.
          </p>
          <Button asChild className="mt-6 bg-red-600 text-white hover:bg-red-700">
            <Link href="/contact">Discuss your requirements</Link>
          </Button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div key={study.title} className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">Example</p>
              <h2 className="mt-3 text-lg font-semibold">{study.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{study.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {study.outcomes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
