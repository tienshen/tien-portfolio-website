import ScrollingHeader from '../components/ScrollingHeader'

export default function Home() {
  return (
  <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <ScrollingHeader />

      {/* About Section */}
  <section id="about" className="p-12 max-w-3xl mx-auto bg-box rounded-2xl shadow mb-12 mt-12">
        <div className="flex items-center mb-6 min-h-[180px]">
          <img src="/tien-profile.jpg" alt="Tien's Profile photo" className="w-36 h-36 rounded-full object-cover object-center scale-110 border-2 border-gray-300 dark:border-gray-600 mr-8" />
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-6">About Me</h2>
            <p>
              Hi, I’m Tien 👋. I’m an engineer with a passion for building systems,
              exploring embedded software, and creating cool side projects. This
              site is my personal portfolio where I showcase the things I’ve built
              and worked on.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
  <section id="projects" className="p-8 bg-box mb-6 mx-[50px] rounded-2xl">
  <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
  <hr className="border-t border-gray-400 dark:border-gray-600 mb-10" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="p-6 bg-box rounded-2xl shadow hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-2">Active Window – UMass Senior Design Project</h3>
              <img src="/projects/active_window/active-window-project-group.jpeg" alt="Active Window Project Group" className="w-full h-64 object-cover rounded-xl mb-0" />
            <p className="mb-2">
              <span className="text-xs text-gray-300">UMass Team 15: Tien Shen, Nathan Johnson, Michael Chan, Dingbang Chen</span>
            </p>
            <p className="mb-2">
              Developed an open-source software framework and CAN transceiver circuit for smart building networks. Prototype used Infineon XMC4200 boards, sensors, actuators, and custom window models to demonstrate a scalable, energy-efficient smart home system.
            </p>
            <ul className="mb-2 list-disc list-inside text-sm">
              <li>C/C++ for embedded software</li>
              <li>CAN bus protocol</li>
              <li>Infineon XMC4200 microcontrollers</li>
              <li>Custom PCB design</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href="/projects/active-window" className="text-base text-blue-500 hover:underline font-semibold">View Project Details →</a>
              <a href="http://www.ecs.umass.edu/sdp/sdp21/team15/" target="_blank" rel="noopener noreferrer" className="text-base text-blue-500 hover:underline">Original Website</a>
              <a href="https://youtu.be/YnCn2WRyxFA" target="_blank" rel="noopener noreferrer" className="text-base text-blue-500 hover:underline">Demo Video</a>
            </div>
          </div>

          <div className="p-6 bg-box rounded-2xl shadow">
            <h3 className="text-lg font-bold mb-2">Multi-threaded HTTP Server</h3>
            <p className="mb-2">High-performance HTTP server implemented in C with multi-threading support, socket programming, and concurrent request handling. Features custom HTTP parsing, thread pool management, and efficient resource serving.</p>
            <ul className="mb-2 list-disc list-inside text-sm">
              <li>C programming & POSIX threads</li>
              <li>Socket programming (TCP/IP)</li>
              <li>HTTP protocol implementation</li>
              <li>Thread pool & concurrency control</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/tienshen/Multi-threaded-Server-Project" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Source</a>
            </div>
          </div>

          <div className="p-6 bg-box rounded-2xl shadow">
            <h3 className="text-lg font-bold mb-2">This Website (Portfolio)</h3>
            <p className="mb-2">Personal portfolio built with Next.js (app router), Tailwind CSS and TypeScript. Features a theme toggle with smooth transitions, responsive layout, and project showcase.</p>
            <ul className="mb-2 list-disc list-inside text-sm">
              <li>Next.js 15 with App Router</li>
              <li>TypeScript & Tailwind CSS</li>
              <li>Dark/Light theme toggle</li>
              <li>CSS custom properties & transitions</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/tienshen/tien-portfolio-website" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Source</a>
              <a href="/" className="text-blue-500 hover:underline">Live Site</a>
            </div>
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
