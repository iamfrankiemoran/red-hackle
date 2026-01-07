"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/commercial-cleaning", label: "Commercial Cleaning" },
  { href: "/services", label: "Services" },
  { href: "/slas", label: "SLAs" },
  { href: "/quality-assurance", label: "Quality Assurance" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Red Hackle Cleaning Services">
          <Image
            src="/images/new-logo.png"
            alt="Red Hackle Cleaning Services"
            width={180}
            height={60}
            className="h-10 w-auto"
            priority
          />
          <span className="text-sm font-semibold text-slate-900 hidden sm:inline">
            Commercial Cleaning Partner
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-red-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="tel:+447966881555" className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Phone className="h-4 w-4 text-red-600" />
            07966 881 555
          </Link>
          <Button asChild className="bg-red-600 text-white hover:bg-red-700">
            <Link href="/contact">Request a quote</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-700"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <Link href="tel:+447966881555" className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Phone className="h-4 w-4 text-red-600" />
                07966 881 555
              </Link>
              <Button asChild className="bg-red-600 text-white hover:bg-red-700">
                <Link href="/contact">Request a quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
