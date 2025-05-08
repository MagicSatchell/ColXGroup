import { cn } from "@/lib/utils"
import * as LucideIcons from "lucide-react"

export type IconName = keyof typeof LucideIcons

interface IconProps {
  name: IconName
  className?: string
  size?: number
  strokeWidth?: number
}

export function Icon({ name, className, size = 24, strokeWidth = 2 }: IconProps) {
  const LucideIcon = LucideIcons[name]

  if (!LucideIcon) {
    console.error(`Icon "${name}" not found in Lucide icons`)
    return null
  }

  return <LucideIcon className={cn("", className)} size={size} strokeWidth={strokeWidth} />
}
