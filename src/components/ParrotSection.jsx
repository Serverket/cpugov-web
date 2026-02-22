import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Download, Heart } from 'lucide-react'
import { useLatestRelease } from '../hooks/useLatestRelease'

const GITHUB_URL = 'https://github.com/Serverket/cpugov'

function ParrotLogo() {
    const { t } = useTranslation()
    return (
        <div className="relative w-32 h-32 shrink-0">
            {/* ViewBox 0 0 175 175 as per official SVG */}
            <svg viewBox="0 0 175 175" className="w-full h-full drop-shadow-[0_0_20px_rgba(21,224,237,0.5)]">
                {/* Background circle */}
                <circle cx="87.5" cy="87.5" r="87.5" fill="#15E0ED" />

                {/* Shaded polygon */}
                <defs>
                    <linearGradient id="distroGradient" gradientUnits="userSpaceOnUse" x1="61.3" y1="97.6" x2="167.6" y2="91.6">
                        <stop offset="0" style={{ stopColor: "#000000", stopOpacity: 0.9 }} />
                        <stop offset="1" style={{ stopColor: "#00E7FC", stopOpacity: 0 }} />
                    </linearGradient>
                </defs>
                <polygon
                    points="60.6,31.7 141.9,19 146.8,23.2 149.4,25.6 153.4,30 156.3,33.5 159.3,37.5 162,41.6 164.4,45.8 166.2,49.3 168.2,53.7 169.9,58.1 171.5,62.8 172.9,68.6 174,73.9 174.5,78.4 175,83.7 175,89.9 174.7,94.3 174.1,100 173.4,104.4 171.9,110.6 170,116.7 168.5,120.8 166.7,124.7 164.9,128.3 162.7,132.2 160.3,136.1 156.8,141 154.4,143.9 150.4,148.3 146.2,152.4 141.1,156.7 135.8,160.4 132.8,162.4 128.3,164.9 121.7,168.2 116.6,162.4 80.6,122.1 54.6,61.3"
                    fill="url(#distroGradient)"
                    className="opacity-30 pointer-events-none"
                />

                {/* Static Bird Silhouette */}
                <path
                    d="M80.6,122.1l36,40.3l-12-25.2l11.2,11.7L79.3,83L95,63.4l58.7-24.3 L95,40.4l38.2-20.1L60.6,31.7l-6,29.6l-29.3,1.9l-5.1,25.1l14.7-12"
                    fill="#1a1a1a"
                />
            </svg>
            <div className="absolute top-0 right-0 bg-brand-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/20 shadow-lg z-20 translate-x-1/4 -translate-y-1/4">
                {t('parrot.compatible')}
            </div>
        </div>
    )
}

export default function ParrotSection() {
    const { t } = useTranslation()
    const { release } = useLatestRelease()
    const debUrl = release?.debUrl ?? GITHUB_URL + '/releases'

    return (
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none opacity-20">
                <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-500/20 blur-3xl rounded-full" />
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-500/10 blur-3xl rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass border-brand-500/30 p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden relative"
                >
                    {/* Parrot themed accent bar */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-400" />

                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <ParrotLogo />

                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex flex-col md:flex-row md:items-center gap-3 text-white">
                                {t('parrot.title')}
                                <span className="text-sm font-medium bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30 w-fit mx-auto md:mx-0 whitespace-nowrap">
                                    {t('parrot.officialSupport')}
                                </span>
                            </h2>
                            <p className="text-xl text-white/80 font-medium mb-3">
                                {t('parrot.subtitle')}
                            </p>
                            <p className="text-white/60 leading-relaxed mb-8 max-w-2xl">
                                {t('parrot.desc')}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <a
                                    href={debUrl}
                                    className="inline-flex items-center gap-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 group w-full sm:w-auto justify-center"
                                >
                                    <Download size={20} className="group-hover:bounce" />
                                    {t('parrot.cta')}
                                </a>
                                <a
                                    href="https://www.parrotsec.org/download"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 glass border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-300 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-1 group w-full sm:w-auto justify-center"
                                >
                                    <Download size={20} className="group-hover:bounce" />
                                    {t('parrot.ctaDistro')}
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Heart showing some love */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex justify-center mt-8 text-cyan-400/30 gap-1.5 items-center text-sm font-medium"
                >
                    <Heart size={14} className="fill-current" />
                    <span>Shared with the Parrot Community</span>
                    <Heart size={14} className="fill-current" />
                </motion.div>
            </div>
        </section>
    )
}
