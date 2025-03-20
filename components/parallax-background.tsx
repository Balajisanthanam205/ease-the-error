"use client"

import { type ReactNode, useEffect, useRef } from "react"

interface ParallaxBackgroundProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxBackground({ children, speed = 0.1, className = "" }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const scrollY = window.scrollY
      const yPos = scrollY * speed
      ref.current.style.transform = `translate3d(0, ${yPos}px, 0)`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

