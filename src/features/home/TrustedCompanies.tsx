"use client";

import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";

export default function TrustedCompanies() {
  const companies = [
    "Acme Corp", "GlobalScale", "Nexus", "Vertex", "Quantum", "Apex", "Stellar"
  ];

  return (
    <section className="py-20 border-y border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-background/50 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background to-transparent z-10 pointer-events-none transition-colors duration-500" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background to-transparent z-10 pointer-events-none transition-colors duration-500" />
      
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-center">
        <p className="text-sm font-medium text-slate-400 dark:text-white/40 tracking-widest uppercase transition-colors duration-500">Trusted by industry leaders</p>
      </div>

      <InfiniteMarquee speed="normal">
        <div className="flex gap-16 md:gap-24 px-8 items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {companies.map((company, idx) => (
            <span key={idx} className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white whitespace-nowrap transition-colors duration-500">
              {company}
            </span>
          ))}
        </div>
      </InfiniteMarquee>
    </section>
  );
}