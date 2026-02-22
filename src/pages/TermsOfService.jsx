import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TermsOfService() {
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
                            <FileText size={24} />
                        </div>
                        <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
                    </div>

                    <div className="space-y-8 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">1. Acceptable Use</h2>
                            <p>
                                By accessing this website or using the CPU Governor software, you agree to comply with all applicable local laws
                                and regulations. The software is provided as a utility for managing CPU frequency scaling governors on Linux systems.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. Open Source License</h2>
                            <p>
                                CPU Governor is licensed under the <strong>GNU General Public License v3.0</strong>. You are free to use,
                                modify, and distribute the software in accordance with the terms of this license.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. Disclaimer of Warranty</h2>
                            <p>
                                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
                                TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                            <p>
                                Changing CPU governors affects hardware power consumption and thermal performance. Use extreme caution when
                                using high-performance settings on systems with limited cooling. We are not responsible for any hardware
                                issues arising from the use of this software.
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
