import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "Doctor FAQs | Doctor4Home",
  description:
    "Answers to the most common questions from doctors about joining the platform, managing appointments, payments, and patient safety.",
};

const categories = [
  {
    label: "Getting Started",
    faqs: [
      {
        q: "How do I register as a doctor on Doctor4Home?",
        a: "Download the Doctor4Home Doctor app, tap 'Register as Doctor', and fill in your personal details, medical license number, specialization, and availability. Our team will verify your credentials within 24–48 hours before activating your account.",
      },
      {
        q: "What documents do I need to submit during registration?",
        a: "You'll need a valid medical license/registration certificate, a government-issued photo ID, proof of specialization (MBBS/MD/MS degree or equivalent), and a recent passport-size photo.",
      },
      {
        q: "How long does the verification process take?",
        a: "Verification typically takes 24 to 48 hours on business days. You'll receive an email and in-app notification once your account is approved and ready to accept patients.",
      },
      {
        q: "Is there a fee to join Doctor4Home?",
        a: "Registration is completely free. Doctor4Home earns a small service commission on each successfully completed consultation — there are no upfront or monthly fees.",
      },
    ],
  },
  {
    label: "Managing Appointments",
    faqs: [
      {
        q: "How do I receive appointment requests from patients?",
        a: "Once you set your availability in the app, patient requests matching your specialty and location will appear in your dashboard. You'll also receive push notifications for new requests.",
      },
      {
        q: "Can I reject or reschedule an appointment?",
        a: "Yes. You can decline requests that don't fit your schedule before accepting them. After acceptance, rescheduling is possible with patient agreement. Frequent last-minute cancellations may affect your rating.",
      },
      {
        q: "How do I set my availability and service area?",
        a: "In the app settings, you can define your weekly schedule, set the radius (in km) you're willing to travel, and block off specific dates. Your profile will only show to patients within your service area.",
      },
      {
        q: "What happens if a patient is unavailable when I arrive?",
        a: "If a patient doesn't respond within 10 minutes of your arrival, you can mark the appointment as a 'No Show' in the app. You'll still receive a partial consultation fee for your time.",
      },
    ],
  },
  {
    label: "Payments & Earnings",
    faqs: [
      {
        q: "How and when do I get paid?",
        a: "Earnings from completed consultations are credited to your in-app wallet within 24 hours of consultation completion. You can withdraw to your bank account at any time, with funds typically arriving within 1–2 business days.",
      },
      {
        q: "What is the platform commission?",
        a: "Doctor4Home charges a 10% service fee on each completed consultation. This covers platform maintenance, patient support, and insurance. The remaining 90% is yours.",
      },
      {
        q: "Can I set my own consultation fee?",
        a: "Yes! You have full control over your consultation fee. You can update it at any time from your profile settings. Setting a competitive fee helps attract more patients.",
      },
      {
        q: "Is there a minimum withdrawal amount?",
        a: "Yes, the minimum withdrawal amount is ₹200 (or equivalent in your currency). There are no withdrawal fees.",
      },
    ],
  },
  {
    label: "Safety & Support",
    faqs: [
      {
        q: "What should I do if I feel unsafe during a home visit?",
        a: "Your safety is our top priority. If you feel unsafe at any point, leave immediately and report the incident through the app. Our 24/7 support team will follow up. All patients are verified before booking.",
      },
      {
        q: "Am I covered by insurance while providing home consultations?",
        a: "Doctor4Home provides limited liability coverage for consultations completed through the platform. We strongly recommend maintaining your own professional indemnity insurance in addition to this.",
      },
      {
        q: "What support does Doctor4Home provide to doctors?",
        a: "We offer 24/7 in-app support, a dedicated doctor helpline, dispute resolution for payment issues, and regular training resources to help you deliver the best patient care.",
      },
      {
        q: "Can I report a patient for inappropriate behaviour?",
        a: "Yes. Use the 'Report Patient' option in the consultation screen. Our team will investigate all reports seriously and take appropriate action, which may include removing the patient from the platform.",
      },
    ],
  },
];

export default function DoctorFaqPage() {
  return (
    <>
      <Navbar theme="purple" />
      <main>
        {/* Hero */}
        <section className="bg-[linear-gradient(135deg,#0c0714_0%,#6e57a8_55%,#b36cf0_100%)] px-5 py-20 text-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
            <HelpCircle size={34} />
          </span>
          <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
            Doctor FAQs
          </h1>
          <p className="mx-auto mt-4 max-w-[560px] text-lg leading-relaxed text-white/80">
            Everything you need to know about joining the platform, managing appointments, earnings, and patient safety.
          </p>
          {/* Role switcher */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 p-1 text-sm backdrop-blur-sm">
            <Link
              href="/faq"
              className="px-5 py-2 font-medium text-white/80 transition-colors hover:text-white"
            >
              For Patients
            </Link>
            <span className="rounded-full bg-white px-5 py-2 font-semibold text-[#6a14a3]">
              For Doctors
            </span>
          </div>
        </section>

        {/* FAQ sections */}
        <section className="bg-[#f8f6fc] py-16 sm:py-20">
          <div className="mx-auto max-w-[780px] px-5">
            {categories.map((cat) => (
              <div key={cat.label} className="mb-12">
                <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-[#6a14a3]">
                  <span className="h-px flex-1 bg-purple-200" />
                  {cat.label}
                  <span className="h-px flex-1 bg-purple-200" />
                </h2>
                <FaqAccordion items={cat.faqs} accentColor="text-[#6a14a3]" />
              </div>
            ))}

            {/* Still have questions CTA */}
            <div className="mt-6 rounded-3xl bg-gradient-to-br from-[#6e57a8] to-[#0c0714] p-8 text-center text-white">
              <h3 className="text-2xl font-bold">Still have questions?</h3>
              <p className="mt-2 text-white/75">
                Our doctor support team is here to help you succeed on the platform.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-block rounded-full bg-white px-8 py-3 text-[15px] font-semibold text-[#6a14a3] transition-opacity hover:opacity-90"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer theme="purple" />
    </>
  );
}
