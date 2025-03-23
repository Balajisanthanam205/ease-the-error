"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Rocket } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#050014]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <Image
             src="/logo.png"
             alt="Ease The Error Logo"
            width={100} // Adjust width as needed
            height={40} // Adjust height as needed
              className="h-20 w-auto"
  />
</Link>


          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm text-blue-100 hover:text-purple-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm text-blue-100 hover:text-purple-300 transition-colors">
              About Us
            </Link>
            <Link href="/tracks" className="text-sm text-blue-100 hover:text-purple-300 transition-colors">
              Themes & Tracks
            </Link>
            <Link href="/prizes" className="text-sm text-blue-100 hover:text-purple-300 transition-colors">
              Prizes
            </Link>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              Register <Rocket className="ml-2 h-3 w-3" />
            </Button>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0c0032]/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-blue-100 hover:text-purple-300 hover:bg-purple-900/20 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-blue-100 hover:text-purple-300 hover:bg-purple-900/20 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/tracks"
              className="block px-3 py-2 text-base font-medium text-blue-100 hover:text-purple-300 hover:bg-purple-900/20 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Themes & Tracks
            </Link>
            <Link
              href="/prizes"
              className="block px-3 py-2 text-base font-medium text-blue-100 hover:text-purple-300 hover:bg-purple-900/20 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Prizes
            </Link>
            <div className="px-3 py-2">
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                onClick={() => setIsOpen(false)}
              >
                Register <Rocket className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

