"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Rocket } from "lucide-react"
import Link from "next/link"

interface NavigationBarProps {
  sections: { id: string; label: string }[]
  scrollToSection: (sectionId: string) => void
}

export function NavigationBar({ sections, scrollToSection }: NavigationBarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const lastScrollY = useRef(0)
  const navbarRef = useRef<HTMLDivElement>(null)

  // Handle scroll events for showing/hiding navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if scrolling up or down
      if (currentScrollY > lastScrollY.current + 10) {
        setVisible(false)
      } else if (currentScrollY < lastScrollY.current - 10) {
        setVisible(true)
      }

      lastScrollY.current = currentScrollY

      // Determine active section
      const sectionElements = sections
        .map((section) => ({
          id: section.id,
          element: document.getElementById(section.id),
        }))
        .filter((item) => item.element !== null)

      if (sectionElements.length) {
        const currentSection = sectionElements.reduce((acc, section) => {
          if (!section.element) return acc

          const rect = section.element.getBoundingClientRect()
          const offset = 200

          if (rect.top <= offset && rect.bottom >= offset) {
            return section.id
          }
          return acc
        }, "")

        if (currentSection) {
          setActiveSection(currentSection)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${isOpen || lastScrollY.current > 10 ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              EASE THE ERROR
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm transition-all duration-300 relative group ${
                  activeSection === section.id ? "text-white font-medium" : "text-gray-400 hover:text-white"
                }`}
              >
                {section.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    activeSection === section.id ? "scale-x-100" : ""
                  }`}
                ></span>
              </button>
            ))}
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white ml-4"
            >
              Register <Rocket className="ml-2 h-3 w-3" />
            </Button>
          </nav>

          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-gray-800/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-lg px-4 py-5 border-t border-gray-800/50">
          <div className="flex flex-col space-y-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id)
                  setIsOpen(false)
                }}
                className={`text-left px-3 py-2 rounded-md transition-colors ${
                  activeSection === section.id
                    ? "bg-gray-800/50 text-white font-medium"
                    : "text-gray-400 hover:bg-gray-800/30 hover:text-white"
                }`}
              >
                {section.label}
              </button>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-800/50">
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                Register <Rocket className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

