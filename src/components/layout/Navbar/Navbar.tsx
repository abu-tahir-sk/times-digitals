"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { 
  Menu, X, ChevronDown, Search, Moon, Sun, Globe, 
  Monitor, Smartphone, PenTool, Video, TrendingUp, Search as SearchIcon, Paintbrush, Sparkles 
} from "lucide-react";

// --- MAGNETIC BUTTON COMPONENT ---
const MagneticButton = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.25);
    y.set(middleY * 0.25);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: 0, y: 0 }}
      style={{ x: springX, y: springY }}
      className={`relative cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  // Theme State
  const [theme, setTheme] = useState<string | null>(null);

  // Initialize theme & Scroll detection
  useEffect(() => {
    // Scroll handling
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    // Theme handling: Check local storage or default to dark
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || (!storedTheme && !document.documentElement.classList.contains("dark"))) {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }

    return () => window.removeEventListener("scroll", handleScroll);
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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#", hasMegaMenu: true },
    { name: "Solutions", href: "/solutions" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const megaMenuItems = [
    { name: "Web Development", icon: Monitor, href: "/services/web" },
    { name: "Mobile App Development", icon: Smartphone, href: "/services/mobile" },
    { name: "UI/UX Design", icon: PenTool, href: "/services/design" },
    { name: "Video Editing", icon: Video, href: "/services/video" },
    { name: "Digital Marketing", icon: TrendingUp, href: "/services/marketing" },
    { name: "SEO Optimization", icon: SearchIcon, href: "/services/seo" },
    { name: "Branding", icon: Paintbrush, href: "/services/branding" },
    { name: "AI Automation", icon: Sparkles, href: "/services/ai" },
  ];

  // Prevent hydration mismatch by not rendering theme icon until mounted
  if (theme === null) return null;

  return (
    <>
      <header className="fixed w-full top-0 z-[100] px-4 py-4 lg:px-8 lg:py-5 pointer-events-none">
        <div 
          className={`mx-auto max-w-[1600px] pointer-events-auto transition-all duration-500 rounded-[20px] ${
            isScrolled 
              ? "bg-white/80 dark:bg-[rgba(8,8,8,0.75)] backdrop-blur-2xl border border-slate-200 dark:border-[rgba(255,255,255,0.08)] shadow-[0_20px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)] px-6 py-3" 
              : "bg-transparent border-transparent px-2 py-2"
          }`}
        >
          <nav className="flex items-center justify-between">
            
            {/* LEFT: Premium Logo */}
            <Link href="/dashboard" className="flex items-center group z-50">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="relative w-56 h-12 md:w-[240px] md:h-[54px] lg:w-[260px] lg:h-[60px] drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_25px_rgba(0,0,0,0.2)] dark:group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-500"
              >
                {/* Theme Based Logo Render (Optional depending on your logo visibility in light mode) */}
                <Image
                  src="/logos/logoss.png"
                  alt="Time Digitals Logo"
                  fill
                  priority
                  className={`object-contain object-left scale-110 md:scale-125 origin-left ${theme === 'light' ? 'invert brightness-0' : ''}`}
                />
              </motion.div>
            </Link>

            {/* CENTER: Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => link.hasMegaMenu && setActiveDropdown('Services')}
                  onMouseLeave={() => link.hasMegaMenu && setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-[14px] font-semibold text-slate-600 dark:text-[#A8A8A8] hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                    {link.hasMegaMenu && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === 'Services' ? 'rotate-180 text-black dark:text-white' : ''}`} />
                    )}
                  </Link>
                  {/* Animated Hover Underline */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#540712] to-[#C31621] group-hover:w-1/2 transition-all duration-300 rounded-t-full opacity-0 group-hover:opacity-100"></span>
                  
                  {/* MEGA MENU: Services */}
                  {link.hasMegaMenu && (
                    <AnimatePresence>
                      {activeDropdown === 'Services' && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[700px] bg-white/95 dark:bg-[rgba(12,12,12,0.9)] backdrop-blur-3xl border border-slate-200 dark:border-[rgba(255,255,255,0.08)] rounded-[24px] shadow-[0_40px_80px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.8)] p-6 z-50 grid grid-cols-2 gap-4"
                        >
                          <div className="absolute -top-6 left-0 w-full h-6 bg-transparent"></div>
                          
                          {megaMenuItems.map((item, i) => (
                            <Link 
                              href={item.href} 
                              key={i}
                              className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-[rgba(255,255,255,0.03)] border border-transparent hover:border-slate-200 dark:hover:border-[rgba(255,255,255,0.05)] transition-all duration-300"
                            >
                              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[rgba(255,255,255,0.03)] border border-slate-200 dark:border-[rgba(255,255,255,0.05)] flex items-center justify-center group-hover/item:bg-[#C31621]/10 group-hover/item:border-[#C31621]/30 transition-colors">
                                <item.icon className="w-5 h-5 text-slate-500 dark:text-[#A8A8A8] group-hover/item:text-[#C31621] transition-colors" />
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-black group-hover/item:to-slate-600 dark:group-hover/item:from-white dark:group-hover/item:to-[#A8A8A8]">{item.name}</h4>
                                <p className="text-[11px] text-slate-500 dark:text-[#A8A8A8] leading-tight">Enterprise-grade solutions tailored for growth.</p>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* RIGHT: Actions & CTAs */}
            <div className="hidden lg:flex items-center gap-5 z-50">
              
              {/* Icon Buttons */}
              <div className="flex items-center gap-2 border-r border-slate-300 dark:border-[rgba(255,255,255,0.1)] pr-5">
                <button className="w-9 h-9 flex items-center justify-center text-slate-600 dark:text-[#A8A8A8] hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[rgba(255,255,255,0.05)] rounded-full transition-colors">
                  <Search className="w-4 h-4" />
                </button>
                <button 
                  onClick={toggleTheme}
                  className="w-9 h-9 flex items-center justify-center text-slate-600 dark:text-[#A8A8A8] hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[rgba(255,255,255,0.05)] rounded-full transition-colors"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
                <button className="w-9 h-9 flex items-center justify-center text-slate-600 dark:text-[#A8A8A8] hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[rgba(255,255,255,0.05)] rounded-full transition-colors">
                  <Globe className="w-4 h-4" />
                </button>
              </div>

              {/* Text CTA */}
              <Link href="/book" className="text-sm font-semibold text-slate-900 dark:text-white hover:text-[#C31621] dark:hover:text-[#C31621] transition-colors">
                Book a Call
              </Link>

              {/* Primary Magnetic CTA */}
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#540712] to-[#C31621] text-white px-7 py-3 rounded-full text-sm font-bold shadow-[0_10px_30px_rgba(195,22,33,0.3)] hover:shadow-[0_15px_40px_rgba(195,22,33,0.6)] transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2 tracking-wide">
                    Get Started
                  </span>
                  <div className="absolute inset-0 rounded-full ring-2 ring-black/0 dark:ring-white/0 group-hover:ring-black/10 dark:group-hover:ring-white/20 transition-all duration-500 scale-100 group-hover:scale-105"></div>
                </Link>
              </MagneticButton>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden p-2 text-slate-900 dark:text-white bg-slate-100 dark:bg-[rgba(255,255,255,0.05)] border border-slate-200 dark:border-[rgba(255,255,255,0.1)] rounded-xl backdrop-blur-md relative z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU OVELAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 xl:hidden flex flex-col pt-32 px-6 pb-10 bg-white/98 dark:bg-[#050505]/98 backdrop-blur-3xl overflow-y-auto"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, ease: "easeOut" }}
                >
                  {link.hasMegaMenu ? (
                    <div className="flex flex-col border-b border-slate-200 dark:border-[rgba(255,255,255,0.05)]">
                      <button 
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-between py-5 text-2xl font-bold text-slate-600 dark:text-[#A8A8A8] hover:text-black dark:hover:text-white"
                      >
                        {link.name}
                        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-[#C31621]' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col gap-3 pb-5"
                          >
                            {megaMenuItems.map((item, idx) => (
                              <Link 
                                key={idx} 
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 dark:bg-[rgba(255,255,255,0.03)] border border-slate-100 dark:border-[rgba(255,255,255,0.05)]"
                              >
                                <item.icon className="w-4 h-4 text-[#C31621]" />
                                <span className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center justify-between py-5 text-2xl font-bold text-slate-600 dark:text-[#A8A8A8] hover:text-black dark:hover:text-white border-b border-slate-200 dark:border-[rgba(255,255,255,0.05)]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-col gap-4"
            >
              <button 
                onClick={toggleTheme}
                className="flex items-center justify-center gap-2 w-full bg-slate-100 dark:bg-[rgba(255,255,255,0.05)] border border-slate-200 dark:border-[rgba(255,255,255,0.1)] text-slate-900 dark:text-white px-6 py-4 rounded-2xl text-lg font-bold"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                Switch to {theme === "dark" ? "Light" : "Dark"} Mode
              </button>
              <Link
                href="/contact"
                className="flex items-center justify-center w-full bg-gradient-to-r from-[#540712] to-[#C31621] text-white px-6 py-4 rounded-2xl text-lg font-bold shadow-[0_10px_30px_rgba(195,22,33,0.3)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}