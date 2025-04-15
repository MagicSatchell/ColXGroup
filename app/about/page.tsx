import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import FadeInSection from "@/components/fade-in-section"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0d2c4b] text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/colx-desktop-bg.png" alt="About Us Background" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6">About Us</h1>
          <p className="max-w-3xl mx-auto text-gray-300 mb-8">
            At ColXGroup, we bring together the expertise of Jacobs, Equita, Ross & Roberts, and Stirling Park under one
            dynamic umbrella, ensuring a seamless and effective approach to enforcement and debt recovery across the UK.
          </p>
        </div>
      </section>

      {/* Redefining Enforcement Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="relative h-80 md:h-96">
                <Image
                  src="/liverpool-waterfront.jpeg"
                  alt="Liverpool Waterfront"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div>
                <h2 className="text-3xl md:text-4xl font-medium mb-6">Redefining Enforcement</h2>
                <p className="text-gray-600 mb-4">
                  By combining industry-leading systems, local expertise, and a commitment to ethical enforcement,
                  ColXGroup provides a truly unique service in today's arena. Whether supporting local authorities,
                  commercial landlords, or private parking providers, we provide tailored solutions that prioritize
                  efficiency, transparency, and fairness.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeInSection>
              <StatCard icon={<PoundIcon />} value="£36M+" description="Collections across 2018-2025" />
            </FadeInSection>
            <FadeInSection delay={200}>
              <StatCard icon={<BuildingIcon />} value="1" description="Companies across the UK" />
            </FadeInSection>
            <FadeInSection delay={400}>
              <StatCard icon={<ServiceIcon />} value="10" description="Debt collection services" />
            </FadeInSection>
            <FadeInSection delay={600}>
              <StatCard icon={<SystemIcon />} value="2" description="Industry-leading systems" />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/3">
              <Image
                src="/person-laptop.jpeg"
                alt="Ben Quinn"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3 bg-[#0d2c4b] text-white p-8 rounded-lg">
              <p className="mb-6 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis eros nec diam dictum ultrices ut a
                massa. Vestibulum sed consequat massa, eget fermentum lacus.
              </p>
              <div>
                <p className="font-medium">Ben Quinn</p>
                <p className="text-sm text-gray-300">Chief Technology Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-center">Meet the Team</h2>
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember name="Simon Jacobs BSc" role="Chief Executive Officer" image="/office-meeting.jpeg" />
            <TeamMember name="Paula Jordan BA (Hons)" role="Chief Operations Officer" image="/person-laptop.jpeg" />
            <TeamMember name="Ben Quinn BSc (Hons)" role="Chief Technology Officer" image="/person-laptop.jpeg" />
            <TeamMember name="Alyn Lewis BPP (Reg)" role="Chief Commercial Officer" image="/office-meeting.jpeg" />
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 md:py-24 bg-gray-50">
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
                <p className="text-gray-600 mb-6">
                  We're here to help. Whether you have questions about our services, need support with enforcement and
                  debt recovery, or want to discuss a tailored solution for your organization, our expert team is ready
                  to assist.
                </p>
                <Link href="/contact">
                  <Button
                    variant="default"
                    className="bg-[#0d2c4b] hover:bg-[#164677] transition-colors animated-button"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
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

function BuildingIcon() {
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
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
      </svg>
    </div>
  )
}

function ServiceIcon() {
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

function SystemIcon() {
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
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    </div>
  )
}

function StatCard({
  icon,
  value,
  description,
}: {
  icon: React.ReactNode
  value: string
  description: string
}) {
  return (
    <Card className="p-6 flex flex-col items-center text-center h-full">
      {icon}
      <h3 className="text-3xl font-medium text-[#0d2c4b] mt-4 mb-2">{value}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  )
}

function TeamMember({
  name,
  role,
  image,
}: {
  name: string
  role: string
  image: string
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-lg">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <h3 className="font-medium text-lg mb-1">{name}</h3>
      <p className="text-gray-600 text-sm">{role}</p>
    </div>
  )
}
