import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function TermsOfService() {
    const { t } = useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white/80 py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors mb-12 group">
                    <ArrowLeft size={18} className="translate-x-0 group-hover:-translate-x-1 transition-transform" />
                    {t('tos.back')}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-400">
                            <FileText size={24} />
                        </div>
                        <h1 className="text-4xl font-bold text-white">{t('tos.title')}</h1>
                    </div>

                    <div className="space-y-8 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{t('tos.s1Title')}</h2>
                            <p>{t('tos.s1Body')}</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{t('tos.s2Title')}</h2>
                            <p>{t('tos.s2Body')}</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{t('tos.s3Title')}</h2>
                            <p>{t('tos.s3Body')}</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{t('tos.s4Title')}</h2>
                            <p>{t('tos.s4Body')}</p>
                        </section>

                        <footer className="pt-12 border-t border-white/10 text-sm text-white/40">
                            {t('tos.lastUpdated')}
                        </footer>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
