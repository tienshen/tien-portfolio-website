'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  useEffect(() => {
    // initialize from localStorage or system preference
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else if (stored === 'light') {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    } else {
      // DEFAULT: choose dark mode by default when there's no stored preference.
      // If you prefer to respect system preference, switch back to using
      // window.matchMedia('(prefers-color-scheme: dark)').matches
      document.documentElement.classList.add('dark')
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
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
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
      className={`relative inline-flex items-center h-8 w-14 rounded-full transition-colors duration-500 focus:outline-none z-50 pointer-events-auto`}
      style={{ backgroundColor: isDark ? 'var(--toggle-on)' : 'var(--toggle-off)' }}>
      <span
        className={`transform transition-transform duration-500 inline-block h-6 w-6 rounded-full shadow ${isDark ? 'translate-x-6' : 'translate-x-1'}`}
        style={{ backgroundColor: 'var(--toggle-knob)' }}
      />
    </button>
  )
}
