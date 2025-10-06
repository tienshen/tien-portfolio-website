import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  return (
  <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
  <header className="py-6 relative border-b border-gray-200 dark:border-gray-700 bg-header px-8">
        {/* centered content */}
        <div className="mx-auto flex items-center gap-[50px] max-w-5xl justify-center">
          <h1 className="text-2xl font-bold">Tien</h1>
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
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-box rounded-2xl shadow">
            <h3 className="text-lg font-bold mb-2">Active Window – UMass Senior Design Project</h3>
              <img src="/active-window-project-group.jpeg" alt="Active Window Project Group" className="w-full h-64 object-cover rounded-xl mb-0" />
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
              <a href="http://www.ecs.umass.edu/sdp/sdp21/team15/" target="_blank" rel="noopener noreferrer" className="text-base text-blue-500 hover:underline">Project Website</a>
              <a href="/SDP21SDPTeam15FinalReport.pdf" target="_blank" rel="noopener noreferrer" className="text-base text-blue-500 hover:underline">Final Report (PDF)</a>
              <a href="/FPRpresentation.pdf" target="_blank" rel="noopener noreferrer" className="text-base text-blue-500 hover:underline">FPR Slides (PDF)</a>
              <a href="https://youtu.be/YnCn2WRyxFA" target="_blank" rel="noopener noreferrer" className="text-base text-blue-500 hover:underline">Demo Video</a>
            </div>
          </div>

          <div className="p-6 bg-box rounded-2xl shadow">
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
