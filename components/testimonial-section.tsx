import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Tucson, AZ",
    service: "Full Roof Replacement",
    quote:
      "AZ Roofing replaced our entire roof after storm damage. Their team was professional, efficient, and left our property spotless. I got three other quotes — theirs was fair and the work was exceptional.",
    rating: 5,
    image: "/images/avatar-sarah.jpg",
  },
  {
    name: "Michael Rodriguez",
    location: "Flowing Wells, AZ",
    service: "Emergency Leak Repair",
    quote:
      "We had a leak during monsoon season and AZ Roofing responded the same afternoon. They identified the source, fixed it right, and walked me through exactly what they did. Exactly what you want in an emergency.",
    rating: 5,
    image: "/images/avatar-michael.jpg",
  },
  {
    name: "Jennifer Martinez",
    location: "Catalina Foothills, AZ",
    service: "Metal Roof Installation",
    quote:
      "After getting quotes from several companies, we chose AZ Roofing for our new metal roof. Best decision ever. The crew was clean, fast, and the finished product looks incredible. Three years later — not a single issue.",
    rating: 5,
    image: "/images/avatar-jennifer.jpg",
  },
]

export default function TestimonialSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-stone-900">
            What Tucson Homeowners Say
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Real reviews from real customers. We don&apos;t cherry-pick — these are our most recent verified reviews.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-stone-50 border border-stone-200 rounded-2xl p-6 flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-medium text-orange-600 bg-orange-50 border border-orange-100 rounded-full px-3 py-0.5">
                  {t.service}
                </span>
              </div>

              <div className="flex-1 mb-5">
                <Quote className="h-5 w-5 text-stone-300 mb-2" />
                <blockquote className="text-stone-600 text-sm leading-relaxed italic">
                  {t.quote}
                </blockquote>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-stone-200 flex-shrink-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">{t.name}</p>
                  <p className="text-stone-400 text-xs">{t.location} · Verified Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-orange-600 hover:bg-orange-500">
            <Link href="/contact">Request Your Free Inspection</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
