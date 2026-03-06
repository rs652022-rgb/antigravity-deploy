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
            <div className="absolute inset-0 z-0 bg-[#050505]">
                <Image
                    src="/images/cta-bg-new.jpg"
                    alt="CTA Background"
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    quality={70}
                />

                {/* Subtle overlay to ensure text readability bringing in a slightly darker tone */}
                <div className="absolute inset-0 bg-black/50 mix-blend-overlay" />
                <div className="absolute inset-0 bg-black/40" />

                {/* Top Fade (Merging effect with preceding section) */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent z-10" />

                {/* Bottom Fade (Merging effect with Footer/succeeding section) */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                {/* Premium Glass Card - Matching global theme border, blur and shadow */}
                <div className="relative rounded-[2.5rem] p-10 md:p-14 overflow-hidden border border-white/[0.12] bg-white/[0.01] backdrop-blur-[12px] shadow-2xl group hover:border-white/[0.2] transition-all duration-500 text-center">

                    {/* Inner Glows/Reflections */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-8 leading-[1.1] tracking-tight text-white drop-shadow-2xl">
                            Together, we&apos;ll solve <br />
                            <span className="text-[#ffffff]">tomorrow&apos;s</span> <br />
                            challenges <span className="text-[#ffffff]">today</span>
                        </h2>

                        <p className="text-[#ffffff] text-[16px] leading-relaxed mb-12 font-medium max-w-xl mx-auto text-shadow-sm">
                            Let&apos;s discuss how AdmirerX can transform your business operations and customer experience.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full bg-white text-black hover:bg-gray-200 px-10 h-14 font-bold text-[16px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                            >
                                <Link href="/contact" className="flex items-center gap-2">
                                    Contact Us <ArrowRight className="w-5 h-5" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-12 h-14 font-bold text-[16px] backdrop-blur-md transition-all duration-300 hover:scale-105"
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
