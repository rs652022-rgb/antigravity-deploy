"use client";

import { useEffect } from "react";

export default function UnicornHero() {
    useEffect(() => {
        (function () {
            var u = (window as any).UnicornStudio;
            if (u && u.init) {
                if (document.readyState === "loading") {
                    document.addEventListener("DOMContentLoaded", function () { u.init() })
                } else { u.init() }
            } else {
                (window as any).UnicornStudio = { isInitialized: !1 };
                var i = document.createElement("script");
                i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js";
                i.onload = function () {
                    if (document.readyState === "loading") {
                        document.addEventListener("DOMContentLoaded", function () { (window as any).UnicornStudio.init() })
                    } else { (window as any).UnicornStudio.init() }
                };
                (document.head || document.body).appendChild(i);
            }
        })();
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
            {/* CSS to forcefully hide Unicorn Studio branding, watermarks, or attribution tags */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    /* Target common classes used by Unicorn Studio for branding */
                    [class*="unicorn-studio-branding"],
                    [class*="unicorn-watermark"],
                    a[href*="unicorn.studio"],
                    .unicorn-studio-badge,
                    .us-branding {
                        display: none !important;
                        opacity: 0 !important;
                        visibility: hidden !important;
                        pointer-events: none !important;
                    }
                `
            }} />

            <div
                className="w-full h-full scale-105"
                style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '100vh',
                }}
                data-us-project="Rgc66Wgwer1HG25tVgJa"
            />
        </div>
    );
}
