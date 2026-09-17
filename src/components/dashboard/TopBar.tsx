"use client";

import { useEffect, useState } from "react";
import { Search, Bell, Moon, Sun, Menu } from "lucide-react";

export default function DashboardTopBar() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || (!storedTheme && !document.documentElement.classList.contains("dark"))) {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  if (theme === null) return null; // Avoid hydration mismatch

  return (
    <header className="h-20 sticky top-0 z-30 bg-white/80 dark:bg-[rgba(8,8,8,0.8)] backdrop-blur-xl border-b border-slate-200 dark:border-[rgba(255,255,255,0.08)] transition-colors duration-300">
      <div className="flex items-center justify-between h-full px-6 lg:px-8">
        
        {/* Mobile Menu & Search */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 text-slate-600 dark:text-slate-400">
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="hidden md:flex items-center gap-2 bg-slate-100 dark:bg-[rgba(255,255,255,0.05)] px-4 py-2 rounded-full border border-transparent focus-within:border-[#C31621] transition-colors w-64 lg:w-96">
            <Search className="w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search dashboard..." 
              className="bg-transparent border-none outline-none w-full text-sm text-slate-700 dark:text-slate-200"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[rgba(255,255,255,0.05)] transition-colors"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button className="relative w-10 h-10 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[rgba(255,255,255,0.05)] transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#C31621] rounded-full border-2 border-white dark:border-[#080808]"></span>
          </button>

          <div className="h-8 w-px bg-slate-200 dark:bg-[rgba(255,255,255,0.1)] mx-2"></div>

          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#540712] to-[#C31621] text-white flex items-center justify-center font-bold shadow-md">
              A
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Admin User</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Super Admin</p>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
