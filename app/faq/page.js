import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "Patient FAQs | Doctor4Home",
  description:
    "Answers to the most common questions from patients about booking doctors, home visits, payments, and more.",
};

const categories = [
  {
    label: "Booking & Appointments",
    faqs: [
      {
        q: "How do I book a doctor for a home visit?",
        a: "Download the Doctor4Home app, create a patient account, search for a doctor by specialty or availability, choose a time slot, and confirm your booking. You'll receive a confirmation notification once a doctor accepts.",
      },
      {
        q: "Can I book a same-day appointment?",
        a: "Yes! Many doctors on our platform offer same-day slots. Simply filter by 'Available Today' when searching and you'll see all doctors who can visit you on the same day.",
      },
      {
        q: "How far in advance can I book an appointment?",
        a: "You can book up to 30 days in advance. We recommend booking at least 24 hours ahead to ensure your preferred doctor and time slot are available.",
      },
      {
        q: "Can I reschedule or cancel my booking?",
        a: "Yes, you can reschedule or cancel a booking up to 2 hours before the appointment without any penalty. Cancellations made less than 2 hours before the appointment may incur a small cancellation fee.",
      },
    ],
  },
  {
    label: "Doctors & Consultations",
    faqs: [
      {
        q: "Are the doctors on Doctor4Home verified?",
        a: "Absolutely. Every doctor undergoes a strict verification process including medical license validation, background checks, and credential verification before being listed on our platform.",
      },
      {
        q: "What specialties are available?",
        a: "We currently offer General Physicians, Pediatricians, Dentists, Cardiologists, Dermatologists, and many more. The available specialties depend on your location.",
      },
      {
        q: "What happens during the home visit?",
        a: "The doctor will arrive at your address at the scheduled time with all necessary equipment for a basic consultation. They'll examine you, provide a diagnosis, prescribe medication if needed, and advise on further treatment.",
      },
      {
        q: "Can I choose a specific doctor?",
        a: "Yes, you can browse doctor profiles including their specialization, experience, ratings, and reviews, then select the one you prefer.",
      },
    ],
  },
  {
    label: "Payments & Pricing",
    faqs: [
      {
        q: "How much does a home visit cost?",
        a: "Consultation fees vary by doctor specialty and experience. You'll always see the full fee upfront before confirming a booking — there are no hidden charges.",
      },
      {
        q: "What payment methods are accepted?",
        a: "We accept credit/debit cards, UPI, net banking, and cash on consultation. You can pay securely through the app before or after the visit.",
      },
      {
        q: "Is there a platform fee on top of the consultation fee?",
        a: "No. The price you see is the price you pay. Doctor4Home does not charge any additional platform or convenience fees to patients.",
      },
      {
        q: "Will I get a receipt or invoice?",
        a: "Yes, a digital invoice is automatically generated and sent to your registered email after each consultation.",
      },
    ],
  },
  {
    label: "Safety & Privacy",
    faqs: [
      {
        q: "Is my personal health information safe?",
        a: "Your data is encrypted and stored securely. We are fully compliant with healthcare data privacy standards and never share your information with third parties without your explicit consent.",
      },
      {
        q: "What safety measures do doctors follow during home visits?",
        a: "All doctors are required to maintain hygiene protocols, wear appropriate protective equipment where necessary, and follow our safety guidelines during every home visit.",
      },
      {
        q: "What should I do if I feel unsafe during a visit?",
        a: "You can end the consultation at any time and report the doctor through the app. Our support team is available 24/7 to assist you with any safety concerns.",
      },
    ],
  },
];

export default function PatientFaqPage() {
  return (
    <>
      <Navbar theme="green" />
      <main>
        {/* Hero */}
        <section className="bg-[linear-gradient(160deg,#0f8a1e_0%,#0a5f12_50%,#021a02_100%)] px-5 py-20 text-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
            <HelpCircle size={34} />
          </span>
          <h1 className="mt-5 text-4xl font-bold text-[#fffbc2] sm:text-5xl">
            Patient FAQs
          </h1>
          <p className="mx-auto mt-4 max-w-[560px] text-lg leading-relaxed text-white/85">
            Everything you need to know about booking doctors, home visits, payments, and your health data.
          </p>
          {/* Role switcher */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 p-1 text-sm backdrop-blur-sm">
            <span className="rounded-full bg-white px-5 py-2 font-semibold text-[#0a6a0a]">
              For Patients
            </span>
            <Link
              href="/doctor/faq"
              className="px-5 py-2 font-medium text-white/80 transition-colors hover:text-white"
            >
              For Doctors
            </Link>
          </div>
        </section>

        {/* FAQ sections */}
        <section className="bg-[#f6faf6] py-16 sm:py-20">
          <div className="mx-auto max-w-[780px] px-5">
            {categories.map((cat) => (
              <div key={cat.label} className="mb-12">
                <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-[#0a6a0a]">
                  <span className="h-px flex-1 bg-green-200" />
                  {cat.label}
                  <span className="h-px flex-1 bg-green-200" />
                </h2>
                <FaqAccordion items={cat.faqs} accentColor="text-[#0a6a0a]" />
              </div>
            ))}

            {/* Still have questions CTA */}
            <div className="mt-6 rounded-3xl bg-gradient-to-br from-[#0a6a0a] to-[#021a02] p-8 text-center text-white">
              <h3 className="text-2xl font-bold">Still have questions?</h3>
              <p className="mt-2 text-white/80">
                Our support team is available 24/7 to help you.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-block rounded-full bg-white px-8 py-3 text-[15px] font-semibold text-[#0a6a0a] transition-opacity hover:opacity-90"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer theme="green" />
    </>
  );
}
