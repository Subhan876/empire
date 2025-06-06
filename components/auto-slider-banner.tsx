"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/images/banner-1.jpg",
    title: "New Collection",
    description: "Discover our latest streetwear collection",
    cta: "Shop Now",
  },
  {
    id: 2,
    image: "/images/banner-2.jpg",
    title: "Premium Quality",
    description: "Experience comfort and style",
    cta: "Learn More",
  },
  {
    id: 3,
    image: "/images/banner-3.jpg",
    title: "Limited Edition",
    description: "Exclusive designs for the modern lifestyle",
    cta: "View Collection",
  },
]

export const AutoSliderBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg md:text-xl mb-8">{slide.description}</p>
              <Button size="lg" variant="secondary">
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}