"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"
import { Brain, ArrowLeft, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SpeechToTextPage() {
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
              <h1 className="text-3xl md:text-4xl font-bold">Multilingual Speech-to-Text for Low-Resource Languages</h1>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-purple-400 font-medium">Difficulty:</span> Hard
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-purple-400 font-medium">Category:</span> Speech Recognition
              </div>
              <div className="bg-blue-900/30 px-4 py-2 rounded-full text-sm text-blue-400">Inclusion Focus</div>
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
                    Develop a speech recognition system that works effectively for languages with limited training data
                    available. Create a system that can transcribe spoken language into text for languages that have
                    limited available training data.
                  </p>

                  <p>
                    The solution should leverage transfer learning from high-resource languages and/or unsupervised
                    learning techniques to achieve reasonable accuracy with minimal language-specific training data.
                    Focus on languages from regions that are currently underserved by commercial speech recognition
                    systems.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-8">Problem Statement</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p>
                    Speech recognition technology has advanced significantly in recent years, but these advances have
                    primarily benefited major world languages like English, Mandarin, Spanish, and French. Thousands of
                    languages with millions of speakers remain underserved by speech technology, creating a digital
                    divide that limits access to technology and services.
                  </p>

                  <p>Your challenge is to develop a speech recognition system that can:</p>

                  <ul>
                    <li>Effectively transcribe speech in at least two low-resource languages</li>
                    <li>Achieve reasonable accuracy with limited training data (less than 100 hours per language)</li>
                    <li>
                      Utilize transfer learning, unsupervised learning, or other innovative approaches to overcome data
                      limitations
                    </li>
                    <li>Function in realistic conditions (background noise, different accents, etc.)</li>
                    <li>Be adaptable to additional languages with minimal additional training data</li>
                  </ul>

                  <p>
                    The solution should be designed with consideration for the computational constraints that may exist
                    in regions where these languages are spoken.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-8">Technical Requirements</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <ul>
                    <li>
                      The system must support at least two low-resource languages (less than 100 hours of labeled
                      training data available)
                    </li>
                    <li>The solution should achieve a Word Error Rate (WER) of less than 30% on test data</li>
                    <li>The system should be able to run on consumer-grade hardware</li>
                    <li>The solution should include a simple interface for recording and transcribing speech</li>
                    <li>The system should provide confidence scores for transcriptions</li>
                    <li>
                      Documentation should include a clear explanation of the approach and how it could be extended to
                      other languages
                    </li>
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
                          Common Voice Dataset
                        </a>
                        <p className="text-gray-400 text-sm">Open-source multi-language voice dataset</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">
                          Low-Resource Language Samples
                        </a>
                        <p className="text-gray-400 text-sm">Limited training data for selected languages</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">
                          Transfer Learning for ASR Paper
                        </a>
                        <p className="text-gray-400 text-sm">Research on cross-lingual transfer learning</p>
                      </div>
                    </li>
                  </ul>

                  <div className="border-t border-gray-800 my-6 pt-6">
                    <h3 className="text-xl font-bold mb-4">Mentors</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800 mr-3">
                          <Image
                            src="/placeholder.svg?height=40&width=40&text=Dr.N"
                            alt="Dr. Nadia Okafor"
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Dr. Nadia Okafor</p>
                          <p className="text-gray-400 text-sm">Computational Linguist</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800 mr-3">
                          <Image
                            src="/placeholder.svg?height=40&width=40&text=Dr.T"
                            alt="Dr. Thomas Lee"
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Dr. Thomas Lee</p>
                          <p className="text-gray-400 text-sm">Speech Recognition Researcher</p>
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

