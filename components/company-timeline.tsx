import { SectionContainer } from "@/components/ui/section-container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Timeline } from "@/components/ui/timeline"

export function CompanyTimeline() {
  // Timeline data
  const timelineItems = [
    {
      year: "1959",
      title: "Jacobs",
      description: "Founded as a specialist enforcement agency, setting the foundation for excellence in the industry.",
      icon: "Building",
    },
    {
      year: "1996",
      title: "Equita",
      description: "Established to provide innovative enforcement and debt recovery solutions across the UK.",
      icon: "Scale",
    },
    {
      year: "1997",
      title: "Ross & Roberts",
      description: "Formed to deliver high-quality enforcement services with a focus on ethical practices.",
      icon: "Briefcase",
    },
    {
      year: "2002",
      title: "Stirling Park",
      description: "Created to serve the Scottish market with specialized enforcement expertise.",
      icon: "Landmark",
    },
    {
      year: "2024",
      title: "ColX Group",
      description:
        "Bringing together decades of expertise under one dynamic umbrella to redefine enforcement services.",
      icon: "Network",
    },
  ]

  return (
    <SectionContainer className="bg-gray-50">
      <SectionHeading
        title="Our Journey Through Time"
        description="From our earliest beginnings to the formation of ColX Group, a legacy of excellence spanning over six decades."
        align="center"
      />

      <div className="mt-16 max-w-5xl mx-auto">
        <Timeline items={timelineItems} />
      </div>
    </SectionContainer>
  )
}
