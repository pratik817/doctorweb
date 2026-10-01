import { Calendar, Headphones, House, ShieldCheck } from "lucide-react";

const items = [
  { icon: Calendar, title: "Easy booking", text: "Book appointments with just a few clicks" },
  { icon: ShieldCheck, title: "Verified doctors", text: "All our doctors are certified professionals" },
  { icon: House, title: "Home consultation", text: "Get medical advice from the comfort of your home" },
  { icon: Headphones, title: "Fast support", text: "24/7 customer support for all your needs" },
];

export default function WhyChooseUs({
  id,
  sectionClass,
  pillClass,
  iconClass,
  title = "Experience Healthcare Like Never Before",
  subtitle = "We combine technology with compassion to deliver exceptional home healthcare services",
}) {
  return (
    <section id={id} className={`${sectionClass} py-14 text-center text-white sm:py-16`}>
      <div className="mx-auto max-w-[1200px] px-5">
        {pillClass && (
          <span className={`inline-block rounded-full px-4 py-2 text-[15px] font-semibold ${pillClass}`}>
            Why Choose Us
          </span>
        )}
        <h2 className="mt-3 text-3xl font-bold sm:text-[40px] sm:leading-tight">{title}</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-lg font-medium">{subtitle}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article
              key={it.title}
              className="rounded-[32px] bg-white px-6 py-6 text-gray-900 shadow-lg"
            >
              <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${iconClass}`}>
                <it.icon size={30} strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-xl font-medium">{it.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-500">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
