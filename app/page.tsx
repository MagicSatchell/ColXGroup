import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import AnimatedStatCard from "@/components/animated-stat-card"
import { NewsScroller } from "@/components/news-scroller"
import { TechnologyScroller } from "@/components/technology-scroller"
import FadeInSection from "@/components/fade-in-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0d2c4b] text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/colx-desktop-bg.png" alt="Background" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32 lg:py-40 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium mb-6">
            Collect Smarter.
            <br className="hidden xs:block" />
            Not Harder.
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8 text-base sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ante nec ante placerat ultricies at
            magna. Vestibulum sed consequat massa, eget fermentum lorem.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <FadeInSection>
              <StatCard icon={<BarChartIcon />} value="€191bn" description="under management" buttonText="About us" />
            </FadeInSection>
            <FadeInSection delay={200}>
              <StatCard
                icon={<LocationIcon />}
                value="30"
                description="global office locations"
                buttonText="Our network"
              />
            </FadeInSection>
            <FadeInSection delay={400}>
              <StatCard
                icon={<SnowflakeIcon />}
                value="7"
                description="world class strategies"
                buttonText="Our strategies"
              />
            </FadeInSection>
            <FadeInSection delay={600}>
              <StatCard
                icon={<MoonIcon />}
                value="130+"
                description="Private Equity portfolio companies"
                buttonText="Our portfolio"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <FadeInSection>
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px]">
                <Image
                  src="/sunset-cityscape-river.png"
                  alt="City skyline"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div>
                <h2 className="text-3xl md:text-4xl font-medium mb-6">About Us</h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ante nec ante placerat ultricies
                  at magna. Vestibulum sed consequat massa, eget fermentum lorem.
                </p>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ante nec ante placerat ultricies
                  at magna. Vestibulum sed consequat massa, eget fermentum lorem.
                </p>
                <Button variant="default" className="bg-[#0d2c4b] hover:bg-[#164677] transition-colors animated-button">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Second Stats Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <FadeInSection>
              <AnimatedStatCard value={140} prefix="£" icon={<PoundIcon />} buttonText="Learn more" />
            </FadeInSection>
            <FadeInSection delay={200}>
              <AnimatedStatCard value={6} icon={<DocumentIcon />} buttonText="Learn more" />
            </FadeInSection>
            <FadeInSection delay={400}>
              <AnimatedStatCard value={200} icon={<GlobeIcon />} buttonText="Learn more" />
            </FadeInSection>
            <FadeInSection delay={600}>
              <AnimatedStatCard value={100} suffix="+" icon={<UsersIcon />} buttonText="Learn more" />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Technology Section - Updated to be a scroller with loading animations */}
      <TechnologyScroller />

      {/* News Section - Replaced with NewsScroller */}
      <FadeInSection>
        <NewsScroller />
      </FadeInSection>

      {/* Contact Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <Image
                src="/get-in-touch.png"
                alt="Team collaborating in office"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </FadeInSection>
            <FadeInSection delay={300}>
              <div>
                <h2 className="text-3xl md:text-4xl font-medium mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ante nec ante placerat ultricies
                  at magna. Vestibulum sed consequat massa, eget fermentum lorem.
                </p>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ante nec ante placerat ultricies
                  at magna. Vestibulum sed consequat massa, eget fermentum lorem.
                </p>
                <Button variant="default" className="bg-[#0d2c4b] hover:bg-[#164677] transition-colors animated-button">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  )
}

function BarChartIcon() {
  return (
    <div className="w-12 h-12 text-[#3CAEA3]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    </div>
  )
}

function LocationIcon() {
  return (
    <div className="w-12 h-12 text-[#3CAEA3]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  )
}

function SnowflakeIcon() {
  return (
    <div className="w-12 h-12 text-[#3CAEA3]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20M17 5l-5-3-5 3M17 19l-5 3-5-3M5 12H2M22 12h-3M19 5l-7 7M19 19l-7-7M5 5l7 7M5 19l7-7"></path>
      </svg>
    </div>
  )
}

function MoonIcon() {
  return (
    <div className="w-12 h-12 text-[#3CAEA3]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </div>
  )
}

function StatCard({
  icon,
  value,
  description,
  buttonText,
}: {
  icon: React.ReactNode
  value: string
  description: string
  buttonText: string
}) {
  return (
    <Card className="p-6 flex flex-col items-center text-center">
      {icon}
      <h3 className="text-3xl font-medium text-[#0d2c4b] mt-4">{value}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button
        variant="outline"
        className="text-[#3CAEA3] border-[#3CAEA3] hover:bg-[#3CAEA3] hover:text-white transition-colors animated-button"
      >
        {buttonText}
      </Button>
    </Card>
  )
}

function PoundIcon() {
  return (
    <div className="w-12 h-12 text-[#3CAEA3] mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h4" />
        <path d="M10 16V8" />
        <path d="M14 12a2 2 0 0 0-4 0v4" />
      </svg>
    </div>
  )
}

function DocumentIcon() {
  return (
    <div className="w-12 h-12 text-[#3CAEA3] mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    </div>
  )
}

function GlobeIcon() {
  return (
    <div className="w-12 h-12 text-[#3CAEA3] mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    </div>
  )
}

function UsersIcon() {
  return (
    <div className="w-12 h-12 text-[#3CAEA3] mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    </div>
  )
}
