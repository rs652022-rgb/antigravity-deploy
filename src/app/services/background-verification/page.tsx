"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    UserCheck,
    MapPin,
    Briefcase,
    GraduationCap,
    Gavel,
    MessageSquare,
    Database,
    ShieldCheck,
    Zap,
    Scale,
    FileText,
    Users,
    Lock,
    Settings,
    Star,
    Clock,
    Cpu,
    Eye,
    Headphones,
    DollarSign,
    ArrowRight
} from "lucide-react";

const coverage = [
    { icon: UserCheck, title: "Identity Verification" },
    { icon: MapPin, title: "Address Verification" },
    { icon: Briefcase, title: "Employment History Verification" },
    { icon: GraduationCap, title: "Education & Certification Verification" },
    { icon: Gavel, title: "Criminal Record Check" },
    { icon: MessageSquare, title: "Reference Verification" },
    { icon: Database, title: "Database & Compliance Checks" },
    { icon: Settings, title: "Customizable based on your hiring needs" },
];

const benefits = [
    {
        icon: ShieldCheck,
        title: "Confident & Risk-Free Hiring",
        description: "Validate candidate information before onboarding to prevent fraud and misrepresentation."
    },
    {
        icon: Zap,
        title: "Faster Hiring Turnaround",
        description: "Automated verification workflows significantly reduce verification timelines."
    },
    {
        icon: Scale,
        title: "Regulatory & Compliance Ready",
        description: "Stay compliant with industry standards and legal requirements."
    },
    {
        icon: FileText,
        title: "Accurate & Trusted Reports",
        description: "Get verified, structured, and easy-to-understand background reports."
    },
    {
        icon: Users,
        title: "Reduced Attrition & Hiring Errors",
        description: "Hire reliable candidates and minimize costly rehiring cycles."
    },
    {
        icon: Star,
        title: "Better Employer Brand",
        description: "Build trust with clients, partners, and employees through responsible hiring practices."
    },
    {
        icon: Lock,
        title: "Data Security & Confidentiality",
        description: "Secure handling of sensitive candidate information with strict privacy controls."
    },
    {
        icon: Settings,
        title: "Customizable Verification Packages",
        description: "Choose only the checks you need based on role, industry, or risk level."
    }
];

export default function BackgroundVerificationPage() {
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
                            Trusted Verification
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
                            Background Verification <br />
                            <span className="text-gradient">Services</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                            Make confident hiring decisions with accuracy, speed, and compliance.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                                <Link href="/contact">Verify Your Candidates <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>

                        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto border-blue-500/20 bg-blue-900/5 text-left">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">Validate with Confidence</h2>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        At AdmirerX, our Background Verification (BGV) services help businesses make confident hiring decisions by verifying candidate information with accuracy, speed, and compliance.
                                    </p>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        Using secure digital workflows and trusted data sources, AdmirerX ensures every verification is thorough, transparent, and reliable. Our verification solutions are designed to reduce hiring risks while accelerating recruitment timelines.
                                    </p>
                                    <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
                                        <p className="font-medium text-blue-200">
                                            "By combining automation with expert review, we deliver precise verification reports that protect your organization from fraud and compliance issues."
                                        </p>
                                    </div>
                                </div>
                                <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 text-center">
                                        <ShieldCheck className="w-16 h-16 text-blue-500 opacity-80" />
                                        <div>
                                            <div className="text-2xl font-bold mb-2">Secure & Compliant</div>
                                            <div className="text-white/50 text-sm">Protecting your organization from hiring risks</div>
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
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Comprehensive Checks</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Our <span className="text-gradient">Verification Coverage</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            A structured process covering all critical credentials.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coverage.map((item, idx) => (
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
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Benefits of <span className="text-gradient">BGV Services</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            Smarter, safer, and faster onboarding for your organization.
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
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Why Choose <span className="text-gradient">AdmirerX?</span></h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Fast & reliable verification turnaround</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Cpu className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Technology-driven and expert-reviewed process</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Eye className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Transparent reporting with real-time status updates</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Headphones className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Dedicated support for bulk and ongoing hiring</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <DollarSign className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium text-white/80">Flexible pricing models</span>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden bg-blue-900/10 border-blue-500/20">
                            <h3 className="text-2xl font-bold font-display mb-4">Secure Your Hiring</h3>
                            <p className="text-white/60 mb-8">
                                Whether you are hiring at scale or for critical roles, AdmirerX enables smarter, safer, and faster onboarding.
                            </p>
                            <Button asChild size="lg" className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white h-12 font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                <Link href="/contact">Get Started</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
