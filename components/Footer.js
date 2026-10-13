"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { themes, colourWash, brandLine } from "@/lib/themes";
import Logo from "@/components/Logo";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/about", label: "About Us" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#download", label: "Download App" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "#", label: "Cookie Policy" },
  { href: "#", label: "Disclaimer" },
  // FAQ href is resolved dynamically in the component
  { href: "faq", label: "FAQs" },
];

// lucide-react dropped brand icons, so the four social glyphs are inline.
const socials = [
  {
    label: "Facebook",
    path: "M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z",
  },
  {
    label: "Twitter",
    path: "M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1.5 1.6 2 2.8 3.8 2.9A8.2 8.2 0 0 1 2 18.4 11.6 11.6 0 0 0 8.3 20c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2z",
  },
  {
    label: "Instagram",
    path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.5-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
  },
  {
    label: "LinkedIn",
    path: "M4 9h4v11H4V9zm2-6a2.2 2.2 0 1 1 0 4.4A2.2 2.2 0 0 1 6 3zm4 6h3.8v1.6c.6-1 1.9-1.9 3.8-1.9 3.6 0 4.4 2.4 4.4 5.4V20h-4v-5.2c0-1.3 0-2.9-1.8-2.9s-2.2 1.4-2.2 2.8V20h-4V9z",
  },
];

// Follows the header design on the same page: "wash" tints the whole footer;
// "line" keeps it plain with the colour line along its top edge.
export default function Footer({ theme = "green", tinted = false, design = "wash" }) {
  const pathname = usePathname();
  const t = themes[theme];
  // Same base colour as the header on that page, with the same colour wash on top.
  const bg = tinted ? t.navBg : "bg-white";
  const colTitle = "mb-5 text-lg font-semibold text-gray-900";
  const link = "text-[15px] text-gray-700 transition-colors hover:text-black";

  const getQuickLinkHref = (href) => {
    if (pathname === "/doctor" && href === "/#download") {
      return "/doctor#download";
    }
    return href;
  };

  const getLegalLinkHref = (href) => {
    if (href === "faq") {
      return pathname.startsWith("/doctor") ? "/doctor/faq" : "/faq";
    }
    return href;
  };

  return (
    <footer
      id="contact"
      className={`relative ${bg} text-gray-800 ${design === "wash" ? `border-t border-gray-200 ${colourWash}` : ""}`}
    >
      {design === "line" && (
        <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${brandLine}`} />
      )}
      <div className="mx-auto grid max-w-[1100px] gap-10 px-5 pb-10 pt-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1fr_1.4fr]">
        <div>
          <Logo large />
          <p className="mt-6 max-w-[260px] leading-relaxed text-gray-700">
            Quality healthcare at your doorstep. We bring trusted medical
            professionals to the comfort of your home.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/5 transition-colors hover:bg-black/10"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-gray-800" aria-hidden="true">
                  <path d={s.path} fillRule="evenodd" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className={colTitle}>Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={getQuickLinkHref(l.href)} className={link}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={colTitle}>Legal</h3>
          <ul className="space-y-3">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <Link href={getLegalLinkHref(l.href)} className={link}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={colTitle}>Contact Us</h3>
          <ul className="space-y-4 text-[15px] text-gray-700">
            <li className="flex gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0" />
              <span>
                Swaraj Pride B-F.NO.107, S.NO.40/3/2, Dhawale Chowk Rd.,
                Punawale, Chinchwadgaon, Pune, Pune City, Maharashtra, India,
                411033
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={20} className="shrink-0" />
              <a href="tel:+919823532688">+91-9823532688</a>
            </li>
            <li className="flex gap-3">
              <Mail size={20} className="shrink-0" />
              <a href="mailto:helpdesk.d4h@gmail.com">helpdesk.d4h@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-5 pb-8">
        <div className="flex flex-col items-center justify-between gap-2 border-t border-black/10 pt-6 text-sm text-gray-600 sm:flex-row">
          <p>© 2026 Doctor4Home. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={14} className="fill-gray-500" /> for better
            healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
