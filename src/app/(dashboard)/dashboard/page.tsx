"use client";

import { motion } from "framer-motion";
import { 
  Users, TrendingUp, Monitor, CheckCircle2, 
  BarChart3, Activity, Clock, FileText 
} from "lucide-react";
import Link from "next/link";

// Mock Data
const stats = [
  { label: "Total Views", value: "48.2K", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
  { label: "Active Services", value: "12", icon: Monitor, color: "text-green-500", bg: "bg-green-500/10" },
  { label: "Projects Completed", value: "154", icon: CheckCircle2, color: "text-purple-500", bg: "bg-purple-500/10" },
  { label: "Revenue Growth", value: "+24%", icon: TrendingUp, color: "text-[#C31621]", bg: "bg-[#C31621]/10" },
];

const recentActivity = [
  { title: "New Web Project Started", time: "2 hours ago", icon: Activity },
  { title: "SEO Report Generated", time: "5 hours ago", icon: FileText },
  { title: "Client Meeting Scheduled", time: "1 day ago", icon: Clock },
  { title: "App Design Approved", time: "2 days ago", icon: CheckCircle2 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function DashboardPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {/* Top Bar for Dashboard Navigation (optional) */}
      <motion.div variants={itemVariants} className="flex justify-between items-center mb-8 bg-white dark:bg-[rgba(15,15,15,0.8)] backdrop-blur-xl border border-slate-200 dark:border-[rgba(255,255,255,0.08)] p-4 rounded-2xl shadow-sm">
        <div className="font-bold text-xl dark:text-white">Time Digitals Dashboard</div>
        <Link href="/" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-[#C31621] transition-colors">
          &larr; Back to Website
        </Link>
      </motion.div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Welcome Back
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-slate-500 dark:text-slate-400 mt-2 text-lg"
          >
            Here&apos;s what&apos;s happening with your digital assets today.
          </motion.p>
        </div>
        
        <motion.button 
          variants={itemVariants}
          className="bg-gradient-to-r from-[#540712] to-[#C31621] text-white px-6 py-3 rounded-full font-bold shadow-[0_10px_30px_rgba(195,22,33,0.3)] hover:shadow-[0_15px_40px_rgba(195,22,33,0.6)] transition-all duration-300 transform hover:-translate-y-1"
        >
          Generate Report
        </motion.button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="bg-white dark:bg-[rgba(15,15,15,0.8)] backdrop-blur-xl border border-slate-200 dark:border-[rgba(255,255,255,0.08)] rounded-[24px] p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-500 dark:group-hover:from-white dark:group-hover:to-slate-400 transition-all">
                  {stat.value}
                </h3>
              </div>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Chart Area */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-2 bg-white dark:bg-[rgba(15,15,15,0.8)] backdrop-blur-xl border border-slate-200 dark:border-[rgba(255,255,255,0.08)] rounded-[32px] p-8 shadow-sm flex flex-col"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-[#C31621]" />
              Performance Overview
            </h2>
            <select className="bg-slate-100 dark:bg-[rgba(255,255,255,0.05)] border-none text-slate-700 dark:text-slate-300 rounded-xl px-4 py-2 font-medium focus:ring-2 focus:ring-[#C31621] outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Year</option>
            </select>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center min-h-[300px] border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl relative overflow-hidden">
             {/* Mock Chart Visualization */}
             <div className="absolute inset-0 flex items-end justify-around p-8 opacity-60">
               {[40, 70, 45, 90, 60, 110, 85].map((height, i) => (
                 <motion.div 
                   key={i}
                   initial={{ height: 0 }}
                   animate={{ height: `${height}%` }}
                   transition={{ delay: 0.5 + (i * 0.1), duration: 1, type: "spring" }}
                   className="w-12 bg-gradient-to-t from-[#540712] to-[#C31621] rounded-t-xl"
                 />
               ))}
             </div>
             <p className="text-slate-400 dark:text-slate-600 font-semibold z-10 bg-white/80 dark:bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
               Interactive Chart Data Loaded
             </p>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div 
          variants={itemVariants}
          className="bg-white dark:bg-[rgba(15,15,15,0.8)] backdrop-blur-xl border border-slate-200 dark:border-[rgba(255,255,255,0.08)] rounded-[32px] p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Recent Activity</h2>
          
          <div className="space-y-6">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[rgba(255,255,255,0.05)] border border-slate-200 dark:border-[rgba(255,255,255,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C31621]/10 group-hover:border-[#C31621]/30 transition-colors">
                  <activity.icon className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-[#C31621] transition-colors" />
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#C31621] transition-colors">
                    {activity.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-8 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            View All Activity
          </button>
        </motion.div>

      </div>
    </motion.div>
  );
}
