"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Video, TrendingUp, Sparkles, Code2, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { HoverCard3D } from "@/components/ui/HoverCard3D";

const solutions = [
  {
    id: "web-engineering",
    title: "Web Engineering",
    icon: Monitor,
    description: "High-performance architectures with React, Next.js, and modern tools. Built for scale.",
    features: ["Custom Web Apps", "E-commerce Platforms", "SaaS Development", "API Integration"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    icon: Smartphone,
    description: "Fluid native experiences for iOS & Android that users love and engage with daily.",
    features: ["iOS Development", "Android Development", "React Native", "App Store Optimization"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    icon: Sparkles,
    description: "LLM integration and process automation to supercharge your team's output.",
    features: ["Custom AI Models", "Workflow Automation", "Chatbots & Agents", "Data Analytics"],
    color: "from-violet-500/20 to-fuchsia-500/20"
  },
  {
    id: "video-production",
    title: "Video Production",
    icon: Video,
    description: "Cinematic storytelling and motion graphics to elevate your brand presence.",
    features: ["Brand Films", "Commercials", "2D/3D Animation", "Post-Production"],
    color: "from-rose-500/20 to-pink-500/20"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: TrendingUp,
    description: "Data-driven growth strategies and SEO to maximize your ROI and reach.",
    features: ["SEO Strategy", "Performance Marketing", "Social Media Management", "Content Strategy"],
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: "cloud-architecture",
    title: "Cloud Infrastructure",
    icon: Code2,
    description: "Robust, scalable, and secure cloud environments tailored to your needs.",
    features: ["AWS / Azure / GCP", "DevOps Consulting", "Serverless Architecture", "Security Audits"],
    color: "from-slate-500/20 to-zinc-500/20"
  }
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen pt-24 pb-32 bg-transparent selection:bg-[#C31621]/20 selection:text-[#ff4d5a]">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C31621]/5 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C31621] to-[#ff4d5a]">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-white/70 font-light leading-relaxed mb-12">
              We deliver end-to-end digital transformation. From strategy and design to engineering and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, i) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={solution.id}
              >
                <HoverCard3D className="h-full">
                  <div className="h-full p-8 md:p-10 bg-slate-50 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-3xl group flex flex-col transition-colors duration-500 relative overflow-hidden">
                    {/* Decorative Gradient */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${solution.color} rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2`} />
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center mb-8 border border-slate-200 dark:border-white/10 shadow-sm group-hover:scale-110 group-hover:border-[#C31621]/30 transition-all duration-500">
                        <solution.icon className="w-7 h-7 text-slate-600 dark:text-white group-hover:text-[#C31621] dark:group-hover:text-[#ff4d5a] transition-colors" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-[#C31621] dark:group-hover:text-[#ff4d5a] transition-colors">
                        {solution.title}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-white/60 leading-relaxed mb-8">
                        {solution.description}
                      </p>
                      
                      <ul className="space-y-3 mb-10 mt-auto">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-700 dark:text-white/70">
                            <CheckCircle2 className="w-4 h-4 text-[#C31621] dark:text-[#ff4d5a] mr-3 shrink-0 opacity-70" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Link 
                        href={`/services/${solution.id}`}
                        className="mt-auto inline-flex items-center text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#C31621] dark:group-hover:text-[#ff4d5a] transition-colors"
                      >
                        Explore Solution <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </HoverCard3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 mt-10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] p-12 md:p-20 text-center bg-gradient-to-br from-slate-900 to-slate-800 dark:from-white/5 dark:to-white/10 relative overflow-hidden border border-slate-800 dark:border-white/10 shadow-2xl"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#C31621]/20 blur-[100px] opacity-50 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to transform your business?
              </h2>
              <p className="text-xl text-slate-300 dark:text-white/70 mb-10 max-w-2xl mx-auto">
                Let's discuss how our solutions can help you achieve your goals and outpace the competition.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-[#C31621] text-white hover:bg-[#ff4d5a] transition-colors shadow-lg shadow-[#C31621]/25 hover:shadow-xl hover:shadow-[#C31621]/40 hover:-translate-y-1 transform duration-300"
              >
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
