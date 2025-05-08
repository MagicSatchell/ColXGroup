import type React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import FadeInSection from "@/components/fade-in-section"

interface HeroSectionProps {
  title: React.ReactNode
  description?: string
  backgroundImage: string
  className?: string
  contentClassName?: string
  children?: React.ReactNode
}

export function HeroSection({
  title,
  description,
  backgroundImage,
  className,
  contentClassName,
  children,
}: HeroSectionProps) {
  return (
    <section className={cn("relative bg-[#0d2c4b] text-white", className)}>
      <div className="absolute inset-0 z-0">
        <Image src={backgroundImage || "/placeholder.svg"} alt="Background" fill className="object-cover" priority />
      </div>
      <div
        className={cn(
          "container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32 lg:py-40 relative z-10 text-center",
          contentClassName,
        )}
      >
        <FadeInSection>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium">{title}</h1>
          {description && (
            <p className="max-w-2xl mx-auto text-gray-300 mb-8 text-base sm:text-lg mt-6">{description}</p>
          )}
          {children}
        </FadeInSection>
      </div>
    </section>
  )
}
