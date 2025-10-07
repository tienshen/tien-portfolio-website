'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  useEffect(() => {
    // initialize from localStorage or default to dark mode
    const stored = localStorage.getItem('theme')
    if (stored === 'light') {
      document.documentElement.classList.add('light')
      setIsDark(false)
    } else {
      // Default to dark mode (no class needed, uses :root defaults)
      document.documentElement.classList.remove('light')
      setIsDark(true)
    }
  }, [])

  const toggle = () => {
    // Add a temporary class that enables CSS transitions so the theme change
    // fades instead of jumping. We'll remove it shortly after toggling.
  const TRANSITION_CLASS = 'theme-transition'
  const DURATION = 500 // ms, should match CSS transition timing

    // Trigger transition class
    document.documentElement.classList.add(TRANSITION_CLASS)
    // Ensure removal after duration
    window.setTimeout(() => {
      document.documentElement.classList.remove(TRANSITION_CLASS)
    }, DURATION)

    const next = !isDark
    setIsDark(next)
    if (next) {
      // Dark mode: remove light class (uses :root defaults)
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      // Light mode: add light class override
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }

  // render nothing until initialized to avoid hydration mismatch
  if (isDark === null) return null

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={isDark ?? false}
      title={isDark ? 'Dark mode' : 'Light mode'}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          toggle()
        }
      }}
      className={`relative inline-flex items-center h-8 w-14 rounded-full transition-all duration-500 ease-in-out focus:outline-none z-50 pointer-events-auto hover:scale-105`}
      style={{ backgroundColor: isDark ? 'var(--toggle-on)' : 'var(--toggle-off)' }}>
      <span
        className={`transform transition-all duration-500 ease-in-out inline-block h-6 w-6 rounded-full shadow-lg hover:shadow-xl ${isDark ? 'translate-x-6 scale-110' : 'translate-x-1'}`}
        style={{ backgroundColor: 'var(--toggle-knob)' }}
      />
    </button>
  )
}
