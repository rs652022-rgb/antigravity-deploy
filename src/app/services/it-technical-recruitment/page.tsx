"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Code2,
    Smartphone,
    Database,
    BrainCircuit,
    Cloud,
    ShieldAlert,
    Bug,
    Palette,
    Server,
    CheckCircle,
    Zap,
    DollarSign,
    Briefcase,
    Users,
    Target,
    ArrowRight,
    Search,
    MessageSquare
} from "lucide-react";

const offerings = [
    { icon: Code2, title: "Software Developers & Engineers" },
    { icon: Smartphone, title: "Web & Mobile App Developers" },
    { icon: Database, title: "Data Scientists & Data Analysts" },
    { icon: BrainCircuit, title: "AI / ML Engineers" },
    { icon: Cloud, title: "Cloud & DevOps Professionals" },
    { icon: ShieldAlert, title: "Cybersecurity Specialists" },
    { icon: Bug, title: "QA & Testing Engineers" },
    { icon: Palette, title: "UI / UX Designers" },
    { icon: Server, title: "IT Support & Infrastructure Experts" },
];

const benefits = [
    { icon: Users, title: "Access to Pre-Vetted Technical Talent" },
    { icon: Zap, title: "Faster Time-to-Hire" },
    { icon: DollarSign, title: "Cost-Effective Hiring Solutions" },
    { icon: Briefcase, title: "Industry-Specific Expertise" },
    { icon: Target, title: "Scalable Hiring Support" },
    { icon: ShieldAlert, title: "Reduced Hiring Risks" },
];

export default function ITTechnicalRecruitmentPage() {
    return (
        <main className="min-h-screen bg-[#020205] text-white pt-20">
            <section className="relative py-20 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent opacity-50" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <Badge variant="outline" className="mb-8 border-blue-500/30 bg-blue-500/10 text-blue-400 px-4 py-1 uppercase tracking-widest text-[10px] font-bold">
                            Tech Talent Solutions
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
                            IT & Technical <br />
                            <span className="text-gradient">Recruitment</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                            Hire the right talent faster, smarter, and with precision.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                                <Link href="/contact">Build Your Tech Team <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>

                        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto border-blue-500/20 bg-blue-900/5 text-left">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">Expertise Meets Innovation</h2>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        At AdmirerX, we specialize in delivering end-to-end IT & Technical Recruitment solutions that help businesses hire the right talent faster, smarter, and with precision.
                                    </p>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        Our recruitment process combines industry expertise, advanced screening tools, and data-driven hiring strategies to identify professionals who not only meet technical requirements but also align with your company’s culture and long-term goals.
                                    </p>
                                    <p className="text-white/60 leading-relaxed">
                                        From startups to enterprises, we help organizations build strong, scalable tech teams without the hiring complexity.
                                    </p>
                                </div>
                                <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 text-center">
                                        <Code2 className="w-16 h-16 text-blue-500 opacity-80" />
                                        <div>
                                            <div className="text-2xl font-bold mb-2">Technical Excellence</div>
                                            <div className="text-white/50 text-sm">Identifying the top 1% of tech talent</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>

            <section className="py-20 border-y border-white/5 bg-black/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Our Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">What We <span className="text-gradient">Offer</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            Our IT & Technical Recruitment services cover a wide range of roles and technologies.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {offerings.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="glass-card p-6 flex items-center gap-4 group hover:border-blue-500/30 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-5 h-5 text-blue-400" />
                                </div>
                                <h3 className="text-sm font-bold leading-tight">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-white/50 text-sm font-medium">
                            We support permanent hiring, contract staffing, and remote workforce solutions tailored to your business needs.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">Benefits of <br /><span className="text-gradient">IT & Technical Recruitment</span></h2>
                            <div className="grid gap-4">
                                {benefits.map((benefit) => (
                                    <div key={benefit.title} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                                        <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                                        <span className="font-bold text-sm md:text-base">{benefit.title}</span>
                                    </div>
                                ))}
                                {/* Additional benefits matching text */}
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                                    <span className="font-bold text-sm md:text-base">Flexible Hiring Models</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                                    <span className="font-bold text-sm md:text-base">End-to-End Recruitment Management</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                                    <span className="font-bold text-sm md:text-base">Data-Driven Hiring Decisions</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">Why Choose <span className="text-gradient">AdmirerX?</span></h2>
                            <div className="space-y-6">
                                <div className="glass-card p-6">
                                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                                        <Users className="w-5 h-5 text-blue-400" /> Strong Network
                                    </h3>
                                    <p className="text-white/50 text-sm">Access to a vast network of pre-screened IT & technical professionals ready to join your team.</p>
                                </div>
                                <div className="glass-card p-6">
                                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                                        <Search className="w-5 h-5 text-blue-400" /> AI-Assisted Screening
                                    </h3>
                                    <p className="text-white/50 text-sm">Advanced candidate matching technology to ensure the perfect fit for technical requirements and culture.</p>
                                </div>
                                <div className="glass-card p-6">
                                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                                        <MessageSquare className="w-5 h-5 text-blue-400" /> Transparent Communication
                                    </h3>
                                    <p className="text-white/50 text-sm">Clear reporting and dedicated account management throughout the hiring process.</p>
                                </div>
                                <div className="glass-card p-6">
                                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                                        <Target className="w-5 h-5 text-blue-400" /> Customized Strategies
                                    </h3>
                                    <p className="text-white/50 text-sm">Proven success across multiple industries with recruitment strategies tailored to your specific needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-12 md:p-20 text-center relative overflow-hidden group border-blue-500/20"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Let’s Build Your Tech Team</h2>
                            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 font-medium">
                                Whether you need niche experts or a full development squad, we have the talent you need.
                            </p>
                            <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                <Link href="/contact">Start Hiring Today <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
