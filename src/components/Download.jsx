import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Download as DownloadIcon, Github, Terminal, AlertCircle, Tag, Loader2 } from 'lucide-react'
import { useLatestRelease } from '../hooks/useLatestRelease'

const GITHUB_URL = 'https://github.com/Serverket/cpugov'

function DownloadCard({ icon: Icon, title, sub, href, primary, disabled }) {
    return (
        <motion.a
            href={disabled ? undefined : href}
            target={disabled ? undefined : '_blank'}
            rel="noopener noreferrer"
            whileHover={disabled ? {} : { y: -4, scale: 1.02 }}
            whileTap={disabled ? {} : { scale: 0.98 }}
            className={`flex flex-col items-center gap-3 p-7 rounded-2xl transition-all duration-300 border ${primary
                ? 'bg-brand-600/80 border-brand-500 hover:bg-brand-500 glow shadow-2xl'
                : disabled
                    ? 'glass border-white/5 opacity-50 cursor-not-allowed'
                    : 'glass hover:bg-white/10 border-white/10'
                }`}
        >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${primary ? 'bg-white/20' : 'bg-white/5'}`}>
                <Icon size={28} className="text-white" />
            </div>
            <div className="text-center">
                <p className="font-bold text-white text-lg">{title}</p>
                <p className="text-white/60 text-sm mt-0.5">{sub}</p>
            </div>
        </motion.a>
    )
}

function VersionBadge({ release, loading, error }) {
    if (loading) return (
        <span className="inline-flex items-center gap-1.5 glass rounded-full px-4 py-1.5 text-sm text-white/50 border border-white/10">
            <Loader2 size={12} className="animate-spin" />
            Fetching version…
        </span>
    )
    if (error || !release) return null
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 glass rounded-full px-4 py-1.5 text-sm font-medium text-green-400 border border-green-500/30"
        >
            <Tag size={12} />
            Latest: {release.tag}
        </motion.span>
    )
}

export default function Download() {
    const { t } = useTranslation()
    const { release, loading, error } = useLatestRelease()

    const debUrl = release?.debUrl ?? GITHUB_URL + '/releases'
    const sourceUrl = release?.releaseUrl ?? GITHUB_URL + '/releases'

    return (
        <section id="download" className="relative py-28 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-electric-400 text-sm font-semibold uppercase tracking-wider mb-3">Download</p>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{t('download.title')}</h2>
                    <p className="text-white/50 text-lg mb-5">{t('download.subtitle')}</p>
                    {/* Live version badge */}
                    <div className="flex justify-center">
                        <VersionBadge release={release} loading={loading} error={error} />
                    </div>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
                    <DownloadCard
                        icon={Terminal}
                        title={t('download.deb')}
                        sub={release ? `${release.tag} · ${t('download.debSub')}` : t('download.debSub')}
                        href={debUrl}
                    />
                    <DownloadCard
                        icon={Github}
                        title={t('download.source')}
                        sub={release ? `${release.tag} · ${t('download.sourceSub')}` : t('download.sourceSub')}
                        href={sourceUrl}
                    />
                </div>

                {/* Daemon notice */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-10 max-w-2xl mx-auto flex items-start gap-3 glass rounded-xl px-5 py-4 border border-yellow-500/20"
                >
                    <AlertCircle size={18} className="text-yellow-400 mt-0.5 shrink-0" />
                    <p className="text-white/60 text-sm leading-relaxed">{t('download.requirements')}</p>
                </motion.div>

            </div>
        </section>
    )
}
