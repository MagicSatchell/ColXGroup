import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import FadeInSection from "@/components/fade-in-section"
import Link from "next/link"
import { Search, MapPin } from "lucide-react"

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0d2c4b] text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/colx-desktop-bg.png" alt="Careers Background" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6">Careers</h1>
          <p className="max-w-3xl mx-auto text-gray-300 mb-8">
            At ColX Group, we build careers, not just jobs. Join a dynamic, inclusive workplace where innovation
            thrives, growth is supported, and success is celebrated. Whether you're new to the field or an experienced
            professional, we offer opportunities to develop your skills and make a real impact. Explore our vacancies
            and shape your future with us.
          </p>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#0d2c4b] transition-colors"
          >
            View Latest Jobs
          </Button>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection>
              <Card className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-[#3CAEA3]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-12 h-12"
                    >
                      <path d="M20 7h-3a2 2 0 01-2-2V2" />
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7l-6-5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-4">Enforcement Agent</h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Looking for a challenging yet rewarding career? Our agents play a vital role in ensuring an ethical
                    and professional debt resolution. Earn £27,000 basic salary plus uncapped commission opportunities.
                    No experience? We provide comprehensive training and support to help you grow and thrive.
                  </p>
                </div>
              </Card>
            </FadeInSection>

            <FadeInSection delay={200}>
              <Card className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-[#3CAEA3]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-12 h-12"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-4">Sheriff Officer</h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Our Sheriff Officers are fundamental in delivering justice with professionalism and integrity within
                    Scotland. We continue to encourage continuous development and growth through offering Qualified
                    Sheriff Officers opportunities, where you are part of a team that makes a difference.
                  </p>
                </div>
              </Card>
            </FadeInSection>

            <FadeInSection delay={400}>
              <Card className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-[#3CAEA3]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-12 h-12"
                    >
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-4">Head Office Roles</h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    With offices in Birkenhead and Warrington, we offer a wide range of opportunities that drive our
                    success across Finance, HR and Technology to Customer Service and Operations, our Head Office teams
                    work collaboratively to ensure the seamless operation of the business. We recognize achievements and
                    reward dedication.
                  </p>
                </div>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Employee Testimonial */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/3">
              <Image
                src="/person-laptop.jpeg"
                alt="Sophia Jones"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3 bg-[#0d2c4b] text-white p-8 rounded-lg">
              <p className="mb-6 text-lg">
                Being part of a supportive team and helping to streamline the process makes every day rewarding.
              </p>
              <div>
                <p className="font-medium">Sophia Jones</p>
                <p className="text-sm text-gray-300">Operational Admin Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">Vacancies</h2>

          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by company, job title, location..."
                className="w-full p-3 pl-10 border border-gray-300 rounded-md"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <JobListing title="Call Centre Representative" department="Contact Centre" company="JACOBS" />
            <JobListing
              title="Administration Officer"
              department="Field Operations"
              company="JACOBS"
              location="Birkenhead"
            />
            <JobListing
              title="Enforcement Agent - Sheffield"
              department="Field Operations"
              company="JACOBS"
              location="Sheffield"
            />
            <JobListing
              title="Enforcement Agent - Grimsby & Lincolnshire"
              department="Field Operations"
              company="JACOBS"
              location="Grimsby and Lincolnshire"
            />
            <JobListing
              title="Enforcement Agent - Portsmouth & Brighton"
              department="Field Operations"
              company="JACOBS"
              location="Portsmouth & Brighton"
            />
            <JobListing title="Bid Writer" department="Business Development" company="JACOBS" />
            <JobListing
              title="Operational Admin Officer"
              department="Administration"
              company="JACOBS"
              location="Birkenhead"
            />
            <JobListing title="Company Driver" department="Field Operations" company="JACOBS" location="Wirral" />
            <JobListing title="Software Engineer - Backend" department="Technology" company="JACOBS" />
            <JobListing title="Software Engineer - Frontend" department="Technology" company="JACOBS" />
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Find out more</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-[#3CAEA3] hover:underline">
                    About ColX Group
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#3CAEA3] hover:underline">
                    Company values and Benefits
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Employment Credentials</h3>
              <div className="flex flex-wrap gap-4">
                <Image src="/abstract-inclusion-symbol.png" alt="Disability Confident" width={60} height={60} />
                <Image src="/supportive-workplace.png" alt="Mental Health at Work" width={60} height={60} />
                <Image src="/abstract-growth-network.png" alt="Investors in People" width={60} height={60} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Information & Legal Notices</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-[#3CAEA3] hover:underline">
                    Annual Equity Summary PDF
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#3CAEA3] hover:underline">
                    GDPR Candidate Privacy Notice PDF
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function JobListing({
  title,
  department,
  company,
  location,
}: {
  title: string
  department: string
  company: string
  location?: string
}) {
  return (
    <div className="border border-gray-200 rounded-md p-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <h3 className="font-medium text-lg mb-1">{title}</h3>
          <p className="text-sm text-gray-600">Department: {department}</p>
          <p className="text-sm font-medium text-[#0d2c4b] mt-2">{company}</p>
        </div>
        {location && (
          <div className="flex items-center mt-3 md:mt-0">
            <MapPin className="w-4 h-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{location}</span>
          </div>
        )}
      </div>
    </div>
  )
}
