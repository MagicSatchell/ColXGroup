import Link from "next/link"
import Image from "next/image"
import { NewsScroller } from "@/components/news-scroller"
import { OrbitalTechnologyDisplay } from "@/components/orbital-technology-display"
import { FeaturedTimeline } from "@/components/featured-timeline"
import { Icon } from "@/components/ui/icon"
import { IconButton } from "@/components/ui/icon-button"
import FadeInSection from "@/components/fade-in-section"
import CountUpAnimation from "@/components/count-up-animation"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - Video background with overlay */}
      <section className="relative bg-[#0d2c4b] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* New video background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
            poster="/colx-desktop-bg.png"
          >
            <source src="/videos/bg.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <Image src="/colx-desktop-bg.png" alt="Hero Background" fill className="object-cover" priority />
          </video>

          {/* Gradient overlay image at 50% opacity */}
          <div className="absolute inset-0 z-1">
            <Image
              src="/images/background-colx.png"
              alt="Background Overlay"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>

          {/* Additional gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2c4b]/70 to-[#0d2c4b]/50 z-2"></div>
        </div>
        <div className="container mx-auto px-4 py-32 md:py-40 lg:py-48 relative z-10">
          <FadeInSection>
            <div className="max-w-3xl">
              <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6 animate-fadeIn">
                <span className="text-[#3CAEA3] font-medium">Welcome to ColX Group</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium mb-6 leading-tight animate-slideInRight">
                Collect Smarter.
                <br />
                Not Harder.
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fadeIn">
                We bring together decades of expertise to deliver innovative enforcement and debt recovery solutions
                that prioritize efficiency, transparency, and fairness.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Stats Section - Premium cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInSection delay={0}>
              <StatCard
                icon="BarChart3"
                value="£191bn"
                label="under management"
                color="bg-gradient-to-br from-[#3CAEA3] to-[#2d8a80]"
              />
            </FadeInSection>
            <FadeInSection delay={200}>
              <StatCard
                icon="MapPin"
                value="30+"
                label="global office locations"
                color="bg-gradient-to-br from-[#0d2c4b] to-[#164677]"
              />
            </FadeInSection>
            <FadeInSection delay={400}>
              <StatCard
                icon="Lightbulb"
                value="7"
                label="world class strategies"
                color="bg-gradient-to-br from-[#3CAEA3] to-[#2d8a80]"
              />
            </FadeInSection>
            <FadeInSection delay={600}>
              <StatCard
                icon="Users"
                value="130+"
                label="Private Equity portfolio companies"
                color="bg-gradient-to-br from-[#0d2c4b] to-[#164677]"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* About Us Section - Full-width image on left with shadow and rounded corners */}
      <section className="py-24 bg-[#f8f9fa] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          <FadeInSection direction="left" duration={0.8} className="h-full px-4 lg:px-8 py-4">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/sunset-cityscape-river.png" alt="City skyline" fill className="object-cover" />
            </div>
          </FadeInSection>

          <FadeInSection direction="right" delay={300} duration={0.8}>
            <div className="px-8 py-16 md:p-16 lg:p-24">
              <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6">
                <span className="text-[#3CAEA3] font-medium">About Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Excellence in Enforcement</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At ColX Group, we bring together the expertise of Jacobs, Equita, Ross & Roberts, and Stirling Park
                under one dynamic umbrella, ensuring a seamless and effective approach to enforcement and debt recovery
                across the UK.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                By combining industry-leading systems, local expertise, and a commitment to ethical enforcement, we
                provide a truly unique service in today's arena.
              </p>
              <Link href="/about">
                <IconButton
                  icon="ArrowRight"
                  variant="default"
                  className="bg-[#0d2c4b] hover:bg-[#164677] transition-colors"
                >
                  Learn More
                </IconButton>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Featured Timeline Section - More premium */}
      <FadeInSection>
        <FeaturedTimeline />
      </FadeInSection>

      {/* NEW Orbital Technology Display - replacing the TechnologyScroller */}
      <OrbitalTechnologyDisplay />

      {/* Services Highlight Section - With images instead of icons */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6">
                <span className="text-[#3CAEA3] font-medium">Our Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Comprehensive Service Portfolio</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer a wide range of enforcement and debt recovery services designed to meet the unique needs of our
                clients across various sectors.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={0}>
              <ServiceHighlightWithImage
                title="Council Tax & Non-Domestic Rates"
                image="/office-meeting.jpeg"
                color="bg-gradient-to-br from-[#3CAEA3] to-[#2d8a80]"
              />
            </FadeInSection>
            <FadeInSection delay={300}>
              <ServiceHighlightWithImage
                title="Parking & Road Traffic PCN"
                image="/liverpool-waterfront.jpeg"
                color="bg-gradient-to-br from-[#0d2c4b] to-[#164677]"
              />
            </FadeInSection>
            <FadeInSection delay={600}>
              <ServiceHighlightWithImage
                title="Corporate Debt Recovery"
                image="/person-laptop.jpeg"
                color="bg-gradient-to-br from-[#3CAEA3] to-[#2d8a80]"
              />
            </FadeInSection>
          </div>

          <FadeInSection delay={900}>
            <div className="text-center mt-12">
              <Link href="/services">
                <IconButton
                  icon="ArrowRight"
                  variant="outline"
                  className="border-[#3CAEA3] text-[#3CAEA3] hover:bg-[#3CAEA3] hover:text-white"
                >
                  View All Services
                </IconButton>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* News Section - Already premium */}
      <FadeInSection>
        <NewsScroller />
      </FadeInSection>

      {/* Testimonial Section - New premium section */}
      <section className="py-24 bg-[#0d2c4b] text-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <Icon name="Quote" className="w-16 h-16 text-[#3CAEA3] mx-auto" />
              </div>
              <blockquote className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
                "ColX Group's approach to enforcement has transformed our debt recovery process. Their ethical practices
                and innovative solutions have delivered exceptional results for our organization."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image src="/person-laptop.jpeg" alt="Client" width={64} height={64} className="object-cover" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-[#3CAEA3]">Financial Director, City Council</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Section - Premium design with enhanced animations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left" distance={50} duration={0.8}>
              <div>
                <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6 animate-pulse">
                  <span className="text-[#3CAEA3] font-medium">Get in Touch</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-medium mb-6 animate-slideInLeft">
                  Ready to Transform Your Approach?
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed animate-fadeIn delay-200">
                  Contact our team today to discuss how our services can help your organization achieve its goals. We're
                  committed to delivering solutions that drive results and exceed expectations.
                </p>
                <Link href="/contact">
                  <IconButton
                    icon="ArrowRight"
                    variant="default"
                    className="bg-[#0d2c4b] hover:bg-[#164677] transition-all duration-500 hover:pl-8 hover:pr-6"
                  >
                    Contact Us
                  </IconButton>
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" distance={50} duration={0.8} delay={300}>
              <div className="relative overflow-hidden transform hover:scale-105 transition-transform duration-700">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg animate-pulse"></div>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/get-in-touch.png"
                    alt="Team collaborating in office"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0d2c4b]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  )
}

// Premium stat card component with count-up animation
function StatCard({
  icon,
  value,
  label,
  color,
}: {
  icon: string
  value: string
  label: string
  color: string
}) {
  // Extract the numeric part and any prefix/suffix
  const numericValue = value.replace(/[^0-9.]/g, "")
  // Ensure we don't duplicate currency symbols
  const prefix = value.startsWith("£") ? "£" : value.split(numericValue)[0]
  const suffix = value.split(numericValue)[1] || ""

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`${color} p-6 flex items-center justify-center`}>
        <Icon name={icon} className="text-white w-10 h-10" />
      </div>
      <div className="p-6 text-center">
        <div className="text-3xl font-medium mb-2">
          {prefix}
          <CountUpAnimation
            value={Number.parseFloat(numericValue)}
            prefix={prefix}
            suffix={suffix}
            className="inline"
          />
        </div>
        <div className="text-gray-600">{label}</div>
      </div>
    </div>
  )
}

// Service highlight component with image instead of icon
function ServiceHighlightWithImage({
  title,
  image,
  color,
}: {
  title: string
  image: string
  color: string
}) {
  return (
    <Link href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
          />
          <div
            className={`absolute inset-0 ${color} opacity-30 hover:opacity-10 transition-opacity duration-300`}
          ></div>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-medium mb-4">{title}</h3>
          <div className="inline-flex items-center text-[#3CAEA3] font-medium group">
            Learn more{" "}
            <Icon
              name="ArrowRight"
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
