import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { HoverCard3D } from "@/components/ui/HoverCard3D";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesData[params.slug];
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: `${service.title} | Time Digitals`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  // Fetch the service data from the API using the dynamic slug
  const res = await fetch(`/api/services/${params.slug}`);
  if (!res.ok) throw new Error("Failed to fetch");
  const json = await res.json();
  setData(json);

  return (
    <div className="min-h-screen bg-transparent selection:bg-[#C31621]/20 selection:text-[#ff4d5a] font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.15] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-[#540712]/40 dark:bg-[#540712]/50 rounded-full blur-[150px] dark:blur-[180px] pointer-events-none animate-[spin_25s_linear_infinite] opacity-60"></div>
        <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-[#C31621]/20 dark:bg-[#C31621]/30 rounded-full blur-[150px] dark:blur-[200px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite] opacity-60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] backdrop-blur-xl mb-8 shadow-sm">
            <span className="text-slate-600 dark:text-[#A8A8A8] tracking-[0.15em] uppercase text-[10px] font-bold">{service.title}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white leading-[1.05] mb-8 max-w-4xl mx-auto">
            {service.heroHeadline}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-white/60 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
            {service.heroSubheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
            <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#540712] to-[#C31621] text-white px-10 py-4.5 rounded-full font-bold shadow-[0_10px_30px_rgba(195,22,33,0.3)] hover:shadow-[0_15px_40px_rgba(195,22,33,0.6)] transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2 tracking-wide">
                Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURES GRID */}
      <section className="py-24 relative z-10 border-t border-slate-200 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Core Capabilities</h2>
            <p className="text-slate-500 dark:text-white/60">What makes our {service.title.toLowerCase()} service different.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, idx) => (
              <HoverCard3D key={idx}>
                <div className="h-full p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:border-[#C31621]/40 dark:hover:border-[#C31621]/40 transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-black/50 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#C31621]/10 group-hover:border-[#C31621]/30 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-slate-500 dark:text-white/60 group-hover:text-[#C31621] dark:group-hover:text-[#ff4d5a] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#C31621] dark:group-hover:text-[#ff4d5a] transition-colors">{feature.title}</h3>
                  <p className="text-slate-500 dark:text-white/50 leading-relaxed">{feature.description}</p>
                </div>
              </HoverCard3D>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS TIMELINE */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Our Process</h2>
            <p className="text-slate-500 dark:text-white/60">How we deliver excellence, step by step.</p>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#C31621]/50 before:to-transparent">
            {service.process.map((step, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C31621] text-white shadow-[0_0_15px_rgba(195,22,33,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                  0{idx + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-slate-500 dark:text-white/60">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECH STACK */}
      <section className="py-24 relative z-10 border-t border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-black/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-10">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:border-[#C31621]/30 dark:hover:border-[#C31621]/40 transition-colors cursor-default">
                <CheckCircle2 className="w-4 h-4 text-[#C31621] dark:text-[#ff4d5a]" />
                <span className="font-semibold text-slate-700 dark:text-white/80">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
