import { SectionContainer } from "@/components/ui/section-container"
import { SectionHeading } from "@/components/ui/section-heading"
import Link from "next/link"
import { IconButton } from "@/components/ui/icon-button"

export function FeaturedTimeline() {
  return (
    <SectionContainer className="bg-[#f8f9fa]">
      <SectionHeading
        title="Our Rich Heritage"
        description="A journey of excellence and innovation spanning over six decades"
        align="center"
      />

      <div className="max-w-5xl mx-auto mt-10">
        <div className="relative">
          {/* Timeline bar */}
          <div className="absolute left-0 right-0 h-2 bg-[#3CAEA3] top-1/2 transform -translate-y-1/2 rounded-full"></div>

          {/* Timeline nodes */}
          <div className="relative flex justify-between items-center">
            {[
              { year: "1959", label: "Jacobs" },
              { year: "1996", label: "Equita" },
              { year: "1997", label: "Ross & Roberts" },
              { year: "2002", label: "Stirling Park" },
              { year: "2024", label: "ColX Group" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-[#0d2c4b] text-white rounded-full h-16 w-16 flex items-center justify-center border-4 border-white shadow-lg z-10">
                  <span className="font-bold text-sm">{item.year}</span>
                </div>
                <span
                  className={`mt-4 font-medium text-sm md:text-base ${index === 4 ? "text-[#3CAEA3] font-bold" : ""}`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/about">
            <IconButton
              icon="ArrowRight"
              variant="outline"
              className="border-[#3CAEA3] text-[#3CAEA3] hover:bg-[#3CAEA3] hover:text-white"
            >
              Explore Our History
            </IconButton>
          </Link>
        </div>
      </div>
    </SectionContainer>
  )
}
