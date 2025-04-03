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
  const [timelineProgress, setTimelineProgress] = useState(0)
  const [activeTimelineEvent, setActiveTimelineEvent] = useState(0)
  const timelineEvents = [

    {
      title: "Problem statements & Registration Open",
      description:
        "Problem statements released, and registrations open for participants to join and compete in the challenge.Problem statements released, and registrations open for participants to join and compete in the Hackathon.",
      date: "March 24, 2025",
      time: "6:00 PM IST",
    },
    {
      title: "Submission Deadline",
      description: "Find teammates, attend skill-building workshops, and get mentorship to prepare for the main event.",
      date: "April 25, 2025",
      time: "12:00 AM IST",
    },
    {
      title: "Shortlist & Waitlist Announcement",
      description:
        "Selected participants and waitlisted candidates will be announced. Stay tuned for further instructions.",
      date: "April 13, 2025",
      time: "11:00 PM IST",
    },
    {
      title: "Hackathon Kickoff",
      description:
        "Present your projects to judges and celebrate the winners across all tracks and special categories.",
      date: "April 18, 2025",
      time: "10:00 AM IST",
    },
    {
      title: "First Round Judging",
      description:
        "Initial project evaluations begin.",
      date: "April 18, 2025",
      time: "4:00 PM IST",
    },
    {
      title: "Second Round Judging",
      description:
        "2nd Round project evaluations begin.",
      date: "April 18, 2025",
      time: "10:00 PM IST",
    },
    {
      title: "Final Round Judging",
      description:
        "Teams present their solutions. Judges evaluate and determine the winners of the hackathon.",
      date: "April 19, 2025",
      time: "9:00 AM IST",
    },
    {
      title: "Valedictory & Prize Distribution",
      description:
        "Celebrating achievements! Winners announced, prizes awarded, and the hackathon concludes with closing remarks.",
      date: "April 19, 2025",
      time: "1:30 PM IST",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll<HTMLElement>("[data-parallax]");
      parallaxElements.forEach((element) => {
        const speed = Number.parseFloat(element.getAttribute("data-parallax") || "0.1");
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const yPos = (rect.top - windowHeight) * speed;
          element.style.setProperty("--parallax-y", `${yPos}px`);
        }
      });

      if (ref && "current" in ref && ref.current) {
        const timelineElement = ref.current;
        const timelineTop = timelineElement.getBoundingClientRect().top;
        const timelineHeight = timelineElement.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

        if (timelineTop < windowHeight && timelineTop > -timelineHeight) {
          const progress = Math.min(1, Math.max(0, 1 - timelineTop / (windowHeight * 0.8)));
          setTimelineProgress(progress);

          const timelinePosition = scrollPosition - timelineElement.offsetTop + windowHeight / 2;
          const eventHeight = timelineHeight / timelineEvents.length;
          const activeEvent = Math.floor(timelinePosition / eventHeight);
          setActiveTimelineEvent(Math.max(0, Math.min(activeEvent, timelineEvents.length - 1)));

          const timelineEventElements = document.querySelectorAll<HTMLElement>(".timeline-event");
          timelineEventElements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            element.classList.toggle("visible", rect.top < windowHeight * 0.8);
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, timelineEvents.length]);

  return (
    <section id="timeline" ref={ref} className="py-20 px-4 bg-gray-950 min-h-screen">
      <ParallaxStars count={50} className="opacity-30" />
      <div className="container mx-auto max-w-6xl">
        {/* ... (keep the same header content) */}
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
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800 hidden md:block"></div>
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white transition-all duration-500 ease-out hidden md:block"
            style={{ height: `${timelineProgress * 100}%` }}
          ></div>

          {/* Mobile timeline progress bar */}
          <div className="absolute left-6 top-0 h-full w-1 bg-gray-800 md:hidden"></div>
          <div
            className="absolute left-6 top-0 w-1 bg-white transition-all duration-500 ease-out md:hidden"
            style={{ height: `${timelineProgress * 100}%` }}
          ></div>

          {/* Timeline events */}
          <div className="space-y-16 md:space-y-24">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="timeline-event relative opacity-0 transition-opacity duration-500 ease-in-out"
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Mobile layout (stacked) */}
                <div className="flex md:hidden items-start mb-4">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-black font-bold z-10 relative">
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {event.date} • {event.time}
                    </p>
                  </div>
                </div>
                <div className="pl-16 md:pl-0 md:w-full">
                  <div className="bg-gray-900 p-4 md:p-6 rounded-lg border border-gray-800 md:hidden">
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>

                {/* Desktop layout (alternating) */}
                <div className="hidden md:block">
                  <div className={`flex items-center ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-16" : "pl-16"}`}>
                      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-400 mb-2">{event.description}</p>
                      <div className="inline-block bg-gray-900 px-4 py-2 rounded-lg border border-gray-800">
                        <p className="text-lg font-mono">
                          {event.date} • {event.time}
                        </p>
                      </div>
                    </div>

                    {/* Center number indicator */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-black font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline indicator dots */}
          <div className="hidden md:block">
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20">
              {timelineEvents.map((_, index) => (
                <div
                  key={index}
                  className={`h-3 w-3 rounded-full my-4 cursor-pointer transition-all duration-300 ${
                    activeTimelineEvent === index ? "bg-white scale-150" : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  onClick={() => {
                    const element = document.querySelectorAll(".timeline-event")[index]
                    if (element) {
                      window.scrollTo({
                        top: element.getBoundingClientRect().top + window.scrollY - 100,
                        behavior: "smooth",
                      })
                    }
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200" onClick={() => scrollToSection("tracks")}>
            Explore Tracks <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        .timeline-event.visible {
          opacity: 1;
        }
        [data-parallax] {
          transform: translateY(var(--parallax-y, 0));
        }
      `}</style>
    </section>
  )
})

