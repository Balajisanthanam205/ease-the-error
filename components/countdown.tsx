"use client"

import { useState, useEffect } from "react"

interface CountdownProps {
  targetDate: Date
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="bg-gray-900/70 backdrop-blur-sm p-4 rounded-lg border border-gray-800 min-w-[100px] text-center">
        <div className="text-4xl font-bold">{timeLeft.days}</div>
        <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Days</div>
      </div>
      <div className="bg-gray-900/70 backdrop-blur-sm p-4 rounded-lg border border-gray-800 min-w-[100px] text-center">
        <div className="text-4xl font-bold">{timeLeft.hours}</div>
        <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Hours</div>
      </div>
      <div className="bg-gray-900/70 backdrop-blur-sm p-4 rounded-lg border border-gray-800 min-w-[100px] text-center">
        <div className="text-4xl font-bold">{timeLeft.minutes}</div>
        <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Minutes</div>
      </div>
      <div className="bg-gray-900/70 backdrop-blur-sm p-4 rounded-lg border border-gray-800 min-w-[100px] text-center">
        <div className="text-4xl font-bold">{timeLeft.seconds}</div>
        <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Seconds</div>
      </div>
    </div>
  )
}

