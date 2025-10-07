'use client'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function ScrollingHeader() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate padding based on scroll position
  // Shrink from py-3 (12px) to py-2 (8px) over first 150px of scroll
  const maxScroll = 150
  const minPadding = 5  // py-2
  const maxPadding = 12 // py-3
  const currentPadding = Math.max(minPadding, maxPadding - (scrollY / maxScroll) * (maxPadding - minPadding))

  // Calculate horizontal shift - move content left as we scroll
  // Shift from center (0px) to left (-100px) over first 150px of scroll
  const maxShift = -30
  const currentShift = Math.min(0, (scrollY / maxScroll) * maxShift)

  // Calculate theme toggle scale - shrink from 1.0 to 0.8 as we scroll
  const minScale = 0.8
  const maxScale = 1.0
  const currentScale = Math.max(minScale, maxScale - (scrollY / maxScroll) * (maxScale - minScale))

  return (
    <header 
      className="sticky top-0 relative border-b border-gray-200 dark:border-gray-700 bg-header px-8 z-40 transition-all duration-200 ease-out"
      style={{ paddingTop: `${currentPadding}px`, paddingBottom: `${currentPadding}px` }}
    >
      {/* centered content */}
      <div 
        className="mx-auto flex items-center gap-[50px] max-w-5xl justify-center transition-transform duration-200 ease-out"
        style={{ transform: `translateX(${currentShift}px)` }}
      >
        <h1 className="text-2xl font-bold">Tien Shen</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>
      </div>
      {/* toggle on the right */}
      <div 
        className="absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-200 ease-out"
        style={{ transform: `scale(${currentScale})` }}
      >
        <ThemeToggle />
      </div>
    </header>
  )
}