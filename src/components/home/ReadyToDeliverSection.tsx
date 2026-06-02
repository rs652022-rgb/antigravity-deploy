"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ReadyToDeliverSection() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Background & Ambient Glow */}
            <div 
                className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#070707]/70 via-[#070707]/80 to-[#070707]/88"
            >
                {/* Subtle radial glow */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: "radial-gradient(circle at center, rgba(0, 210, 255, 0.06), transparent 65%)"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/60 via-transparent to-[#070707]/70" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="flex flex-col">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center lg:text-left"
                        >
                            <h2 className="text-5xl md:text-6xl font-bold font-display mb-8 leading-[1.1] tracking-tight">
                                Ready to <span className="text-white/40">Deliver <br /> Excellence</span>
                            </h2>
                            <p className="text-text-muted text-lg mb-16 max-w-md mx-auto lg:mx-0 font-normal leading-relaxed">
                                Empowering your business with exceptional talent and unwavering commitment.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                            {[
                                { val: "100+", label: "Team Members Ready" },
                                { val: "99%", label: "Client Satisfaction Target" },
                                { val: "24/7", label: "Support Available" },
                                { val: "100%", label: "Commitment to Quality" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                >
                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display tracking-tight text-center sm:text-left">{item.val}</h3>
                                    <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold text-center sm:text-left">{item.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Glass Card */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square glass-premium rounded-[3rem] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden group border border-white/10 hover:border-white/20 transition-all duration-500">

                            {/* Inner glow */}
                            <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10">
                                <div className="w-28 h-28 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-all duration-500 shadow-2xl">
                                    <CheckCircle className="w-12 h-12 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold mb-3 font-display tracking-tight">Quality Assurance</h3>
                                <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Standardized Excellence</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
