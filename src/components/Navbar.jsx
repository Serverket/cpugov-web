import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const LANGS = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
]

export default function Navbar() {
    const { t, i18n } = useTranslation()
    const [scrolled, setScrolled] = useState(false)
    const [langOpen, setLangOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-white/10 py-3' : 'py-5'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 font-bold text-lg">
                    <img
                        src="/io.github.serverket.cpugov.svg"
                        alt="CPU Governor logo"
                        className="w-8 h-8"
                    />
                    <span className="gradient-text">CPU Governor</span>
                </a>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                    <a href="#features" className="hover:text-white transition-colors">{t('nav.features')}</a>
                    <a href="#install" className="hover:text-white transition-colors">{t('nav.install')}</a>
                    <a href="#download" className="hover:text-white transition-colors">{t('nav.download')}</a>
                    <a href="https://github.com/Serverket/cpugov" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t('nav.github')}</a>
                </div>

                {/* Language Picker */}
                <div className="relative">
                    <button
                        onClick={() => setLangOpen(!langOpen)}
                        className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white glass rounded-lg px-3 py-2 transition-all"
                    >
                        <Globe size={14} />
                        {LANGS.find(l => l.code === i18n.language)?.flag || '🌐'}
                    </button>
                    <AnimatePresence>
                        {langOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                                className="absolute right-0 mt-2 glass rounded-xl overflow-hidden shadow-2xl"
                            >
                                {LANGS.map(lang => (
                                    <button
                                        key={lang.code}
                                        onClick={() => { i18n.changeLanguage(lang.code); setLangOpen(false) }}
                                        className={`flex items-center gap-2 w-full px-4 py-2.5 text-sm hover:bg-white/10 transition-colors whitespace-nowrap ${i18n.language === lang.code ? 'text-brand-400' : 'text-white/80'
                                            }`}
                                    >
                                        {lang.flag} {lang.label}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.nav>
    )
}
