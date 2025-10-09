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
      major: 'EE',
      role: 'Hardware Engineer & Testing Lead',
      contributions: 'CAN protocol implementation,  power distribution analysis, requirements validation,component sourcing',
      image: '/projects/active-window/mike.jpg'
    },
    {
      name: 'Dingbang Chen',
      major: 'CompE',
      role: 'Software Architecture',
      contributions: 'Firmware development, stepper motor integration, mechanical calibration',
      image: '/projects/active-window/Dingbang.jpg'
    },
    {
      name: 'Nathan Johnson',
      major: 'CompE',
      role: 'Mechanical Design Engineer',
      contributions: 'Network topology design, interrupt handling, Firmware development, performance testing',
      image: '/projects/active-window/nathan.jpg'
    },
    {
      name: 'Tien Shen',
      major: 'CompE',
      role: 'Project Lead & System Integration',
      contributions: 'Sensor integration & algorithm, PCB design, window assembly fabrication, Team coordination',
      image: '/projects/active-window/tien.jpg'
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
            <nav className="text-sm text-muted absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="hover:text-[var(--foreground)]">Portfolio</Link>
              <span className="mx-2">/</span>
              <Link href="/#projects" className="hover:text-[var(--foreground)]">Projects</Link>
              <span className="mx-2">/</span>
              <span className="text-[var(--foreground)]">Active Window</span>
            </nav>
            <div></div>
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
            <h1 className="text-4xl md:text-6xl font-bold !text-gray-900 dark:!text-white mb-6">
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
        {/* Impact & Context Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Project Impact & Significance</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-box rounded-2xl p-6 shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">Climate Challenge</h3>
              </div>
              <p className="text-secondary text-sm leading-relaxed">
                Global electricity consumption per capita rose <strong>2.6x from 1971-2014</strong> (1,200 to 3,132 kWh), 
                with <strong>89.6% from non-renewable sources</strong>. Building automation can significantly reduce operational 
                costs and carbon emissions through improved energy efficiency.
              </p>
            </div>
            
            <div className="bg-box rounded-2xl p-6 shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">Market Problem</h3>
              </div>
              <p className="text-secondary text-sm leading-relaxed">
                Current solutions are <strong>manufacturer-specific and expensive</strong> (Honeywell, Siemens), 
                or use <strong>unreliable wireless communication</strong> with monthly subscription fees. 
                Limited adoption due to high costs and proprietary lock-in.
              </p>
            </div>
            
            <div className="bg-box rounded-2xl p-6 shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">Our Solution</h3>
              </div>
              <p className="text-secondary text-sm leading-relaxed">
                <strong>Open-source, low-cost system</strong> using reliable wired CAN bus communication. 
                Designed for <strong>widespread adoption</strong> to create non-negligible impact on 
                residential greenhouse gas emissions through affordable smart building automation.
              </p>
            </div>
          </div>
        </section>

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
          <h2 className="text-3xl font-bold mb-8">System Architecture & Implementation</h2>
          <div className="bg-box rounded-2xl p-8 shadow">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Distributed Network Design</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  The prototype demonstrates a <strong>dual-network architecture</strong> with five XMC4200 boards. 
                  The system is divided into left and right networks, each powered by 16V and housed in electrical boxes 
                  for safety and organization.
                </p>
                <p className="text-secondary leading-relaxed mb-4">
                  A central <strong>repeater board</strong> with dual PCB transceivers enables message forwarding between 
                  networks, creating seamless communication across the entire system while maintaining network isolation 
                  for fault tolerance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Smart Sensor Integration</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  Three sensor types provide comprehensive environmental monitoring: <strong>TMP36 temperature sensors</strong> 
                  (calibrated against reference thermometer), <strong>photoresistors</strong> for light detection, 
                  and <strong>water level sensors</strong> for rain detection.
                </p>
                <p className="text-secondary leading-relaxed mb-4">
                  <strong>28BYJ-48 stepper motors</strong> with ULN2003 drivers provide precise window and blind control 
                  with excellent holding torque for safety. Custom-built 6"x4" balsa wood windows with plexiglass 
                  and cloth blinds demonstrate real-world applications.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Interrupt-Driven Real-Time System</h3>
              <p className="text-secondary text-sm leading-relaxed">
                The software architecture uses <strong>interrupt-driven programming</strong> for optimal performance. 
                Timer interrupts fire every 10ms for sensor readings, while network interrupts handle incoming CAN messages. 
                This approach minimizes CPU overhead and ensures responsive system behavior across all distributed nodes.
              </p>
            </div>

            {/* Demo Video Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Live System Demonstration</h3>
              <div className="bg-box rounded-2xl p-6 shadow">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <iframe
                    src="https://www.youtube.com/embed/YnCn2WRyxFA"
                    title="Active Window Smart Home Demo"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-semibold mb-2">System Demo Video</h4>
                  <p className="text-secondary text-sm">
                    Watch the complete Active Window system in action, demonstrating automated window control, 
                    sensor integration, and CAN bus communication between XMC4200 boards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Achievements Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Technical Achievements & Performance</h2>
          
          {/* Key Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-box rounded-2xl p-6 shadow text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1000ft</div>
              <div className="text-secondary text-sm">Maximum Range</div>
              <div className="text-muted text-xs mt-1">Node-to-node distance</div>
            </div>
            <div className="bg-box rounded-2xl p-6 shadow text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">10ms</div>
              <div className="text-secondary text-sm">Response Time</div>
              <div className="text-muted text-xs mt-1">Interrupt-driven system</div>
            </div>
            <div className="bg-box rounded-2xl p-6 shadow text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">16V</div>
              <div className="text-secondary text-sm">Bus Voltage</div>
              <div className="text-muted text-xs mt-1">Custom power system</div>
            </div>
            <div className="bg-box rounded-2xl p-6 shadow text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">0%</div>
              <div className="text-secondary text-sm">Packet Loss</div>
              <div className="text-muted text-xs mt-1">Under nominal conditions</div>
            </div>
          </div>

          {/* Requirements Status */}
          <div className="bg-box rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-semibold mb-6">Requirements Achievement Status</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Fully Achieved
                </h4>
                <ul className="space-y-2 text-secondary text-sm">
                  <li>✅ <strong>Logic Definition</strong> - Clear logic 1 and 0 states</li>
                  <li>✅ <strong>CAN Bus Support</strong> - Hardware-accelerated communication</li>
                  <li>✅ <strong>Tree Topology</strong> - Flexible network architecture</li>
                  <li>✅ <strong>Broadcast Messaging</strong> - Network-wide communication</li>
                  <li>✅ <strong>Reliability</strong> - Zero dropped packets achieved</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-yellow-600 dark:text-yellow-400 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Partially Met
                </h4>
                <ul className="space-y-2 text-secondary text-sm">
                  <li>⚠️ <strong>Power Consumption</strong> - &lt;5mA target limited by dev board overhead</li>
                  <li>⚠️ <strong>Point-to-Point Messaging</strong> - Broadcast implemented, P2P pending</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Design Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Technical Design & Implementation</h2>
          
          {/* Product Images */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Physical Implementation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-box rounded-2xl p-6 shadow">
                <div className="relative group cursor-pointer">
                  <Image
                    src="/projects/active-window/product_image_0.jpeg"
                    alt="Prototype Hardware Setup"
                    width={500}
                    height={350}
                    className="rounded-lg w-full h-auto hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage('/projects/active-window/product_image_0.jpeg')}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full text-sm font-medium">
                      Click to enlarge
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold mt-4 mb-2">Prototype Setup</h4>
                <p className="text-secondary text-sm">Complete prototype setup with XMC4200 boards and sensors</p>
              </div>
              
              <div className="bg-box rounded-2xl p-6 shadow">
                <div className="relative group cursor-pointer">
                  <Image
                    src="/projects/active-window/product_image_1.jpeg"
                    alt="Window Actuator Assembly"
                    width={500}
                    height={350}
                    className="rounded-lg w-full h-auto hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage('/projects/active-window/product_image_1.jpeg')}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full text-sm font-medium">
                      Click to enlarge
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold mt-4 mb-2">Window Assembly</h4>
                <p className="text-secondary text-sm">Motorized window assembly demonstrating automated control system</p>
              </div>
            </div>
          </div>

          {/* System Diagrams */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">System Architecture</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-box rounded-2xl p-6 shadow">
                <div className="relative group cursor-pointer">
                  <Image
                    src="/projects/active-window/system_diagram.png"
                    alt="System Architecture Diagram"
                    width={500}
                    height={350}
                    className="rounded-lg w-full h-auto hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage('/projects/active-window/system_diagram.png')}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full text-sm font-medium">
                      Click to enlarge
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold mt-4 mb-2">System Diagram</h4>
                <p className="text-secondary text-sm">Overall system architecture showing component interactions and data flow</p>
              </div>
              
              <div className="bg-box rounded-2xl p-6 shadow">
                <div className="relative group cursor-pointer">
                  <Image
                    src="/projects/active-window/tranceiver_diagram.jpg"
                    alt="Transceiver Circuit Diagram"
                    width={500}
                    height={350}
                    className="rounded-lg w-full h-auto hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage('/projects/active-window/tranceiver_diagram.jpg')}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full text-sm font-medium">
                      Click to enlarge
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold mt-4 mb-2">CAN Transceiver Circuit</h4>
                <p className="text-secondary text-sm">Custom CAN transceiver circuit design for smart building networks</p>
              </div>
            </div>
          </div>

          {/* PCB Design */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">PCB Design & Hardware</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-box rounded-2xl p-6 shadow">
                <div className="relative group cursor-pointer">
                  <Image
                    src="/projects/active-window/pcb_design_0.jpg"
                    alt="PCB Design Layout"
                    width={400}
                    height={100}
                    className="rounded-lg w-full h-full object-cover hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage('/projects/active-window/pcb_design_0.jpg')}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full text-sm font-medium">
                      Click to enlarge
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold mt-4 mb-2">PCB Schematic Design</h4>
                <p className="text-secondary text-sm">Custom PCB Schematic optimized for CAN bus communication and power efficiency</p>
              </div>
              
              <div className="bg-box rounded-2xl p-6 shadow">
                <div className="relative group cursor-pointer">
                  <Image
                    src="/projects/active-window/pcb_design_1.jpg"
                    alt="PCB Implementation"
                    width={400}
                    height={250}
                    className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage('/projects/active-window/pcb_design_1.jpg')}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full text-sm font-medium">
                      Click to enlarge
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold mt-4 mb-2">PCB Layout Design</h4>
                <p className="text-secondary text-sm">Custom PCB layout optimized for CAN bus communication and power efficiency</p>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Testing & Hardware Deep-Dive */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Performance Testing & Hardware Specifications</h2>
          
          {/* Performance Testing */}
          <div className="bg-box rounded-2xl p-8 shadow mb-8">
            <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Frequency Analysis & Response Testing</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Network Performance Metrics</h4>
                <ul className="space-y-2 text-secondary">
                  <li className="flex justify-between">
                    <span>Message Transmission Range:</span>
                    <span className="font-semibold">1000+ feet</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Network Response Time:</span>
                    <span className="font-semibold">10ms average</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Packet Loss Rate:</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">0%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bus Voltage:</span>
                    <span className="font-semibold">16V stable</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Sensor Calibration Results</h4>
                <ul className="space-y-2 text-secondary">
                  <li className="flex justify-between">
                    <span>Temperature Accuracy:</span>
                    <span className="font-semibold">±1°C (calibrated)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Light Sensor Range:</span>
                    <span className="font-semibold">0-1024 ADC values</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Stepper Motor Precision:</span>
                    <span className="font-semibold">2048 steps/revolution</span>
                  </li>
                  <li className="flex justify-between">
                    <span>System Update Frequency:</span>
                    <span className="font-semibold">100Hz (10ms interrupts)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Custom PCB Design */}
          <div className="bg-box rounded-2xl p-8 shadow">
            <h3 className="text-xl font-semibold mb-6 text-green-600 dark:text-green-400">Custom PCB Design & Implementation</h3>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <p className="text-secondary leading-relaxed mb-4">
                  Developed a <strong>custom PCB design</strong> that serves as the foundation for our distributed 
                  network architecture. The board features an integrated CAN transceiver, power regulation circuitry, 
                  and standardized sensor/actuator interfaces.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Components</h4>
                    <ul className="text-sm text-secondary space-y-1">
                      <li>• XMC4200 microcontroller</li>
                      <li>• MCP2551 CAN transceiver</li>
                      <li>• LM7805 voltage regulator</li>
                      <li>• Status LED indicators</li>
                      <li>• Screw terminal blocks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Design Features</h4>
                    <ul className="text-sm text-secondary space-y-1">
                      <li>• Isolated power domains</li>
                      <li>• ESD protection circuits</li>
                      <li>• Modular sensor interfaces</li>
                      <li>• Debug header access</li>
                      <li>• Compact form factor</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-50/50 to-blue-50/50 dark:from-gray-800/20 dark:to-blue-900/10 rounded-lg p-4 border border-slate-100/50 dark:border-gray-700">
                <h4 className="font-semibold mb-2 text-sm">Technical Specs</h4>
                <div className="space-y-2 text-xs text-secondary">
                  <div className="flex justify-between">
                    <span>Operating Voltage:</span>
                    <span className="font-semibold">5V/16V dual rail</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CAN Speed:</span>
                    <span className="font-semibold">250 kbps</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PCB Layers:</span>
                    <span className="font-semibold">2-layer design</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Board Size:</span>
                    <span className="font-semibold">80mm x 60mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Connector Type:</span>
                    <span className="font-semibold">Phoenix terminal</span>
                  </div>
                </div>
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
                  <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full border-2 border-blue-200 dark:border-blue-800 cursor-pointer hover:scale-105 transition-transform">
                    <Image
                      src={member.image}
                      alt={`${member.name} - Team Member`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      onClick={() => setSelectedImage(member.image)}
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-secondary text-xs mb-1">{member.major}</p>
                  <p className="text-muted text-xs leading-relaxed">{member.contributions}</p>
                </div>
              ))}
            </div>
            
            {/* Team Achievement Highlights */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg">
              <h4 className="font-semibold mb-4 text-center">Collaborative Achievement Highlights</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2 text-sm text-green-600 dark:text-green-400">Hardware Excellence</h5>
                  <ul className="text-xs text-secondary space-y-1">
                    <li>• Custom PCB design from concept to manufacturing</li>
                    <li>• Robust power distribution with 16V bus system</li>
                    <li>• Modular sensor interfaces for scalability</li>
                    <li>• Professional-grade component selection and sourcing</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-sm text-blue-600 dark:text-blue-400">Software Innovation</h5>
                  <ul className="text-xs text-secondary space-y-1">
                    <li>• Real-time interrupt-driven architecture</li>
                    <li>• Reliable CAN bus protocol implementation</li>
                    <li>• Advanced sensor calibration algorithms</li>
                    <li>• Zero packet loss network performance</li>
                  </ul>
                </div>
              </div>
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