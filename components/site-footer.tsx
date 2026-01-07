import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "/commercial-cleaning", label: "Commercial Cleaning" },
  { href: "/contract-cleaning", label: "Contract Cleaning" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/coverage-areas", label: "Coverage Areas" },
  { href: "/contact", label: "Contact" },
]

const complianceLinks = [
  { href: "/slas", label: "Service Level Agreements" },
  { href: "/quality-assurance", label: "Quality Assurance" },
  { href: "/reporting", label: "Reporting" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms & Conditions" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Red Hackle Cleaning Services</h2>
          <p className="text-sm text-slate-200">
            Commercial-first cleaning partner for offices, property managers, retail, hospitality, and construction
            projects across Dundee, Tayside, Fife, and Angus.
          </p>
          <div className="space-y-2 text-sm text-slate-200">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-red-400" />
              165 Brook Street, Dundee, DD5 1DJ
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-red-400" />
              <Link href="tel:+447966881555" className="hover:text-white">
                07966 881 555
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-red-400" />
              <Link href="mailto:hello@redhacklecleaningservices.com" className="hover:text-white">
                hello@redhacklecleaningservices.com
              </Link>
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-200">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-semibold">Compliance & Operations</h3>
          <ul className="space-y-2 text-sm text-slate-200">
            {complianceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="pt-4 text-xs text-slate-400">
            Business hours: Monday to Friday, 8:00am – 6:00pm. Out-of-hours cleans available by arrangement.
          </p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Red Hackle Cleaning Services. All rights reserved.
      </div>
    </footer>
  )
}
