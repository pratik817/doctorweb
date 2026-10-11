import {
  Architects_Daughter,
  Inter,
  Josefin_Sans,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
// handwritten face for the "Healthcare Redefined" logo tagline
const architects = Architects_Daughter({
  variable: "--font-architects",
  weight: "400",
  subsets: ["latin"],
});
const josefin = Josefin_Sans({ variable: "--font-josefin", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Doctor4Home | Healthcare Redefined",
    template: "%s | Doctor4Home",
  },
  description:
    "Book a verified doctor for a home visit. Quality healthcare right at your doorstep.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${josefin.variable} ${playfair.variable} ${architects.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
