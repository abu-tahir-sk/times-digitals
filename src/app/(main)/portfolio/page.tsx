"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Web App", "Mobile App", "AI Integration", "Branding"];

const projects = [
  { id: 1, title: "Fintech Dashboard", category: "Web App", color: "from-blue-500/20 to-purple-500/20", description: "A comprehensive financial analytics platform for enterprise users, focusing on real-time data visualization." },
  { id: 2, title: "E-Commerce Mobile", category: "Mobile App", color: "from-emerald-500/20 to-teal-500/20", description: "Native shopping experience with AR product preview capabilities and one-click checkout." },
  { id: 3, title: "AI Content Platform", category: "AI Integration", color: "from-rose-500/20 to-orange-500/20", description: "Generative AI workspace for marketing teams and creators to streamline their content pipeline." },
  { id: 4, title: "SaaS Landing Page", category: "Web App", color: "from-amber-500/20 to-red-500/20", description: "High-converting marketing site for a B2B software company with dynamic animations." },
  { id: 5, title: "HealthTech Portal", category: "Web App", color: "from-cyan-500/20 to-blue-500/20", description: "Secure patient management and telemedicine interface built for modern healthcare providers." },
  { id: 6, title: "Brand Identity", category: "Branding", color: "from-fuchsia-500/20 to-pink-500/20", description: "Complete visual overhaul and design system for a modern startup aiming to disrupt their industry." },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <main className="min-h-screen pt-24 pb-32 bg-transparent selection:bg-[#C31621]/20 selection:text-[#ff4d5a]">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C31621] to-[#ff4d5a]">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-white/70">
              Explore our latest projects and see how we help businesses transform their digital presence with cutting-edge technology and design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#C31621] text-white shadow-lg shadow-[#C31621]/25 scale-105"
                    : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white/60 hover:bg-slate-200 dark:hover:bg-white/10 hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative min-h-[500px]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group cursor-pointer flex flex-col"
              >
                <div className={`w-full aspect-[4/3] rounded-3xl mb-6 overflow-hidden relative bg-slate-100 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] bg-gradient-to-br ${project.color} group-hover:border-[#C31621]/30 transition-all duration-500 flex-shrink-0`}>
                  <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Floating Action Button */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 dark:bg-black/40 backdrop-blur-md rounded-full border border-white/40 dark:border-white/20 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 shadow-xl z-10">
                    <ArrowUpRight className="w-5 h-5 text-slate-800 dark:text-white" />
                  </div>

                  <div className="absolute inset-8 bg-white/40 dark:bg-white/5 rounded-2xl border border-white/50 dark:border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-700 ease-out flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                    <span className="text-slate-600 dark:text-white/40 font-semibold tracking-widest uppercase text-xs mb-3">{project.category}</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white/90 leading-tight">{project.title}</h3>
                  </div>
                </div>
                <div className="flex-grow flex flex-col px-2">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-xs font-bold text-[#C31621] dark:text-[#ff4d5a] uppercase tracking-wider mb-2">{project.category}</p>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#C31621] dark:group-hover:text-[#ff4d5a] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-white/60 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="py-20 text-center w-full absolute top-0 left-0"
            >
              <p className="text-xl text-slate-500 dark:text-white/50">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
