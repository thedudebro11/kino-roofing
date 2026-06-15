import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with AZ Roofing for a free roof inspection and estimate in Tucson, AZ and surrounding areas. We respond within 1 business day.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col pb-16">
      <section className="bg-stone-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Contact AZ Roofing
            </h1>
            <p className="text-lg text-stone-700">
              Ready to get started? Fill out the form below and one of our roofing experts will get
              back to you within 1 business day — usually sooner.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
            <p className="text-stone-500 mb-8 text-sm">Fields marked with * are required.</p>
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">Our Office</p>
                    <p className="text-stone-600 mt-0.5">
                      1234 E Speedway Blvd
                      <br />
                      Tucson, AZ 85719
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                    <Phone className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">Phone</p>
                    <a href="tel:5205551234" className="text-orange-600 hover:text-orange-700 mt-0.5 block">
                      (520) 555-1234
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                    <Mail className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">Email</p>
                    <a href="mailto:info@azroofing.com" className="text-orange-600 hover:text-orange-700 mt-0.5 block">
                      info@azroofing.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">Business Hours</p>
                    <p className="text-stone-600 mt-0.5">Monday – Friday: 7am – 5pm</p>
                    <p className="text-stone-600">Saturday: 8am – 2pm</p>
                    <p className="text-stone-600">Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h3 className="font-bold text-stone-900 mb-2">Free Roof Inspection</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Not sure what you need? We offer free, no-obligation roof inspections throughout the
                Tucson area. Fill out the form and we&apos;ll schedule yours at a time that works for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
