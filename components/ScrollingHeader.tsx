'use client'
import ThemeToggle from './ThemeToggle'

export default function ScrollingHeader() {
  return (
    <header className="sticky top-0 py-3 relative border-b border-gray-200 dark:border-gray-700 bg-header px-8 z-40">
      {/* centered content */}
      <div className="mx-auto flex items-center gap-[50px] max-w-5xl justify-center">
        <h1 className="text-2xl font-bold">Tien Shen</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>
      </div>
      {/* toggle on the right */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <ThemeToggle />
      </div>
    </header>
  )
}