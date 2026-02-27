"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { EmailLink } from "@/components/EmailLink";

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-[#0d0b16] pt-32 pb-24 relative overflow-hidden">
      {/* Background Texture/Gradient matching the theme */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]" />
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
            Terms & Conditions
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using our services.
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
                These Terms and Conditions outline the rules and regulations for the use of AdmirerX Private Limited's Website and Services.
              </p>
              <p className="mb-4">
                By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use AdmirerX Private Limited's website or services if you do not accept all of the terms and conditions stated on this page.
              </p>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">Services Description</h2>
              <p className="mb-4">
                AdmirerX Private Limited provides robust business process outsourcing (BPO), artificial intelligence integrations, recruitment services, back-office operations, comprehensive contact centers, and automated enterprise solutions. Certain products and services may have specific independent contracts outlining unique project scopes.
              </p>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">User Responsibilities</h2>
              <p className="mb-4">
                As a user of our website or a client of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Provide true, accurate, current, and complete information regarding your business needs or personal registration details.</li>
                <li>Ensure that your usage of our website and services does not violate any local, state, national, or international laws.</li>
                <li>Maintain the highest standards of safety by refusing to interfere with or disrupt network security features or the servers powering AdmirerX.</li>
              </ul>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">Payments & Pricing</h2>
              <p className="mb-4">
                For services requested and executed through an explicit contract, you agree to remit payment in the timeframe defined in that project's Service Level Agreement (SLA) or invoicing terms. Subscription pricing or individual transaction pricing is subject to independent review by AdmirerX Private Limited. We hold the right to review rates annually.
              </p>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">Intellectual Property</h2>
              <p className="mb-4">
                Unless otherwise stated, AdmirerX Private Limited and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use, subject to restrictions set in these terms and conditions.
              </p>
            </motion.section>

            {/* Section 6 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">Limitation of Liability</h2>
              <p className="mb-4">
                In no event shall AdmirerX Private Limited, nor any of its officers, directors, and employees, be liable for anything arising out of or in any way connected with your use of this Website or the provided Services. AdmirerX Private Limited shall not be legally held liable for any indirect, consequential, or special liability arising out of or in any way related to your use.
              </p>
            </motion.section>

            {/* Section 7 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, a breach of the agreed-upon Terms and Conditions.
              </p>
            </motion.section>

            {/* Section 8 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">Changes to Terms</h2>
              <p className="mb-4">
                We hold the sole right to revise and amend these Terms and Conditions at any time. By continuing to use the Website following any changes, you accept the new policy governing your activities.
              </p>
            </motion.section>

            {/* Section 9 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">Governing Law</h2>
              <p className="mb-4">
                These Terms will be governed by and interpreted in accordance with the local laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts for the resolution of any disputes.
              </p>
            </motion.section>

            {/* Section 10 */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="pt-8 border-t border-white/10 mt-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display tracking-tight">Contact Information</h2>
              <p className="mb-6">
                If you have any inquiries regarding these Terms and Conditions, please contact us at:
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
