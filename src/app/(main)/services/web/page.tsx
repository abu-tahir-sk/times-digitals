"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Database, LayoutTemplate, Server, Cpu, Globe } from "lucide-react";
import Link from "next/link";
import { HoverCard3D } from "@/components/ui/HoverCard3D";
import PortfolioShowcase from "@/features/home/PortfolioShowcase";

// Define the shape of our API response
type FetchedServiceData = {
  id: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  features: { title: string; description: string; iconName: string }[];
  technologies: string[];
  process: { title: string; description: string }[];
};

export default function WebDevelopmentPage() {
  const [data, setData] = useState<FetchedServiceData | null>(null);
  const [loading, setLoading] = useState(true);

  // FETCH FROM OUR BACKEND API
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/services/web");
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching service data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-[3px] border-[#C31621] border-t-transparent animate-spin"></div>
      </div>
    );
  }

  // Map string icon names from API back to Lucide components for the UI
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "monitor": return <Globe className="w-6 h-6" />;
      case "layers": return <LayoutTemplate className="w-6 h-6" />;
      case "zap": return <Cpu className="w-6 h-6" />;
      case "shield": return <Server className="w-6 h-6" />;
      default: return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-transparent selection:bg-[#C31621]/20 selection:text-[#ff4d5a] font-sans">
      
      {/* 1. CUSTOM INTERACTIVE HERO SECTION */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden">
        {/* Dynamic Glowing Orbs */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#540712]/40 rounded-full blur-[150px] animate-[spin_20s_linear_infinite] opacity-60"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-[#C31621]/20 rounded-full blur-[180px] animate-[pulse_10s_ease-in-out_infinite] opacity-60"></div>
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Hero Content */}
          <div className="flex flex-col items-start text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 shadow-sm">
              <Code2 className="w-3.5 h-3.5 text-[#C31621]" />
              <span className="text-[#A8A8A8] tracking-[0.15em] uppercase text-[10px] font-bold">Premium {data.title}</span>
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[1.05] mb-8">
              {data.heroHeadline}
            </motion.h1>
            
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-white/60 max-w-xl font-medium leading-relaxed mb-12">
              {data.heroSubheadline} We utilize cutting-edge React & Next.js architectures to build platforms that scale to millions.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex gap-5 items-center">
              <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#540712] to-[#C31621] text-white px-9 py-4.5 rounded-full font-bold shadow-[0_10px_30px_rgba(195,22,33,0.3)] hover:shadow-[0_15px_40px_rgba(195,22,33,0.6)] transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2 tracking-wide">
                  Start Building <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Custom 3D Code-to-Visual Interactive Element */}
          <motion.div initial={{ opacity: 0, scale: 0.9, rotateY: -15 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 1, type: "spring" }} className="relative h-[600px] w-full hidden lg:block perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-black rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col" style={{ transform: "rotateY(-10deg) rotateX(5deg)" }}>
              {/* Fake Mac Window Header */}
              <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 text-[10px] text-white/40 font-mono tracking-widest">page.tsx</div>
              </div>
              
              <div className="flex-1 p-6 relative overflow-hidden font-mono text-sm text-green-400/80">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <motion.div 
                  initial={{ y: 0 }} animate={{ y: -300 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="space-y-2 opacity-50 relative z-0"
                >
                  <p><span className="text-pink-500">import</span> &#123; useState &#125; <span className="text-pink-500">from</span> <span className="text-yellow-300">'react'</span>;</p>
                  <p><span className="text-pink-500">export default function</span> <span className="text-blue-400">App</span>() &#123;</p>
                  <p className="ml-4"><span className="text-pink-500">const</span> [data, setData] = <span className="text-blue-400">useState</span>(null);</p>
                  <p className="ml-4"><span className="text-pink-500">return</span> (</p>
                  <p className="ml-8">&lt;<span className="text-blue-300">main</span> <span className="text-blue-200">className</span>=<span className="text-yellow-300">"bg-black"</span>&gt;</p>
                  <p className="ml-12">&lt;<span className="text-blue-300">HeroSection</span> /&gt;</p>
                  <p className="ml-12">&lt;<span className="text-blue-300">FeaturesGrid</span> /&gt;</p>
                  <p className="ml-8">&lt;/<span className="text-blue-300">main</span>&gt;</p>
                  <p className="ml-4">);</p>
                  <p>&#125;</p>
                  <br/>
                  <p><span className="text-slate-500">// Simulating backend compilation...</span></p>
                  <p><span className="text-pink-500">export async function</span> <span className="text-blue-400">GET</span>(req) &#123;</p>
                  <p className="ml-4"><span className="text-pink-500">const</span> res = <span className="text-pink-500">await</span> <span className="text-blue-400">fetch</span>(<span className="text-yellow-300">'/api/data'</span>);</p>
                  <p className="ml-4"><span className="text-pink-500">return</span> <span className="text-blue-400">Response</span>.json(res);</p>
                  <p>&#125;</p>
                </motion.div>

                {/* Floating UI Elements appearing over the code */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 z-20 flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#540712] to-[#C31621] mb-6 flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-sans font-bold text-2xl tracking-tight mb-2">Compiled Successfully</h3>
                  <p className="text-white/60 font-sans text-sm">Ready for production deployment.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CUSTOM TECH STACK SHOWCASE */}
      <section className="py-24 relative z-10 border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold tracking-widest uppercase text-[#C31621] mb-8">Powered by Modern Tech</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {data.technologies.map((tech, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 shadow-sm hover:border-[#C31621]/40 hover:bg-[#C31621]/10 transition-colors cursor-default"
              >
                <Database className="w-5 h-5 text-white/40" />
                <span className="font-bold text-white text-lg tracking-wide">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE METRICS */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-emerald-600 mb-4">100</div>
              <h4 className="text-white font-bold text-xl mb-2">Performance</h4>
              <p className="text-white/50 text-sm">Sub-second load times.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-indigo-600 mb-4">100</div>
              <h4 className="text-white font-bold text-xl mb-2">Accessibility</h4>
              <p className="text-white/50 text-sm">Usable by everyone.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ff4d5a] to-[#C31621] mb-4">100</div>
              <h4 className="text-white font-bold text-xl mb-2">SEO</h4>
              <p className="text-white/50 text-sm">Built to rank on page one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURES GRID (Mapped from Backend Data) */}
      <section className="py-24 relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Core Engineering Pillars</h2>
            <p className="text-white/60 text-lg">What makes our {data.title.toLowerCase()} service different.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.features.map((feature, idx) => (
              <HoverCard3D key={idx}>
                <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 shadow-sm hover:border-[#C31621]/40 transition-all duration-500 group">
                  <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#C31621]/20 group-hover:border-[#C31621]/40 transition-all duration-300 shadow-inner">
                    {/* Render the dynamically mapped icon */}
                    <div className="text-white/60 group-hover:text-[#ff4d5a] transition-colors">
                      {getIcon(feature.iconName)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff4d5a] transition-colors">{feature.title}</h3>
                  <p className="text-white/50 leading-relaxed">{feature.description}</p>
                </div>
              </HoverCard3D>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LIVE PROJECTS SHOWCASE */}
      <PortfolioShowcase />

    </div>
  );
}
