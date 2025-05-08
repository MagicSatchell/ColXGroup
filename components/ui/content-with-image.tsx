import type React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import FadeInSection from "@/components/fade-in-section"

interface ContentWithImageProps {
  image: {
    src: string
    alt: string
  }
  imagePosition?: "left" | "right"
  children: React.ReactNode
  className?: string
  imageClassName?: string
  contentClassName?: string
}

export function ContentWithImage({
  image,
  imagePosition = "left",
  children,
  className,
  imageClassName,
  contentClassName,
}: ContentWithImageProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center", className)}>
      <div className={cn("relative h-64 sm:h-80 md:h-96 lg:h-[400px]", imagePosition === "right" && "md:order-2")}>
        <FadeInSection>
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className={cn("rounded-lg shadow-lg object-cover", imageClassName)}
          />
        </FadeInSection>
      </div>
      <div className={cn(imagePosition === "right" && "md:order-1", contentClassName)}>
        <FadeInSection delay={300}>{children}</FadeInSection>
      </div>
    </div>
  )
}
