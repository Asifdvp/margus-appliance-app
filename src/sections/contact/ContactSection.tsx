"use client";

import { useState } from "react";
import { Container } from "@/shared/layout/Container";
import { ServiceAreaMapDynamic } from "@/shared/ui/ServiceAreaMapDynamic";
import { CONTACT_INFO } from "@/constants";
import ArrowIcon from "@/shared/icons/right-arrow.svg";
import MailIcon from "@/shared/icons/mail.svg";
import { cn } from "@/shared/lib/utils";

type FormData = {
  name: string;
  phone: string;
  zip: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = { name: "", phone: "", zip: "", email: "", message: "" };

const inputCn = (hasError: boolean) =>
  cn(
    "w-full rounded-xl bg-[#F6F6F6] px-4 py-3 font-manrope text-sm leading-5.5 lg:text-[15px] text-dark outline-none transition-all placeholder:text-grey",
    "focus:ring-2 focus:ring-brand/30 focus:bg-white",
    hasError && "ring-2 ring-red-400 bg-red-50"
  );

const labelCn = "block font-manrope text-[13px] lg:text-[14px] font-medium text-dark mb-1.5";

function SuccessView({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <path d="M5 14L11 20L23 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <h3 className="font-work-sans font-bold text-[22px] text-dark mb-2">Message Sent!</h3>
        <p className="font-manrope text-secondary text-[14px] leading-6 max-w-xs mx-auto">
          Thank you! We&apos;ll get back to you within 3-5 minutes.
        </p>
      </div>
      <button
        onClick={onReset}
        className="cursor-pointer font-manrope text-[14px] font-semibold text-brand underline underline-offset-4 hover:text-brand/70 transition-colors"
      >
        Send another message
      </button>
    </div>
  );
}

export function ContactSection() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };
  }

  function validate(): boolean {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Required";
    if (!form.phone.trim()) next.phone = "Required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setServerError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, hp: honeypot }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setServerError(true);
      }
    } catch {
      setServerError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white pt-3 pb-8 lg:py-18">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6">

          {/* Left — form */}
          <div>
            <h2 className="font-work-sans font-bold text-dark text-[30px] leading-8.75 lg:text-[48px] lg:leading-14 mb-4 lg:mb-6">
              Let&apos;s Chat, Reach out to Us
            </h2>
            <p className="font-manrope text-xs leading-4.5 lg:text-base lg:leading-6 text-secondary mb-4 lg:mb-6">
              Have questions or feedback about our services? We are here to help.
              Get in touch today, and our team will respond within 3-5 minutes.
            </p>

            {submitted ? (
              <SuccessView onReset={() => { setSubmitted(false); setForm(INITIAL); }} />
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                {/* Honeypot */}
                <input
                  type="text"
                  name="hp"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  aria-hidden="true"
                  autoComplete="off"
                  className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
                />

                {/* Row 1 — Name · ZIP */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className={labelCn}>
                      Name <span className="text-brand">*</span>
                    </label>
                    <input
                      id="c-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange("name")}
                      className={inputCn(!!errors.name)}
                    />
                    {errors.name && <p role="alert" className="mt-1 font-manrope text-[11px] text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="c-zip" className={labelCn}>ZIP code</label>
                    <input
                      id="c-zip"
                      name="zip"
                      type="text"
                      inputMode="numeric"
                      maxLength={5}
                      autoComplete="postal-code"
                      value={form.zip}
                      onChange={handleChange("zip")}
                      className={inputCn(false)}
                    />
                  </div>
                </div>

                {/* Row 2 — Phone · Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-phone" className={labelCn}>
                      Phone <span className="text-brand">*</span>
                    </label>
                    <input
                      id="c-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange("phone")}
                      className={inputCn(!!errors.phone)}
                    />
                    {errors.phone && <p role="alert" className="mt-1 font-manrope text-[11px] text-red-500">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="c-email" className={labelCn}>Email</label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange("email")}
                      className={inputCn(false)}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="c-message" className={labelCn}>Message</label>
                  <textarea
                    id="c-message"
                    name="message"
                    rows={5}
                    placeholder="Describe your appliance issue..."
                    value={form.message}
                    onChange={handleChange("message")}
                    className={cn(inputCn(false), "resize-none")}
                  />
                </div>

                {serverError && (
                  <p role="alert" className="font-manrope text-[13px] text-red-500 text-center">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-1 rounded-xl bg-brand py-3 md:py-4 font-manrope text-[14px] lg:text-[18px] lg:leading-7 font-semibold leading-5.5 text-white transition-colors hover:bg-brand/90 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  {loading ? "Sending…" : "Send"}
                  {!loading && <ArrowIcon className="w-5 h-5 shrink-0" aria-hidden="true" />}
                </button>
              </form>
            )}
          </div>

          {/* Right — map + email */}
          <div className="flex flex-col gap-4 lg:h-full">
            <div className="isolate flex-1 min-h-70 rounded-3xl overflow-hidden shadow-sm">
              <ServiceAreaMapDynamic />
            </div>
            <div className="flex items-center gap-2 lg:gap-4 bg-[#F6F6F6] rounded-xl py-3 px-2.5 lg:py-5 lg:px-6">
              <MailIcon className="shrink-0 w-4 h-4 lg:w-6 lg:h-6" aria-hidden="true" />
              <span className="font-manrope text-sm lg:text-[18px] lg:leading-7 leading-5.5 text-dark font-semibold">
                Email:{" "}
                <a
                  href={CONTACT_INFO.emailHref}
                  className="font-semibold text-dark hover:text-brand transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
