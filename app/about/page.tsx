import Image from "next/image"
import Link from "next/link"
import { IconButton } from "@/components/ui/icon-button"
import { Icon } from "@/components/ui/icon"
import FadeInSection from "@/components/fade-in-section"
import { CompanyTimeline } from "@/components/company-timeline"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - More dramatic and premium */}
      <section className="relative bg-[#0d2c4b] text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/colx-desktop-bg.png" alt="About Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2c4b]/90 to-[#0d2c4b]/70"></div>
        </div>
        <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6">
              <span className="text-[#3CAEA3] font-medium">About Us</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium mb-6 leading-tight">Our Story</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              At ColXGroup, we bring together the expertise of Jacobs, Equita, Ross & Roberts, and Stirling Park under
              one dynamic umbrella, ensuring a seamless and effective approach to enforcement and debt recovery across
              the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Redefining Enforcement Section - Magazine style layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/liverpool-waterfront.jpeg"
                  alt="Liverpool Waterfront"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6">
                <span className="text-[#3CAEA3] font-medium">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Redefining Enforcement</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                By combining industry-leading systems, local expertise, and a commitment to ethical enforcement,
                ColXGroup provides a truly unique service in today's arena.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether supporting local authorities, commercial landlords, or private parking providers, we provide
                tailored solutions that prioritize efficiency, transparency, and fairness.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#3CAEA3]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name="Check" className="text-[#3CAEA3] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Ethical Approach</h3>
                    <p className="text-gray-600">We prioritize fairness and transparency in all our interactions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#3CAEA3]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name="Check" className="text-[#3CAEA3] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Innovative Technology</h3>
                    <p className="text-gray-600">We leverage cutting-edge solutions to enhance efficiency.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#3CAEA3]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name="Check" className="text-[#3CAEA3] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Expert Team</h3>
                    <p className="text-gray-600">Our specialists bring decades of industry experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Already premium */}
      <CompanyTimeline />

      {/* Stats Section - Premium cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6">
              <span className="text-[#3CAEA3] font-medium">Our Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">By the Numbers</h2>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to excellence has driven significant results across our operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInSection>
              <StatCard
                icon="PoundSterling"
                value="£36M+"
                label="Collections across 2018-2025"
                color="bg-gradient-to-br from-[#3CAEA3] to-[#2d8a80]"
              />
            </FadeInSection>
            <FadeInSection delay={200}>
              <StatCard
                icon="Building2"
                value="4"
                label="Companies across the UK"
                color="bg-gradient-to-br from-[#0d2c4b] to-[#164677]"
              />
            </FadeInSection>
            <FadeInSection delay={400}>
              <StatCard
                icon="FileText"
                value="10+"
                label="Debt collection services"
                color="bg-gradient-to-br from-[#3CAEA3] to-[#2d8a80]"
              />
            </FadeInSection>
            <FadeInSection delay={600}>
              <StatCard
                icon="Laptop"
                value="2"
                label="Industry-leading systems"
                color="bg-gradient-to-br from-[#0d2c4b] to-[#164677]"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Premium design */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <div className="relative rounded-lg overflow-hidden shadow-xl h-full">
                <Image
                  src="/person-laptop.jpeg"
                  alt="Ben Quinn"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2 bg-[#0d2c4b] text-white p-8 md:p-12 rounded-lg shadow-xl">
              <div className="mb-6">
                <Icon name="Quote" className="w-12 h-12 text-[#3CAEA3]" />
              </div>
              <p className="text-xl mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis eros nec diam dictum ultrices ut a
                massa. Vestibulum sed consequat massa, eget fermentum lacus.
              </p>
              <div>
                <p className="font-medium text-lg">Ben Quinn</p>
                <p className="text-[#3CAEA3]">Chief Technology Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section - Premium design */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6">
              <span className="text-[#3CAEA3] font-medium">Our People</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Meet the Leadership Team</h2>
            <p className="text-gray-600 leading-relaxed">
              We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember name="Simon Jacobs BSc" role="Chief Executive Officer" image="/office-meeting.jpeg" delay={0} />
            <TeamMember
              name="Paula Jordan BA (Hons)"
              role="Chief Operations Officer"
              image="/person-laptop.jpeg"
              delay={200}
            />
            <TeamMember
              name="Ben Quinn BSc (Hons)"
              role="Chief Technology Officer"
              image="/person-laptop.jpeg"
              delay={400}
            />
            <TeamMember
              name="Alyn Lewis BPP (Reg)"
              role="Chief Commercial Officer"
              image="/office-meeting.jpeg"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Get in Touch Section - Premium design */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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

            <div>
              <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6">
                <span className="text-[#3CAEA3] font-medium">Get in Touch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to Learn More?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We're here to help. Whether you have questions about our services, need support with enforcement and
                debt recovery, or want to discuss a tailored solution for your organization, our expert team is ready to
                assist.
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

// Team member component
function TeamMember({
  name,
  role,
  image,
  delay = 0,
}: {
  name: string
  role: string
  image: string
  delay?: number
}) {
  return (
    <FadeInSection delay={delay}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-64">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2c4b]/80 to-transparent"></div>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-medium mb-2">{name}</h3>
          <p className="text-[#3CAEA3]">{role}</p>
        </div>
      </div>
    </FadeInSection>
  )
}
