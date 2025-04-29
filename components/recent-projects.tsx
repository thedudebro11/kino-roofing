import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Residential Roof Replacement",
    location: "Catalina Foothills, AZ",
    description: "Complete replacement of an aging shingle roof with a new, energy-efficient roofing system.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Commercial Flat Roof Installation",
    location: "Downtown Tucson, AZ",
    description: "Installation of a new TPO roofing system for a commercial building with improved drainage.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Metal Roof Installation",
    location: "Oro Valley, AZ",
    description: "Installation of a standing seam metal roof for enhanced durability and energy efficiency.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function RecentProjects() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Recent Projects</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Take a look at some of our recent roofing projects in the Tucson area. Quality craftsmanship and attention to
          detail are our hallmarks.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="overflow-hidden rounded-lg shadow-md">
            <div className="relative h-64 w-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform hover:scale-105 duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium mb-1">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{project.location}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild className="bg-orange-600 hover:bg-orange-700">
          <Link href="/portfolio" className="flex items-center gap-2 group">
            View All Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
