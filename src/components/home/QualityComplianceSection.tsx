"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function QualityComplianceSection() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Full Section Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/quality-bg-premium-v2.jpg"
                    alt="Quality Background"
                    fill
                    className="object-cover blur-[6px]"
                    priority
                    sizes="100vw"
                    quality={70}
                />
                {/* Subtle overlay for text readability without killing the vibe */}
                <div className="absolute inset-0 bg-black/60 mix-blend-overlay" />

                {/* Additional darkening layer for that 'little darker tone' */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Vignette / Radial Fade for focus - intensified */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_35%,black_100%)] pointer-events-none opacity-90" />

                {/* Top Fade (Merging effect) */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent z-10" />

                {/* Bottom Fade (Merging effect) */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content & Checklist */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="mb-8 md:mb-12"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.15] text-white/70 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-8 backdrop-blur-md shadow-sm">
                                TRUSTED & CERTIFIED
                            </span>
                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display leading-[1.1] text-white tracking-tight drop-shadow-xl">
                                Quality & <span className="text-white/60">Compliance</span>
                            </h2>
                        </motion.div>

                        <div className="space-y-8">
                            {[
                                { title: "ISO 27001 Certified", desc: "Enterprise-grade information security" },
                                { title: "GDPR & PCI DSS Compliant", desc: "Full regulatory compliance" },
                                { title: "Enterprise-Grade Infrastructure", desc: "State-of-the-art technology stack" },
                                { title: "AI-Powered Platform", desc: "Next-generation automation tools" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="flex items-start gap-6 group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.15] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.08] group-hover:border-white/30 transition-all duration-300">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-purple-200 transition-colors tracking-tight text-shadow-sm">{item.title}</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Premium Glass Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Custom Dark Premium Glass Card - Mirror Effect */}
                        <div className="relative rounded-[2.5rem] p-10 md:p-14 overflow-hidden border border-white/[0.12] bg-white/[0.01] backdrop-blur-[12px] shadow-2xl group hover:border-white/[0.2] transition-all duration-500">

                            {/* Reflection/Sheen */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />

                            <div className="relative z-10">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.15] text-white/70 text-[10px] font-bold uppercase tracking-[0.2em] mb-12 backdrop-blur-md shadow-sm">
                                    OUR PROMISE
                                </span>

                                <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display mb-8 leading-[1.05] text-white tracking-tight drop-shadow-lg">
                                    Built for <br />
                                    <span className="text-white/60">Performance</span>
                                </h3>

                                <p className="text-white/70 text-[16px] leading-relaxed mb-16 max-w-sm font-medium">
                                    State-of-the-art infrastructure ready to deliver exceptional results.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8 sm:gap-12">
                                    {/* Metric 1 */}
                                    <div>
                                        <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-2 tracking-tight drop-shadow-md">100%</div>
                                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Commitment to Excellence</div>
                                    </div>

                                    {/* Metric 2 */}
                                    <div>
                                        <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-2 tracking-tight drop-shadow-md">&lt;30s</div>
                                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Target Response Time</div>
                                    </div>

                                    {/* Metric 3 */}
                                    <div>
                                        <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white mb-2 tracking-tight drop-shadow-md">24/7</div>
                                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Global Support</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
