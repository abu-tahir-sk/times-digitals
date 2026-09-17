"use client";

import { motion } from "framer-motion";
import { Upload, Image as ImageIcon, CheckCircle2 } from "lucide-react";

export default function LogoSettingsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl space-y-8"
    >
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Logo Settings</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Update your website's primary logo and favicon.</p>
      </div>

      <div className="bg-white dark:bg-[rgba(15,15,15,0.8)] backdrop-blur-xl border border-slate-200 dark:border-[rgba(255,255,255,0.08)] rounded-[32px] p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Primary Logo</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Current Logo Preview */}
          <div className="w-full md:w-1/3 bg-slate-50 dark:bg-[rgba(255,255,255,0.02)] border border-slate-200 dark:border-[rgba(255,255,255,0.05)] rounded-2xl p-6 flex flex-col items-center justify-center min-h-[200px]">
            <p className="text-sm font-semibold text-slate-500 mb-4">Current Logo</p>
            <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tight text-center">
              Time<span className="text-[#C31621]">Digitals</span>
            </div>
          </div>

          {/* Upload Area */}
          <div className="w-full md:w-2/3 border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-[#C31621] dark:hover:border-[#C31621] transition-colors rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px] cursor-pointer group">
            <div className="w-16 h-16 bg-slate-100 dark:bg-[rgba(255,255,255,0.05)] rounded-full flex items-center justify-center group-hover:bg-[#C31621]/10 transition-colors mb-4">
              <Upload className="w-8 h-8 text-slate-400 group-hover:text-[#C31621] transition-colors" />
            </div>
            <h3 className="font-bold text-slate-700 dark:text-slate-300">Click to upload new logo</h3>
            <p className="text-sm text-slate-500 mt-1">SVG, PNG, JPG or GIF (max. 5MB)</p>
            <input type="file" className="hidden" accept="image/*" />
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <button className="px-6 py-3 rounded-full font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[rgba(255,255,255,0.05)] transition-colors">
            Cancel
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#540712] to-[#C31621] text-white px-8 py-3 rounded-full font-bold shadow-[0_10px_30px_rgba(195,22,33,0.3)] hover:shadow-[0_15px_40px_rgba(195,22,33,0.6)] transition-all transform hover:-translate-y-1">
            <CheckCircle2 className="w-5 h-5" />
            Save Changes
          </button>
        </div>
      </div>
    </motion.div>
  );
}
