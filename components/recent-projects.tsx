import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

const projects = [
  {
    title: "Residential Roof Replacement",
    location: "Catalina Foothills, AZ",
    type: "Residential",
    material: "Architectural Shingle",
    problem: "Storm damage, missing shingles, active leak",
    outcome: "Full replacement with 30-year warranty",
    image: "/images/project-residential.jpg",
  },
  {
    title: "Commercial Flat Roof",
    location: "Downtown Tucson, AZ",
    type: "Commercial",
    material: "TPO Membrane",
    problem: "Ponding water, failing seams, interior damage",
    outcome: "New TPO system with improved drainage",
    image: "/images/project-commercial.jpg",
  },
  {
    title: "Standing Seam Metal Roof",
    location: "Oro Valley, AZ",
    type: "Residential",
    material: "Galvalume Steel",
    problem: "Aging tile roof, high cooling costs",
    outcome: "50-year metal roof, reduced energy bills",
    image: "/images/project-metal.jpg",
  },
]

export default function RecentProjects() {
  return (
    <section className="bg-stone-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-stone-900">Recent Projects</h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            A sample of recent work across Tucson and Southern Arizona. Every project includes a written warranty and
            detailed documentation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-semibold text-white bg-orange-600 rounded-full px-3 py-1">
                    {project.type}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-stone-300" />
                  <span className="text-stone-200 text-xs font-medium">{project.location}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-stone-900 font-semibold mb-4">{project.title}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-stone-400">Material</span>
                    <span className="text-stone-700 font-medium">{project.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Problem</span>
                    <span className="text-stone-700 font-medium text-right max-w-[60%]">{project.problem}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Outcome</span>
                    <span className="text-orange-600 font-medium text-right max-w-[60%]">{project.outcome}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-orange-600 hover:bg-orange-500">
            <Link href="/contact" className="flex items-center gap-2 group">
              Get Your Free Quote
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
