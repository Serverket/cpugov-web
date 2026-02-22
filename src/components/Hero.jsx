import React, { useRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Github, ChevronDown, Loader2 } from 'lucide-react'

import { useLatestRelease } from '../hooks/useLatestRelease'

const GITHUB_URL = 'https://github.com/Serverket/cpugov'

// Animated CPU grid background
function CpuGrid() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-20">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }}
            />
            {/* Pulsing dots at intersections */}
            {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-brand-400"
                    style={{
                        left: `${(i % 4) * 25 + 12.5}%`,
                        top: `${Math.floor(i / 4) * 33 + 16.5}%`,
                    }}
                    animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
                    transition={{ duration: 2 + (i * 0.3), repeat: Infinity, ease: 'easeInOut' }}
                />
            ))}
        </div>
    )
}

export default function Hero() {
    const { t } = useTranslation()
    const { release } = useLatestRelease()
    const videoRef = useRef(null)
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2
    }, [])

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-36 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
            <CpuGrid />

            {/* Floating badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
            >
                <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium text-brand-300 border border-brand-500/30 shadow-lg capitalize">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    {release ? `${release.tag}: ${release.name}` : t('hero.badge')}
                </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl font-black leading-none tracking-tight mb-6 max-w-4xl"
            >
                {t('hero.title')}{' '}
                <span className="gradient-text">{t('hero.titleHighlight')}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed mb-10"
            >
                {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="flex flex-col sm:flex-row gap-4 items-center"
            >
                <a
                    href="#download"
                    className="group flex items-center gap-2.5 bg-brand-600 hover:bg-brand-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 glow hover:glow hover:scale-105 shadow-lg"
                >
                    <Download size={18} />
                    {t('hero.downloadDeb')}
                </a>
                <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 glass hover:bg-white/10 text-white/80 hover:text-white font-medium px-7 py-3.5 rounded-xl transition-all duration-200"
                >
                    <Github size={18} />
                    {t('hero.viewSource')}
                </a>
            </motion.div>

            {/* App Screenshot mockup */}
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.90 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.7, ease: 'easeOut' }}
                className="relative mt-20 max-w-3xl w-full mx-auto"
            >
                <div className="glass rounded-2xl overflow-hidden shadow-2xl border border-white/10 glow">
                    {/* Window chrome */}
                    <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/10">
                        <span className="w-3 h-3 rounded-full bg-red-500/70" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                        <span className="w-3 h-3 rounded-full bg-green-500/70" />
                        <span className="ml-4 text-xs text-white/40 font-medium">CPU Governor — Live Demo</span>
                    </div>
                    {/* Video demo */}
                    <div className="bg-[#0d0d1a] relative overflow-hidden min-h-[400px] flex items-center justify-center">
                        <AnimatePresence>
                            {!isVideoLoaded && (
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d0d1a] z-10"
                                >
                                    <Loader2 className="w-10 h-10 text-brand-500 animate-spin" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <video
                            ref={videoRef}
                            src="/demo-cpugov.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            onCanPlayThrough={() => setIsVideoLoaded(true)}
                            className={`w-full h-auto block transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                        />
                    </div>
                </div>
                {/* Glow blob behind card */}
                <div className="absolute -inset-4 bg-brand-600/20 blur-3xl rounded-3xl -z-10" />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute bottom-8 flex flex-col items-center gap-1 text-white/30 text-xs"
            >
                <span>Scroll</span>
                <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    <ChevronDown size={16} />
                </motion.div>
            </motion.div>
        </section>
    )
}
