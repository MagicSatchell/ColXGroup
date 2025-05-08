import type React from "react"
import { cn } from "@/lib/utils"

interface GridSectionProps {
  children: React.ReactNode
  columns?: 1 | 2 | 3 | 4
  gap?: "sm" | "md" | "lg"
  className?: string
}

export function GridSection({ children, columns = 4, gap = "md", className }: GridSectionProps) {
  const gapClasses = {
    sm: "gap-4",
    md: "gap-6 md:gap-8",
    lg: "gap-8 md:gap-12",
  }

  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }

  return <div className={cn("grid", columnClasses[columns], gapClasses[gap], className)}>{children}</div>
}
