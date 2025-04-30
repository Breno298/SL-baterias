"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

interface AutoImageSliderProps {
  images: {
    src: string
    alt: string
  }[]
  interval?: number
  showControls?: boolean
  showIndicators?: boolean
  className?: string
}

export function AutoImageSlider({
  images,
  interval = 5000,
  showIndicators = true,
  className,
}: AutoImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Set up automatic sliding
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext()
    }, interval)

    return () => clearInterval(timer)
  }, [goToNext, interval])

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={cn("relative w-full overflow-hidden rounded-lg ", className)}>
      {/* Slider container */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className=" w-full h-[600px]  " />
          </div>
        ))}
      </div>

      

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-all",
                currentIndex === index ? "bg-white" : "bg-white/50 hover:bg-white/75",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
