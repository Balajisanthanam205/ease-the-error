"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"
import { Brain, ArrowLeft, Check, Download, ExternalLink, Bookmark } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AIMLTrackPage() {
  const [activeTab, setActiveTab] = useState("overview")
  
  const problems = [
    {
      id: 1,
      title: "AI-Powered Medical Diagnosis Assistant",
      description: "Develop an AI system that can assist healthcare professionals in diagnosing diseases from medical images, patient symptoms, or clinical data.",
      difficulty: "Hard",
      tags: ["Healthcare", "Computer Vision", "NLP"],
      details: "The system should be able to analyze medical images (X-rays, MRIs, CT scans) and/or patient symptom descriptions to suggest possible diagnoses with confidence levels. The solution should explain its reasoning and provide references to relevant medical literature. Bonus points for solutions that can work with limited computational resources or in offline environments.",
      resources: [
        { name: "Medical Image Dataset", url: "#" },
        { name: "Symptom-Disease Correlation Database", url: "#" },
        { name: "Research Paper: AI in Medical Diagnosis", url: "#" }
      ]
    },
    {
      id: 2,
      title: "Personalized Education Content Generator",
      description: "Create an AI system that generates personalized educational content based on a student's learning style, progress, and areas of difficulty.",
      difficulty: "Medium",
      tags: ["Education", "NLP", "Personalization"],
      details: "The system should analyze a student's performance data, identify knowledge gaps, and generate appropriate learning materials (explanations, practice problems, visual aids) tailored to their needs. The content should adapt to different learning styles (visual, auditory, reading/writing, kinesthetic) and provide appropriate scaffolding for concepts the student finds challenging.",
      resources: [
        { name: "Educational Content Database", url: "#" },
        { name: "Learning Styles Assessment Framework", url: "#" },
        { name: "Student Performance Analytics API", url: "#" }
      ]
    },
    {
      id: 3,
      title: "Sustainable Agriculture AI Advisor",
      description: "Build an AI system that helps farmers optimize crop yields while minimizing environmental impact through data-driven recommendations.",
      difficulty: "Medium",
      tags: ["Agriculture", "Sustainability", "Predictive Analytics"],
      details: "The system should analyze data from various sources (weather forecasts, soil sensors, satellite imagery, historical yields) to provide actionable recommendations on planting times, irrigation schedules, fertilizer usage, and pest management. The solution should balance maximizing crop yields with minimizing water usage, chemical inputs, and carbon footprint.",
      resources: [
        { name: "Agricultural Data Repository", url: "#" },
        { name: "Weather API Documentation", url: "#" },
        { name: "Sustainable Farming Practices Guide", url: "#" }
      ]
    },
    {
      id: 4,
      title: "Multilingual Speech-to-Text for Low-Resource Languages",
      description: "Develop a speech recognition system that works effectively for languages with limited training data available.",
      difficulty: "Hard",
      tags: ["Speech Recognition", "Low-Resource Languages", "Transfer Learning"],
      details: "Create a system that can transcribe spoken language into text for languages that have limited available training data. The solution should leverage transfer learning from high-resource languages and/or unsupervised learning techniques to achieve reasonable accuracy with minimal language-specific training data. Focus on languages from regions that are currently underserved by commercial speech recognition systems.",
      resources: [
        { name: "Common Voice Dataset", url: "#" },
        { name: "Low-Resource Language Samples", url: "#" },
        { name: "Transfer Learning for ASR Paper", url: "#" }
      ]
    },
    {
      id: 5,
      title: "AI Ethics Analyzer for Machine Learning Models",
      description: "Create a tool that analyzes machine learning models for potential ethical issues, biases, or fairness concerns.",
      difficulty: "Medium",
      tags: ["AI Ethics", "Fairness", "Model Analysis"],
      details: "Develop a system that can evaluate a trained machine learning model for potential ethical concerns such as demographic biases, privacy risks, or unfair outcomes. The tool should provide detailed reports on identified issues, suggest mitigation strategies, and allow for comparative analysis of different models or versions. The solution should work across various model types and application domains.",
      resources: [
        { name: "Fairness Indicators Library", url: "#" },
        { name: "Synthetic Test Datasets", url: "#" },
        { name: "AI Ethics Guidelines", url: "#" }
      ]
    }
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
              Harness the power of artificial intelligence and machine learning to solve complex problems and create innovative applications. This track challenges you to push the boundaries of AI technology to address real-world challenges across healthcare, education, sustainability, and more.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-purple-400 font-medium">Difficulty:</span> Intermediate to Advanced
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-purple-400 font-medium">Prize Pool:</span> $3,000
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
                <span className="text-purple-400 font-medium">Team Size:</span> 1-4 members
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
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === 'overview' ? 'border-purple-500 text-white' : 'border-transparent text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === 'problems' ? 'border-purple-500 text-white' : 'border-transparent text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('problems')}
            >
              Problem Statements
            </button>
            <button 
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === 'resources' ? 'border-purple-500 text-white' : 'border-transparent text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('resources')}
            >
              Resources
            </button>
            <button 
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === 'judging' ? 'border-purple-500 text-white' : 'border-transparent text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('judging')}
            >
              Judging Criteria
            </button>
            <button 
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === 'mentors' ? 'border-purple-500 text-white' : 'border-transparent text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('mentors')}
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
          {activeTab === 'overview' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Track Overview</h2>
              
              <div className="prose prose-lg prose-invert max-w-none">
                <p>
                  The AI & Machine Learning track challenges participants to develop innovative solutions that leverage artificial intelligence, machine learning, and data science to solve real-world problems. From healthcare diagnostics to sustainable agriculture, from personalized education to ethical AI systems, this track offers a wide range of problem statements to tackle.
                </p>
                
                <h3>What We're Looking For</h3>
                <p>
                  We're seeking solutions that demonstrate not only technical excellence but also thoughtful application of AI technologies to create meaningful impact. Successful projects will:
                </p>
                
                <ul>
                  <li>Demonstrate innovative applications of AI/ML techniques</li>
                  <li>Address real-world problems with practical solutions</li>
                  <li>Consider ethical implications and potential biases</li>
                  <li>Balance technical sophistication with usability</li>
                  <li>Show potential for scalability and real-world deployment</li>
                </ul>
                
                <h3>Technologies</h3>
                <p>
                  Participants are encouraged to use any AI/ML frameworks and tools they prefer. Some popular options include:
                </p>
                
                <ul>
                  <li>TensorFlow, PyTorch, scikit-learn, Keras</li>
                  <li>Hugging Face Transformers for NLP tasks</li>
                  <li>Computer vision libraries like OpenCV</li>
                  <li>Cloud AI services (with appropriate attribution)</li>
                  <li>Data visualization tools like Matplotlib, Plotly, or D3.js</li>
                </ul>
                
                <h3>Submission Requirements</h3>
                <p>
                  All submissions must include:
                </p>
                
                <ul>
                  <li>Working prototype or demo of your solution</li>
                  <li>Source code repository with documentation</li>
                  <li>Brief presentation explaining your approach and results</li>
                  <li>Description of the problem being solved and its significance</li>
                  <li>Explanation of the AI/ML techniques employed</li>
                  <li>Discussion of limitations and future improvements</li>
                </ul>
                
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mt-8">
                  <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
                  <p className="mb-4">
                    Browse the problem statements, gather your team, and start building your AI solution!
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    onClick={() => setActiveTab('problems')}
                  >
                    View Problem Statements
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Problem Statements Tab */}
          {activeTab === 'problems' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Problem Statements</h2>
              <p className="text-gray-400 mb-8">
                Choose from the following problem statements or propose your own idea within the AI & Machine Learning domain.
              </p>
              
              <div className="space-y-8">
                {problems.map((problem) => (
                  <div key={problem.id} className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{problem.title}</h3>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          problem.difficulty === 'Hard' ? 'bg-red-900/30 text-red-400' : 
                          problem.difficulty === 'Medium' ? 'bg-yellow-900/30 text-yellow-400' : 
                          'bg-green-900/30 text-green-400'
                        }`}>
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
                              <a href={resource.url} className="text-blue-400 hover:underline">{resource.name}</a>
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mt-8">
                <h3 className="text-xl font-bold mb-4">Have Your Own Idea?</h3>
                <p className="mb-4">
                  If you have an innovative AI/ML project idea that doesn't fit the problem statements above, you can submit your own proposal.
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Submit Custom Proposal
                </Button>
              </div>
            </div>
          )}
          
          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold mb-4">Datasets</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">Kaggle Datasets</a>
                        <p className="text-gray-400 text-sm">Thousands of public datasets for various AI/ML tasks</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">Google Dataset Search</a>
                        <p className="text-gray-400 text-sm">Search engine for datasets across the web</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">Hugging Face Datasets</a>
                        <p className="text-gray-400 text-sm">NLP datasets for various language tasks</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">UCI Machine Learning Repository</a>
                        <p className="text-gray-400 text-sm">Collection of databases for machine learning</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold mb-4">Tutorials & Guides</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">TensorFlow Tutorials</a>
                        <p className="text-gray-400 text-sm">Official guides for TensorFlow framework</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">PyTorch Documentation</a>
                        <p className="text-gray-400 text-sm">Comprehensive guides for PyTorch</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">Fast.ai Courses</a>
                        <p className="text-gray-400 text-sm">Practical deep learning for coders</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ExternalLink className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="#" className="text-blue-400 hover:underline font-medium">Scikit-learn Documentation</a>
                        <p className="text-gray-400 text-sm">Guides for machine learning in Python</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Pre-hackathon Workshops</h3>
              <p className="text-gray-400 mb-6">
                Join our pre-hackathon workshops to learn essential AI/ML skills and get a head start on your project.
              </p>
              
              <div className="space-y-4 mb-12">
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <div className="flex flex-wrap justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-bold">Introduction to Deep Learning with PyTorch</h4>
                      <p className="text-gray-400">August 25, 2024 • 2:00 PM - 4:00 PM EST • Virtual</p>
                    </div>
                    <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                      Register
                    </Button>
                  </div>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <div className="flex flex-wrap justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-bold">Natural Language Processing Fundamentals</h4>
                      <p className="text-gray-400">August 26, 2024 • 2:00 PM - 4:00 PM EST • Virtual</p>
                    </div>
                    <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                      Register
                    </Button>
                  </div>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <div className="flex flex-wrap justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-bold">Computer Vision Applications Workshop</h4>
                      <p className="text-gray-400">August 27, 2024 • 2:00 PM - 4:00 PM EST • Virtual</p>
                    </div>
                    <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                      Register
                    </Button>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Computing Resources</h3>
              <p className="text-gray-400 mb-6">
                Access free cloud computing resources for your AI/ML projects during the hackathon.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
                  <Image 
                    src="/placeholder.svg?height=60&width=120&text=Google Cloud" 
                    alt="Google Cloud" 
                    width={120} 
                    height={60}
                    className="mx-auto mb-4"
                  />
                  <h4 className="font-bold mb-2">Google Cloud Credits</h4>
                  <p className="text-gray-400 text-sm mb-4">$100 in GCP credits per team</p>
                  <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800 w-full">
                    Claim Credits
                  </Button>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
                  <Image 
                    src="/placeholder.svg?height=60&width=120&text=AWS" 
                    alt="AWS" 
                    width={120} 
                    height={60}
                    className="mx-auto mb-4"
                  />
                  <h4 className="font-bold mb-2">AWS Credits</h4>
                  <p className="text-gray-400 text-sm mb-4">$100 in AWS credits per team</p>
                  <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800 w-full">
                    Claim Credits
                  </Button>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
                  <Image 
                    src="/placeholder.svg?height=60&width=120&text=Colab Pro" 
                    alt="Colab Pro" 
                    width={120} 
                    height={60}
                    className="mx-auto mb-4"
                  />
                  <h4 className="font-bold mb-2">Colab Pro Access</h4>
                  <p className="text-gray-400 text-sm mb-4">1-month free Colab Pro subscription</p>
                  <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800 w-full">
                    Get Access
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Judging Criteria Tab */}
          {activeTab === 'judging' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Judging Criteria</h2>
              <p className="text-gray-400 mb-8">
                Projects in the AI & Machine Learning track will be evaluated based on the following criteria:
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-900 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-purple-300" />
                    </div>
                    Technical Innovation (25%)
                  </h3>
                  <p className="text-gray-400">
                    How innovative is the application of AI/ML techniques? Does the solution use novel approaches or combine existing methods in creative ways? Is the technical implementation sophisticated and well-executed?
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-900 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-purple-300" />
                    </div>
                    Impact & Practicality (25%)
                  </h3>
                  <p className="text-gray-400">
                    How significant is the problem being addressed? Does the solution have potential for real-world impact? Is the approach practical and feasible for implementation beyond the hackathon?
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-900 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-purple-300" />
                    </div>
                    Technical Execution (20%)
                  </h3>
                  <p className="text-gray-400">
                    How well does the solution work? Is it accurate, efficient, and robust? Has the team demonstrated mastery of the AI/ML techniques they've employed? Is the code well-structured and documented?
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-900 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-purple-300" />
                    </div>
                    User Experience & Design (15%)
                  </h3>
                  <p className="text-gray-400">
                    Is the solution user-friendly and accessible? Does it have an intuitive interface? Has the team considered the end-user experience in their design decisions?
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-900 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-purple-300" />
                    </div>
                    Ethical Considerations (15%)
                  </h3>
                  <p className="text-gray-400">
                    Has the team considered potential ethical implications of their solution? Have they addressed issues like bias, privacy, transparency, and fairness? Is there evidence of responsible AI development practices?
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mt-8">
                <h3 className="text-xl font-bold mb-4">Judging Process</h3>
                <ol className="space-y-4 text-gray-400">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm mr-3 mt-0.5 flex-shrink-0">1</span>
                    <span>Initial screening by track mentors to evaluate technical merit and completeness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm mr-3 mt-0.5 flex-shrink-0">2</span>
                    <span>Top 10 projects selected for final judging round</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm mr-3 mt-0.5 flex-shrink-0">3</span>
                    <span>5-minute presentation and demo to judging panel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm mr-3 mt-0.5 flex-shrink-0">4</span>
                    <span>Q&A session with judges (3 minutes)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm mr-3 mt-0.5 flex-shrink-0">5</span>
                    <span>Final scores calculated and winners announced at closing ceremony</span>
                  </li>
                </ol>
              </div>
            </div>
          )}
          
          {/* Mentors Tab */}
          {activeTab === 'mentors' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Track Mentors</h2>
              <p className="text-gray-400 mb-8">
                Our AI & Machine Learning track mentors are industry experts and researchers who will provide guidance and support throughout the hackathon.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[1, 2, 3, 4].map((mentor) => (
                  <div key={mentor} className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-800">
                        <Image 
                          src={`/placeholder.svg?height=96&width=96&text=Mentor ${mentor}`}
                          alt={`Mentor ${mentor}`}
                          width={96}
                          height={96}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Dr. Jane Smith</h3>
                      <p className="text-purple-400 mb-3">AI Research Scientist, Tech Company</p>
                      <p className="text-gray-400 text-sm mb-3">
                        PhD in Machine Learning with 10+ years of experience in computer vision and natural language processing. Previously led AI research teams at Major Tech Corp and contributed to open-source ML libraries.
                      </p>
                      <div className="flex gap-3">
                        <a href="#" className="text-blue-400 hover:text-blue-300">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <a href="#" className="text-blue-400 hover:text-blue-300">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647\

