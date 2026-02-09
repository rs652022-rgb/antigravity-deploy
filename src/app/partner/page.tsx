"use client";

import { useState, useCallback, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import {
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Users,
  CheckCircle,
  ArrowRight,
  Upload,
  FileText,
  X,
  Send,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Accelerated Growth",
    description: "Access to cutting-edge AI solutions and global talent that drive measurable business outcomes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "ISO-certified operations with robust data protection and compliance frameworks.",
    image: "/images/pexels-cottonbro-5473960.jpg",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Fast onboarding and implementation with dedicated support teams for seamless integration.",
    image: "/images/pexels-tima-miroshnichenko-6615233.jpg",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "24/7 operations across multiple time zones with multilingual support capabilities.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Customized team structures aligned with your business goals and culture.",
    image: "/images/pexels-a-darmel-7743257.jpg",
  },
  {
    icon: CheckCircle,
    title: "Lasting Impact",
    description: "Building trusted partnerships through transparency, collaboration, and lasting success.",
    image: "/images/pexels-fauxels-3184302.jpg",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We learn about your business needs, challenges, and goals through an in-depth consultation.",
  },
  {
    step: "02",
    title: "Solution Design",
    description: "Our experts design customized workflows and team structures tailored to your requirements.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Rapid deployment with comprehensive training and seamless knowledge transfer.",
  },
  {
    step: "04",
    title: "Optimization",
    description: "Continuous improvement through AI insights, performance monitoring, and regular reviews.",
  },
];

const industries = [
  "E-commerce",
  "Healthcare",
  "FinTech",
  "SaaS",
  "Retail",
  "Manufacturing",
  "Education",
  "Other",
];

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    maxSize: 10 * 1024 * 1024,
    multiple: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });


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
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
            alt="BPO Strategic Partnership"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#020205]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">


          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-9xl font-bold font-display leading-[1.1] mb-10 tracking-tighter"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl">
              Partner With
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-purple-200">
              AdmirerX
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-16 font-light leading-relaxed"
          >
            Transform your business with AI-powered solutions and world-class talent. Let&apos;s build the future together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 text-black font-bold rounded-full px-12 h-16 text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <a href="#inquiry">
                Start a Conversation
                <ArrowRight className="ml-2 w-6 h-6" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/10 rounded-full px-12 h-16 text-lg transition-all duration-300 backdrop-blur-md text-white"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </motion.div>
        </div>


      </section>

      {/* Benefits Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display mb-8 tracking-tight">
              Partnership <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Benefits</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
            <p className="text-white/60 max-w-2xl mx-auto text-xl font-light leading-relaxed">
              Experience the advantages of working with a trusted global leader in AI-driven BPO solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/20">
                    <benefit.icon className="w-8 h-8 text-white group-hover:text-blue-200 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-display text-white group-hover:text-blue-100 transition-colors">{benefit.title}</h3>

                  <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 border border-white/5 transition-all duration-500">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  <p className="text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 relative bg-[#010103] overflow-hidden how-we-partner-section">
        {/* Optimized Background Image */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <Image
            src="/images/partnership-bg-premium-v2.jpg"
            alt="Abstract Partner Background"
            fill
            className="object-cover section-bg-animate"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-24"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-bold uppercase tracking-[0.2em] mb-6">The Methodology</span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display mb-8 tracking-tight">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partner</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-xl font-light">
              Our proven four-step process ensures a smooth and successful partnership journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
              >
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 block text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent font-display mb-4 group-hover:from-white/20 transition-all duration-500">{step.step}</span>
                <h3 className="relative z-10 text-2xl font-bold mb-4 font-display text-white">{step.title}</h3>
                <p className="relative z-10 text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry" className="py-32 bg-[#020205] relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-6xl font-bold font-display mb-8 leading-tight tracking-tight">
                Let&apos;s Start the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Conversation</span>
              </h2>
              <p className="text-white/60 text-xl mb-12 font-light leading-relaxed">
                Share your business needs with us, and our partnership team will reach out within 24 hours to discuss how we can help you achieve your goals.
              </p>

              <div className="space-y-10">
                {[
                  { title: "Tailored Solutions", desc: "Custom proposals designed for your unique business requirements." },
                  { title: "Expert Consultation", desc: "Connect with industry experts who understand your challenges." },
                  { title: "No Commitment", desc: "Explore partnership opportunities with no obligation." }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-6 group/item"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                      <CheckCircle className="w-6 h-6 text-white/70 group-hover/item:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 font-display tracking-tight text-xl text-white">{item.title}</h4>
                      <p className="text-white/50 font-light text-lg">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl -z-10 rounded-[3rem]" />

              {submitted ? (
                <div className="glass-card p-12 md:p-20 text-center h-full flex flex-col items-center justify-center relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.03]">
                  <div className="relative z-10">
                    <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-3xl font-bold mb-6 font-display text-white">Inquiry Received!</h3>
                    <p className="text-white/60 text-lg mb-12 font-light">
                      Thank you for your interest. We will be in touch shortly.
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          companyName: "",
                          contactName: "",
                          email: "",
                          phone: "",
                          industry: "",
                          message: "",
                        });
                        setFile(null);
                      }}
                      variant="outline"
                      className="border-white/20 hover:bg-white/10 rounded-full px-10 h-14 font-bold text-white backdrop-blur-md"
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-12 relative group rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[3rem]" />
                  <div className="relative z-10 space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="companyName" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                          Company Name *
                        </Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData({ ...formData, companyName: e.target.value })
                          }
                          required
                          className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20 px-5"
                          placeholder="Acme Corp"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="contactName" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                          Contact Name *
                        </Label>
                        <Input
                          id="contactName"
                          value={formData.contactName}
                          onChange={(e) =>
                            setFormData({ ...formData, contactName: e.target.value })
                          }
                          required
                          className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20 px-5"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20 px-5"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20 px-5"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="industry" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                        Industry
                      </Label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) =>
                          setFormData({ ...formData, industry: value })
                        }
                      >
                        <SelectTrigger className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white px-5">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0a0a0a] border-white/10 rounded-xl p-1">
                          <SelectGroup>
                            <SelectLabel className="text-white/30 uppercase tracking-widest text-[10px] font-bold p-2">Sectors</SelectLabel>
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry} className="text-white focus:bg-white/10 focus:text-white rounded-lg cursor-pointer">
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                        How can we help? *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        className="min-h-[120px] rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20 p-5 text-base"
                        placeholder="Tell us about your business needs..."
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                        Attach Document (Optional)
                      </Label>
                      <div
                        {...getRootProps()}
                        className={`border-2 border-dashed rounded-[2rem] p-6 text-center cursor-pointer transition-all duration-300 ${isDragActive
                          ? "border-blue-400 bg-blue-500/5"
                          : "border-white/10 hover:border-white/30 hover:bg-white/[0.02]"
                          }`}
                      >
                        <input {...getInputProps()} />
                        {file ? (
                          <div className="flex items-center justify-center gap-3 animate-in fade-in zoom-in">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                              <FileText className="w-5 h-5 text-blue-400" />
                            </div>
                            <span className="font-bold text-white tracking-tight">{file.name}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setFile(null);
                              }}
                              className="p-1 hover:bg-white/10 rounded-full transition-colors ml-2"
                            >
                              <X className="w-5 h-5 text-white/50 hover:text-white" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                              <Upload className="w-5 h-5 text-white/40" />
                            </div>
                            <p className="text-white/80 font-medium text-sm">
                              Click or drag file to upload
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white hover:bg-white/90 text-black font-bold rounded-full h-16 text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Submit Partnership Inquiry"}
                      {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
