"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type InquiryType = "General" | "Commission" | "Purchase";

interface FormState {
  name: string;
  email: string;
  phone: string;
  inquiry: InquiryType;
  message: string;
  /** Honeypot must stay empty. Bots fill it in. */
  company: string;
}

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  inquiry: "General",
  message: "",
  company: "",
};

interface ContactFormProps {
  defaultInquiry?: InquiryType;
  variant?: "contact" | "commission";
}

export default function ContactForm({
  defaultInquiry = "General",
  variant = "contact",
}: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    ...initial,
    inquiry: defaultInquiry,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please tell me your name.";
    if (!form.email.trim()) next.email = "An email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "That email doesn't look right.";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "A few more words, please — at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      setForm({ ...initial, inquiry: defaultInquiry });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border-b border-ivory/20 bg-transparent pb-3 pt-2 text-ivory placeholder:text-ivory/30 transition-colors duration-300 focus:border-terracotta focus:outline-none";

  const labelClass =
    "text-[0.68rem] uppercase tracking-widest2 text-ivory/50 mb-2 block";

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      {/* Honeypot  hidden from real users, visible to bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-terracotta">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-2 text-xs text-terracotta">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-terracotta">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-2 text-xs text-terracotta">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-ivory/30">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
            placeholder="+1 (000) 000-0000"
          />
        </div>

        {/* Inquiry type */}
        <div>
          <label htmlFor="inquiry" className={labelClass}>
            I&apos;m reaching out about
          </label>
          <select
            id="inquiry"
            name="inquiry"
            value={form.inquiry}
            onChange={(e) => update("inquiry", e.target.value as InquiryType)}
            className={cn(inputClass, "appearance-none cursor-pointer")}
          >
            <option value="General" className="bg-ink text-ivory">
              A general question
            </option>
            <option value="Commission" className="bg-ink text-ivory">
              A custom commission
            </option>
            <option value="Purchase" className="bg-ink text-ivory">
              Purchasing available art
            </option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          {variant === "commission"
            ? "Tell me about the commission you have in mind"
            : "Message"}{" "}
          <span className="text-terracotta">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={cn(inputClass, "resize-none")}
          placeholder={
            variant === "commission"
              ? "Size, palette, mood, the space it's for, timeline anything that helps me imagine it."
              : "What's on your mind?"
          }
        />
        {errors.message && (
          <p className="mt-2 text-xs text-terracotta">{errors.message}</p>
        )}
      </div>

      {/* Submit row */}
      <div className="flex flex-wrap items-center gap-6 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className={cn(
            "group relative inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-[0.72rem] font-medium uppercase tracking-widest2 transition-all duration-500",
            status === "sending"
              ? "cursor-wait bg-ivory/40 text-ink"
              : "bg-ivory text-ink hover:bg-terracotta hover:text-ivory"
          )}
        >
          {status === "sending" ? "Sending…" : "Send Message"}
          <span
            aria-hidden
            className="inline-block h-1 w-1 rounded-full bg-current transition-transform duration-500 group-hover:translate-x-1"
          />
        </button>

        {status === "ok" && (
          <p className="text-sm text-terracotta">
            Thank you — I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-terracotta">
            Something went wrong. Please try again or email me directly.
          </p>
        )}
      </div>
    </form>
  );
}