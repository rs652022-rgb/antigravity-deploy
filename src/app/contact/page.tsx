"use client";

import { useState, useCallback, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
  Mail,
  Phone,
  Clock,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  ArrowRight,
  Upload,
  FileText,
  X,
  CheckCircle,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import { sendContactEmail } from "@/app/actions/contact";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "management@admirerx.net",
    href: "mailto:management@admirerx.net",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 88269 36399",
    href: "tel:+918826936399",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "24/7 Support Available",
    href: null,
  },
  {
    icon: MapPin,
    title: "Office Address",
    value: "Plot No - 761, Noida Sector 21",
    href: null,
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/admirerx/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const services = [
  "Customer Support",
  "Back-Office Operations",
  "Sales & Lead Generation",
  "Finance & Accounting",
  "HR Outsourcing",
  "AI Services",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: "",
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

    try {
      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("companyName", formData.companyName);
      data.append("service", formData.service);
      data.append("message", formData.message);
      if (file) {
        data.append("attachment", file);
      }

      const result = await sendContactEmail(data);

      if (result.success) {
        setSubmitted(true);
        toast.success("Message sent successfully!");
      } else {
        toast.error(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format&fit=crop"
            alt="Contact AdmirerX Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#020205]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative inline-block mb-8"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-full opacity-50" />
            <span className="relative px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium tracking-widest uppercase text-white/80">
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-9xl font-bold font-display leading-[1.1] mb-10 tracking-tighter"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl">
              Let&apos;s
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-purple-200">
              Connect
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Ready to transform your business? Start a conversation with our experts today.
          </motion.p>
        </div>


      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-[#050505] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-6xl font-bold font-display mb-8 tracking-tight">
                Send Us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Message</span>
              </h2>
              <p className="text-white/60 text-lg mb-12 font-light">
                Fill out the form below, and we&apos;ll get back to you within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-12 md:p-20 text-center relative overflow-hidden rounded-[3rem] border border-white/10"
                >
                  <div className="relative z-10">
                    <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                      <CheckCircle className="w-12 h-12 text-green-400" />
                    </div>
                    <h3 className="text-3xl font-bold mb-6 font-display text-white">Message Sent!</h3>
                    <p className="text-white/60 text-lg mb-12 font-light leading-relaxed">
                      Thank you for reaching out. Our team will review your message and get back to you shortly.
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          companyName: "",
                          service: "",
                          message: "",
                        });
                        setFile(null);
                      }}
                      variant="outline"
                      className="border-white/20 hover:bg-white/10 rounded-full px-10 h-14 font-bold text-white backdrop-blur-md"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-12 relative group rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[3rem]" />
                  <div className="relative z-10 space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
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
                          className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20 px-5"
                          placeholder="John Doe"
                        />
                      </div>
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
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
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
                          placeholder="+91 88269 36399"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="companyName" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                          Company Name
                        </Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData({ ...formData, companyName: e.target.value })
                          }
                          className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20 px-5"
                          placeholder="Company Ltd."
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="service" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                        Service Interested In *
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                        required
                      >
                        <SelectTrigger className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white px-5">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0a0a0a] border-white/10 rounded-xl p-1">
                          <SelectGroup>
                            <SelectLabel className="text-white/30 uppercase tracking-widest text-[10px] font-bold p-2">Solutions</SelectLabel>
                            {services.map((service) => (
                              <SelectItem key={service} value={service} className="text-white focus:bg-white/10 focus:text-white rounded-lg cursor-pointer">
                                {service}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        className="min-h-[150px] rounded-2xl bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/20 p-5 text-base"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                        Attach a File (PDF, DOC, or DOCX)
                      </Label>
                      <div
                        {...getRootProps()}
                        className={`border-2 border-dashed rounded-[2rem] p-8 text-center cursor-pointer transition-all duration-300 ${isDragActive
                          ? "border-blue-400 bg-blue-500/5"
                          : "border-white/10 hover:border-white/30 hover:bg-white/[0.02]"
                          }`}
                      >
                        <input {...getInputProps()} />
                        {file ? (
                          <div className="flex items-center justify-center gap-4 animate-in fade-in zoom-in">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                              <FileText className="w-6 h-6 text-blue-400" />
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
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shadow-lg">
                              <Upload className="w-6 h-6 text-white/40" />
                            </div>
                            <p className="text-white/80 font-medium tracking-tight">
                              Click or drag file to upload
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.service}
                      className="w-full bg-white hover:bg-white/90 text-black font-bold rounded-full h-16 text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,255,255,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                      {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="p-10 md:p-12 relative group rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[3rem]" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold font-display mb-10 tracking-tight">Direct Contacts</h3>
                  <div className="space-y-8">
                    {contactInfo.map((info) => (
                      <div key={info.title} className="flex items-start gap-6 group/info">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/info:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                          <info.icon className="w-6 h-6 text-white/70 group-hover/info:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">{info.title}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-xl font-bold hover:text-blue-200 transition-colors tracking-tight text-white/90"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-xl font-bold tracking-tight text-white/90">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-10 md:p-12 relative group rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-md">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-display mb-8 tracking-tight">Social Networks</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        <social.icon className="w-7 h-7" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-gradient-to-r from-blue-900/10 to-purple-900/10 border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/5 animate-pulse opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] text-white">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Average Response</span>
                    <span className="text-3xl font-bold font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">~ 2 Hours</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-8">
              Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Headquarters</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-xl font-light leading-relaxed">
              Connect with our team at our global headquarters in India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] bg-white/[0.02] border border-white/5 p-4 md:p-6"
          >
            <div className="flex flex-col lg:flex-row gap-8 mb-8 p-6 md:p-10">
              <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-bold mb-8 font-display tracking-tight text-white">AdmirerX Global Headquarters</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-[1.5rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">Address</p>
                    <p className="text-lg text-white font-medium leading-normal">Plot No. 761, Sector 21, Noida, Uttar Pradesh, India</p>
                  </div>
                  <div className="p-6 rounded-[1.5rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">Support</p>
                    <a href="tel:+918826936399" className="text-lg text-white font-bold hover:text-blue-300 transition-colors block mb-1">
                      +91 88269 36399
                    </a>
                    <span className="text-sm text-white/40">Mon-Fri, 9am - 6pm IST</span>
                  </div>
                  <div className="p-6 rounded-[1.5rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">Inquiries</p>
                    <a href="mailto:management@admirerx.net" className="text-lg text-white font-bold hover:text-blue-300 transition-colors break-all">
                      management@admirerx.net
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 relative group/map shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0108459168396!2d77.31261047549895!3d28.58997757568746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45f5e5f5e5f%3A0x5e5f5e5f5e5f5e5f!2sSector%2021%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-1000 scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
