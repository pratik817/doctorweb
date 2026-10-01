"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { themes } from "@/lib/themes";

const links = [
  { href: "/", label: "Patient" },
  { href: "/doctor", label: "Doctor" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar({ theme = "green" }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = themes[theme];

  return (
    <header className={`sticky top-0 z-50 ${t.navBg} shadow-sm`}>
      <div className="mx-auto flex h-[50px] max-w-[1280px] items-center justify-between px-4 sm:px-8">
        <Link href="/" aria-label="Doctor4Home home" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Doctor4Home - Healthcare Redefined"
            width={168}
            height={38}
            priority
            unoptimized
            className="h-[38px] w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-10 text-[15px] font-medium text-black md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-opacity hover:opacity-70 ${
                pathname === l.href ? "font-semibold underline underline-offset-8" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="rounded p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className={`flex flex-col gap-1 px-4 pb-4 md:hidden ${t.navBg}`}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2 text-[15px] font-medium text-black hover:bg-black/5 ${
                pathname === l.href ? "bg-black/5 font-semibold" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
