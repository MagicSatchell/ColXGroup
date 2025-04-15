import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import FadeInSection from "@/components/fade-in-section"
import { Eye } from "lucide-react"

export default function NewsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0d2c4b] text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/colx-desktop-bg.png" alt="News Background" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6">News</h1>
          <p className="max-w-3xl mx-auto text-gray-300 mb-8">
            Stay up to date with the latest news, insights, and updates from ColX Group.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection>
              <NewsCard
                title="The Role of AI in Debt Collection"
                excerpt="The Role of AI in Debt Collection"
                image="/liverpool-waterfront.jpeg"
                date="May 2025"
                category="Technology"
                slug="/news/role-of-ai-in-debt-collection"
              />
            </FadeInSection>

            <FadeInSection delay={200}>
              <NewsCard
                title="Digital Payment Trends in Debt Collection"
                excerpt="Digital Payment Trends in Debt Collection"
                image="/office-meeting.jpeg"
                date="June 2025"
                category="Technology"
                slug="/news/digital-payment-trends-in-debt-collection"
              />
            </FadeInSection>

            <FadeInSection delay={400}>
              <NewsCard
                title="Technology Predictions for 2025"
                excerpt="Enforcement Technology Predictions for 2025"
                image="/person-laptop.jpeg"
                date="February 2025"
                category="Technology"
                slug="/news/technology-predictions-for-2025"
              />
            </FadeInSection>

            <FadeInSection delay={600}>
              <NewsCard
                title="Ethical Debt Collection Practices in 2025"
                excerpt="Ethical Debt Collection Practices in 2025"
                image="/liverpool-waterfront.jpeg"
                date="July 2025"
                category="Best Practices"
                slug="/news/ethical-debt-collection-practices-in-2025"
              />
            </FadeInSection>

            <FadeInSection delay={800}>
              <NewsCard
                title="Maximising debt recovery"
                excerpt="Maximising Debt Recovery in 2025"
                image="/office-meeting.jpeg"
                date="April 2025"
                category="Business"
                slug="/news/maximising-debt-recovery"
              />
            </FadeInSection>

            <FadeInSection delay={1000}>
              <NewsCard
                title="Welcome to ColXGroup"
                excerpt="Welcome to ColXGroup: Strength Through Collaboration in Enforcement and Debt Recovery"
                image="/person-laptop.jpeg"
                date="January 2025"
                category="Company News"
                slug="/news/welcome-to-colxgroup"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Subscribe to our newsletter</h2>
            <p className="text-gray-600 mb-8">
              Stay updated with the latest news, industry insights, and company updates from ColX Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow p-3 border border-gray-300 rounded-md"
              />
              <Button variant="default" className="bg-[#0d2c4b] hover:bg-[#164677] transition-colors">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function NewsCard({
  title,
  excerpt,
  image,
  date,
  category,
  slug,
}: {
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  slug: string
}) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 md:h-56">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="inline-block border border-gray-300 text-xs px-2 py-1 rounded mr-2">{category}</span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-medium mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{excerpt}</p>
        <Link
          href={slug}
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors mt-auto"
        >
          <Eye className="w-4 h-4 mr-2" />
          Read article
        </Link>
      </div>
    </Card>
  )
}
