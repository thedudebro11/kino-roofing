import Link from "next/link"
import { MapPin } from "lucide-react"

const areas = [
  "Tucson",
  "Flowing Wells",
  "Catalina Foothills",
  "Oro Valley",
  "Marana",
  "Vail",
  "Sahuarita",
  "Green Valley",
  "South Tucson",
]

export default function LocalAreas() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Areas We Serve</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Kino Roofing provides professional roofing services throughout Tucson and the surrounding communities.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area}
              href={`/service-areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-orange-500 hover:bg-white transition-colors"
            >
              <MapPin className="h-5 w-5 text-orange-600" />
              <span className="font-medium">{area}, AZ</span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-700">
            Don&apos;t see your area listed?{" "}
            <Link href="/contact" className="text-orange-600 hover:underline">
              Contact us
            </Link>{" "}
            to see if we service your location.
          </p>
        </div>
      </div>
    </section>
  )
}
