import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Copy, Check, Terminal, Box } from 'lucide-react'

function CodeSnippet({ code }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="relative group mt-3">
            <div className="absolute -inset-1 bg-brand-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative flex items-center bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-electric-300 overflow-hidden">
                <span className="shrink-0 text-brand-500/50 mr-3 pointer-events-none">$</span>
                <code className="flex-1 overflow-x-auto whitespace-pre no-scrollbar scroll-smooth">
                    {code}
                </code>
                <button
                    onClick={handleCopy}
                    className="ml-4 shrink-0 p-1.5 rounded-md hover:bg-white/10 text-white/40 hover:text-white transition-colors"
                    title="Copy"
                >
                    {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                </button>
            </div>
        </div>
    )
}

function InstallStep({ number, title, desc, code, icon: Icon, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="glass rounded-2xl p-6 border border-white/5 relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-500 to-electric-500 opacity-50" />
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-white/70">
                    <Icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-4">{desc}</p>
                    {code && <CodeSnippet code={code} />}
                </div>
            </div>
        </motion.div>
    )
}

export default function Install() {
    const { t } = useTranslation()

    return (
        <section id="install" className="relative py-24 px-6 bg-brand-950/20">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{t('install.title')}</h2>
                    <p className="text-white/50 text-lg">{t('install.subtitle')}</p>
                </motion.div>

                <div className="space-y-6">
                    <InstallStep
                        icon={Box}
                        title={t('install.step1')}
                        desc={t('install.step1Desc')}
                        code="sudo apt install ./cpugov*.deb"
                        delay={0.1}
                    />

                    <InstallStep
                        icon={Terminal}
                        title={t('install.step2')}
                        desc={t('install.step2Desc')}
                        code="curl -sS https://raw.githubusercontent.com/Serverket/cpugov/master/daemon/install.sh | sudo bash"
                        delay={0.2}
                    />
                </div>
            </div>
        </section>
    )
}
