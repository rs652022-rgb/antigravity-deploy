"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function ReadyToDeliverSection() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/images/ready-bg-v3.jpg"
                    alt="Ready Background"
                    fill
                    className="object-cover opacity-60 mix-blend-screen blur-[5px] scale-105"
                    sizes="100vw"
                    quality={60}
                />
                <div className="absolute inset-0 bg-background/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

                {/* Bottom Fade merging into next dark section */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10 backdrop-blur-md" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-5xl md:text-6xl font-bold font-display mb-8 leading-[1.1] tracking-tight">
                            Ready to <span className="text-white/40">Deliver <br /> Excellence</span>
                        </h2>
                        <p className="text-text-muted text-lg mb-16 max-w-md mx-auto lg:mx-0 font-normal leading-relaxed">
                            Empowering your business with exceptional talent and unwavering commitment.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                            <div>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display tracking-tight text-center sm:text-left">100+</h3>
                                <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold text-center sm:text-left">Team Members Ready</p>
                            </div>
                            <div>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display tracking-tight text-center sm:text-left">99%</h3>
                                <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold text-center sm:text-left">Client Satisfaction Target</p>
                            </div>
                            <div>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display tracking-tight text-center sm:text-left">24/7</h3>
                                <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold text-center sm:text-left">Support Available</p>
                            </div>
                            <div>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display tracking-tight text-center sm:text-left">100%</h3>
                                <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold text-center sm:text-left">Commitment to Quality</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Glass Card */}
                    <div className="relative">
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
                    </div>
                </div>
            </div>
        </section>
    );
}
