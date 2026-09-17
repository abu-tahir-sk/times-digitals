"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Type, Link as LinkIcon, Image as ImageIcon } from "lucide-react";

export default function BannerSettingsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl space-y-8"
    >
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Banner Settings</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Manage your website's hero banner content and layout.</p>
      </div>

      <div className="bg-white dark:bg-[rgba(15,15,15,0.8)] backdrop-blur-xl border border-slate-200 dark:border-[rgba(255,255,255,0.08)] rounded-[32px] p-8 shadow-sm">
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Column - Text Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Type className="w-5 h-5 text-[#C31621]" />
                Banner Content
              </h2>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Headline</label>
                <input 
                  type="text" 
                  defaultValue="Empowering Your Digital Journey"
                  className="w-full bg-slate-50 dark:bg-[rgba(255,255,255,0.02)] border border-slate-200 dark:border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C31621]"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Subheadline</label>
                <textarea 
                  rows={3}
                  defaultValue="We build premium web apps and digital solutions that drive growth for modern businesses."
                  className="w-full bg-slate-50 dark:bg-[rgba(255,255,255,0.02)] border border-slate-200 dark:border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C31621]"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Call to Action (Primary)</label>
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    defaultValue="Get Started"
                    placeholder="Button Text"
                    className="w-1/2 bg-slate-50 dark:bg-[rgba(255,255,255,0.02)] border border-slate-200 dark:border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C31621]"
                  />
                  <div className="w-1/2 relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <LinkIcon className="w-4 h-4 text-slate-400" />
                    </div>
                    <input 
                      type="text" 
                      defaultValue="/contact"
                      placeholder="Link URL"
                      className="w-full bg-slate-50 dark:bg-[rgba(255,255,255,0.02)] border border-slate-200 dark:border-[rgba(255,255,255,0.08)] rounded-xl pl-10 pr-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C31621]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <ImageIcon className="w-5 h-5 text-[#C31621]" />
                Banner Media
              </h2>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Hero Image / Video</label>
                <div className="w-full border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-[#C31621] dark:hover:border-[#C31621] transition-colors rounded-2xl p-8 flex flex-col items-center justify-center min-h-[220px] cursor-pointer group bg-slate-50 dark:bg-[rgba(255,255,255,0.01)]">
                  <div className="text-center">
                    <p className="font-bold text-slate-700 dark:text-slate-300">Drag & Drop Media</p>
                    <p className="text-sm text-slate-500 mt-1">or click to browse files</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200 dark:border-[rgba(255,255,255,0.08)] flex justify-end gap-4">
            <button type="button" className="px-6 py-3 rounded-full font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[rgba(255,255,255,0.05)] transition-colors">
              Reset
            </button>
            <button type="button" className="flex items-center gap-2 bg-gradient-to-r from-[#540712] to-[#C31621] text-white px-8 py-3 rounded-full font-bold shadow-[0_10px_30px_rgba(195,22,33,0.3)] hover:shadow-[0_15px_40px_rgba(195,22,33,0.6)] transition-all transform hover:-translate-y-1">
              <CheckCircle2 className="w-5 h-5" />
              Update Banner
            </button>
          </div>
        </form>

      </div>
    </motion.div>
  );
}
