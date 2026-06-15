import Link from "next/link"
import { Droplets, Wind, SquareStack, Search, Wrench, Building2, Zap, Layers } from "lucide-react"

const painPoints = [
  {
    icon: Droplets,
    title: "Roof Leaks",
    desc: "Water stains on your ceiling? We find the source and fix it right — not just patch it.",
  },
  {
    icon: Wind,
    title: "Monsoon & Storm Damage",
    desc: "Tucson storms are brutal on roofs. We respond fast, before water infiltrates your home.",
  },
  {
    icon: SquareStack,
    title: "Cracked or Lifted Tiles",
    desc: "Clay tile shifts with heat cycles. We reseat or replace without disturbing the surrounding field.",
  },
  {
    icon: Droplets,
    title: "Flat Roof Ponding",
    desc: "Standing water accelerates membrane failure. We restore proper drainage and seal seams.",
  },
  {
    icon: Search,
    title: "Pre-Purchase Inspection",
    desc: "Buying or selling a home? Know the roof's true condition before you close.",
  },
  {
    icon: Wrench,
    title: "Missing Shingles",
    desc: "Even a few missing shingles expose your deck to UV and monsoon rain. Fast fix available.",
  },
  {
    icon: Building2,
    title: "Commercial Roof Maintenance",
    desc: "Proactive maintenance extends TPO, modified bitumen, and metal roof life by years.",
  },
  {
    icon: Zap,
    title: "Underlayment Failure",
    desc: "Old felt or synthetic underlayment fails silently. We identify it before it becomes a costly disaster.",
  },
]

export default function PainPoints() {
  return (
    <section className="bg-stone-950 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-600/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-5">
            <Layers className="h-3.5 w-3.5 text-orange-500" />
            <span className="text-orange-400 text-sm font-medium tracking-wide">Sound familiar?</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white mb-4">
            Tucson Roofs Take a Beating
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Between monsoon season, extreme UV, and temperature swings, Southern Arizona is one of the hardest climates
            on roofing systems. We fix what the desert breaks.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="group bg-stone-900 border border-stone-800 hover:border-orange-600/40 rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="bg-orange-600/10 border border-orange-600/20 rounded-lg p-2.5 w-fit mb-4 group-hover:bg-orange-600/20 transition-colors">
                <point.icon className="h-5 w-5 text-orange-500" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm leading-snug">{point.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-stone-500 text-sm">
            Dealing with something else?{" "}
            <Link href="/contact" className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors">
              Describe your issue — we'll diagnose it free.
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
