"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"
import { Lightbulb, ArrowLeft, Download, ExternalLink, Bookmark } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OpenInnovationTrackPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const problems = [
    {
      id: 1,
      title: "Accessible Technology for Underserved Communities",
      description:
        "Create technology solutions that address the specific needs of underserved or marginalized communities.",
      difficulty: "Medium",
      tags: ["Social Impact", "Accessibility", "Inclusion"],
      details:
        "Develop a solution that makes technology more accessible, relevant, or beneficial for communities that are typically underserved by mainstream tech. This could include solutions for rural areas, elderly populations, people with disabilities, low-income communities, or other marginalized groups. Focus on addressing real needs through appropriate technology that considers the specific constraints and context of the target community.",
      resources: [
        { name: "Inclusive Design Guidelines", url: "#" },
        { name: "Community Needs Assessment Framework", url: "#" },
        { name: "Appropriate Technology Case Studies", url: "#" },
      ],
    },
    {
      id: 2,
      title: "Climate Tech Innovation",
      description:
        "Build technology solutions that address climate change through mitigation, adaptation, or awareness.",
      difficulty: "Hard",
      tags: ["Climate", "Sustainability", "Environmental"],
      details:
        "Create a solution that leverages technology to address some aspect of climate change. This could include tools for reducing carbon emissions, platforms for climate adaptation planning, systems for environmental monitoring, applications that promote sustainable behaviors, or technologies that increase climate awareness and action. The solution should demonstrate measurable impact and consider scalability.",
      resources: [
        { name: "Climate Data APIs", url: "#" },
        { name: "Carbon Footprint Calculation Methods", url: "#" },
        { name: "Climate Tech Impact Assessment", url: "#" },
      ],
    },
    {
      id: 3,
      title: "Future of Work and Education",
      description: "Develop solutions that reimagine work or education for a rapidly changing technological landscape.",
      difficulty: "Medium",
      tags: ["Future of Work", "Education", "Skills"],
      details:
        "Build a solution that addresses the changing nature of work or education in the face of automation, AI, remote work, and other technological shifts. This could include platforms for skills development and career transitions, tools for more effective remote collaboration, systems for alternative credentialing, or technologies that create new types of work opportunities. The solution should consider both near-term needs and longer-term trends.",
      resources: [
        { name: "Future of Work Research", url: "#" },
        { name: "Educational Technology Framework", url: "#" },
        { name: "Skills Taxonomy Database", url: "#" },
      ],
    },
    {
      id: 4,
      title: "Mental Health and Wellbeing Technology",
      description: "Create technology solutions that support mental health, wellbeing, and human flourishing.",
      difficulty: "Medium",
      tags: ["Mental Health", "Wellbeing", "Healthcare"],
      details:
        "Develop a solution that uses technology to promote mental health, reduce stress, build resilience, or otherwise support psychological wellbeing. This could include applications for mindfulness or stress reduction, platforms for connecting with mental health resources, tools for tracking and improving wellbeing metrics, or technologies that foster healthy digital habits. The solution should be evidence-informed and consider ethical implications.",
      resources: [
        { name: "Mental Health Design Guidelines", url: "#" },
        { name: "Wellbeing Assessment Tools", url: "#" },
        { name: "Digital Mental Health Research", url: "#" },
      ],
    },
    {
      id: 5,
      title: "Open Innovation Challenge",
      description:
        "Propose and develop your own innovative solution to a significant problem not covered by other tracks.",
      difficulty: "Varies",
      tags: ["Innovation", "Problem Solving", "Creativity"],
      details:
        "This is an open challenge for teams to identify a significant problem not addressed in other tracks and develop an innovative technological solution. The problem should be well-defined and important, and the solution should demonstrate technical excellence, creativity, and potential for impact. Teams choosing this challenge should clearly articulate the problem, why it matters, and how their solution addresses it in a novel and effective way.",
      resources: [
        { name: "Problem Definition Framework", url: "#" },
        { name: "Innovation Methodologies Guide", url: "#" },
        { name: "Impact Assessment Tools", url: "#" },
      ],
    },
  ]

  const mentors = [
    {
      name: "Dr. Emily Chen",
      title: "Social Innovation Researcher",
      bio: "PhD in Human-Computer Interaction with focus on technology for social impact. Leads research on designing technology with and for underserved communities. Previously developed award-winning solutions for accessibility and inclusion. Passionate about ethical technology that addresses real human needs.",
      image: "/placeholder.svg?height=96&width=96&text=Mentor 1",
    },
    {
      name: "Marcus Johnson",
      title: "Climate Tech Entrepreneur",
      bio: "Founded multiple climate tech startups focused on renewable energy and carbon reduction. Expert in sustainability innovation and environmental impact assessment. Advises organizations on implementing technology-driven sustainability initiatives and measuring their effectiveness.",
      image: "/placeholder.svg?height=96&width=96&text=Mentor 2",
    },
    {
      name: "Dr. Sophia Williams",
      title: "Future of Work Strategist",
      bio: "Researcher and consultant specializing in how technology is reshaping work and education. Author of books on skills for the future economy and advisor to governments on workforce development policy. Helps organizations navigate technological disruption and build future-ready teams.",
      image: "/placeholder.svg?height=96&width=96&text=Mentor 3",
    },
    {
      name: "Dr. James Lee",
      title: "Digital Wellbeing Expert",
      bio: "Clinical psychologist specializing in the intersection of technology and mental health. Developed digital interventions for stress, anxiety, and wellbeing that have helped thousands of users. Advocates for human-centered design that promotes psychological flourishing in the digital age.",
      image: "/placeholder.svg?height=96&width=96&text=Mentor 4",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <ParticleBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/#tracks" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Tracks
            </Link>

            <div className="flex items-center mb-6">
              <div className="h-16 w-16 rounded-full bg-amber-900 flex items-center justify-center mr-6">
                <Lightbulb className="h-8 w-8 text-amber-300" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Open Innovation Track</h1>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Create innovative solutions to pressing social, environmental, and human challenges. This track encourages
              you to think beyond traditional technology domains and develop projects that address meaningful problems
              and create positive impact.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-amber-400 font-medium">Difficulty:</span> All Levels
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-amber-400 font-medium">Prize Pool:</span> $2,500
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-amber-400 font-medium">Team Size:</span> 1-4 members
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-gray-950 border-b border-gray-800 sticky top-16 z-20">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            <button
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === "overview" ? "border-amber-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === "problems" ? "border-amber-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"}`}
              onClick={() => setActiveTab("problems")}
            >
              Problem Statements
            </button>
            <button
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === "mentors" ? "border-amber-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"}`}
              onClick={() => setActiveTab("mentors")}
            >
              Mentors
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Track Overview</h2>

              <div className="prose prose-lg prose-invert max-w-none">
                <p>
                  The Open Innovation track challenges participants to develop solutions that address important social,
                  environmental, and human challenges. This track is intentionally broad to encourage creative thinking
                  beyond traditional technology domains. From accessibility solutions to climate tech, from the future
                  of work to mental health technology, this track offers a wide range of problem statements to tackle.
                </p>

                <h3>What We're Looking For</h3>
                <p>
                  We're seeking solutions that demonstrate not only technical excellence but also thoughtful application
                  of technology to address meaningful problems and create positive impact. Successful projects will:
                </p>

                <ul>
                  <li>Address significant social, environmental, or human challenges</li>
                  <li>Demonstrate a deep understanding of the problem context</li>
                  <li>Create innovative solutions with potential for real impact</li>
                  <li>Consider ethical implications and potential unintended consequences</li>
                  <li>Show potential for sustainability and scalability</li>
                </ul>

                <h3>Technologies</h3>
                <p>
                  Participants are encouraged to use any technologies that are appropriate for their chosen problem.
                  This track is technology-agnostic, focusing more on the problem being solved and the potential impact
                  of the solution than on specific technologies used.
                </p>

                <h3>Submission Requirements</h3>
                <p>All submissions must include:</p>

                <ul>
                  <li>Working prototype or demo of your solution</li>
                  <li>Source code repository with documentation</li>
                  <li>Brief presentation explaining your approach and results</li>
                  <li>Clear articulation of the problem being addressed and why it matters</li>
                  <li>Explanation of how your solution creates positive impact</li>
                  <li>Discussion of limitations and future improvements</li>
                </ul>

                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mt-8">
                  <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
                  <p className="mb-4">
                    Browse the problem statements, gather your team, and start building your innovative solution!
                  </p>
                  <Button
                    className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                    onClick={() => setActiveTab("problems")}
                  >
                    View Problem Statements
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Problem Statements Tab */}
          {activeTab === "problems" && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Problem Statements</h2>
              <p className="text-gray-400 mb-8">
                Choose from the following problem statements or propose your own idea within the Open Innovation domain.
              </p>

              <div className="space-y-8">
                {problems.map((problem) => (
                  <div key={problem.id} className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{problem.title}</h3>
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            problem.difficulty === "Hard"
                              ? "bg-red-900/30 text-red-400"
                              : problem.difficulty === "Medium"
                                ? "bg-yellow-900/30 text-yellow-400"
                                : problem.difficulty === "Varies"
                                  ? "bg-purple-900/30 text-purple-400"
                                  : "bg-green-900/30 text-green-400"
                          }`}
                        >
                          {problem.difficulty}
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4">{problem.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {problem.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-800 px-2 py-1 rounded-md text-xs text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6">
                        <h4 className="text-lg font-medium mb-2">Problem Details</h4>
                        <p className="text-gray-400">{problem.details}</p>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-lg font-medium mb-2">Resources</h4>
                        <ul className="space-y-2">
                          {problem.resources.map((resource, index) => (
                            <li key={index} className="flex items-center">
                              <ExternalLink className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                              <a href={resource.url} className="text-blue-400 hover:underline">
                                {resource.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-800">
                        <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                          <Download className="h-4 w-4 mr-2" />
                          Download Details
                        </Button>
                        <Button className="bg-amber-600 hover:bg-amber-700">
                          <Bookmark className="h-4 w-4 mr-2" />
                          Save Problem
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>


            </div>
          )}

          {/* Mentors Tab */}
          {activeTab === "mentors" && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Track Mentors</h2>
              <p className="text-gray-400 mb-8">
                Our Open Innovation track mentors are experts in social impact, sustainability, future of work, and
                wellbeing who will provide guidance and support throughout the hackathon.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {mentors.map((mentor, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex flex-col md:flex-row gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-800">
                        <Image
                          src={mentor.image || "/placeholder.svg"}
                          alt={mentor.name}
                          width={96}
                          height={96}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                      <p className="text-amber-400 mb-3">{mentor.title}</p>
                      <p className="text-gray-400 text-sm mb-3">{mentor.bio}</p>
                      <div className="flex gap-3">
                        <a href="#" className="text-blue-400 hover:text-blue-300">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <a href="#" className="text-blue-400 hover:text-blue-300">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                        <a href="#" className="text-blue-400 hover:text-blue-300">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mt-8">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="mb-4">
                  Our mentors are available throughout the hackathon to provide guidance and support. Don't hesitate to
                  reach out!
                </p>
                <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                  Schedule Mentor Session
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

