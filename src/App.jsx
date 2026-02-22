import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './i18n/config'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import Download from './components/Download'
import Install from './components/Install'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import BackToTop from './components/BackToTop'

function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Screenshots />
      <Download />
      <Install />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/tos" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  )
}
