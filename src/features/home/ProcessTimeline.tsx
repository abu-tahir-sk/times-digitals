"use client";

import { motion } from "framer-motion";

export default function ProcessTimeline() {
  const steps = [
    { num: "01", title: "Discovery & Strategy", desc: "We map out your business objectives, technical constraints, and user needs to form a solid architecture." },
    { num: "02", title: "Design & Prototyping", desc: "Pixel-perfect UI/UX design focusing on conversion, accessibility, and brand identity." },
    { num: "03", title: "Engineering", desc: "Scalable, secure, and performant code built by senior engineers using modern tech stacks." },
    { num: "04", title: "Launch & Scale", desc: "Rigorous testing, deployment, and ongoing optimization to ensure continuous growth." },
  ];

  return (
    <section className="py-32 bg-transparent relative transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6 transition-colors duration-500">
            The <span className="text-gradient-neon">process</span>.
          </h2>
        </div>

        <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-white/10 before:to-transparent">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-white/20 bg-white dark:bg-black backdrop-blur-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(195,22,33,0.15)] dark:shadow-[0_0_15px_rgba(195,22,33,0.25)] transition-colors duration-500">
                <span className="text-sm font-bold text-[#C31621] dark:text-[#ff4d5a]">{step.num}</span>
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-2xl group-hover:border-slate-300 dark:group-hover:border-white/20 transition-all duration-300">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-500">{step.title}</h4>
                <p className="text-slate-500 dark:text-white/60 transition-colors duration-500">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
