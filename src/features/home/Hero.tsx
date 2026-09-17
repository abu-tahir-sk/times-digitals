"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { 
  ArrowRight, Shield, Smartphone, Video, Sparkles, 
  Monitor, PenTool, Target 
} from "lucide-react";

// --- MAGNETIC BUTTON COMPONENT ---
const MagneticButton = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.25);
    y.set(middleY * 0.25);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: 0, y: 0 }}
      style={{ x: springX, y: springY }}
      className={`relative cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

// --- CINEMATIC 3D PARALLAX CONTAINER ---
const CinematicTilt = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  const mouseXSpring = useSpring(x, { stiffness: 40, damping: 25, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 40, damping: 25, mass: 0.5 });
  
  const rotateX = useTransform(mouseYSpring, [0, 1], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [0, 1], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0.5); y.set(0.5); }}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Safely generate particles on client-side to prevent hydration mismatch
  const [particles, setParticles] = useState<{
    top: string; left: string; opacity: number; scale: number; duration: string; delay: string;
  }[]>([]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Generate cinematic dust particles
    const generatedParticles = [...Array(30)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.4 + 0.1,
      scale: Math.random() * 2 + 0.5,
      duration: `${Math.random() * 20 + 10}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setParticles(generatedParticles);

    return () => lenis.destroy();
  }, []);

  const textContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 30, rotateX: 40, filter: "blur(8px)" },
    visible: { 
      opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 100, damping: 14 }
    },
  };

  const headline = "Building Digital Products That Grow Businesses.";

  const services = [
    { name: "Web Development", icon: Monitor, pos: "top-[10%] left-[5%]", delay: 0.8 },
    { name: "Mobile Apps", icon: Smartphone, pos: "top-[45%] left-[-5%]", delay: 1.0 },
    { name: "Video Editing", icon: Video, pos: "bottom-[15%] left-[10%]", delay: 1.2 },
    { name: "Digital Marketing", icon: Target, pos: "top-[15%] right-[5%]", delay: 0.9 },
    { name: "UI/UX Design", icon: PenTool, pos: "top-[50%] right-[-5%]", delay: 1.1 },
    { name: "AI Solutions", icon: Sparkles, pos: "bottom-[10%] right-[10%]", delay: 1.3 },
  ];

  return (
    <main className="relative min-h-[100vh] text-slate-900 dark:text-[#FFFFFF] overflow-hidden selection:bg-[#C31621]/30 selection:text-white font-sans transition-colors duration-500" ref={containerRef}>
      
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.15] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0 transition-colors duration-500"></div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1800px] pointer-events-none z-0 mix-blend-screen opacity-40 dark:opacity-70 transition-opacity duration-500">
        <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-[#540712]/50 dark:bg-[#540712] rounded-full blur-[150px] dark:blur-[180px] animate-[spin_25s_linear_infinite]"></div>
        <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-[#C31621]/20 dark:bg-[#C31621]/30 rounded-full blur-[150px] dark:blur-[200px] animate-[pulse_12s_ease-in-out_infinite]"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {particles.map((particle, i) => (
          <div 
            key={i} 
            className="absolute bg-[#C31621] dark:bg-white rounded-full shadow-[0_0_8px_#C31621] dark:shadow-[0_0_12px_#C31621]"
            style={{
              width: `${particle.scale}px`, height: `${particle.scale}px`,
              top: particle.top, left: particle.left, opacity: particle.opacity,
              animation: `float ${particle.duration} ease-in-out infinite`,
              animationDelay: particle.delay
            }}
          />
        ))}
      </div>

      {/* 2. MAIN LAYOUT GRID */}
      <div className="relative z-20 max-w-[1700px] mx-auto px-6 lg:px-12 pt-40 pb-24 grid lg:grid-cols-12 gap-12 items-center min-h-[100vh]">
        
        {/* LEFT COLUMN: Typography & CTAs */}
        <div className="lg:col-span-5 flex flex-col items-start perspective-[1000px] z-30 pt-10 lg:pt-0">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-[rgba(255,255,255,0.02)] border border-slate-200 dark:border-[rgba(255,255,255,0.08)] backdrop-blur-3xl mb-10 shadow-[0_10px_30px_rgba(195,22,33,0.05)] dark:shadow-[0_0_30px_rgba(195,22,33,0.15)] relative overflow-hidden group transition-colors duration-500"
          >
            <Shield className="w-3.5 h-3.5 text-[#C31621]" />
            <span className="text-slate-600 dark:text-[#A8A8A8] tracking-[0.15em] uppercase text-[10px] font-bold transition-colors duration-500">Trusted Digital Partner</span>
          </motion.div>
          
          <motion.h1 
            variants={textContainer} initial="hidden" animate="visible"
            className="text-[3.5rem] md:text-[4.5rem] lg:text-[4.2rem] xl:text-[5rem] font-extrabold tracking-tighter leading-[1.05] mb-8 flex flex-wrap"
          >
            {headline.split(" ").map((word, i) => {
              const isHighlight = word === "Digital" || word === "Products";
              return (
                <span key={i} className="flex mr-3 mb-1 overflow-hidden">
                  <motion.span 
                    variants={wordVariant} 
                    className={isHighlight ? "text-transparent bg-clip-text bg-gradient-to-br from-[#ff4d5a] via-[#C31621] to-[#540712] drop-shadow-[0_0_10px_rgba(195,22,33,0.1)] dark:drop-shadow-[0_0_20px_rgba(195,22,33,0.3)]" : "text-slate-900 dark:text-white transition-colors duration-500"}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-slate-600 dark:text-[#A8A8A8] max-w-lg mb-12 font-medium leading-relaxed transition-colors duration-500"
          >
            We design, engineer, and scale premium digital experiences. From intelligent web platforms to high-performance marketing systems.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 1 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mb-16"
          >
            <MagneticButton>
              <div className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#540712] to-[#C31621] text-white px-9 py-4.5 rounded-full font-bold overflow-hidden shadow-[0_10px_30px_rgba(195,22,33,0.2)] dark:shadow-[0_15px_40px_rgba(195,22,33,0.3)] hover:shadow-[0_15px_40px_rgba(195,22,33,0.4)] dark:hover:shadow-[0_20px_60px_rgba(195,22,33,0.6)] transition-all duration-500">
                <span className="relative z-10 flex items-center gap-2 tracking-wide">
                  Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#C31621] to-[#ff4d5a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              </div>
            </MagneticButton>
            <MagneticButton>
              <div className="flex items-center justify-center gap-3 bg-white/60 dark:bg-[rgba(255,255,255,0.02)] border border-slate-200 dark:border-[rgba(255,255,255,0.08)] backdrop-blur-2xl hover:bg-slate-100 dark:hover:bg-[rgba(255,255,255,0.06)] text-slate-900 dark:text-white px-9 py-4.5 rounded-full font-semibold transition-colors duration-300 tracking-wide shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                View Portfolio
              </div>
            </MagneticButton>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.2 }}
            className="w-full border-t border-slate-200 dark:border-[rgba(255,255,255,0.05)] pt-8 flex items-center gap-10 transition-colors duration-500"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-500">150+</span>
              <span className="text-[10px] text-slate-500 dark:text-[#A8A8A8] uppercase tracking-[0.15em] font-bold transition-colors duration-500">Projects Delivered</span>
            </div>
            <div className="h-8 w-px bg-slate-300 dark:bg-white/10 transition-colors duration-500"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-500">98%</span>
              <span className="text-[10px] text-slate-500 dark:text-[#A8A8A8] uppercase tracking-[0.15em] font-bold transition-colors duration-500">Client Satisfaction</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: 3D LAPTOP & SERVICE CARDS */}
        <div className="lg:col-span-7 relative hidden lg:flex justify-center items-center h-[800px] perspective-[3500px] w-full mt-10 lg:mt-0">
          
          <CinematicTilt className="relative w-full h-full flex items-center justify-center">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-[#C31621]/10 dark:bg-[#C31621]/20 blur-[100px] dark:blur-[150px] rounded-full pointer-events-none transition-colors duration-500"></div>

            {/* --- ANIMATED CONNECTION LINES (SVG) --- */}
            <svg className="absolute inset-0 w-full h-full z-0 opacity-40 dark:opacity-50 pointer-events-none transition-opacity duration-500" style={{ transform: "translateZ(-30px)" }}>
              <motion.path d="M450,400 L150,150" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} />
              <motion.path d="M450,400 L100,450" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.1 }} />
              <motion.path d="M450,400 L200,700" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.2 }} />
              
              <motion.path d="M450,400 L750,180" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.3 }} />
              <motion.path d="M450,400 L850,450" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.4 }} />
              <motion.path d="M450,400 L750,650" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.5 }} />
              
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(195,22,33,0.8)" />
                  <stop offset="100%" stopColor="rgba(195,22,33,0.2)" className="dark:stop-color-[rgba(255,255,255,0.2)] stop-color-[#C31621]" />
                </linearGradient>
              </defs>
            </svg>

            {/* --- CENTRAL 3D LAPTOP --- */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateX: 20, y: 30 }} 
              animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }} 
              transition={{ duration: 1.6, delay: 0.4, type: "spring", damping: 25 }}
              className="absolute w-[65%] aspect-[16/10] bg-white dark:bg-black rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.15),0_0_0_8px_#f1f5f9] dark:shadow-[0_50px_100px_rgba(0,0,0,0.9),0_0_0_8px_#1a1a1a,inset_0_2px_4px_rgba(255,255,255,0.4)] overflow-hidden z-30 flex flex-col items-center justify-center border border-slate-300 dark:border-[#333] transition-all duration-500"
              style={{ transformStyle: "preserve-3d", transform: "translateZ(60px)" }}
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-200 dark:bg-[#111] rounded-b-xl z-20 flex items-center justify-center transition-colors duration-500">
                <div className="w-1.5 h-1.5 bg-black dark:bg-[#050505] rounded-full ring-1 ring-black/10 dark:ring-white/10"></div>
              </div>
              
              <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-200 dark:from-[#0A0A0A] dark:to-[#151515] relative overflow-hidden flex flex-col transition-colors duration-500">
                <div className="h-10 border-b border-slate-300 dark:border-[rgba(255,255,255,0.05)] flex items-center px-6 justify-between bg-white/50 dark:bg-[rgba(255,255,255,0.01)] transition-colors duration-500">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#540712] to-[#C31621]"></div>
                  <div className="flex gap-4">
                    <div className="w-10 h-1.5 bg-slate-300 dark:bg-white/10 rounded-full transition-colors duration-500"></div>
                    <div className="w-10 h-1.5 bg-slate-300 dark:bg-white/10 rounded-full transition-colors duration-500"></div>
                    <div className="w-10 h-1.5 bg-slate-300 dark:bg-white/10 rounded-full transition-colors duration-500"></div>
                  </div>
                </div>
                <div className="flex-1 p-8 flex flex-col relative">
                  <div className="w-1/2 h-4 bg-slate-800 dark:bg-white/90 rounded-full mb-3 transition-colors duration-500"></div>
                  <div className="w-2/3 h-2 bg-slate-400 dark:bg-white/20 rounded-full mb-8 transition-colors duration-500"></div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white dark:bg-[rgba(255,255,255,0.02)] border border-slate-200 dark:border-[rgba(255,255,255,0.05)] rounded-xl flex items-center justify-center transition-colors duration-500">
                      <div className="w-10 h-10 rounded-full border-[3px] border-[#C31621] border-t-transparent animate-spin"></div>
                    </div>
                    <div className="h-24 bg-white dark:bg-[rgba(255,255,255,0.02)] border border-slate-200 dark:border-[rgba(255,255,255,0.05)] rounded-xl p-4 flex flex-col gap-2 transition-colors duration-500">
                      <div className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-full transition-colors duration-500"></div>
                      <div className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-full transition-colors duration-500"></div>
                      <div className="w-3/4 h-2 bg-[#ff4d5a]/80 dark:bg-[#ff4d5a]/50 rounded-full mt-auto transition-colors duration-500"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#C31621]/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </motion.div>

            {/* --- 6 FLOATING SERVICE CARDS --- */}
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, delay: service.delay, type: "spring", damping: 20 }}
                className={`absolute ${service.pos} z-40 bg-white/70 dark:bg-[rgba(255,255,255,0.02)] backdrop-blur-2xl border border-slate-200 dark:border-[rgba(255,255,255,0.08)] rounded-2xl p-3 pr-5 shadow-[0_15px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex items-center gap-3 cursor-default group hover:bg-white dark:hover:bg-[rgba(255,255,255,0.05)] transition-all duration-500`}
                style={{ animation: `float ${6 + index}s ease-in-out infinite ${(index * 0.5)}s`, transform: "translateZ(80px)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[rgba(255,255,255,0.03)] border border-slate-200 dark:border-[rgba(255,255,255,0.05)] flex items-center justify-center group-hover:border-[#C31621]/40 group-hover:bg-[#C31621]/10 transition-all duration-300">
                  <service.icon className="w-4 h-4 text-slate-500 dark:text-[#A8A8A8] group-hover:text-[#ff4d5a] transition-colors" />
                </div>
                <span className="text-sm font-bold text-slate-800 dark:text-white tracking-wide transition-colors duration-500">{service.name}</span>
              </motion.div>
            ))}

          </CinematicTilt>
        </div>
      </div>
    </main>
  );
}