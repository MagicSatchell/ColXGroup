import Image from "next/image"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"
import { Icon } from "@/components/ui/icon"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - More dramatic and premium */}
      <section className="relative bg-[#0d2c4b] text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/colx-desktop-bg.png" alt="Contact Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2c4b]/90 to-[#0d2c4b]/70"></div>
        </div>
        <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6">
              <span className="text-[#3CAEA3] font-medium">Get in Touch</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium mb-6 leading-tight">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're here to help. Reach out to our team for any inquiries about our services or to discuss how we can
              support your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeInSection>
              <div className="bg-[#f8f9fa] p-8 md:p-10 rounded-lg shadow-lg">
                <h2 className="text-3xl font-medium mb-6">Make an Enquiry</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  If you have any questions about our services or would like to explore partnership opportunities,
                  please complete the form below, or contact us directly via email{" "}
                  <a href="mailto:info@colxgroup.com" className="text-[#3CAEA3] hover:underline">
                    info@colxgroup.com
                  </a>
                  .
                </p>
                <form>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3CAEA3] focus:border-transparent"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email address"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3CAEA3] focus:border-transparent"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Your phone number"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3CAEA3] focus:border-transparent"
                    />
                  </div>
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3CAEA3] focus:border-transparent"
                    ></textarea>
                  </div>
                  <Button
                    variant="default"
                    className="w-full bg-[#0d2c4b] hover:bg-[#164677] transition-colors py-3 text-base"
                  >
                    Submit Enquiry
                  </Button>
                </form>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="space-y-8">
                <div className="h-[400px] relative rounded-lg overflow-hidden shadow-lg">
                  <Image src="/map-with-pin.png" alt="Office Location Map" fill className="object-cover" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#3CAEA3]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon name="MapPin" className="text-[#3CAEA3] w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Head Office</h3>
                        <p className="text-gray-600">
                          123 Business Park,
                          <br />
                          Liverpool, L1 1AB
                          <br />
                          United Kingdom
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#3CAEA3]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon name="Phone" className="text-[#3CAEA3] w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Contact Details</h3>
                        <p className="text-gray-600">
                          Phone: +44 (0)151 123 4567
                          <br />
                          Email: info@colxgroup.com
                          <br />
                          Hours: Mon-Fri, 9am-5pm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#3CAEA3]/20 px-4 py-2 rounded-full mb-6">
              <span className="text-[#3CAEA3] font-medium">Our Network</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Regional Offices</h2>
            <p className="text-gray-600 leading-relaxed">
              With offices across the UK, we're well-positioned to serve clients nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium mb-4">London Office</h3>
              <p className="text-gray-600 mb-4">
                456 City Road,
                <br />
                London, EC1V 1AB
                <br />
                United Kingdom
              </p>
              <p className="text-gray-600">
                Phone: +44 (0)20 1234 5678
                <br />
                Email: london@colxgroup.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium mb-4">Manchester Office</h3>
              <p className="text-gray-600 mb-4">
                789 Business Quarter,
                <br />
                Manchester, M1 1CD
                <br />
                United Kingdom
              </p>
              <p className="text-gray-600">
                Phone: +44 (0)161 123 4567
                <br />
                Email: manchester@colxgroup.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium mb-4">Edinburgh Office</h3>
              <p className="text-gray-600 mb-4">
                101 Royal Mile,
                <br />
                Edinburgh, EH1 1TH
                <br />
                United Kingdom
              </p>
              <p className="text-gray-600">
                Phone: +44 (0)131 123 4567
                <br />
                Email: edinburgh@colxgroup.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
