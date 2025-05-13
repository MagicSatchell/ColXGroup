"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface CountUpAnimationProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
  decimals?: number
}

export default function CountUpAnimation({
  value,
  prefix = "",
  suffix = "",
  duration = 2000,
  className = "",
  decimals = 0,
}: CountUpAnimationProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const startTimeRef = useRef<number | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimatedRef.current) return

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = timestamp - startTimeRef.current

      // Calculate the current count based on progress
      const percentage = Math.min(progress / duration, 1)
      const easedPercentage = easeOutQuad(percentage)
      const currentCount = easedPercentage * value

      setCount(currentCount)

      if (progress < duration) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(value)
        hasAnimatedRef.current = true
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [inView, value, duration])

  // Easing function for smoother animation
  const easeOutQuad = (t: number): number => t * (2 - t)

  // Format the number with the specified number of decimal places
  const formattedCount = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString()

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  )
}
