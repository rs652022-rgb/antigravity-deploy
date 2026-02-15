"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Full Section Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/cta-blackhole-bg.png"
                    alt="CTA Background"
                    fill
                    className="object-cover blur-[8px]"
                    sizes="100vw"
                    quality={70}
                />
                {/* Subtle overlay to ensure text readability if needed, but keeping it minimal for richness */}
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Glass Card - Made transparent to let the background shine through (Mirror Effect) */}
                <div className="relative rounded-[2.5rem] overflow-hidden bg-white/[0.01] border border-white/[0.05] p-16 md:p-24 text-center backdrop-blur-[10px] group hover:border-white/[0.1] transition-colors duration-500">

                    {/* Inner Glows/Reflections */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-8 leading-[1.1] tracking-tight text-white drop-shadow-2xl">
                            Together, we&apos;ll solve <br />
                            <span className="text-white/40">tomorrow&apos;s</span> <br />
                            challenges <span className="text-white/40">today</span>
                        </h2>

                        <p className="text-white/60 text-lg mb-12 font-normal max-w-xl mx-auto text-shadow-sm">
                            Let&apos;s discuss how AdmirerX can transform your business operations and customer experience.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full bg-white text-black hover:bg-gray-100 px-8 h-12 font-bold text-[15px] transition-transform hover:scale-105 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                            >
                                <Link href="/contact" className="flex items-center gap-2">
                                    Get Started Today <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="rounded-full border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08] px-8 h-12 font-bold text-[15px] backdrop-blur-md transition-transform hover:scale-105"
                            >
                                <Link href="/contact">
                                    Partner With Us
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
