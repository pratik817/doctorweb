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

// Green-to-purple wordmark colour, switching around the "4" like the brand logo.
const brandText =
  "bg-[linear-gradient(90deg,#2e8b1f_0%,#2e8b1f_40%,#5b2a86_62%,#5b2a86_100%)] bg-clip-text text-transparent";

// Decorative soft circles covering the whole header: green at the logo end
// shading to purple at the menu end, with a stronger pair anchoring each
// corner. Everything lives in one clipped layer so nothing spills below the bar.
function HeaderArt() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* One 360px tile of circles repeats across the bar. Circles that cross
          the tile edge are drawn twice (x and x +/- 360) so the repeat is seamless. */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="nav-art-color" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#2e8b1f" />
            <stop offset="0.5" stopColor="#14a38b" />
            <stop offset="1" stopColor="#5b2a86" />
          </linearGradient>
          <pattern id="nav-art-tile" width="360" height="50" patternUnits="userSpaceOnUse">
            <g fill="#fff">
              {/* rising from the bottom edge */}
              <circle cx="30" cy="62" r="46" fillOpacity="0.13" />
              <circle cx="390" cy="62" r="46" fillOpacity="0.13" />
              <circle cx="120" cy="70" r="44" fillOpacity="0.11" />
              <circle cx="215" cy="58" r="50" fillOpacity="0.14" />
              <circle cx="300" cy="66" r="36" fillOpacity="0.10" />
              {/* hanging from the top edge */}
              <circle cx="75" cy="-14" r="44" fillOpacity="0.11" />
              <circle cx="165" cy="-20" r="42" fillOpacity="0.10" />
              <circle cx="255" cy="-8" r="48" fillOpacity="0.13" />
              <circle cx="340" cy="-18" r="40" fillOpacity="0.10" />
              <circle cx="-20" cy="-18" r="40" fillOpacity="0.10" />
            </g>
          </pattern>
          <mask id="nav-art-shape">
            <rect width="100%" height="100%" fill="url(#nav-art-tile)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#nav-art-color)" mask="url(#nav-art-shape)" />
      </svg>
      {/* Green corner behind the logo */}
      <span className="absolute -bottom-[60px] -left-[50px] h-[150px] w-[150px] rounded-full bg-[#2e8b1f]/15 sm:-bottom-[70px] sm:h-[190px] sm:w-[190px]" />
      <span className="absolute -bottom-[60px] left-[70px] hidden h-[110px] w-[110px] rounded-full bg-[#2e8b1f]/12 sm:block" />
      {/* Purple corner behind the menu */}
      <span className="absolute -right-[50px] -top-[70px] h-[160px] w-[160px] rounded-full bg-[#5b2a86]/15 sm:-top-[80px] sm:h-[210px] sm:w-[210px]" />
      <span className="absolute -top-[70px] right-[110px] hidden h-[120px] w-[120px] rounded-full bg-[#5b2a86]/12 sm:block" />
    </div>
  );
}

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

  const navClass = `sticky top-0 z-50 ${bg} transition-shadow duration-300 ${
    scrolled ? "shadow-sm" : ""
  }`;

  return (
    <header className={navClass}>
      <HeaderArt />
      {/* full width: logo sits at the far left, menu at the far right */}
      <div className="relative flex h-[50px] items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" aria-label="Doctor4Home home" onClick={() => setOpen(false)} className="flex items-center gap-2">
          {/* House icon. The PNG is cropped to the drawing, so its box is the
              real edge and it lines up with the text beside it. */}
          <Image
            src="/images/house-logo.png"
            alt=""
            width={254}
            height={240}
            loading="eager"
            className="h-[34px] w-auto flex-shrink-0"
          />

          {/* Logo Text */}
          <span className="flex flex-col items-center">
            <span className={`text-[19px] font-extrabold leading-[1.1] tracking-tight ${brandText}`}>
              Doctor4Home
            </span>
            <span className={`font-hand text-[10.5px] leading-[1.2] tracking-wide ${brandText}`}>
              Healthcare Redefined
            </span>
          </span>
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

