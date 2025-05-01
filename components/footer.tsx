import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block mb-6">
              <div style={{ width: 150, height: 40, position: 'relative' }}>
                <Image
                  src="/placeholder.svg"
                  alt="Kino Roofing Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>


            </Link>
            <p className="mb-6">
              Providing quality roofing services to Tucson and surrounding areas since 2005. Licensed, bonded, and
              insured.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="hover:text-white" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-white" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Residential Roofing", href: "/services/residential" },
                { name: "Commercial Roofing", href: "/services/commercial" },
                { name: "Roof Repairs", href: "/services/repairs" },
                { name: "Roof Inspections", href: "/services/inspections" },
                { name: "Metal Roofing", href: "/services/metal-roofing" },
                { name: "Shingle Roofing", href: "/services/shingle-roofing" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
                { name: "Free Estimate", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                <span>1234 E Speedway Blvd, Tucson, AZ 85719</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <Link href="tel:5205551234" className="hover:text-white transition-colors">
                  (520) 555-1234
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <Link href="mailto:info@kinoroofing.com" className="hover:text-white transition-colors">
                  info@kinoroofing.com
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <p className="font-medium text-white">Business Hours:</p>
              <p>Monday-Friday: 7am-5pm</p>
              <p>Saturday: 8am-2pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Kino Roofing. All rights reserved. ROC #123456</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
