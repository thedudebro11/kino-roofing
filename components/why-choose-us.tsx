import { Shield, Award, Clock, PenToolIcon as Tool, Users, ThumbsUp } from "lucide-react"

const features = [
  {
    title: "Licensed & Insured",
    description: "We're fully licensed, bonded, and insured for your protection and peace of mind.",
    icon: Shield,
  },
  {
    title: "Quality Materials",
    description: "We use only premium roofing materials from trusted manufacturers with solid warranties.",
    icon: Award,
  },
  {
    title: "Fast Response",
    description: "Our team responds quickly to all inquiries and emergency roofing needs.",
    icon: Clock,
  },
  {
    title: "Expert Craftsmanship",
    description: "Our skilled roofers have years of experience and training in all roofing systems.",
    icon: Tool,
  },
  {
    title: "Local Experience",
    description: "We understand Tucson's unique climate challenges and how they affect your roof.",
    icon: Users,
  },
  {
    title: "Satisfaction Guaranteed",
    description: "We're not satisfied until you're completely happy with our work.",
    icon: ThumbsUp,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose Kino Roofing</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We've built our reputation on quality workmanship, exceptional customer service, and attention to detail.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="flex gap-4 items-start">
            <div className="bg-orange-100 p-3 rounded-lg">
              <feature.icon className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
