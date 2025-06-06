"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function SplashScreen() {
  const [progress, setProgress] = useState(0)
  const [matrixText, setMatrixText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%"
    let interval: NodeJS.Timeout

    // Matrix text effect
    const matrixInterval = setInterval(() => {
      const randomText = Array(8)
        .fill(0)
        .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
        .join("")
      setMatrixText(randomText)
    }, 50)

    // Progress bar animation
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          clearInterval(matrixInterval)
          setTimeout(() => setIsComplete(true), 500) // Delay before hiding splash screen
          return 100
        }
        return prev + 2 // Faster loading
      })
    }, 30)

    return () => {
      clearInterval(interval)
      clearInterval(matrixInterval)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col items-center justify-center bg-dark-900 transition-opacity duration-500",
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100",
      )}
    >
      <div className="relative w-48 h-48 mb-8 animate-pulse">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20sdfm-gDlxg0zxe6wVV9o5cISteykVa4LQhz.png"
          alt="SDFM 2520"
          fill
          className="object-contain"
          priority
          unoptimized
        />
      </div>

      {/* Matrix-style loading text */}
      <div className="font-mono text-white mb-4 h-6 text-lg tracking-wider">
        {`LOADING_SYSTEM: ${matrixText}`}
      </div>

      {/* Progress bar container */}
      <div className="w-64 h-2 bg-dark-400 rounded-full overflow-hidden mb-2">
        <div 
          className="h-full bg-gradient-to-r from-white to-gray-300 transition-all duration-100 ease-out rounded-full" 
          style={{ width: `${progress}%` }} 
        />
      </div>

      {/* Progress percentage */}
      <div className="mt-2 font-mono text-sm text-white tracking-wider">
        {`${progress}%`}
      </div>
    </div>
  )
}