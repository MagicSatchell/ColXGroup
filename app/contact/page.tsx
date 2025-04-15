import Image from "next/image"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0d2c4b] text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/colx-desktop-bg.png" alt="Contact Background" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6">Contact</h1>
          <p className="max-w-3xl mx-auto text-gray-300 mb-8">
            Nulla reprehenderit ea amet cillum esse aute qui in nulla quis deserunt. In laborum eiusmod qui magna
            consequat fugiat tempor incididunt incididunt.
          </p>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeInSection>
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
                <h2 className="text-2xl md:text-3xl font-medium mb-6">Make an enquiry</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about our services or would like to explore partnership opportunities,
                  please complete the form below, or contact us directly via email{" "}
                  <a href="mailto:info@colxgroup.com" className="text-[#3CAEA3] hover:underline">
                    info@colxgroup.com
                  </a>
                  .
                </p>
                <form>
                  <div className="mb-4">
                    <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-md" />
                  </div>
                  <div className="mb-4">
                    <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md" />
                  </div>
                  <div className="mb-4">
                    <input
                      type="tel"
                      placeholder="Phone (Optional)"
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      placeholder="Message"
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                  <Button variant="default" className="w-full bg-[#0d2c4b] hover:bg-[#164677] transition-colors">
                    Submit
                  </Button>
                </form>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="h-full min-h-[400px] relative rounded-lg overflow-hidden">
                <Image src="/liverpool-pin.png" alt="Map" fill className="object-cover" />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  )
}
