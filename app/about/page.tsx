import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Red Hackle Cleaning Services, our operations-led approach, and the team delivering commercial cleaning across Dundee, Tayside, Fife, and Angus.",
  alternates: {
    canonical: "/about",
  },
}

const principles = [
  {
    title: "Operations-led delivery",
    description: "We align cleaning with site risk, occupancy, and compliance requirements.",
  },
  {
    title: "Accountable communication",
    description: "Dedicated account leads, clear escalation, and structured reporting.",
  },
  {
    title: "Proactive improvements",
    description: "Audit insights guide training and process improvements.",
  },
]

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">About us</p>
            <h1 className="text-4xl font-semibold sm:text-5xl">Operations-led commercial cleaning</h1>
            <p className="text-base text-slate-200 sm:text-lg">
              Red Hackle Cleaning Services supports business operations teams with reliable, accountable cleaning
              services. We work closely with decision-makers to maintain standards, communication, and transparency.
            </p>
            <Button asChild className="bg-red-600 text-white hover:bg-red-700">
              <Link href="/contact">Talk to our team</Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-800">
            <Image
              src="/images/team-leader.jpg"
              alt="Red Hackle cleaning supervisor"
              width={520}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 p-6 shadow-sm">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold">Team & approach</h2>
              <p className="mt-4 text-sm text-slate-600">
                Our teams are trained on site-specific scopes, access protocols, and presentation standards. Supervisors
                provide regular oversight, and our account leads communicate changes promptly.
              </p>
              <p className="mt-4 text-sm text-slate-600">
                We focus on consistent delivery rather than over-promising. If site requirements change, we update the
                scope and reporting cadence in line with your stakeholders.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Want to meet the team?</h3>
              <p className="mt-2 text-sm text-slate-600">
                Schedule a site survey or consultation to meet your local account lead.
              </p>
              <Button asChild className="mt-4 bg-red-600 text-white hover:bg-red-700">
                <Link href="/contact">Book a consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
