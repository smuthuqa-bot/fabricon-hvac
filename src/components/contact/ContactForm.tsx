"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-2xl border border-[var(--fabricon-line)] bg-white p-7 shadow-sm md:p-9">
      <span className="section-kicker">Send Us a Message</span>

      <h2 className="mt-5 text-3xl font-black tracking-[-0.035em] text-[var(--fabricon-navy)]">
        Tell us about your requirement.
      </h2>

      <p className="mt-3 text-sm leading-7 text-[var(--fabricon-muted)]">
        Share your project or enquiry details and our team can get back to
        you.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="text-sm font-bold text-[var(--fabricon-navy)]">
              Your Name *
            </label>

            <input
              required
              name="name"
              type="text"
              className="mt-2 w-full rounded-lg border border-[var(--fabricon-line)] bg-[var(--fabricon-soft)] px-4 py-3.5 text-sm outline-none transition focus:border-[var(--fabricon-navy)]"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-sm font-bold text-[var(--fabricon-navy)]">
              Your Email *
            </label>

            <input
              required
              name="email"
              type="email"
              className="mt-2 w-full rounded-lg border border-[var(--fabricon-line)] bg-[var(--fabricon-soft)] px-4 py-3.5 text-sm outline-none transition focus:border-[var(--fabricon-navy)]"
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="text-sm font-bold text-[var(--fabricon-navy)]">
              Your Phone
            </label>

            <input
              name="phone"
              type="tel"
              className="mt-2 w-full rounded-lg border border-[var(--fabricon-line)] bg-[var(--fabricon-soft)] px-4 py-3.5 text-sm outline-none transition focus:border-[var(--fabricon-navy)]"
              placeholder="+965 / +91"
            />
          </div>

          <div>
            <label className="text-sm font-bold text-[var(--fabricon-navy)]">
              Company Name
            </label>

            <input
              name="company"
              type="text"
              className="mt-2 w-full rounded-lg border border-[var(--fabricon-line)] bg-[var(--fabricon-soft)] px-4 py-3.5 text-sm outline-none transition focus:border-[var(--fabricon-navy)]"
              placeholder="Company"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-[var(--fabricon-navy)]">
            Message *
          </label>

          <textarea
            required
            name="message"
            rows={6}
            className="mt-2 w-full resize-none rounded-lg border border-[var(--fabricon-line)] bg-[var(--fabricon-soft)] px-4 py-3.5 text-sm outline-none transition focus:border-[var(--fabricon-navy)]"
            placeholder="Tell us about your project or requirement..."
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-[var(--fabricon-navy)] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#FB5501]"
        >
          Send Message
        </button>

        {submitted && (
          <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
            Thank you. Your enquiry has been recorded locally for now.
          </p>
        )}
      </form>
    </div>
  );
}