"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface FadeInSectionProps {
  children: React.ReactNode
  delay?: number
}

export default function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible(true)
            }, delay)
            if (domRef.current) observer.unobserve(domRef.current)
          }
        })
      },
      { threshold: 0.15 },
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

  return (
    <div ref={domRef} className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
      {children}
    </div>
  )
}
