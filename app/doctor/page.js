import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  CircleCheck,
  ClipboardList,
  DollarSign,
  Eye,
  House,
  MapPin,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  UserPlus,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoleToggle from "@/components/RoleToggle";
import DownloadApp from "@/components/DownloadApp";

export const metadata = { title: "Join as a Doctor" };

const steps = [
  { icon: UserPlus, title: "Doctor Registration", text: "Create your profile with credentials and specialization details in minutes" },
  { icon: Eye, title: "View Patient Requests", text: "Browse consultation requests from patients in your area" },
  { icon: CircleCheck, title: "Accept Request", text: "Review patient details and accept appointments that fit your schedule" },
  { icon: House, title: "Go to Patient Home", text: "Navigate to patient location using integrated maps" },
  { icon: Stethoscope, title: "Consult the Patient", text: "Provide quality healthcare services in the comfort of their home" },
  { icon: DollarSign, title: "Collect Your Fees", text: "Receive secure payments directly through the platform" },
];

const features = [
  { icon: Zap, title: "Quick Setup", text: "Get started in minutes with our streamlined onboarding process. Upload credentials, set availability, and start accepting appointments." },
  { icon: Wallet, title: "Secure Payments", text: "Receive payments directly through our secure payment gateway. Track earnings and manage invoices all in one place." },
  { icon: MapPin, title: "Easy Navigation", text: "Integrated GPS navigation helps you reach patient locations efficiently. Save time and focus on providing care." },
];

const benefits = [
  { icon: Users, title: "Reach More Patients", text: "Expand your practice by connecting with patients in your area", bg: "from-[#f3e8ff] to-[#f8f1ff]" },
  { icon: CalendarDays, title: "Flexible Scheduling", text: "Set your own availability and work on your own terms", bg: "from-[#dbeafe] to-[#e8f1ff]" },
  { icon: ClipboardList, title: "Easy Management", text: "Manage all appointments and patient records in one place", bg: "from-[#fce7f3] to-[#fdf0f6]" },
  { icon: ShieldCheck, title: "Secure Platform", text: "HIPAA-compliant system ensuring patient data security", bg: "from-[#dcfce7] to-[#eafdf0]" },
  { icon: TrendingUp, title: "Grow Your Practice", text: "Increase visibility and reach new patients effortlessly", bg: "from-[#ffedd5] to-[#fff4e6]" },
];

const iconGradient = "bg-gradient-to-br from-[#8a1fe0] to-[#b45df0]";

export default function DoctorPage() {
  return (
    <>
      <Navbar theme="purple" />
      <main className="bg-[#f8f8fb]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0c0714_0%,#6e57a8_55%,#b36cf0_100%)] px-5 pt-14 text-center">
          <RoleToggle active="doctor" />
          <h1 className="mt-10 text-5xl font-bold text-white sm:text-6xl">Join as a Doctor</h1>
          <p className="mx-auto mt-6 max-w-[780px] text-lg text-white/95 sm:text-[21px] sm:leading-relaxed">
            Manage appointments, connect with patients, and provide trusted
            medical care from one seamless platform.
          </p>
          <a
            href="#download"
            className="mt-9 inline-block rounded-full bg-white px-10 py-4 text-[17px] font-medium text-[#6a14a3] shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Start Consulting
          </a>

          <div className="relative mx-auto mt-14 h-[min(320px,52vw)] w-[min(500px,92vw)]">
            <div className="absolute inset-x-0 bottom-0 h-[calc(min(500px,92vw)/2)] overflow-hidden">
              <div className="aspect-square w-full rounded-full bg-white" />
            </div>
            <Image
              src="/images/hero-doctors.webp"
              alt="Three smiling doctors"
              width={1200}
              height={821}
              priority
              className="absolute bottom-0 left-1/2 h-auto w-[100%] -translate-x-1/2"
            />
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-[1100px] px-5 text-center">
            <h2 className="text-4xl font-bold text-[#0f1a2b] sm:text-[40px]">How Doctor App Works</h2>
            <p className="mt-5 text-lg text-gray-600 sm:text-xl">
              Follow these simple steps to start providing healthcare services at patients&rsquo; homes
            </p>
            <div className="mt-14 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((s, i) => (
                <article key={s.title} className="rounded-2xl bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f3e6fd] text-[#8a1fe0]">
                      <s.icon size={26} />
                    </span>
                    <span className={`flex h-12 w-12 items-center justify-center rounded-full text-[17px] font-medium text-white ${iconGradient}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[#0f1a2b]">{s.title}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-gray-500">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[linear-gradient(200deg,#7a62b8_0%,#4a3a78_40%,#000_100%)] py-16">
          <div className="mx-auto max-w-[1100px] px-5">
            <h2 className="text-center text-4xl font-bold text-white sm:text-[40px]">Doctor Features</h2>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {features.map((f) => (
                <article key={f.title} className="rounded-2xl bg-[#f8f8fb] p-8">
                  <span className={`flex h-16 w-16 items-center justify-center rounded-xl text-white ${iconGradient}`}>
                    <f.icon size={30} />
                  </span>
                  <h3 className="mt-8 text-2xl font-semibold text-[#0f1a2b]">{f.title}</h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-gray-500">{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-[1100px] px-5">
            <h2 className="text-center text-4xl font-bold text-[#0f1a2b] sm:text-[40px]">Benefits for Doctors</h2>
            <div className="mt-14 flex flex-wrap justify-center gap-8">
              {benefits.map((b) => (
                <article
                  key={b.title}
                  className={`w-full rounded-3xl bg-gradient-to-br p-8 sm:w-[calc(50%-1rem)] ${
                    benefits.indexOf(b) < 3 ? "lg:w-[calc(33.333%-1.4rem)]" : "lg:w-[432px]"
                  } ${b.bg}`}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#8a1fe0] shadow-sm">
                    <b.icon size={26} />
                  </span>
                  <h3 className="mt-7 text-xl font-semibold text-[#0f1a2b]">{b.title}</h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-gray-600">{b.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <DownloadApp
          className="bg-white"
          headingClass="text-[#6a14a3]"
          buttonClass="bg-[#6a14a3]"
          phones={[
            { src: "/images/phone-doctor-1.webp", alt: "Doctor app dashboard", width: 420, height: 510 },
            { src: "/images/phone-doctor-2.webp", alt: "Doctor app request list", width: 410, height: 480 },
          ]}
        />
      </main>
      <Footer theme="purple" />
    </>
  );
}
