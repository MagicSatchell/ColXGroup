"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Eye } from "lucide-react"

// Utility function for conditional class names
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ")
}

interface NewsItem {
  id: number
  image: string
  category: string
  date: string
  title: string
  excerpt: string
  slug: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: "/liverpool-waterfront.jpeg",
    category: "NEWS",
    date: "11 APR 2025",
    title: "Colx Group expands operations in Liverpool",
    excerpt: "New office opening to support growing client base in the North West",
    slug: "/news/colx-group-expands-operations-in-liverpool",
  },
  {
    id: 2,
    image: "/office-meeting.jpeg",
    category: "NEWS",
    date: "07 APR 2025",
    title: "Colx Group and Stirling Park strengthen partnership",
    excerpt: "Strategic alliance aims to enhance collection capabilities across the UK",
    slug: "/news/colx-group-and-stirling-park-strengthen-partnership",
  },
  {
    id: 3,
    image: "/person-laptop.jpeg",
    category: "NEWS",
    date: "01 APR 2025",
    title: "Colx Group launches new digital collection platform",
    excerpt: "Innovative technology set to transform the debt recovery process",
    slug: "/news/colx-group-launches-new-digital-collection-platform",
  },
  {
    id: 4,
    image: "/liverpool-waterfront.jpeg",
    category: "NEWS",
    date: "25 MAR 2025",
    title: "Colx Group reports record collection rates for Q1",
    excerpt: "Company achieves 94% recovery rate across all sectors",
    slug: "/news/colx-group-reports-record-collection-rates-for-q1",
  },
  {
    id: 5,
    image: "/office-meeting.jpeg",
    category: "NEWS",
    date: "18 MAR 2025",
    title: "Colx Group announces new strategic partnership",
    excerpt: "Collaboration set to enhance debt recovery services nationwide",
    slug: "/news/colx-group-announces-new-strategic-partnership",
  },
  {
    id: 6,
    image: "/person-laptop.jpeg",
    category: "NEWS",
    date: "10 MAR 2025",
    title: "Colx Group implements advanced AI collection system",
    excerpt: "New technology improves efficiency and customer experience",
    slug: "/news/colx-group-implements-advanced-ai-collection-system",
  },
  {
    id: 7,
    image: "/liverpool-waterfront.jpeg",
    category: "NEWS",
    date: "03 MAR 2025",
    title: "Colx Group celebrates 15 years of excellence",
    excerpt: "Anniversary marks significant growth and innovation in collections industry",
    slug: "/news/colx-group-celebrates-15-years-of-excellence",
  },
  {
    id: 8,
    image: "/office-meeting.jpeg",
    category: "NEWS",
    date: "25 FEB 2025",
    title: "Colx Group awarded for customer service excellence",
    excerpt: "Recognition highlights commitment to ethical collection practices",
    slug: "/news/colx-group-awarded-for-customer-service-excellence",
  },
  {
    id: 9,
    image: "/person-laptop.jpeg",
    category: "NEWS",
    date: "18 FEB 2025",
    title: "Colx Group expands digital transformation team",
    excerpt: "New hires to accelerate technology-driven collection strategies",
    slug: "/news/colx-group-expands-digital-transformation-team",
  },
  {
    id: 10,
    image: "/liverpool-waterfront.jpeg",
    category: "NEWS",
    date: "10 FEB 2025",
    title: "Colx Group releases annual industry report",
    excerpt: "Comprehensive analysis of collection trends and future outlook",
    slug: "/news/colx-group-releases-annual-industry-report",
  },
]

export function NewsScroller() {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages] = useState(10)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      scrollToPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      scrollToPage(currentPage + 1)
    }
  }

  const scrollToPage = (page: number) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * (page - 1)
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[600px]">
          {/* Left panel with all UI controls */}
          <div className="w-full lg:w-1/3 lg:pr-12 mb-12 lg:mb-0 flex flex-col justify-between">
            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 sm:mb-8">Latest news and insights</h2>
              <p className="text-gray-700 mb-8 sm:mb-12 text-base sm:text-lg">
                The latest news and insights from around the Colx Group network
              </p>
              <Link
                href="/news"
                className="inline-block border border-[#00a67f] text-[#00a67f] rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium hover:bg-[#00a67f]/5 transition-colors animated-button"
              >
                View all media
              </Link>
            </div>

            {/* Navigation controls at the bottom of left panel */}
            <div className="mt-12 sm:mt-20">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="text-sm text-gray-500">
                  SHOWING {currentPage}/{totalPages}
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <button
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    className={cn(
                      "w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center transition-opacity",
                      currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100",
                    )}
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className={cn(
                      "w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center transition-opacity",
                      currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100",
                    )}
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="relative w-full h-0.5 bg-gray-100">
                <div
                  className="absolute h-0.5 bg-[#00a67f] transition-all duration-300"
                  style={{
                    width: `${(1 / totalPages) * 100}%`,
                    left: `${((currentPage - 1) / totalPages) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right panel with scrollable news cards */}
          <div className="w-full lg:w-2/3 relative">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-4 sm:gap-6 md:gap-8 pb-8 sm:pb-12 scrollbar-hide snap-x snap-mandatory h-full"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[260px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] flex-shrink-0 snap-start"
                >
                  <div className="h-48 sm:h-56 md:h-64 lg:h-80 relative mb-4 sm:mb-6 rounded-md overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <span className="inline-block border border-gray-300 text-xs px-2 py-1 rounded mr-2">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6">{item.title}</h3>
                  <Link
                    href={item.slug}
                    className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Read article
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
