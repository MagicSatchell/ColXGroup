import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
  align?: "left" | "center" | "right"
  titleClassName?: string
  descriptionClassName?: string
}

export function SectionHeading({
  title,
  description,
  className,
  align = "left",
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center", align === "right" && "text-right", className)}>
      <h2 className={cn("text-3xl md:text-4xl font-medium mb-4", titleClassName)}>{title}</h2>
      {description && (
        <p className={cn("text-gray-600 max-w-3xl", align === "center" && "mx-auto", descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  )
}
