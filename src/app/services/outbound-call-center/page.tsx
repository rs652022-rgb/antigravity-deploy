"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    PhoneCall,
    Zap,
    BarChart3,
    ShieldCheck,
    ArrowRight,
    TrendingUp,
    Users,
    Target,
    Calendar,
    Headphones,
} from "lucide-react";

const techFeatures = [
    {
        icon: PhoneCall,
        title: "Intelligent Auto & Predictive Dialers",
        description: "Maximize agent talk time and connect rates with smart dialing algorithms."
    },
    {
        icon: Headphones,
        title: "Real-Time Monitoring",
        description: "Live call monitoring and quality assurance tools for immediate feedback."
    },
    {
        icon: ShieldCheck,
        title: "Secure Call Recording",
        description: "Full compliance with recording standards and advanced analytics."
    },
    {
        icon: Users,
        title: "CRM Integration",
        description: "Seamless synchronization with your CRM for complete customer context."
    },
    {
        icon: BarChart3,
        title: "Performance Dashboards",
        description: "Complete visibility into campaign performance and agent productivity."
    }
];

const benefits = [
    {
        icon: Calendar,
        title: "Smart Scheduling",
        description: "Connect on the customer&apos;s schedule with planned and intelligent outreach."
    },
    {
        icon: Target,
        title: "Targeted Campaigns",
        description: "Boost acquisition through precision-targeted sales and lead campaigns."
    },
    {
        icon: Users,
        title: "Relationship Driven",
        description: "Strengthen loyalty with timely follow-ups and personalized calls."
    },
    {
        icon: Zap,
        title: "Increased Productivity",
        description: "Use automation to eliminate idle time and focus on conversations."
    },
    {
        icon: TrendingUp,
        title: "Sales Conversions",
        description: "Drive lead generation with data-backed strategies and insights."
    },
    {
        icon: PhoneCall,
        title: "Scheduled Callbacks",
        description: "Enable smoother experiences with automated callback scheduling."
    }
];

export default function OutboundCallCenterPage() {
    return (
        <main className="min-h-screen bg-[#020205] text-white">
            <section className="relative py-20 md:py-24 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2070&auto=format&fit=crop"
                        alt="Background"
                        fill
                        className="object-cover opacity-40"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent opacity-50" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <Badge variant="outline" className="mb-8 border-blue-500/30 bg-blue-500/10 text-blue-400 px-4 py-1 uppercase tracking-widest text-[10px] font-bold">
                            Proactive Engagement
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
                            Outbound Call Center <br />
                            <span className="text-gradient">Solutions</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                            Proactive Conversations That Drive Growth
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                                <Link href="/contact">Start Your Campaign <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>

                        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto border-blue-500/20 bg-blue-900/5 text-left">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">Strategic Outbound Engagement</h2>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        At AdmirerX, our Outbound Call Center solutions are designed to help businesses proactively connect with customers, prospects, and partners at the right time, with the right message.
                                    </p>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        Instead of waiting for customers to reach you, we help you take the first step — building relationships, creating opportunities, and accelerating revenue through sales outreach, lead generation, and surveys.
                                    </p>
                                    <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
                                        <p className="font-medium text-blue-200">
                                            &quot;Powered by AI-enabled dialing, smart workflows, and CRM-driven insights, our outbound operations ensure every call is purposeful.&quot;
                                        </p>
                                    </div>
                                </div>
                                <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 text-center">
                                        <Target className="w-16 h-16 text-blue-500 opacity-80" />
                                        <div>
                                            <div className="text-2xl font-bold mb-2">Precision Targeting</div>
                                            <div className="text-white/50 text-sm">Reach the right people at the optimal time</div>
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
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Enterprise Tools</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Technology That <span className="text-gradient">Powers Performance</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            Built with enterprise-grade tools to maximize reach, efficiency, and results.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {techFeatures.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-8 group hover:border-blue-500/30 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-lg font-bold mb-4 font-display leading-tight">{item.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Benefits of <span className="text-gradient">AdmirerX</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            Drive meaningful conversations and measurable outcomes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="glass-card p-6 flex flex-col h-full hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                        <benefit.icon className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <h3 className="text-lg font-bold">{benefit.title}</h3>
                                </div>
                                <p className="text-white/50 text-sm leading-relaxed pl-14">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
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
                            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Why AdmirerX?</h2>
                            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 font-medium">
                                Because outbound calling shouldn’t feel like cold outreach — <br />
                                <span className="text-gradient">it should feel like smart engagement.</span>
                            </p>
                            <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                <Link href="/contact">Launch Your Outbound Strategy <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
