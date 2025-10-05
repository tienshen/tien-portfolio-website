// import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#202124] dark:bg-[#202124] text-gray-900 dark:text-gray-100">
      {/* Header */}
  <header className="py-6 flex justify-center items-center border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-[#26282b]">
        <div className="flex items-center gap-[50px]">
          <h1 className="text-2xl font-bold">Tien</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* About Section */}
  <section id="about" className="p-12 max-w-3xl mx-auto bg-white/80 dark:bg-[#303134] rounded-2xl shadow mb-12 mt-12">
        <h2 className="text-xl font-semibold mb-4">About Me</h2>
        <p>
          Hi, I’m Tien 👋. I’m an engineer with a passion for building systems,
          exploring embedded software, and creating cool side projects. This
          site is my personal portfolio where I showcase the things I’ve built
          and worked on.
        </p>
      </section>

      {/* Projects Section */}
  <section id="projects" className="p-12 bg-gray-100/80 dark:bg-[#303134] mb-12 mx-[50px] rounded-2xl">
  <h2 className="text-2xl font-bold mb-2 text-center">Projects</h2>
  <hr className="border-t border-gray-400 dark:border-gray-600 mb-10" />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white/80 dark:bg-[#303134] rounded-2xl shadow">
            <h3 className="text-lg font-bold mb-2">Project One</h3>
            <p className="mb-4">Description of the project and technologies used.</p>
            <a href="#" className="text-blue-500 hover:underline">View on GitHub</a>
          </div>

          <div className="p-6 bg-white/80 dark:bg-[#303134] rounded-2xl shadow">
            <h3 className="text-lg font-bold mb-2">Project Two</h3>
            <p className="mb-4">Description of the project and technologies used.</p>
            <a href="#" className="text-blue-500 hover:underline">View Demo</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-12 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Contact</h2>
        <p className="mb-4">
          Feel free to reach out! You can contact me via email at
          <a href="mailto:timshen1999@gmail.com" className="text-blue-500 ml-1">timshen1999@gmail.com</a>
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a href="https://www.linkedin.com/in/tien-li-shen-2b5103157/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
          <a href="https://github.com/tienshen" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
          <a href="/Tien_Q4_2025_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Resume</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center border-t border-gray-200 dark:border-gray-700">
        <p>© {new Date().getFullYear()} Tien. Built with Next.js + Tailwind CSS.</p>
      </footer>
    </main>
  );
}
