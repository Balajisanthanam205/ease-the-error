"use client"

import { forwardRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { ParallaxStars } from "@/components/parallax-stars"

interface TimelineSectionProps {
  scrollToSection: (sectionId: string) => void
}

export const TimelineSection = forwardRef<HTMLDivElement, TimelineSectionProps>(function TimelineSection(
  { scrollToSection },
  ref,
) {
  // Timeline animation state
  const [timelineProgress, setTimelineProgress] = useState(0)
  const [activeTimelineEvent, setActiveTimelineEvent] = useState(0)
  const timelineEvents = [
    {
      title: "Registration Opens",
      description:
        "Sign up early to secure your spot and get access to exclusive pre-hackathon workshops and resources.",
      date: "August 1, 2024",
      time: "12:00 PM EST",
    },
    {
      title: "Team Formation & Workshops",
      description: "Find teammates, attend skill-building workshops, and get mentorship to prepare for the main event.",
      date: "August 15, 2024",
      time: "6:00 PM EST",
    },
    {
      title: "Hackathon Kickoff",
      description:
        "The official start of the 48-hour hackathon. Get ready for an intense and rewarding coding marathon!",
      date: "September 1, 2024",
      time: "10:00 AM EST",
    },
    {
      title: "Demo Day & Awards",
      description:
        "Present your projects to judges and celebrate the winners across all tracks and special categories.",
      date: "September 3, 2024",
      time: "4:00 PM EST",
    },
  ]

  // Handle scroll for timeline animation and parallax effects
  useEffect(() => {
    const handleScroll = () => {
      // Parallax effect for elements with data-parallax attribute
      const parallaxElements = document.querySelectorAll("[data-parallax]")
      parallaxElements.forEach((element) => {
        const speed = Number.parseFloat(element.getAttribute("data-parallax") || "0.1")
        const rect = element.getBoundingClientRect()
        const windowHeight = window.innerHeight

        if (rect.top < windowHeight && rect.bottom > 0) {
          const yPos = (rect.top - windowHeight) * speed
          element.style.setProperty("--parallax-y", `${yPos}px`)
        }
      })

      // Timeline animation
      if (ref && "current" in ref && ref.current) {
        const timelineTop = ref.current.getBoundingClientRect().top
        const timelineHeight = ref.current.offsetHeight
        const windowHeight = window.innerHeight
        const scrollPosition = window.scrollY

        // Calculate how much of the timeline is visible
        if (timelineTop < windowHeight && timelineTop > -timelineHeight) {
          // Calculate progress (0 to 1)
          const progress = Math.min(1, Math.max(0, 1 - timelineTop / (windowHeight * 0.8)))
          setTimelineProgress(progress)

          // Calculate which timeline event is active
          const timelinePosition = scrollPosition - ref.current.offsetTop + windowHeight / 2
          const eventHeight = timelineHeight / timelineEvents.length
          const activeEvent = Math.floor(timelinePosition / eventHeight)

          // Clamp the active event to valid range
          const clampedActiveEvent = Math.max(0, Math.min(activeEvent, timelineEvents.length - 1))
          setActiveTimelineEvent(clampedActiveEvent)

          // Make timeline events visible when they enter the viewport
          const timelineEventElements = document.querySelectorAll(".timeline-event")
          timelineEventElements.forEach((element, index) => {
            const rect = element.getBoundingClientRect()
            if (rect.top < windowHeight * 0.8) {
              element.classList.add("visible")
            } else {
              element.classList.remove("visible")
            }
          })
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [ref, timelineEvents.length])

  return (
    <section id="timeline" ref={ref} className="py-20 px-4 bg-gray-950 min-h-screen">
      <ParallaxStars count={50} className="opacity-30" />
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-parallax="0.1">
            Hackathon Timeline
          </h2>
          <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg" data-parallax="0.15">
            Mark your calendar and prepare for an exciting journey of innovation and collaboration.
          </p>
        </div>

        <div className="relative">
          {/* Timeline progress bar */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800"></div>
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white transition-all duration-500 ease-out"
            style={{ height: `${timelineProgress * 100}%` }}
          ></div>

          {/* Timeline events in linear layout */}
          <div className="">
            {timelineEvents.map((event, index) => (
              <div key={index} className="timeline-pair mb-16">
                <div className="grid grid-cols-1 gap-10">
                  <div
                    className={`timeline-event relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10 md:items-center ${index === activeTimelineEvent ? "visible" : ""}`}
                    data-parallax="0.1"
                  >
                    <div className="md:text-right md:pr-10">
                      <div className="absolute left-0 md:left-auto md:right-0 top-0 md:top-1/2 md:transform md:-translate-y-1/2 md:translate-x-1/2 z-10">
                        <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-black font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{event.title}</h3>
                      <p className="text-gray-400 text-lg">{event.description}</p>
                    </div>
                    <div className="mt-8 md:mt-0 md:pl-10">
                      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 transform transition-all duration-500 hover:scale-105">
                        <p className="text-2xl font-mono">{event.date}</p>
                        <p className="text-gray-400">{event.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline indicator dots */}
          {/*<div className="timeline-indicator hidden md:flex">
            {timelineEvents.map((_, index) => (
              <div
                key={index}
                className={`timeline-indicator-dot ${activeTimelineEvent === index ? "active" : ""}`}
                onClick={() => {
                  const element = document.querySelectorAll(".timeline-pair")[index]
                  if (element) {
                    window.scrollTo({
                      top: element.getBoundingClientRect().top + window.scrollY - 100,
                      behavior: "smooth",
                    })
                  }
                }}
              ></div>
            ))}
          </div>*/}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200" onClick={() => scrollToSection("tracks")}>
            Explore Tracks <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
})

