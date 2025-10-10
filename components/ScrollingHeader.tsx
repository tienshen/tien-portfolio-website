'use client'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function ScrollingHeader() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



  // Intersection Observer to track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Find the section with the highest intersection ratio
      let maxRatio = 0
      let mostVisibleSection = ''
      
      // Check all currently intersecting sections
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio
          mostVisibleSection = entry.target.id
        }
      })
      
      // Only update if we found a visible section
      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection)
      }
    }, {
      rootMargin: '-20% 0px -20% 0px',
      threshold: [0.1, 0.3, 0.5, 0.7, 1.0]
    })

    // Find and observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  // Calculate padding based on scroll position
  // Shrink from py-3 (12px) to py-2 (8px) over first 150px of scroll
  const maxScroll = 100
  const minPadding = 1  // py-2
  const maxPadding = 5 // py-3
  const currentPadding = Math.max(minPadding, maxPadding - (scrollY / maxScroll) * (maxPadding - minPadding))



  // Calculate theme toggle scale - shrink from maxScale to minScale as we scroll
  const minScale = 0.8
  const maxScale = 0.9
  const currentScale = Math.max(minScale, maxScale - (scrollY / maxScroll) * (maxScale - minScale))

  return (
    <header 
      className="sticky top-0 relative border-b border-gray-200 dark:border-gray-700 bg-header px-8 z-40 transition-all duration-200 ease-out"
      style={{ paddingTop: `${currentPadding}px`, paddingBottom: `${currentPadding}px` }}
    >
      <div className="mx-auto flex items-center justify-between max-w-7xl">
        {/* Name on the left */}
        <h1 
          className="text-2xl font-bold cursor-pointer hover:text-blue-500 transition-colors duration-200"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Tien Shen
        </h1>
        
        {/* Navigation in the center */}
        <nav className="space-x-6">
          <a 
            href="#about" 
            className={`transition-colors duration-300 ${activeSection === 'about' ? 'text-blue-500 font-medium' : 'hover:text-blue-500'}`}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={`transition-colors duration-300 ${activeSection === 'projects' ? 'text-blue-500 font-medium' : 'hover:text-blue-500'}`}
          >
            Projects
          </a>
          <a 
            href="#experience" 
            className={`transition-colors duration-300 ${activeSection === 'experience' ? 'text-blue-500 font-medium' : 'hover:text-blue-500'}`}
          >
            Experience
          </a>
          <a 
            href="#education" 
            className={`transition-colors duration-300 ${activeSection === 'education' ? 'text-blue-500 font-medium' : 'hover:text-blue-500'}`}
          >
            Education
          </a>
          <a 
            href="#contact" 
            className={`transition-colors duration-300 ${activeSection === 'contact' ? 'text-blue-500 font-medium' : 'hover:text-blue-500'}`}
          >
            Contact
          </a>
        </nav>
        
        {/* Theme toggle on the right */}
        <div 
          className="transition-transform duration-200 ease-out"
          style={{ transform: `scale(${currentScale})` }}
        >
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}