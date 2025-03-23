"use client"

import { Button } from "@/components/ui/button"
import { Countdown } from "@/components/countdown"
import { ParticleBackground } from "@/components/particle-background"
import { ParallaxBackground } from "@/components/parallax-background"
import { ParallaxStars } from "@/components/parallax-stars"
import { ChevronDown, Rocket, Download } from "lucide-react"

interface HeroSectionProps {
  hackathonDate: Date
  scrollToSection: (sectionId: string) => void
}

export function HeroSection({ hackathonDate, scrollToSection }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden parallax-container">
      <ParticleBackground />
      <ParallaxStars count={300} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <ParallaxBackground speed={0.2} className="py-8">
          <br></br>
          <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter" data-parallax="0.1">
            EASE&nbsp;&nbsp;<span className="text-gray-500">THE</span>&nbsp;&nbsp;ERROR
          </h1>


            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto" data-parallax="0.15">
              design.develop.deploy.
            </p>

            <div className="py-8" data-parallax="0.2">
              <Countdown targetDate={hackathonDate} />
            </div>

            {/* First Row - Register & Learn More */}
            <div className="flex flex-wrap justify-center gap-4 mt-8" data-parallax="0.25">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Register Now <Rocket className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-gray-700 text-gray-300 hover:bg-gray-900"
                onClick={() => scrollToSection("about")}
              >
                Learn More <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

       {/* Second Row - Download Abstract Format (PPT) */}
<div className="w-full text-center mt-4" data-parallax="0.3">
  <a
    href="/abstract-format.pptx" // Update with the correct PPT file path
    download="Abstract_Format.pptx"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button type="button" className="btn">
      <strong>DOWNLOAD ABSTRACT</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  </a>
</div>


          </div>
        </ParallaxBackground>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  )
}
