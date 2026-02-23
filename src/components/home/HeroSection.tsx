"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import UnicornHero from "@/components/home/UnicornHero";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Elements - Unicorn Studio Animation */}
            <UnicornHero />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <h1 className="font-[family-name:var(--font-inter)] font-bold tracking-[-0.02em] mb-16 text-center text-white w-full mx-auto">
                        <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[1.1]">
                            We Admire
                        </span>
                        <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[1.1]">
                            Your Dreams
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-text-muted max-w-[800px] mx-auto mb-16 font-normal leading-relaxed tracking-wide text-center">
                        Leading BPO services in India with trusted outsourcing and modern digital solutions.
                        We provide comprehensive services to simplify business challenges and drive growth.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full bg-white text-black hover:bg-gray-200 px-10 h-14 font-bold text-[16px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                        >
                            <a
                                href="https://wa.me/918826936399?text=Hi,%20I'm%20interested%20in%20finding%20out%20more%20about%20your%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                Speak With An Expert <ArrowRight className="w-5 h-5" />
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-12 h-14 font-bold text-[16px] backdrop-blur-md transition-all duration-300 hover:scale-105"
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
