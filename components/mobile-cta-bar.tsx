"use client"

import Link from "next/link"
import { Phone, ClipboardCheck } from "lucide-react"

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-stone-950/95 backdrop-blur-sm border-t border-stone-800 p-3">
      <div className="flex gap-3 max-w-md mx-auto">
        <a
          href="tel:5205551234"
          className="flex-1 flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 active:bg-stone-600 text-white rounded-xl py-3.5 text-sm font-semibold transition-colors"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white rounded-xl py-3.5 text-sm font-semibold transition-colors"
        >
          <ClipboardCheck className="h-4 w-4" />
          Free Inspection
        </Link>
      </div>
    </div>
  )
}
