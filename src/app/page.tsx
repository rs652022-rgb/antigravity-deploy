"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import "./solutions.css";
import UnicornHero from "@/components/home/UnicornHero";
import { Button } from "@/components/ui/button";
import QualityComplianceSection from "@/components/home/QualityComplianceSection";
import {
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Bot,
  Users,
  Cpu,
  Lock,
  CheckCircle,
  Activity,
  ShoppingBag,
  Stethoscope,
  Landmark,
  Smartphone,
  Plane,
  Monitor,
  Globe,
  Briefcase,
  Check
} from "lucide-react";
import ServingEveryIndustrySection from "@/components/home/ServingEveryIndustrySection";

// Main Homepage Component
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-indigo-500/30">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements - Unicorn Studio Animation */}
        <UnicornHero />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="font-[family-name:var(--font-inter)] text-4xl sm:text-6xl md:text-[96px] font-bold leading-[1.1] tracking-[-0.02em] mb-8 text-center text-white max-w-6xl mx-auto">
              <span className="sm:whitespace-nowrap inline-block">Empowering Innovation</span><br />
              <span className="inline-block">in the <span className="text-[#B9BCC8]">AI Era</span></span>
            </h1>

            <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-12 font-normal leading-relaxed tracking-wide">
              Leading BPO services in India with trusted outsourcing solutions. <br />
              We simplify business challenges and turn possibilities into progress.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-black hover:bg-gray-200 px-8 h-12 font-bold text-[15px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Speak with an Expert <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-10 h-12 font-bold text-[15px] backdrop-blur-md transition-all duration-300 hover:scale-105"
              >
                <Link href="/services">
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR APPROACH */}
      <section className="py-20 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-text-muted text-[11px] font-bold uppercase tracking-[0.2em] mb-8 shadow-sm backdrop-blur-md">
              OUR APPROACH
            </span>
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-[1.1] tracking-tight">
              We bring together people and <br />
              <span className="text-white/40">intelligent automation</span>
            </h2>
            <p className="text-text-muted max-w-3xl mx-auto text-lg md:text-xl font-normal leading-relaxed">
              Trusted outsourcing partner for businesses seeking affordable BPO services and <br className="hidden md:block" />
              staffing solutions in India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group glass-card flex flex-col h-full relative"
            >
              <div className="p-10 pb-0 flex-grow relative z-10">
                <div className="approach-icon-chip mb-8">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display tracking-tight">Stronger Teams</h3>
                <p className="text-text-muted leading-relaxed mb-10 text-[15px]">
                  Building high-performing teams that combine human expertise with cutting-edge technology to deliver exceptional results.
                </p>
              </div>
              <div className="relative h-72 w-full mt-auto overflow-hidden">
                <Image
                  src="/images/pexels-fauxels-3184302.jpg"
                  alt="Stronger Teams"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="group glass-card flex flex-col h-full relative"
            >
              <div className="p-10 pb-0 flex-grow relative z-10">
                <div className="approach-icon-chip mb-8">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display tracking-tight">Smarter Technology</h3>
                <p className="text-text-muted leading-relaxed mb-10 text-[15px]">
                  AI-powered automation and intelligent systems that transform operations and drive business efficiency at scale.
                </p>
              </div>
              <div className="relative h-72 w-full mt-auto overflow-hidden">
                <Image
                  src="/images/pexels-michelangelo-buonarroti-8728380.jpg"
                  alt="Smarter Technology"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="group glass-card flex flex-col h-full relative"
            >
              <div className="p-10 pb-0 flex-grow relative z-10">
                <div className="approach-icon-chip mb-8">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display tracking-tight">Safer Operations</h3>
                <p className="text-text-muted leading-relaxed mb-10 text-[15px]">
                  Enterprise-grade security protocols ensuring data protection and compliance across all client engagements.
                </p>
              </div>
              <div className="relative h-72 w-full mt-auto overflow-hidden">
                <Image
                  src="/images/pexels-cottonbro-5473960.jpg"
                  alt="Safer Operations"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. INNOVATIVE SOLUTIONS */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Image & Blending */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/innovative-bg.png"
            alt="Innovative Solutions Background"
            fill
            className="object-cover opacity-40 mix-blend-screen scale-105"
            sizes="100vw"
            quality={60}
          />
          {/* Lighter overlay to let image show through */}
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-10 text-center lg:text-left">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-text-muted text-[11px] font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-sm">
                INNOVATIVE SOLUTIONS
              </span>
              <h2 className="text-4xl md:text-6xl font-bold font-display leading-[1.1] tracking-tight">
                Human Excellence, <br />
                <span className="text-white/40">Worldwide Impact</span>
              </h2>
            </div>
            <p className="text-text-muted max-w-sm text-sm font-normal leading-relaxed mb-2">
              Experience the future of business process outsourcing with our cutting-edge AI technology and intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Solution 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="solution-card group"
            >
              <div className="solution-card-content">
                <div className="solution-icon-chip">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <h4 className="solution-title">AI-Powered <br /> Intelligence</h4>
                <p className="solution-desc">
                  Advanced machine learning models that understand context and deliver personalized responses.
                </p>
              </div>
              <div className="solution-image-container">
                <Image
                  src="/images/pexels-agk42-2599244.jpg"
                  alt="AI"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  quality={80}
                />
              </div>
            </motion.div>

            {/* Solution 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="solution-card group"
            >
              <div className="solution-card-content">
                <div className="solution-icon-chip">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h4 className="solution-title">Lightning Fast <br /> Response</h4>
                <p className="solution-desc">
                  Sub-second response times powered by distributed cloud infrastructure.
                </p>
              </div>
              <div className="solution-image-container">
                <Image
                  src="/images/pexels-tima-miroshnichenko-6615233.jpg"
                  alt="Speed"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  quality={80}
                />
              </div>
            </motion.div>

            {/* Solution 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="solution-card group"
            >
              <div className="solution-card-content">
                <div className="solution-icon-chip">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h4 className="solution-title">Enterprise-Grade <br /> Security</h4>
                <p className="solution-desc">
                  ISO 27001 certified with end-to-end encryption and compliance automation.
                </p>
              </div>
              <div className="solution-image-container">
                <Image
                  src="/images/pexels-pixabay-248515.jpg"
                  alt="Security"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  quality={80}
                />
              </div>
            </motion.div>

            {/* Solution 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="solution-card group"
            >
              <div className="solution-card-content">
                <div className="solution-icon-chip">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <h4 className="solution-title">Continuous <br /> Innovation</h4>
                <p className="solution-desc">
                  Weekly updates with cutting-edge AI features and performance enhancements.
                </p>
              </div>
              <div className="solution-image-container">
                <Image
                  src="/images/pexels-leeloothefirst-7887821.jpg"
                  alt="Innovation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  quality={80}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. READY TO DELIVER EXCELLENCE */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/ready-bg-v3.jpg"
            alt="Ready Background"
            fill
            className="object-cover opacity-60 mix-blend-screen blur-[5px] scale-105"
            sizes="100vw"
            quality={60}
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

          {/* Bottom Fade merging into next dark section */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10 backdrop-blur-md" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl font-bold font-display mb-8 leading-[1.1] tracking-tight">
                Ready to <span className="text-white/40">Deliver <br /> Excellence</span>
              </h2>
              <p className="text-text-muted text-lg mb-16 max-w-md mx-auto lg:mx-0 font-normal leading-relaxed">
                Empowering your business with exceptional talent and unwavering commitment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display tracking-tight text-center sm:text-left">100+</h3>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold text-center sm:text-left">Team Members Ready</p>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display tracking-tight text-center sm:text-left">99%</h3>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold text-center sm:text-left">Client Satisfaction Target</p>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display tracking-tight text-center sm:text-left">24/7</h3>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold text-center sm:text-left">Support Available</p>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display tracking-tight text-center sm:text-left">100%</h3>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold text-center sm:text-left">Commitment to Quality</p>
                </div>
              </div>
            </div>

            {/* Right Content - Glass Card */}
            <div className="relative">
              <div className="aspect-square glass-premium rounded-[3rem] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden group border border-white/10 hover:border-white/20 transition-all duration-500">

                {/* Inner glow */}
                <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-28 h-28 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-all duration-500 shadow-2xl">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 font-display tracking-tight">Quality Assurance</h3>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Standardized Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVING EVERY INDUSTRY */}
      <ServingEveryIndustrySection />

      {/* 6. QUALITY & COMPLIANCE + BUILT FOR PERFORMANCE */}
      <QualityComplianceSection />


      {/* 7. FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        {/* Full Section Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-blackhole-bg.png"
            alt="CTA Background"
            fill
            className="object-cover blur-[8px]"
            sizes="100vw"
            quality={70}
          />
          {/* Subtle overlay to ensure text readability if needed, but keeping it minimal for richness */}
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Glass Card - Made transparent to let the background shine through (Mirror Effect) */}
          <div className="relative rounded-[2.5rem] overflow-hidden bg-white/[0.01] border border-white/[0.05] p-16 md:p-24 text-center backdrop-blur-[10px] group hover:border-white/[0.1] transition-colors duration-500">

            {/* Inner Glows/Reflections */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-8 leading-[1.1] tracking-tight text-white drop-shadow-2xl">
                Together, we'll solve <br />
                <span className="text-white/40">tomorrow's</span> <br />
                challenges <span className="text-white/40">today</span>
              </h2>

              <p className="text-white/60 text-lg mb-12 font-normal max-w-xl mx-auto text-shadow-sm">
                Let's discuss how AdmirerX can transform your business operations and customer experience.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white text-black hover:bg-gray-100 px-8 h-12 font-bold text-[15px] transition-transform hover:scale-105 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Started Today <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08] px-8 h-12 font-bold text-[15px] backdrop-blur-md transition-transform hover:scale-105"
                >
                  <Link href="/contact">
                    Partner With Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
