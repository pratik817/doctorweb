// Full class strings are kept literal so Tailwind can detect them.

// Colour wash behind the header: green at the left edge, almost clear in the
// middle, purple at the right edge. It is a background image, so it layers over
// the header's base colour (white, or the blue on tinted pages).
export const colourWash =
  "bg-[linear-gradient(90deg,rgba(46,139,31,0.22),rgba(20,163,139,0.05)_45%,rgba(20,163,139,0.05)_55%,rgba(91,42,134,0.22))]";

export const themes = {
  green: {
    navBg: "bg-white",
    footerBg: "bg-gradient-to-b from-[#078a07] to-[#021a02]",
    footerDivider: "border-white/15",
    heading: "text-[#0a6a0a]",
    subheading: "text-[#1d4d12]",
    pill: "bg-[#e1f2e1] text-[#0a7a0a]",
    darkPill: "bg-[#1a1020] text-white",
    button: "bg-gradient-to-b from-[#168a1f] to-[#0a5c0f]",
    checkColor: "text-[#0a8a1a]",
    sectionBg: "bg-gradient-to-b from-[#008a00] to-[#021a02]",
    iconCircle: "bg-[#0a6a0a] text-white",
  },
  purple: {
    navBg: "bg-white",
    footerBg: "bg-gradient-to-b from-[#6a3fb0] to-[#0b0614]",
    footerDivider: "border-white/15",
    heading: "text-[#6a14a3]",
    subheading: "text-[#1d4d12]",
    pill: "bg-[#efe3fb] text-[#6a14a3]",
    darkPill: "bg-[#1a1020] text-white",
    button: "bg-[#6a14a3]",
    checkColor: "text-[#0a8a1a]",
    sectionBg: "bg-gradient-to-b from-[#6a3fb0] to-[#0b0614]",
    iconCircle: "bg-[#7a1fc7] text-white",
  },
  blue: {
    navBg: "bg-[#aeccf8]",
    footerBg: "bg-gradient-to-b from-[#3b82f6] to-[#02040a]",
    footerDivider: "border-white/15",
    heading: "text-[#2563eb]",
    subheading: "text-[#1d4d12]",
    pill: "bg-[#dbe8fd] text-[#2563eb]",
    darkPill: "bg-[#1a1020] text-white",
    button: "bg-[#4f46e5]",
    checkColor: "text-[#0a8a1a]",
    sectionBg: "bg-gradient-to-b from-[#3b6ff0] to-[#02040a]",
    iconCircle: "bg-[#d8f7d8] text-[#0a6a0a]",
  },
};
