"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    PhoneCall,
    Mail,
    MessageSquare,
    MessageCircle,
    Zap,
    BarChart3,
    Globe,
    ShieldCheck,
    Headphones,
    CheckCircle,
    ArrowRight,
    TrendingUp,
    Users,
} from "lucide-react";

const channels = [
    { icon: PhoneCall, name: "Voice Calls" },
    { icon: Mail, name: "Email Support" },
    { icon: MessageSquare, name: "Live Chat" },
    { icon: MessageCircle, name: "Digital Messaging Channels" },
];

const whyChoose = [
    {
        icon: Zap,
        title: "AI-Powered Efficiency",
        description: "Automated workflows, smart routing, and intelligent dialing improve agent productivity and reduce response times."
    },
    {
        icon: BarChart3,
        title: "Real-Time Business Intelligence",
        description: "Track performance, customer trends, and agent productivity with live dashboards and advanced analytics."
    },
    {
        icon: Globe,
        title: "Scalable & Future-Ready",
        description: "Cloud-based infrastructure designed to scale with your business growth and seasonal demand spikes."
    },
    {
        icon: ShieldCheck,
        title: "Enterprise-Grade Security",
        description: "Secure call recording, compliance-ready infrastructure, and data protection protocols."
    }
];

const features = [
    "Intelligent Auto Dialer & Campaign Optimization",
    "Live Monitoring & Supervisor Call Barge-In",
    "Real-Time Reporting & Performance Analytics",
    "Secure Call Recording & Compliance Management",
    "Smart Call Routing & Agent Extensions",
    "Instant Call Transfer & Escalation Management",
    "Remote & Work-From-Home Agent Enablement",
    "High Availability Cloud Infrastructure"
];

const impacts = [
    { icon: Users, label: "Higher Customer Satisfaction Scores" },
    { icon: TrendingUp, label: "Reduced Cost Per Customer Interaction" },
    { icon: Zap, label: "Faster Query Resolution" },
    { icon: BarChart3, label: "Increased Sales Conversion Rates" },
    { icon: CheckCircle, label: "Better Customer Retention & Loyalty" },
    { icon: MessageSquare, label: "Actionable Customer Insights" },
];

export default function BlendedContactCenterPage() {
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
                            Enterprise Solutions
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
                            Enterprise Blended <br />
                            <span className="text-gradient">Contact Center Solutions</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                            Smarter Conversations. Faster Resolutions. Higher Customer Loyalty.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                                <Link href="/contact">Transform Your CX <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>

                        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto border-blue-500/20 bg-blue-900/5 text-left">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">One Platform. <br />Complete Customer Engagement.</h2>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        At AdmirerX, we help enterprises transform customer interactions into measurable business outcomes. Our Blended Contact Center combines inbound customer support and outbound engagement into one powerful, AI-enabled communication platform.
                                    </p>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        Manage customer support, sales outreach, retention campaigns, and proactive engagement from a single unified system.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {["Handle queries instantly", "Run outbound campaigns", "Improve resolution rates", "Omnichannel experiences"].map((item) => (
                                            <div key={item} className="flex items-center gap-2 text-sm font-bold text-white/80">
                                                <CheckCircle className="w-4 h-4 text-blue-500" /> {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-lg font-bold mb-6">Supported Channels</h3>
                                    <div className="grid grid-cols-1 gap-4">
                                        {channels.map((channel) => (
                                            <div key={channel.name} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                                    <channel.icon className="w-5 h-5 text-blue-400" />
                                                </div>
                                                <span className="font-bold">{channel.name}</span>
                                            </div>
                                        ))}
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
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Our Advantage</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Why Enterprises <span className="text-gradient">Choose AdmirerX</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyChoose.map((item, idx) => (
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
                                <h3 className="text-lg font-bold mb-4 font-display">{item.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">Key Features <span className="text-gradient">That Drive Results</span></h2>
                            <div className="space-y-4">
                                {features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                        <span className="font-medium text-white/80">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">Proven <span className="text-gradient">Business Impact</span></h2>
                            <div className="grid grid-cols-1 gap-6">
                                {impacts.map((impact) => (
                                    <div key={impact.label} className="glass-card p-6 flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                                            <impact.icon className="w-5 h-5 text-green-400" />
                                        </div>
                                        <span className="font-bold text-lg">{impact.label}</span>
                                    </div>
                                ))}
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
                            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Built for Growing & Enterprise Businesses</h2>
                            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-10 font-medium">
                                Whether you’re scaling customer support, expanding sales outreach, or improving customer experience strategy AdmirerX provides the technology, talent, and intelligence to help you grow faster.
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-12">
                                Ready to Transform Your Customer Experience?
                            </h3>
                            <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                <Link href="/contact">Partner With AdmirerX <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
