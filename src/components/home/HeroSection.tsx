"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import UnicornHero from "@/components/home/UnicornHero";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements - Unicorn Studio Animation */}
            <UnicornHero />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="font-[family-name:var(--font-inter)] text-4xl sm:text-6xl md:text-[96px] font-bold leading-[1.1] tracking-[-0.02em] mb-8 text-center text-white max-w-6xl mx-auto">
                        <span className="sm:whitespace-nowrap inline-block">Empowering Innovation</span><br />
                        <span className="inline-block">in the <span className="text-[#B9BCC8]">AI Era</span></span>
                    </h1>

                    <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-12 font-normal leading-relaxed tracking-wide">
                        Leading BPO services in India with trusted outsourcing solutions. <br />
                        We simplify business challenges and turn possibilities into progress.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full bg-white text-black hover:bg-gray-200 px-8 h-12 font-bold text-[15px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                        >
                            <a
                                href="https://wa.me/918826936399?text=Hi,%20I'm%20interested%20in%20finding%20out%20more%20about%20your%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                Speak with an Expert <ArrowRight className="w-4 h-4" />
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-10 h-12 font-bold text-[15px] backdrop-blur-md transition-all duration-300 hover:scale-105"
                        >
                            <Link href="/services">
                                Learn More
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
