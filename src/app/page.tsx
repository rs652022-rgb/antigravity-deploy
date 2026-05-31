"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "I didn't expect such simple practices to make such a big difference. Truly life-changing.",
    name: "Lia B.",
    title: "Team Lead",
    rating: 4.0,
    source: "Mindful",
    stars: 4,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "These practices are wonderful — they helped me find peace in everyday chaos.",
    name: "Angelo A.",
    title: "Actor",
    rating: 5.0,
    source: "Google",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "Absolutely love these meditations. They've brought calm and focus back into my life.",
    name: "Victoria P.",
    title: "Teacher",
    rating: 4.7,
    source: "Clutch",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "These sessions helped me reconnect with myself. I feel more present and balanced.",
    name: "Joel M.",
    title: "Instructor",
    rating: 4.5,
    source: "Trustpilot",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face"
  }
];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Mouse move event for volumetric spotlight follow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="homepage bg-[#03050d] text-white min-h-screen relative overflow-hidden font-sans selection:bg-white/20 selection:text-white">
      {/* 1. Volumetric Mouse-Follow Spotlight */}
      <div 
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-1000 hidden md:block"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.07), transparent 75%)`,
        }}
      />

      {/* 2. Atmospheric Volumetric Lighting Glows */}
      <div className="absolute top-[-10%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-sky-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/10 blur-[150px] pointer-events-none" />

      {/* 3. Starry Stardust Background System */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[15%] left-[25%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-ping duration-1000" />
        <div className="absolute top-[28%] left-[70%] w-0.5 h-0.5 bg-white rounded-full opacity-60" />
        <div className="absolute top-[42%] left-[48%] w-1 h-1 bg-white rounded-full animate-pulse duration-[3000ms]" />
        <div className="absolute top-[8%] left-[82%] w-[1.5px] h-[1.5px] bg-white rounded-full opacity-70 animate-ping duration-[2000ms]" />
        <div className="absolute top-[65%] left-[12%] w-0.5 h-0.5 bg-white rounded-full opacity-40" />
        <div className="absolute top-[80%] left-[55%] w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-[55%] left-[88%] w-[1.5px] h-[1.5px] bg-white/70 rounded-full animate-ping duration-1000" />
      </div>

      {/* 4. Background Cinematic Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/meditation-hero.png"
          alt="Starry sky meditating backdrop"
          fill
          className="object-cover object-bottom opacity-[0.92]"
          priority
        />
        {/* Soft custom vignettes to seal the emotional layout */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03050d] via-transparent to-transparent opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_transparent_40%,_#03050d_100%)] opacity-80" />
      </div>

      {/* 5. Main Viewport Content Block */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-16 flex flex-col justify-between min-h-screen gap-20">
        
        {/* Hero Area */}
        <div className="flex-1 flex flex-col justify-center items-center text-center mt-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center max-w-4xl"
          >
            {/* Social Proof Badging */}
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-sm mb-10 hover:border-white/20 transition-all duration-300">
              <div className="flex -space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces" 
                  alt="Reviewer 1" 
                  className="w-6 h-6 rounded-full border border-white/20 object-cover" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces" 
                  alt="Reviewer 2" 
                  className="w-6 h-6 rounded-full border border-white/20 object-cover" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces" 
                  alt="Reviewer 3" 
                  className="w-6 h-6 rounded-full border border-white/20 object-cover" 
                />
              </div>
              <span className="text-[11px] font-medium text-white/70 tracking-wider">
                7k are already with us
              </span>
            </div>

            {/* Cinematic Large Heading */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[88px] font-extralight tracking-tight text-white mb-8 leading-[1.08] font-sans">
              Breathe in peace <br />
              <span className="font-light text-white/95">Breathe out the world</span>
            </h1>

            {/* Glowing Subtext */}
            <p className="text-white/60 text-base sm:text-lg md:text-[19px] font-light leading-relaxed max-w-2xl mx-auto mb-12 tracking-wide font-sans">
              Designed to bring clarity, balance, and quiet focus to your everyday life.
            </p>

            {/* Premium CTA Input Container */}
            <div className="w-full max-w-lg mx-auto p-1.5 bg-white/[0.02] border border-white/10 rounded-full backdrop-blur-xl flex items-center justify-between group hover:border-white/20 transition-all duration-300 shadow-2xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-none outline-none pl-6 text-sm text-white placeholder-white/35 focus:ring-0 focus:border-none focus:outline-none"
              />
              <Button
                asChild
                className="rounded-full bg-white hover:bg-gray-100 text-black font-semibold px-8 py-3 text-sm transition-transform duration-300 hover:scale-[1.03] active:scale-95 flex items-center gap-1.5 h-11"
              >
                <Link href="/contact" className="flex items-center gap-1">
                  Try for free <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Block */}
        <div id="testimonials" className="w-full mt-auto">
          <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs text-white/40 tracking-[0.2em] font-medium font-sans">“</span>
              <h2 className="text-[17px] font-light tracking-widest uppercase text-white/80">
                What They Say About Us
              </h2>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setCarouselIndex((prev) => Math.max(0, prev - 1))}
                disabled={carouselIndex === 0}
                className="w-9 h-9 rounded-full border border-white/10 hover:border-white/25 flex items-center justify-center text-white/50 hover:text-white transition-all disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setCarouselIndex((prev) => Math.min(testimonials.length - 1, prev + 1))}
                disabled={carouselIndex === testimonials.length - 1}
                className="w-9 h-9 rounded-full border border-white/10 hover:border-white/25 flex items-center justify-center text-white/50 hover:text-white transition-all disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Cards Carousel Grid */}
          <div className="overflow-hidden">
            <motion.div 
              animate={{ x: `-${carouselIndex * 25}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex gap-6 w-[400%] md:w-[200%] lg:w-full lg:grid lg:grid-cols-4 lg:transform-none"
            >
              {testimonials.map((item, index) => (
                <div 
                  key={index}
                  className="w-full bg-[#ffffff]/[0.01] border border-[#ffffff]/[0.06] backdrop-blur-2xl rounded-[2rem] p-8 flex flex-col justify-between h-[230px] hover:border-sky-500/20 transition-all duration-300 group cursor-default"
                >
                  <p className="text-[15px] font-sans font-light leading-relaxed text-[#ffffff]/80 group-hover:text-white transition-colors duration-300">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                    {/* User Profile Info */}
                    <div className="flex items-center gap-3">
                      <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className="w-9 h-9 rounded-full border border-white/10 object-cover" 
                      />
                      <div>
                        <div className="text-xs font-semibold text-white/95">{item.name}</div>
                        <div className="text-[10px] text-white/40">{item.title}</div>
                      </div>
                    </div>

                    {/* Ratings */}
                    <div className="text-right">
                      <div className="text-xs font-semibold text-white/90 flex items-center gap-1.5 justify-end">
                        {item.rating.toFixed(1)} 
                        <div className="flex gap-0.5 text-amber-400">
                          {Array.from({ length: item.stars }).map((_, s) => (
                            <Star key={s} className="w-2.5 h-2.5 fill-current" />
                          ))}
                        </div>
                      </div>
                      <div className="text-[9px] uppercase tracking-wider text-white/30 font-semibold">{item.source}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Active slide pagination dots */}
          <div className="flex justify-center gap-2 mt-8 lg:hidden">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCarouselIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  carouselIndex === idx ? "bg-white w-6" : "bg-white/20 w-1.5"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
