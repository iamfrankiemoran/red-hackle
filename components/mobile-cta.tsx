import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t border-slate-200 bg-white px-4 py-3 shadow-lg sm:hidden">
      <Link href="tel:+447966881555" className="flex items-center gap-2 text-sm font-semibold text-slate-900">
        <Phone className="h-4 w-4 text-red-600" />
        Call 07966 881 555
      </Link>
      <Button asChild className="bg-red-600 text-white hover:bg-red-700">
        <Link href="/contact">Request a quote</Link>
      </Button>
    </div>
  )
}
