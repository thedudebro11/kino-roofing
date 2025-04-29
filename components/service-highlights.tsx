import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Residential Roofing",
    description: "Expert installation and repair services for all types of residential roofing systems in Tucson.",
    image: "/placeholder.svg?height=200&width=300",
    link: "/services/residential",
  },
  {
    title: "Commercial Roofing",
    description: "Comprehensive commercial roofing solutions designed for durability and performance.",
    image: "/placeholder.svg?height=200&width=300",
    link: "/services/commercial",
  },
  {
    title: "Roof Repairs",
    description: "Fast, reliable roof repair services to fix leaks, damage, and extend the life of your roof.",
    image: "/placeholder.svg?height=200&width=300",
    link: "/services/repairs",
  },
  {
    title: "Roof Inspections",
    description: "Thorough roof inspections to identify issues before they become costly problems.",
    image: "/placeholder.svg?height=200&width=300",
    link: "/services/inspections",
  },
]

export default function ServiceHighlights() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Roofing Services</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We offer a complete range of roofing services for residential and commercial properties in Tucson and
          surrounding areas.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Card key={service.title} className="overflow-hidden transition-all hover:shadow-lg">
            <div className="relative h-48 w-full">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700 text-base">{service.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="p-0 h-auto text-orange-600 hover:text-orange-700">
                <Link href={service.link} className="flex items-center gap-2 group">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild className="bg-orange-600 hover:bg-orange-700">
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    </section>
  )
}
