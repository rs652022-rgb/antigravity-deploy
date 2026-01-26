"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  Lightbulb,
  Shield,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every interaction, delivering exceptional results.",
    image: "/images/pexels-rdne-7947846.jpg",
  },
  {
    icon: Users,
    title: "People First",
    description: "Our team members are our greatest asset. We invest in their growth and success.",
    image: "/images/pexels-fauxels-3182773.jpg",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace change and continuously innovate to stay ahead of industry trends.",
    image: "/images/pexels-leeloothefirst-7887821.jpg",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with the highest ethical standards and transparency in all we do.",
    image: "/images/pexels-pixabay-248515.jpg",
  },
];



const roadmap = [
  {
    phase: "Phase 1",
    title: "Foundation",
    description: "AdmirerX launches with a bold vision to revolutionize business process outsourcing through AI-powered technology.",
  },
  {
    phase: "Phase 2",
    title: "Infrastructure Setup",
    description: "Building state-of-the-art technology infrastructure and assembling a world-class team of BPO and AI experts.",
  },
  {
    phase: "Phase 3",
    title: "AI Platform Launch",
    description: "Deploying our proprietary AI platform to deliver intelligent automation and enhanced service delivery.",
  },
  {
    phase: "Phase 4",
    title: "Market Entry",
    description: "Launching services across key industries with focus on excellence, innovation, and customer success.",
  },
  {
    phase: "Phase 5",
    title: "Scale & Growth",
    description: "Expanding team capabilities and service offerings to meet growing client demand.",
  },
  {
    phase: "Phase 6",
    title: "Industry Leadership",
    description: "Establishing AdmirerX as a leader in AI-powered business transformation and intelligent outsourcing.",
  },
];

const stats = [
  { value: "2025", label: "Launched" },
  { value: "100%", label: "Commitment" },
  { value: "AI-First", label: "Approach" },
  { value: "Ready", label: "To Serve" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          alt="BPO Team Collaboration"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-display leading-[1.1] mb-10 text-white">
              We Admire
              <br />
              Your <span className="text-gradient">Dreams</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
              AdmirerX is a top BPO and recruitment company in India that combines deep industry expertise with cutting-edge technology and AI to deliver innovative, digital-first solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}

            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-6">Our Core</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-8">
              Our Mission & <span className="text-gradient">Values</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-medium">
              We exist to transform businesses through the perfect blend of human talent and AI innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-24 mb-16 relative group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
              <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Award className="w-12 h-12 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold mb-6 font-display">Our Mission</h3>
                <p className="text-white/60 text-xl leading-relaxed font-medium">
                  To empower businesses worldwide by delivering exceptional outsourcing services that combine the irreplaceable value of human connection with the transformative power of artificial intelligence. We&apos;re committed to creating meaningful careers, driving innovation, and helping our clients achieve sustainable growth in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 text-center mb-16">Our Shared Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-10 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                    <value.icon className="w-7 h-7 text-white/70" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 font-display">{value.title}</h4>
                  <div className="relative h-40 w-full rounded-2xl overflow-hidden mb-6 border border-white/5">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <p className="text-white/50 leading-relaxed font-medium">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>



      <section className="relative py-32 overflow-hidden bg-black">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/roadmap-bg.jpg"
            alt="Roadmap Background"
            fill
            className="object-cover opacity-30 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-24"
          >
            <motion.span
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              className="inline-block px-5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
            >
              The Path to Future
            </motion.span>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold font-display mb-10 tracking-tighter">
              Our <span className="text-gradient">Roadmap</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
              Charting our journey towards transforming the global BPO landscape with AI-powered innovation and human excellence.
            </p>
          </motion.div>

          <div className="relative">
            {/* Animated Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-linear-to-b from-transparent via-white/20 to-transparent hidden lg:block" />

            <div className="space-y-24">
              {roadmap.map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "circOut", delay: index * 0.05 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                >
                  <div className={`flex-1 w-full ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`glass-premium p-10 lg:p-14 group relative transition-all duration-700 hover:scale-[1.02] ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                      } max-w-xl`}>
                      <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                      <div className="relative z-10">
                        <span className="inline-block mb-8 text-4xl font-black font-display opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                          {item.phase.split(' ')[1]}
                        </span>
                        <div className="flex flex-col gap-4">
                          <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                            {item.phase}
                          </span>
                          <h3 className="text-3xl md:text-4xl font-bold font-display leading-tight">{item.title}</h3>
                          <div className={`h-px w-12 bg-white/20 my-4 group-hover:w-20 transition-all duration-700 ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`} />
                          <p className="text-white/50 text-lg leading-relaxed font-medium">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Icon / Marker */}
                  <div className="relative flex items-center justify-center shrink-0 z-10 hidden lg:flex">
                    <div className="w-12 h-12 rounded-full glass-premium flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-colors duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                      <div className="w-4 h-4 rounded-full bg-white opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                    </div>
                    {/* Ping Animation */}
                    <div className="absolute inset-0 w-full h-full rounded-full animate-ping bg-white/5 opacity-0 group-hover:opacity-100" />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-white/40 font-bold uppercase tracking-widest text-[10px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-24 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-linear-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5 font-bold font-display mb-10 leading-[1.1]">
                Ready to <span className="text-gradient">Partner</span> with Us?
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto mb-16 text-xl font-medium">
                Join us in transforming business operations with AI-driven solutions and world-class talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-white/90 text-black font-bold rounded-full px-12 h-16 text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Get in Touch
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 hover:bg-white/10 rounded-full px-12 h-16 text-lg transition-all duration-300 glass"
                >
                  <Link href="/careers">Join Our Team</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
