import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/cta-section"
import FadeIn from "@/components/fade-in"

export const metadata: Metadata = {
  title: "About AZ Roofing | Tucson's Trusted Roofing Experts",
  description:
    "Learn about AZ Roofing's history, mission, values, and commitment to quality roofing services in Tucson, AZ and surrounding areas.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="bg-stone-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">About AZ Roofing</h1>
            <p className="text-lg text-stone-700">
              Tucson&apos;s trusted roofing experts since 2005. We&apos;re committed to quality craftsmanship, exceptional
              service, and building lasting relationships with our customers.
            </p>
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/about-team.jpg"
                alt="AZ Roofing team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-stone-700">
                <p>
                  Founded in 2005, AZ Roofing began with a simple mission: to provide Tucson homeowners and businesses
                  with honest, reliable, and high-quality roofing services. Our founder had worked in the roofing
                  industry for over 15 years and saw an opportunity to create a company that truly put customers first.
                </p>
                <p>
                  Starting with just a small team of experienced roofers, we quickly built a reputation for excellence in
                  the Tucson community. Through word-of-mouth referrals and our commitment to quality, we&apos;ve grown to
                  become one of the most trusted roofing companies in Southern Arizona.
                </p>
                <p>
                  Today, AZ Roofing employs a team of skilled professionals who share our dedication to craftsmanship
                  and customer satisfaction. We&apos;ve completed thousands of roofing projects throughout Tucson and
                  surrounding areas, from small residential repairs to large commercial installations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={100}>
        <section className="bg-stone-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-stone-700 max-w-2xl mx-auto">
                These core principles guide everything we do at AZ Roofing.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Quality",
                  description:
                    "We never compromise on quality. From materials to workmanship, we deliver excellence in every project.",
                },
                {
                  title: "Integrity",
                  description:
                    "We operate with honesty and transparency in all our dealings, providing fair pricing and clear communication.",
                },
                {
                  title: "Reliability",
                  description:
                    "When we make a commitment, we keep it. Our customers can count on us to deliver as promised.",
                },
                {
                  title: "Expertise",
                  description:
                    "Our team stays current with the latest roofing techniques and technologies to provide the best solutions.",
                },
                {
                  title: "Community",
                  description:
                    "As a local business, we're committed to supporting and giving back to the Tucson community.",
                },
                {
                  title: "Sustainability",
                  description:
                    "We strive to minimize environmental impact by offering energy-efficient and sustainable roofing options.",
                },
              ].map((value) => (
                <div key={value.title} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-stone-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
              <div className="space-y-4 text-stone-700">
                <p>
                  At AZ Roofing, we understand that your roof is one of the most important components of your home or
                  business. It protects everything beneath it, contributes to energy efficiency, and adds to the overall
                  aesthetic appeal of your property.
                </p>
                <p>
                  That&apos;s why we&apos;re committed to providing roofing solutions that are not only beautiful and functional but
                  also durable and long-lasting. We stand behind our work with strong warranties and ongoing support.
                </p>
                <p>
                  Whether you need a minor repair or a complete roof replacement, our team approaches every project with
                  the same level of dedication and attention to detail. We&apos;re not satisfied until you&apos;re completely happy
                  with the results.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/about-project.jpg"
                alt="AZ Roofing completed project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <CTASection />
      </FadeIn>
    </div>
  )
}
