"use client";

import { Check } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function PricingPlans() {
  const plans = [
    {
      name: "Startup",
      price: "$5k",
      desc: "Perfect for seed-stage startups needing a solid MVP.",
      features: ["Custom UI/UX Design", "React/Next.js Frontend", "Basic SEO Setup", "1 Month Support"],
      glow: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Full-scale digital transformation for established brands.",
      features: ["Advanced Architecture", "Mobile App (iOS/Android)", "AI Automation Integration", "Dedicated Engineering Team", "24/7 Priority Support"],
      glow: true
    }
  ];

  return (
    <section className="py-32 bg-transparent relative transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6 transition-colors duration-500">
            Simple, transparent <span className="text-gradient-neon">pricing</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-8 md:p-12 rounded-3xl bg-slate-50 dark:bg-white/5 backdrop-blur-xl border shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-colors duration-500 ${plan.glow ? 'border-[#C31621]/30 dark:border-[#C31621]/30 shadow-[0_0_30px_rgba(195,22,33,0.08)] dark:shadow-[0_0_30px_rgba(195,22,33,0.15)] scale-105 z-10' : 'border-slate-200 dark:border-white/10'}`}
            >
              {plan.glow && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#ff4d5a] to-[#C31621] text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-500">{plan.name}</h3>
              <p className="text-slate-500 dark:text-white/60 mb-8 h-12 transition-colors duration-500">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-slate-900 dark:text-white transition-colors duration-500">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-slate-500 dark:text-white/60 transition-colors duration-500">/project</span>}
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600 dark:text-white/80 transition-colors duration-500">
                    <Check className={`w-5 h-5 ${plan.glow ? 'text-[#C31621] dark:text-[#ff4d5a]' : 'text-slate-400 dark:text-white/40'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <MagneticButton className={`w-full ${plan.glow ? 'bg-[#C31621] dark:bg-white text-white dark:text-black hover:bg-[#A11022] dark:hover:bg-slate-200' : 'bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-white/20'}`}>
                Get Started
              </MagneticButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
