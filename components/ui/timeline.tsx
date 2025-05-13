import { cn } from "@/lib/utils"
import { Icon, type IconName } from "@/components/ui/icon"
import FadeInSection from "@/components/fade-in-section"

interface TimelineItem {
  year: string
  title: string
  description?: string
  icon?: IconName
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line - more elegant with gradient */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3CAEA3] via-[#3CAEA3] to-[#0d2c4b] transform md:-translate-x-1/2"></div>

      <div className="relative">
        {items.map((item, index) => (
          <div key={index} className="mb-20 last:mb-0">
            <FadeInSection delay={index * 100}>
              <div className={cn("flex flex-col md:flex-row", index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}>
                {/* Date bubble - more premium with gradient */}
                <div className="flex md:w-1/2 md:justify-center relative z-10 pl-8 md:pl-0 mb-4 md:mb-0">
                  <div className="bg-gradient-to-br from-[#0d2c4b] to-[#164677] text-white rounded-full h-20 w-20 flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="font-bold text-lg">{item.year}</span>
                  </div>
                </div>

                {/* Content - more premium styling */}
                <div className="md:w-1/2 pl-16 md:pl-8 md:pr-8">
                  <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#3CAEA3] hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                    {item.description && <p className="text-gray-600 leading-relaxed">{item.description}</p>}

                    {/* Icon - more premium */}
                    {item.icon && (
                      <div className="mt-6 flex justify-end">
                        <div className="w-12 h-12 rounded-full bg-[#3CAEA3]/10 flex items-center justify-center">
                          <Icon name={item.icon} className="text-[#3CAEA3]" size={24} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        ))}
      </div>
    </div>
  )
}
