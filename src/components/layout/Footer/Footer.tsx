import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#faf9f8] dark:bg-[#050811] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & About (Takes 4 columns space) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-40 h-10 md:w-44 md:h-12">
                <Image
                  src="/image_396a78.jpg"
                  alt="Time Digitals Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-sm">
              Empowering businesses with cutting-edge web development, scalable mobile applications, cinematic video editing, and data-driven marketing strategies.
            </p>
            
            {/* Social Icons - Professional Square Design */}
            <div className="flex items-center gap-3">
              <a href="#" className="flex items-center justify-center w-9 h-9 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-sm hover:bg-[#A11022] hover:text-white dark:hover:bg-[#A11022] transition-all duration-200">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-sm hover:bg-[#A11022] hover:text-white dark:hover:bg-[#A11022] transition-all duration-200">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-sm hover:bg-[#A11022] hover:text-white dark:hover:bg-[#A11022] transition-all duration-200">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-sm hover:bg-[#A11022] hover:text-white dark:hover:bg-[#A11022] transition-all duration-200">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-[13px] font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-[0.15em]">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services/web-development" className="text-[15px] text-gray-600 dark:text-gray-400 hover:text-[#A11022] dark:hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/app-development" className="text-[15px] text-gray-600 dark:text-gray-400 hover:text-[#A11022] dark:hover:text-white transition-colors">App Development</Link></li>
              <li><Link href="/services/video-editing" className="text-[15px] text-gray-600 dark:text-gray-400 hover:text-[#A11022] dark:hover:text-white transition-colors">Video Editing</Link></li>
              <li><Link href="/services/digital-marketing" className="text-[15px] text-gray-600 dark:text-gray-400 hover:text-[#A11022] dark:hover:text-white transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2">
            <h3 className="text-[13px] font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-[0.15em]">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-[15px] text-gray-600 dark:text-gray-400 hover:text-[#A11022] dark:hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-[15px] text-gray-600 dark:text-gray-400 hover:text-[#A11022] dark:hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/portfolio" className="text-[15px] text-gray-600 dark:text-gray-400 hover:text-[#A11022] dark:hover:text-white transition-colors">Our Portfolio</Link></li>
              <li><Link href="/contact" className="text-[15px] text-gray-600 dark:text-gray-400 hover:text-[#A11022] dark:hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-[13px] font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-[0.15em]">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <span className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed">
                  Tech Park, Sector V<br />
                  Kolkata, West Bengal 700091
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                <span className="text-[15px] text-gray-600 dark:text-gray-400">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400 shrink-0" />
                <span className="text-[15px] text-gray-600 dark:text-gray-400">
                  hello@timedigitals.com
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-800 gap-4">
          <p className="text-[13px] text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Time Digitals (Akta Private Limited). All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-[13px] text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-[13px] text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}