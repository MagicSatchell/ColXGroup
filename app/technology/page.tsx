import Image from "next/image"
import Link from "next/link"
import { IconButton } from "@/components/ui/icon-button"
import { Icon } from "@/components/ui/icon"
import { OrbitalTechnologyDisplay } from "@/components/orbital-technology-display"
import FadeInSection from "@/components/fade-in-section"

export default function TechnologyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - More dramatic and premium */}
      <section className="relative bg-[#0d2c4b] text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/colx-desktop-bg.png" alt="Technology Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2c4b]/90 to-[#0d2c4b]/70"></div>
        </div>
        <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6">
              <span className="text-[#3CAEA3] font-medium">Our Technology</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium mb-6 leading-tight">Innovative Solutions</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our suite of proprietary technology solutions powers our operations and delivers exceptional results for
              our clients.
            </p>
          </div>
        </div>
      </section>

      {/* NEW Orbital Technology Display */}
      <OrbitalTechnologyDisplay />

      {/* Technology Products Section - Premium cards with screenshots */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6">
              <span className="text-[#3CAEA3] font-medium">Our Suite</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Comprehensive Technology Portfolio</h2>
            <p className="text-gray-600 leading-relaxed">
              Discover our range of innovative technology solutions designed to enhance efficiency and deliver results.
            </p>
          </div>

          <div className="space-y-32">
            {/* ColXSys One */}
            <FadeInSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg"></div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg"></div>
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/colxsys-one-dashboard.png"
                      alt="ColXSys One Dashboard"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <Image
                      src="/logos/colx-one.svg"
                      alt="ColXSys One logo"
                      width={180}
                      height={48}
                      className="object-contain object-left"
                      style={{ filter: "brightness(0) saturate(100%)" }}
                    />
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    A unified solution integrating all ColXSys services into a single seamless experience. Our platform
                    streamlines operations, enhances collaboration, and provides powerful insights for your business.
                    With an intuitive interface designed for efficiency, ColXSys One helps you manage your entire
                    workflow from a single dashboard.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#3CAEA3]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon name="Check" className="text-[#3CAEA3] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Unified Dashboard</h3>
                        <p className="text-gray-600">Access all your data and tools in one place</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#3CAEA3]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon name="Check" className="text-[#3CAEA3] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Real-time Analytics</h3>
                        <p className="text-gray-600">Make data-driven decisions with instant insights</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#3CAEA3]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon name="Check" className="text-[#3CAEA3] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Seamless Integration</h3>
                        <p className="text-gray-600">Works with your existing systems and workflows</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/technology/colxsys-one">
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
            </FadeInSection>

            {/* ColXSys Visit */}
            <FadeInSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-1 lg:order-2 relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg"></div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg"></div>
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/colxsys-visit-mobile.png"
                      alt="ColXSys Visit Mobile App"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div className="order-2 lg:order-1">
                  <div className="mb-6">
                    <Image
                      src="/logos/colx-visit.svg"
                      alt="ColXSys Visit logo"
                      width={180}
                      height={48}
                      className="object-contain object-left"
                      style={{ filter: "brightness(0) saturate(100%)" }}
                    />
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Manage and optimize on-site visits with ease, ensuring seamless communication and efficiency. Our
                    mobile-first approach allows field agents to access critical information, capture data, and process
                    payments on the go. Real-time synchronization keeps everyone updated and improves customer
                    satisfaction.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#3CAEA3]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon name="Check" className="text-[#3CAEA3] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Mobile-First Design</h3>
                        <p className="text-gray-600">Optimized for field agents on the move</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#3CAEA3]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon name="Check" className="text-[#3CAEA3] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Offline Capabilities</h3>
                        <p className="text-gray-600">Continue working even without internet connection</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#3CAEA3]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon name="Check" className="text-[#3CAEA3] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Secure Payments</h3>
                        <p className="text-gray-600">Process transactions safely on-site</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/technology/colxsys-visit">
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
            </FadeInSection>

            {/* ColXSys Web */}
            <FadeInSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg"></div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg"></div>
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/colxsys-web-interface.png"
                      alt="ColXSys Web Interface"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <Image
                      src="/logos/colx-web.svg"
                      alt="ColXSys Web logo"
                      width={180}
                      height={48}
                      className="object-contain object-left"
                      style={{ filter: "brightness(0) saturate(100%)" }}
                    />
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    A robust web-based platform for managing operations and integrations across devices. Access your
                    operations dashboard from any device with a fully responsive interface that adapts to all screen
                    sizes. With enterprise-grade security and real-time analytics, ColXSys Web empowers your team to
                    make data-driven decisions.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#3CAEA3]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon name="Check" className="text-[#3CAEA3] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Responsive Design</h3>
                        <p className="text-gray-600">Access from any device with optimal viewing experience</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#3CAEA3]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon name="Check" className="text-[#3CAEA3] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Enterprise Security</h3>
                        <p className="text-gray-600">Bank-grade encryption and multi-factor authentication</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#3CAEA3]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon name="Check" className="text-[#3CAEA3] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Advanced Analytics</h3>
                        <p className="text-gray-600">Comprehensive reporting and visualization tools</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/technology/colxsys-web">
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
            </FadeInSection>

            {/* ColXSys Cloud */}
            <FadeInSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-1 lg:order-2 relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg"></div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#3CAEA3]/10 rounded-lg"></div>
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/colxsys-cloud-dashboard.png"
                      alt="ColXSys Cloud Dashboard"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div className="order-2 lg:order-1">
                  <div className="mb-6">
                    <Image
                      src="/logos/colx-cloud.svg"
                      alt="ColXSys Cloud logo"
                      width={180}
                      height={48}
                      className="object-contain object-left"
                      style={{ filter: "brightness(0) saturate(100%)" }}
                    />
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Secure cloud infrastructure that scales with your business needs and ensures data protection. Our
                    cloud-based solution offers unparalleled reliability, automatic backups, and seamless updates
                    without disrupting your operations. Benefit from enterprise-level security protocols and compliance
                    with industry standards.
                  </p>
                  <Link href="/technology/colxsys-cloud">
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
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Premium design */}
      <section className="py-24 bg-[#0d2c4b] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Icon name="Quote" className="w-16 h-16 text-[#3CAEA3] mx-auto" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
              "The ColXSys platform has revolutionized our operations. The intuitive interface and powerful analytics
              have significantly improved our efficiency and decision-making process."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image src="/person-laptop.jpeg" alt="Client" width={64} height={64} className="object-cover" />
              </div>
              <div className="text-left">
                <p className="font-medium">Ben Quinn</p>
                <p className="text-[#3CAEA3]">Chief Technology Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section - Premium design */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6">
                <span className="text-[#3CAEA3] font-medium">Get in Touch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to Transform Your Operations?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Contact our team today to discuss how our technology solutions can help your organization achieve its
                goals. We're committed to delivering solutions that drive results and exceed expectations.
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
