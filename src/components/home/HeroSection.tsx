"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import UnicornHero from "@/components/home/UnicornHero";

export default function HeroSection() {
    return (
        <section className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[750px] h-screen flex items-center justify-center overflow-hidden pt-[60px] md:pt-[80px] lg:pt-[100px]">
            {/* Background Elements - Unicorn Studio Animation */}
            <UnicornHero />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center mt-8 sm:mt-12 lg:mt-0"
                >
                    <h1 className="font-[family-name:var(--font-inter)] font-bold tracking-[-0.02em] mb-6 lg:mb-8 text-center text-white w-full mx-auto">
                        <span className="block text-6xl sm:text-8xl md:text-9xl lg:text-[120px] leading-[1.05]">
                            We Admire
                        </span>
                        <span className="block text-6xl sm:text-8xl md:text-9xl lg:text-[120px] leading-[1.05]">
                            Your Dreams
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-[#ffffff] max-w-[800px] mx-auto mb-8 sm:mb-9 font-normal leading-relaxed tracking-wide text-center">
                        Leading BPO services in India with trusted outsourcing and modern digital solutions.
                        We provide comprehensive services to simplify business challenges and drive growth.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full bg-white text-black hover:bg-gray-200 px-10 h-14 font-bold text-[16px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                        >
                            <Link
                                href="/careers"
                                className="flex items-center gap-2"
                            >
                                Explore Careers at AdmirerX <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-12 h-14 font-bold text-[16px] backdrop-blur-md transition-all duration-300 hover:scale-105"
                        >
                            <Link href="/about">
                                Learn More About AdmirerX
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
