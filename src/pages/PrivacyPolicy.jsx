import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white/80 py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors mb-12 group">
                    <ArrowLeft size={18} className="translate-x-0 group-hover:-translate-x-1 transition-transform" />
                    Back to home
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
                        <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
                    </div>

                    <div className="space-y-8 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">Overview</h2>
                            <p>
                                At CPU Governor, accessible from <strong>cpugov.app</strong>, one of our main priorities is the privacy of our visitors.
                                This Privacy Policy document contains types of information that is collected and recorded by CPU Governor and how we use it.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">Data Collection</h2>
                            <p>
                                CPU Governor and its official website follow a strict no-tracking policy:
                            </p>
                            <ul className="list-disc ml-6 mt-4 space-y-2">
                                <li><strong>No Cookies:</strong> We do not use cookies or similar tracking technologies.</li>
                                <li><strong>No Analytics:</strong> We do not track your behavior or hold log files of your visit.</li>
                                <li><strong>No Selling Data:</strong> We do not sell or share any user information with third parties.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">Infrastructure</h2>
                            <p>
                                Our website is deployed on <strong>Vercel</strong>. While we do not collect data, Vercel may collect standard web logs required
                                for technical operations (e.g., IP addresses, browser type, and timestamps). These logs are not used by us for tracking or
                                identification purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">Open Source</h2>
                            <p>
                                The CPU Governor application operates entirely locally on your machine. It does not send telemetry,
                                crash reports, or usage statistics to any remote server. Your system settings stay on your system.
                            </p>
                        </section>

                        <footer className="pt-12 border-t border-white/10 text-sm text-white/40">
                            Last updated: February 22, 2026
                        </footer>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
