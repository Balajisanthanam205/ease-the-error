"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"
import { Brain, ArrowLeft, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EthicsAnalyzerPage() {
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
              <h1 className="text-3xl md:text-4xl font-bold">AI Ethics Analyzer for Machine Learning Models</h1>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-purple-400 font-medium">Difficulty:</span> Medium
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-purple-400 font-medium">Category:</span> AI Ethics
              </div>
              <div className="bg-purple-900/30 px-4 py-2 rounded-full text-sm text-purple-400">Responsible AI</div>
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
                    Create a tool that analyzes machine learning models for potential ethical issues, biases, or
                    fairness concerns. Develop a system that can evaluate a trained machine learning model for potential
                    ethical concerns such as demographic biases, privacy risks, or unfair outcomes.
                  </p>

                  <p>
                    The tool should provide detailed reports on identified issues, suggest mitigation strategies, and
                    allow for comparative analysis of different models or versions. The solution should work across
                    various model types and application domains.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-8">Problem Statement</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p>
                    As AI systems become more prevalent in high-stakes decision-making contexts, ensuring these systems
                    are fair, unbiased, and ethically sound is increasingly critical. However, identifying ethical
                    issues in complex machine learning models can be challenging, especially for teams without
                    specialized expertise in AI ethics.
                  </p>

                  <p>Your challenge is to develop an ethics analyzer that can:</p>

                  <ul>
                    <li>Detect potential biases across different demographic groups and protected attributes</li>
                    <li>Identify privacy risks in models, such as potential for data leakage or memorization</li>
                    <li>Evaluate fairness across multiple metrics and definitions</li>
                    <li>Generate comprehensive reports that explain identified issues in accessible language</li>
                    <li>Suggest concrete mitigation strategies for addressing detected problems</li>
                    <li>Compare different models or versions of a model on ethical dimensions</li>
                  </ul>

                  <p>
                    The solution should be designed to work with a variety of model types and be accessible to data
                    scientists and developers who may not have specialized knowledge in AI ethics.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-8">Technical Requirements</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <ul>
                    <li>
                      The system must support analysis of at least three different types of ML models (e.g.,
                      classification, regression, language models)
                    </li>
                    <li>The analyzer should evaluate models across at least five different fairness metrics</li>
                    <li>
                      The solution must include a user-friendly interface for uploading models and viewing reports
                    </li>
                    <li>Reports should include visualizations that make complex ethical issues understandable</li>
                    <li>
                      The system should provide concrete, actionable recommendations for addressing identified issues
                    </li>
                    <li>The solution should include documentation on its own limitations and potential blind spots</li>
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
                          Fairness Indicators Library
                        </a>
                        <p className="text-gray-400 text-sm">Tools for evaluating fairness metrics</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">
                          Synthetic Test Datasets
                        </a>
                        <p className="text-gray-400 text-sm">Datasets designed to test for various biases</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">
                          AI Ethics Guidelines
                        </a>
                        <p className="text-gray-400 text-sm">Framework for responsible AI development</p>
                      </div>
                    </li>
                  </ul>

                  <div className="border-t border-gray-800 my-6 pt-6">
                    <h3 className="text-xl font-bold mb-4">Mentors</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800 mr-3">
                          <Image
                            src="/placeholder.svg?height=40&width=40&text=Dr.E"
                            alt="Dr. Elena Rodriguez"
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Dr. Elena Rodriguez</p>
                          <p className="text-gray-400 text-sm">AI Ethics Researcher</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800 mr-3">
                          <Image
                            src="/placeholder.svg?height=40&width=40&text=Dr.D"
                            alt="Dr. David Washington"
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Dr. David Washington</p>
                          <p className="text-gray-400 text-sm">Fairness in ML Specialist</p>
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

