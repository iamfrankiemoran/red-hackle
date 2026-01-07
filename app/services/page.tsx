import type { Metadata } from "next"
import Link from "next/link"
import { Building2, ClipboardCheck, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Commercial cleaning services for offices, managed properties, and construction handovers across Dundee, Tayside, Fife, and Angus.",
  alternates: {
    canonical: "/services",
  },
}

const services = [
  {
    title: "Office / Workplace Cleaning",
    description: "Daily, evening, or scheduled cleans tailored to occupancy and desk usage.",
    href: "/services/office-workplace-cleaning",
    icon: Building2,
  },
  {
    title: "Contract Cleaning",
    description: "Structured delivery for single or multi-site portfolios with SLAs and QA.",
    href: "/services/contract-cleaning",
    icon: ClipboardCheck,
  },
  {
    title: "End of Tenancy Cleaning",
    description: "Inventory-ready cleans for landlords, agents, and property managers.",
    href: "/services/end-of-tenancy-cleaning",
    icon: Sparkles,
  },
  {
    title: "Builders / Sparkle Cleans",
    description: "Detailed cleans for handover after construction or refurbishment.",
    href: "/services/builders-sparkle-cleans",
    icon: Star,
  },
  {
    title: "Deep / One-Off Cleans",
    description: "Intensive resets for seasonal refreshes or compliance audits.",
    href: "/services/deep-one-off-cleans",
    icon: Sparkles,
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Services</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Commercial cleaning built around your operation</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            From daily office cleaning to post-construction sparkle cleans, our service lines are designed for
            operational clarity and consistent delivery.
          </p>
          <Button asChild className="mt-6 bg-red-600 text-white hover:bg-red-700">
            <Link href="/contact">Discuss your requirements</Link>
          </Button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="rounded-xl border border-slate-200 p-6 shadow-sm transition hover:border-red-200 hover:shadow-md"
            >
              <service.icon className="h-6 w-6 text-red-600" />
              <h2 className="mt-4 text-lg font-semibold">{service.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
