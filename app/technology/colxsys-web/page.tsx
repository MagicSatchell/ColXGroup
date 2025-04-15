import Image from "next/image"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"
import Link from "next/link"
import ProductHeader from "@/components/product-header"

export default function ColXSysWebPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Product Header */}
      <ProductHeader
        productName="ColXSys"
        productSubtitle="Web"
        description="A robust web-based platform for managing operations and integrations across devices."
      />

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 text-[#3CAEA3] mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Responsive Design</h3>
                <p className="text-gray-600">
                  Access your operations dashboard from any device with a fully responsive interface that adapts to all
                  screen sizes.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 text-[#3CAEA3] mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Enterprise Security</h3>
                <p className="text-gray-600">
                  Bank-grade encryption and multi-factor authentication keep your sensitive data protected at all times.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 text-[#3CAEA3] mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Real-time Analytics</h3>
                <p className="text-gray-600">
                  Monitor performance metrics and KPIs with customizable dashboards that update in real-time.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">See ColXSys Web in Action</h2>
              <p className="text-gray-600 mb-6">
                Watch how our web platform streamlines operations, enhances collaboration, and provides powerful
                insights for your business.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="text-[#3CAEA3] mr-2">✓</div>
                  <span>Intuitive user interface designed for efficiency</span>
                </li>
                <li className="flex items-start">
                  <div className="text-[#3CAEA3] mr-2">✓</div>
                  <span>Seamless integration with other ColXSys products</span>
                </li>
                <li className="flex items-start">
                  <div className="text-[#3CAEA3] mr-2">✓</div>
                  <span>Customizable workflows to match your processes</span>
                </li>
              </ul>
              <Button className="bg-[#3CAEA3] hover:bg-[#2d8a80] text-white">Request a Demo</Button>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <video
                src="/videos/ColxSys_Web.mp4"
                className="w-full h-full object-cover"
                controls
                poster="/colxsys-interface.png"
              />
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
                <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to Get Started?</h2>
                <p className="text-gray-600 mb-6">
                  Contact our team to learn more about ColXSys Web and how it can transform your operations. We offer
                  personalized demos and consultations to help you find the right solution.
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
