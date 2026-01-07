import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Red Hackle Cleaning Services, covering how we collect, use, and protect personal data for commercial cleaning enquiries.",
  alternates: {
    canonical: "/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-slate-900">
      <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
        <header className="mb-10">
          <h1 className="text-4xl font-semibold">Privacy Policy</h1>
          <p className="mt-3 text-sm text-slate-600">Last updated: 1 January 2024</p>
        </header>

        <div className="space-y-8 text-sm text-slate-700">
          <section>
            <h2 className="text-xl font-semibold">Who we are</h2>
            <p className="mt-3">
              Red Hackle Cleaning Services is the data controller for information collected through this website. Our
              registered address is 165 Brook Street, Dundee, DD5 1DJ.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Information we collect</h2>
            <ul className="mt-3 space-y-2">
              <li>• Contact details (name, email, phone number, company name).</li>
              <li>• Enquiry details about your premises, schedule, and service requirements.</li>
              <li>• Website analytics data (if enabled) for site performance and usage trends.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">How we use your information</h2>
            <ul className="mt-3 space-y-2">
              <li>• Respond to enquiries and provide quotes or proposals.</li>
              <li>• Arrange site surveys, onboarding meetings, or service reviews.</li>
              <li>• Improve our website and service delivery.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Lawful basis</h2>
            <p className="mt-3">
              We process your information based on legitimate interests to respond to business enquiries, and to take
              steps towards entering a contract. Where required, we will ask for consent before sending marketing
              updates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Sharing your information</h2>
            <p className="mt-3">
              We do not sell personal data. We only share information with trusted suppliers who help us deliver
              services (for example, IT hosting or email services). All suppliers are required to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Data retention</h2>
            <p className="mt-3">
              We retain enquiry information only as long as necessary to provide a quote, deliver services, or meet
              legal requirements. You can request deletion at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Your rights</h2>
            <p className="mt-3">
              You have the right to access, correct, or delete your personal data. You can also object to processing or
              request data portability where applicable. Contact us to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Contact us</h2>
            <p className="mt-3">
              If you have questions about this policy, email us at{" "}
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
