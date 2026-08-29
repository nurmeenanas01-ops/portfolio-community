"use client"

import { useMemo } from "react"

type Star = {
  left: string
  top: string
  size: number
  delay: string
  duration: string
  opacity: number
}

function createStars(count: number, seed: number): Star[] {
  // Deterministic pseudo-random so stars don't jump on re-render
  let s = seed
  const rand = () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }

  return Array.from({ length: count }, () => ({
    left: `${rand() * 100}%`,
    top: `${rand() * 100}%`,
    size: rand() < 0.85 ? 1 : 2,
    delay: `${(rand() * 4).toFixed(2)}s`,
    duration: `${(2 + rand() * 3).toFixed(2)}s`,
    opacity: 0.4 + rand() * 0.6,
  }))
}

export function Starfield() {
  const stars = useMemo(() => createStars(160, 12345), [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-foreground animate-twinkle"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  )
}
