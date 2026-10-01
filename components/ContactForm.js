"use client";

import { useState } from "react";

const field =
  "w-full rounded-md bg-gray-100 px-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-indigo-400";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    // No backend yet: wire this to an API route or email service when ready.
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#5b9dff] p-6 shadow-xl"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="firstName" required placeholder="First Name" aria-label="First Name" className={field} />
        <input name="lastName" required placeholder="Last Name" aria-label="Last Name" className={field} />
      </div>
      <input name="email" type="email" required placeholder="Email" aria-label="Email" className={`${field} mt-4`} />
      <input name="phone" type="tel" placeholder="Phone Number" aria-label="Phone Number" className={`${field} mt-4`} />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Message"
        aria-label="Message"
        className={`${field} mt-4 resize-none`}
      />
      <div className="mt-6 text-center">
        <button
          type="submit"
          className="rounded-full bg-[#4f46e5] px-10 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#4338ca]"
        >
          Send Message
        </button>
        {sent && (
          <p role="status" className="mt-4 text-sm font-medium text-white">
            Thanks! Your message has been noted. We&rsquo;ll get back to you soon.
          </p>
        )}
      </div>
    </form>
  );
}
