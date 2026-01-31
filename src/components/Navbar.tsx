"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/careers", label: "Careers" },
  { href: "/partner", label: "Partner With Us" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  {
    category: "BPO Services",
    items: [
      "Call Center Solution",
      "Cloud Contact Center",
      "Blended Call Center",
      "Outbound Call Center",
      "Inbound Call Center",
      "Automated Telemarketing",
    ],
  },
  {
    category: "Recruitment & Hiring Services",
    items: [
      "End-to-End Recruitment",
      "Mass Hiring",
      "Executive Search",
      "IT & Technical Recruitment",
      "Temporary & Contract Staffing",
      "Background Verification",
      "Onboarding Support",
    ],
  },
  {
    category: "Web Development Services",
    items: [
      "Custom Website Development",
      "Full-Stack Development",
      "CMS Development",
      "Web Application Development",
      "Progressive Web Apps",
    ],
  },
  {
    category: "AI Bots & AI Integrations",
    items: [
      "AI Chatbots & Voice Agents",
      "AI Integrations",
      "Automated Workflows",
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-4 sm:px-6 lg:px-8",
        scrolled ? "pt-4" : "pt-6"
      )}
    >
      <nav
        className={cn(
          "max-w-7xl mx-auto rounded-full transition-all duration-500 px-4 sm:px-6 py-2 backdrop-blur-2xl saturate-[1.8] shadow-2xl",
          (scrolled || isOpen)
            ? "bg-black/60 border border-white/20 backdrop-blur-3xl"
            : "bg-white/[0.03] border border-white/10"
        )}
      >
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white">
              Admirer<span className="text-white/40 group-hover:text-white transition-colors duration-500">X</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.label === "Our Services") {
                return (
                  <div key={link.href} className="relative group">
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full relative outline-none",
                        isActive
                          ? "text-white bg-white/10"
                          : "text-white/60 hover:text-white hover:bg-white/5 py-4"
                      )}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-auto max-w-[90vw] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="bg-black backdrop-blur-[80px] saturate-[1.8] border border-white/20 rounded-3xl p-6 shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden min-w-[800px] ring-1 ring-white/10">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none" />
                        <div className="grid grid-cols-4 gap-6 relative z-10">
                          {services.map((section, idx) => (
                            <div key={idx} className="flex flex-col h-full">
                              <h3 className="text-white font-semibold text-base border-b border-white/20 pb-2 mb-3 min-h-[60px] flex items-center">
                                {section.category}
                              </h3>
                              <ul className="space-y-1 flex-1">
                                {section.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Link
                                      href="/services"
                                      className="text-white/90 hover:text-white text-sm transition-colors duration-200 block py-1.5"
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full relative",
                    isActive
                      ? "text-white bg-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-0 rounded-full border border-white/20"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center">
            <Button
              asChild
              className="bg-white hover:bg-white/90 text-black font-bold rounded-full px-6 h-10 text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
            >
              <a
                href="https://wa.me/918826936399?text=Hi%2C%20I%27m%20interested%20in%20finding%20out%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-4 z-50"
          >
            <div className="mobile-menu-panel rounded-[2.5rem] overflow-hidden">
              <div className="flex flex-col py-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  if (link.label === "Our Services") {
                    return (
                      <div key={link.href} className="flex flex-col">
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className={cn(
                            "mobile-nav-link flex items-center justify-between w-full",
                            isActive || isMobileServicesOpen
                              ? "text-white bg-white/10"
                              : "text-white/70 hover:text-white"
                          )}
                        >
                          {link.label}
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform duration-300",
                              isMobileServicesOpen ? "rotate-180" : ""
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-white/5"
                            >
                              <div className="px-6 py-4 space-y-6">
                                {services.map((section, idx) => (
                                  <div key={idx} className="space-y-3">
                                    <h4 className="text-white font-medium text-sm border-b border-white/10 pb-2">
                                      {section.category}
                                    </h4>
                                    <ul className="space-y-2 ml-2 border-l border-white/10 pl-3">
                                      {section.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                          <Link
                                            href="/services"
                                            className="text-white/60 hover:text-white text-sm block py-1"
                                            onClick={() => setIsOpen(false)}
                                          >
                                            {item}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "mobile-nav-link",
                        isActive
                          ? "text-white bg-white/10"
                          : "text-white/70 hover:text-white"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="p-6 pt-2 pb-8">
                <Button
                  asChild
                  className="w-full bg-white hover:bg-white/90 text-black font-bold rounded-2xl h-14 text-base shadow-xl"
                >
                  <a
                    href="https://wa.me/918826936399?text=Hi%2C%20I%27m%20interested%20in%20finding%20out%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2"
                  >
                    Book Appointment
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
