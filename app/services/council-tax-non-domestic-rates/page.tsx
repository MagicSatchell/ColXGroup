import { ServiceDetailLayout } from "@/components/ui/service-detail-layout"

export default function CouncilTaxPage() {
  return (
    <ServiceDetailLayout
      title="Council Tax & Non-Domestic Rates"
      subtitle="Delivering high compliance collections through dynamic case intelligence and enforcement"
      description="Our specialist team provides expert Council Tax and Non-Domestic Rates collection services, offering tailored solutions that ensure consistent quality, exceptional customer service, and improved collection performance year on year. We combine industry expertise with innovative technology to deliver results that exceed expectations."
      image="/office-meeting.jpeg"
      features={[
        {
          title: "Dynamic Case Intelligence",
          description:
            "Our advanced analytics platform provides real-time insights into case status and performance metrics.",
          icon: "BarChart3",
        },
        {
          title: "Specialist Trained Staff",
          description:
            "Our team of highly trained, certified specialists ensures consistent quality and customer service.",
          icon: "Users",
        },
        {
          title: "Innovative Collection Strategies",
          description:
            "We employ cutting-edge strategies to maximize collection rates while maintaining ethical standards.",
          icon: "Lightbulb",
        },
      ]}
      benefits={[
        "Improved collection performance year on year",
        "Reduced administrative burden for local authorities",
        "Enhanced customer experience through clear communication",
        "Comprehensive reporting and analytics",
        "Compliance with all relevant regulations and standards",
        "Flexible approach tailored to local requirements",
      ]}
      caseStudy={{
        title: "Transforming Collection Rates for Metropolitan Council",
        description:
          "We implemented our comprehensive Council Tax collection strategy for a large metropolitan council, resulting in significant improvements in collection rates and customer satisfaction.",
        client: "Metropolitan Council",
        results: "28% increase in collection rates within 12 months",
        image: "/liverpool-waterfront.jpeg",
      }}
    />
  )
}
