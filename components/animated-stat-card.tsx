"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AnimatedStatCardProps {
  value: number
  prefix?: string
  suffix?: string
  icon: React.ReactNode
  buttonText: string
}

export default function AnimatedStatCard({ value, prefix = "", suffix = "", icon, buttonText }: AnimatedStatCardProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (!inView) return

    const start = 0
    const duration = 2000 // 2 seconds
    const startTime = performance.now()

    const animateCount = (timestamp: number) => {
      const runtime = timestamp - startTime
      const progress = Math.min(runtime / duration, 1)

      // Easing function for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t)
      const easedProgress = easeOutQuad(progress)

      const currentCount = Math.floor(easedProgress * value)
      setCount(currentCount)

      if (runtime < duration) {
        requestAnimationFrame(animateCount)
      } else {
        setCount(value)
      }
    }

    requestAnimationFrame(animateCount)
  }, [inView, value])

  return (
    <Card className="p-4 sm:p-6 flex flex-col items-center text-center h-full">
      {icon}
      <div ref={ref} className="text-2xl sm:text-3xl font-medium text-[#3CAEA3] mb-4 sm:mb-6">
        {prefix}
        {count}
        {suffix}
      </div>
      <Button
        variant="outline"
        size="sm"
        className="text-[#3CAEA3] border-[#3CAEA3] hover:bg-[#3CAEA3] hover:text-white transition-colors animated-button mt-auto"
      >
        {buttonText}
      </Button>
    </Card>
  )
}
