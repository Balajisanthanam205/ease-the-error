"use client"

import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Rocket, Users, Award, Building } from "lucide-react"
import Link from "next/link"

interface BecomeSponsorSectionProps {
  scrollToSection: (sectionId: string) => void
}

export const BecomeSponsorSection = forwardRef<HTMLDivElement, BecomeSponsorSectionProps>(function BecomeSponsorSection(
  { scrollToSection },
  ref,
) {
  return (
    <section id="become-sponsor" ref={ref} className="py-20 px-4 bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Become a Sponsor</h2>
          <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Support innovation and connect with top tech talent by sponsoring Ease the Error Hackathon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300">
            <div className="h-12 w-12 rounded-full bg-purple-900 flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-purple-300" />
            </div>
            <h3 className="text-xl font-bold mb-4">Talent Recruitment</h3>
            <p className="text-gray-400 mb-4">
              Connect with over 500 skilled developers, designers, and innovators. Get first access to recruit top
              talent.
            </p>
            <ul className="space-y-2 text-gray-400 list-disc pl-5 mb-4">
              <li>Direct access to participants</li>
              <li>Resume database access</li>
              <li>Networking opportunities</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300">
            <div className="h-12 w-12 rounded-full bg-blue-900 flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-blue-300" />
            </div>
            <h3 className="text-xl font-bold mb-4">Brand Visibility</h3>
            <p className="text-gray-400 mb-4">
              Showcase your brand to a tech-savvy audience. Your logo will be featured on our website, social media, and
              event materials.
            </p>
            <ul className="space-y-2 text-gray-400 list-disc pl-5 mb-4">
              <li>Logo placement on materials</li>
              <li>Social media promotion</li>
              <li>Presentation opportunities</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-indigo-500 transition-all duration-300">
            <div className="h-12 w-12 rounded-full bg-indigo-900 flex items-center justify-center mb-6">
              <Building className="h-6 w-6 text-indigo-300" />
            </div>
            <h3 className="text-xl font-bold mb-4">Community Impact</h3>
            <p className="text-gray-400 mb-4">
              Support the tech ecosystem and contribute to innovation. Help shape the future of technology through
              mentorship and resources.
            </p>
            <ul className="space-y-2 text-gray-400 list-disc pl-5 mb-4">
              <li>Mentorship opportunities</li>
              <li>Support innovation</li>
              <li>Build community goodwill</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link href="/sponsor">
          {/*downlode button*/} 
          <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
         <a href="/FODSE Brochure.pdf" download className="flex items-center">
         Become a Sponsor <Rocket className="ml-2 h-4 w-4" />
         </a>
        </Button>

          </Link>
          <div className="mt-8">
            <Button
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-900"
              onClick={() => scrollToSection("sponsors")}
            >
              View Current Sponsors <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
})

