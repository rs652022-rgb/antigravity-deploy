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

      <section className="relative py-24 overflow-hidden">
        {/* Background Image for Values Section */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/values-bg.png"
            alt="Values Background"
            fill
            className="object-cover opacity-20 scale-110 blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}

            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-6">Our Core</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-8 tracking-tighter">
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
            className="glass-premium p-12 md:p-24 mb-16 relative group overflow-hidden border-white/10"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 100%)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
              <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                < Award className="w-12 h-12 text-white" />
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
                  className="glass-premium p-10 group relative overflow-hidden border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                    <value.icon className="w-7 h-7 text-white/70" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 font-display">{value.title}</h4>
                  <div className="relative h-40 w-full rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:scale-[1.02] transition-transform duration-500">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <p className="text-white/50 leading-relaxed font-medium group-hover:text-white/70 transition-colors duration-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
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
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-6">The Path</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-8">
              Our <span className="text-gradient">Roadmap</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-medium">
              A clear vision for growth, innovation, and transformation.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10 hidden lg:block" />

            <div className="space-y-12">
              {roadmap.map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`glass-card p-10 inline-block group relative ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}>
                      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                      <div className="relative z-10">
                        <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest mb-6">
                          {item.phase}
                        </span>
                        <h3 className="text-2xl font-bold mb-4 font-display">{item.title}</h3>
                        <p className="text-white/50 text-base leading-relaxed font-medium max-w-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-4 h-4 rounded-full bg-white border-4 border-black relative z-10 hidden lg:block shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                    <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-25" />
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

      <section className="relative py-32 overflow-hidden">
        {/* Background Image for Section */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/partner-bg.jpg"
            alt="Partner Background"
            fill
            className="object-cover opacity-40 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-premium p-12 md:p-24 text-center relative overflow-hidden group border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)",
              backdropFilter: "blur(40px) saturate(200%)",
            }}
          >
            {/* Mirror Reflection/Shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)]" />

            <div className="relative z-10">
              <h2 className="text-4xl sm:text-6xl font-bold font-display mb-10 leading-[1.1] tracking-tighter">
                Ready to <span className="text-gradient">Partner</span> with Us?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-16 text-xl font-medium leading-relaxed">
                Join us in transforming business operations with AI-driven solutions and world-class talent. Let&apos;s build the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-white/90 text-black font-bold rounded-full px-12 h-16 text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
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
                  className="border-white/20 hover:bg-white/10 rounded-full px-12 h-16 text-lg transition-all duration-300 backdrop-blur-md"
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
