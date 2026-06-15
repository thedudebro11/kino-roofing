"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, ShieldCheck } from "lucide-react"

export default function CTASection() {
  return (
    <section className="bg-stone-950 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-600/15 border border-orange-500/25 rounded-full px-4 py-1.5 mb-6">
            <ShieldCheck className="h-3.5 w-3.5 text-orange-500" />
            <span className="text-orange-400 text-sm font-medium">Free · No Obligation · Same-Day Response</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-5 text-white">
            Don&apos;t Let a Small Problem{" "}
            <span className="text-orange-500">Become a Big One</span>
          </h2>

          <p className="text-lg text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tucson&apos;s heat and monsoon season don&apos;t wait. A cracked tile or small leak can turn into
            structural damage fast. Get a free inspection and know exactly what you&apos;re dealing with —
            no pressure, no surprises.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-500 text-white text-base px-8 shadow-lg shadow-orange-900/30"
              onClick={() => {
                if (typeof window !== "undefined" && window.plausible) {
                  window.plausible("CTA-Section-Inspect")
                }
              }}
            >
              <Link href="/contact" className="flex items-center gap-2">
                Request Free Inspection
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-stone-600 text-white hover:bg-stone-800 hover:border-stone-500 px-8"
              onClick={() => {
                if (typeof window !== "undefined" && window.plausible) {
                  window.plausible("CTA-Section-Call")
                }
              }}
            >
              <a href="tel:5205551234" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (520) 555-1234
              </a>
            </Button>
          </div>

          <p className="mt-6 text-stone-500 text-sm">
            Emergency repairs available · Licensed ROC #123456 · Serving Tucson since 2005
          </p>
        </div>
      </div>
    </section>
  )
}
