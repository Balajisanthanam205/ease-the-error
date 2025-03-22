"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"
import { Brain, ArrowLeft, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AgricultureAdvisorPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <ParticleBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/tracks/ai-ml" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to AI & ML Track
            </Link>

            <div className="flex items-center mb-6">
              <div className="h-16 w-16 rounded-full bg-purple-900 flex items-center justify-center mr-6">
                <Brain className="h-8 w-8 text-purple-300" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Sustainable Agriculture AI Advisor</h1>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-purple-400 font-medium">Difficulty:</span> Medium
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-purple-400 font-medium">Category:</span> Agriculture
              </div>
              <div className="bg-green-900/30 px-4 py-2 rounded-full text-sm text-green-400">Sustainability Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p>
                    Build an AI system that helps farmers optimize crop yields while minimizing environmental impact
                    through data-driven recommendations. The system should analyze data from various sources (weather
                    forecasts, soil sensors, satellite imagery, historical yields) to provide actionable
                    recommendations.
                  </p>

                  <p>
                    The solution should balance maximizing crop yields with minimizing water usage, chemical inputs, and
                    carbon footprint.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-8">Problem Statement</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p>
                    Agriculture faces dual challenges: feeding a growing global population while reducing its
                    environmental footprint. Traditional farming practices often rely on excessive water, fertilizers,
                    and pesticides, contributing to environmental degradation and climate change.
                  </p>

                  <p>Your challenge is to develop an AI advisor that can:</p>

                  <ul>
                    <li>
                      Analyze multiple data sources (weather patterns, soil conditions, crop health, etc.) to generate
                      personalized recommendations
                    </li>
                    <li>
                      Suggest optimal planting times, irrigation schedules, and resource application based on real-time
                      and forecasted conditions
                    </li>
                    <li>Predict potential pest and disease outbreaks before they occur</li>
                    <li>
                      Recommend sustainable practices that maintain or improve yields while reducing environmental
                      impact
                    </li>
                    <li>
                      Present information in an accessible way for farmers with varying levels of technical expertise
                    </li>
                  </ul>

                  <p>
                    The solution should be practical for implementation in real-world farming contexts, including areas
                    with limited connectivity or technological infrastructure.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-8">Technical Requirements</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <ul>
                    <li>
                      The system must integrate at least three different data sources (e.g., weather APIs, satellite
                      imagery, soil sensor data)
                    </li>
                    <li>Recommendations must be specific, actionable, and include expected outcomes</li>
                    <li>The solution should include a user-friendly interface accessible on mobile devices</li>
                    <li>The system should be able to function with intermittent connectivity</li>
                    <li>Recommendations must balance yield optimization with sustainability metrics</li>
                    <li>The solution should include a mechanism for feedback to improve future recommendations</li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Resources</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">
                          Agricultural Data Repository
                        </a>
                        <p className="text-gray-400 text-sm">Historical crop yield and environmental data</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">
                          Weather API Documentation
                        </a>
                        <p className="text-gray-400 text-sm">Access to historical and forecast weather data</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">
                          Sustainable Farming Practices Guide
                        </a>
                        <p className="text-gray-400 text-sm">Reference for environmentally-friendly techniques</p>
                      </div>
                    </li>
                  </ul>

                  <div className="border-t border-gray-800 my-6 pt-6">
                    <h3 className="text-xl font-bold mb-4">Mentors</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800 mr-3">
                          <Image
                            src="/placeholder.svg?height=40&width=40&text=Dr.A"
                            alt="Dr. Amara Singh"
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Dr. Amara Singh</p>
                          <p className="text-gray-400 text-sm">Agricultural Data Scientist</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800 mr-3">
                          <Image
                            src="/placeholder.svg?height=40&width=40&text=Prof.J"
                            alt="Prof. James Wilson"
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Prof. James Wilson</p>
                          <p className="text-gray-400 text-sm">Sustainable Agriculture Expert</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-4">
                    <Download className="h-4 w-4 mr-2" />
                    Download Full Brief
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mt-8">
              <h3 className="text-xl font-bold mb-4">Ready to take on this challenge?</h3>
              <p className="mb-4">
                Register your team and start working on your solution. Remember to check in with our mentors for
                guidance!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Register for this Challenge
                </Button>
                <Link href="/tracks/ai-ml">
                  <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                    Explore Other Challenges
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

