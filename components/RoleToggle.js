import Link from "next/link";

// Black pill switching between the patient (/) and doctor (/doctor) landing pages.
export default function RoleToggle({ active }) {
  const base =
    "flex h-[42px] w-[140px] items-center justify-center rounded-full text-[13px] font-semibold transition-colors";
  const on = "bg-white text-black";
  const off = "text-white hover:bg-white/10";

  return (
    <div className="mx-auto flex w-fit rounded-full bg-black p-2" role="tablist">
      <Link
        href="/doctor"
        role="tab"
        aria-selected={active === "doctor"}
        className={`${base} ${active === "doctor" ? on : off}`}
      >
        Doctor
      </Link>
      <Link
        href="/"
        role="tab"
        aria-selected={active === "patient"}
        className={`${base} ${active === "patient" ? on : off}`}
      >
        Patient
      </Link>
    </div>
  );
}
