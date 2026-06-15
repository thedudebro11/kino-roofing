"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ShimmerTextProps {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
}

export function ShimmerText({ children, className, duration = 2, delay = 1 }: ShimmerTextProps) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className={cn("inline-block", className)}
        style={{
          WebkitTextFillColor: "transparent",
          background:
            "linear-gradient(105deg, currentColor 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0.85) 60%, currentColor 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          backgroundRepeat: "no-repeat",
          backgroundSize: "60% 100%",
        } as React.CSSProperties}
        initial={{ backgroundPositionX: "250%" }}
        animate={{ backgroundPositionX: ["-100%", "250%"] }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatDelay: 2.5,
          ease: "linear",
        }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default ShimmerText
