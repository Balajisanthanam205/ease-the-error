"use client"

import { forwardRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle } from "lucide-react"
import { Input } from "@/components/ui/input"

interface FAQSectionProps {
  scrollToSection: (sectionId: string) => void
}

interface FAQItem {
  q: string
  a: string
  category?: string
}

export const FAQSection = forwardRef<HTMLDivElement, FAQSectionProps>(function FAQSection({ scrollToSection }, ref) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const faqItems: FAQItem[] = [
    {
      q: "Who can participate?",
      a: "Any university student from india can participate.",
      category: "Eligibility",
    },
    {
      q: "How many members can be in a team?",
      a: "Each team must have 4-6 members.",
      category: "Teams",
    },
    {
      q: "Is there a registration fee?",
      a: "Yes,₹450 per person.",
      category: "Registration",
    },
    {
      q: "What should we bring?",
      a: "Sufficient laptops, chargers, college student ID, WiFi dongles, and extension boxes.",
      category: "Logistics",
    },
    {
      q: "Will food and accommodation be provided?",
      a: "Yes, meals will be provided throughout the hackathon. Accommodation will be available for participants coming from outside the city, but you need to request it during registration.",
      category: "Logistics",
    },
    {
      q: "What is the judging criteria?",
      a: "Projects will be judged based on innovation, technical complexity, practicality, presentation, and adherence to the chosen track's theme. Detailed criteria will be shared before the hackathon.",
      category: "Judging",
    },
    {
      q: "Can I start working on my project before the hackathon?",
      a: "No, all coding and development must start after the hackathon officially begins. You can brainstorm ideas and create wireframes beforehand, but no pre-written code is allowed.",
      category: "Rules",
    },

  ]

  const categories = Array.from(new Set(faqItems.map((item) => item.category)))

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const filteredFAQs = faqItems.filter((item) => {
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory ? item.category === activeCategory : true
    return matchesSearch && matchesCategory
  })

  return (
    <section id="faq" ref={ref} className="py-20 px-4 bg-gray-950">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Find answers to common questions about Ease the Error Hackathon.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-10">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-900 border-gray-800 focus:border-purple-500 text-white"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={activeCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(null)}
              className={
                activeCategory === null ? "bg-purple-600 hover:bg-purple-700" : "border-gray-700 text-gray-400"
              }
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category ? "bg-purple-600 hover:bg-purple-700" : "border-gray-700 text-gray-400"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-gray-700"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center">
                    <HelpCircle className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="font-medium text-white">{faq.q}</span>
                  </div>
                  <div className="flex items-center">
                    {faq.category && (
                      <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full mr-3">
                        {faq.category}
                      </span>
                    )}
                    {activeIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <div className="pl-8 border-l border-gray-800 ml-2.5 text-gray-400">{faq.a}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 mb-4">
                <MessageCircle className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">No matching questions found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Still have questions */}
        {/*<div className="mt-16 bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-8 rounded-xl border border-gray-800">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-400 mb-6">
              Can't find the answer you're looking for? Feel free to reach out to our team.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200">Contact Us</Button>
          </div>
        </div>*/}
      </div>
    </section>
  )
})

