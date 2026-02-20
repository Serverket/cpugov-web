import React from 'react'
import { motion } from 'framer-motion'

const SCREENSHOT_URL =
    'https://raw.githubusercontent.com/Serverket/cpugov/v0.1.0/screenshots/main-window.png'

export default function Screenshots() {
    return (
        <section id="screenshots" className="relative py-24 px-6 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* Two-column: text left, screenshot right */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left — text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-3">In Action</p>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
                            See Every<br className="hidden lg:block" /> Detail
                        </h2>
                        <p className="text-white/50 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                            A clean, native interface designed to stay out of your way while keeping everything visible at a glance.
                        </p>

                        {/* Feature pills */}
                        <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                            <span className="glass rounded-full px-4 py-2 text-sm font-medium border border-brand-500/30 text-brand-300">
                                ⚡ Real-time frequency
                            </span>
                            <span className="glass rounded-full px-4 py-2 text-sm font-medium border border-electric-500/30 text-electric-300">
                                🔒 Polkit secured
                            </span>
                            <span className="glass rounded-full px-4 py-2 text-sm font-medium border border-white/10 text-white/60">
                                🎨 libadwaita native
                            </span>
                        </div>
                    </motion.div>

                    {/* Right — screenshot (constrained size) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="relative flex-shrink-0 w-full lg:w-[420px]"
                    >
                        {/* Glow behind card */}
                        <div className="absolute -inset-4 bg-brand-600/20 blur-3xl rounded-3xl -z-10" />
                        <div
                            className="glass rounded-2xl overflow-hidden border border-white/10"
                            style={{ boxShadow: '0 20px 60px -15px rgba(79,70,229,0.4)' }}
                        >
                            {/* Window chrome */}
                            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white/5 border-b border-white/10">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                                <span className="ml-3 text-xs text-white/40 font-medium">CPU Governor</span>
                            </div>
                            <img
                                src={SCREENSHOT_URL}
                                alt="CPU Governor main window"
                                className="w-full h-auto block"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    )
}
