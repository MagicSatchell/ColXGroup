import Image from "next/image"
import Link from "next/link"
import { SectionContainer } from "@/components/ui/section-container"
import { SectionHeading } from "@/components/ui/section-heading"
import { IconButton } from "@/components/ui/icon-button"
import { Icon } from "@/components/ui/icon"
import FadeInSection from "@/components/fade-in-section"

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - More dramatic with overlay */}
      <section className="relative bg-[#0d2c4b] text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/colx-desktop-bg.png" alt="Services Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2c4b]/90 to-[#0d2c4b]/70"></div>
        </div>
        <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
          <div className="max-w-3xl">
            <h5 className="text-[#3CAEA3] font-medium mb-4 tracking-wider uppercase">Our Services</h5>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium mb-6 leading-tight">
              Exceptional Solutions for Exceptional Results
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We deliver tailored enforcement and debt recovery services that prioritize efficiency, transparency, and
              fairness.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <SectionContainer className="bg-white py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Comprehensive Service Portfolio</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            At ColX Group, we offer a comprehensive range of enforcement and debt recovery services designed to meet the
            unique needs of our clients. Our approach combines industry expertise, innovative technology, and a
            commitment to ethical practices.
          </p>
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-4">
                <Icon name="Shield" className="text-[#3CAEA3] w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium">Ethical Approach</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-4">
                <Icon name="BarChart3" className="text-[#3CAEA3] w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium">Proven Results</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-4">
                <Icon name="Users" className="text-[#3CAEA3] w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium">Client-Focused</h3>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Services Grid - Premium card layout */}
      <SectionContainer className="bg-[#f8f9fa] py-24">
        <SectionHeading
          title="Our Service Portfolio"
          description="Discover our comprehensive range of enforcement and debt recovery services"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
              />
            </FadeInSection>
          ))}
        </div>
      </SectionContainer>

      {/* Approach Section - Magazine style layout */}
      <SectionContainer className="bg-white py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Approach</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe in a collaborative approach that prioritizes communication, transparency, and respect. Our team
              works closely with clients to understand their unique challenges and develop tailored solutions that
              deliver results.
            </p>

            <div className="space-y-6 mt-10">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#f8f9fa] flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon name="CheckCircle" className="text-[#3CAEA3] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Tailored Solutions</h3>
                  <p className="text-gray-600">We customize our approach to meet the specific needs of each client.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#f8f9fa] flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon name="CheckCircle" className="text-[#3CAEA3] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Innovative Technology</h3>
                  <p className="text-gray-600">
                    We leverage cutting-edge technology to enhance efficiency and effectiveness.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#f8f9fa] flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon name="CheckCircle" className="text-[#3CAEA3] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Ethical Practices</h3>
                  <p className="text-gray-600">We adhere to the highest ethical standards in all our interactions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Image src="/office-meeting.jpeg" alt="Our approach" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2c4b]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-2xl font-medium mb-2">Excellence in Enforcement</h3>
                <p className="text-white/80">Our commitment to excellence drives everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Testimonial Section - Premium design */}
      <SectionContainer className="bg-[#0d2c4b] text-white py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Icon name="Quote" className="w-16 h-16 text-[#3CAEA3] mx-auto" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
            "ColX Group's approach to enforcement has transformed our debt recovery process. Their ethical practices and
            innovative solutions have delivered exceptional results for our organization."
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
      </SectionContainer>

      {/* Get in Touch Section - Premium design */}
      <SectionContainer className="bg-white py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to Transform Your Approach?</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Contact our team today to discuss how our services can help your organization achieve its goals. We're
              committed to delivering solutions that drive results and exceed expectations.
            </p>
            <Link href="/contact">
              <IconButton
                icon="ArrowRight"
                variant="default"
                className="bg-[#0d2c4b] hover:bg-[#164677] transition-colors animated-button"
              >
                Get in Touch
              </IconButton>
            </Link>
          </div>
        </div>
      </SectionContainer>

      {/* Service Brochure Download */}
      <SectionContainer className="bg-[#f8f9fa] py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-medium mb-4">Download Our Service Brochure</h2>
          <p className="text-gray-600 mb-8">
            For a detailed overview of our services, download our comprehensive service brochure.
          </p>
          <IconButton
            icon="Download"
            variant="outline"
            className="border-[#3CAEA3] text-[#3CAEA3] hover:bg-[#3CAEA3] hover:text-white"
          >
            Download Brochure (PDF)
          </IconButton>
        </div>
      </SectionContainer>
    </main>
  )
}

// Premium service card component
function ServiceCard({
  title,
  description,
  icon,
  image,
}: {
  title: string
  description: string
  icon: string
  image: string
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2c4b]/80 to-transparent"></div>
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white flex items-center justify-center">
          <Icon name={icon} className="text-[#3CAEA3] w-6 h-6" />
        </div>
      </div>
      <div className="p-8 flex-grow">
        <h3 className="text-xl font-medium mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className="px-8 pb-8">
        <Link
          href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center text-[#3CAEA3] font-medium hover:text-[#2d8a80] transition-colors"
        >
          Learn more <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

// Service data
const services = [
  {
    title: "Council Tax & Non-Domestic Rates",
    description:
      "Our specialist team delivers high compliance collections through dynamic case intelligence and enforcement, ensuring consistent quality and improved collection performance.",
    icon: "Building",
    image: "/office-meeting.jpeg",
  },
  {
    title: "Parking & Road Traffic PCN",
    description:
      "We provide expert parking and Bus Lane PCN collection with tailored compliance-stage collections powered by data intelligence and customer engagement strategies.",
    icon: "Car",
    image: "/liverpool-waterfront.jpeg",
  },
  {
    title: "Corporate Debt Recovery",
    description:
      "Our unified debt recovery strategy offers a single view of the customer to efficiently recover all corporate debts through innovative case and debt management systems.",
    icon: "BarChart3",
    image: "/person-laptop.jpeg",
  },
  {
    title: "High Court Enforcement",
    description:
      "Through our partnership with leading High Court Enforcement Officers, we offer seamless High Court services with a focused approach to effective enforcement.",
    icon: "Scale",
    image: "/liverpool-waterfront.jpeg",
  },
  {
    title: "Commercial Rent Arrears Recovery",
    description:
      "Our team maintains the Landlord and Tenant relationship while recovering outstanding commercial rent arrears using innovative strategies and additional services.",
    icon: "Home",
    image: "/office-meeting.jpeg",
  },
  {
    title: "Customer Welfare",
    description:
      "We are committed to supporting vulnerable customers through effective case management, specialist staff training, and dedicated welfare teams.",
    icon: "Heart",
    image: "/person-laptop.jpeg",
  },
  {
    title: "Insolvency & Bankruptcy",
    description:
      "In partnership with specialist solicitors and Insolvency Practitioners, we provide expert advice on insolvency, bankruptcy, and charging orders.",
    icon: "FileText",
    image: "/office-meeting.jpeg",
  },
  {
    title: "Partnership Working",
    description:
      "We work collaboratively with clients to deliver cost-saving initiatives through system integration, data sharing, and innovative digital self-service solutions.",
    icon: "Users",
    image: "/person-laptop.jpeg",
  },
]
