import type { Metadata } from "next"
import Hero from "@/components/hero"
import ServiceHighlights from "@/components/service-highlights"
import TestimonialSection from "@/components/testimonial-section"
import CTASection from "@/components/cta-section"
import WhyChooseUs from "@/components/why-choose-us"
import RecentProjects from "@/components/recent-projects"
import LocalAreas from "@/components/local-areas"
import ChatbotForm from '@/components/ChatbotForm';

export const metadata: Metadata = {
  title: "Professional Roofing Services in Tucson, AZ",
  description:
    "Kino Roofing offers top-quality roofing services in Tucson and surrounding areas. Free inspections, expert installations, and repairs for all roof types.",
}

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <ServiceHighlights />
      <WhyChooseUs />
      <RecentProjects />
      <TestimonialSection />
      <LocalAreas />
      <CTASection />
      <ChatbotForm />
    </div>
  )
}
