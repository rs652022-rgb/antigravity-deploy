"use client";

import React, { useEffect } from "react";
import Script from "next/script";

declare global {
    interface Window {
        UnicornStudio: any;
    }
}

export default function UnicornHero() {
    useEffect(() => {
        // Initial check in case script is already loaded
        if (window.UnicornStudio && window.UnicornStudio.init) {
            window.UnicornStudio.init();
        }
    }, []);

    return (
        <>
            <Script
                src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.3/dist/unicornStudio.umd.js"
                strategy="lazyOnload"
                onLoad={() => {
                    if (window.UnicornStudio && window.UnicornStudio.init) {
                        window.UnicornStudio.init();
                    }
                }}
            />
            <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
                <div
                    data-us-project="0qml7O2SrHq2dw9FglbV"
                    className="w-full h-full scale-105 opacity-80"
                    style={{ width: '100vw', height: '100vh' }}
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-10" />
            </div>
        </>
    );
}
