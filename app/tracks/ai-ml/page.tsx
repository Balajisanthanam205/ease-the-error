"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"
import { Brain, ArrowLeft, Download, ExternalLink, Bookmark } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AIMLTrackPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const problems = [
    {
      id: 1,
      title: "OS Assistant: Smart File and Browser Manager",
      description:
        "Develop an AI-powered assistant that handles everyday OS and browser tasks like creating files, deleting old ones, and organizing tabs based on simple voice or text commands from the user.",
      difficulty: "Hard",
      tags: ["Healthcare", "Computer Vision", "NLP"],
      details:
        "Users often struggle with managing multiple browser tabs and system files efficiently, leading to cluttered workspaces and productivity loss. A smart assistant that automates these tasks can streamline workflow and enhance user experience.",
      resources: [
        { name: "Medical Image Dataset", url: "#" },
        { name: "Symptom-Disease Correlation Database", url: "#" },
        { name: "Research Paper: AI in Medical Diagnosis", url: "#" },
      ],
    },
    {
      id: 2,
      title: "Agentic AI: Software Architecture Design Enhancer",
      description:
        "Create an AI assistant that takes a software project idea and delivers a detailed architecture plan, including frameworks, libraries, and deployment options, refining it for accuracy and practicality.",
      difficulty: "Medium",
      tags: ["Education", "NLP", "Personalization"],
      details:
        "Software developers often spend a significant amount of time structuring projects, selecting the right technologies, and ensuring scalability. An AI assistant that automates architecture planning can speed up development cycles and improve decision-making.",
      resources: [
        { name: "Educational Content Database", url: "#" },
        { name: "Learning Styles Assessment Framework", url: "#" },
        { name: "Student Performance Analytics API", url: "#" },
      ],
    },
    {
      id: 3,
      title: "AI Music Composer",
      description:
        "Develop an AI-powered music composer that can remix tracks intelligently, preserving musicality while introducing creative variations.",
      difficulty: "Medium",
      tags: ["Agriculture", "Sustainability", "Predictive Analytics"],
      details:
        "Music producers and artists frequently seek fresh remixes of their tracks but lack the time or expertise to manually craft variations. AI-driven composition can generate high-quality remixes tailored to different styles and moods.",
      resources: [
        { name: "Agricultural Data Repository", url: "#" },
        { name: "Weather API Documentation", url: "#" },
        { name: "Sustainable Farming Practices Guide", url: "#" },
      ],
    },
    {
      id: 4,
      title: "FinTech: Dynamic Investment Portfolio Manager",
      description:
        "Design a dynamic investment portfolio manager for retail investors, leveraging real-time market data and user preferences to optimize asset allocation and risk management.",
      difficulty: "Hard",
      tags: ["Speech Recognition", "Low-Resource Languages", "Transfer Learning"],
      details:
        "Retail investors often struggle with managing their portfolios efficiently due to a lack of real-time insights and financial expertise. An AI-driven portfolio manager can provide personalized investment strategies based on risk appetite, market trends, and financial goals.",
      resources: [
        { name: "Common Voice Dataset", url: "#" },
        { name: "Low-Resource Language Samples", url: "#" },
        { name: "Transfer Learning for ASR Paper", url: "#" },
      ],
    },
    {
      id: 5,
      title: "AI-Powered Automated Interview Evaluator",
      description:
        "Traditional interviews require human intervention to assess a candidate’s responses, leading to delays and bias.",
      difficulty: "Medium",
      tags: ["AI Ethics", "Fairness", "Model Analysis"],
      details:
        "Companies struggle with the inefficiencies of manual interview evaluation, where HR teams spend significant time assessing candidates, often introducing subjective bias. An AI-driven interview assistant can streamline the process by providing objective, real-time assessments based on speech patterns, confidence, and technical accuracy.",
      resources: [
        { name: "Fairness Indicators Library", url: "#" },
        { name: "Synthetic Test Datasets", url: "#" },
        { name: "AI Ethics Guidelines", url: "#" },
      ],
    },
  ]

  const mentors = [
    {
      name: "Kishore M",
      title: "III year AD 'A'",
      bio: "Smart India Hackathon 2024 Winner",
      domain: "Data Analytics",
      image: "/placeholder.svg?height=96&width=96&text=Kishore+M",
      linkedin: "#",
    },
    {
      name: "Mukundh A P",
      title: "III year AD 'B'",
      bio: "Smart India Hackathon 2024 Winner",
      domain: "Data Analytics",
      image: "/placeholder.svg?height=96&width=96&text=Mukundh+AP",
      linkedin: "#",
    },
    {
      name: "Cletus Rajkumar",
      title: "III year CS 'A'",
      bio: "Smart India Hackathon Finalist",
      domain: "Machine Learning",
      image: "/placeholder.svg?height=96&width=96&text=Cletus+R",
      linkedin: "#",
    },
    {
      name: "K. Jaiadhitya",
      title: "III year CS 'A'",
      bio: "UmagineTN Third Prize Winner",
      domain: "Machine Learning",
      image: "/placeholder.svg?height=96&width=96&text=Jaiadhitya",
      linkedin: "#",
    },
    {
      name: "Gowtham S",
      title: "",
      bio: "Smart India Hackathon Finalist",
      domain: "Cyber Security",
      image: "/placeholder.svg?height=96&width=96&text=Gowtham+S",
      linkedin: "#",
    },
    {
      name: "Mugundhan Y",
      title: "III year AD 'B'",
      bio: "Smart India Hackathon 2024 Winner",
      domain: "Cyber Security",
      image: "/placeholder.svg?height=96&width=96&text=Mugundhan+Y",
      linkedin: "#",
    },
    {
      name: "Devesh S",
      title: "III year CS 'A'",
      bio: "UmagineTN Third Prize Winner",
      domain: "Blockchain & Web3",
      image: "/placeholder.svg?height=96&width=96&text=Devesh+S",
      linkedin: "#",
    },
    {
      name: "Praveen Kumar R",
      title: "III year AD 'B'",
      bio: "Smart India Hackathon 2024 Winner",
      domain: "Blockchain & Web3",
      image: "/placeholder.svg?height=96&width=96&text=Praveen+Kumar+R",
      linkedin: "#",
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
              <div className="h-16 w-16 rounded-full bg-purple-900 flex items-center justify-center mr-6">
                <Brain className="h-8 w-8 text-purple-300" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">AI & Machine Learning Track</h1>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Harness the power of artificial intelligence and machine learning to solve complex problems and create
              innovative applications. This track challenges you to push the boundaries of AI technology to address
              real-world challenges across healthcare, education, sustainability, and more.
            </p>

             {/*<div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-purple-400 font-medium">Difficulty:</span> Intermediate to Advanced
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-purple-400 font-medium">Prize Pool:</span> $3,000
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-purple-400 font-medium">Team Size:</span> 1-4 members
              </div>
            </div>*/}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-gray-950 border-b border-gray-800 sticky top-16 z-20">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            <button
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === "overview" ? "border-purple-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === "problems" ? "border-purple-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"}`}
              onClick={() => setActiveTab("problems")}
            >
              Problem Statements
            </button>
            <button
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === "mentors" ? "border-purple-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"}`}
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
  <div className="max-w-5xl mx-auto px-6 py-12">
    {/* Section Title */}
    <h2 className="text-4xl font-extrabold text-white text-center mb-8">
      🚀 AI & Machine Learning Track Overview
    </h2>

    <div className="bg-gray-900 shadow-lg rounded-2xl p-8 border border-gray-800">
      {/* Introduction */}
      <p className="text-lg text-gray-300 leading-relaxed">
        The AI & Machine Learning track challenges participants to develop innovative solutions that leverage AI, ML,
        and data science to solve real-world problems. From healthcare diagnostics to sustainable agriculture, this
        track offers a wide range of problem statements to tackle.
      </p>

      {/* What We're Looking For */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-white mb-4">🔍 What We're Looking For</h3>
        <ul className="space-y-3 text-gray-300 text-lg">
          <li className="flex items-center">
            ✅ <span className="ml-2">Innovative applications of AI/ML techniques</span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2">Solutions addressing real-world challenges</span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2">Ethical considerations & bias mitigation</span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2">User-friendly & scalable implementations</span>
          </li>
        </ul>
      </div>

      {/* Technologies Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-white mb-4">🛠️ Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          {[
            "TensorFlow & PyTorch",
            "Hugging Face Transformers",
            "OpenCV for Computer Vision",
            "Scikit-learn & Keras",
            "Cloud AI Services",
            "Matplotlib & D3.js",
          ].map((tech, index) => (
            <div key={index} className="bg-gray-800 p-3 rounded-lg text-center text-sm font-medium">
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Submission Requirements */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-white mb-4">📑 Submission Requirements</h3>
        <ul className="space-y-3 text-gray-300 text-lg">
          <li className="flex items-center">
            📌 <span className="ml-2">A working prototype/demo</span>
          </li>
          <li className="flex items-center">
            📌 <span className="ml-2">Source code repository with documentation</span>
          </li>
          <li className="flex items-center">
            📌 <span className="ml-2">A presentation outlining your approach & results</span>
          </li>
          <li className="flex items-center">
            📌 <span className="ml-2">Clear problem statement & its significance</span>
          </li>
          <li className="flex items-center">
            📌 <span className="ml-2">Description of AI/ML techniques used</span>
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-700 to-blue-700 p-6 mt-12 rounded-xl text-center shadow-lg">
        <h3 className="text-xl font-bold text-white mb-3">🚀 Ready to Get Started?</h3>
        <p className="text-gray-200 mb-4">Browse the problem statements, gather your team, and start building your AI solution!</p>
        <Button
          className="px-6 py-3 text-lg font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 rounded-lg"
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
                Choose from the following problem statements or propose your own idea within the AI & Machine Learning
                domain.
              </p>

              <div className="space-y-8">
                {problems.map((problem) => (
                  <div key={problem.id} className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{problem.title}</h3>
                        {/*<div
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            problem.difficulty === "Hard"
                              ? "bg-red-900/30 text-red-400"
                              : problem.difficulty === "Medium"
                                ? "bg-yellow-900/30 text-yellow-400"
                                : "bg-green-900/30 text-green-400"
                          }`}
                        >
                          {problem.difficulty}
                        </div>*/}
                      </div>
                      <h4 className="text-lg font-medium mb-2">Problem Statement:</h4>
                      <p className="text-gray-300 mb-4">{problem.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {problem.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-800 px-2 py-1 rounded-md text-xs text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6">
                        <h4 className="text-lg font-medium mb-2">Study Case:</h4>
                        <p className="text-gray-400">{problem.details}</p>
                      </div>

                      {/*<div className="mt-6">
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
                        <Button className="bg-purple-600 hover:bg-purple-700">
                          <Bookmark className="h-4 w-4 mr-2" />
                          Save Problem
                        </Button>
                      </div>*/}
                    </div>
                  </div>
                ))}
              </div>


            </div>
          )}

         {/* Mentors Tab */}
         {activeTab === "mentors" && (
  <div className="max-w-4xl mx-auto">
    <p className="text-gray-400 mb-8">
      Our Cybersecurity & Privacy track mentors are industry experts and researchers who will provide guidance
      and support throughout the hackathon.
    </p>

    {["Data Analytics", "Machine Learning", "Cyber Security", "Blockchain & Web3"].map((domain) => {
      const filteredMentors = mentors.filter((mentor) => mentor.domain === domain);
      return (
        <div key={domain} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">{domain}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex flex-col md:flex-row gap-6"
              >
                {/* Profile Image */}
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

                {/* Mentor Details */}
                <div>
                  <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                  <p className="text-red-400 mb-2">{mentor.title}</p>
                  <p className="text-gray-400 text-sm mb-3">{mentor.bio}</p>

                  {/* LinkedIn Icon */}
                  <div className="flex items-center gap-3">
                    <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M20.452 20.452H16.9V14.44c0-1.433-.026-3.278-1.998-3.278-1.999 0-2.305 1.56-2.305 3.17v6.121H8.547V9.081h3.385v1.557h.048c.47-.891 1.617-1.83 3.332-1.83 3.567 0 4.23 2.345 4.23 5.398v6.246zM5.337 7.433a2.042 2.042 0 110-4.084 2.042 2.042 0 010 4.084zm1.923 13.019H3.417V9.081h3.843v11.371z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    })}

    {/* Help Section */}
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mt-8">
      <h3 className="text-xl font-bold mb-4">Need Help?</h3>
      <p className="mb-4">
        Our mentors are available throughout the hackathon to provide guidance and support. Don't hesitate to
        reach out!
      </p>
      <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
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
