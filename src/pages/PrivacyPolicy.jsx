import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function PrivacyPolicy() {
    const { t } = useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white/80 py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors mb-12 group">
                    <ArrowLeft size={18} className="translate-x-0 group-hover:-translate-x-1 transition-transform" />
                    {t('privacy.back')}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-400">
                            <Shield size={24} />
                        </div>
                        <h1 className="text-4xl font-bold text-white">{t('privacy.title')}</h1>
                    </div>

                    <div className="space-y-8 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{t('privacy.s1Title')}</h2>
                            <p>{t('privacy.s1Body')}</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{t('privacy.s2Title')}</h2>
                            <p>{t('privacy.s2Body')}</p>
                            <ul className="list-disc ml-6 mt-4 space-y-2">
                                <li><strong>{t('privacy.s2i1')}</strong> {t('privacy.s2i1Desc')}</li>
                                <li><strong>{t('privacy.s2i2')}</strong> {t('privacy.s2i2Desc')}</li>
                                <li><strong>{t('privacy.s2i3')}</strong> {t('privacy.s2i3Desc')}</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{t('privacy.s3Title')}</h2>
                            <p>{t('privacy.s3Body')}</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{t('privacy.s4Title')}</h2>
                            <p>{t('privacy.s4Body')}</p>
                        </section>

                        <footer className="pt-12 border-t border-white/10 text-sm text-white/40">
                            {t('privacy.lastUpdated')}
                        </footer>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
