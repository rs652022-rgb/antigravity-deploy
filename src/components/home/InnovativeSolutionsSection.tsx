"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bot, Zap, Shield, Activity } from "lucide-react";
import "@/app/solutions.css"; // Importing styles

export default function InnovativeSolutionsSection() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Background Image & Blending */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/images/innovative-bg.png"
                    alt="Innovative Solutions Background"
                    fill
                    className="object-cover opacity-40 mix-blend-screen scale-105"
                    sizes="100vw"
                    quality={60}
                />
                {/* Lighter overlay to let image show through */}
                <div className="absolute inset-0 bg-background/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-10 text-center lg:text-left">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-text-muted text-[11px] font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-sm">
                            INNOVATIVE SOLUTIONS
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold font-display leading-[1.1] tracking-tight">
                            Human Excellence, <br />
                            <span className="text-white/40">Worldwide Impact</span>
                        </h2>
                    </div>
                    <p className="text-text-muted max-w-sm text-sm font-normal leading-relaxed mb-2">
                        Experience the future of business process outsourcing with our cutting-edge AI technology and intelligent automation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Solution 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="solution-card group"
                    >
                        <div className="solution-card-content">
                            <div className="solution-icon-chip">
                                <Bot className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="solution-title">AI-Powered <br /> Intelligence</h4>
                            <p className="solution-desc">
                                Advanced machine learning models that understand context and deliver personalized responses.
                            </p>
                        </div>
                        <div className="solution-image-container">
                            <Image
                                src="/images/pexels-agk42-2599244.jpg"
                                alt="AI"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                quality={80}
                            />
                        </div>
                    </motion.div>

                    {/* Solution 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="solution-card group"
                    >
                        <div className="solution-card-content">
                            <div className="solution-icon-chip">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="solution-title">Lightning Fast <br /> Response</h4>
                            <p className="solution-desc">
                                Sub-second response times powered by distributed cloud infrastructure.
                            </p>
                        </div>
                        <div className="solution-image-container">
                            <Image
                                src="/images/pexels-tima-miroshnichenko-6615233.jpg"
                                alt="Speed"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                quality={80}
                            />
                        </div>
                    </motion.div>

                    {/* Solution 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="solution-card group"
                    >
                        <div className="solution-card-content">
                            <div className="solution-icon-chip">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="solution-title">Enterprise-Grade <br /> Security</h4>
                            <p className="solution-desc">
                                ISO 27001 certified with end-to-end encryption and compliance automation.
                            </p>
                        </div>
                        <div className="solution-image-container">
                            <Image
                                src="/images/pexels-pixabay-248515.jpg"
                                alt="Security"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                quality={80}
                            />
                        </div>
                    </motion.div>

                    {/* Solution 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        className="solution-card group"
                    >
                        <div className="solution-card-content">
                            <div className="solution-icon-chip">
                                <Activity className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="solution-title">Continuous <br /> Innovation</h4>
                            <p className="solution-desc">
                                Weekly updates with cutting-edge AI features and performance enhancements.
                            </p>
                        </div>
                        <div className="solution-image-container">
                            <Image
                                src="/images/pexels-leeloothefirst-7887821.jpg"
                                alt="Innovation"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                quality={80}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
