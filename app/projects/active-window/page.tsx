'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '../../../components/ThemeToggle';
// Using simple SVG icons instead of Heroicons for compatibility

export default function ActiveWindowProject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers = [
    {
      name: 'Michael Chan',
      major: 'EE'
    },
    {
      name: 'Dingbang Chen',
      major: 'CompE'
    },
    {
      name: 'Nathan Johnson',
      major: 'CompE'
    },
    {
      name: 'Tien Shen',
      major: 'CompE'
    }
  ];

  const projectFiles = [
    {
      name: 'Final Report',
      url: '/projects/active-window/SDP21SDPTeam15FinalReport.pdf',
      type: 'PDF'
    },
    {
      name: 'Final Presentation',
      url: '/projects/active-window/FPRpresentation.pdf',
      type: 'PDF'
    },
    {
      name: 'Critical Design Review',
      url: '/projects/active-window/SDP21Team15CDR.pdf',
      type: 'PDF'
    }
  ];

  const specifications = [
    {
      category: 'Networking Software',
      features: [
        'Supports communication from master controller to devices',
        'Support various function calls and commands',
        'Supports tree networking topology',
        'Processor sleeps when not processing network packets',
        'Identify each device with serial number/address',
        'Uses CAN bus communication protocol',
        'Uses only C/C++'
      ]
    },
    {
      category: 'Physical Layer',
      features: [
        'Provides a maximum of 5mA of power to device transmitters',
        'Defines a logic 1 and logic 0',
        'Supports CAN bus (Wire-AND)',
        'No damage to devices in event of accidental short'
      ]
    }
  ];

  // Calculate padding based on scroll position (same as ScrollingHeader)
  // Shrink from py-4 (16px) to py-2 (8px) over first 150px of scroll
  const maxScroll = 150;
  const minPadding = 8;  // py-2
  const maxPadding = 16; // py-4
  const currentPadding = Math.max(minPadding, maxPadding - (scrollY / maxScroll) * (maxPadding - minPadding));

  // Calculate theme toggle scale - shrink from 1.0 to 0.8 as we scroll
  const minScale = 0.8;
  const maxScale = 1.0;
  const currentScale = Math.max(minScale, maxScale - (scrollY / maxScroll) * (maxScale - minScale));

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Navigation */}
      <div 
        className="sticky top-0 z-50 bg-header backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition-all duration-200 ease-out relative"
        style={{ paddingTop: `${currentPadding}px`, paddingBottom: `${currentPadding}px` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-sm text-secondary hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Portfolio</span>
            </Link>
            <nav className="text-sm text-muted">
              <Link href="/" className="hover:text-[var(--foreground)]">Portfolio</Link>
              <span className="mx-2">/</span>
              <Link href="/#projects" className="hover:text-[var(--foreground)]">Projects</Link>
              <span className="mx-2">/</span>
              <span className="text-[var(--foreground)]">Active Window</span>
            </nav>
          </div>
        </div>
        {/* Theme toggle on the right */}
        <div 
          className="absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-200 ease-out"
          style={{ transform: `scale(${currentScale})` }}
        >
          <ThemeToggle />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-box">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Active Window
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto">
              Smart Building Automation System with CAN Bus Communication
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                C/C++
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                CAN Bus
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                PCB Design
              </span>
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
                Embedded Systems
              </span>
              <span className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">
                IoT
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Project Overview */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">Problem Statement</h3>
                <p className="text-secondary leading-relaxed">
                  Building automation systems can help reduce operational costs and carbon emissions by improving energy efficiency. 
                  However, many current solutions are manufacturer specific and expensive, making widespread adoption difficult.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Our Solution</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  Our project aims to assist the non-profit Manhattan-2 company develop "electrical and communications standards 
                  that define how devices interconnect within the building of the future."
                </p>
                <ul className="space-y-2 text-secondary">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Facilitate the development of an open-source software framework (Building Bus) to enable easy smart home device development
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Develop a new CAN transceiver circuit that emphasizes smart building network priorities, particularly higher-reliability and lower operational power
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-box rounded-2xl p-6 shadow">
              <div className="relative group">
                <Image
                  src="/projects/active-window/active-window-project-group.jpeg"
                  alt="Active Window Project Group"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto cursor-pointer hover:scale-105 transition-transform shadow-lg"
                  onClick={() => setSelectedImage('/projects/active-window/active-window-project-group.jpeg')}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full text-sm font-medium">
                    Click to enlarge
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-muted mt-4">
                Active Window project team with prototype setup
              </p>
            </div>
          </div>
        </section>

        {/* System Specifications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">System Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-box rounded-2xl p-6 shadow">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                  {spec.category}
                </h3>
                <ul className="space-y-3">
                  {spec.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-secondary">
                      <span className="text-indigo-500 mr-3 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Prototype Description */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Prototype Description</h2>
          <div className="bg-box rounded-2xl p-8 shadow">
            <p className="text-secondary leading-relaxed mb-6">
              Five XMC4200 boards connected together using the physical layer. Inputs to one XMC4200 board include various 
              sensors (temperature, light, and motion). Outputs to one XMC4200 board include stepper motors and lights.
            </p>
            <p className="text-secondary leading-relaxed mb-6">
              The goal of this prototype is to demonstrate a basic smart home setup. There are four boards on the edge of 
              the network that collect sensor data and show output by moving a stepper motor assembly. The stepper motors 
              are connected to a simple, scaled down window assembly.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 mb-3">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5</div>
                </div>
                <p className="text-sm text-muted">XMC4200 Boards</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-6 mb-3">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">CAN</div>
                </div>
                <p className="text-sm text-muted">Bus Protocol</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-6 mb-3">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">IoT</div>
                </div>
                <p className="text-sm text-muted">Smart Home Demo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Our Creative Team</h2>
          <div className="bg-box rounded-2xl p-8 shadow">
            <p className="text-center text-secondary mb-8">
              UMass Senior Design Project Team 15
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-[var(--background)] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{member.major}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Files */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Project Documentation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projectFiles.map((file, index) => (
              <a
                key={index}
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-box rounded-2xl p-6 hover:shadow-lg transition-all hover:scale-105 shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {file.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{file.type} Document</p>
              </a>
            ))}
          </div>
        </section>

        {/* External Links */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="http://www.ecs.umass.edu/sdp/sdp21/team15/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-box rounded-2xl p-6 hover:shadow-lg transition-all shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Original Project Website
                </h3>
                <svg className="h-5 w-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-secondary">
                Visit the complete project documentation and resources on the UMass ECS website
              </p>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1GFbYTta6UH-Yg-IcMQsRrHtItkjptpcC"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-box rounded-2xl p-6 hover:shadow-lg transition-all shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Technical Diagrams
                </h3>
                <svg className="h-5 w-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-secondary">
                Access detailed transceiver diagrams and PCB design files
              </p>
            </a>
          </div>
        </section>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage}
              alt="Project Image"
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}