"use client"

import { forwardRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Brain, Globe, Database, Shield, Code } from "lucide-react"
import Link from "next/link"

interface TracksSectionProps {
  scrollToSection: (sectionId: string) => void
}

export const TracksSection = forwardRef<HTMLDivElement, TracksSectionProps>(function TracksSection(
  { scrollToSection },
  ref,
) {
  return (
    <section id="tracks" ref={ref} className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Hackathon Tracks</h2>
          <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose your challenge and showcase your skills in one of our specialized tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Link href="/tracks/ai-ml" className="block group">
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group-hover:border-white transition-all duration-300 h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://media.giphy.com/media/KH26c44GWcwlty8DnW/giphy.gif?cid=790b7611sxvbfq2qoedj8iyc5no3k0w4z2nz8exm8fva00jc&ep=v1_gifs_search&rid=giphy.gif"
                  alt="AI Track"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-black/80 p-2 rounded-full">
                  <Brain className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
                <p className="text-gray-400 mb-4">
                  Harness the power of artificial intelligence and machine learning to solve complex problems or create
                  innovative applications.
                </p>
                <ul className="space-y-2 text-gray-400 list-disc pl-5 mb-4">
                  <li>Natural language processing solutions</li>
                  <li>Computer vision applications</li>
                  <li>Predictive analytics tools</li>
                  <li>AI-powered automation systems</li>
                </ul>
                <div className="pt-4 border-t border-gray-800">
                  <div className="flex items-center text-sm text-gray-500">
                    <Code className="h-4 w-4 mr-2" />
                    <span>Recommended skills: Python, TensorFlow, PyTorch, Data Science</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/tracks/web3-blockchain" className="block group">
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group-hover:border-white transition-all duration-300 h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGFyMWttejVva20xY2M3bXQ5a2VteGF3cnhhczA3M2cxbmE0MzdnZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ohs7HdhQA4ffttvrO/giphy.gif"
                  alt="Web3 Track"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-black/80 p-2 rounded-full">
                  <Globe className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Web3 & Blockchain</h3>
                <p className="text-gray-400 mb-4">
                  Build decentralized applications, smart contracts, or blockchain-based solutions that push the
                  boundaries of Web3.
                </p>
                <ul className="space-y-2 text-gray-400 list-disc pl-5 mb-4">
                  <li>DeFi applications and protocols</li>
                  <li>NFT platforms and marketplaces</li>
                  <li>DAO governance systems</li>
                  <li>Cross-chain interoperability solutions</li>
                </ul>
                <div className="pt-4 border-t border-gray-800">
                  <div className="flex items-center text-sm text-gray-500">
                    <Code className="h-4 w-4 mr-2" />
                    <span>Recommended skills: Solidity, Web3.js, Ethers.js, React</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/tracks/data-analytics" className="block group">
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group-hover:border-white transition-all duration-300 h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJtZXJtZnRqZnRxZGJtZnRqZnRxZGJtZnRqZnRxZGJtZnRqZnRxZA/3oKIPEqDGUULpEU0aQ/giphy.gif"
                  alt="Data Track"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-black/80 p-2 rounded-full">
                  <Database className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Data Analytics & Visualization</h3>
                <p className="text-gray-400 mb-4">
                  Transform complex data into actionable insights through innovative analytics and visualization
                  techniques.
                </p>
                <ul className="space-y-2 text-gray-400 list-disc pl-5 mb-4">
                  <li>Interactive dashboards and data stories</li>
                  <li>Big data processing pipelines</li>
                  <li>Predictive modeling applications</li>
                  <li>Novel data visualization approaches</li>
                </ul>
                <div className="pt-4 border-t border-gray-800">
                  <div className="flex items-center text-sm text-gray-500">
                    <Code className="h-4 w-4 mr-2" />
                    <span>Recommended skills: Data Analysis, Visualization, SQL, R</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/tracks/cybersecurity" className="block group">
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group-hover:border-white transition-all duration-300 h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHBlbHU5Y3RvODZwZnU5Z3V2cjV6azVsajZ2N284ZG10b21zeXh1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/077i6AULCXc0FKTj9s/giphy.gif"
                  alt="Security Track"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-black/80 p-2 rounded-full">
                  <Shield className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cybersecurity & Privacy</h3>
                <p className="text-gray-400 mb-4">
                  Develop solutions that enhance digital security, protect privacy, or address emerging cybersecurity
                  challenges.
                </p>
                <ul className="space-y-2 text-gray-400 list-disc pl-5 mb-4">
                  <li>Threat detection and prevention systems</li>
                  <li>Privacy-preserving technologies</li>
                  <li>Secure authentication mechanisms</li>
                  <li>Vulnerability assessment tools</li>
                </ul>
                <div className="pt-4 border-t border-gray-800">
                  <div className="flex items-center text-sm text-gray-500">
                    <Code className="h-4 w-4 mr-2" />
                    <span>Recommended skills: Cybersecurity, Cryptography, Network Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Open Innovation Track - Centered */}
        <div className="max-w-xl mx-auto mb-16">
          <Link href="/tracks/open-innovation" className="block group">
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group-hover:border-white transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://cdn.dribbble.com/users/107759/screenshots/3745852/exclusive.gif"
                  alt="Open Innovation Track"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-black/80 p-2 rounded-full">
                  <Code className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Open Innovation Track</h3>
                <p className="text-gray-400 mb-4">
                  Have a groundbreaking idea that doesn't fit neatly into the tracks above? The Open Innovation track
                  welcomes all creative projects that demonstrate technical excellence and innovative thinking.
                </p>
                <ul className="space-y-2 text-gray-400 list-disc pl-5 mb-4">
                  <li>Novel hardware solutions</li>
                  <li>Cross-domain applications</li>
                  <li>Experimental technologies</li>
                  <li>Unique problem-solving approaches</li>
                </ul>
                <div className="pt-4 border-t border-gray-800">
                  <div className="flex items-center text-sm text-gray-500">
                    <Code className="h-4 w-4 mr-2" />
                    <span>Any tech stack, any approach - innovation is key</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200" onClick={() => scrollToSection("prizes")}>
            View Prizes <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
})

