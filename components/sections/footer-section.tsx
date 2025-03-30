"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Rocket, Heart } from "lucide-react"

export function FooterSection() {
  return (
    <section className="py-20 px-4 bg-black border-t border-gray-900">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Challenge?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Register now and start your journey to innovation, recognition, and amazing prizes!
        </p>

        <Button
          size="lg"
          className="bg-white text-black hover:bg-gray-200"
          onClick={() => window.location.href = "https://forms.gle/KYbH9d4HLgBaEbGz5"}
        >
          Register for Ease the Error <Rocket className="ml-2 h-4 w-4" />
        </Button>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              Email:{" "}
              <a href="mailto:info@easetheerror.com" className="hover:text-white transition-colors">
                fodse@svce.ac.in
              </a>
            </p>
            <p className="text-gray-400">Location: Sri Venkateswara College of Engineering</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/the-forum-of-data-science-engineers-b37716291/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.instagram.com/fodse_svce/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-gray-400 hover:text-white transition-colors">
             {/* <Link
                href="https://www.linkedin.com/in/the-forum-of-data-science-engineers-b37716291/"
                className="text-gray-400 hover:text-white transition-colors"
              >*/} 
              <div className="text-gray-400 hover:text-white transition-colors">
                Divya Prakash - +91 98409 65005,
              </div><br></br>
              {/*</div></Link>*/}
              {/*<Link
                href="https://www.instagram.com/fodse_svce/"
                className="text-gray-400 hover:text-white transition-colors"
              >*/} 
              <div className="text-gray-400 hover:text-white transition-colors">
                Pavithraa Jawahar - +91 72000 97918.
              </div>
              {/*</Link>*/} 
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <div className="space-y-2">
              <Link href="#faq" className="block text-gray-400 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Code of Conduct
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-900 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Ease the Error. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
           The Forum of Data Science Engineers
          </p>
        </div>
      </div>
    </section>
  )
}

