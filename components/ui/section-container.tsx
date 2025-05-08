import type React from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  id?: string
}

export function SectionContainer({ children, className, as: Component = "section", id }: SectionContainerProps) {
  return (
    <Component id={id} className={cn("py-16 md:py-24 lg:py-32 w-full", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </Component>
  )
}
