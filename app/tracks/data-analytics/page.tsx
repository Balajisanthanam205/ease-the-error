"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"
import { BarChart, ArrowLeft, Download, ExternalLink, Bookmark } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DataAnalyticsTrackPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const problems = [
    {
      id: 1,
      title: "Predicting Patient Readmission in Hospitals",
      description:
        "Develop a predictive model to identify patients at risk of readmission within 30 days post-discharge, incorporating socioeconomic and environmental factors.",
      difficulty: "Hard",
      tags: ["Healthcare", "Machine Learning", "Predictive Analytics"],
      details:
        "Hospital XYZ observed that 15% of discharged patients return within a month due to complications, with a significant overlap in patients from specific socio-economic backgrounds. This trend highlights the need to consider external factors like access to healthcare, living conditions, and support systems.",
      resources: [
        { name: "Healthcare Datasets Repository", url: "#" },
        { name: "Predictive Modeling in Healthcare Guide", url: "#" },
        { name: "Readmission Risk Factors Research", url: "#" },
      ],
    },
    {
      id: 2,
      title: "Real-Time Anomaly Detection in Credit Card Transactions",
      description:
        "Design a system to detect fraudulent credit card transactions in real-time, while considering user behavioral drift over time.",
      difficulty: "Hard",
      tags: ["Fraud Detection", "Anomaly Detection", "Finance"],
      details:
        "Bank ABC reported $10 million in annual losses due to fraudulent activities. Analysts observed that fraudsters mimic legitimate user behavior over time, gradually altering patterns to evade detection systems.",
      resources: [
        { name: "Fraud Detection Datasets", url: "#" },
        { name: "Anomaly Detection Algorithms", url: "#" },
        { name: "Financial Transaction Security Guide", url: "#" },
      ],
    },
    {
      id: 3,
      title: "Optimizing Urban Public Transport Scheduling",
      description:
        "Develop a predictive model to optimize bus schedules by considering passenger demand, traffic patterns, and the carbon footprint of each route.",
      difficulty: "Medium",
      tags: ["Transport", "Sustainability", "AI Optimization"],
      details:
        "Motorville’s City Transport Authority is under pressure to reduce its carbon emissions by 20% within the next 5 years. Inefficient scheduling has resulted in buses running below capacity and higher emissions per passenger.",
      resources: [
        { name: "Public Transport Optimization Techniques", url: "#" },
        { name: "Traffic and Passenger Demand Datasets", url: "#" },
        { name: "Carbon Footprint Analysis Tools", url: "#" },
      ],
    },
    {
      id: 4,
      title: "Sentiment Analysis for Movie Box Office Predictions",
      description:
        "Analyze social media sentiment to predict the opening weekend box office revenue of movies and assess their long-term cultural impact.",
      difficulty: "Medium",
      tags: ["Social Media", "NLP", "Entertainment"],
      details:
        "Studio Alpha wants to understand the dual role of sentiment: predicting financial success and gauging cultural influence (e.g., viral trends, memes).",
      resources: [
        { name: "Social Media Sentiment Analysis Guide", url: "#" },
        { name: "Box Office Prediction Models", url: "#" },
        { name: "NLP Techniques for Trend Analysis", url: "#" },
      ],
    },
    {
      id: 5,
      title: "User Behavior Analysis Track",
      description:
        "Develop a solution to identify distinct community groups within the user base based on interaction patterns and interests.",
      difficulty: "Medium",
      tags: ["User Analytics", "AI Clustering", "Community Engagement"],
      details:
        "Online platforms and digital communities struggle to understand user behavior effectively, leading to generic content delivery and poor engagement. A system that analyzes user interactions can help categorize audience segments, enabling better community management and personalized experiences.",
      resources: [
        { name: "User Interaction Datasets", url: "#" },
        { name: "Clustering Algorithms for Behavior Analysis", url: "#" },
        { name: "Community Engagement Strategies", url: "#" },
      ],
    },
  ];
  

  const mentors = [
    {
      name: "Dr. Sarah Chen",
      title: "Lead Data Scientist, Tech Corporation",
      bio: "PhD in Statistics with 12+ years of experience in data science and analytics. Expert in predictive modeling and data visualization. Previously led data science teams at major tech companies and published research on novel visualization techniques.",
      image: "/placeholder.svg?height=96&width=96&text=Mentor 1",
    },
    {
      name: "Marcus Johnson",
      title: "Data Visualization Specialist",
      bio: "Award-winning data visualization designer with expertise in transforming complex data into intuitive visual stories. Created visualizations for major publications and developed dashboards used by Fortune 500 companies. Passionate about making data accessible through thoughtful design.",
      image: "/placeholder.svg?height=96&width=96&text=Mentor 2",
    },
    {
      name: "Dr. Priya Sharma",
      title: "Professor of Data Science",
      bio: "Researcher and educator specializing in data analytics and machine learning. Published numerous papers on novel analytical techniques and visualization methods. Advises startups on implementing data-driven decision making processes.",
      image: "/placeholder.svg?height=96&width=96&text=Mentor 3",
    },
    {
      name: "David Wilson",
      title: "Business Intelligence Architect",
      bio: "Expert in designing and implementing business intelligence solutions that transform raw data into actionable insights. Specializes in creating scalable data pipelines and analytics platforms that drive business value. Previously worked with companies across finance, healthcare, and retail sectors.",
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
              <div className="h-16 w-16 rounded-full bg-green-900 flex items-center justify-center mr-6">
                <BarChart className="h-8 w-8 text-green-300" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Data Analytics & Visualization Track</h1>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Transform raw data into meaningful insights and compelling visualizations. This track challenges you to
              create innovative solutions that make data more accessible, understandable, and actionable for diverse
              users and use cases.
            </p>

           {/* <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-green-400 font-medium">Difficulty:</span> Beginner to Advanced
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-green-400 font-medium">Prize Pool:</span> $2,500
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-green-400 font-medium">Team Size:</span> 1-4 members
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
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === "overview" ? "border-green-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === "problems" ? "border-green-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"}`}
              onClick={() => setActiveTab("problems")}
            >
              Problem Statements
            </button>
            <button
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === "mentors" ? "border-green-500 text-white" : "border-transparent text-gray-400 hover:text-gray-300"}`}
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
      📊 Data Analytics & Visualization Track
    </h2>

    <div className="bg-gray-900 shadow-lg rounded-2xl p-8 border border-gray-800">
      {/* Introduction */}
      <p className="text-lg text-gray-300 leading-relaxed">
        The Data Analytics & Visualization track challenges participants to develop innovative solutions that transform 
        raw data into meaningful insights and compelling visualizations. From interactive dashboards to predictive 
        analytics tools, this track offers a wide range of problem statements to tackle.
      </p>

      {/* What We're Looking For */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-white mb-4">🔍 What We're Looking For</h3>
        <ul className="space-y-3 text-gray-300 text-lg">
          <li className="flex items-center">
            📌 <span className="ml-2">Transform complex data into clear, intuitive visualizations</span>
          </li>
          <li className="flex items-center">
            📌 <span className="ml-2">Enable data-driven decision-making for diverse users</span>
          </li>
          <li className="flex items-center">
            📌 <span className="ml-2">Apply analytical techniques to extract meaningful insights</span>
          </li>
          <li className="flex items-center">
            📌 <span className="ml-2">Ensure user experience & accessibility in design</span>
          </li>
          <li className="flex items-center">
            📌 <span className="ml-2">Demonstrate scalability & performance with large datasets</span>
          </li>
        </ul>
      </div>

      {/* Technologies Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-white mb-4">🛠️ Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          {[
            "Python (Pandas, NumPy, Seaborn)",
            "Matplotlib & Plotly",
            "D3.js, Chart.js, Power BI",
            "Tableau & Business Intelligence",
            "Spark & Dask (Big Data)",
            "Machine Learning for Analytics",
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
            ✅ <span className="ml-2">Description of the problem & significance</span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2">Explanation of analytical techniques used</span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2">Discussion of limitations & future improvements</span>
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-700 to-teal-700 p-6 mt-12 rounded-xl text-center shadow-lg">
        <h3 className="text-xl font-bold text-white mb-3">📢 Ready to Get Started?</h3>
        <p className="text-gray-200 mb-4">
          Browse the problem statements, gather your team, and start building your data analytics solution!
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
                Choose from the following problem statements or propose your own idea within the Data Analytics &
                Visualization domain.
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
                        <Button className="bg-green-600 hover:bg-green-700">
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
              {/*<h2 className="text-3xl font-bold mb-6">COMING SOON......!!!</h2>*/}
              <p className="text-gray-400 mb-8">
                Our Data Analytics & Visualization track mentors are industry experts and researchers who will provide
                guidance and support throughout the hackathon.
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
                      <p className="text-green-400 mb-3">{mentor.title}</p>
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
                <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
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

