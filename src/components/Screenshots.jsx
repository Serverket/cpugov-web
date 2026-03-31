import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const SCREENSHOT_URL =
    'https://raw.githubusercontent.com/Serverket/cpugov/refs/heads/master/screenshots/main-window.png'
const CACHE_KEY = 'cpugov_screenshot_v1'

function useScreenshotCache() {
    const [src, setSrc] = useState(() => localStorage.getItem(CACHE_KEY) || null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (src) { setLoaded(true); return }
        fetch(SCREENSHOT_URL)
            .then(r => r.blob())
            .then(blob => new Promise((res, rej) => {
                const reader = new FileReader()
                reader.onload = () => res(reader.result)
                reader.onerror = rej
                reader.readAsDataURL(blob)
            }))
            .then(dataUrl => {
                try { localStorage.setItem(CACHE_KEY, dataUrl) } catch (_) {}
                setSrc(dataUrl)
                setLoaded(true)
            })
            .catch(() => {
                setSrc(SCREENSHOT_URL)
                setLoaded(true)
            })
    }, [])

    return { src, loaded }
}

function SkeletonShimmer() {
    return (
        <div className="w-full aspect-[4/3] relative overflow-hidden bg-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full animate-shimmer via-white/10" />
        </div>
    )
}

export default function Screenshots() {
    const { t } = useTranslation()
    const { src, loaded } = useScreenshotCache()

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
                        <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brand-400">{t('screenshots.badge')}</p>
                        <h2 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">
                            {t('screenshots.title')}
                        </h2>
                        <p className="mx-auto max-w-md text-lg leading-relaxed text-white/50 lg:mx-0">
                            {t('screenshots.subtitle')}
                        </p>

                        {/* Feature pills */}
                        <div className="flex flex-wrap gap-3 justify-center mt-8 lg:justify-start">
                            <span className="px-4 py-2 text-sm font-medium rounded-full border glass border-brand-500/30 text-brand-300">
                                {t('screenshots.pill1')}
                            </span>
                            <span className="px-4 py-2 text-sm font-medium rounded-full border glass border-electric-500/30 text-electric-300">
                                {t('screenshots.pill2')}
                            </span>
                            <span className="px-4 py-2 text-sm font-medium rounded-full border glass border-white/10 text-white/60">
                                {t('screenshots.pill3')}
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
                                <span className="ml-3 text-xs font-medium text-white/40">{t('screenshots.windowLabel')}</span>
                            </div>
                            <AnimatePresence mode="wait">
                                {!loaded ? (
                                    <motion.div key="skeleton" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        <SkeletonShimmer />
                                    </motion.div>
                                ) : (
                                    <motion.img
                                        key="image"
                                        src={src}
                                        alt="CPU Governor main window"
                                        className="block w-full h-auto"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent via-white/10" />
        </section>
    )
}
