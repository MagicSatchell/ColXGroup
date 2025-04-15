import Image from "next/image"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0d2c4b] text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/colx-desktop-bg.png" alt="Services Background" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6">Services</h1>
          <p className="max-w-3xl mx-auto text-gray-300 mb-8">
            Nulla reprehenderit ea amet cillum esse aute qui in nulla quis deserunt. In laborum eiusmod qui magna
            consequat fugiat tempor incididunt incididunt.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service 1 */}
            <FadeInSection>
              <ServiceCard
                title="Council Tax & Non-Domestic Rates"
                description="Collecting revenues - Jacobs, Equita, Stirling Park, and Ross & Roberts - deliver high compliance collections through dynamic case intelligence and enforcement. With a team of highly trained, certified and specialist trained staff, we ensure consistent quality, customer service, and improved collection performance year on year."
                image="/office-meeting.jpeg"
              />
            </FadeInSection>

            {/* Service 2 */}
            <FadeInSection delay={200}>
              <ServiceCard
                title="Parking & Road Traffic PCN"
                description="Our specialist team provides expert parking and Bus Lane PCN collection, offering tailored compliance-stage collections powered by data intelligence and customer engagement. Persistent nudge strategies, ANPR initiatives, and advanced technology ensure maximum collection effectiveness."
                image="/liverpool-waterfront.jpeg"
              />
            </FadeInSection>

            {/* Service 3 */}
            <FadeInSection delay={300}>
              <ServiceCard
                title="Corporate Debt Recovery"
                description="ColXGroup provides a unified debt recovery strategy that offers a single view of the customer to efficiently recover all corporate debts. Our innovative case and debt management system enables effective customer engagement through telephone, email, SMS, and visits during flexible hours, including weekends."
                image="/person-laptop.jpeg"
              />
            </FadeInSection>

            {/* Service 4 */}
            <FadeInSection delay={400}>
              <ServiceCard
                title="High Court Enforcement"
                description="Through our partnership with leading High Court Enforcement Officers, Wilson & Roe, ColXGroup offers seamless High Court services. These include a focused approach to the effective enforcement of Writs of Control, delivering a high-quality solution for complex cases."
                image="/liverpool-waterfront.jpeg"
              />
            </FadeInSection>

            {/* Service 5 */}
            <FadeInSection delay={500}>
              <ServiceCard
                title="Commercial Rent Arrears Recovery (CRAR)"
                description="Our commercial rent arrears team is Landlord and Tenant relationship is maintained while recovering outstanding commercial rent arrears. Using innovative strategies, we provide additional services, including forfeiture, to return properties to landlords when appropriate."
                image="/office-meeting.jpeg"
              />
            </FadeInSection>

            {/* Service 6 */}
            <FadeInSection delay={600}>
              <ServiceCard
                title="Customer Welfare"
                description="ColXGroup is committed to supporting vulnerable customers through effective case management, specialist staff training, and dedicated welfare teams. Our partnerships with leading debt advice agencies and a robust third-sector protocol reflect our focus on ethical collections."
                image="/person-laptop.jpeg"
              />
            </FadeInSection>

            {/* Service 7 */}
            <FadeInSection delay={700}>
              <ServiceCard
                title="Insolvency / Bankruptcy"
                description="In partnership with Wilkin Chapman Solicitors and Insolvency Practitioners, ColXGroup provides specialist advice on insolvency, bankruptcy, and charging orders. Our comprehensive case intelligence supports councils in resolving complex, large, and charging orders."
                image="/office-meeting.jpeg"
              />
            </FadeInSection>

            {/* Service 8 */}
            <FadeInSection delay={800}>
              <ServiceCard
                title="Partnership Working - Added Value Services"
                description="ColXGroup works collaboratively with clients to deliver cost-saving initiatives through system integration, data sharing, and innovative digital self-service. We also promote measurable social value within local communities, ensuring innovative solutions for our partners."
                image="/person-laptop.jpeg"
              />
            </FadeInSection>

            {/* Service 9 */}
            <FadeInSection delay={900}>
              <ServiceCard
                title="Warrants of Control, Arrest Warrants, Compensation and Confiscation Orders"
                description="ColXGroup is contracted by His Majesty's Courts and Tribunals Service (HMCTS) to enforce financial impositions and Community Penalty Breach Warrants. Our dedicated enforcement officers manage Warrants of Control, Arrest Warrants (Bail, No Bail, Breach), and Compensation and Confiscation Orders with professionalism and efficiency."
                image="/liverpool-waterfront.jpeg"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 md:py-24 bg-gray-50">
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

function ServiceCard({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="w-full md:w-1/3">
        <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="text-xl md:text-2xl font-medium mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
