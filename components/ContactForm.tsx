"use client";

import { useState, useActionState } from "react";
import { submitContact } from "@/app/contact/action";

const audiences = [
  { value: "clinician", label: "Clinician / Hospital" },
  { value: "researcher", label: "Research Partner" },
  { value: "investor", label: "Investor" },
  { value: "press", label: "Press / Media" },
  { value: "other", label: "Other" },
] as const;

export function ContactForm() {
  const [selectedAudience, setSelectedAudience] = useState<string>("");
  const [state, formAction, isPending] = useActionState(submitContact, {
    success: false,
    message: "",
  });

  if (state.success) {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <h3 className="font-display font-bold text-xl text-green-800 mb-2">
          Message sent
        </h3>
        <p className="text-ink-600 text-sm">
          Thank you for reaching out. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-ink-800 mb-2">
          I am a...
        </label>
        <div className="flex flex-wrap gap-2">
          {audiences.map((a) => (
            <button
              key={a.value}
              type="button"
              onClick={() => setSelectedAudience(a.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                selectedAudience === a.value
                  ? "bg-green-50 border-green-400 text-green-800"
                  : "bg-cream-50 border-ink-100 text-ink-600 hover:border-ink-200"
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>
        <input type="hidden" name="audience" value={selectedAudience} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink-800 mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-ink-100 text-ink-900 text-sm placeholder:text-ink-300 focus:outline-none focus:border-green-500 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink-800 mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-ink-100 text-ink-900 text-sm placeholder:text-ink-300 focus:outline-none focus:border-green-500 transition-colors"
            placeholder="you@organization.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-ink-800 mb-1.5">
          Organization
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-ink-100 text-ink-900 text-sm placeholder:text-ink-300 focus:outline-none focus:border-green-500 transition-colors"
          placeholder="Hospital, university, or company"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-800 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-ink-100 text-ink-900 text-sm placeholder:text-ink-300 focus:outline-none focus:border-green-500 transition-colors resize-y"
          placeholder="Tell us about your needs..."
        />
      </div>

      {state.message && !state.success && (
        <p className="text-red-600 text-sm">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="px-8 py-3.5 rounded-full bg-green-600 text-cream-50 font-semibold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
