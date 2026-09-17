"use client";

import { Monitor, Smartphone, Video, TrendingUp, Sparkles, Code2 } from "lucide-react";
import { HoverCard3D } from "@/components/ui/HoverCard3D";
import { motion } from "framer-motion";

export default function ServicesGrid() {
  const services = [
    { 
      title: "Web Engineering", 
      icon: Monitor, 
      desc: "High-performance architectures with React, Next.js, and modern tools. Built for scale.",
      span: "md:col-span-2"
    },
    { 
      title: "Mobile Apps", 
      icon: Smartphone, 
      desc: "Fluid native experiences for iOS & Android.",
      span: "md:col-span-1"
    },
    { 
      title: "AI Automation", 
      icon: Sparkles, 
      desc: "LLM integration and process automation to supercharge your team's output.",
      span: "md:col-span-1"
    },
    { 
      title: "Video Production", 
      icon: Video, 
      desc: "Cinematic storytelling and motion graphics.",
      span: "md:col-span-1"
    },
    { 
      title: "Digital Marketing", 
      icon: TrendingUp, 
      desc: "Data-driven growth strategies and SEO.",
      span: "md:col-span-1"
    }
  ];

  return (
    <section className="py-32 bg-transparent relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-[#C31621] dark:text-[#ff4d5a] font-semibold text-sm tracking-wide uppercase mb-3 transition-colors duration-500">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6 transition-colors duration-500">
            Everything you need to <span className="text-gradient-neon">scale</span>.
          </h3>
          <p className="text-slate-500 dark:text-white/60 text-lg transition-colors duration-500">
            A unified approach to digital product creation. We blend design, engineering, and marketing into one seamless pipeline.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <HoverCard3D key={i} className={service.span}>
              <div className="h-full p-8 md:p-10 bg-slate-50 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-3xl group flex flex-col justify-between transition-colors duration-500">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-8 border border-slate-200 dark:border-white/10 group-hover:bg-[#C31621]/10 group-hover:border-[#C31621]/30 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-slate-500 dark:text-white group-hover:text-[#ff4d5a] transition-colors" />
                  </div>
                  <h4 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-[#C31621] dark:group-hover:text-[#ff4d5a] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-slate-500 dark:text-white/60 leading-relaxed text-lg transition-colors duration-500">
                    {service.desc}
                  </p>
                </div>
              </div>
            </HoverCard3D>
          ))}
        </div>
      </div>
    </section>
  );
}
