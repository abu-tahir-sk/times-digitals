"use client";

import { motion } from "framer-motion";
import { HoverCard3D } from "@/components/ui/HoverCard3D";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "They completely redefined our digital presence. Our conversion rates doubled within the first month of launch.",
      author: "Sarah Jenkins",
      role: "CMO at Quantum"
    },
    {
      quote: "The engineering quality is unmatched. The platform scales effortlessly, and the UI is incredibly smooth.",
      author: "David Chen",
      role: "CTO at Nexus"
    },
    {
      quote: "True partners in innovation. Their AI automation solutions saved us countless hours of manual work.",
      author: "Elena Rodriguez",
      role: "VP Operations at Vertex"
    }
  ];

  return (
    <section className="py-32 bg-transparent relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6 transition-colors duration-500">
            Client <span className="text-gradient-neon">Stories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <HoverCard3D key={i}>
              <div className="p-8 h-full bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-3xl relative transition-colors duration-500">
                {/* Quote Icon */}
                <div className="text-5xl font-serif text-slate-200 dark:text-white/10 absolute top-4 left-6 transition-colors duration-500">&quot;</div>
                <p className="text-slate-600 dark:text-white/80 text-lg leading-relaxed mb-8 relative z-10 mt-6 transition-colors duration-500">
                  {test.quote}
                </p>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold transition-colors duration-500">{test.author}</h4>
                  <p className="text-slate-400 dark:text-white/40 text-sm transition-colors duration-500">{test.role}</p>
                </div>
              </div>
            </HoverCard3D>
          ))}
        </div>
      </div>
    </section>
  );
}
