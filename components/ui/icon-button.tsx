"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Icon, type IconName } from "@/components/ui/icon"

interface IconButtonProps {
  icon: IconName
  children?: React.ReactNode
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  iconClassName?: string
  iconPosition?: "left" | "right"
  onClick?: () => void
}

export function IconButton({
  icon,
  children,
  variant = "default",
  size = "default",
  className,
  iconClassName,
  iconPosition = "right",
  onClick,
  ...props
}: IconButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button variant={variant} size={size} className={className} onClick={onClick} {...props}>
      {iconPosition === "left" && <Icon name={icon} className={cn("mr-2 h-4 w-4", iconClassName)} />}
      {children}
      {iconPosition === "right" && <Icon name={icon} className={cn("ml-2 h-4 w-4", iconClassName)} />}
    </Button>
  )
}
