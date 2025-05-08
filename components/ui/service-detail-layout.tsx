import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { SectionContainer } from "@/components/ui/section-container"
import { IconButton } from "@/components/ui/icon-button"
import { Icon } from "@/components/ui/icon"

interface ServiceDetailLayoutProps {
  title: string
  subtitle: string
  description: string
  image: string
  features: {
    title: string
    description: string
    icon: string
  }[]
  benefits: string[]
  caseStudy?: {
    title: string
    description: string
    client: string
    results: string
    image: string
  }
  children?: React.ReactNode
}

export function ServiceDetailLayout({
  title,
  subtitle,
  description,
  image,
  features,
  benefits,
  caseStudy,
  children,
}: ServiceDetailLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0d2c4b] text-white">
        <div className="absolute inset-0 z-0">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2c4b]/90 to-[#0d2c4b]/70"></div>
        </div>
        <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6">
              <span className="text-[#3CAEA3] font-medium">Services</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-medium mb-6 leading-tight">{title}</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">{subtitle}</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <SectionContainer className="bg-white py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Overview</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>

            <div className="mt-10">
              <Link href="/contact">
                <IconButton
                  icon="ArrowRight"
                  variant="default"
                  className="bg-[#0d2c4b] hover:bg-[#164677] transition-colors animated-button"
                >
                  Discuss Your Requirements
                </IconButton>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg"></div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image src={image || "/placeholder.svg"} alt={title} width={600} height={400} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Key Features */}
      <SectionContainer className="bg-[#f8f9fa] py-24">
        <h2 className="text-3xl md:text-4xl font-medium mb-16 text-center">Key Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#3CAEA3]/10 flex items-center justify-center mb-6">
                <Icon name={feature.icon} className="text-[#3CAEA3] w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer className="bg-white py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/liverpool-waterfront.jpeg" alt="Benefits" fill className="object-cover" />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">Benefits</h2>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[#3CAEA3]/20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Icon name="Check" className="text-[#3CAEA3] w-4 h-4" />
                  </div>
                  <p className="text-gray-600">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Case Study Section */}
      {caseStudy && (
        <SectionContainer className="bg-[#f8f9fa] py-24">
          <h2 className="text-3xl md:text-4xl font-medium mb-16 text-center">Case Study</h2>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-full min-h-[300px]">
                <Image
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-medium mb-4">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-6">{caseStudy.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-500 uppercase mb-2">Client</h4>
                  <p className="text-[#0d2c4b] font-medium">{caseStudy.client}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase mb-2">Results</h4>
                  <p className="text-[#3CAEA3] font-medium">{caseStudy.results}</p>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      )}

      {/* Additional Content */}
      {children}

      {/* Contact Section */}
      <SectionContainer className="bg-[#0d2c4b] text-white py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Contact our team today to discuss how our {title.toLowerCase()} services can help your organization achieve
            its goals.
          </p>
          <Link href="/contact">
            <IconButton
              icon="ArrowRight"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0d2c4b]"
            >
              Contact Us
            </IconButton>
          </Link>
        </div>
      </SectionContainer>
    </main>
  )
}
