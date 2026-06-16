"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShimmerText } from "@/components/ui/shimmer-text"
import { Phone, ArrowRight, Shield, Star, Clock, Award } from "lucide-react"

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured", sub: "ROC #123456" },
  { icon: Star, label: "5-Star Rated", sub: "Google Reviews" },
  { icon: Clock, label: "Same-Day Response", sub: "Emergency Available" },
  { icon: Award, label: "20+ Years", sub: "Serving Tucson" },
]

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-stone-950 min-h-[620px]">
      {/* Mouse gradient */}
      {mounted && (
        <div
          className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(234,88,12,0.07), transparent 40%)`,
          }}
        />
      )}

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left: Content */}
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-orange-600/15 border border-orange-500/25 rounded-full px-4 py-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse flex-shrink-0" />
              <ShimmerText className="text-orange-400 text-sm font-medium tracking-wide">
                Tucson, AZ · Licensed &amp; Insured
              </ShimmerText>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-bold tracking-tight sm:text-6xl md:text-[4rem] text-white leading-[1.05]"
            >
              <span className="block">Arizona&apos;s</span>
              <span className="block text-orange-500">Roofing</span>
              <span className="block">Authority</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-stone-300 text-lg max-w-md leading-relaxed"
            >
              Residential &amp; commercial roofing across Tucson. Free inspections, fast response,
              and every job backed by a written warranty.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-orange-600 hover:bg-orange-500 text-white text-base px-7 shadow-lg shadow-orange-900/30"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Request Free Inspection
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-stone-600 text-white hover:bg-stone-800 hover:border-stone-500 px-7"
              >
                <a href="tel:5205551234" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (520) 555-1234
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 gap-3 pt-1"
            >
              {trustBadges.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-stone-900/60 border border-stone-800/80 rounded-xl p-3"
                >
                  <Icon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <div>
                    <p className="text-white text-xs font-semibold leading-tight">{label}</p>
                    <p className="text-stone-500 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[520px] rounded-2xl overflow-hidden ring-1 ring-stone-700/40 shadow-2xl shadow-black/50">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/hero-crew.jpg"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/video/hero.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-stone-900/90 backdrop-blur-sm border border-stone-700/50 rounded-xl p-4 flex items-center gap-4">
                <div className="w-11 h-11 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Trusted by Tucson homeowners</p>
                  <p className="text-stone-400 text-xs">500+ roofing projects completed across Southern Arizona</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
