"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import Image from "next/image"

interface TechItem {
  id: string
  name: string
  subtitle: string
  description?: string
  icon: React.ReactNode
  videoSrc: string
}

export function TechnologyScroller() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const loadingTimerRef = useRef<NodeJS.Timeout | null>(null)
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const techItems: TechItem[] = [
    {
      id: "one",
      name: "ColXSys",
      subtitle: "One",
      icon: <OneIcon />,
      videoSrc: "/videos/ColxSys_One.mp4",
    },
    {
      id: "visit",
      name: "ColXSys",
      subtitle: "Visit",
      description: "Manage and optimise on-site visits with ease, ensuring seamless communication and efficiency.",
      icon: <VisitIcon />,
      videoSrc: "/videos/ColxSys_Visit.mp4",
    },
    {
      id: "web",
      name: "ColXSys",
      subtitle: "Web",
      icon: <WebIcon />,
      videoSrc: "/videos/ColxSys_Web.mp4",
    },
    {
      id: "cloud",
      name: "ColXSys",
      subtitle: "Cloud",
      icon: <CloudIcon />,
      videoSrc: "/videos/ColxSys_Cloud.mp4",
    },
    {
      id: "engine",
      name: "ColXSys",
      subtitle: "Engine",
      icon: <EngineIcon />,
      videoSrc: "/videos/ColxSys_Engine.mp4",
    },
  ]

  // Initialize videoRefs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, techItems.length)
  }, [techItems.length])

  const handleItemClick = (index: number) => {
    if (index === activeIndex || isLoading) return

    // Start loading animation
    setIsLoading(true)
    setLoadingProgress(0)

    // Pause current video
    if (videoRefs.current[activeIndex]) {
      videoRefs.current[activeIndex]?.pause()
    }

    // Simulate loading progress
    progressTimerRef.current = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev + 2
        if (newProgress >= 100) {
          if (progressTimerRef.current) clearInterval(progressTimerRef.current)
          return 100
        }
        return newProgress
      })
    }, 20)

    // Set active index after loading completes
    loadingTimerRef.current = setTimeout(() => {
      setActiveIndex(index)
      setIsLoading(false)
      if (progressTimerRef.current) clearInterval(progressTimerRef.current)

      // Try to play the new video after a short delay to ensure DOM updates
      setTimeout(() => {
        const videoElement = videoRefs.current[index]
        if (videoElement) {
          videoElement.currentTime = 0
          const playPromise = videoElement.play()

          // Handle the play promise properly
          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              // Auto-play was prevented, we'll need user interaction
              console.log("Video playback was prevented:", error)
            })
          }
        }
      }, 100)
    }, 1000)
  }

  // Play the initial video when component mounts
  useEffect(() => {
    const initialVideo = videoRefs.current[activeIndex]
    if (initialVideo) {
      // Wait for the video to be ready
      const handleCanPlay = () => {
        const playPromise = initialVideo.play()
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Initial video playback was prevented:", error)
          })
        }
        initialVideo.removeEventListener("canplay", handleCanPlay)
      }

      if (initialVideo.readyState >= 3) {
        // Video is already ready to play
        handleCanPlay()
      } else {
        // Wait for the video to be ready
        initialVideo.addEventListener("canplay", handleCanPlay)
      }
    }

    return () => {
      const video = videoRefs.current[activeIndex]
      if (video) {
        video.removeEventListener("canplay", () => {})
        video.pause()
      }
    }
  }, [activeIndex])

  // Clean up timers
  useEffect(() => {
    return () => {
      if (loadingTimerRef.current) clearTimeout(loadingTimerRef.current)
      if (progressTimerRef.current) clearInterval(progressTimerRef.current)
    }
  }, [])

  return (
    <section className="py-16 md:py-24 lg:py-32 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/tech-gradient-bg.png" alt="Technology Background" fill className="object-cover" priority />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-medium mb-16 ml-4 md:ml-8 text-white">Our Technology</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {techItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-start cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? "opacity-100 scale-105" : "opacity-70 hover:opacity-90"
                }`}
                onClick={() => handleItemClick(index)}
              >
                <div
                  className={`mr-4 text-[#3CAEA3] transition-transform duration-300 ${
                    activeIndex === index ? "scale-110" : ""
                  }`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">{item.name}</h3>
                  <p className="text-[#3CAEA3]">{item.subtitle}</p>
                  {activeIndex === index && item.description && (
                    <p className="text-gray-300 mt-2 max-w-sm">{item.description}</p>
                  )}

                  {/* Loading progress bar - only show when this item is loading */}
                  {isLoading && index === activeIndex && (
                    <div className="mt-3 h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#3CAEA3] transition-all duration-200 ease-out"
                        style={{ width: `${loadingProgress}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Navigation controls */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={() => !isLoading && setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev))}
                disabled={activeIndex === 0 || isLoading}
                className={`p-2 rounded-full border border-[#3CAEA3] ${
                  activeIndex === 0 || isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#3CAEA3]/20"
                }`}
                aria-label="Previous technology"
              >
                <ChevronUp className="w-5 h-5 text-[#3CAEA3]" />
              </button>
              <button
                onClick={() => !isLoading && setActiveIndex((prev) => (prev < techItems.length - 1 ? prev + 1 : prev))}
                disabled={activeIndex === techItems.length - 1 || isLoading}
                className={`p-2 rounded-full border border-[#3CAEA3] ${
                  activeIndex === techItems.length - 1 || isLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#3CAEA3]/20"
                }`}
                aria-label="Next technology"
              >
                <ChevronDown className="w-5 h-5 text-[#3CAEA3]" />
              </button>
            </div>

            {/* Overall progress indicator */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>0{activeIndex + 1}</span>
                <span>0{techItems.length}</span>
              </div>
              <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#3CAEA3] transition-all duration-500 ease-out"
                  style={{ width: `${((activeIndex + 1) / techItems.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Video Display - Frame Removed */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              {techItems.map((item, index) => (
                <video
                  key={item.id}
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.videoSrc}
                  className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
                    activeIndex === index ? (isLoading ? "opacity-50" : "opacity-100") : "opacity-0"
                  }`}
                  muted
                  playsInline
                  loop
                  preload="auto"
                />
              ))}

              {/* Loading overlay */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-[#3CAEA3] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OneIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
      <path d="M20 10V30M10 20H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function VisitIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 32H32V18L20 8L8 18V32Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 32V22H24V32" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

function WebIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 10L15 25L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CloudIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 28C6.68629 28 4 25.3137 4 22C4 18.6863 6.68629 16 10 16C10.3345 16 10.6633 16.0254 10.9841 16.0742C12.0358 12.6142 15.1328 10 18.8889 10C23.3389 10 27 13.6611 27 18.1111C27 18.3921 26.9859 18.6691 26.9585 18.9416C29.8051 19.5433 32 22.0898 32 25.1111C32 28.5549 29.0899 31.3333 25.5 31.3333H10V28Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

function EngineIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="28" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="28" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="28" cy="28" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M16 12H24M12 16V24M28 16V24M16 28H24" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
