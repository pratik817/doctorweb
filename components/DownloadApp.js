import Image from "next/image";
import { Apple, CircleCheck, Play } from "lucide-react";

const points = [
  "Quick booking in under 2 minutes",
  "Easy consultation with verified doctors",
  "Secure payment and health records",
  "24/7 customer support",
];

function StoreButton({ icon, small, big, className }) {
  return (
    <a
      href="#"
      className={`flex h-[75px] w-[195px] items-center gap-3 rounded-xl px-5 text-white shadow-md transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {icon}
      <span className="leading-tight">
        <span className="block text-[12px] tracking-wide">{small}</span>
        <span className="block text-[18px] font-semibold">{big}</span>
      </span>
    </a>
  );
}

const AppleIcon = <Apple size={28} className="fill-white" />;

export default function DownloadApp({
  headingClass,
  textClass = "text-[#1d4d12]",
  buttonClass,
  checkClass = "text-[#0a8a1a]",
  phones,
  className = "",
}) {
  return (
    <section id="download" className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-[1fr_auto]">
        <div className="max-w-[560px]">
          <h2
            className={`text-4xl font-bold leading-tight sm:text-5xl ${headingClass}`}
          >
            Download Your <br /> App Today
          </h2>
          <p className={`mt-8 text-lg leading-relaxed sm:text-xl ${textClass}`}>
            Access quality healthcare anytime, anywhere with our easy-to-use
            mobile application
          </p>
          <ul className="mt-8 space-y-4 text-[17px] text-gray-700">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <CircleCheck size={24} className={`shrink-0 ${checkClass}`} />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-5">
            <StoreButton
              icon={<Play size={26} className="fill-white" />}
              small="GET IT ON"
              big="Google Play"
              className={buttonClass}
            />
            <StoreButton
              icon={AppleIcon}
              small="GET IT ON"
              big="Apple store"
              className={buttonClass}
            />
          </div>
        </div>

        <div className="flex items-start justify-center gap-6 lg:gap-8">
          {phones.map((p, i) => (
            <div
              key={p.src}
              className={`relative overflow-hidden rounded-[38px] border-[6px] border-gray-800 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${
                i === 0
                  ? "w-[44vw] max-w-[240px] lg:w-[195px] xl:w-[240px]"
                  : "mt-8 w-[40vw] max-w-[230px] lg:w-[185px] xl:w-[230px]"
              }`}
            >
              {/* Notch */}
              <div className="relative z-10 flex h-7 items-center justify-center bg-black">
                <div className="h-3.5 w-20 rounded-full bg-gray-900" />
              </div>
              {/* Screen / screenshot */}
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                className="h-auto w-full"
              />
              {/* Home indicator */}
              <div className="flex h-5 items-center justify-center bg-black">
                <div className="h-1 w-16 rounded-full bg-gray-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
