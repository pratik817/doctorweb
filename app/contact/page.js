import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact Us" };

const info = [
  {
    icon: MapPin,
    text: "Swaraj Pride B-F.NO.107, S.NO.40/3/2, Dhawale Chowk Rd., Punawale, Chinchwadgaon, Pune, Pune City, Maharashtra, India, 411033",
  },
  { icon: Phone, text: "+91-9823532688" },
  { icon: Mail, text: "helpdesk.d4h@gmail.com" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar theme="blue" tinted />
      <main className="flex-1">
        <section className="mx-auto grid max-w-[1100px] items-center gap-12 px-5 py-16 sm:py-24 md:grid-cols-[1fr_350px] lg:grid-cols-[1fr_350px]">
          <div>
            <h1 className="text-5xl font-bold text-[#2563eb]">Contact us</h1>
            <p className="mt-6 max-w-[420px] text-[17px] leading-relaxed text-gray-700">
              Have questions or need support? We&rsquo;re here to help you with
              bookings, doctor services, and app-related assistance.
            </p>
            <h2 className="mt-10 text-2xl font-semibold text-gray-900">Let&rsquo;s talk with us</h2>
            <ul className="mt-6 space-y-5">
              {info.map((i) => (
                <li key={i.text} className="flex items-center gap-4 text-[15px] text-gray-800">
                  <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#dbe8fd] text-blue-600">
                    <i.icon size={16} />
                  </span>
                  {i.text}
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer theme="blue" tinted />
    </>
  );
}
