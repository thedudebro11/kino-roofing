import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"

const areas = [
  { name: "Tucson", note: "Our home base" },
  { name: "Flowing Wells", note: "NW Tucson" },
  { name: "Catalina Foothills", note: "North Tucson" },
  { name: "Oro Valley", note: "North of Tucson" },
  { name: "Marana", note: "NW metro area" },
  { name: "Vail", note: "SE Tucson" },
  { name: "Sahuarita", note: "South of Tucson" },
  { name: "Green Valley", note: "South metro" },
  { name: "South Tucson", note: "Central metro" },
]

export default function LocalAreas() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-stone-900">Areas We Serve</h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            AZ Roofing covers Tucson and the surrounding communities. If you don&apos;t see your area, contact
            us — we likely service your neighborhood.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area.name}
              href="/contact"
              className="group flex items-center justify-between p-4 rounded-xl border border-stone-200 hover:border-orange-400 hover:bg-orange-50/50 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{area.name}, AZ</p>
                  <p className="text-stone-400 text-xs">{area.note}</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-stone-300 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all duration-200" />
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-stone-500 text-sm">
            Don&apos;t see your area?{" "}
            <Link
              href="/contact"
              className="text-orange-600 hover:text-orange-500 font-medium underline underline-offset-2 transition-colors"
            >
              Contact us — we cover all of Southern Arizona.
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
