import React from 'react'
import { motion } from 'framer-motion'

const SCREENSHOT_URL =
    'https://raw.githubusercontent.com/Serverket/cpugov/refs/heads/master/screenshots/main-window.png'

export default function Screenshots() {
    return (
        <section id="screenshots" className="overflow-hidden relative px-6 py-24">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent via-brand-500/40" />

            <div className="mx-auto max-w-6xl">
                {/* Two-column: text left, screenshot right */}
                <div className="flex flex-col gap-12 items-center lg:flex-row lg:gap-16">

                    {/* Left — text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brand-400">In Action</p>
                        <h2 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">
                            See Every<br className="hidden lg:block" /> Detail
                        </h2>
                        <p className="mx-auto max-w-md text-lg leading-relaxed text-white/50 lg:mx-0">
                            A clean, native interface designed to stay out of your way while keeping everything visible at a glance.
                        </p>

                        {/* Feature pills */}
                        <div className="flex flex-wrap gap-3 justify-center mt-8 lg:justify-start">
                            <span className="px-4 py-2 text-sm font-medium rounded-full border glass border-brand-500/30 text-brand-300">
                                ⚡ Real-time frequency
                            </span>
                            <span className="px-4 py-2 text-sm font-medium rounded-full border glass border-electric-500/30 text-electric-300">
                                🔒 Polkit secured
                            </span>
                            <span className="px-4 py-2 text-sm font-medium rounded-full border glass border-white/10 text-white/60">
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
                        <div className="absolute -inset-4 rounded-3xl blur-3xl bg-brand-600/20 -z-10" />
                        <div
                            className="overflow-hidden rounded-2xl border glass border-white/10"
                            style={{ boxShadow: '0 20px 60px -15px rgba(79,70,229,0.4)' }}
                        >
                            {/* Window chrome */}
                            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white/5 border-b border-white/10">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                                <span className="ml-3 text-xs font-medium text-white/40">CPU Governor</span>
                            </div>
                            <img
                                src={SCREENSHOT_URL}
                                alt="CPU Governor main window"
                                className="block w-full h-auto"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent via-white/10" />
        </section>
    )
}
