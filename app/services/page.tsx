import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import CTASection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Roofing Services in Tucson, AZ",
  description:
    "Comprehensive roofing services for residential and commercial properties in Tucson. Installations, repairs, inspections, and maintenance.",
}

const services = [
  {
    title: "Residential Roofing",
    description: "Expert installation and repair services for all types of residential roofing systems in Tucson.",
    image: "/placeholder.svg?height=300&width=500",
    link: "/services/residential",
    features: ["Shingle Roofing", "Tile Roofing", "Metal Roofing", "Flat Roofing", "Roof Repairs", "Roof Maintenance"],
  },
  {
    title: "Commercial Roofing",
    description: "Comprehensive commercial roofing solutions designed for durability and performance.",
    image: "/placeholder.svg?height=300&width=500",
    link: "/services/commercial",
    features: [
      "TPO Roofing",
      "EPDM Roofing",
      "Modified Bitumen",
      "Metal Roofing",
      "Roof Coatings",
      "Preventative Maintenance",
    ],
  },
  {
    title: "Roof Repairs",
    description: "Fast, reliable roof repair services to fix leaks, damage, and extend the life of your roof.",
    image: "/placeholder.svg?height=300&width=500",
    link: "/services/repairs",
    features: [
      "Leak Repairs",
      "Storm Damage",
      "Shingle Replacement",
      "Flashing Repairs",
      "Gutter Repairs",
      "Emergency Services",
    ],
  },
  {
    title: "Roof Inspections",
    description: "Thorough roof inspections to identify issues before they become costly problems.",
    image: "/placeholder.svg?height=300&width=500",
    link: "/services/inspections",
    features: [
      "Free Estimates",
      "Insurance Inspections",
      "Maintenance Inspections",
      "Pre-Purchase Inspections",
      "Warranty Inspections",
      "Detailed Reports",
    ],
  },
  {
    title: "Metal Roofing",
    description: "Premium metal roofing solutions for durability, energy efficiency, and aesthetic appeal.",
    image: "/placeholder.svg?height=300&width=500",
    link: "/services/metal-roofing",
    features: [
      "Standing Seam",
      "Metal Shingles",
      "Corrugated Metal",
      "Metal Tile",
      "Energy Efficient Options",
      "Long-Term Warranties",
    ],
  },
  {
    title: "Shingle Roofing",
    description: "Quality shingle roofing installation and repair services for residential properties.",
    image: "/placeholder.svg?height=300&width=500",
    link: "/services/shingle-roofing",
    features: [
      "Asphalt Shingles",
      "Architectural Shingles",
      "Designer Shingles",
      "Impact-Resistant Shingles",
      "Energy-Efficient Options",
      "Manufacturer Warranties",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Our Roofing Services</h1>
            <p className="text-lg text-gray-700 mb-8">
              Kino Roofing offers comprehensive roofing services for residential and commercial properties in Tucson and
              surrounding areas. From installations and repairs to inspections and maintenance, our experienced team
              delivers quality workmanship and exceptional service.
            </p>
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link href="/contact">Request a Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link href={service.link} className="flex items-center gap-2 group">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
