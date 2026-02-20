import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Zap, Activity, ShieldCheck, Palette, Globe, RefreshCw } from 'lucide-react'

const ICON_MAP = { Zap, Activity, ShieldCheck, Palette, Globe, RefreshCw }

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
    }),
}

export default function Features() {
    const { t } = useTranslation()
    const items = t('features.items', { returnObjects: true })

    return (
        <section id="features" className="relative py-28 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-3">Features</p>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                        {t('features.title')}
                    </h2>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto">{t('features.subtitle')}</p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {items.map((item, i) => {
                        const Icon = ICON_MAP[item.icon] || Zap
                        return (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className="glass rounded-2xl p-6 cursor-default transition-all duration-300 hover:border-brand-500/40 hover:bg-white/[0.07] group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-electric-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Icon size={22} className="text-white" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
