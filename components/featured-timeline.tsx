"use client"

import { SectionContainer } from "@/components/ui/section-container"
import Link from "next/link"
import { IconButton } from "@/components/ui/icon-button"
import FadeInSection from "@/components/fade-in-section"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export function FeaturedTimeline() {
  const timelineItems = [
    { year: "1959", label: "Jacobs" },
    { year: "1996", label: "Equita" },
    { year: "1997", label: "Ross & Roberts" },
    { year: "2002", label: "Stirling Park" },
    { year: "2024", label: "ColX Group" },
  ]

  return (
    <SectionContainer className="bg-[#f8f9fa]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FadeInSection>
          <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6">
            <span className="text-[#3CAEA3] font-medium">Our Heritage</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">A Journey of Excellence</h2>
          <p className="text-gray-600 leading-relaxed">
            Spanning over six decades, our rich heritage has shaped us into the industry leader we are today.
          </p>
        </FadeInSection>
      </div>

      <div className="max-w-5xl mx-auto mt-16">
        <FadeInSection>
          <EnhancedTimeline items={timelineItems} />
        </FadeInSection>

        <div className="mt-16 text-center">
          <FadeInSection delay={1000}>
            <Link href="/about/history">
              <IconButton
                icon="ArrowRight"
                variant="outline"
                className="border-[#3CAEA3] text-[#3CAEA3] hover:bg-[#3CAEA3] hover:text-white"
              >
                Explore Our History
              </IconButton>
            </Link>
          </FadeInSection>
        </div>
      </div>
    </SectionContainer>
  )
}

// Enhanced timeline component with slicker animations
function EnhancedTimeline({ items }: { items: { year: string; label: string }[] }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeNodes, setActiveNodes] = useState<boolean[]>(new Array(items.length).fill(false))
  const [lineProgress, setLineProgress] = useState(0)

  useEffect(() => {
    if (inView) {
      // Animate the line first
      const lineAnimation = setTimeout(() => {
        setLineProgress(100)
      }, 500)

      // Then animate each node with a delay
      items.forEach((_, index) => {
        const timeout = setTimeout(
          () => {
            setActiveNodes((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          },
          1000 + index * 400,
        )

        return () => clearTimeout(timeout)
      })

      return () => clearTimeout(lineAnimation)
    }
  }, [inView, items.length])

  return (
    <div ref={ref} className="relative">
      {/* Premium timeline bar with gradient and animated progress */}
      <div className="absolute left-0 right-0 h-3 bg-gray-200 top-1/2 transform -translate-y-1/2 rounded-full shadow-md overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#0d2c4b] via-[#3CAEA3] to-[#0d2c4b] rounded-full transition-all duration-1500 ease-out"
          style={{ width: `${lineProgress}%` }}
        ></div>
      </div>

      {/* Timeline nodes */}
      <div className="relative flex justify-between items-center">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`bg-gradient-to-br from-[#0d2c4b] to-[#164677] text-white rounded-full h-20 w-20 flex items-center justify-center border-4 border-white shadow-lg z-10 transition-all duration-500 ${
                activeNodes[index] ? "opacity-100 scale-100 hover:scale-110" : "opacity-0 scale-50"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="font-bold text-sm">{item.year}</span>
            </div>
            <span
              className={`mt-6 font-medium text-sm md:text-base transition-all duration-500 ${
                activeNodes[index] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              } ${index === 4 ? "text-[#3CAEA3] font-bold" : ""}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
