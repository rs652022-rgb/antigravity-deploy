"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Headphones,
    ShoppingBag,
    Wrench,
    AlertCircle,
    Info,
    Zap,
    DollarSign,
    TrendingUp,
    Target,
    Smile,
    Users,
    Clock,
    Globe,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        icon: Headphones,
        title: "Customer Support & Service Inquiries",
        description: "Expert handling of general queries and support requests with a focus on first-call resolution."
    },
    {
        icon: ShoppingBag,
        title: "Order Management & Taking",
        description: "Seamless processing of orders, returns, and exchanges to keep your sales moving efficiently."
    },
    {
        icon: Wrench,
        title: "Technical Support & Troubleshooting",
        description: "Tier 1 and Tier 2 technical assistance to resolve product issues and minimize downtime."
    },
    {
        icon: AlertCircle,
        title: "Complaint Handling & Resolution",
        description: "Empathetic conflict resolution to turn dissatisfied customers into brand advocates."
    },
    {
        icon: Info,
        title: "Product and Service Information",
        description: "Accurate and detailed guidance on your offerings to help customers make informed decisions."
    }
];

const benefits = [
    {
        icon: Zap,
        title: "Improved Productivity",
        description: "Streamlined call handling processes ensuring faster resolution times."
    },
    {
        icon: DollarSign,
        title: "Cost Efficiency",
        description: "Reduce operational overheads without compromising on service quality."
    },
    {
        icon: TrendingUp,
        title: "Higher Sales Opportunities",
        description: "Leverage better customer engagement to identify cross-sell and up-sell chances."
    },
    {
        icon: Target,
        title: "Customer-Focused Approach",
        description: "Tailored strategies aligned with your specific business goals and culture."
    },
    {
        icon: Smile,
        title: "Enhanced Satisfaction",
        description: "Consistent, high-quality interactions that build long-term trust and loyalty."
    },
    {
        icon: Users,
        title: "Win Back Customers",
        description: "Proactive support to re-engage and retain customers at risk of churn."
    },
    {
        icon: Clock,
        title: "Focus on Core Operations",
        description: "Free up your internal resources to focus on strategic growth initiatives."
    },
    {
        icon: Globe,
        title: "24/7 Global Coverage",
        description: "Scalable support connecting across time zones seamlessly."
    }
];

export default function InboundCallCenterPage() {
    return (
        <main className="min-h-screen bg-[#020205] text-white">
            <section className="relative py-20 md:py-24 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop"
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
                            Customer Support Excellence
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
                            Inbound Call Center <br />
                            <span className="text-gradient">Services</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                            Seamless, Responsive, and Human-Centric Customer Experiences.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 font-bold">
                                <Link href="/contact">Elevate Your Support <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>

                        <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto border-blue-500/20 bg-blue-900/5 text-left">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">The Frontline of Engagement</h2>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        At AdmirerX, our Inbound Call Center services are designed to deliver seamless, responsive, and human-centric customer experiences. We handle every incoming interaction with precision, empathy, and speed — ensuring your customers always feel heard, valued, and supported.
                                    </p>
                                    <p className="text-white/60 mb-6 leading-relaxed">
                                        Inbound Call Centers serve as the frontline of customer engagement, managing queries, support requests, and service-related conversations. By resolving issues efficiently and providing accurate information, we help businesses build long-term customer trust and brand loyalty.
                                    </p>
                                    <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
                                        <p className="font-medium text-blue-200">
                                            &quot;Our expert customer support professionals are empowered with the latest technologies to deliver consistent, high-quality service across every call.&quot;
                                        </p>
                                    </div>
                                </div>
                                <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 text-center">
                                        <Users className="w-16 h-16 text-blue-500 opacity-80" />
                                        <div>
                                            <div className="text-2xl font-bold mb-2">Customer First</div>
                                            <div className="text-white/50 text-sm">Building loyalty with every interaction</div>
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
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Our Capabilities</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">What We <span className="text-gradient">Offer</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            Comprehensive inbound solutions tailored to your needs.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-8 group hover:border-blue-500/30 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-lg font-bold mb-4 font-display leading-tight">{service.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Business Value</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Benefits of <span className="text-gradient">AdmirerX Solutions</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto">
                            Drive efficiency, quality, and growth with our inbound services.
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
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-12 md:p-20 text-center relative overflow-hidden group border-blue-500/20"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Ready to Delight Your Customers?</h2>
                            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 font-medium">
                                Partner with AdmirerX for 24/7 global support coverage.
                            </p>
                            <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                <Link href="/contact">Contact Us Today <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
