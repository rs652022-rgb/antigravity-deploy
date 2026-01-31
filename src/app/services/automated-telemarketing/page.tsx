"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Zap,
    DollarSign,
    BarChart3,
    Database,
    ShieldCheck,
    TrendingUp,
    Settings,
    MessageCircle,
    Target,
    ArrowRight,
    PhoneCall,
    Bot,
} from "lucide-react";

const benefits = [
    {
        icon: Zap,
        title: "Faster & Smarter Lead Generation",
        description: "Accelerate your pipeline with intelligent automation that identifies high-quality prospects instantly."
    },
    {
        icon: DollarSign,
        title: "Lower Operational Costs",
        description: "Scale your outreach without exponentially increasing overhead or headcount."
    },
    {
        icon: BarChart3,
        title: "Real-Time Insights & Analytics",
        description: "Gain immediate visibility into campaign performance to make data-driven decisions on the fly."
    },
    {
        icon: Database,
        title: "Accurate & Reliable Customer Data",
        description: "Capture and organize customer information automatically, eliminating manual entry errors."
    },
    {
        icon: ShieldCheck,
        title: "Reduced Risk of Information Loss",
        description: "Securely store every interaction detail, ensuring no critical data point is ever missed."
    },
    {
        icon: TrendingUp,
        title: "Higher Engagement & Conversion Rates",
        description: "Deliver personalized messages at the right time to boost response rates and sales."
    },
    {
        icon: Settings,
        title: "Complete Control Over Campaigns",
        description: "Manage, adjust, and optimize your calling strategies with total flexibility and ease."
    },
    {
        icon: MessageCircle,
        title: "Seamless & Scalable Communication",
        description: "Effortlessly expand your reach to thousands of contacts with a system that grows with you."
    },
    {
        icon: Target,
        title: "Precision Targeting Through Automation",
        description: "Reach the exact audience segment you need with sophisticated filtering and routing."
    }
];

export default function AutomatedTelemarketingPage() {
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
                            Intelligent Outreach
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
                            Automated Telemarketing <br />
                            <span className="text-gradient">by AdmirerX</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                            Connect with the Right Audience Faster, Smarter, and at Scale.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                                <Link href="/contact">Start Your Campaign <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>

                        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto border-blue-500/20 bg-blue-900/5 text-left">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">Scale Conversations Without Scaling Costs</h2>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        At AdmirerX, our Automated Telemarketing solutions are designed to help businesses connect with the right audience faster, smarter, and at scale.
                                    </p>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        Automated Telemarketing leverages advanced calling technology to automate outbound calls through intelligent dialers and pre-recorded or AI-driven voice messages. The system not only reaches prospects efficiently but also captures real-time responses, customer inputs, and engagement data allowing businesses to act instantly and strategically.
                                    </p>
                                    <p className="text-white/60 leading-relaxed">
                                        Whether you’re running lead generation campaigns, customer outreach, surveys, or follow-ups, AdmirerX helps you scale conversations effortlessly.
                                    </p>
                                </div>
                                <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 text-center">
                                        <Bot className="w-16 h-16 text-blue-500 opacity-80" />
                                        <div>
                                            <div className="text-2xl font-bold mb-2">Smart Automation</div>
                                            <div className="text-white/50 text-sm">Personalized interactions at scale</div>
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
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Benefits of <span className="text-gradient">Automated Telemarketing</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            Drive efficiency and results with our advanced solution.
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
                                className="glass-card p-6 group hover:border-blue-500/30 transition-colors"
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

            <section className="py-24 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 h-[400px]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <PhoneCall className="w-24 h-24 text-white/5" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                                <p className="font-bold text-lg mb-2">Seamless Integration</p>
                                <p className="text-white/50 text-sm">Calls are tailored based on customer profiles, ensuring relevant messaging and timely follow-ups.</p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Optimized for <span className="text-gradient">Performance</span></h2>
                            <p className="text-white/60 mb-8 leading-relaxed text-lg">
                                Our solution eliminates manual effort while maintaining a personalized customer experience. With built-in analytics and reporting, businesses gain complete visibility into campaign performance enabling continuous optimization and better decision-making.
                            </p>
                            <div className="space-y-4">
                                {["Zero Manual Effort", "Personalized Experience", "Continuous Optimization"].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-blue-400" />
                                        </div>
                                        <span className="font-bold">{item}</span>
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
                            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Ready to Automate Your Growth?</h2>
                            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 font-medium">
                                AdmirerX helps you scale conversations without scaling costs.
                            </p>
                            <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                <Link href="/contact">Get Started Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
