"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"
import { Shield, ArrowLeft, Download, ExternalLink, Bookmark } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import root from "@/public/rootecstak.png"

export default function CybersecurityTrackPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const problems = [
    {
      id: 1,
      title: "Women Safety App: AI-Powered Emergency Alert System",
      description:
        "Develop an AI-driven safety app that automatically detects danger using smartphone sensors and triggers SOS alerts with real-time location.",
      difficulty: "Hard",
      tags: ["Computer Vision", "NLP", "Cybersecurity", "AI"],
      details:
        "Create a smart safety application that can autonomously detect emergencies (like screams, sudden falls, or aggressive movements) through smartphone sensors (audio, video, motion). The app should trigger SOS alerts to predefined contacts and authorities with real-time location data, even if the user cannot interact with the device. The solution should include computer vision for scene analysis, NLP for voice recognition of distress keywords, and robust cybersecurity measures to protect user data and ensure privacy.",
      resources: [
        { name: "Audio Analysis Framework", url: "#" },
        { name: "Emergency Response Protocols", url: "#" },
        { name: "Privacy Protection Guidelines", url: "#" },
      ],
    },
    {
      id: 2,
      title: "Cybercrime Reporting AI Assistant",
      description:
        "Build an AI assistant that simplifies cybercrime reporting by guiding victims through evidence collection and generating structured reports.",
      difficulty: "Medium",
      tags: ["NLP", "Cybersecurity", "Conversational AI"],
      details:
        "Develop an AI-powered assistant that helps victims of cybercrimes (phishing, hacking, harassment) through the reporting process. The system should guide users in collecting proper evidence, generate structured reports for law enforcement, and provide real-time protective measures. The assistant should use natural language processing for intuitive interaction and maintain strict cybersecurity protocols for handling sensitive user data. The solution should also educate users about preventive measures and their legal rights.",
      resources: [
        { name: "Cybercrime Reporting Standards", url: "#" },
        { name: "Conversational AI Framework", url: "#" },
        { name: "Evidence Collection Guidelines", url: "#" },
      ],
    },
    {
      id: 3,
      title: "Passwordless Authentication System",
      description:
        "Create a corporate-friendly authentication system that replaces passwords with biometrics or hardware tokens to eliminate phishing risks.",
      difficulty: "Medium",
      tags: ["Cybersecurity", "Biometrics", "FIDO2"],
      details:
        "Design and implement a passwordless authentication system suitable for corporate environments that replaces traditional passwords with more secure alternatives like biometrics (face/fingerprint recognition), hardware tokens, or magic links. The system should integrate with existing infrastructure and follow FIDO2/WebAuthn protocols. Special attention should be given to preventing spoofing attacks through liveness detection and other anti-fraud measures. The solution should significantly reduce phishing risks while improving user experience and reducing IT support costs related to password resets.",
      resources: [
        { name: "FIDO2 Implementation Guide", url: "#" },
        { name: "Biometric Security Standards", url: "#" },
        { name: "Enterprise Authentication Framework", url: "#" },
      ],
    },
    {
      id: 4,
      title: "AI-Powered Phishing Detection Tool",
      description:
        "Design a tool that scans emails/URLs in real-time, flags phishing attempts using ML, and educates users with explainable alerts.",
      difficulty: "Hard",
      tags: ["NLP", "Computer Vision", "Cybersecurity"],
      details:
        "Build an advanced phishing detection system that scans emails and URLs in real-time using machine learning algorithms. The tool should identify phishing attempts by analyzing various indicators like fake domains, suspicious language patterns, malicious attachments, and logo spoofing. The solution should integrate seamlessly with email clients and browsers, providing clear, explainable alerts that not only warn users but also educate them about the specific phishing techniques being used. The system should continuously learn from new threats and update its detection models accordingly.",
      resources: [
        { name: "Phishing Dataset Repository", url: "#" },
        { name: "ML Model Training Framework", url: "#" },
        { name: "Threat Intelligence API", url: "#" },
      ],
    },
    {
      id: 5,
      title: "Online Anti-Piracy Tracker",
      description:
        "Develop a crawler that identifies piracy sites hosting illegal content and disrupts their revenue by blocking ads.",
      difficulty: "Medium",
      tags: ["Computer Vision", "NLP", "Cybersecurity"],
      details:
        "Create an automated system that crawls the web to identify piracy sites hosting illegal movies, music, and other copyrighted content. The solution should dynamically update a blacklist (IWL) of these sites and work with ad-platform APIs to block their revenue streams. The system should use computer vision for watermark and copyright detection, NLP for content similarity analysis, and cybersecurity techniques for IP/DNS monitoring. The goal is to financially disrupt pirate sites by cutting off their ad revenue, thereby reducing their operational capacity and the overall prevalence of online piracy.",
      resources: [
        { name: "Copyright Detection Algorithms", url: "#" },
        { name: "Web Crawling Framework", url: "#" },
        { name: "Ad Platform API Documentation", url: "#" },
      ],
    },
  ]

  const mentors = [
    {
      name: "Alex Rodriguez",
      title: "Chief Information Security Officer",
      bio: "Seasoned cybersecurity executive with 15+ years of experience protecting enterprise systems and data. Expert in security architecture, risk management, and building security-focused cultures. Previously led security teams at major financial institutions and technology companies. Specializes in developing comprehensive security strategies that balance protection with business needs.",
      image: "/placeholder.svg?height=96&width=96&text=Mentor 1",
    },
    {
      name: "Dr. Maya Patel",
      title: "Privacy Researcher & Consultant",
      bio: "PhD in Computer Science with focus on privacy-preserving technologies. Published numerous papers on differential privacy and secure multi-party computation. Advises organizations on implementing privacy by design and compliance with global privacy regulations.",
      image: "/placeholder.svg?height=96&width=96&text=Mentor 2",
    },
    {
      name: "James Wilson",
      title: "Ethical Hacker & Security Engineer",
      bio: "Certified ethical hacker with expertise in penetration testing, vulnerability assessment, and security engineering. Has identified critical vulnerabilities in major systems and applications. Passionate about teaching defensive security techniques and building secure-by-design systems.",
      image: "/placeholder.svg?height=96&width=96&text=Mentor 3",
    },
    {
      name: "Sophia Chen",
      title: "IoT Security Specialist",
      bio: "Expert in securing Internet of Things ecosystems across industrial, consumer, and enterprise environments. Developed security frameworks for IoT deployments that have been adopted by major manufacturers. Previously led security for a leading IoT platform with millions of connected devices.",
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
              <div className="h-16 w-16 rounded-full bg-red-900 flex items-center justify-center mr-6">
                <Shield className="h-8 w-8 text-red-300" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Cybersecurity & Privacy Track</h1>
            </div>

            <div className="flex items-center mb-4">
              <span className="text-gray-300 mr-2">Presented by</span>
              <div className="relative h-10 w-32">
                <Image 
                  src={root} // Replace with your actual logo path
                  alt="Rootecstak"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Develop innovative solutions to protect data, systems, and privacy in an increasingly connected world.
              This track challenges you to create tools and technologies that address critical security and privacy
              challenges across various domains.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-gray-950 border-b border-gray-800 sticky top-16 z-20">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            <button
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === "overview" ? "border-red-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === "problems" ? "border-red-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"}`}
              onClick={() => setActiveTab("problems")}
            >
              Problem Statements
            </button>
            <button
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === "mentors" ? "border-red-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"}`}
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
      🔐 Cybersecurity & Privacy Track  
      <span className="block text-lg font-medium text-gray-400">Presented by Rootecstak</span>
    </h2>

    <div className="bg-gray-900 shadow-lg rounded-2xl p-8 border border-gray-800">
      {/* Introduction */}
      <p className="text-lg text-gray-300 leading-relaxed">
        The Cybersecurity & Privacy track, presented by Rootecstak, challenges participants to develop innovative solutions 
        that protect data, systems, and individual privacy in our increasingly connected world. From AI-powered safety apps to 
        passwordless authentication, from phishing detection to anti-piracy systems, this track offers a wide range of 
        problem statements to tackle.
      </p>

      {/* What We're Looking For */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-white mb-4">🔍 What We're Looking For</h3>
        <ul className="space-y-3 text-gray-300 text-lg">
          <li className="flex items-center">
            ✅ <span className="ml-2">Address significant security or privacy challenges with innovative approaches</span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2">Balance strong protection with usability and practicality</span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2">Consider the full threat landscape and potential attack vectors</span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2">Implement security & privacy by design principles</span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2">Demonstrate scalability and adaptability to evolving threats</span>
          </li>
        </ul>
      </div>

      {/* Technologies Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-white mb-4">🛠️ Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          {[
            "AI & Machine Learning for Threat Detection",
            "Biometric Authentication Systems",
            "Secure Communication Protocols",
            "Computer Vision for Content Analysis",
            "Natural Language Processing (NLP)",
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
            ✅ <span className="ml-2">A working prototype or demo</span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2">Source code repository with documentation</span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2">A presentation explaining approach & results</span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2">Description of the security/privacy problem being solved and its significance</span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2">Explanation of the security/privacy techniques employed</span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2">Discussion of potential vulnerabilities & future improvements</span>
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-red-700 to-orange-700 p-6 mt-12 rounded-xl text-center shadow-lg">
        <h3 className="text-xl font-bold text-white mb-3">📢 Ready to Get Started?</h3>
        <p className="text-gray-200 mb-4">
          Browse the problem statements provided by Rootecstak, gather your team, and start building your cybersecurity solution!
        </p>
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
                Choose from the following problem statements provided by Rootecstak or propose your own idea within the Cybersecurity & Privacy
                domain.
              </p>

              <div className="space-y-8">
                {problems.map((problem) => (
                  <div key={problem.id} className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{problem.title}</h3>
                        {/* <div
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            problem.difficulty === "Hard"
                              ? "bg-red-900/30 text-red-400"
                              : problem.difficulty === "Medium"
                                ? "bg-yellow-900/30 text-yellow-400"
                                : "bg-green-900/30 text-green-400"
                          }`}
                        >
                          {problem.difficulty}
                        </div> */}
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

                      {/* <div className="mt-6">
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
                      </div> */}

                      {/* <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-800">
                        <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                          <Download className="h-4 w-4 mr-2" />
                          Download Details
                        </Button>
                        <Button className="bg-red-600 hover:bg-red-700">
                          <Bookmark className="h-4 w-4 mr-2" />
                          Save Problem
                        </Button>
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mt-8">
                <h3 className="text-xl font-bold mb-4">Have Your Own Idea?</h3>
                <p className="mb-4">
                  If you have an innovative cybersecurity project idea that doesn't fit the problem statements above,
                  you can submit your own proposal.
                </p>
                <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                  Submit Custom Proposal
                </Button>
              </div> */}
            </div>
          )}

          {/* Mentors Tab */}
          {activeTab === "mentors" && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Mentors</h2>
              <p className="text-gray-400 mb-8">
                Our Cybersecurity & Privacy track mentors are industry experts and researchers who will provide guidance
                and support throughout the hackathon.
              </p>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
                      <p className="text-red-400 mb-3">{mentor.title}</p>
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
              </div> */}

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mt-8">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="mb-4">
                  Our mentors are available throughout the hackathon to provide guidance and support. Don't hesitate to
                  reach out!
                </p>
                {/* <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                  Schedule Mentor Session
                </Button> */}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}