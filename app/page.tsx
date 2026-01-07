import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, ClipboardCheck, Clock, Handshake, Phone, Shield, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Commercial & Contract Cleaning Services",
  description:
    "Operationally-led commercial cleaning for Dundee, Tayside, Fife, and Angus. Clear SLAs, quality assurance, and reporting for offices, property managers, retail, and construction teams.",
  alternates: {
    canonical: "/",
  },
}

const trustItems = [
  {
    title: "Fully insured cover",
    description: "Public liability and employer cover arranged for commercial sites.",
    icon: Shield,
  },
  {
    title: "Quality control",
    description: "Site checklists and supervisor audits with documented actions.",
    icon: ClipboardCheck,
  },
  {
    title: "Out-of-hours ready",
    description: "Early, late, and weekend cleans planned around your business hours.",
    icon: Clock,
  },
  {
    title: "Dedicated account lead",
    description: "A single point of contact for onboarding and ongoing service changes.",
    icon: Handshake,
  },
]

const sectors = [
  {
    title: "Offices & workplaces",
    description: "Daily cleaning, washroom restocks, and meeting room presentation.",
  },
  {
    title: "Property management",
    description: "Managed blocks, lettings, and end-of-tenancy turnaround support.",
  },
  {
    title: "Retail & hospitality",
    description: "Front-of-house presentation, back-of-house hygiene, and flexible hours.",
  },
  {
    title: "Construction & developers",
    description: "Builder’s cleans, sparkle cleans, and handover readiness.",
  },
]

const testimonials = [
  {
    quote:
      "Red Hackle deliver consistent standards across multiple sites, and the monthly reporting keeps our stakeholders informed.",
    name: "Laura McLean",
    role: "Facilities Manager",
    location: "Dundee",
  },
  {
    quote:
      "The onboarding survey was thorough and the mobilisation plan meant we switched providers without downtime.",
    name: "Gareth Wilson",
    role: "Operations Director",
    location: "Fife",
  },
  {
    quote:
      "Reliable, responsive, and proactive. The QA checks are clear and the team listens to feedback quickly.",
    name: "Nadia Patel",
    role: "Property Manager",
    location: "Angus",
  },
]

const processSteps = [
  {
    title: "Site survey",
    description: "Walkthrough, risk assessments, and scope definition with your stakeholders.",
  },
  {
    title: "Scope & schedule",
    description: "Task matrix, frequencies, and mobilisation plan confirmed in writing.",
  },
  {
    title: "Mobilisation",
    description: "Team onboarding, access control, and supply setup before go-live.",
  },
  {
    title: "QA & reporting",
    description: "Ongoing audits, service reviews, and clear reporting cadence.",
  },
]

const services = [
  {
    title: "Office & workplace cleaning",
    description: "Daily and periodic cleans with hygiene touchpoints and presentation checks.",
    href: "/services/office-workplace-cleaning",
    icon: Building2,
  },
  {
    title: "Contract cleaning",
    description: "Multi-site contract delivery with SLA-backed processes.",
    href: "/services/contract-cleaning",
    icon: ClipboardCheck,
  },
  {
    title: "End of tenancy cleaning",
    description: "Inventory-ready cleans for managed and serviced properties.",
    href: "/services/end-of-tenancy-cleaning",
    icon: Sparkles,
  },
  {
    title: "Builders / sparkle cleans",
    description: "Post-construction detailing for handover and snag lists.",
    href: "/services/builders-sparkle-cleans",
    icon: Star,
  },
  {
    title: "Deep & one-off cleans",
    description: "Seasonal or audit-driven deep cleans with specialist focus areas.",
    href: "/services/deep-one-off-cleans",
    icon: Sparkles,
  },
]

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">
              Commercial-first cleaning partner
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Commercial & Contract Cleaning Services
            </h1>
            <p className="text-base text-slate-200 sm:text-lg">
              Red Hackle Cleaning Services delivers reliable, SLA-backed cleaning for offices, property managers,
              retail sites, hospitality venues, and construction handovers across Dundee, Tayside, Fife, and Angus.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild className="bg-red-600 text-white hover:bg-red-700">
                <Link href="/contact">Request a quote</Link>
              </Button>
              <Link href="tel:+447966881555" className="inline-flex items-center gap-2 text-sm font-semibold">
                <Phone className="h-4 w-4 text-red-400" />
                07966 881 555
              </Link>
            </div>
            <p className="text-xs text-slate-400">
              Rapid response for new contracts, mobilisations, and urgent cover.
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <Image
                src="/images/team-photo.jpg"
                alt="Commercial cleaning team ready for a site walkthrough"
                width={520}
                height={420}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-5 shadow-sm">
              <item.icon className="mb-3 h-5 w-5 text-red-600" />
              <h2 className="text-base font-semibold">{item.title}</h2>
              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Sectors served</p>
            <h2 className="mt-3 text-3xl font-semibold">Built for operational teams and busy sites</h2>
            <p className="mt-3 text-sm text-slate-600">
              We partner with decision-makers who need consistent delivery, measurable outcomes, and clear reporting.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {sectors.map((sector) => (
              <div key={sector.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{sector.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Proof</p>
            <h2 className="mt-3 text-3xl font-semibold">Trusted by operational teams</h2>
            <p className="mt-3 text-sm text-slate-600">
              Feedback is gathered during service reviews and used to refine plans, training, and schedules.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-xl border border-slate-200 p-6 shadow-sm">
                <p className="text-sm text-slate-600">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-slate-900">
                  {testimonial.name} · {testimonial.role}
                </p>
                <p className="text-xs text-slate-500">{testimonial.location}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
            Space reserved for future client logo and review embeds.
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Process</p>
            <h2 className="text-3xl font-semibold">A structured onboarding path for every site</h2>
            <p className="text-sm text-slate-200">
              We plan the scope, handover, and quality checks upfront so your teams know exactly what to expect.
            </p>
            <Button asChild className="bg-white text-slate-950 hover:bg-slate-100">
              <Link href="/onboarding-process">View onboarding process</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <span className="text-xs font-semibold text-red-300">Step {index + 1}</span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Services</p>
              <h2 className="mt-3 text-3xl font-semibold">Cleaning plans tailored to your operation</h2>
              <p className="mt-3 text-sm text-slate-600">
                Every service is scoped to site risk, footfall, and compliance needs.
              </p>
            </div>
            <Button asChild variant="outline" className="border-slate-200">
              <Link href="/services">See all services</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-xl border border-slate-200 p-6 shadow-sm transition hover:border-red-200 hover:shadow-md"
              >
                <service.icon className="h-6 w-6 text-red-600" />
                <h3 className="mt-4 text-lg font-semibold group-hover:text-red-600">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-red-600">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Ready to talk?</p>
            <h2 className="mt-3 text-3xl font-semibold">Let&apos;s build a cleaning plan that fits your operation.</h2>
            <p className="mt-3 text-sm text-slate-600">
              We respond within one business day with next steps, site survey availability, and initial scope guidance.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-red-600 text-white hover:bg-red-700">
              <Link href="/contact">Request a quote</Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-200">
              <Link href="/commercial-cleaning">Explore commercial cleaning</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
