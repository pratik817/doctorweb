import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Terms & Conditions" };

const sections = [
  {
    title: "1. General Disclaimer",
    lines: [
      "The information provided on this platform is for general informational purposes only and should not be considered as professional medical advice.",
      "All medical decisions should be made in consultation with qualified healthcare professionals.",
      "We do not guarantee the accuracy, completeness, or timeliness of information provided through our platform.",
      "Emergency medical situations require immediate attention from emergency services and should not rely solely on our platform.",
      "We are not liable for any direct or indirect consequences arising from the use of our services.",
    ],
  },
  {
    title: "2. User Responsibilities",
    intro: "As a user of the Doctor4Home platform, you agree to:",
    lines: [
      "Provide accurate and complete information during registration and consultations",
      "Maintain the confidentiality of your account credentials and personal health information",
      "Use the platform only for lawful purposes and in accordance with these terms",
      "Respect the professional relationship with healthcare providers",
      "Pay all applicable fees for services rendered in a timely manner",
      "Not misuse or attempt to gain unauthorized access to the platform",
    ],
  },
  {
    title: "3. Service Provider Responsibilities",
    intro: "Healthcare providers on our platform must:",
    lines: [
      "Maintain valid medical licenses and certifications required by law",
      "Adhere to professional medical ethics and standards of care",
      "Protect patient confidentiality and comply with applicable privacy regulations",
      "Provide accurate medical advice based on their professional expertise",
      "Respond to patient inquiries in a timely and professional manner",
      "Disclose any potential conflicts of interest to patients",
    ],
  },
  {
    title: "4. Ownership & Company Information",
    intro: "This platform is owned and operated by:",
    company: true,
  },
  {
    title: "5. Acceptance of Terms",
    lines: [
      "By creating an account, accessing our platform, or using any of our services, you expressly acknowledge that you have read and understood these Terms & Conditions in their entirety.",
      "Your continued use of the platform constitutes your acceptance of these terms and any future modifications. If you do not agree with any part of these terms, you must discontinue use of our services immediately.",
      "We reserve the right to modify these terms at any time, and such modifications will be effective upon posting to the platform. You are responsible for reviewing these terms periodically to stay informed of any updates.",
    ],
  },
  {
    title: "6. Electronic Record Compliance",
    lines: [
      "This platform maintains electronic records in compliance with the Information Technology Act, 2000 and the rules made thereunder, as applicable to electronic records in various statutes as amended by the Information Technology Act, 2000.",
      "All electronic communications, transactions, and records generated through our platform are legally valid and enforceable. You consent to receive communications and maintain records in electronic form as per applicable law.",
      "We implement appropriate technical and organizational measures to ensure the security, integrity, and confidentiality of electronic health records in accordance with applicable data protection regulations.",
    ],
  },
  {
    title: "7. Registration & User Accounts",
    lines: [
      "To access certain features of our platform, you must register for an account by providing accurate, current, and complete information. You are solely responsible for maintaining the security of your account and all activities that occur under your account. You agree to notify us immediately of any unauthorized access or use of your account. We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar theme="blue" />
      <main className="flex-1 bg-[#f4f6fa]">
        <div className="mx-auto max-w-[900px] px-5 py-12">
          <h1 className="text-4xl font-bold text-[#2f5fe8]">Terms &amp; Conditions</h1>
          <p className="mt-6 text-gray-600">Essential App for Everyone&rsquo;s Home Health Needs</p>
          <p className="mt-10 leading-relaxed text-gray-600">
            Welcome to the Treat At Home (TAH) platform. By accessing and using
            our healthcare services, you acknowledge that you have read,
            understood, and agree to be bound by these Terms &amp; Conditions.
            Our platform connects patients with qualified healthcare providers
            for home-based medical consultations and treatments. Please review
            these terms carefully before proceeding.
          </p>

          {sections.map((s) => (
            <section key={s.title} className="mt-10">
              <h2 className="text-lg font-semibold text-[#2f5fe8]">{s.title}</h2>
              {s.intro && <p className="mt-5 text-gray-600">{s.intro}</p>}
              {s.lines?.map((l) => (
                <p key={l.slice(0, 30)} className="mt-4 leading-relaxed text-gray-600">
                  {l}
                </p>
              ))}
              {s.company && (
                <address className="mt-5 rounded-lg bg-white p-6 text-[15px] not-italic leading-relaxed text-gray-600">
                  <strong className="font-semibold">NG Web Services Pvt. Ltd.</strong>
                  <br />
                  Registered Office Address:
                  <br />
                  123 Healthcare Boulevard
                  <br />
                  Medical District, Tech Park
                  <br />
                  Bangalore, Karnataka 560001
                  <br />
                  India
                </address>
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer theme="blue" />
    </>
  );
}
