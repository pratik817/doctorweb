"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const field =
  "w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-green-400";

const specialties = [
  "General Physician",
  "Pediatrician",
  "Dentist",
  "Cardiologist",
  "Dermatologist",
  "Other Specialist",
];

export default function BookingForm({ onSuccess }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      patientName:  formData.get("patientName"),
      phone:        formData.get("phone"),
      email:        formData.get("email") || "",
      address:      formData.get("address"),
      specialty:    formData.get("specialty"),
      preferredDate: formData.get("preferredDate"),
      preferredTime: formData.get("preferredTime"),
      notes:        formData.get("notes") || "",
      status:       "pending",
      bookedAt:     serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "appointments"), data);
      setSubmitted(true);
      e.currentTarget.reset();
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Firestore error:", err);
      setError("Failed to save your booking. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-100 bg-green-50 p-8 text-center">
        <span className="text-5xl">✅</span>
        <h3 className="mt-4 text-xl font-bold text-green-800">Booking Confirmed!</h3>
        <p className="mt-2 text-[15px] text-green-700">
          We&rsquo;ve received your appointment request. Our team will contact you
          shortly to confirm the visit.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-green-600 px-8 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-100"
        >
          Book Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Patient name + phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="patientName" className="mb-1 block text-sm font-medium text-gray-700">
            Patient Name <span className="text-red-500">*</span>
          </label>
          <input
            id="patientName"
            name="patientName"
            required
            placeholder="Full name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 XXXXX XXXXX"
            className={field}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className={field}
        />
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="mb-1 block text-sm font-medium text-gray-700">
          Home Address <span className="text-red-500">*</span>
        </label>
        <input
          id="address"
          name="address"
          required
          placeholder="Street, City, State"
          className={field}
        />
      </div>

      {/* Specialty */}
      <div>
        <label htmlFor="specialty" className="mb-1 block text-sm font-medium text-gray-700">
          Doctor Specialty <span className="text-red-500">*</span>
        </label>
        <select id="specialty" name="specialty" required className={field}>
          <option value="">Select a specialty…</option>
          {specialties.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Date + Time */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="preferredDate" className="mb-1 block text-sm font-medium text-gray-700">
            Preferred Date <span className="text-red-500">*</span>
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            required
            min={new Date().toISOString().split("T")[0]}
            className={field}
          />
        </div>
        <div>
          <label htmlFor="preferredTime" className="mb-1 block text-sm font-medium text-gray-700">
            Preferred Time <span className="text-red-500">*</span>
          </label>
          <select id="preferredTime" name="preferredTime" required className={field}>
            <option value="">Select a slot…</option>
            {["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
              "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
              "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="mb-1 block text-sm font-medium text-gray-700">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Describe symptoms or special requirements…"
          className={`${field} resize-none`}
        />
      </div>

      {error && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-gradient-to-b from-[#168a1f] to-[#0a5c0f] py-3.5 text-[16px] font-semibold text-white shadow-md transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Booking…" : "Book Appointment"}
      </button>
    </form>
  );
}
