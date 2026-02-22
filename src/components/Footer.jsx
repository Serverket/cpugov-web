import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const GITHUB_URL = 'https://github.com/Serverket/cpugov'
const ISSUES_URL = 'https://github.com/Serverket/cpugov/issues'

export default function Footer() {
    const { t } = useTranslation()
    return (
        <footer className="border-t border-white/10 py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/40">
                {/* Brand */}
                <div className="flex items-center gap-2 font-semibold text-white/70">
                    <img src="/io.github.serverket.cpugov.svg" alt="CPU Governor" className="w-6 h-6" />
                    CPU Governor
                </div>

                {/* Made with */}
                <p className="flex items-center gap-1.5">
                    {t('footer.madeWith')} 🗿 {t('footer.by')}{' '}
                    <a href="https://serverket.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-white/50">Serverket</a>
                    {' · '} <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t('footer.rights')}</a>
                </p>

                <nav className="flex items-center gap-5">
                    <Link to="/tos" className="hover:text-white transition-colors">{t('footer.links.tos')}</Link>
                    <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.links.privacy')}</Link>
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t('footer.links.github')}</a>
                    <a href={ISSUES_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t('footer.links.issues')}</a>
                </nav>
            </div>
        </footer>
    )
}
