"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  Type, 
  Settings, 
  Users,
  LogOut
} from "lucide-react";

export default function DashboardSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Users", href: "/dashboard/users", icon: Users },
  ];

  const settingsItems = [
    { name: "Logo Settings", href: "/dashboard/settings/logo", icon: ImageIcon },
    { name: "Banner Settings", href: "/dashboard/settings/banner", icon: Type },
    { name: "General Settings", href: "/dashboard/settings/general", icon: Settings },
  ];

  const renderLinks = (items: typeof menuItems) => {
    return items.map((item) => {
      const isActive = pathname === item.href;
      return (
        <Link 
          key={item.name} 
          href={item.href}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
            isActive 
              ? "bg-gradient-to-r from-[#540712] to-[#C31621] text-white shadow-lg" 
              : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[rgba(255,255,255,0.05)] hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          <item.icon className="w-5 h-5" />
          {item.name}
        </Link>
      );
    });
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-[#080808] border-r border-slate-200 dark:border-[rgba(255,255,255,0.08)] hidden lg:flex flex-col z-40 transition-colors duration-300">
      
      {/* Brand / Logo Area */}
      <div className="h-20 flex items-center px-6 border-b border-slate-200 dark:border-[rgba(255,255,255,0.08)]">
        <Link href="/" className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          Time<span className="text-[#C31621]">Digitals</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8 no-scrollbar">
        
        <div>
          <p className="px-4 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Main Menu</p>
          <div className="space-y-1">
            {renderLinks(menuItems)}
          </div>
        </div>

        <div>
          <p className="px-4 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Site Customization</p>
          <div className="space-y-1">
            {renderLinks(settingsItems)}
          </div>
        </div>

      </div>

      {/* Bottom Area */}
      <div className="p-4 border-t border-slate-200 dark:border-[rgba(255,255,255,0.08)]">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-slate-500 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
      
    </aside>
  );
}
