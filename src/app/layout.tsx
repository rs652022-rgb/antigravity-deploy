import "./globals.css";
import { NavbarWrapper } from "@/components/NavbarWrapper";
import { FooterWrapper } from "@/components/FooterWrapper";
import { Plus_Jakarta_Sans, Syne, Inter } from "next/font/google";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const GlobalBackground = dynamic(
  () => import("@/components/GlobalBackground").then((mod) => mod.GlobalBackground),
  { ssr: false }
);

const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), {
  ssr: false,
});

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://admirerx.net'),
  title: "AdmirerX – BPO & AI-Powered Digital Transformation Services in India",

  description:
    "AdmirerX delivers BPO and AI-powered digital transformation services, helping businesses scale operations, enhance customer experience, and drive efficiency.",

  keywords: [
    "BPO services",
    "AI powered digital transformation",
    "Call center outsourcing",
    "Customer experience outsourcing",
    "AI automation services",
    "India BPO",
  ],

  authors: [{ name: "AdmirerX" }],

  openGraph: {
    title: "AdmirerX – BPO & AI-Powered Digital Transformation Services in India",
    description:
      "BPO and AI-powered digital transformation services to optimize operations, automate workflows, and enhance customer engagement.",
    url: "https://admirerx.net",
    siteName: "AdmirerX",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AdmirerX – BPO & AI-Powered Digital Transformation Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AdmirerX – BPO & AI-Powered Digital Transformation Services",
    description:
      "Transform your business with AdmirerX’s BPO and AI-powered digital transformation solutions.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};


// import WhatsAppButtonWrapper from "@/components/WhatsAppButtonWrapper"; // Optional: Uncomment if available/desired


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontDisplay.variable} ${fontInter.variable} bg-black text-white antialiased selection:bg-indigo-500/30 selection:text-indigo-200`}>
        {/* Global Ambient Background */}
        {/* Global Ambient Background */}
        <GlobalBackground />
        <NavbarWrapper />
        {children}
        <WhatsAppButton />
        <FooterWrapper />
      </body>
    </html >
  );
}
