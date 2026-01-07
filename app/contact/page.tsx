import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a commercial cleaning quote from Red Hackle Cleaning Services. Call, email, or send a quick enquiry.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Request a fast commercial cleaning quote</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            Tell us about your site, schedule, and compliance needs. We respond within one business day with next steps.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <ContactForm />
          </div>
          <div className="space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div>
              <h2 className="text-lg font-semibold">Contact details</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-600" />
                  <Link href="tel:+447966881555" className="font-semibold text-slate-900">
                    07966 881 555
                  </Link>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-red-600" />
                  <Link href="mailto:hello@redhacklecleaningservices.com" className="font-semibold text-slate-900">
                    hello@redhacklecleaningservices.com
                  </Link>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-red-600" />
                  165 Brook Street, Dundee, DD5 1DJ
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-red-600" />
                  Monday to Friday, 8:00am – 6:00pm
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Coverage areas</h3>
              <p className="mt-2 text-sm text-slate-600">
                We cover Dundee, Tayside, Fife, Angus, and surrounding towns. Multi-site portfolios welcome.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
