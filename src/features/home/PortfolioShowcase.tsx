"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PortfolioShowcase() {
  const projects = [
    { title: "Fintech Dashboard", category: "Web App", color: "from-blue-500/20 to-purple-500/20" },
    { title: "E-Commerce Mobile", category: "Mobile App", color: "from-emerald-500/20 to-teal-500/20" },
    { title: "AI Content Platform", category: "AI Integration", color: "from-rose-500/20 to-orange-500/20" }
  ];

  return (
    <section className="py-32 bg-transparent relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4 transition-colors duration-500">
              Selected <span className="text-gradient-neon">Works</span>
            </h2>
            <p className="text-slate-500 dark:text-white/60 text-lg max-w-xl transition-colors duration-500">
              A glimpse into the digital experiences we've crafted for forward-thinking brands.
            </p>
          </div>
          <Link href="/portfolio" className="group flex items-center gap-2 text-slate-700 dark:text-white hover:text-[#C31621] dark:hover:text-[#ff4d5a] transition-colors pb-2 border-b border-slate-300 dark:border-white/20 hover:border-[#C31621]/50">
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`w-full aspect-[4/5] rounded-3xl mb-6 overflow-hidden relative bg-slate-100 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] bg-gradient-to-br ${project.color} group-hover:border-slate-300 dark:group-hover:border-white/30 transition-all duration-500`}>
                <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-black/5 dark:group-hover:bg-black/20 transition-colors duration-500" />
                {/* Placeholder for project image */}
                <div className="absolute inset-10 bg-white/30 dark:bg-white/5 rounded-2xl border border-white/40 dark:border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                  <span className="text-slate-400 dark:text-white/20 font-medium tracking-widest uppercase">Project Preview</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-[#C31621] dark:text-[#ff4d5a] mb-2">{project.category}</p>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 dark:group-hover:from-white group-hover:to-slate-400 dark:group-hover:to-white/50 transition-all">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
