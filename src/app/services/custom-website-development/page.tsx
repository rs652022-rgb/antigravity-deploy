"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Globe,
    Zap,
    Smartphone,
    Search,
    Layers,
    ShieldCheck,
    MousePointerClick,
    Plug,
    Lock,
    ArrowRight,
    Code,
    LayoutTemplate
} from "lucide-react";

const benefits = [
    {
        icon: LayoutTemplate,
        title: "Tailored to Your Business Needs",
        description: "Fully customized design and functionality built specifically for your goals."
    },
    {
        icon: Zap,
        title: "High Performance & Speed Optimized",
        description: "Fast-loading websites for better user experience and higher search rankings."
    },
    {
        icon: Smartphone,
        title: "Responsive Across All Devices",
        description: "Seamless experience on desktop, tablet, and mobile devices."
    },
    {
        icon: Search,
        title: "SEO-Ready Architecture",
        description: "Clean code and optimized structure to improve visibility on search engines."
    },
    {
        icon: Layers,
        title: "Scalable & Future-Proof Solutions",
        description: "Built to grow with your business and adapt to future requirements."
    },
    {
        icon: ShieldCheck,
        title: "Enhanced Security & Reliability",
        description: "Secure development practices to protect your data and users."
    },
    {
        icon: MousePointerClick,
        title: "Better User Experience & Engagement",
        description: "Intuitive UI/UX that keeps users engaged and drives conversions."
    },
    {
        icon: Plug,
        title: "Easy Integration with Tools & APIs",
        description: "Smooth integration with CRMs, payment gateways, analytics, and third-party services."
    },
    {
        icon: Lock,
        title: "Complete Control & Ownership",
        description: "Full ownership of your website with no dependency on restrictive templates or platforms."
    }
];

export default function CustomWebsiteDevelopmentPage() {
    return (
        <main className="min-h-screen bg-[#020205] text-white">
            <section className="relative py-20 md:py-24 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop"
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
                            Digital Excellence
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
                            Our Custom Website Development <br />
                            <span className="text-gradient">Services</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                            Fast, scalable, secure, and designed to convert.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                                <Link href="/contact">Build Your Vision <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>

                        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto border-blue-500/20 bg-blue-900/5 text-left">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">Beyond Generic Templates</h2>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        At AdmirerX, we build custom websites that are fast, scalable, secure, and designed to convert. Our Custom Website Development services focus on creating tailor-made digital experiences that align with your business goals, not generic templates.
                                    </p>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        We design and develop websites from the ground up using modern technologies, clean architecture, and user-first design principles. Every website is built to be responsive, performance-optimized, SEO-ready, and fully customized to your brand identity.
                                    </p>
                                    <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
                                        <p className="font-medium text-blue-200">
                                            "We combine strategy, design, and engineering to deliver websites that don’t just look good but perform exceptionally."
                                        </p>
                                    </div>
                                </div>
                                <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 text-center">
                                        <Code className="w-16 h-16 text-blue-500 opacity-80" />
                                        <div>
                                            <div className="text-2xl font-bold mb-2">Clean Architecture</div>
                                            <div className="text-white/50 text-sm">Robust backend & future-ready scalability</div>
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
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Our Promise</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Benefits of <span className="text-gradient">Custom Development</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            Reliable, secure, and high-impact digital products.
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
                                <h3 className="text-lg font-bold mb-4 font-display leading-tight">{benefit.title}</h3>
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
                            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Ready to Upgrade Your Digital Presence?</h2>
                            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 font-medium">
                                Whether you’re launching a new brand or building a custom web solution, we deliver results.
                            </p>
                            <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                <Link href="/contact">Start Your Project <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
