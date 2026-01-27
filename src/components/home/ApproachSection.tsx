"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Cpu, Lock } from "lucide-react";

export default function ApproachSection() {
    return (
        <section className="py-20 bg-background relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-text-muted text-[11px] font-bold uppercase tracking-[0.2em] mb-8 shadow-sm backdrop-blur-md">
                        OUR APPROACH
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-[1.1] tracking-tight">
                        We bring together people and <br />
                        <span className="text-white/40">intelligent automation</span>
                    </h2>
                    <p className="text-text-muted max-w-3xl mx-auto text-lg md:text-xl font-normal leading-relaxed">
                        Trusted outsourcing partner for businesses seeking affordable BPO services and <br className="hidden md:block" />
                        staffing solutions in India.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="group glass-card flex flex-col h-full relative"
                    >
                        <div className="p-10 pb-0 flex-grow relative z-10">
                            <div className="approach-icon-chip mb-8">
                                <Users className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-display tracking-tight">Stronger Teams</h3>
                            <p className="text-text-muted leading-relaxed mb-10 text-[15px]">
                                Building high-performing teams that combine human expertise with cutting-edge technology to deliver exceptional results.
                            </p>
                        </div>
                        <div className="relative h-72 w-full mt-auto overflow-hidden">
                            <Image
                                src="/images/pexels-fauxels-3184302.jpg"
                                alt="Stronger Teams"
                                fill
                                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={85}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="group glass-card flex flex-col h-full relative"
                    >
                        <div className="p-10 pb-0 flex-grow relative z-10">
                            <div className="approach-icon-chip mb-8">
                                <Cpu className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-display tracking-tight">Smarter Technology</h3>
                            <p className="text-text-muted leading-relaxed mb-10 text-[15px]">
                                AI-powered automation and intelligent systems that transform operations and drive business efficiency at scale.
                            </p>
                        </div>
                        <div className="relative h-72 w-full mt-auto overflow-hidden">
                            <Image
                                src="/images/pexels-michelangelo-buonarroti-8728380.jpg"
                                alt="Smarter Technology"
                                fill
                                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={85}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="group glass-card flex flex-col h-full relative"
                    >
                        <div className="p-10 pb-0 flex-grow relative z-10">
                            <div className="approach-icon-chip mb-8">
                                <Lock className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-display tracking-tight">Safer Operations</h3>
                            <p className="text-text-muted leading-relaxed mb-10 text-[15px]">
                                Enterprise-grade security protocols ensuring data protection and compliance across all client engagements.
                            </p>
                        </div>
                        <div className="relative h-72 w-full mt-auto overflow-hidden">
                            <Image
                                src="/images/pexels-cottonbro-5473960.jpg"
                                alt="Safer Operations"
                                fill
                                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={85}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
