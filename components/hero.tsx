import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              <span className="block">Tucson&apos;s Trusted</span>
              <span className="block text-orange-600">Roofing Experts</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Professional roofing services for residential and commercial properties in Tucson and surrounding areas.
              Quality materials, expert installation, and exceptional service.
            </p>
            <ul className="space-y-2">
              {["Free Roof Inspections", "Licensed & Insured", "5-Star Rated Service", "Financing Available"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ),
              )}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link href="/contact">Request Free Inspection</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services" className="group">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Kino Roofing professional team working on a residential roof in Tucson"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
