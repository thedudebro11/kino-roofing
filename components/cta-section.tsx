"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export default function CTASection() {
  return (
    <section className="bg-orange-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">Ready to Get Started?</h2>
        <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
          Contact us today for a free, no-obligation roof inspection and estimate. Our team of roofing experts is ready
          to help with your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100"
            onClick={() => {
              if (typeof window !== "undefined" && window.plausible) {
                window.plausible("CTA-Section-Call");
              }
            }}
          >
            <Link href="/contact" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call for Free Inspection
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-orange-700"
            onClick={() => {
              if (typeof window !== "undefined" && window.plausible) {
                window.plausible("CTA-Section-Email");
              }
            }}
          >
            <Link href="/contact" className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email Us
            </Link>
          </Button>

        </div>
      </div>
    </section>
  )
}
