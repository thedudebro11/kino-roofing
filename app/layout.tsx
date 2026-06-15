import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "AZ Roofing | Professional Roofing Services in Tucson, AZ",
    template: "%s | AZ Roofing",
  },
  description:
    "AZ Roofing provides professional roofing services in Tucson, AZ and surrounding areas. Specializing in residential and commercial roofing, repairs, and installations.",
  keywords: ["Tucson roofing", "roofing services", "metal roofing Tucson", "shingle roofing", "roof repair Tucson"],
  openGraph: {
    title: "AZ Roofing | Professional Roofing Services in Tucson, AZ",
    description:
      "AZ Roofing provides professional roofing services in Tucson, AZ and surrounding areas. Specializing in residential and commercial roofing, repairs, and installations.",
    url: "https://azroofing.com",
    siteName: "AZ Roofing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AZ Roofing — Professional Roofing Services in Tucson, AZ",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://azroofing.com"),
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "AZ Roofing",
  url: "https://azroofing.com",
  telephone: "+15205551234",
  email: "info@azroofing.com",
  description:
    "Professional roofing services for residential and commercial properties in Tucson, AZ and surrounding areas.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1234 E Speedway Blvd",
    addressLocality: "Tucson",
    addressRegion: "AZ",
    postalCode: "85719",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.2226,
    longitude: -110.9747,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Tucson" },
    { "@type": "City", name: "Oro Valley" },
    { "@type": "City", name: "Marana" },
    { "@type": "City", name: "Sahuarita" },
    { "@type": "City", name: "Green Valley" },
  ],
  priceRange: "$$",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          data-domain="kino-roofing.vercel.app"
          src="https://plausible.io/js/script.outbound-links.tagged-events.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`
        window.plausible = window.plausible || function() {
          (window.plausible.q = window.plausible.q || []).push(arguments)
        }
      `}
        </Script>
      </head>

      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:z-50"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
