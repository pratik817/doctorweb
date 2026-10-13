import Image from "next/image";
import {
  ArrowRight,
  Baby,
  Clock,
  House,
  Microscope,
  Quote,
  Smile,
  Star,
  Stethoscope,
  UserSearch,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoleToggle from "@/components/RoleToggle";
import DownloadApp from "@/components/DownloadApp";
import WhyChooseUs from "@/components/WhyChooseUs";
import { themes } from "@/lib/themes";

const t = themes.green;

const testimonials = [
  { 
    name: "Aarti Sharma", 
    avatar: "avatar-patient-1", 
    quote: "Booking a doctor for my mother was so easy. The doctor arrived on time and was very professional and caring.",
    pos: "md:left-[3px] md:top-[3px]" 
  },
  { 
    name: "Vikram Singh", 
    avatar: "avatar-patient-2", 
    quote: "Excellent service! Saved me a trip to the clinic when I was too sick to travel. Highly recommended to everyone.",
    pos: "md:left-[148px] md:top-[116px]" 
  },
  { 
    name: "Pooja Desai", 
    avatar: "avatar-patient-3", 
    quote: "The doctors are highly qualified and very patient. This is a fantastic initiative for affordable healthcare at home.",
    pos: "md:left-[3px] md:top-[225px]" 
  },
  { 
    name: "Ramesh Iyer", 
    avatar: "avatar-patient-4", 
    quote: "Very reliable and transparent pricing. No hidden fees at all. The entire scheduling process is incredibly smooth.",
    pos: "md:left-[148px] md:top-[336px]" 
  },
];

const steps = [
  {
    n: "01",
    img: "step-1",
    icon: UserSearch,
    title: "Choose Doctor",
    text: "Browse through our verified doctors and select the one that suits your needs",
  },
  {
    n: "02",
    img: "step-2",
    icon: Clock,
    title: "Select Time Slot",
    text: "Pick a convenient time slot from the available appointments",
  },
  {
    n: "03",
    img: "step-3",
    icon: House,
    title: "Doctor Visits Home",
    text: "Relax at home while our doctor comes to you for consultation",
  },
];

const categories = [
  {
    img: "cat-general",
    icon: Stethoscope,
    title: "General Physician",
    text: "Expert care for common illnesses and health checkups",
  },
  {
    img: "cat-pediatric",
    icon: Baby,
    title: "Pediatrician",
    text: "Specialized care for infants, children, and adolescents",
  },
  {
    img: "cat-dentist",
    icon: Smile,
    title: "Dentist",
    text: "Complete dental care and oral health solutions",
  },
  {
    img: "cat-specialist",
    icon: Microscope,
    title: "Specialist Doctors",
    text: "Cardiologists, dermatologists, and other specialists",
  },
];

export default function PatientHome() {
  return (
    <>
      <Navbar theme="green" design="line" />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[linear-gradient(200deg,#0f8a1e_0%,#0a5f12_45%,#000_100%)] px-5 pt-16 text-center sm:pt-[72px]">
          <RoleToggle active="patient" />
          {/* Sizes are the Figma values (56px / 24.33px); with both lines centred
              they put the "B" of Book over the last "e" of Schedule. */}
          <h1 className="mt-16 font-display text-5xl font-normal text-[#fffbc2] sm:mt-20 md:text-[56px]">
            Book a Doctor at Home
          </h1>
          <p className="mx-auto mt-8 max-w-[800px] text-lg leading-relaxed text-white sm:text-[24.33px] sm:leading-[37px] lg:max-w-none">
            Schedule a doctor’s visit anytime. Our trusted doctors provide quality{" "}
            <br className="hidden lg:block" />
            healthcare right at your doorstep.
          </p>

          <div className="relative mx-auto mt-14 h-[min(380px,60vw)] w-[min(640px,92vw)]">
            <div className="absolute inset-x-0 bottom-0 h-[calc(min(640px,92vw)/2)] overflow-hidden">
              <div className="aspect-square w-full rounded-full bg-white" />
            </div>
            <Image
              src="/images/hero-patient.webp"
              alt="A smiling doctor with a patient"
              width={1068}
              height={1068}
              priority
              className="absolute bottom-[-15px] left-1/2 h-auto w-[62%] -translate-x-1/2"
            />
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-[#fafaf8] py-16 sm:py-24">
          <div className="mx-auto grid max-w-[1100px] items-center gap-12 px-5 md:grid-cols-[490px_1fr] md:gap-16">
            <div className="relative flex flex-col gap-3 md:block md:h-[410px] md:w-[490px]">
              <div className="absolute left-[88px] top-[35px] hidden h-[348px] w-[315px] bg-[#ebebe8] md:block" />
              {/* centred on the grey panel's top-right corner (403, 35) */}
              <Quote
                size={30}
                className="absolute left-[388px] top-[20px] hidden fill-[#2f6e8a] text-[#2f6e8a] md:block"
              />
              {testimonials.map((p) => (
                <article
                  key={p.name}
                  className={`flex items-center gap-3 rounded-lg bg-white p-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:absolute md:min-h-[70px] md:w-[340px] ${p.pos}`}
                >
                  <Image
                    src={`/images/${p.avatar}.webp`}
                    alt={p.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-serif text-[13px] font-bold">{p.name}</h3>
                    <p className="mt-1 text-[10px] leading-snug text-gray-400">
                      {p.quote}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div>
              <span className={`inline-block rounded-full px-4 py-2 text-[15px] font-semibold ${t.pill}`}>
                Testimonials
              </span>
              <h2 className="mt-5 font-serif text-4xl font-bold text-[#0a6a0a]">
                What Our Client says
              </h2>
              <p className="mt-4 text-xl text-[#1d4d12]">
                Real Stories from Happy Families
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a7a0a] text-white">
                  <Star size={26} />
                </span>
                <div>
                  <p className="text-3xl font-bold leading-none text-[#0f1a2b]">4.9/5</p>
                  <p className="mt-1 text-sm text-gray-500">Average Rating</p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6">
                <h3 className="text-lg font-bold">Why People Trust Us</h3>
                <ul className="mt-3 space-y-2 text-[17px] text-gray-600">
                  {[
                    "Verified and experienced doctors",
                    "Convenient home consultations",
                    "Affordable and transparent pricing",
                  ].map((x) => (
                    <li key={x} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#0a8a0a]" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs
          id="features"
          sectionClass={t.sectionBg}
          pillClass={t.darkPill}
          iconClass="bg-[#0a6a0a] text-white"
        />

        {/* How it works */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-[1100px] px-5 text-center">
            <span className={`inline-block rounded-full px-4 py-2 text-[15px] font-semibold ${t.pill}`}>
              How It Works
            </span>
            <h2 className="mt-4 text-4xl font-bold text-[#0a6a0a] sm:text-5xl">
              Get Started in 3 Simple Steps
            </h2>
            <p className="mt-5 text-xl font-medium text-[#1d4d12]">
              Healthcare at home has never been easier
            </p>

            <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-center lg:gap-0">
              {steps.map((s, i) => (
                <div key={s.n} className="flex flex-col items-center lg:flex-row lg:items-start">
                  <div className="w-[300px] text-center lg:w-[260px] xl:w-[300px]">
                    <div className="relative mx-auto h-[180px] w-[280px] lg:h-[160px] lg:w-[240px] xl:h-[180px] xl:w-[280px]">
                      <Image
                        src={`/images/${s.img}.webp`}
                        alt={s.title}
                        width={560}
                        height={360}
                        className="h-full w-full rounded-2xl object-cover shadow-lg"
                      />
                      <span className="absolute -left-1 -top-1 flex h-[38px] min-w-[52px] items-center justify-center rounded-br-[22px] rounded-tl-2xl bg-[#0a6a0a] px-3 text-2xl font-bold text-white ring-2 ring-white">
                        {s.n}
                      </span>
                      <span className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-blue-600">
                        <s.icon size={22} />
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                    <p className="mx-auto mt-4 max-w-[290px] text-[16px] leading-relaxed text-gray-500">
                      {s.text}
                    </p>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight
                      size={38}
                      className="my-4 shrink-0 rotate-90 text-blue-500 lg:mx-2 lg:mt-[62px] xl:mx-4 xl:mt-[70px] lg:rotate-0"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Doctor categories */}
        <section className={`${t.sectionBg} py-16 sm:py-20`}>
          <div className="mx-auto max-w-[1200px] px-5 text-center text-white">
            <span className="inline-block rounded-full bg-black px-4 py-2 text-[15px] font-semibold">
              Doctor Categories
            </span>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Find the Right Specialist</h2>
            <p className="mt-5 text-lg font-semibold sm:text-xl">
              Expert doctors across multiple specialties, all available for home visits
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((c) => (
                <article
                  key={c.title}
                  className="relative mx-auto h-[284px] w-full max-w-[290px] overflow-hidden rounded-2xl text-left shadow-lg"
                >
                  <Image
                    src={`/images/${c.img}.webp`}
                    alt=""
                    width={540}
                    height={568}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-white/80" />
                  <div className="relative flex h-full flex-col p-8 text-gray-900">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1f7a2a] text-white">
                      <c.icon size={26} />
                    </span>
                    <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{c.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <DownloadApp
          headingClass="text-[#0a6a0a]"
          buttonClass="bg-gradient-to-b from-[#168a1f] to-[#0a5c0f]"
          phones={[
            { src: "/images/phone-patient-home.webp", alt: "Doctor4Home app home screen", width: 349, height: 786 },
            { src: "/images/phone-patient-search.webp", alt: "Doctor4Home app search results", width: 341, height: 769 },
          ]}
        />
      </main>
      <Footer theme="green" design="line" />
    </>
  );
}
