"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"
import { Brain, ArrowLeft, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MedicalDiagnosisPage() {
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
              <h1 className="text-3xl md:text-4xl font-bold">AI-Powered Medical Diagnosis Assistant</h1>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-purple-400 font-medium">Difficulty:</span> Hard
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-purple-400 font-medium">Category:</span> Healthcare
              </div>
              <div className="bg-red-900/30 px-4 py-2 rounded-full text-sm text-red-400">Featured Challenge</div>
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
                    Develop an AI system that can assist healthcare professionals in diagnosing diseases from medical
                    images, patient symptoms, or clinical data. The system should be able to analyze medical images
                    (X-rays, MRIs, CT scans) and/or patient symptom descriptions to suggest possible diagnoses with
                    confidence levels.
                  </p>

                  <p>
                    The solution should explain its reasoning and provide references to relevant medical literature.
                    Bonus points for solutions that can work with limited computational resources or in offline
                    environments.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-8">Problem Statement</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p>
                    Healthcare professionals face significant challenges in diagnosing diseases accurately and
                    efficiently, especially in resource-constrained settings. Medical diagnosis requires processing vast
                    amounts of information, staying updated with the latest research, and making critical decisions
                    under time pressure.
                  </p>

                  <p>Your challenge is to develop an AI-powered assistant that can:</p>

                  <ul>
                    <li>Analyze medical images to detect abnormalities and suggest possible conditions</li>
                    <li>Process patient symptoms and clinical data to generate differential diagnoses</li>
                    <li>Provide confidence levels for each suggested diagnosis</li>
                    <li>
                      Explain the reasoning behind its suggestions in a way that's understandable to healthcare
                      professionals
                    </li>
                    <li>Reference relevant medical literature to support its conclusions</li>
                  </ul>

                  <p>
                    The solution should be designed as a decision support tool that augments (not replaces) the
                    expertise of healthcare professionals. It should be transparent in its limitations and
                    uncertainties.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-8">Technical Requirements</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <ul>
                    <li>
                      The system must handle at least one of the following: X-rays, MRIs, CT scans, or textual symptom
                      descriptions
                    </li>
                    <li>The AI model should achieve a minimum accuracy of 80% on the test dataset</li>
                    <li>The system must provide confidence scores for its predictions</li>
                    <li>
                      The solution should include an explainability component that highlights the features influencing
                      the diagnosis
                    </li>
                    <li>
                      The system should be able to reference at least 3 relevant medical papers or guidelines for each
                      diagnosis
                    </li>
                    <li>The solution should have a user-friendly interface for healthcare professionals</li>
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
                          Medical Image Dataset
                        </a>
                        <p className="text-gray-400 text-sm">Curated collection of labeled medical images</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">
                          Symptom-Disease Correlation Database
                        </a>
                        <p className="text-gray-400 text-sm">
                          Structured database of symptoms and associated conditions
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">
                          Research Paper: AI in Medical Diagnosis
                        </a>
                        <p className="text-gray-400 text-sm">Recent research on AI applications in healthcare</p>
                      </div>
                    </li>
                  </ul>

                  <div className="border-t border-gray-800 my-6 pt-6">
                    <h3 className="text-xl font-bold mb-4">Mentors</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800 mr-3">
                          <Image
                            src="/placeholder.svg?height=40&width=40&text=Dr.S"
                            alt="Dr. Sarah Chen"
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Dr. Sarah Chen</p>
                          <p className="text-gray-400 text-sm">Radiologist & AI Researcher</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800 mr-3">
                          <Image
                            src="/placeholder.svg?height=40&width=40&text=Dr.M"
                            alt="Dr. Michael Patel"
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Dr. Michael Patel</p>
                          <p className="text-gray-400 text-sm">Medical AI Specialist</p>
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

