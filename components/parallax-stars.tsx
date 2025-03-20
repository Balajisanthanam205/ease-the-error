"use client"

import { useEffect, useRef } from "react"

interface ParallaxStarsProps {
  count?: number
  className?: string
}

export function ParallaxStars({ count = 100, className = "" }: ParallaxStarsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawStars()
    }

    // Create stars
    const stars: { x: number; y: number; radius: number; speed: number }[] = []

    const createStars = () => {
      stars.length = 0
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          speed: Math.random() * 0.05 + 0.01,
        })
      }
    }

    // Draw stars
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "white"

      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    // Animate stars
    let animationFrameId: number
    const animate = () => {
      drawStars()

      // Move stars based on scroll position
      const scrollY = window.scrollY
      stars.forEach((star) => {
        star.y = (star.y + scrollY * star.speed) % canvas.height
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Initialize
    handleResize()
    createStars()
    animate()

    // Event listeners
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [count])

  return <canvas ref={canvasRef} className={`absolute inset-0 ${className}`} />
}

