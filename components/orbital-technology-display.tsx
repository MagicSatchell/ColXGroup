"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"
import Link from "next/link"

// Add this after the imports
const pulseAnimation = `
@keyframes pulse-slow {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.3;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s infinite ease-in-out;
}
`

// Define the technology items with unique icons
const techItems = [
  {
    id: "home",
    name: "ColXSys Home",
    description: "A comprehensive home solution for managing all your ColXSys services in one place.",
    color: "#3CAEA3",
    angle: 0, // Position in degrees around the circle (top)
  },
  {
    id: "cloud",
    name: "ColXSys Cloud",
    description: "Secure cloud infrastructure that scales with your business needs and ensures data protection.",
    color: "#0d2c4b",
    angle: 90, // Position in degrees around the circle (left)
  },
  {
    id: "web",
    name: "ColXSys Web",
    description: "A robust web-based platform for managing operations and integrations across devices.",
    color: "#3CAEA3",
    angle: 180, // Position in degrees around the circle (bottom)
  },
  {
    id: "visit",
    name: "ColXSys Visit",
    description: "Manage and optimise on-site visits with ease, ensuring seamless communication and efficiency.",
    color: "#0d2c4b",
    angle: 270, // Position in degrees around the circle (right)
  },
]

// Define the sequence for the progress bar
const progressSequence = ["visit", "home", "cloud", "web", "visit"]

// SVG icons as React components
const IconComponents = {
  home: () => <img src="/icons/one-logo.svg" alt="ColXSys One" width="100" height="100" />,
  cloud: () => <img src="/icons/cloud-logo.svg" alt="ColXSys Cloud" width="100" height="100" />,
  web: () => <img src="/icons/one-logo.svg" alt="ColXSys Web" width="100" height="100" />,
  visit: () => <img src="/icons/visit-logo.svg" alt="ColXSys Visit" width="100" height="100" />,
  engine: () => <img src="/icons/engine-logo.svg" alt="ColXSys Engine" width="120" height="120" />,
}

// Larger icons for the right panel only
const LargerIconComponents = {
  home: () => <img src="/icons/one-logo.svg" alt="ColXSys One" width="166" height="166" />,
  cloud: () => <img src="/icons/cloud-logo.svg" alt="ColXSys Cloud" width="166" height="166" />,
  web: () => <img src="/icons/one-logo.svg" alt="ColXSys Web" width="166" height="166" />,
  visit: () => <img src="/icons/visit-logo.svg" alt="ColXSys Visit" width="166" height="166" />,
  engine: () => <img src="/icons/engine-logo.svg" alt="ColXSys Engine" width="200" height="200" />,
}

export function OrbitalTechnologyDisplay() {
  // Add this at the beginning of the component
  useEffect(() => {
    // Add the pulse animation to the document
    const styleElement = document.createElement("style")
    styleElement.textContent = pulseAnimation
    document.head.appendChild(styleElement)

    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  const [activeIndex, setActiveIndex] = useState(3) // Start with Visit (index 3)
  const [isAnimating, setIsAnimating] = useState(false)
  const [orbitRotation, setOrbitRotation] = useState(0)
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [highlightedProduct, setHighlightedProduct] = useState<string | null>(techItems[3].id) // Start with Visit
  const [sequenceIndex, setSequenceIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progressPercent, setProgressPercent] = useState(0)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-rotate through products with progress loader in the specified sequence
  useEffect(() => {
    if (isPaused) return

    // Clear any existing intervals and timers
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
    }
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current)
    }

    // Get current product in sequence
    const currentProductId = progressSequence[sequenceIndex]
    const nextSequenceIndex = (sequenceIndex + 1) % progressSequence.length
    const nextProductId = progressSequence[nextSequenceIndex]

    // Find indices for current and next products
    const currentIndex = techItems.findIndex((item) => item.id === currentProductId)
    const nextIndex = techItems.findIndex((item) => item.id === nextProductId)

    // Set the current product as active
    setHighlightedProduct(currentProductId)
    setActiveIndex(currentIndex)

    // Calculate the overall progress percentage based on sequence position
    // Each position represents 25% of the total progress
    const baseProgress = sequenceIndex * 25
    setProgressPercent(baseProgress)

    // Pause at current product for 5 seconds
    pauseTimerRef.current = setTimeout(() => {
      // Start progress animation to next product
      const duration = 2000 // 2 seconds to travel between products
      const interval = 50 // Update every 50ms
      const increment = (interval / duration) * 25 // Each step is 25% of total

      progressIntervalRef.current = setInterval(() => {
        setProgressPercent((prev) => {
          const newProgress = prev + increment
          if (newProgress >= (sequenceIndex + 1) * 25) {
            // When progress reaches next 25% increment, move to next item
            setSequenceIndex(nextSequenceIndex)
            clearInterval(progressIntervalRef.current!)

            // If we've completed the full cycle, reset to 0
            if (nextSequenceIndex === 0) {
              return 0
            }

            return (sequenceIndex + 1) * 25 // Set to exact 25% increment
          }
          return newProgress
        })
      }, interval)
    }, 5000) // 5 second pause

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current)
      }
    }
  }, [sequenceIndex, isPaused])

  // Handle category navigation
  const navigateCategory = (direction: "next" | "prev") => {
    if (isAnimating) return

    setIsAnimating(true)
    const newIndex =
      direction === "next"
        ? (activeIndex + 1) % techItems.length
        : (activeIndex - 1 + techItems.length) % techItems.length

    // Rotate the orbit
    setOrbitRotation(orbitRotation + (direction === "next" ? 90 : -90))

    // Reset progress
    setProgressPercent(0)

    setTimeout(() => {
      setActiveIndex(newIndex)
      setHighlightedProduct(techItems[newIndex].id)

      // Find the index in the sequence
      const newSequenceIndex = progressSequence.findIndex((id) => id === techItems[newIndex].id)
      if (newSequenceIndex !== -1) {
        setSequenceIndex(newSequenceIndex)
      }

      setIsAnimating(false)
    }, 500)
  }

  // Calculate position based on angle - now for a perfect circle
  const getPosition = (angle: number) => {
    // Convert angle to radians and adjust for circular orbit
    const radians = ((angle + orbitRotation) * Math.PI) / 180

    // Same radius for both x and y to create a perfect circle
    const radius = 35 // Keep this at 35 for icon positioning

    // Calculate position on circle
    const left = 50 + radius * Math.cos(radians)
    const top = 50 + radius * Math.sin(radians)

    return { left: `${left}%`, top: `${top}%` }
  }

  // Draw the progress arc using stroke-dasharray and stroke-dashoffset
  const getProgressCircleProps = () => {
    const radius = 30 // Reduced from 35 to make it smaller
    const circumference = 2 * Math.PI * radius

    // Calculate the stroke-dasharray and stroke-dashoffset
    const dashArray = circumference
    const dashOffset = circumference - (progressPercent / 100) * circumference

    return {
      strokeDasharray: dashArray,
      strokeDashoffset: dashOffset,
      radius: radius, // Return the radius for use in the SVG
    }
  }

  // Get the currently highlighted product
  const currentProduct = techItems.find((item) => item.id === highlightedProduct) || techItems[0]

  // Get progress circle properties
  const progressCircleProps = getProgressCircleProps()

  // Get the appropriate icon component
  const getIconComponent = (id: string, larger = false) => {
    if (larger) {
      const LargerIconComponent = LargerIconComponents[id as keyof typeof LargerIconComponents]
      return LargerIconComponent ? <LargerIconComponent /> : null
    } else {
      const IconComponent = IconComponents[id as keyof typeof IconComponents]
      return IconComponent ? <IconComponent /> : null
    }
  }

  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0d1a2d] via-[#0d2c4b] to-[#0d2c4b]/70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Orbital display */}
          <div className="relative h-[500px] md:h-[600px]">
            {/* Circle connecting all icons */}
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] z-0"
              viewBox="0 0 100 100"
            >
              {/* Full circle connecting all icons */}
              <circle
                cx="50"
                cy="50"
                r={progressCircleProps.radius}
                fill="none"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1.5"
              />

              {/* New circle connecting the boxes with 50% opacity */}
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1" />

              {/* Progress circle - using stroke-dasharray and stroke-dashoffset for smooth animation */}
              <circle
                cx="50"
                cy="50"
                r={progressCircleProps.radius}
                fill="none"
                stroke="#3CAEA3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={progressCircleProps.strokeDasharray}
                strokeDashoffset={progressCircleProps.strokeDashoffset}
                transform="rotate(-90 50 50)" // Start from top
                className="transition-all duration-50 ease-linear"
              />
            </svg>

            {/* Center Engine icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="flex flex-col items-center justify-center relative">
                {/* Pulsing circle animation - centered and behind */}
                <div className="absolute w-40 h-40 rounded-full border-2 border-[#3CAEA3]/50 animate-pulse-slow"></div>

                <div className="flex items-center justify-center z-10">
                  <div className="w-32 h-32 relative flex items-center justify-center">
                    {getIconComponent("engine")}
                  </div>
                </div>
              </div>
            </div>

            {/* Technology nodes with titles */}
            <div className="absolute top-0 left-0 w-full h-full">
              {techItems.map((item) => {
                const position = getPosition(item.angle)
                const isHighlighted = highlightedProduct === item.id

                return (
                  <div
                    key={item.id}
                    className="absolute transition-all duration-1000 ease-in-out"
                    style={{
                      top: position.top,
                      left: position.left,
                      transform: `translate(-50%, -50%)`,
                      zIndex: isHighlighted ? 20 : 10,
                    }}
                    onMouseEnter={() => {
                      setActiveNode(item.id)
                      setHighlightedProduct(item.id)
                      setActiveIndex(techItems.findIndex((tech) => tech.id === item.id))
                      setIsPaused(true)
                    }}
                    onMouseLeave={() => {
                      setActiveNode(null)
                      setIsPaused(false)
                    }}
                    onClick={() => {
                      setHighlightedProduct(item.id)
                      setActiveIndex(techItems.findIndex((tech) => tech.id === item.id))

                      // Find the index in the sequence
                      const newSequenceIndex = progressSequence.findIndex((id) => id === item.id)
                      if (newSequenceIndex !== -1) {
                        setSequenceIndex(newSequenceIndex)
                        setProgressPercent(newSequenceIndex * 25) // Set progress to match the position
                      }
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`transition-all duration-500 bg-[#0d2c4b]/80 p-3 border border-[#3CAEA3]/30 ${
                          isHighlighted ? "scale-125 brightness-125" : "scale-100 brightness-75"
                        }`}
                      >
                        {getIconComponent(item.id)}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right side - Product information */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-12">Technology</h2>

            <FadeInSection key={currentProduct.id}>
              <div className="flex items-center mb-6">
                <div className="w-48 h-48 relative flex items-center justify-center">
                  {getIconComponent(currentProduct.id, true)}
                </div>
              </div>

              <p className="text-gray-300 mb-6 text-lg">{currentProduct.description}</p>

              {/* Learn More button moved here and aligned left */}
              <Link
                href={`/technology/${currentProduct.id}`}
                className="inline-block px-6 py-3 bg-[#3CAEA3] hover:bg-[#3CAEA3]/80 rounded-full text-white transition-colors mb-8"
              >
                Learn More
              </Link>

              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={() => navigateCategory("prev")}
                  className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                  disabled={isAnimating}
                  aria-label="Previous product"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={() => navigateCategory("next")}
                  className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                  disabled={isAnimating}
                  aria-label="Next product"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  )
}
