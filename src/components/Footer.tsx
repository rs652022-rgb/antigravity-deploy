"use client";

import Link from "next/link";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const connectLinks = [
  { href: "/careers", label: "Careers" },
  { href: "/partner", label: "Partner With Us" },
  { href: "/contact", label: "Support" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/admirerx/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 relative overflow-hidden">
      {/* Premium Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 mb-20">
          {/* Branding Column - Kept for identity but adjusted width */}
          {/* Branding Column - Expanded to 4 columns */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-8 group">
              <span className="text-2xl font-bold font-display tracking-tight text-white relative">
                Admirer<span className="text-white/40 group-hover:text-white transition-colors duration-500">X</span>
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-white/20 group-hover:w-full transition-all duration-500" />
              </span>
            </Link>
            <p className="text-text-muted text-[15px] leading-relaxed mb-8 font-normal max-w-sm">
              Empowering global businesses with AI-driven solutions and
              exceptional human expertise.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 hover:shadow-lg transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Reference Column 2: Services - Expanded to 4 columns */}
          <div className="lg:col-span-4 lg:pl-4">
            <div className="mb-10">
              <h4 className="text-white font-bold mb-6 text-[15px]">About us</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-text-muted hover:text-white transition-colors text-sm">About AdmirerX</Link></li>
                <li><Link href="/careers" className="text-text-muted hover:text-white transition-colors text-sm">Careers</Link></li>
              </ul>
            </div>

            <h4 className="text-white font-bold mb-6 text-[15px]">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/back-office" className="text-text-muted hover:text-white transition-colors text-sm">
                  BPO services
                </Link>
              </li>
              <li>
                <Link href="/services/recruitment-rpo" className="text-text-muted hover:text-white transition-colors text-sm">
                  Hiring & Recruitment Services
                </Link>
              </li>
              <li>
                <Link href="/services/sales-lead-generation" className="text-text-muted hover:text-white transition-colors text-sm">
                  Sales & Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/services/finance-accounting" className="text-text-muted hover:text-white transition-colors text-sm">
                  Finance & Accounting
                </Link>
              </li>
              <li>
                <Link href="/services/customer-support" className="text-text-muted hover:text-white transition-colors text-sm">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="/services/ai-data" className="text-text-muted hover:text-white transition-colors text-sm">
                  AI Bots & AI Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Reference Column 1: Contact & About - Expanded to 4 columns */}
          <div className="lg:col-span-4">
            <div className="mb-10">
              <h4 className="text-white font-bold mb-6 text-[15px] uppercase tracking-widest pl-1">Contact</h4>
              <div className="space-y-4">
                {/* Email Card */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
                  <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">Email</div>
                  <a href="mailto:management@admirerx.net" className="text-white text-base font-medium transition-colors block">
                    management@admirerx.net
                  </a>
                </div>

                {/* Phone Card */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
                  <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">Phone</div>
                  <a href="tel:+918826936399" className="text-white text-base font-medium transition-colors block">
                    +91 88269 36399
                  </a>
                </div>

                {/* Address Card */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
                  <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">Address</div>
                  <div className="text-white text-base font-medium">
                    Plot No - 761, Noida Sector 21
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-[11px] font-medium uppercase tracking-widest hover:text-white/30 transition-colors cursor-default">
            &copy; {new Date().getFullYear()} AdmirerX. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-white/20 hover:text-white/60 transition-colors text-[11px] font-medium uppercase tracking-widest"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/20 hover:text-white/60 transition-colors text-[11px] font-medium uppercase tracking-widest"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
