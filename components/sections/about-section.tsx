"use client"

import { forwardRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Users, Code, Trophy } from "lucide-react"

interface AboutSectionProps {
  scrollToSection: (sectionId: string) => void
}

export const AboutSection = forwardRef<HTMLDivElement, AboutSectionProps>(function AboutSection(
  { scrollToSection },
  ref,
) {
  return (
    <section id="about" ref={ref} className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Ease the Error</h2>
          <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Join us for an unforgettable 24-hour journey of innovation, collaboration, and breakthrough solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400 mb-4">
              Ease the Error was born from a collective passion for innovation and problem-solving. We believe that the
              greatest technological breakthroughs come from collaborative environments where diverse minds can converge
              and create.
            </p>
            <p className="text-gray-400 mb-4">
              Our hackathon is designed to be more than just a competition—it's a platform for learning, networking, and
              pushing the boundaries of what's possible with today's technology.
            </p>
            <p className="text-gray-400">
              Whether you're a seasoned developer, a creative designer, or a visionary thinker, Ease the Error provides
              the platform for you to transform your ideas into reality and potentially change the course of innovation.
            </p>
          </div>
          <div className="relative">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJtZXJtZnRqZnRxZGJtZnRqZnRxZGJtZnRqZnRxZGJtZnRqZnRxZA/26tn33aiTi1jkl6H6/giphy.gif"
                alt="Hackathon mission"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-lg overflow-hidden border-2 border-gray-700">
              <Image
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW5sZXI4ZmZkZzd5bDR6Njc3dmJzcDR2dmZ1djdsNHoxZGI1YWg0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bJ4TVNYNUympPgcpem/giphy.gif"
                alt="Hackathon detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:border-white group">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">500+ Participants</h3>
            <p className="text-gray-400 text-center">
              Join a diverse community of developers, designers, and innovators from around the world.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:border-white group">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                <Code className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">4 Exciting Tracks</h3>
            <p className="text-gray-400 text-center">
              Choose from multiple specialized tracks designed to challenge your creativity and technical skills.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:border-white group">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                <Trophy className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">50,000 in Prizes</h3>
            <p className="text-gray-400 text-center">
              Compete for substantial cash prizes, mentorship opportunities, and valuable tech resources.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200"
            onClick={() => scrollToSection("timeline")}
          >
            View Timeline <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
})

