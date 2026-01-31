"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Cpu,
    Zap,
    Clock,
    Layout,
    MessageSquare,
    ShieldCheck,
    TrendingUp,
    Settings,
    Eye,
    BarChart,
    Bot,
    Brain,
    ArrowRight,
    Database,
    Lock
} from "lucide-react";

// Import Target locally for benefits section
import { Target } from "lucide-react";

const integrations = [
    { icon: Bot, title: "AI-powered chatbots & virtual assistants" },
    { icon: Brain, title: "Machine learning models for predictions & recommendations" },
    { icon: MessageSquare, title: "NLP systems for text, voice, and sentiment analysis" },
    { icon: BarChart, title: "AI-driven analytics & business intelligence" },
    { icon: Eye, title: "Computer vision solutions" },
    { icon: Database, title: "AI APIs into web, mobile, CRM, ERP & cloud platforms" },
];

const benefits = [
    {
        icon: Zap,
        title: "Smarter Business Operations",
        description: "Automate repetitive tasks and optimize workflows using AI-driven intelligence."
    },
    {
        icon: Clock,
        title: "Faster Decision-Making",
        description: "Leverage real-time insights, predictions, and data-backed recommendations."
    },
    {
        icon: TrendingUp,
        title: "Cost Efficiency & Scalability",
        description: "Reduce manual effort while scaling operations without increasing overhead."
    },
    {
        icon: Layout,
        title: "Seamless System Compatibility",
        description: "Integrate AI into your existing infrastructure without complete rebuilds."
    },
    {
        icon: MessageSquare,
        title: "Enhanced Customer Experience",
        description: "Deliver personalized, responsive, and intelligent customer interactions."
    },
    {
        icon: Target,
        title: "Data-Driven Accuracy",
        description: "Improve outcomes with AI models trained on reliable and structured data."
    },
    {
        icon: ShieldCheck,
        title: "Enterprise-Grade Security & Compliance",
        description: "Secure AI deployments with data privacy, access control, and compliance standards."
    },
    {
        icon: Database,
        title: "Future-Ready Architecture",
        description: "Build adaptable systems that evolve with advancing AI technologies."
    },
    {
        icon: Settings,
        title: "Full Control & Transparency",
        description: "Monitor, optimize, and manage AI performance with complete visibility."
    },
];

export default function AIIntegrationsPage() {
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
                            Seamless Intelligence
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
                            Our AI <br />
                            <span className="text-gradient">Integration</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                            Unlock real business value by embedding artificial intelligence into your existing systems.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                                <Link href="/contact">Integrate AI Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>

                        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto border-blue-500/20 bg-blue-900/5 text-left">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">Bridge the Gap</h2>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        At AdmirerX, our AI Integration Services help businesses seamlessly embed artificial intelligence into their existing systems, workflows, and digital products without disruption.
                                    </p>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        We bridge the gap between traditional software and intelligent automation by integrating AI models, APIs, and data-driven systems into your applications, CRMs, websites, mobile apps, and enterprise platforms.
                                    </p>
                                    <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
                                        <p className="font-medium text-blue-200">
                                            "From process automation to predictive intelligence, our solutions are designed to enhance efficiency, accuracy, and decision-making across your organization."
                                        </p>
                                    </div>
                                </div>
                                <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 text-center">
                                        <Cpu className="w-16 h-16 text-blue-500 opacity-80" />
                                        <div>
                                            <div className="text-2xl font-bold mb-2">Smart Systems</div>
                                            <div className="text-white/50 text-sm">Systems that don't just work, they think.</div>
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
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Capabilities</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">What We <span className="text-gradient">Integrate</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            Comprehensive AI capabilities for every business need.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {integrations.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="glass-card p-6 flex flex-col items-center text-center gap-4 group hover:border-blue-500/30 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Benefits of <span className="text-gradient">AI Integration</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            Enhance efficiency, accuracy, and decision-making.
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
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 shrink-0">
                                    <benefit.icon className="w-5 h-5 text-blue-400" />
                                </div>
                                <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Why Choose <span className="text-gradient">AdmirerX?</span></h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Brain className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Business-first AI strategy, not just technology</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Settings className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Custom-built solutions tailored to your goals</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Layout className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Expertise across web, mobile, cloud, and enterprise systems</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Scalable, secure, and performance-driven implementations</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <TrendingUp className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Ongoing optimization, support, and upgrades</span>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden bg-blue-900/10 border-blue-500/20">
                            <h3 className="text-2xl font-bold font-display mb-4">Ready to Integrate AI?</h3>
                            <p className="text-white/60 mb-8">
                                Transform your existing systems into intelligent, high-performing platforms with AdmirerX AI Integration Services.
                            </p>
                            <Button asChild size="lg" className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white h-12 font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                <Link href="/contact">Start Transformation</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
