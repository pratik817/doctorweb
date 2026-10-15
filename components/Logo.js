import Image from "next/image";

// Green-to-purple wordmark colour, switching around the "4" like the brand logo.
const brandText =
  "bg-[linear-gradient(90deg,#2e8b1f_0%,#2e8b1f_40%,#5b2a86_62%,#5b2a86_100%)] bg-clip-text text-transparent";

// The house icon with "Doctor4Home" and "Healthcare Redefined" as real text.
// The header uses the colour version; `onDark` is the white footer version.
export default function Logo({ onDark = false }) {
  const textColour = onDark ? "text-white" : brandText;
  return (
    <span className={`flex items-center ${onDark ? "gap-3" : "gap-2"}`}>
      {/* House icon. The PNG is cropped to the drawing, so its box is the
          real edge and it lines up with the text beside it. */}
      <Image
        src="/images/house-logo.png"
        alt=""
        width={254}
        height={240}
        loading={onDark ? "lazy" : "eager"}
        className={`w-auto flex-shrink-0 ${onDark ? "h-[46px] brightness-0 invert" : "h-[34px]"}`}
      />

      {/* Logo Text */}
      <span className={`flex flex-col ${onDark ? "items-start" : "items-center"}`}>
        <span
          className={`font-extrabold leading-[1.1] tracking-tight ${
            onDark ? "text-[24px]" : "text-[19px]"
          } ${textColour}`}
        >
          Doctor4Home
        </span>
        <span
          className={`font-hand leading-[1.2] tracking-wide ${
            onDark ? "text-[13px]" : "text-[10.5px]"
          } ${textColour}`}
        >
          Healthcare Redefined
        </span>
      </span>
    </span>
  );
}
