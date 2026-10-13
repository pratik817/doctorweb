import Image from "next/image";

// Green-to-purple wordmark colour, switching around the "4" like the brand logo.
const brandText =
  "bg-[linear-gradient(90deg,#2e8b1f_0%,#2e8b1f_40%,#5b2a86_62%,#5b2a86_100%)] bg-clip-text text-transparent";

// The house icon with "Doctor4Home" and "Healthcare Redefined" as real text.
// Shared by the header and the footer; `large` is the footer size.
export default function Logo({ large = false }) {
  return (
    <span className="flex items-center gap-2">
      {/* House icon. The PNG is cropped to the drawing, so its box is the
          real edge and it lines up with the text beside it. */}
      <Image
        src="/images/house-logo.png"
        alt=""
        width={254}
        height={240}
        loading={large ? "lazy" : "eager"}
        className={`w-auto flex-shrink-0 ${large ? "h-[44px]" : "h-[34px]"}`}
      />

      {/* Logo Text */}
      <span className="flex flex-col items-center">
        <span
          className={`font-extrabold leading-[1.1] tracking-tight ${
            large ? "text-[25px]" : "text-[19px]"
          } ${brandText}`}
        >
          Doctor4Home
        </span>
        <span
          className={`font-hand leading-[1.2] tracking-wide ${
            large ? "text-[13.5px]" : "text-[10.5px]"
          } ${brandText}`}
        >
          Healthcare Redefined
        </span>
      </span>
    </span>
  );
}
