import type { Metadata } from "next"
import Hero from "@/components/hero"
import ServiceHighlights from "@/components/service-highlights"
import PainPoints from "@/components/pain-points"
import WhyChooseUs from "@/components/why-choose-us"
import RecentProjects from "@/components/recent-projects"
import TestimonialSection from "@/components/testimonial-section"
import LocalAreas from "@/components/local-areas"
import CTASection from "@/components/cta-section"
import MobileCtaBar from "@/components/mobile-cta-bar"
import FadeIn from "@/components/fade-in"

export const metadata: Metadata = {
  title: "Professional Roofing Services in Tucson, AZ",
  description:
    "AZ Roofing offers top-quality roofing services in Tucson and surrounding areas. Free inspections, expert installations, and repairs for all roof types.",
}

export default function Home() {
  return (
    <>
      <div className="flex flex-col pb-20 md:pb-0">
        <Hero />
        <FadeIn><ServiceHighlights /></FadeIn>
        <FadeIn><PainPoints /></FadeIn>
        <FadeIn delay={150}><WhyChooseUs /></FadeIn>
        <FadeIn><RecentProjects /></FadeIn>
        <FadeIn delay={150}><TestimonialSection /></FadeIn>
        <FadeIn><LocalAreas /></FadeIn>
        <FadeIn><CTASection /></FadeIn>
      </div>
      <MobileCtaBar />
    </>
  )
}
