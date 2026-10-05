"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const field =
  "w-full rounded-md bg-gray-100 px-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-indigo-400";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget; // save ref before any await
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName:  formData.get("firstName"),
      lastName:   formData.get("lastName"),
      email:      formData.get("email"),
      phone:      formData.get("phone") || "",
      message:    formData.get("message"),
      submittedAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "contacts"), data);
      setSent(true);
      form.reset();
    } catch (err) {
      console.error("Firestore error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
          disabled={loading}
          className="rounded-full bg-[#4f46e5] px-10 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#4338ca] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending…" : "Send Message"}
        </button>
        {sent && (
          <p role="status" className="mt-4 text-sm font-medium text-white">
            Thanks! Your message has been noted. We&rsquo;ll get back to you soon.
          </p>
        )}
        {error && (
          <p role="alert" className="mt-4 text-sm font-medium text-red-200">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}
