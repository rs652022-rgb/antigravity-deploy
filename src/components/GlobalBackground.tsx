"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function GlobalBackground() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            const { clientWidth, clientHeight } = document.documentElement;
            // Get normalized mouse position (-1 to 1)
            const x = (e.clientX / clientWidth) * 2 - 1;
            const y = (e.clientY / clientHeight) * 2 - 1;
            setMousePos({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    if (!mounted || !pathname) return null;

    const isHome = pathname === "/";

    if (isHome) {
        return (
            <div className="fixed inset-0 z-[-1] pointer-events-none bg-black overflow-hidden">
                {/* Global Fixed Background Video */}
                <video
                    src="/bg-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none select-none"
                    style={{ 
                      filter: "brightness(0.35) contrast(1.1) saturate(0.8)",
                      transform: `translate3d(${mousePos.x * -15}px, ${mousePos.y * -15}px, 0) scale(1.05)`,
                      transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      willChange: "transform"
                    }}
                />
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/5 blur-[120px] aura-blob-1" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/5 blur-[120px] aura-blob-2" />
                <div className="absolute top-[30%] left-[20%] w-[60%] h-[60%] rounded-full bg-cyan-900/5 blur-[150px] aura-blob-3" />
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay" />
                {/* Cinematic dark vignette overlay for focus */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,30%,rgba(7,7,7,0.75)_100%)] pointer-events-none" />
            </div>
        );
    }

    // Determine theme based on path
    const getTheme = () => {
        if (pathname.startsWith("/services")) {
            if (pathname.includes("ai-")) {
                // AI & Tech: Deep Violet/Blue Cybernetic feel
                return (
                    <>
                        <div className="absolute inset-0 bg-[#02040a]" />
                        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-indigo-950/40 via-purple-900/10 to-transparent blur-3xl" />
                        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen opacity-40 aura-blob-1" />
                        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] mix-blend-screen opacity-30 aura-blob-2" />
                        <div
                            className="absolute inset-0 opacity-[0.15]"
                            style={{
                                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                                backgroundSize: '40px 40px',
                                maskImage: 'linear-gradient(to bottom, black, transparent)'
                            }}
                        />
                    </>
                );
            }
            // Standard Services: Professional Tech Blue
            return (
                <>
                    <div className="absolute inset-0 bg-[#030508]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#050810] to-[#020305]" />
                    <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[130px] opacity-40 aura-blob-1" />
                    <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/5 rounded-full blur-[100px] opacity-30 aura-blob-2" />
                    <div
                        className="absolute inset-0 opacity-[0.07]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                            backgroundSize: '100px 100px'
                        }}
                    />
                </>
            );
        }

        if (pathname === "/about") {
            // About Us: Trustworthy, Deep Navy/Slate, Calm
            return (
                <>
                    <div className="absolute inset-0 bg-[#0b0c15]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800/20 via-[#0b0c15] to-[#050508]" />
                    <div className="absolute top-[10%] left-[10%] w-[700px] h-[700px] bg-indigo-950/30 rounded-full blur-[120px] opacity-50 aura-blob-1" />
                    <div className="absolute bottom-0 right-0 w-full h-[50%] bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </>
            );
        }

        if (pathname === "/careers") {
            // Careers: Energetic, Growth, subtle Orange/Gold hints in dark
            return (
                <>
                    <div className="absolute inset-0 bg-[#050505]" />
                    <div className="absolute bottom-0 left-0 right-0 h-[80vh] bg-gradient-to-t from-indigo-950/20 via-transparent to-transparent opacity-40" />
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] mix-blend-screen aura-blob-1" />
                    <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-orange-900/5 rounded-full blur-[120px] mix-blend-screen opacity-60 aura-blob-2" /> {/* Subtle warmth */}
                </>
            );
        }

        if (pathname === "/contact" || pathname === "/partner") {
            // Contact/Partner: Welcoming, Central Focus
            return (
                <>
                    <div className="absolute inset-0 bg-[#050507]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-[#050507] to-[#000000]" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.svg')] opacity-[0.02]" />
                    <div className="absolute bottom-0 inset-x-0 h-[300px] bg-gradient-to-t from-black via-transparent to-transparent" />
                </>
            );
        }

        if (pathname === "/privacy" || pathname === "/terms") {
            // Legal: Clean, Minimal, Slate
            return (
                <>
                    <div className="absolute inset-0 bg-[#08080a]" />
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                </>
            );
        }

        // Default Fallback for other sub-pages
        return (
            <>
                <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#030305]" />
                <div className="absolute inset-0 opacity-[0.15]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '4rem 4rem',
                        maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 100%)'
                    }}
                />
                <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-indigo-950/20 via-slate-900/10 to-transparent blur-3xl" />
            </>
        );
    };

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-black">
            {/* Global Fixed Background Video */}
            <video
                src="/bg-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none select-none"
                style={{ 
                  filter: "brightness(0.35) contrast(1.1) saturate(0.8)",
                  transform: `translate3d(${mousePos.x * -15}px, ${mousePos.y * -15}px, 0) scale(1.05)`,
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  willChange: "transform"
                }}
            />
            {getTheme()}
            {/* Consistent Global Noise Overlay for texture */}
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
            {/* Cinematic dark vignette overlay for focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(7,7,7,0.75)_100%)] pointer-events-none" />
        </div>
    );
}
