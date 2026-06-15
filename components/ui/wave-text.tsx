"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface WaveTextProps {
  text: string
  className?: string
}

export function WaveText({ text, className }: WaveTextProps) {
  return (
    <motion.span
      className={cn("inline-block cursor-pointer", className)}
      whileHover="hover"
      initial="initial"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            initial: { y: 0 },
            hover: {
              y: -4,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 12,
                delay: i * 0.03,
              },
            },
          }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default WaveText
