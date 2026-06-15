import { Shield, Award, Clock, PenToolIcon as Tool, Users, ThumbsUp } from "lucide-react"

const stats = [
  { value: "500+", label: "Roofs Completed", sub: "Across Southern AZ" },
  { value: "20+", label: "Years in Tucson", sub: "Local expertise" },
  { value: "5★", label: "Google Rating", sub: "Verified reviews" },
  { value: "24hr", label: "Response Time", sub: "Including emergencies" },
]

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured. ROC #123456. Your property and investment are protected.",
  },
  {
    icon: Award,
    title: "Premium Materials Only",
    description: "We source from top-tier manufacturers — no seconds, no substitutions without your sign-off.",
  },
  {
    icon: Clock,
    title: "Fast, Reliable Response",
    description: "Same-day callbacks. Emergency tarping available 24/7 during monsoon season.",
  },
  {
    icon: Tool,
    title: "Expert Craftsmanship",
    description: "Every crew member is trained and tested on Tucson's specific roofing systems and climate demands.",
  },
  {
    icon: Users,
    title: "True Local Knowledge",
    description: "We know Tucson's heat cycles, monsoon patterns, and tile quirks. We've roofed this city for 20 years.",
  },
  {
    icon: ThumbsUp,
    title: "Written Warranty",
    description: "Every job comes with a written warranty on labor — not just manufacturer coverage. We stand behind our work.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-stone-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-stone-200 rounded-2xl p-5 text-center shadow-sm"
            >
              <p className="text-3xl font-bold text-orange-600 mb-1">{stat.value}</p>
              <p className="text-stone-800 font-semibold text-sm">{stat.label}</p>
              <p className="text-stone-400 text-xs mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-stone-900">
            Why Tucson Homeowners Choose AZ Roofing
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            We built our reputation on quality workmanship, honest pricing, and work that holds up under Arizona&apos;s
            most extreme conditions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-stone-200 rounded-2xl p-6 flex gap-4 items-start shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300"
            >
              <div className="bg-orange-50 border border-orange-100 p-3 rounded-xl flex-shrink-0">
                <feature.icon className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-stone-900 font-semibold mb-1.5">{feature.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
