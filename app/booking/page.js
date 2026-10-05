import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { CalendarCheck } from "lucide-react";

export const metadata = {
  title: "Book a Doctor | Doctor4Home",
  description:
    "Book a verified doctor for a home visit. Fill in your details and we'll confirm your appointment quickly.",
};

export default function BookingPage() {
  return (
    <>
      <Navbar theme="green" />
      <main className="flex-1">
        <section className="mx-auto max-w-[720px] px-5 py-16 sm:py-24">
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700">
              <CalendarCheck size={32} />
            </span>
            <h1 className="mt-4 text-4xl font-bold text-[#0a6a0a] sm:text-5xl">
              Book a Doctor
            </h1>
            <p className="mt-4 text-[17px] leading-relaxed text-gray-600">
              Fill in the form below and a verified doctor will visit you at home
              at your preferred time.
            </p>
          </div>

          {/* Booking form card */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl sm:p-10">
            <BookingForm />
          </div>
        </section>
      </main>
      <Footer theme="green" />
    </>
  );
}
