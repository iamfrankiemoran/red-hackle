import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for Red Hackle Cleaning Services commercial cleaning agreements and website usage.",
  alternates: {
    canonical: "/terms-of-service",
  },
}

export default function TermsOfServicePage() {
  return (
    <main className="bg-white text-slate-900">
      <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
        <header className="mb-10">
          <h1 className="text-4xl font-semibold">Terms & Conditions</h1>
          <p className="mt-3 text-sm text-slate-600">Last updated: 1 January 2024</p>
        </header>

        <div className="space-y-8 text-sm text-slate-700">
          <section>
            <h2 className="text-xl font-semibold">Scope of services</h2>
            <p className="mt-3">
              Cleaning services are provided in line with an agreed scope of work, schedule, and service level
              agreement. Any changes to scope or schedule will be documented and agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Site access & security</h2>
            <p className="mt-3">
              Clients are responsible for providing safe access, security information, and any relevant site induction
              requirements. Red Hackle Cleaning Services will follow agreed access procedures and report issues
              promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Service standards</h2>
            <p className="mt-3">
              Quality assurance is managed through inspections and reporting. Any concerns should be reported promptly
              so corrective actions can be scheduled.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Pricing & payment</h2>
            <p className="mt-3">
              Pricing and payment terms are outlined in your proposal or service agreement. Invoices are payable within
              the agreed timeframe stated in your contract.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Cancellations & changes</h2>
            <p className="mt-3">
              Planned service changes should be provided with reasonable notice. Emergency changes may be subject to
              availability. Persistent access issues may impact service delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Data protection</h2>
            <p className="mt-3">
              We handle personal data in accordance with our{" "}
              <Link href="/privacy-policy" className="font-semibold text-red-600">
                privacy policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Website use</h2>
            <p className="mt-3">
              Content on this website is provided for informational purposes. Any reliance on the information is at
              your own risk, and you should obtain a tailored quote for your site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-3">
              For questions about these terms, contact us at{" "}
              <Link href="mailto:hello@redhacklecleaningservices.com" className="font-semibold text-red-600">
                hello@redhacklecleaningservices.com
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
