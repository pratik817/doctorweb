import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Privacy Policy" };

const sections = [
  {
    title: "Overview",
    paragraphs: [
      'This Privacy Policy describes how Doctor4Home ("we", "us", or "our") collects, uses, and protects your personal information. By using our website or services, you agree to the terms outlined in this policy. We are committed to ensuring that your privacy is protected and that any information you provide is handled with the utmost care and in compliance with applicable data protection regulations.',
    ],
  },
  {
    title: "We may collect the following information",
    paragraphs: [
      "When you interact with our services, we may collect various types of information to provide you with the best possible experience:",
    ],
    items: [
      "Name, contact information including email address and phone number",
      "Demographic information such as postcode, preferences, and interests",
      "Medical history and health-related information necessary for providing healthcare services",
      "Payment and billing information",
      "Other information relevant to customer surveys, service feedback, and healthcare consultations",
    ],
  },
  {
    title: "Our use of your information",
    paragraphs: [
      "We require this information to understand your needs and provide you with better service. Specifically, we use your information for the following purposes:",
    ],
    items: [
      "Internal record keeping and service delivery",
      "Improving our products, services, and healthcare offerings",
      "Sending periodic emails about new services, healthcare tips, or other information which we think you may find interesting",
      "Customizing the website and services according to your interests",
      "Conducting market research and analyzing service usage patterns",
    ],
    after:
      "We will not sell, distribute, or lease your personal information to third parties unless we have your explicit permission or are required by law to do so.",
  },
  {
    title: "Protection of personal information",
    paragraphs: [
      "We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online. All sensitive medical and payment information is encrypted using industry-standard SSL/TLS protocols. Our systems are regularly audited and updated to maintain the highest security standards. Access to personal data is restricted to authorized personnel only, and we implement strict access controls and monitoring.",
    ],
  },
  {
    title: "Controlling your personal information",
    paragraphs: [
      "You may choose to restrict the collection or use of your personal information in the following ways:",
    ],
    items: [
      "When filling out forms on our website, look for the checkbox that you can click to indicate that you do not want the information to be used for direct marketing purposes",
      "If you have previously agreed to us using your personal information for direct marketing, you may change your mind at any time by contacting us",
      "You have the right to request details of personal information we hold about you",
      "You may request correction of any information you believe is inaccurate",
      "You have the right to request deletion of your personal data, subject to legal and regulatory requirements",
    ],
  },
  {
    title: "Website terms",
    paragraphs: [
      "This Privacy Policy is effective as of the date stated at the bottom of this page. We reserve the right to update or modify this policy at any time without prior notice. Any changes will be posted on this page, and we encourage you to review this Privacy Policy periodically. Your continued use of our services following any changes constitutes your acceptance of such changes. If you have any questions or concerns about this Privacy Policy or our data practices, please contact us using the information provided on our website.",
    ],
    after:
      "By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to be bound by its terms.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar theme="blue" />
      <main className="flex-1 bg-[#f4f6fa]">
        <div className="mx-auto max-w-[900px] px-5 py-12">
          <header className="border-b border-gray-200 pb-12 text-center">
            <h1 className="text-4xl font-bold text-[#2f5fe8]">Privacy Policy</h1>
            <p className="mx-auto mt-8 max-w-[640px] leading-relaxed text-gray-600">
              Doctor4Home is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, and safeguard your personal
              information when you use our services.
            </p>
          </header>

          {sections.map((s) => (
            <section key={s.title} className="border-b border-gray-200 py-10 last:border-b-0">
              <h2 className="text-[17px] font-semibold uppercase text-[#2f5fe8]">{s.title}</h2>
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 20)} className="mt-5 text-[15px] leading-relaxed text-gray-600">
                  {p}
                </p>
              ))}
              {s.items && (
                <ul className="mt-4 space-y-3 pl-6 text-[15px] text-gray-600">
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              )}
              {s.after && (
                <p className="mt-6 text-[15px] font-medium uppercase leading-relaxed text-gray-600">
                  {s.after}
                </p>
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer theme="blue" />
    </>
  );
}
