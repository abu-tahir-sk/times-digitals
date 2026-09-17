"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-rose-50 to-slate-100 dark:from-[#0a0008] dark:via-[#1a0510] dark:to-[#050510] transition-colors duration-500" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#C31621]/8 dark:bg-[#C31621]/15 rounded-full blur-[120px] animate-[pulse-glow_3s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#540712]/10 dark:bg-[#540712]/20 rounded-full blur-[100px] animate-[pulse-glow_3s_ease-in-out_infinite_1.5s]" />
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] backdrop-blur-xl mb-10 transition-colors duration-500">
            <Zap className="w-3.5 h-3.5 text-[#C31621] dark:text-[#ff4d5a]" />
            <span className="text-slate-500 dark:text-[#A8A8A8] tracking-[0.15em] uppercase text-[10px] font-bold transition-colors duration-500">Ready to transform?</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white leading-[1.05] mb-8 transition-colors duration-500">
            Let&apos;s build something{" "}
            <span className="text-gradient-neon">extraordinary</span>{" "}
            together.
          </h2>

          {/* Subtitle */}
          <p className="text-slate-500 dark:text-white/50 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-medium transition-colors duration-500">
            From concept to launch, we partner with ambitious brands to create digital experiences that drive real growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#540712] to-[#C31621] text-white px-10 py-5 rounded-full font-bold text-lg overflow-hidden shadow-[0_15px_40px_rgba(195,22,33,0.2)] dark:shadow-[0_15px_40px_rgba(195,22,33,0.3)] hover:shadow-[0_20px_60px_rgba(195,22,33,0.4)] dark:hover:shadow-[0_20px_60px_rgba(195,22,33,0.5)] transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-2 tracking-wide">
                Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#C31621] to-[#ff4d5a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
            </Link>
            <Link
              href="/portfolio"
              className="flex items-center justify-center gap-3 bg-white/70 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] backdrop-blur-2xl hover:bg-slate-100 dark:hover:bg-white/[0.06] text-slate-800 dark:text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 tracking-wide"
            >
              See Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
