import React from 'react'
import './i18n/config'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import Download from './components/Download'
import Install from './components/Install'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Download />
        <Install />
      </main>
      <Footer />
    </div>
  )
}
