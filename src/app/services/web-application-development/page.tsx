"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Code,
    Layout,
    Server,
    Cloud,
    Bot,
    Settings,
    Target,
    Zap,
    ShieldCheck,
    MousePointerClick,
    Link as LinkIcon,
    BarChart,
    DollarSign,
    Users,
    MessageSquare,
    Lock,
    ArrowRight,
    Briefcase,
    CheckCircle
} from "lucide-react";

const offerings = [
    { icon: Code, title: "Custom Web Application Development", description: "Tailor-made web apps designed specifically for your workflows and business requirements." },
    { icon: Layout, title: "UI/UX Design & Frontend Development", description: "Intuitive, responsive, and visually engaging interfaces that enhance user experience." },
    { icon: Server, title: "Backend & API Development", description: "Secure, scalable server-side architecture with seamless third-party integrations." },
    { icon: Cloud, title: "Cloud-Based & Scalable Solutions", description: "Applications built to scale effortlessly using modern cloud infrastructure." },
    { icon: Bot, title: "AI & Automation Integration", description: "Smart features powered by AI to automate processes and improve efficiency." },
    { icon: Settings, title: "Testing, Deployment & Maintenance", description: "End-to-end support including quality testing, launch, updates, and optimization." },
];

const benefits = [
    { icon: Target, title: "Customized Solutions for Your Business" },
    { icon: Zap, title: "Improved Operational Efficiency" },
    { icon: Cloud, title: "Scalable & Future-Ready Architecture" },
    { icon: ShieldCheck, title: "Secure & Reliable Systems" },
    { icon: MousePointerClick, title: "Enhanced User Experience" },
    { icon: LinkIcon, title: "Seamless Integration" },
    { icon: BarChart, title: "Data-Driven Insights" },
    { icon: DollarSign, title: "Cost-Effective Long-Term Solution" },
];

export default function WebApplicationDevelopmentPage() {
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
                            Innovative Solutions
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
                            Web Application <br />
                            <span className="text-gradient">Development</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                            Build powerful, scalable, and secure web applications that help businesses grow.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                                <Link href="/contact">Build Your Web App <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>

                        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto border-blue-500/20 bg-blue-900/5 text-left">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">Automate & Innovate</h2>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        At AdmirerX, we build powerful, scalable, and secure web applications that help businesses grow, automate, and innovate in the digital era.
                                    </p>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        Our Web Application Development services focus on creating custom-built solutions tailored to your business goals. From idea validation to deployment and ongoing support, we design and develop high-performance web applications that deliver seamless user experiences.
                                    </p>
                                    <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
                                        <p className="font-medium text-blue-200">
                                            "We leverage modern frameworks, cloud technologies, and AI-driven capabilities to build applications that are fast, responsive, and future-ready."
                                        </p>
                                    </div>
                                </div>
                                <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 text-center">
                                        <Code className="w-16 h-16 text-blue-500 opacity-80" />
                                        <div>
                                            <div className="text-2xl font-bold mb-2">Custom Built</div>
                                            <div className="text-white/50 text-sm">Tailored for performance & scalability</div>
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
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">End-to-End Development</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">What We <span className="text-gradient">Offer</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            From custom development to AI integration, we cover it all.
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
                                className="glass-card p-6 flex flex-col items-start gap-4 group hover:border-blue-500/30 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <p className="text-white/50 text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Benefits of <span className="text-gradient">Web App Development</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            Drive efficiency and growth with custom solutions.
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
                                className="glass-card p-6 flex items-center gap-3 hover:bg-white/5 transition-colors"
                            >
                                <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                                <h3 className="text-sm font-bold">{benefit.title}</h3>
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
                                    <Users className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Experienced team of developers & architects</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MessageSquare className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Agile development process with transparent communication</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Lock className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Focus on performance, scalability, and security</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Briefcase className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Business-first approach, not just code-first</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Settings className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Dedicated post-launch support and optimization</span>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden bg-blue-900/10 border-blue-500/20">
                            <h3 className="text-2xl font-bold font-display mb-4">Build Smarter. Scale Faster.</h3>
                            <p className="text-white/60 mb-8">
                                Transform your ideas into powerful web applications with AdmirerX. Let’s build solutions that work as hard as your business does.
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
