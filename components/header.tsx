"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" aria-label="Kino Roofing Home">
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

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link href="/services" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                About Us
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Portfolio
              </Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Testimonials
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">Free Inspection</span>
                <span className="lg:hidden">Call Now</span>
              </Link>
            </Button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] z-50 bg-white md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          <Link
            href="/services"
            className="text-gray-700 hover:text-orange-600 font-medium py-3 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-orange-600 font-medium py-3 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-700 hover:text-orange-600 font-medium py-3 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/testimonials"
            className="text-gray-700 hover:text-orange-600 font-medium py-3 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-orange-600 font-medium py-3 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-orange-600 font-medium py-3 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Button asChild className="bg-orange-600 hover:bg-orange-700 mt-4">
            <Link href="/contact" className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Free Inspection</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
