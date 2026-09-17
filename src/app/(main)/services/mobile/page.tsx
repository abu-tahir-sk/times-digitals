"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Smartphone, TrendingUp, Layers, Zap, Apple, PlayCircle, AppWindow, SmartphoneNfc } from "lucide-react";
import Link from "next/link";
import { HoverCard3D } from "@/components/ui/HoverCard3D";

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

export default function MobileAppDevelopmentPage() {
  const [data, setData] = useState<FetchedServiceData | null>(null);
  const [loading, setLoading] = useState(true);

  // FETCH FROM OUR BACKEND API
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/services/mobile");
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
      case "smartphone": return <Smartphone className="w-6 h-6" />;
      case "zap": return <Zap className="w-6 h-6" />;
      case "layers": return <Layers className="w-6 h-6" />;
      case "trendingup": return <TrendingUp className="w-6 h-6" />;
      default: return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-transparent selection:bg-[#C31621]/20 selection:text-[#ff4d5a] font-sans">
      
      {/* 1. CUSTOM INTERACTIVE HERO SECTION */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden">
        {/* Dynamic Glowing Orbs */}
        <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-[#540712]/50 rounded-full blur-[150px] animate-[spin_15s_linear_infinite] opacity-60"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#C31621]/30 rounded-full blur-[180px] animate-[pulse_8s_ease-in-out_infinite] opacity-50"></div>
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Hero Content */}
          <div className="flex flex-col items-start text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 shadow-sm">
              <Smartphone className="w-3.5 h-3.5 text-[#C31621]" />
              <span className="text-[#A8A8A8] tracking-[0.15em] uppercase text-[10px] font-bold">Premium {data.title}</span>
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[1.05] mb-8">
              {data.heroHeadline}
            </motion.h1>
            
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-white/60 max-w-xl font-medium leading-relaxed mb-12">
              {data.heroSubheadline} From sleek consumer apps to complex enterprise mobility solutions.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-5 items-center">
              <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#540712] to-[#C31621] text-white px-9 py-4.5 rounded-full font-bold shadow-[0_10px_30px_rgba(195,22,33,0.3)] hover:shadow-[0_15px_40px_rgba(195,22,33,0.6)] transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2 tracking-wide">
                  Start Mobile App Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </Link>
              
              <div className="flex gap-4 items-center pl-2">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-black border-2 border-[#1a1a1a] flex items-center justify-center"><Apple className="w-4 h-4 text-white" /></div>
                  <div className="w-10 h-10 rounded-full bg-black border-2 border-[#1a1a1a] flex items-center justify-center"><PlayCircle className="w-4 h-4 text-green-400" /></div>
                </div>
                <span className="text-sm font-medium text-white/50">iOS & Android</span>
              </div>
            </motion.div>
          </div>

          {/* Custom 3D Mobile Phone Interactive Element */}
          <motion.div initial={{ opacity: 0, scale: 0.9, rotateY: 15 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 1, type: "spring" }} className="relative h-[650px] w-full hidden lg:flex justify-center perspective-1000">
            <div className="relative w-[320px] h-[650px] bg-black rounded-[50px] border-[8px] border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_0_10px_rgba(255,255,255,0.1)] overflow-hidden" style={{ transform: "rotateY(-15deg) rotateX(10deg)" }}>
              {/* Dynamic Island Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30 flex items-center justify-end px-3">
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
              
              {/* App Screen Content */}
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black z-10 pt-16 px-6 overflow-hidden">
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="space-y-6">
                  
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-white/40">Good Morning,</p>
                      <h3 className="text-xl font-bold text-white">Client</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#540712] to-[#C31621] p-0.5">
                      <div className="w-full h-full bg-black rounded-full border-2 border-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Performance Card */}
                  <div className="w-full h-32 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-5 relative overflow-hidden backdrop-blur-md">
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#C31621]/30 rounded-full blur-xl"></div>
                    <p className="text-sm text-white/60 mb-1">Active Users</p>
                    <h2 className="text-4xl font-bold text-white mb-2">12,450</h2>
                    <div className="flex items-center gap-1 text-green-400 text-xs font-semibold">
                      <TrendingUp className="w-3 h-3" /> +24% this week
                    </div>
                  </div>
                  
                  {/* Action Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-28 rounded-3xl bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors cursor-pointer">
                      <AppWindow className="w-7 h-7 text-[#ff4d5a]" />
                      <span className="text-xs text-white/80 font-medium">Analytics</span>
                    </div>
                    <div className="h-28 rounded-3xl bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors cursor-pointer">
                      <SmartphoneNfc className="w-7 h-7 text-[#ff4d5a]" />
                      <span className="text-xs text-white/80 font-medium">Payments</span>
                    </div>
                  </div>
                  
                </motion.div>
                
                {/* Floating Bottom Nav */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-around px-2 z-20">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white"><Apple className="w-5 h-5" /></div>
                  <div className="w-12 h-12 rounded-full bg-[#C31621] flex items-center justify-center text-white shadow-[0_0_15px_rgba(195,22,33,0.5)]"><PlayCircle className="w-5 h-5" /></div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white/40"><Layers className="w-5 h-5" /></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CUSTOM TECH STACK SHOWCASE */}
      <section className="py-24 relative z-10 border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold tracking-widest uppercase text-[#C31621] mb-8">World-Class Mobile Stack</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {data.technologies.map((tech, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 shadow-sm hover:border-[#C31621]/40 hover:bg-[#C31621]/10 transition-colors cursor-default"
              >
                <Smartphone className="w-5 h-5 text-white/40" />
                <span className="font-bold text-white text-lg tracking-wide">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NATIVE PERFORMANCE METRICS */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-indigo-600 mb-4">60</div>
              <h4 className="text-white font-bold text-xl mb-2">Frames Per Second</h4>
              <p className="text-white/50 text-sm">Buttery smooth UI animations.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-cyan-600 mb-4">99%</div>
              <h4 className="text-white font-bold text-xl mb-2">Crash-Free Rate</h4>
              <p className="text-white/50 text-sm">Highly stable native architecture.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ff4d5a] to-[#C31621] mb-4">2x</div>
              <h4 className="text-white font-bold text-xl mb-2">Faster Time to Market</h4>
              <p className="text-white/50 text-sm">With our optimized cross-platform pipelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURES GRID (Mapped from Backend Data) */}
      <section className="py-24 relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Why Choose Our {data.title}</h2>
            <p className="text-white/60 text-lg">Uncompromising quality for your users' pockets.</p>
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

    </div>
  );
}
