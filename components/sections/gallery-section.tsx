"use client"

import { forwardRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"

const images2023 = [
  "/images/inagration.jpg",
  "/images/judging1.jpg",
  "/images/judging3.jpg",
  "/images/judging4.jpg",
]

const images2024 = [
  { src: "/images/team.jpg", title: "The Team", description: "Hard work, late nights, and a lot of fun—meet the organizers!" },
  { src: "/images/coordinators.jpg", title: "Faculty Coordinators", description: "Guiding us every step of the way – our faculty coordinators." },
  { src: "/images/winners.jpg", title: "Award Ceremony", description: "Celebrating the winners and their outstanding achievements" },
]

export const GallerySection = forwardRef<HTMLDivElement>(function GallerySection(_, ref) {
  return (
    <section id="gallery" ref={ref} className="py-20 px-4 bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Relive the excitement and innovation from our previous hackathons.
          </p>
        </div>

        {/* Ease the Error 2024 Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Ease the Error 2024</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images2024.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <div className="relative w-full h-64">
                  <Image
                    src={img.src}
                    alt={img.title}
                    layout="fill"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h4 className="text-white font-bold">{img.title}</h4>
                    <p className="text-gray-300 text-sm">{img.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ease the Error 2023 Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Ease the Error 2023</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {images2023.map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <div className="relative w-full h-48">
                  <Image
                    src={img}
                    alt={`Hackathon 2023 - Image ${index + 1}`}
                    layout="fill"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-900">
            View More Photos <Camera className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
})
