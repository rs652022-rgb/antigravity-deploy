"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ShoppingCart, // E-Commerce (closest match)
    Landmark,     // Financial/Banking
    Heart,        // Healthcare
    Server,       // Technology
    Building2,    // Banking & Insurance
    GraduationCap // Education
} from "lucide-react";

const industries = [
    {
        icon: ShoppingCart,
        badgeTop: "24/7",
        badgeBottom: "AVAILABLE",
        title: "E-Commerce & Retail",
        desc: "Comprehensive solutions for the modern landscape.",
        image: "/images/pexels-fauxels-3184302.jpg",
    },
    {
        icon: Landmark,
        badgeTop: "Fast",
        badgeBottom: "PROCESSING",
        title: "Financial Services",
        desc: "Comprehensive solutions for the modern landscape.",
        image: "/images/pexels-leeloothefirst-7887821.jpg",
    },
    {
        icon: Heart,
        badgeTop: "Secure",
        badgeBottom: "COMPLIANT",
        title: "Healthcare & Pharma",
        desc: "Comprehensive solutions for the modern landscape.",
        image: "/images/pexels-cottonbro-5473960.jpg",
    },
    {
        icon: Server,
        badgeTop: "24/7",
        badgeBottom: "SUPPORT",
        title: "Technology & SaaS",
        desc: "Comprehensive solutions for the modern landscape.",
        image: "/images/pexels-cottonbro-3825307.jpg",
    },
    {
        icon: Building2,
        badgeTop: "Fast",
        badgeBottom: "PROCESSING",
        title: "Banking & Insurance",
        desc: "Comprehensive solutions for the modern landscape.",
        image: "/images/pexels-rdne-7948038.jpg",
    },
    {
        icon: GraduationCap,
        badgeTop: "Smart",
        badgeBottom: "SOLUTIONS",
        title: "Education & E-Learning",
        desc: "Comprehensive solutions for the modern landscape.",
        image: "/images/pexels-cottonbro-6153345.jpg",
    },
];

export default function ServingEveryIndustrySection() {
    return (
        <section className="industry-section relative py-24 overflow-hidden bg-[#0d0b16]">
            {/* Background Texture - Scanlines & Streaks */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Deep purple/indigo base */}
                <div className="absolute inset-0 bg-[#0d0b16]" />

                {/* Scanline pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                        backgroundSize: "20px 20px"
                    }}
                />

                {/* Horizontal Scanlines (CRT effect) */}
                <div
                    className="absolute inset-0 opacity-[0.15]"
                    style={{
                        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #4c1d95 4px, transparent 4px)"
                    }}
                />

                {/* Vertical Light Streaks (Subtle) */}
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent blur-[1px]" />
                <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent blur-[1px]" />

                {/* Top Fade (Merging effect) */}
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-10 backdrop-blur-md" />

                {/* Bottom Fade (Merging effect) */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-5 py-2 rounded-full bg-white/[0.05] border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
                            INDUSTRY EXPERTISE
                        </span>

                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display mb-6 tracking-tight text-white leading-[1.1]">
                            Serving <span className="text-white/40">Every Industry</span>
                        </h2>

                        <p className="text-text-muted max-w-2xl mx-auto text-lg font-normal leading-relaxed">
                            Delivering specialized BPO solutions across multiple sectors with proven <br className="hidden md:block" />
                            results and industry-leading expertise.
                        </p>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="industry-card group relative h-[420px] rounded-[2rem] overflow-hidden border border-white/10 bg-[#1c182d]/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_20px_40px_-15px_rgba(76,29,149,0.3)]"
                        >
                            {/* Inner Gradient Surface */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-100 pointer-events-none" />

                            {/* Top Content (Icon + Badge) */}
                            <div className="relative z-20 p-8 flex justify-between items-start">
                                {/* Icon Box */}
                                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white/10 group-hover:scale-105">
                                    <item.icon className="w-6 h-6" />
                                </div>

                                {/* Badge (Text + Subtext) */}
                                <div className="text-right">
                                    <div className="text-xl font-bold text-white font-display tracking-tight">{item.badgeTop}</div>
                                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">{item.badgeBottom}</div>
                                </div>
                            </div>

                            {/* Middle Content (Title + Desc) */}
                            <div className="relative z-20 px-8 mt-2">
                                <h3 className="text-2xl font-bold text-white mb-2 font-display tracking-tight group-hover:text-purple-200 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed max-w-[90%]">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Bottom Image Area */}
                            <div className="absolute bottom-2 left-2 right-2 h-44 rounded-b-[1.7rem] rounded-t-[1rem] overflow-hidden mt-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="absolute inset-0 bg-purple-900/20 z-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-300" />
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={75}
                                />
                                {/* Bottom Shadow Fade */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#151221] via-transparent to-transparent opacity-80" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
