"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { themes, colourWash } from "@/lib/themes";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Patient" },
  { href: "/doctor", label: "Doctor" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar({ theme = "green", tinted = false }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = themes[theme];
  // Pages opt in to their theme's header colour; the rest stay white.
  const bg = tinted ? t.navBg : "bg-white";
  // A link is current on its own page and on pages beneath it (/doctor/faq -> Doctor).
  const isCurrent = (href) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = `sticky top-0 z-50 ${bg} ${colourWash} transition-shadow duration-300 ${
    scrolled ? "shadow-sm" : ""
  }`;

  return (
    <header className={navClass}>
      {/* full width: logo sits at the far left, menu at the far right */}
      <div className="flex h-[50px] items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" aria-label="Doctor4Home home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-[35px] ml-auto">
          {navLinks.map((l) => {
            const isActive = isCurrent(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-[15px] text-black transition-opacity duration-200 hover:opacity-60 ${
                  isActive
                    ? "font-semibold underline decoration-2 underline-offset-8"
                    : "font-medium"
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
      <div className={`absolute left-0 top-[100%] w-full overflow-hidden transition-all duration-300 md:hidden z-40 ${open ? `max-h-[400px] border-b border-gray-100 ${bg} shadow-xl` : "max-h-0 bg-transparent"}`}>
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((l) => {
             const isActive = isCurrent(l.href);
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

