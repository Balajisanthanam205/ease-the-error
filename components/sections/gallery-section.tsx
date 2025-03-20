"use client"

import { forwardRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"

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

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Ease the Error 2024</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative group overflow-hidden rounded-lg">
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Team"
                  alt="Hackathon 2023 - Coding"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h4 className="text-white font-bold">The Team</h4>
                  <p className="text-gray-300 text-sm">Hard work, late nights, and a lot of fun—meet the organizers!</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Coordinators"
                  alt="Hackathon 2023 - Presentation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h4 className="text-white font-bold">Faculty Coordinators</h4>
                  <p className="text-gray-300 text-sm">Guiding us every step of the way – our faculty coordinators.</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Winners"
                  alt="Hackathon 2023 - Awards"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h4 className="text-white font-bold">Award Ceremony</h4>
                  <p className="text-gray-300 text-sm">Celebrating the winners and their outstanding achievements</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">Ease the Error 2023</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((img) => (
              <div key={`gallery-${img}`} className="relative group overflow-hidden rounded-lg">
                <div className="aspect-w-1 aspect-h-1 relative">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=2023 Image ${img}`}
                    alt={`Hackathon 2023 - Image ${img}`}
                    fill
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

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-900">
            View More Photos <Camera className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
})

