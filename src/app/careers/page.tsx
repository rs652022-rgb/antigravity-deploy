"use client";

import { useState, useCallback, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Heart,
  TrendingUp,
  Clock,
  Users,
  Award,
  Briefcase,
  MapPin,
  ArrowRight,
  Upload,
  FileText,
  X,
  CheckCircle,
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs for you and your family.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Continuous learning opportunities, mentorship programs, and clear career advancement paths.",
    image: "/images/pexels-pavel-danilyuk-8438879.jpg",
  },
  {
    icon: Clock,
    title: "Work Flexibility",
    description: "Hybrid work options, flexible hours, and opportunities to work with global teams.",
    image: "/images/pexels-cottonbro-3825307.jpg",
  },
  {
    icon: Users,
    title: "Inclusive Culture",
    description: "Diverse and inclusive workplace where everyone's voice matters and contributions are valued.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description: "Performance bonuses, employee recognition programs, and competitive compensation packages.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Briefcase,
    title: "Work-Life Balance",
    description: "Generous PTO, parental leave, and company events to maintain healthy work-life integration.",
    image: "/images/pexels-rdne-7948058.jpg",
  },
];

const cultureValues = [
  "Innovation-First",
  "Global Mindset",
  "Customer-Centric",
  "Continuous Learning",
];

const openPositions = [
  {
    title: "Senior AI Solutions Architect",
    department: "Technology",
    location: "Remote / Global",
    type: "Full-time",
  },
  {
    title: "Customer Experience Manager",
    department: "Operations",
    location: "Noida, India",
    type: "Full-time",
  },
  {
    title: "Business Analyst",
    department: "Strategy",
    location: "Noida, India",
    type: "Full-time",
  },
  {
    title: "Data Scientist",
    department: "AI & Analytics",
    location: "Remote / Global",
    type: "Full-time",
  },
  {
    title: "Quality Assurance Specialist",
    department: "Operations",
    location: "Noida, India",
    type: "Full-time",
  },
  {
    title: "Talent Acquisition Partner",
    department: "Human Resources",
    location: "Remote / Global",
    type: "Full-time",
  },
];

const jobRoles = [
  "Senior AI Solutions Architect",
  "Customer Experience Manager",
  "Business Analyst",
  "Data Scientist",
  "Quality Assurance Specialist",
  "Talent Acquisition Partner",
  "Other",
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
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
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/10 blur-[120px]" />
        <div className="absolute top-[30%] right-[20%] w-[40%] h-[40%] rounded-full bg-cyan-900/5 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2068&auto=format&fit=crop"
            alt="BPO Careers Workplace"
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
              Build Your Future
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-purple-200">
              with AdmirerX
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-16 font-light leading-relaxed"
          >
            Be part of a global team that&apos;s transforming the future of business through AI-driven innovation and human-centric solutions.
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
              className="bg-white text-black hover:bg-white/90 font-bold rounded-full px-12 h-16 text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <a href="#positions">
                View Open Positions
                <ArrowRight className="ml-2 w-6 h-6" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/10 rounded-full px-12 h-16 text-lg transition-all duration-300 backdrop-blur-md text-white"
            >
              <a href="#culture">Learn About Culture</a>
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
              Why Work With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Us</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
            <p className="text-white/60 max-w-2xl mx-auto text-xl font-light leading-relaxed">
              We invest in our people with comprehensive benefits and a supportive work environment designed for growth.
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

      {/* Culture Section */}
      <section id="culture" className="py-32 relative bg-[#010103] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/careers-bg-premium.jpg" // Ensure this image exists, or fallback is handled by Next.js if missing but better to verify
            alt="Culture BG"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020205] via-[#020205]/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display mb-10 leading-tight tracking-tight">
                Our Culture & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Values</span>
              </h2>
              <div className="space-y-8 text-white/60 text-lg leading-relaxed font-light mb-12">
                <p>
                  At AdmirerX, we believe in the power of human potential amplified by technology. Our culture is built on innovation, collaboration, and continuous growth.
                </p>
                <p>
                  We foster an environment where diverse perspectives are celebrated, creativity thrives, and every team member has the opportunity to make a meaningful impact on our global operations.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {cultureValues.map((value, idx) => (
                  <motion.span
                    key={value}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-bold uppercase tracking-widest backdrop-blur-md hover:bg-white/10 transition-colors cursor-default"
                  >
                    {value}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-[3rem] overflow-hidden group border border-white/10 shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2070&auto=format&fit=crop"
                alt="Team culture"
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <div className="text-white text-3xl font-display font-bold">Thrive Together</div>
                <div className="text-white/60 mt-2">Join a community of innovators</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-32 relative bg-[#020205]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-bold uppercase tracking-[0.2em] mb-6">Opportunities</span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display mb-8 tracking-tight">
              Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Positions</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-light">
              Discover exciting opportunities to grow your career with AdmirerX.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 font-display text-white group-hover:text-blue-200 transition-colors">{position.title}</h3>
                    <div className="flex flex-wrap gap-6 text-sm text-white/50 font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-white/30" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-white/30" />
                        {position.location}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px]">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-white text-black hover:bg-gray-200 font-bold rounded-full px-8 h-12 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    <a href="#apply">Apply Now</a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-32 relative overflow-hidden bg-black">
        {/* Background Glow */}
        <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-blue-900/10 blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-6xl font-bold font-display mb-6 tracking-tight">
              Apply <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Now</span>
            </h2>
            <p className="text-white/50 text-xl font-light">
              Take the first step towards an exciting career.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 md:p-20 text-center relative overflow-hidden rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-md"
            >
              <div className="relative z-10">
                <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                  <CheckCircle className="w-12 h-12 text-green-400" />
                </div>
                <h3 className="text-3xl font-bold mb-6 font-display text-white">Application Received!</h3>
                <p className="text-white/60 text-lg mb-12 font-light max-w-lg mx-auto">
                  Thank you for your interest in joining AdmirerX. Our team will review your application and coordinate next steps.
                </p>
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: "", email: "", phone: "", role: "" });
                    setFile(null);
                  }}
                  variant="outline"
                  className="border-white/20 hover:bg-white/10 rounded-full px-10 h-14 font-bold text-white backdrop-blur-md"
                >
                  Submit Another Application
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="p-8 md:p-16 relative group rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[3rem]" />

              <div className="relative z-10 space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <Label htmlFor="fullName" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      required
                      className="h-16 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20 text-lg px-6"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-4">
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
                      className="h-16 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20 text-lg px-6"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="h-16 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20 text-lg px-6"
                      placeholder="+91 88269 36399"
                    />
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="role" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                      Job Role *
                    </Label>
                    <Select
                      value={formData.role}
                      onValueChange={(value) =>
                        setFormData({ ...formData, role: value })
                      }
                      required
                    >
                      <SelectTrigger className="h-16 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white text-lg px-6">
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0a0a0a] border-white/10 rounded-2xl p-2">
                        <SelectGroup>
                          <SelectLabel className="text-white/30 uppercase tracking-widest text-[10px] font-bold p-2">Positions</SelectLabel>
                          {jobRoles.map((role) => (
                            <SelectItem key={role} value={role} className="text-white focus:bg-white/10 focus:text-white rounded-xl py-3 cursor-pointer">
                              {role}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                    Resume/CV * (PDF, DOC, DOCX - Max 10MB)
                  </Label>
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-[2rem] p-12 text-center cursor-pointer transition-all duration-500 group/drop ${isDragActive
                      ? "border-blue-400 bg-blue-500/5"
                      : "border-white/10 hover:border-white/30 hover:bg-white/[0.02]"
                      }`}
                  >
                    <input {...getInputProps()} />
                    {file ? (
                      <div className="flex items-center justify-center gap-6 animate-in fade-in zoom-in duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                          <FileText className="w-8 h-8 text-blue-400" />
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-white tracking-tight text-lg">{file.name}</p>
                          <p className="text-xs text-white/40 font-bold uppercase tracking-widest mt-1">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFile(null);
                          }}
                          className="ml-4 p-3 hover:bg-white/10 rounded-full transition-colors group/close"
                        >
                          <X className="w-6 h-6 text-white/50 group-hover/close:text-white" />
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="w-20 h-20 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center mx-auto group-hover/drop:scale-110 transition-transform duration-500 shadow-xl">
                          <Upload className="w-10 h-10 text-white/60 group-hover/drop:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-white font-bold tracking-tight mb-2 text-lg">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-white/30 font-bold uppercase tracking-widest">
                            PDF, DOC, or DOCX (Max 10 MB)
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !file || !formData.role}
                  className="w-full bg-white hover:bg-white/90 text-black font-bold rounded-full h-16 text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,255,255,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing..." : "Submit Application"}
                  {!isSubmitting && <ArrowRight className="ml-2 w-6 h-6" />}
                </Button>
              </div>
            </motion.form>
          )}
        </div>
      </section>
    </main>
  );
}
