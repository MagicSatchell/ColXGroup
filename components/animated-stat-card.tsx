"use client"

import type React from "react"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CountUpAnimation from "@/components/count-up-animation"

interface AnimatedStatCardProps {
  value: number
  prefix?: string
  suffix?: string
  icon: React.ReactNode
  buttonText: string
}

export default function AnimatedStatCard({ value, prefix = "", suffix = "", icon, buttonText }: AnimatedStatCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Card className="p-6 flex flex-col items-center text-center h-full">
      {icon}
      <div ref={ref} className="text-3xl font-medium text-[#3CAEA3] mb-4 sm:mb-6">
        <CountUpAnimation
          value={value}
          prefix={prefix}
          suffix={suffix}
          className="text-3xl font-medium text-[#3CAEA3]"
        />
      </div>
      <Button
        variant="outline"
        size="sm"
        className="text-[#3CAEA3] border-[#3CAEA3] hover:bg-[#3CAEA3] hover:text-white transition-colors animated-button mt-auto"
      >
        {buttonText}
      </Button>
    </Card>
  )
}
