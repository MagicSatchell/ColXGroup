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
      {/* Vertical line - made thicker and more prominent */}
      <div className="absolute left-8 md:left-1/2 top-6 bottom-6 w-1 bg-[#3CAEA3] transform md:-translate-x-1/2"></div>

      <div className="relative">
        {items.map((item, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <FadeInSection delay={index * 100}>
              <div className={cn("flex flex-col md:flex-row", index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}>
                {/* Date bubble - more prominent */}
                <div className="flex md:w-1/2 md:justify-center relative z-10 pl-8 md:pl-0 mb-4 md:mb-0">
                  <div className="bg-[#0d2c4b] text-white rounded-full h-16 w-16 flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="font-bold text-lg">{item.year}</span>
                  </div>
                </div>

                {/* Content - more distinct styling */}
                <div className="md:w-1/2 pl-16 md:pl-8 md:pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#3CAEA3]">
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    {item.description && <p className="text-gray-600">{item.description}</p>}

                    {/* Icon */}
                    {item.icon && (
                      <div className="mt-4 flex justify-end">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                          <Icon name={item.icon} className="text-[#3CAEA3]" size={20} />
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
