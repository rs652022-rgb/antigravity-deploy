"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Workflow,
    Zap,
    CheckCircle,
    TrendingUp,
    Clock,
    Layout,
    Settings,
    ShieldCheck,
    ArrowRight,
    BarChart,
    Repeat
} from "lucide-react";



const benefits = [
    {
        icon: Zap,
        title: "Increased Operational Efficiency",
        description: "Streamline operations and eliminate bottlenecks for faster execution."
    },
    {
        icon: CheckCircle,
        title: "Reduced Manual Errors",
        description: "Minimize human error by automating repetitive and rule-based tasks."
    },
    {
        icon: TrendingUp,
        title: "Lower Operational Costs",
        description: "Reduce resource dependency and optimize budget allocation."
    },
    {
        icon: Workflow,
        title: "Improved Team Productivity",
        description: "Free up your team to focus on high-value strategic initiatives."
    },
    {
        icon: BarChart,
        title: "Real-Time Process Visibility",
        description: "Gain actionable insights with comprehensive tracking and analytics."
    },
    {
        icon: Clock,
        title: "Faster Decision-Making",
        description: "Access data instantly to make informed business decisions."
    },
    {
        icon: Layout,
        title: "Seamless System Integration",
        description: "Connect disparate systems into a cohesive, automated ecosystem."
    },
    {
        icon: Repeat,
        title: "Scalable & Flexible Processes",
        description: "Easily adapt workflows to accommodate business growth and change."
    },
    {
        icon: Settings,
        title: "Full Control & Customization",
        description: "Tailor workflows to meet your specific business requirements."
    },
];

export default function AutomatedWorkflowPage() {
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
                            Intelligent Automation
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
                            Our Automated <br />
                            <span className="text-gradient">Workflow Services</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                            Streamline operations, eliminate manual tasks, and improve efficiency through intelligent automation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                                <Link href="/contact">Automate Your Business <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>

                        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto border-blue-500/20 bg-blue-900/5 text-left">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">Efficiency Redefined</h2>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        At AdmirerX, our Automated Workflow Services help businesses streamline operations, eliminate manual tasks, and improve efficiency through intelligent automation.
                                    </p>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        Automated Workflows use technology to design, execute, and manage business processes automatically without constant human intervention. From task assignments and approvals to data movement and notifications, workflows ensure that every process runs smoothly, consistently, and on time.
                                    </p>
                                    <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
                                        <p className="font-medium text-blue-200">
                                            "By reducing repetitive work and human dependency, businesses can focus on strategic growth while maintaining accuracy, speed, and scalability."
                                        </p>
                                    </div>
                                </div>
                                <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 text-center">
                                        <Workflow className="w-16 h-16 text-blue-500 opacity-80" />
                                        <div>
                                            <div className="text-2xl font-bold mb-2">Seamless Flow</div>
                                            <div className="text-white/50 text-sm">Connect systems, teams, and data.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Benefits of <span className="text-gradient">Automated Service</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            Optimize performance with intelligent process management.
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
                    <div className="glass-card p-8 md:p-16 text-center relative overflow-hidden bg-blue-900/10 border-blue-500/20">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10 opacity-50" />
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Transform the way your business operates.</h2>
                            <p className="text-xl text-white/60 mb-10 leading-relaxed">
                                Automate workflows with AdmirerX and experience faster execution, better control, and scalable growth.
                            </p>
                            <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                <Link href="/contact">Start Automating</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
