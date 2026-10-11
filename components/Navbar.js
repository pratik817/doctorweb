"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { themes } from "@/lib/themes";

const navLinks = [
  { href: "/", label: "Patient" },
  { href: "/doctor", label: "Doctor" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar({ theme = "green" }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = themes[theme];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = `sticky top-0 z-50 transition-all duration-300 relative border-b ${
    scrolled 
      ? `bg-white border-gray-200 shadow-sm` 
      : `bg-white border-gray-100`
  }`;

  return (
    <header className={navClass}>
      {/* Reduced py to minimize header height */}
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 sm:px-10 h-[56px] sm:h-[64px]">
        {/* Logo */}
        <Link href="/" aria-label="Doctor4Home home" onClick={() => setOpen(false)} className="flex items-center gap-2 group h-full">
          {/* Custom SVG Icon - House with Medical Cross & Heartbeat */}
          <div className="relative flex items-center justify-center flex-shrink-0 h-full py-1">
            <svg className="h-full w-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#74ec1d" /> {/* Bright green */}
                  <stop offset="50%" stopColor="#2c8973" /> {/* Teal transition */}
                  <stop offset="100%" stopColor="#24288b" /> {/* Deep blue/purple */}
                </linearGradient>
              </defs>
              {/* House Outline */}
              <path d="M 50 15 L 12 45 V 82 C 12 86.4 15.6 90 20 90 H 80 C 84.4 90 88 86.4 88 82 V 45 Z" stroke="url(#logo-gradient)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Chimney */}
              <path d="M 75 35 V 20 H 82 V 41" stroke="url(#logo-gradient)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Medical Cross Outline */}
              <path d="M 40 38 H 60 V 46 H 68 V 64 H 60 V 72 H 40 V 64 H 32 V 46 H 40 Z" stroke="url(#logo-gradient)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Heartbeat Line inside Cross */}
              <path d="M 32 55 H 43 L 48 42 L 53 68 L 57 55 H 68" stroke="url(#logo-gradient)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* Logo Text */}
          <div className="flex flex-col justify-center translate-y-[2px]">
            <span className="text-[24px] sm:text-[28px] font-[900] tracking-tight leading-none font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
              <span style={{ color: '#2b8720' }}>Doctor</span><span style={{ color: '#5b287a' }}>4Home</span>
            </span>
            <span className="text-[12px] sm:text-[13px] tracking-wide mt-[1px] font-['Comic_Sans_MS',cursive,sans-serif]" style={{ color: '#68825e' }}>
              Healthcare Redefined
            </span>
          </div>
        </Link>

        {/* Desktop Links (Tabs Style) */}
        <nav className="hidden md:flex items-center gap-8 ml-auto h-full">
          {navLinks.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative flex items-center h-full text-[15px] transition-colors duration-200 border-b-[2.5px] -mb-[2.5px] ${
                  isActive 
                    ? "text-black font-semibold border-black" 
                    : "text-gray-700 hover:text-black font-medium border-transparent hover:border-gray-300"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="relative z-10 rounded-md p-1.5 text-gray-700 transition-colors hover:bg-gray-100 md:hidden ml-auto"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`absolute left-0 top-[100%] w-full overflow-hidden transition-all duration-300 md:hidden z-40 ${open ? "max-h-[400px] border-b border-gray-100 bg-white shadow-xl" : "max-h-0 bg-transparent"}`}>
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((l) => {
             const isActive = pathname === l.href;
             return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-[16px] transition-all ${
                  isActive 
                    ? `bg-gray-50 text-black font-semibold border-l-[3px] border-black` 
                    : "text-gray-700 hover:bg-gray-50 hover:text-black font-medium border-l-[3px] border-transparent"
                }`}
              >
                {l.label}
              </Link>
             );
          })}
        </nav>
      </div>
    </header>
  );
}

