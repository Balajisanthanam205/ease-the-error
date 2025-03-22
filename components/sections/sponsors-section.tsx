"use client"

import { forwardRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, ExternalLink } from "lucide-react"

interface SponsorsSectionProps {
  scrollToSection: (sectionId: string) => void
}

export const SponsorsSection = forwardRef<HTMLDivElement, SponsorsSectionProps>(function SponsorsSection(
  { scrollToSection },
  ref,
) {
  return (
    <section id="sponsors" ref={ref} className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Sponsors</h2>
          <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ease the Error is made possible by the generous support of our sponsors who share our vision for innovation.
          </p>
        </div>

        {/*<div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Platinum Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((sponsor) => (
              <div
                key={`platinum-${sponsor}`}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-white transition-all duration-300 group"
              >
                <div className="relative h-32 mb-6">
                  <Image
                    src={`/placeholder.svg?height=120&width=300&text=Platinum Sponsor ${sponsor}`}
                    alt={`Platinum Sponsor ${sponsor}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Platinum Sponsor {sponsor}</h4>
                <p className="text-gray-400 mb-4">
                  Leading technology company committed to fostering innovation and supporting the next generation of
                  developers.
                </p>
                <a href="#" className="inline-flex items-center text-white hover:underline">
                  Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Gold Sponsors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((sponsor) => (
              <div
                key={`gold-${sponsor}`}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-white transition-all duration-300 group"
              >
                <div className="relative h-24 mb-4">
                  <Image
                    src={`/placeholder.svg?height=100&width=200&text=Gold Sponsor ${sponsor}`}
                    alt={`Gold Sponsor ${sponsor}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2">Gold Sponsor {sponsor}</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Providing resources and mentorship to help participants build amazing projects.
                </p>
                <a href="#" className="inline-flex items-center text-white hover:underline text-sm">
                  Learn More <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Silver Sponsors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sponsor) => (
              <div
                key={`silver-${sponsor}`}
                className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-white transition-all duration-300 group"
              >
                <div className="relative h-16 mb-2">
                  <Image
                    src={`/placeholder.svg?height=60&width=120&text=Silver ${sponsor}`}
                    alt={`Silver Sponsor ${sponsor}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-sm font-bold text-center">Silver Sponsor {sponsor}</h4>
              </div>
            ))}
          </div>
        </div>*/}

        {/* Replaced Platinum, Gold, and Silver sponsors with a single "Coming Soon" image */}
<div className="mb-16">
  <h3 className="text-xl font-bold text-center mb-8 text-white">
    {/*<span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30">
      Coming Soon
    </span>*/}
  </h3>
  <div className="flex justify-center">
    {/* Gradient Border Container */}
    <div className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg -z-10 "></div>
      {/* Image */}
      <img
        src="/comming-soon.jpg"
        alt="Coming Soon"
        className="w-full h-auto object-cover transition-all duration-300 rounded-lg relative z-10 p-2"
      />
    </div>
  </div>
</div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200"
            onClick={() => scrollToSection("gallery")}
          >
            View Gallery <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
})

