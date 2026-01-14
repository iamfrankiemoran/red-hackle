import { render, screen } from "@testing-library/react"
import AboutPage from "@/app/about/page"
import CaseStudiesPage from "@/app/case-studies/page"
import CommercialCleaningPage from "@/app/commercial-cleaning/page"
import ContactPage from "@/app/contact/page"
import PrivacyPolicyPage from "@/app/privacy-policy/page"
import ServicesPage from "@/app/services/page"
import TermsOfServicePage from "@/app/terms-of-service/page"
import BuildersSparklePage from "@/app/services/builders-sparkle/page"
import ContractCleaningPage from "@/app/services/contract-cleaning/page"
import DeepOneOffPage from "@/app/services/deep-one-off/page"
import EndOfTenancyPage from "@/app/services/end-of-tenancy/page"
import OfficeWorkplacePage from "@/app/services/office-workplace/page"
import ServiceCommercialCleaningPage from "@/app/services/commercial-cleaning/page"

describe("Static pages", () => {
  const cases: Array<{ name: string; Page: React.ComponentType; heading: RegExp }> = [
    { name: "About", Page: AboutPage, heading: /disciplined, accountable cleaning partner/i },
    { name: "Case Studies", Page: CaseStudiesPage, heading: /examples of commercial outcomes/i },
    { name: "Commercial Cleaning", Page: CommercialCleaningPage, heading: /commercial cleaning services/i },
    { name: "Contact", Page: ContactPage, heading: /request a commercial cleaning quote/i },
    { name: "Privacy Policy", Page: PrivacyPolicyPage, heading: /privacy policy/i },
    { name: "Services", Page: ServicesPage, heading: /commercial cleaning services/i },
    { name: "Terms", Page: TermsOfServicePage, heading: /terms of service/i },
    { name: "Builders Sparkle", Page: BuildersSparklePage, heading: /builders & sparkle cleaning/i },
    { name: "Contract Cleaning", Page: ContractCleaningPage, heading: /contract cleaning services/i },
    { name: "Deep One-off", Page: DeepOneOffPage, heading: /deep & one-off cleaning/i },
    { name: "End of Tenancy", Page: EndOfTenancyPage, heading: /end of tenancy cleaning/i },
    { name: "Office Workplace", Page: OfficeWorkplacePage, heading: /office & workplace cleaning/i },
    { name: "Service Commercial Cleaning", Page: ServiceCommercialCleaningPage, heading: /commercial cleaning services/i },
  ]

  it.each(cases)("renders the $name page", ({ Page, heading }) => {
    render(<Page />)
    expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument()
  })
})
