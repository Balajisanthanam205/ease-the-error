"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"
import { Brain, ArrowLeft, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EducationContentPage() {
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
              <h1 className="text-3xl md:text-4xl font-bold">Personalized Education Content Generator</h1>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-purple-400 font-medium">Difficulty:</span> Medium
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-purple-400 font-medium">Category:</span> Education
              </div>
              <div className="bg-yellow-900/30 px-4 py-2 rounded-full text-sm text-yellow-400">Popular Challenge</div>
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
                    Create an AI system that generates personalized educational content based on a student's learning
                    style, progress, and areas of difficulty. The system should analyze a student's performance data,
                    identify knowledge gaps, and generate appropriate learning materials tailored to their needs.
                  </p>

                  <p>
                    The content should adapt to different learning styles (visual, auditory, reading/writing,
                    kinesthetic) and provide appropriate scaffolding for concepts the student finds challenging.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-8">Problem Statement</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p>
                    Traditional educational content is often one-size-fits-all, failing to address the unique learning
                    needs, styles, and pace of individual students. This can lead to disengagement, frustration, and
                    suboptimal learning outcomes.
                  </p>

                  <p>Your challenge is to develop an AI system that can:</p>

                  <ul>
                    <li>Analyze a student's performance data to identify strengths, weaknesses, and knowledge gaps</li>
                    <li>
                      Determine the student's preferred learning style(s) through direct assessment or behavior analysis
                    </li>
                    <li>
                      Generate customized educational content (explanations, examples, practice problems, visual aids)
                      that addresses the student's specific needs
                    </li>
                    <li>
                      Adapt the difficulty level and presentation style based on the student's progress and feedback
                    </li>
                    <li>Provide meaningful feedback and guidance to help the student overcome challenges</li>
                  </ul>

                  <p>
                    The solution should be able to work across multiple subject areas and be accessible to students with
                    varying levels of technological proficiency.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-8">Technical Requirements</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <ul>
                    <li>
                      The system must be able to process and analyze student performance data from at least one
                      educational domain (e.g., mathematics, language learning, science)
                    </li>
                    <li>The content generation must support at least three different learning styles</li>
                    <li>
                      The system should include a mechanism for assessing the effectiveness of the generated content
                    </li>
                    <li>The solution must have a user-friendly interface for both students and educators</li>
                    <li>The system should be able to explain its content generation decisions</li>
                    <li>The solution should include privacy protections for student data</li>
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
                          Educational Content Database
                        </a>
                        <p className="text-gray-400 text-sm">Repository of educational materials across subjects</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">
                          Learning Styles Assessment Framework
                        </a>
                        <p className="text-gray-400 text-sm">Tools for identifying student learning preferences</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">
                          Student Performance Analytics API
                        </a>
                        <p className="text-gray-400 text-sm">API for accessing anonymized student performance data</p>
                      </div>
                    </li>
                  </ul>

                  <div className="border-t border-gray-800 my-6 pt-6">
                    <h3 className="text-xl font-bold mb-4">Mentors</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800 mr-3">
                          <Image
                            src="/placeholder.svg?height=40&width=40&text=Prof.L"
                            alt="Prof. Lisa Johnson"
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Prof. Lisa Johnson</p>
                          <p className="text-gray-400 text-sm">Educational Technology Researcher</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800 mr-3">
                          <Image
                            src="/placeholder.svg?height=40&width=40&text=Dr.R"
                            alt="Dr. Robert Kim"
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Dr. Robert Kim</p>
                          <p className="text-gray-400 text-sm">AI in Education Specialist</p>
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

