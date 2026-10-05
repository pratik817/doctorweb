"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ items, accentColor }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl border transition-shadow duration-200 ${
              isOpen
                ? "border-transparent shadow-lg"
                : "border-gray-100 shadow-sm hover:shadow-md"
            } bg-white`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span
                className={`text-[16px] font-semibold leading-snug ${
                  isOpen ? accentColor : "text-gray-900"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`shrink-0 rounded-full p-1 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-gray-100" : "rotate-0 bg-gray-50"
                }`}
              >
                <ChevronDown
                  size={18}
                  className={isOpen ? accentColor : "text-gray-500"}
                />
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[15px] leading-relaxed text-gray-600">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
