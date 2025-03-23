"use client"

import type React from "react"

import { useRef } from "react"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { TimelineSection } from "@/components/sections/timeline-section"
import { TracksSection } from "@/components/sections/tracks-section"
import { PrizesSection } from "@/components/sections/prizes-section"
import { BecomeSponsorSection } from "@/components/sections/become-sponsor-section"
import { SponsorsSection } from "@/components/sections/sponsors-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { FooterSection } from "@/components/sections/footer-section"
import { NavigationBar } from "@/components/navigation-bar"
import { FAQSection } from "@/components/sections/faq-section"

export default function Home() {
  // Hackathon date - set to 30 days from now
  const hackathonDate = new Date()
  hackathonDate.setDate(hackathonDate.getDate() + 30)

  // Refs for sections to enable smooth scrolling
  const aboutRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const tracksRef = useRef<HTMLDivElement>(null)
  const prizesRef = useRef<HTMLDivElement>(null)
  const becomeSponsorRef = useRef<HTMLDivElement>(null)
  const sponsorsRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const sectionMap: Record<string, React.RefObject<HTMLDivElement>> = {
      about: aboutRef,
      timeline: timelineRef,
      tracks: tracksRef,
      prizes: prizesRef,
      "become-sponsor": becomeSponsorRef,
      sponsors: sponsorsRef,
      faq: faqRef,
      gallery: galleryRef,
    }

    const sectionRef = sectionMap[sectionId]
    if (sectionRef && sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="bg-black text-white">
      <NavigationBar
        sections={[
          { id: "about", label: "About" },
          { id: "timeline", label: "Timeline" },
          { id: "tracks", label: "Tracks" },
          { id: "prizes", label: "Prizes" },
          { id: "become-sponsor", label: "Become a Sponsor" },
          { id: "sponsors", label: "Sponsors" },
          { id: "faq", label: "FAQ" },
          { id: "gallery", label: "Gallery" },
        ]}
        scrollToSection={scrollToSection}
      />

      <HeroSection hackathonDate={hackathonDate} scrollToSection={scrollToSection} />

      <AboutSection ref={aboutRef} scrollToSection={scrollToSection} />

      <TimelineSection ref={timelineRef} scrollToSection={scrollToSection} />

      <TracksSection ref={tracksRef} scrollToSection={scrollToSection} />

      {/*<PrizesSection ref={prizesRef} scrollToSection={scrollToSection} />*/}

      <BecomeSponsorSection ref={becomeSponsorRef} scrollToSection={scrollToSection} />

      <SponsorsSection ref={sponsorsRef} scrollToSection={scrollToSection} />

      <GallerySection ref={galleryRef} />

      <FAQSection ref={faqRef} scrollToSection={scrollToSection} />

      <FooterSection />
    </div>
  )
}

