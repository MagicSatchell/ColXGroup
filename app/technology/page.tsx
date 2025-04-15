import Image from "next/image"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"
import Link from "next/link"
import ProductHeader from "@/components/product-header"

// Custom CSS for black logos
const blackLogoStyle = {
  filter: "brightness(0) saturate(100%)",
}

export default function TechnologyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0d2c4b] text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/colx-desktop-bg.png" alt="Technology Background" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6">Technology</h1>
          <p className="max-w-3xl mx-auto text-gray-300 mb-8">
            Nulla reprehenderit ea amet cillum esse aute qui in nulla quis deserunt. In laborum eiusmod qui magna
            consequat fugiat tempor incididunt incididunt.
          </p>
        </div>
      </section>

      {/* ColXSys Web Header */}
      <ProductHeader
        productName="ColXSys"
        productSubtitle="Web"
        description="A robust web-based platform for managing operations and integrations across devices."
      />

      {/* Technology Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* ColXSys Core */}
          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div className="relative h-64 md:h-80">
                <Image src="/deep-blue-dotscape.png" alt="ColXSys Core" fill className="object-contain" />
              </div>
              <div>
                <div className="mb-6">
                  <div className="h-12 w-auto relative">
                    <Image
                      src="/logos/colx-one.svg"
                      alt="ColXSys One logo"
                      width={180}
                      height={48}
                      className="object-contain object-left"
                      style={blackLogoStyle}
                    />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis eros nec diam dictum ultrices ut
                  a massa.
                </p>
                <p className="text-gray-600">
                  Vestibulum sed consequat massa, eget fermentum lacus. In nec felis pulvinar nulla cursus rutrum.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* ColXSys Visit */}
          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div className="md:order-2 relative h-64 md:h-80">
                <Image src="/sunset-cityscape.png" alt="ColXSys Visit" fill className="object-contain" />
              </div>
              <div className="md:order-1">
                <div className="mb-6">
                  <div className="h-12 w-auto relative">
                    <Image
                      src="/logos/colx-visit.svg"
                      alt="ColXSys Visit logo"
                      width={180}
                      height={48}
                      className="object-contain object-left"
                      style={blackLogoStyle}
                    />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis eros nec diam dictum ultrices ut
                  a massa.
                </p>
                <p className="text-gray-600">
                  Vestibulum sed consequat massa, eget fermentum lacus. In nec felis pulvinar nulla cursus rutrum.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* ColXSys Mobile */}
          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div className="relative h-64 md:h-80">
                <Image src="/minimalist-workspace.png" alt="ColXSys Mobile" fill className="object-contain" />
              </div>
              <div>
                <div className="mb-6">
                  <div className="h-12 w-auto relative">
                    <Image
                      src="/logos/colx-web.svg"
                      alt="ColXSys Web logo"
                      width={180}
                      height={48}
                      className="object-contain object-left"
                      style={blackLogoStyle}
                    />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis eros nec diam dictum ultrices ut
                  a massa.
                </p>
                <p className="text-gray-600">
                  Vestibulum sed consequat massa, eget fermentum lacus. In nec felis pulvinar nulla cursus rutrum.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* ColXSys Cloud */}
          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div className="md:order-2 relative h-64 md:h-80">
                <Image src="/sunset-cityscape-river.png" alt="ColXSys Cloud" fill className="object-contain" />
              </div>
              <div className="md:order-1">
                <div className="mb-6">
                  <div className="h-12 w-auto relative">
                    <Image
                      src="/logos/colx-cloud.svg"
                      alt="ColXSys Cloud logo"
                      width={180}
                      height={48}
                      className="object-contain object-left"
                      style={blackLogoStyle}
                    />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis eros nec diam dictum ultrices ut
                  a massa.
                </p>
                <p className="text-gray-600">
                  Vestibulum sed consequat massa, eget fermentum lacus. In nec felis pulvinar nulla cursus rutrum.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* ColXSys Engine */}
          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-64 md:h-80">
                <Image src="/focused-freelancer.png" alt="ColXSys Engine" fill className="object-contain" />
              </div>
              <div>
                <div className="mb-6">
                  <div className="h-12 w-auto relative">
                    <Image
                      src="/logos/colx-engine.svg"
                      alt="ColXSys Engine logo"
                      width={180}
                      height={48}
                      className="object-contain object-left"
                      style={blackLogoStyle}
                    />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis eros nec diam dictum ultrices ut
                  a massa.
                </p>
                <p className="text-gray-600">
                  Vestibulum sed consequat massa, eget fermentum lacus. In nec felis pulvinar nulla cursus rutrum.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-gray-50">
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

      {/* Get in Touch Section */}
      <section className="py-16 md:py-24">
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
