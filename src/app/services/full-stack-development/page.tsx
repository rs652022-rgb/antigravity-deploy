"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Layers,
    Zap,
    Layout,
    Globe,
    Database,
    Smartphone,
    Server,
    Code2,
    Lock,
    ArrowRight,
    ShieldCheck,
    CheckCircle,
    Settings,
    Cpu,
    BarChart,
    Target
} from "lucide-react";

const buildItems = [
    { icon: Globe, title: "Custom Web Applications" },
    { icon: Database, title: "Enterprise Software Solutions" },
    { icon: Layers, title: "SaaS Platforms" },
    { icon: Smartphone, title: "Mobile-Responsive Web Apps" },
    { icon: Code2, title: "API & Third-Party Integrations" },
    { icon: Server, title: "Cloud-Based Applications" },
    { icon: Layout, title: "Admin Panels & Dashboards" },
];

const benefits = [
    {
        icon: Layers,
        title: "End-to-End Development Expertise",
        description: "One team handling front-end, back-end, databases, and integrations seamlessly."
    },
    {
        icon: Zap,
        title: "Faster Time to Market",
        description: "Streamlined development process reduces delays and accelerates product launch."
    },
    {
        icon: BarChart,
        title: "Scalable & Future-Ready Architecture",
        description: "Applications designed to grow with increasing users and business needs."
    },
    {
        icon: CheckCircle,
        title: "Cost-Effective Development",
        description: "Eliminates the need for multiple vendors, reducing development and maintenance costs."
    },
    {
        icon: ShieldCheck,
        title: "High Performance & Security",
        description: "Optimized code, secure APIs, and best practices to protect your data and users."
    },
    {
        icon: Smartphone,
        title: "Seamless User Experience",
        description: "Smooth, responsive, and intuitive interfaces across all devices."
    },
    {
        icon: Settings,
        title: "Easy Maintenance & Upgrades",
        description: "Clean architecture ensures faster updates and long-term sustainability."
    },
    {
        icon: Code2,
        title: "Technology Flexibility",
        description: "Built using modern stacks tailored to your project requirements."
    },
    {
        icon: Target,
        title: "Business-Driven Solutions",
        description: "Development aligned with your goals, workflows, and customer expectations."
    }
];




export default function FullStackDevelopmentPage() {
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
                            Complete Solutions
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
                            Full-Stack Development <br />
                            <span className="text-gradient">by AdmirerX</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                            Turn ideas into scalable, high-performance digital products.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                                <Link href="/contact">Build Your Application <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>

                        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto border-blue-500/20 bg-blue-900/5 text-left">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">End-to-End Excellence</h2>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        At AdmirerX, we deliver end-to-end Full-Stack Development solutions that turn ideas into scalable, high-performance digital products. Our services cover everything from intuitive front-end interfaces to robust back-end systems and secure databases.
                                    </p>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        With expertise across modern frameworks, cloud technologies, and APIs, our team handles the complete development lifecycle from planning and design to deployment and ongoing optimization.
                                    </p>
                                    <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
                                        <p className="font-medium text-blue-200">
                                            "We build applications that are fast, scalable, and future-ready, ensuring seamless performance across web and mobile platforms."
                                        </p>
                                    </div>
                                </div>
                                <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 text-center">
                                        <Layers className="w-16 h-16 text-blue-500 opacity-80" />
                                        <div>
                                            <div className="text-2xl font-bold mb-2">Integrated Systems</div>
                                            <div className="text-white/50 text-sm">Robust Front-end & Back-end architecture</div>
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
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Our Portfolio</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">What We <span className="text-gradient">Build</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            From web apps to enterprise software, we cover it all.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {buildItems.map((item, idx) => (
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
                                <h3 className="text-base font-bold leading-tight">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Benefits of <span className="text-gradient">Full-Stack Development</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            Reliable, secure, and user-centric digital experiences.
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
                                    <Code2 className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Experienced Full-Stack Developers</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Agile & Transparent Development Process</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Scalable and Secure Codebase</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Settings className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Ongoing Support & Optimization</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Target className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Business-Focused Technical Solutions</span>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden bg-blue-900/10 border-blue-500/20">
                            <h3 className="text-2xl font-bold font-display mb-4">Future-Proof Technology</h3>
                            <p className="text-white/60 mb-8">
                                Whether you’re a startup launching a product or an enterprise modernizing systems, AdmirerX ensures technology that grows with your business.
                            </p>
                            <Button asChild size="lg" className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white h-12 font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                <Link href="/contact">Start Your Project</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
