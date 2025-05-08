import Link from "next/link"
import Image from "next/image"
import { NewsScroller } from "@/components/news-scroller"
import { TechnologyScroller } from "@/components/technology-scroller"
import { FeaturedTimeline } from "@/components/featured-timeline"
import { Icon } from "@/components/ui/icon"
import { IconButton } from "@/components/ui/icon-button"
import FadeInSection from "@/components/fade-in-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - More dramatic and premium */}
      <section className="relative bg-[#0d2c4b] text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/colx-desktop-bg.png" alt="Hero Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2c4b]/90 to-[#0d2c4b]/70"></div>
        </div>
        <div className="container mx-auto px-4 py-32 md:py-40 lg:py-48 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6">
              <span className="text-[#3CAEA3] font-medium">Welcome to ColX Group</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium mb-6 leading-tight">
              Collect Smarter.
              <br />
              Not Harder.
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We bring together decades of expertise to deliver innovative enforcement and debt recovery solutions that
              prioritize efficiency, transparency, and fairness.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services">
                <IconButton
                  icon="ArrowRight"
                  variant="default"
                  className="bg-[#3CAEA3] hover:bg-[#2d8a80] text-white border-none"
                >
                  Explore Our Services
                </IconButton>
              </Link>
              <Link href="/about">
                <IconButton
                  icon="Info"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  iconPosition="left"
                >
                  About Us
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Premium cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInSection>
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
                icon="Snowflake"
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

      {/* About Us Section - Magazine style layout */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/sunset-cityscape-river.png"
                  alt="City skyline"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
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
          </div>
        </div>
      </section>

      {/* Featured Timeline Section - More premium */}
      <FeaturedTimeline />

      {/* Technology Section - Already premium */}
      <FadeInSection>
        <TechnologyScroller />
      </FadeInSection>

      {/* Services Highlight Section - New premium section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceHighlight
              title="Council Tax & Non-Domestic Rates"
              icon="Building"
              color="bg-gradient-to-br from-[#3CAEA3] to-[#2d8a80]"
            />
            <ServiceHighlight
              title="Parking & Road Traffic PCN"
              icon="Car"
              color="bg-gradient-to-br from-[#0d2c4b] to-[#164677]"
            />
            <ServiceHighlight
              title="Corporate Debt Recovery"
              icon="BarChart3"
              color="bg-gradient-to-br from-[#3CAEA3] to-[#2d8a80]"
            />
          </div>

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
        </div>
      </section>

      {/* News Section - Already premium */}
      <FadeInSection>
        <NewsScroller />
      </FadeInSection>

      {/* Testimonial Section - New premium section */}
      <section className="py-24 bg-[#0d2c4b] text-white">
        <div className="container mx-auto px-4">
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
        </div>
      </section>

      {/* Contact Section - Premium design */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6">
                <span className="text-[#3CAEA3] font-medium">Get in Touch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to Transform Your Approach?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Contact our team today to discuss how our services can help your organization achieve its goals. We're
                committed to delivering solutions that drive results and exceed expectations.
              </p>
              <Link href="/contact">
                <IconButton
                  icon="ArrowRight"
                  variant="default"
                  className="bg-[#0d2c4b] hover:bg-[#164677] transition-colors"
                >
                  Contact Us
                </IconButton>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/get-in-touch.png"
                  alt="Team collaborating in office"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Premium stat card component
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
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
      <div className={`${color} p-6 flex items-center justify-center`}>
        <Icon name={icon} className="text-white w-10 h-10" />
      </div>
      <div className="p-6 text-center">
        <div className="text-3xl font-medium mb-2">{value}</div>
        <div className="text-gray-600">{label}</div>
      </div>
    </div>
  )
}

// Service highlight component
function ServiceHighlight({
  title,
  icon,
  color,
}: {
  title: string
  icon: string
  color: string
}) {
  return (
    <Link href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
        <div className={`${color} p-6 flex items-center justify-center`}>
          <Icon name={icon} className="text-white w-10 h-10" />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-medium mb-4">{title}</h3>
          <div className="inline-flex items-center text-[#3CAEA3] font-medium">
            Learn more <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
