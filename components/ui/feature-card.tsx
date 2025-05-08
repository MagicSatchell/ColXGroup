import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Icon, type IconName } from "@/components/ui/icon"

interface FeatureCardProps {
  icon: IconName
  iconColor?: string
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, iconColor = "text-[#3CAEA3]", title, description, className }: FeatureCardProps) {
  return (
    <Card className={cn("p-6 h-full", className)}>
      <div className="flex flex-col h-full">
        <div className={cn("mb-4", iconColor)}>
          <Icon name={icon} size={48} />
        </div>
        <h3 className="text-xl font-medium mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      </div>
    </Card>
  )
}
