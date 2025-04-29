import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Tucson, AZ",
    quote:
      "Kino Roofing replaced our entire roof after storm damage. Their team was professional, efficient, and left our property spotless. Highly recommend!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Rodriguez",
    location: "Flowing Wells, AZ",
    quote:
      "We had a leak during monsoon season and Kino Roofing responded quickly. They identified the issue and fixed it the same day. Great service!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Jennifer Martinez",
    location: "Catalina Foothills, AZ",
    quote:
      "After getting quotes from several companies, we chose Kino Roofing for our new metal roof. Best decision ever! Quality work at a fair price.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our roofing
            services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="h-full">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6">"{testimonial.quote}"</blockquote>
              </CardContent>
              <CardFooter className="flex items-center gap-4 border-t pt-6">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/testimonials">Read More Testimonials</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
