"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Bot,
    MessageSquare,
    Zap,
    Headphones,
    Globe,
    Mic,
    BarChart,
    Link as LinkIcon,
    Settings,
    ArrowRight,
    Clock,
    Sparkles,
    Users
} from "lucide-react";

const benefits = [
    {
        icon: Clock,
        title: "24/7 Intelligent Customer Support",
        description: "Engage customers anytime without downtime or delays."
    },
    {
        icon: MessageSquare,
        title: "Human-Like Conversations at Scale",
        description: "AI-driven responses feel natural, contextual, and personalized."
    },
    {
        icon: Target,
        title: "Faster Lead Qualification & Conversion",
        description: "Instantly capture, qualify, and route leads to the right teams."
    },
    {
        icon: Zap,
        title: "Reduced Operational & Support Costs",
        description: "Automate repetitive queries and free up human agents for high-value tasks."
    },
    {
        icon: Globe,
        title: "Seamless Omnichannel Presence",
        description: "Deploy across websites, WhatsApp, apps, IVR, and voice calls."
    },
    {
        icon: Mic,
        title: "Smart Voice Automation",
        description: "Handle inbound and outbound calls with AI-powered voice agents that listen, understand, and respond."
    },
    {
        icon: BarChart,
        title: "Real-Time Analytics & Insights",
        description: "Track conversations, intent trends, customer sentiment, and performance metrics."
    },
    {
        icon: LinkIcon,
        title: "CRM & System Integration",
        description: "Sync data with CRM, helpdesk, and internal tools for unified operations."
    },
    {
        icon: Settings,
        title: "Scalable & Customizable Solutions",
        description: "Easily adapt workflows, scripts, and languages as your business grows."
    },
];

// Import Target locally
import { Target } from "lucide-react";

export default function AIChatbotsPage() {
    return (
        <main className="min-h-screen bg-[#020205] text-white">
            <section className="relative py-20 md:py-24 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
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
                            Intelligent Conversations
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
                            AI Chatbots & Voice Agents <br />
                            <span className="text-gradient">by AdmirerX</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                            Transform how businesses communicate with customers instantly, intelligently, and at scale.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                                <Link href="/contact">Deploy AI Agents <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>

                        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto border-blue-500/20 bg-blue-900/5 text-left">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">Beyond Simple Responses</h2>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        At AdmirerX, our AI Chatbots and Voice Agents are built to transform how businesses communicate with customers instantly, intelligently, and at scale. Our AI-powered conversational agents engage customers across websites, apps, messaging platforms, and voice channels.
                                    </p>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        These systems understand user intent, respond in real time, and continuously improve with every interaction. Whether it's answering customer queries, qualifying leads, or providing support, AdmirerX AI delivers human-like conversations without limitations.
                                    </p>
                                    <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
                                        <p className="font-medium text-blue-200">
                                            "They operate 24/7, ensure consistent communication, and integrate seamlessly with your existing CRM, call center, and business systems."
                                        </p>
                                    </div>
                                </div>
                                <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 text-center">
                                        <Bot className="w-16 h-16 text-blue-500 opacity-80" />
                                        <div>
                                            <div className="text-2xl font-bold mb-2">Always On</div>
                                            <div className="text-white/50 text-sm">24/7 Intelligent Automation</div>
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
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Key Advantages</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Benefits of <span className="text-gradient">AI Agents</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            Reduce costs and improve experience without compromising personalization.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="glass-card p-6 flex flex-col h-full hover:border-blue-500/30 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <benefit.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-lg font-bold mb-3 font-display leading-tight">{benefit.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{benefit.description}</p>
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
                            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Automate Conversations Today</h2>
                            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 font-medium">
                                By automating conversations, businesses reduce response times, lower support costs, and deliver a superior customer experience.
                            </p>
                            <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                <Link href="/contact">Get Started <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
