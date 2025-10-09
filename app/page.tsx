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
          <div className="p-6 bg-[var(--background)] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-2">Active Window – UMass Senior Design Project</h3>
              <img src="/projects/active-window/active-window-project-group.jpeg" alt="Active Window Project Group" className="w-full h-64 object-cover rounded-xl mb-0" />
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

          <div className="p-6 bg-[var(--background)] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
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

          <div className="p-6 bg-[var(--background)] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
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

          

          <div className="p-6 bg-[var(--background)] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-2">Kaggle ML Competition: Mechanism of Action Prediction</h3>
            <p className="mb-2">Machine learning project focused on predicting biological mechanisms of action from gene expression and cell viability data. Applied dimensionality reduction and ensemble methods to classify drug responses across multiple targets.</p>
            <ul className="mb-2 list-disc list-inside text-sm">
              <li>Principal Component Analysis (PCA)</li>
              <li>Ridge & Logistic Regression</li>
              <li>AdaBoost & Random Forest</li>
              <li>Multilayer Perceptron (MLP)</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <span className="text-muted text-sm">Python • Scikit-learn • Pandas</span>
            </div>
          </div>

          <div className="p-6 bg-[var(--background)] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-2">SRAM Cache Design Project</h3>
            <p className="mb-2">Complete VLSI design flow project from specification to physical layout. Implemented SRAM cache using industry-standard EDA tools, demonstrating full chip design methodology from RTL to GDSII.</p>
            <ul className="mb-2 list-disc list-inside text-sm">
              <li>OpenRAM with NCSU FreePDK 45nm</li>
              <li>Verilog RTL with OpenCache</li>
              <li>Synopsys Design Compiler synthesis</li>
              <li>Cadence Encounter P&R</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <span className="text-muted text-sm">Verilog • VLSI • EDA Tools</span>
            </div>
          </div>

          <div className="p-6 bg-[var(--background)] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-2">VLSI Bit Accumulator</h3>
            <p className="mb-2">Custom IC design project featuring a bit accumulator circuit in 45nm technology. Complete analog/digital design flow including schematic capture, physical layout, and comprehensive verification with timing and power analysis.</p>
            <ul className="mb-2 list-disc list-inside text-sm">
              <li>Virtuoso Schematic Editor design</li>
              <li>12.5µm × 3.7µm layout (45nm)</li>
              <li>HSPICE simulation & verification</li>
              <li>Frequency & power characterization</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <span className="text-muted text-sm">Cadence Virtuoso • HSPICE • IC Design</span>
            </div>
          </div>
        </div>
      </section>


      {/* Professional Experience Section */}
      <section id="experience" className="p-8 bg-box mb-6 mx-[50px] rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Professional Experience</h2>
        <hr className="border-t border-gray-400 dark:border-gray-600 mb-10" />
        <div className="space-y-8 max-w-4xl mx-auto">
          
          {/* Raytheon Position */}
          <div className="bg-[var(--background)] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-accent">Systems Engineer II</h3>
                <p className="text-lg font-semibold text-[var(--foreground)]">RTX | Raytheon Missiles and Defense</p>
              </div>
              <span className="text-sm font-medium text-muted mt-2 md:mt-0">October 2023 - April 2025</span>
            </div>
            <ul className="space-y-2 text-secondary text-sm">
              <li>• Served as Safety Representative on new system concept proposals of the Patriot SAM system, including the Warfighter Machine Interface, Radar Surveillance, Guidance, Command and Control, and Tactical Initialization</li>
              <li>• Analyzed 170+ Software Investigation Reports, 110+ safety-critical software updates, and 40+ system requirement changes—identifying over 30 potential safety hazards</li>
              <li>• Collaborated with safety, systems, and validation engineers to produce and deliver a comprehensive Patriot Safety Assessment Report to customers, in compliance with Military Standards 882E</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 tag rounded-full text-xs font-medium">Military Standards 882</span>
              <span className="px-3 py-1 tag rounded-full text-xs font-medium">Software Safety</span>
              <span className="px-3 py-1 tag rounded-full text-xs font-medium">Patriot System</span>
              <span className="px-3 py-1 tag rounded-full text-xs font-medium">C++</span>
            </div>
          </div>

          {/* Intel Position */}
          <div className="bg-[var(--background)] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-accent">DDRIO Pre-Silicon Design Verification Intern</h3>
                <p className="text-lg font-semibold text-[var(--foreground)]">Intel Corporation</p>
              </div>
              <span className="text-sm font-medium text-muted mt-2 md:mt-0">May 2022 - August 2022</span>
            </div>
            <ul className="space-y-2 text-secondary text-sm">
              <li>• Implemented UVM monitor and checker in SystemVerilog to validate DLL phase power optimization features across 30 instantiations in DDRIO, enabling a new power-saving feature to be released on the next-gen Intel server processor</li>
              <li>• Contributed to CI/CD initiatives by optimizing regression test sets, improving test execution efficiency, and streamlining the testing-release pipeline to accelerate delivery without compromising quality</li>
              <li>• Developed a Python tool to compare register specs between source code and Excel files, identifying over 200 discrepancies used across RTL, validation, and analog teams</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 tag rounded-full text-xs font-medium">SystemVerilog</span>
              <span className="px-3 py-1 tag rounded-full text-xs font-medium">UVM</span>
              <span className="px-3 py-1 tag rounded-full text-xs font-medium">Python</span>
              <span className="px-3 py-1 tag rounded-full text-xs font-medium">Pre-Silicon Validation</span>
              <span className="px-3 py-1 tag rounded-full text-xs font-medium">CI/CD</span>
            </div>
          </div>

          {/* UMass Research Position */}
          <div className="bg-[var(--background)] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-accent">Graduate Research Assistant</h3>
                <p className="text-lg font-semibold text-[var(--foreground)]">Reconfigurable Computing Group, UMass Amherst</p>
              </div>
              <span className="text-sm font-medium text-muted mt-2 md:mt-0">August 2021 - May 2022</span>
            </div>
            <ul className="space-y-2 text-secondary text-sm">
              <li>• Collaborated with a team of 4 graduate students to formally verify the open-source Symbiflow FPGA toolchain and delivered the software product to our sponsor</li>
              <li>• Implemented software changes and scripts to formally verified Yosys hardware synthesis software with Cadence Conformal LEC on 120 benchmark designs</li>
              <li>• Verified 21 benchmark designs synthesized by open-source software Yosys functioning on the FPGA development board and equivalent to commercial software Xilinx Vivado simulation using synthesizable RTL test harness</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 tag rounded-full text-xs font-medium">C++</span>
              <span className="px-3 py-1 tag rounded-full text-xs font-medium">Python</span>
              <span className="px-3 py-1 tag rounded-full text-xs font-medium">Verilog</span>
              <span className="px-3 py-1 tag rounded-full text-xs font-medium">Vivado</span>
              <span className="px-3 py-1 tag rounded-full text-xs font-medium">FPGA</span>
              <span className="px-3 py-1 tag rounded-full text-xs font-medium">Yosys</span>
              <span className="px-3 py-1 tag rounded-full text-xs font-medium">Cadence Conformal LEC</span>
              <span className="px-3 py-1 tag rounded-full text-xs font-medium">Formal Verification</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="p-8 bg-box mb-6 mx-[50px] rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Education</h2>
        <hr className="border-t border-gray-400 dark:border-gray-600 mb-10" />
        <div className="space-y-6 max-w-4xl mx-auto">
          
          {/* Master's Degree */}
          <div className="bg-[var(--background)] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-accent">Master of Science in Computer Engineering</h3>
                <p className="text-lg font-semibold text-[var(--foreground)]">University of Massachusetts Amherst</p>
                <p className="text-sm text-secondary">College of Engineering</p>
              </div>
              <span className="text-sm font-medium text-muted mt-2 md:mt-0">May 2023</span>
            </div>
            <div className="mt-4">
              <p className="text-sm text-secondary mb-2"><strong>Relevant Coursework:</strong></p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 tag rounded-full text-xs font-medium">Advanced Digital Design</span>
                <span className="px-3 py-1 tag rounded-full text-xs font-medium">Computer Architecture</span>
                <span className="px-3 py-1 tag rounded-full text-xs font-medium">VLSI Design</span>
                <span className="px-3 py-1 tag rounded-full text-xs font-medium">Embedded Systems</span>
                <span className="px-3 py-1 tag rounded-full text-xs font-medium">Hardware Verification</span>
              </div>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="bg-[var(--background)] p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-accent">Bachelor of Science in Computer Engineering</h3>
                <p className="text-lg font-semibold text-[var(--foreground)]">University of Massachusetts Amherst</p>
                <p className="text-sm text-secondary">College of Engineering</p>
              </div>
              <span className="text-sm font-medium text-muted mt-2 md:mt-0">May 2021</span>
            </div>
            <div className="mt-4">
              <p className="text-sm text-secondary mb-2"><strong>Foundation Coursework:</strong></p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 tag rounded-full text-xs font-medium">Digital Logic Design</span>
                <span className="px-3 py-1 tag rounded-full text-xs font-medium">Computer Systems</span>
                <span className="px-3 py-1 tag rounded-full text-xs font-medium">Software Engineering</span>
                <span className="px-3 py-1 tag rounded-full text-xs font-medium">Data Structures</span>
                <span className="px-3 py-1 tag rounded-full text-xs font-medium">Algorithms</span>
                <span className="px-3 py-1 tag rounded-full text-xs font-medium">Circuits & Electronics</span>
              </div>
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
