import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import DownloadApp from "@/components/DownloadApp";

export const metadata = { title: "About Us" };

const team = [
  { name: "Dr. Marcus Santos", role: "General Physician", text: "15+ years of experience in family medicine" },
  { name: "Dr. Bruno Rodrigues", role: "Cardiologist", text: "Specialized in cardiovascular care" },
  { name: "Dr. Sarah Johnson", role: "Pediatrician", text: "Expert in child healthcare" },
  { name: "Dr. Emily Chen", role: "Support Manager", text: "Ensuring seamless patient experience" },
  { name: "Dr. Usman Yousaf", role: "Internal Medicine", text: "Comprehensive adult healthcare" },
  { name: "Dr. Ahmed Khan", role: "Neurologist", text: "Brain and nervous system specialist" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar theme="blue" tinted />
      <main>
        <section className="mx-auto max-w-[1100px] px-5 pt-14 sm:pt-20">
          <h1 className="font-display text-5xl text-[#2f5fc4]">About Us</h1>

          <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
            <Image
              src="/images/about-team.webp"
              alt="The Doctor4Home team"
              width={1200}
              height={630}
              priority
              className="h-auto w-full rounded-3xl object-cover"
            />
            <div>
              <h2 className="text-3xl font-medium text-[#2f5fc4]">Our Vision</h2>
              <p className="mt-6 max-w-[430px] leading-relaxed text-gray-900">
                Our vision is to transform the way healthcare reaches people by
                making medical support more convenient, comfortable, and
                available at home. We aim to bridge the gap between patients and
                trusted doctors through a platform that values speed, care, and
                reliability.
                <br />
                We want every family to feel secure knowing that professional
                healthcare is just a few clicks away — anytime it is needed.
              </p>
            </div>
          </div>

          <div className="mt-20 space-y-16 pb-20">
            <div>
              <h2 className="text-3xl font-medium text-[#2f5fc4]">Our Mission</h2>
              <p className="mt-4 max-w-[900px] leading-relaxed text-gray-700">
                Our mission is to make quality healthcare accessible to
                everyone, everywhere. We aim to empower doctors with better
                tools and provide patients with seamless, reliable, and timely
                care — all from the comfort of their homes.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-medium text-[#2f5fc4]">Goal</h2>
              <p className="mt-4 max-w-[900px] leading-relaxed text-gray-700">
                To create a simple and accessible healthcare platform that helps
                patients book doctors for home visits quickly and easily, while
                providing a smooth, trustworthy, and user-friendly experience
                for both patients and doctors.
              </p>
            </div>
          </div>
        </section>

        <WhyChooseUs
          sectionClass="bg-gradient-to-b from-[#3b6ff0] to-[#02040a]"
          iconClass="bg-[#d8f7d8] text-[#0a6a0a]"
          title="Why Choose Us"
          subtitle="Experience healthcare like never before"
        />

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-[900px] px-5">
            <h2 className="text-center text-3xl font-medium text-gray-900">Meet Our Team</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((m, i) => (
                <article
                  key={m.name}
                  className="overflow-hidden rounded-lg bg-white text-center shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
                >
                  <Image
                    src={`/images/team-${i + 1}.webp`}
                    alt={m.name}
                    width={300}
                    height={300}
                    className="aspect-square w-full object-cover"
                  />
                  <div className="px-4 py-4">
                    <h3 className="text-[17px] font-medium text-gray-900">{m.name}</h3>
                    <p className="mt-1 text-sm text-blue-600">{m.role}</p>
                    <p className="mt-2 text-xs text-gray-500">{m.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="relative bg-[#d9fbdb] [clip-path:polygon(0_40px,100%_0,100%_100%,0_100%)]">
          <DownloadApp
            className="pt-24"
            headingClass="text-[#0a6a0a]"
            buttonClass="bg-gradient-to-b from-[#168a1f] to-[#0a5c0f]"
            phones={[
              { src: "/images/phone-patient-1.webp", alt: "Doctor4Home app home screen", width: 560, height: 620 },
              { src: "/images/phone-patient-2.webp", alt: "Doctor4Home app search results", width: 552, height: 590 },
            ]}
          />
        </div>
      </main>
      <Footer theme="blue" />
    </>
  );
}
