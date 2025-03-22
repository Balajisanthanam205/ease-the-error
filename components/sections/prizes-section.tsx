"use client"

import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Trophy, Award, Gift, Star, Zap, Brain, Globe, Database, Shield } from "lucide-react"

interface PrizesSectionProps {
  scrollToSection: (sectionId: string) => void
}

export const PrizesSection = forwardRef<HTMLDivElement, PrizesSectionProps>(function PrizesSection(
  { scrollToSection },
  ref,
) {
  return (
    <section id="prizes" ref={ref} className="py-20 px-4 bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Prizes & Rewards</h2>
          <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Compete for amazing prizes that recognize innovation, technical excellence, and impactful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-900 rounded-xl border border-gray-800 group hover:border-white transition-all duration-300 relative pt-12">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="h-16 w-16 rounded-full bg-gray-800 flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-gray-700 animate-pulse"></div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Second Place</h3>
              <div className="text-3xl font-bold mb-4">10,000</div>
              <ul className="space-y-2 text-gray-400 mb-6 text-left">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>$10,000 cash prize for the team</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mentorship from industry experts</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Cloud credits worth 15,000</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative bg-gray-900 rounded-xl border border-gray-800 group hover:border-white transition-all duration-300 relative pt-12 md:transform md:scale-110 md:z-10">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center">
                  <Award className="h-10 w-10 text-black" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-white animate-pulse"></div>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-white text-black text-xs font-bold px-2 py-1 rounded-full">
              GRAND PRIZE
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">First Place</h3>
              <div className="text-3xl font-bold mb-4">25,000</div>
              <ul className="space-y-2 text-gray-400 mb-6 text-left">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <span>$25,000 cash prize for the team</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <span>Exclusive access to investor network</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <span>Incubation program with leading mentors</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <span>Featured at major tech conference</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <span>Premium hardware package</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl border border-gray-800 group hover:border-white transition-all duration-300 relative pt-12">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="h-16 w-16 rounded-full bg-gray-800 flex items-center justify-center">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-gray-700 animate-pulse"></div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Third Place</h3>
              <div className="text-3xl font-bold mb-4">5,000</div>
              <ul className="space-y-2 text-gray-400 mb-6 text-left">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>5,000 cash prize for the team</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Cloud computing credits worth 10,000</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>One-year subscription to dev tools</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Featured in innovation showcase</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Track Prizes</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group hover:border-white transition-colors duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gray-800 rounded-full mr-4">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">AI & ML Track Prize</h3>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="bg-gray-800 rounded-lg p-3 flex items-center">
                    <Trophy className="h-5 w-5 text-white mr-2" />
                    <span className="text-gray-300">3,000 Cash Prize</span>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 flex items-center">
                    <Zap className="h-5 w-5 text-white mr-2" />
                    <span className="text-gray-300">AI Computing Credits</span>
                  </div>
                </div>
                <p className="text-gray-400">
                  Awarded to the most innovative use of AI and machine learning to solve complex problems.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group hover:border-white transition-colors duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gray-800 rounded-full mr-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Web3 & Blockchain Prize</h3>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="bg-gray-800 rounded-lg p-3 flex items-center">
                    <Trophy className="h-5 w-5 text-white mr-2" />
                    <span className="text-gray-300">3,000 Cash Prize</span>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 flex items-center">
                    <Zap className="h-5 w-5 text-white mr-2" />
                    <span className="text-gray-300">Blockchain Development Kit</span>
                  </div>
                </div>
                <p className="text-gray-400">
                  Awarded to the most innovative decentralized application or blockchain solution.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group hover:border-white transition-colors duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gray-800 rounded-full mr-4">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Data Analytics Prize</h3>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="bg-gray-800 rounded-lg p-3 flex items-center">
                    <Trophy className="h-5 w-5 text-white mr-2" />
                    <span className="text-gray-300">3,000 Cash Prize</span>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 flex items-center">
                    <Zap className="h-5 w-5 text-white mr-2" />
                    <span className="text-gray-300">Data Science Tool Licenses</span>
                  </div>
                </div>
                <p className="text-gray-400">
                  Awarded to the most insightful and innovative analysis or visualization of data.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group hover:border-white transition-colors duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gray-800 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Cybersecurity Prize</h3>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="bg-gray-800 rounded-lg p-3 flex items-center">
                    <Trophy className="h-5 w-5 text-white mr-2" />
                    <span className="text-gray-300">3,000 Cash Prize</span>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 flex items-center">
                    <Zap className="h-5 w-5 text-white mr-2" />
                    <span className="text-gray-300">Security Conference Tickets</span>
                  </div>
                </div>
                <p className="text-gray-400">
                  Awarded to the most effective solution for enhancing digital security or privacy.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200"
            onClick={() => scrollToSection("sponsors")}
          >
            Our Sponsors <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
})

