import Image from "next/image"
import { cn } from "@/lib/utils"
import FadeInSection from "@/components/fade-in-section"

interface TechProductSectionProps {
  logoSrc: string
  description: string
  imageSrc: string
  imageAlt: string
  imagePosition?: "left" | "right"
  className?: string
}

export function TechProductSection({
  logoSrc,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "left",
  className,
}: TechProductSectionProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center", className)}>
      <div className={cn("relative h-64 sm:h-80 md:h-96", imagePosition === "right" && "md:order-2")}>
        <FadeInSection>
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </FadeInSection>
      </div>
      <div className={cn(imagePosition === "right" && "md:order-1")}>
        <FadeInSection delay={300}>
          <div className="mb-4">
            <div className="h-8 w-auto relative">
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt={`${imageAlt} logo`}
                width={140}
                height={32}
                className="object-contain object-left"
                style={{ filter: "brightness(0) saturate(100%)" }}
              />
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </FadeInSection>
      </div>
    </div>
  )
}
