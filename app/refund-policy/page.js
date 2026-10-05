import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { RotateCcw } from "lucide-react";

export const metadata = {
  title: "Refund Policy | Doctor4Home",
  description:
    "Understand Doctor4Home's refund and cancellation policy for home doctor consultations.",
};

const sections = [
  {
    title: "Overview",
    paragraphs: [
      'This Refund Policy outlines the terms under which Doctor4Home ("we", "us", or "our") processes refunds and cancellations for appointments booked through our platform. We strive to be fair and transparent with all our users — both patients and doctors. By using our services, you agree to the terms described below.',
    ],
  },
  {
    title: "Patient Cancellations",
    paragraphs: [
      "Patients may cancel a confirmed appointment subject to the following conditions:",
    ],
    items: [
      "Cancellation more than 24 hours before the appointment: Full refund issued within 5–7 business days.",
      "Cancellation between 2 and 24 hours before the appointment: 50% refund of the consultation fee.",
      "Cancellation less than 2 hours before the appointment: No refund will be issued.",
      "No-show (patient not available at the time of the visit): No refund will be issued.",
    ],
    after:
      "All cancellations must be made through the Doctor4Home app or website. Verbal or third-party cancellations are not accepted.",
  },
  {
    title: "Doctor Cancellations",
    paragraphs: [
      "In the rare event that a confirmed appointment is cancelled by the doctor:",
    ],
    items: [
      "A full refund of the consultation fee will be issued to the patient automatically.",
      "The refund will be processed within 3–5 business days to the original payment method.",
      "You will be notified immediately via the app and email.",
      "We will attempt to match you with another available doctor for the same day where possible.",
    ],
  },
  {
    title: "Platform or Technical Issues",
    paragraphs: [
      "If an appointment is disrupted or could not be completed due to a technical fault on the Doctor4Home platform, you are entitled to a full refund. This includes:",
    ],
    items: [
      "App or server outages preventing appointment confirmation.",
      "Payment processing failures leading to a duplicate charge.",
      "Inability to complete a video or in-person consultation due to a platform error.",
    ],
    after:
      "Please report technical issues to our support team within 48 hours of the affected appointment to qualify for a refund.",
  },
  {
    title: "Non-Refundable Situations",
    paragraphs: [
      "Refunds will not be issued in the following circumstances:",
    ],
    items: [
      "Consultations that have been fully completed by the doctor.",
      "Dissatisfaction with the doctor's advice or diagnosis — we recommend reporting the issue through the in-app feedback system.",
      "Cancellations made after the appointment time has passed.",
      "Bookings made using promotional credits, vouchers, or discount codes (these are non-refundable unless stated otherwise).",
      "Misuse of the platform or violations of our Terms & Conditions.",
    ],
  },
  {
    title: "Refund Process",
    paragraphs: [
      "Approved refunds are processed as follows:",
    ],
    items: [
      "Credit/Debit Card payments: Refunded to the original card within 5–7 business days.",
      "UPI / Net Banking: Refunded to the originating account within 3–5 business days.",
      "In-app wallet credits: Refunded to the Doctor4Home wallet immediately.",
      "Cash payments: Reimbursed via bank transfer within 7 business days upon submission of bank details.",
    ],
    after:
      "Actual credit timing may vary depending on your bank or payment provider. Doctor4Home is not responsible for delays caused by financial institutions.",
  },
  {
    title: "How to Request a Refund",
    paragraphs: [
      "To request a refund, please follow these steps:",
    ],
    items: [
      "Open the Doctor4Home app and navigate to 'My Appointments'.",
      "Select the relevant appointment and tap 'Request Refund'.",
      "Provide a brief reason for the refund request.",
      "Our support team will review and respond within 2 business days.",
      "Alternatively, email us at support@doctor4home.com with your booking ID and reason.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "Doctor4Home reserves the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to this page. We encourage you to review this policy periodically. Continued use of our services after any change constitutes acceptance of the updated policy.",
      "If you have any questions about this Refund Policy, please contact us through the Contact page or email us at support@doctor4home.com.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar theme="blue" />
      <main className="flex-1 bg-[#f4f6fa]">
        {/* Hero header */}
        <div className="bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] px-5 py-14 text-center text-white">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
            <RotateCcw size={32} />
          </span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">Refund Policy</h1>
          <p className="mx-auto mt-4 max-w-[560px] text-lg leading-relaxed text-white/80">
            We believe in fair and transparent refunds. Here&rsquo;s everything
            you need to know about cancellations and refunds.
          </p>
          <p className="mt-6 text-sm text-white/60">
            Last updated: October 2026
          </p>
        </div>

        <div className="mx-auto max-w-[900px] px-5">

          {/* Policy sections */}
          <div className="mt-10 rounded-3xl bg-white px-6 py-2 shadow-sm sm:px-10">
            {sections.map((s) => (
              <section
                key={s.title}
                className="border-b border-gray-100 py-10 last:border-b-0"
              >
                <h2 className="text-[17px] font-semibold uppercase tracking-wide text-[#2563eb]">
                  {s.title}
                </h2>
                {s.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mt-4 text-[15px] leading-relaxed text-gray-600"
                  >
                    {p}
                  </p>
                ))}
                {s.items && (
                  <ul className="mt-4 space-y-2.5 pl-5 text-[15px] text-gray-600">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563eb]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {s.after && (
                  <p className="mt-6 rounded-xl bg-blue-50 px-4 py-3 text-[14px] leading-relaxed text-blue-800">
                    {s.after}
                  </p>
                )}
              </section>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="my-12 rounded-3xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] p-8 text-center text-white">
            <h3 className="text-2xl font-bold">Need help with a refund?</h3>
            <p className="mt-2 text-white/80">
              Our support team is available 24/7 to assist you.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-full bg-white px-8 py-3 text-[15px] font-semibold text-[#2563eb] transition-opacity hover:opacity-90"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </main>
      <Footer theme="blue" />
    </>
  );
}
