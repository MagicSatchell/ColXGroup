"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface TechItem {
  id: string
  description: string
  logoSrc: string
  videoSrc: string
}

export function TechnologyScroller() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [autoProgress, setAutoProgress] = useState(0)
  const [videosReady, setVideosReady] = useState<boolean[]>([])
  const loadingTimerRef = useRef<NodeJS.Timeout | null>(null)
  const autoTimerRef = useRef<NodeJS.Timeout | null>(null)
  const autoIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const AUTO_TRANSITION_DELAY = 10000 // 10 seconds

  const techItems: TechItem[] = [
    {
      id: "one",
      description: "A unified solution integrating all ColXSys services into a single seamless experience.",
      logoSrc: "/logos/colx-one.svg",
      videoSrc: "/videos/ColxSys_One.mp4",
    },
    {
      id: "visit",
      description: "Manage and optimise on-site visits with ease, ensuring seamless communication and efficiency.",
      logoSrc: "/logos/colx-visit.svg",
      videoSrc: "/videos/ColxSys_Visit.mp4",
    },
    {
      id: "web",
      description: "A robust web-based platform for managing operations and integrations across devices.",
      logoSrc: "/logos/colx-web.svg",
      videoSrc: "/videos/ColxSys_Web.mp4",
    },
    {
      id: "cloud",
      description: "Secure cloud infrastructure that scales with your business needs and ensures data protection.",
      logoSrc: "/logos/colx-cloud.svg",
      videoSrc: "/videos/ColxSys_Cloud.mp4",
    },
    {
      id: "engine",
      description: "Powerful backend systems to drive your business processes with scalability and reliability.",
      logoSrc: "/logos/colx-engine.svg",
      videoSrc: "/videos/ColxSys_Engine.mp4",
    },
  ]

  // Initialize videoRefs array and videosReady state
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, techItems.length)
    setVideosReady(new Array(techItems.length).fill(false))

    // Preload all videos
    techItems.forEach((item, index) => {
      const video = document.createElement("video")
      video.src = item.videoSrc
      video.muted = true
      video.playsInline = true
      video.preload = "auto"

      video.addEventListener("canplaythrough", () => {
        setVideosReady((prev) => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      })

      // Force load
      video.load()
    })
  }, [techItems.length])

  // Auto-transition effect
  useEffect(() => {
    // Start auto-transition timer
    const startAutoTransition = () => {
      // Clear any existing timers
      if (autoIntervalRef.current) clearInterval(autoIntervalRef.current)
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current)

      // Reset progress
      setAutoProgress(0)

      // Start progress animation
      autoIntervalRef.current = setInterval(() => {
        setAutoProgress((prev) => {
          const newProgress = prev + 100 / (AUTO_TRANSITION_DELAY / 100)
          return Math.min(newProgress, 100)
        })
      }, 100)

      // Set timeout for next transition
      autoTimerRef.current = setTimeout(() => {
        const nextIndex = (activeIndex + 1) % techItems.length
        handleItemTransition(nextIndex)
      }, AUTO_TRANSITION_DELAY)
    }

    startAutoTransition()

    // Cleanup function
    return () => {
      if (autoIntervalRef.current) clearInterval(autoIntervalRef.current)
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current)
    }
  }, [activeIndex, techItems.length])

  const handleItemTransition = (index: number) => {
    if (index === activeIndex || isLoading) return

    // Start loading animation
    setIsLoading(true)

    // Pause current video
    if (videoRefs.current[activeIndex]) {
      videoRefs.current[activeIndex]?.pause()
    }

    // Set active index after a short delay
    loadingTimerRef.current = setTimeout(() => {
      setActiveIndex(index)
      setIsLoading(false)

      // Try to play the new video after a short delay to ensure DOM updates
      setTimeout(() => {
        const videoElement = videoRefs.current[index]
        if (videoElement) {
          videoElement.currentTime = 0

          // Make sure video is loaded before playing
          if (videoElement.readyState >= 3) {
            playVideo(videoElement)
          } else {
            videoElement.addEventListener("canplay", () => playVideo(videoElement), { once: true })
            videoElement.load() // Force load
          }
        }
      }, 100)
    }, 500)
  }

  const playVideo = (videoElement: HTMLVideoElement) => {
    const playPromise = videoElement.play()
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Video playback was prevented:", error)
      })
    }
  }

  const handleManualItemClick = (index: number) => {
    // Clear auto-transition timers when user manually clicks
    if (autoIntervalRef.current) clearInterval(autoIntervalRef.current)
    if (autoTimerRef.current) clearTimeout(autoTimerRef.current)

    handleItemTransition(index)
  }

  // Play the initial video when component mounts
  useEffect(() => {
    const initialVideo = videoRefs.current[activeIndex]
    if (initialVideo) {
      // Wait for the video to be ready
      const handleCanPlay = () => {
        playVideo(initialVideo)
        initialVideo.removeEventListener("canplay", handleCanPlay)
      }

      if (initialVideo.readyState >= 3) {
        // Video is already ready to play
        handleCanPlay()
      } else {
        // Wait for the video to be ready
        initialVideo.addEventListener("canplay", handleCanPlay)
        initialVideo.load() // Force load
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
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current)
      if (autoIntervalRef.current) clearInterval(autoIntervalRef.current)
    }
  }, [])

  return (
    <section className="py-16 md:py-24 lg:py-32 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/tech-gradient-bg.png" alt="Technology Background" fill className="object-cover" priority />
      </div>

      {/* Progress bar at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800 z-10">
        <div
          className="h-full bg-[#3CAEA3] transition-all duration-100 ease-linear"
          style={{ width: `${(activeIndex / (techItems.length - 1)) * 100}%` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-medium mb-16 ml-4 md:ml-8 text-white">Our Technology</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {techItems.map((item, index) => (
              <div
                key={item.id}
                className={`cursor-pointer transition-all duration-300 py-2 relative ${
                  activeIndex === index ? "opacity-100" : "opacity-70 hover:opacity-90"
                }`}
                onClick={() => handleManualItemClick(index)}
              >
                {/* Vertical loading bar */}
                {activeIndex === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 h-full bg-gray-700">
                    <div
                      className="absolute left-0 top-0 w-1 bg-[#3CAEA3] transition-all duration-100 ease-linear"
                      style={{ height: `${autoProgress}%` }}
                    ></div>
                  </div>
                )}

                <div className="w-full pl-4">
                  {/* Logo - smaller size */}
                  <div className="mb-2">
                    <div className="h-6 w-auto relative">
                      <Image
                        src={item.logoSrc || "/placeholder.svg"}
                        alt={`ColXSys logo`}
                        width={120}
                        height={24}
                        className="object-contain object-left"
                      />
                    </div>
                  </div>

                  {/* Description - only visible for active item */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeIndex === index ? "max-h-24 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-300 max-w-sm font-normal text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Display */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              {techItems.map((item, index) => (
                <video
                  key={item.id}
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.videoSrc}
                  className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 absolute inset-0 ${
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

              {/* Fallback for videos that fail to load */}
              {!isLoading && !videosReady[activeIndex] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="text-[#3CAEA3] text-lg">Loading video...</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
