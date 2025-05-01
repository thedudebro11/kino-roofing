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
    default: "Kino Roofing | Professional Roofing Services in Tucson, AZ",
    template: "%s | Kino Roofing",
  },
  description:
    "Kino Roofing provides professional roofing services in Tucson, AZ and surrounding areas. Specializing in residential and commercial roofing, repairs, and installations.",
  keywords: ["Tucson roofing", "roofing services", "metal roofing Tucson", "shingle roofing", "roof repair Tucson"],
  openGraph: {
    title: "Kino Roofing | Professional Roofing Services in Tucson, AZ",
    description:
      "Kino Roofing provides professional roofing services in Tucson, AZ and surrounding areas. Specializing in residential and commercial roofing, repairs, and installations.",
    url: "https://kinoroofing.com",
    siteName: "Kino Roofing",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://kinoroofing.com"),
  generator: 'v0.dev'
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
