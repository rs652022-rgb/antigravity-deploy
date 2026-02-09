"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  Lightbulb,
  Shield,
  ArrowRight,
  Target,
  Zap,
} from "lucide-react";
import { useRef } from "react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every interaction, delivering exceptional results that set new industry standards.",
    image: "/images/pexels-rdne-7947846.jpg",
  },
  {
    icon: Users,
    title: "People First",
    description: "Our team members are our greatest asset. We invest in their growth, well-being, and professional success.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace change and continuously innovate to stay ahead of industry trends and solve complex challenges.",
    image: "/images/pexels-leeloothefirst-7887821.jpg",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with the highest ethical standards, ensuring transparency and trust in all our partnerships.",
    image: "/images/pexels-pixabay-248515.jpg",
  },
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Foundation",
    description: "AdmirerX launches with a bold vision to revolutionize business process outsourcing through AI-powered technology.",
    icon: Target,
  },
  {
    phase: "Phase 2",
    title: "Infrastructure Setup",
    description: "Building state-of-the-art technology infrastructure and assembling a world-class team of BPO and AI experts.",
    icon: Zap,
  },
  {
    phase: "Phase 3",
    title: "AI Platform Launch",
    description: "Deploying our proprietary AI platform to deliver intelligent automation and enhanced service delivery.",
    icon: Lightbulb,
  },
  {
    phase: "Phase 4",
    title: "Market Entry",
    description: "Launching services across key industries with focus on excellence, innovation, and customer success.",
    icon: ArrowRight,
  },
  {
    phase: "Phase 5",
    title: "Scale & Growth",
    description: "Expanding team capabilities and service offerings to meet growing client demand globally.",
    icon: Users,
  },
  {
    phase: "Phase 6",
    title: "Industry Leadership",
    description: "Establishing AdmirerX as a leader in AI-powered business transformation and intelligent outsourcing.",
    icon: Award,
  },
];

const stats = [
  { value: "2025", label: "Launched" },
  { value: "100%", label: "Commitment" },
  { value: "AI-First", label: "Approach" },
  { value: "Global", label: "Reach" },
];

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#020205] text-white overflow-hidden selection:bg-white/20 selection:text-white">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[20%] w-[40%] h-[40%] rounded-full bg-cyan-900/5 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="BPO Team Collaboration"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#020205]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">


          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-6xl sm:text-7xl md:text-9xl font-bold font-display leading-tight mb-8 tracking-tighter"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl">
              We Admire
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-purple-200">
              Your Dreams
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed mb-12"
          >
            AdmirerX combines deep industry expertise with cutting-edge AI to deliver innovative, digital-first BPO solutions that transform businesses.
          </motion.p>
        </div>


      </section>

      {/* Mission & Values Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-8 tracking-tight leading-[1.1]">
                Our Mission & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Shared Values
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8" />
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                To empower businesses worldwide by delivering exceptional outsourcing services that combine the irreplaceable value of human connection with the transformative power of artificial intelligence.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                We&apos;re committed to creating meaningful careers, driving innovation, and helping our clients achieve sustainable growth in an ever-evolving digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-700" />
              <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/pexels-fauxels-3182773.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-medium">Excellence Driven</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500"
              >
                <div className="mb-8 relative w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-2xl font-display font-bold mb-4">{value.title}</h4>
                <p className="text-white/50 text-base leading-relaxed mb-6 font-light">{value.description}</p>
                <div className="relative h-48 rounded-xl overflow-hidden transition-all duration-500">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-32 relative bg-[#010103]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-bold uppercase tracking-[0.2em] mb-6">Discovery</span>
            <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block" />

            <div className="space-y-24">
              {roadmap.map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                >
                  {/* Content Side */}
                  <div className={`flex-1 w-full ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`relative group inline-block max-w-lg ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}>
                      <div className="absolute -inset-6 bg-white/5 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}`}>
                          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">{item.phase}</span>
                        </div>
                        <h3 className="text-3xl font-bold font-display mb-4 text-white">{item.title}</h3>
                        <p className="text-white/60 leading-relaxed font-light">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="relative z-10 hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-[#050505] border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-300">
                    <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                  </div>

                  {/* Empty Side */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 bg-[#020205]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/10 group-hover:to-white/30 transition-all duration-500 whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/partner-bg.jpg"
            alt="Partner Background"
            fill
            className="object-cover opacity-20 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/80 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-20 rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
          >
            {/* Shine Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display mb-8 tracking-tighter">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Elevate</span>?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-12 text-lg md:text-xl font-light leading-relaxed">
              Join us in transforming business operations with AI-driven solutions and world-class talent. The future awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-bold rounded-full px-10 h-14 text-base transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-white rounded-full px-10 h-14 text-base backdrop-blur-md transition-all duration-300"
              >
                <Link href="/careers">Join Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
