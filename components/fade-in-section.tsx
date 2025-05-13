"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface FadeInSectionProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  duration?: number
  className?: string
}

export default function FadeInSection({
  children,
  delay = 0,
  direction = "up",
  distance = 30,
  duration = 0.6,
  className = "",
}: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Set visibility based on intersection
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible(true)
            }, delay)
          } else {
            // Animate out when leaving viewport
            setVisible(false)
          }
        })
      },
      {
        threshold: 0.15,
        // Add root margin to trigger exit animation before element fully leaves viewport
        rootMargin: "0px 0px -10% 0px",
      },
    )

    const currentRef = domRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay])

  // Set initial transform based on direction
  let initialTransform = "translate3d(0, 0, 0)"
  if (direction === "up") initialTransform = `translate3d(0, ${distance}px, 0)`
  if (direction === "down") initialTransform = `translate3d(0, -${distance}px, 0)`
  if (direction === "left") initialTransform = `translate3d(${distance}px, 0, 0)`
  if (direction === "right") initialTransform = `translate3d(-${distance}px, 0, 0)`

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate3d(0, 0, 0)" : initialTransform,
    transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
    willChange: "opacity, transform",
  }

  return (
    <div ref={domRef} style={style} className={className}>
      {children}
    </div>
  )
}
