import { HeroSection } from "@/components/ui/hero-section"
import { SectionContainer } from "@/components/ui/section-container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Timeline } from "@/components/ui/timeline"
import { IconButton } from "@/components/ui/icon-button"
import Link from "next/link"

export default function HistoryPage() {
  // Detailed timeline data
  const detailedTimelineItems = [
    {
      year: "1959",
      title: "Jacobs Founded",
      description:
        "Established in Liverpool as a specialist enforcement agency, Jacobs began with a small team dedicated to ethical debt recovery practices. The company quickly built a reputation for professionalism and integrity in the industry.",
      icon: "Building",
    },
    {
      year: "1996",
      title: "Equita Established",
      description:
        "Equita was formed to provide innovative enforcement and debt recovery solutions across the UK. With a focus on technology-driven approaches, Equita pioneered new methods for efficient and fair debt collection.",
      icon: "Scale",
    },
    {
      year: "1997",
      title: "Ross & Roberts Formed",
      description:
        "Ross & Roberts was created to deliver high-quality enforcement services with a strong emphasis on ethical practices and customer care. The company specialized in providing tailored solutions for local authorities and businesses.",
      icon: "Briefcase",
    },
    {
      year: "2002",
      title: "Stirling Park Created",
      description:
        "Stirling Park was established to serve the Scottish market with specialized enforcement expertise. The company brought together experienced professionals with deep knowledge of Scottish law and debt recovery procedures.",
      icon: "Landmark",
    },
    {
      year: "2010",
      title: "Digital Transformation",
      description:
        "All companies began significant digital transformation initiatives, investing in advanced technology platforms to enhance service delivery and improve customer experiences.",
      icon: "Laptop",
    },
    {
      year: "2015",
      title: "Expansion of Services",
      description:
        "The companies expanded their service offerings to include comprehensive debt management solutions, addressing the evolving needs of clients across various sectors.",
      icon: "BarChart",
    },
    {
      year: "2020",
      title: "Pandemic Response",
      description:
        "During the global pandemic, the companies demonstrated resilience and adaptability, implementing innovative approaches to support clients and debtors through challenging times.",
      icon: "Shield",
    },
    {
      year: "2024",
      title: "ColX Group Formation",
      description:
        "The formation of ColX Group brought together decades of expertise under one dynamic umbrella, creating a powerful force in the enforcement and debt recovery industry. This strategic merger combines the strengths of Jacobs, Equita, Ross & Roberts, and Stirling Park to deliver unparalleled service across the UK.",
      icon: "Network",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Our History"
        description="Tracing the journey of excellence and innovation that led to the formation of ColX Group."
        backgroundImage="/colx-desktop-bg.png"
      />

      {/* Detailed Timeline */}
      <SectionContainer>
        <SectionHeading
          title="A Legacy of Excellence"
          description="From humble beginnings to industry leadership, our history reflects our commitment to innovation and ethical practices in enforcement and debt recovery."
          align="center"
        />
        <Timeline items={detailedTimelineItems} className="mt-16" />

        <div className="mt-16 text-center">
          <Link href="/about">
            <IconButton
              icon="ArrowLeft"
              iconPosition="left"
              variant="outline"
              className="border-[#3CAEA3] text-[#3CAEA3] hover:bg-[#3CAEA3] hover:text-white"
            >
              Back to About Us
            </IconButton>
          </Link>
        </div>
      </SectionContainer>
    </main>
  )
}
