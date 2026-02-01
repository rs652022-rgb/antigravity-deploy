"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Cloud,
    ShieldCheck,
    Zap,
    TrendingDown,
    Bot,
    MessageSquare,
    ArrowRight,
    Headphones,
    CheckCircle,
} from "lucide-react";

const features = [
    {
        icon: MessageSquare,
        title: "Omnichannel Engagement",
        description: "Manage customer conversations across voice, chat, email, and social media from one intelligent platform."
    },
    {
        icon: ShieldCheck,
        title: "Enterprise Security",
        description: "Bank-grade security and reliability standards ensuring your customer data is always protected."
    },
    {
        icon: Zap,
        title: "Fast Deployment",
        description: "Get up and running in days, not months. Scale agents up or down instantly based on demand."
    },
    {
        icon: TrendingDown,
        title: "Lower Costs",
        description: "Eliminate expensive hardware and maintenance costs with our cloud-first infrastructure."
    },
    {
        icon: Bot,
        title: "AI-Ready",
        description: "Seamlessly integrate AI agents and automated workflows to handle routine inquiries."
    },
    {
        icon: Headphones,
        title: "Agent Experience",
        description: "Empower your team with intuitive tools and unified customer context for effortless service."
    }
];

export default function CloudContactCenterPage() {
    return (
        <main className="min-h-screen bg-[#020205] text-white">
            <section className="relative py-20 md:py-24 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop"
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
                            Cloud Solutions
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-8">
                            AdmirerX <br />
                            <span className="text-gradient">Cloud Contact Center</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                            Deliver exceptional customer experiences with the power of cloud-driven communication.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                                <Link href="/contact">Get Started <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>

                        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto border-blue-500/20 bg-blue-900/5">
                            <div className="grid md:grid-cols-2 gap-12 items-center text-left">
                                <div>
                                    <h3 className="text-2xl font-bold font-display mb-4">Unified & Scalable</h3>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        The AdmirerX Cloud Contact Center enables businesses to manage customer conversations across voice, chat, email, and social media all from one intelligent, secure, and scalable platform.
                                    </p>
                                    <p className="text-white/60 leading-relaxed">
                                        Built for modern, fast-growing organizations, our cloud-first solution eliminates infrastructure complexity while giving your teams the flexibility to support customers from anywhere.
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-50" />
                                    <div className="relative bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                        <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-4">
                                            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                                                <Cloud className="w-5 h-5 text-green-400" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold">System Status</div>
                                                <div className="text-xs text-green-400">All Systems Operational</div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-white/40">Voice Uptime</span>
                                                <span className="font-bold">99.99%</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-white/40">Active Agents</span>
                                                <span className="font-bold">Ready</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-white/40">Security</span>
                                                <span className="font-bold text-blue-400">Encrypted</span>
                                            </div>
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
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Key Benefits</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Why <span className="text-gradient">AdmirerX?</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            With smart automation, real-time insights, and seamless integrations, we help you create meaningful customer interactions that drive loyalty and growth.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-8 group hover:border-blue-500/30 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-display">{feature.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
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
                            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">AdmirerX</h2>
                            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-medium">
                                Powering Smarter Conversations. <br />
                                <span className="text-gradient">Delivering Better Experiences.</span>
                            </p>
                            <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                <Link href="/contact">Transform Your Contact Center <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
