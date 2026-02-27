"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { EmailLink } from "@/components/EmailLink";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0d0b16] pt-32 pb-24 relative overflow-hidden">
      {/* Background Texture/Gradient matching the theme */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Your privacy and trust are important to AdmirerX Private Limited.
          </p>
        </motion.div>

        {/* Premium Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            background: "rgba(20,20,25,0.6)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          }}
          className="p-8 md:p-12 lg:p-14"
        >
          <div className="space-y-12 text-white/80" style={{ lineHeight: 1.8 }}>
            {/* Section 1 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">Introduction</h2>
              <p className="mb-4">
                At AdmirerX Private Limited, we prioritize the protection of your personal information. This Privacy Policy details the types of information we collect when you use our website and services, and how we safeguard that data. By using our platform, you consent to the data practices described in this document.
              </p>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">Information We Collect</h2>
              <p className="mb-4">
                The information we collect may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Personal Identification Data:</strong> Your name, email address (e.g., when you contact management@admirerx.net), phone number, and company details.</li>
                <li><strong>Usage Data:</strong> Information on how you interact with our website, such as IP addresses, browser types, and navigation paths.</li>
                <li><strong>Communication Records:</strong> Messages, queries, or complaints sent to our team.</li>
              </ul>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">How We Use Information</h2>
              <p className="mb-4">
                AdmirerX Private Limited uses your submitted data strictly to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Provide, operate, and maintain our premium BPO and AI services.</li>
                <li>Enhance, personalize, and expand our offerings based on analytics.</li>
                <li>Communicate with you regarding updates, support, and administrative matters.</li>
                <li>Prevent and address technical or security issues.</li>
              </ul>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">Data Protection</h2>
              <p className="mb-4">
                We hold ourselves to strict data protection standards. We do not sell, rent, or trade your personal information to outside parties. Your data is only shared with trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
              </p>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">Cookies Policy</h2>
              <p className="mb-4">
                Our website uses "cookies" to enhance user experience. A cookie is a small text file placed on your device to gather standard internet log information and visitor behavior information. You can configure your browser to decline cookies, but this may limit your ability to use certain features of our site effectively.
              </p>
            </motion.section>

            {/* Section 6 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">Third-Party Services</h2>
              <p className="mb-4">
                Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites. Let it be known, nonetheless, that we seek to protect the integrity of our site and welcome any feedback about these external links.
              </p>
            </motion.section>

            {/* Section 7 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">Data Security</h2>
              <p className="mb-4">
                AdmirerX Private Limited employs state-of-the-art enterprise-grade security measures to safeguard against unauthorized access, alteration, disclosure, or destruction of your personal processing data. Security is paramount to the services we provide across the globe.
              </p>
            </motion.section>

            {/* Section 8 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">Your Rights</h2>
              <p className="mb-4">
                Depending on your regional jurisdiction, you may possess specific rights related to your personal data, including the right to request access, correction, or deletion of your information. Contact our administration if you wish to exercise these rights.
              </p>
            </motion.section>

            {/* Section 9 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="pt-8 border-t border-white/10 mt-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">Contact Information</h2>
              <p className="mb-6">
                If you have any questions regarding this Privacy Policy, please get in touch with us at:
              </p>
              <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                <p className="font-bold text-white mb-2 text-xl">AdmirerX Private Limited</p>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <span className="text-white/60">Email:</span>
                    <EmailLink encodedUser="bWFuYWdlbWVudA==" encodedDomain="YWRtaXJlcngubmV0" className="text-purple-400 hover:text-purple-300 transition-colors" />
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>

        <div className="text-center mt-12 mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs">
            <span>←</span> Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
