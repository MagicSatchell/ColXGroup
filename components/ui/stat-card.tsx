import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import CountUp from "react-countup"
import { Icon, type IconName } from "@/components/ui/icon"

interface StatCardProps {
  icon: IconName
  iconColor?: string
  value: number
  prefix?: string
  suffix?: string
  description: string
  buttonText: string
  className?: string
}

export function StatCard({
  icon,
  iconColor = "text-[#3CAEA3]",
  value,
  prefix = "",
  suffix = "",
  description,
  buttonText,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("p-6 flex flex-col items-center text-center h-full", className)}>
      <div className={cn("w-12 h-12 mb-4", iconColor)}>
        <Icon name={icon} size={48} />
      </div>
      <div className="text-3xl font-medium text-[#0d2c4b] mt-4 mb-2">
        <CountUp start={0} end={value} duration={2} prefix={prefix} suffix={suffix} />
      </div>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Button
        variant="outline"
        className="text-[#3CAEA3] border-[#3CAEA3] hover:bg-[#3CAEA3] hover:text-white transition-colors animated-button mt-auto"
      >
        {buttonText}
      </Button>
    </Card>
  )
}
