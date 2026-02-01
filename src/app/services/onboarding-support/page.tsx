"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Users,
    FileCheck,
    UserPlus,
    Rocket,
    MessageSquare,
    Clock,
    ShieldCheck,
    Zap,
    Layout,
    Briefcase,
    Layers,
    CheckCircle,
    ArrowRight,
    Target,
    BarChart,
    Settings,
    Smile
} from "lucide-react";

const capabilities = [
    { icon: Users, title: "Employee Onboarding Coordination" },
    { icon: UserPlus, title: "Customer Onboarding & Activation" },
    { icon: Briefcase, title: "Partner & Vendor Onboarding" },
    { icon: FileCheck, title: "Document Collection & Verification" },
    { icon: Settings, title: "Account Setup & Access Management" },
    { icon: Target, title: "Training Scheduling & Tracking" },
    { icon: MessageSquare, title: "Multi-Channel Communication" },
    { icon: Clock, title: "SLA-Based Workflows" },
    { icon: BarChart, title: "Real-Time Status Reporting" },
];

const benefits = [
    {
        icon: Zap,
        title: "Faster Time-to-Productivity",
        description: "Accelerate readiness for new hires and customers with streamlined processes."
    },
    {
        icon: Layers,
        title: "Reduced Operational Burden",
        description: "Offload administrative tasks to focus on strategic initiatives."
    },
    {
        icon: CheckCircle,
        title: "Consistent & Professional Experience",
        description: "Ensure every stakeholder receives the same high-quality onboarding journey."
    },
    {
        icon: Smile,
        title: "Improved Retention & Engagement",
        description: "Create positive first impressions that foster long-term loyalty."
    },
    {
        icon: ShieldCheck,
        title: "Better Compliance & Documentation",
        description: "Maintain complete control over audits and regulatory requirements."
    },
    {
        icon: Rocket,
        title: "Scalable for Growing Businesses",
        description: "Easily handle volume spikes without compromising quality."
    },
    {
        icon: Layout,
        title: "Clear Visibility & Tracking",
        description: "Real-time dashboards to monitor progress and bottlenecks."
    },
    {
        icon: UserPlus,
        title: "Personalized Onboarding Journeys",
        description: "Tailor experiences to specific roles, segments, or partner types."
    },
];

const useCases = [
    "Startups scaling rapidly",
    "Enterprises hiring in bulk",
    "SaaS customer onboarding",
    "BPO and service-based businesses",
    "Channel partner and vendor onboarding"
];

export default function OnboardingSupportPage() {
    return (
        <main className="min-h-screen bg-[#020205] text-white">
            <section className="relative py-20 md:py-24 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop"
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
                            Seamless Transitions
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
                            Our Onboarding <br />
                            <span className="text-gradient">Support Service</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                            Ensure smooth, structured, and engaging experiences right from day one.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                                <Link href="/contact">Streamline Your Onboarding <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>

                        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto border-blue-500/20 bg-blue-900/5 text-left">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">A Strong Start Defines Success</h2>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        At AdmirerX, we understand that a strong start defines long-term success. Our Onboarding Support Services are designed to ensure smooth, structured, and engaging onboarding experiences for employees, customers, and partners right from day one.
                                    </p>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        We combine process-driven workflows, automation, and human support to simplify onboarding, reduce friction, and accelerate readiness.
                                    </p>
                                    <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
                                        <p className="font-medium text-blue-200">
                                            "From documentation and training coordination to system access and follow-ups, AdmirerX ensures nothing is missed."
                                        </p>
                                    </div>
                                </div>
                                <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 text-center">
                                        <Rocket className="w-16 h-16 text-blue-500 opacity-80" />
                                        <div>
                                            <div className="text-2xl font-bold mb-2">Accelerate Readiness</div>
                                            <div className="text-white/50 text-sm">Simplifying the journey from day zero</div>
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
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">End-to-End Assistance</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Our Onboarding <span className="text-gradient">Capabilities</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            A comprehensive suite of services to handle every aspect of the transition.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {capabilities.map((item, idx) => (
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
                    <div className="mt-16 glass-card p-8 border-blue-500/10 bg-blue-500/5">
                        <h3 className="text-2xl font-bold mb-4 font-display">What is Onboarding Support?</h3>
                        <p className="text-white/60 leading-relaxed mb-4">
                            Onboarding Support is a structured service that helps organizations guide new hires, customers, or partners through their initial journey with clarity and efficiency.
                        </p>
                        <p className="text-white/60 leading-relaxed">
                            AdmirerX’s onboarding support covers end-to-end assistance welcome communications, document collection, system setup, training coordination, task tracking, and ongoing support ensuring a seamless transition and faster productivity.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Benefits of <span className="text-gradient">Onboarding Services</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            Drive efficiency, compliance, and engagement from the start.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                <h3 className="text-base font-bold mb-3">{benefit.title}</h3>
                                <p className="text-white/50 text-xs leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">Why Choose <span className="text-gradient">AdmirerX?</span></h2>
                            <div className="space-y-6">
                                <div className="glass-card p-6 flex items-start gap-4">
                                    <Settings className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">Process-Driven Automation</h3>
                                        <p className="text-white/50 text-sm">Efficient workflows enabled by technology.</p>
                                    </div>
                                </div>
                                <div className="glass-card p-6 flex items-start gap-4">
                                    <Users className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">Experienced Support Teams</h3>
                                        <p className="text-white/50 text-sm">Industry expertise ensuring a human touch.</p>
                                    </div>
                                </div>
                                <div className="glass-card p-6 flex items-start gap-4">
                                    <ShieldCheck className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">Secure & Compliant</h3>
                                        <p className="text-white/50 text-sm">Secure handling of sensitive information.</p>
                                    </div>
                                </div>
                                <div className="glass-card p-6 flex items-start gap-4">
                                    <Layout className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">Seamless Integration</h3>
                                        <p className="text-white/50 text-sm">Works perfectly with your existing systems.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="glass-card p-8 border-blue-500/20 bg-gradient-to-b from-blue-900/10 to-transparent">
                                <h3 className="text-2xl font-bold font-display mb-6">Use Cases</h3>
                                <div className="space-y-4">
                                    {useCases.map((useCase) => (
                                        <div key={useCase} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                            <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                                            <span className="font-medium text-sm">{useCase}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                                    <p className="text-lg font-medium mb-4">Transform your onboarding experience into a competitive advantage.</p>
                                    <Button asChild size="lg" className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white h-12 font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                        <Link href="/contact">Get Started with AdmirerX</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
