"use client";

import { useState } from "react";
import { SERVICES } from "@/content/services";
import RightArrowIcon from "@/shared/icons/right-arrow.svg";
import { cn } from "@/shared/lib/utils";
import { BookingField } from "./BookingField";
import { BookingSelect } from "./BookingSelect";

const APPLIANCE_OPTIONS = SERVICES.map((s) => s.title);

type FormData = {
  name: string;
  phone: string;
  zip: string;
  email: string;
  brand: string;
  appliance: string;
  issue: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  name: "",
  phone: "",
  zip: "",
  email: "",
  brand: "",
  appliance: "",
  issue: "",
};

function fieldCn(hasError: boolean) {
  return cn(
    "w-full rounded-xl bg-[#F6F6F6] h-10 px-4 py-3 font-manrope text-[14px] lg:text-[16px] lg:leading-6 text-dark outline-none transition-all placeholder:text-grey",
    "focus:ring-2 focus:ring-brand/30 focus:bg-white",
    hasError && "ring-2 ring-red-400 bg-red-50"
  );
}

interface Props {
  onSuccess: () => void;
}

export function BookingForm({ onSuccess }: Props) {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  function handleChange(field: keyof FormData) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };
  }

  function validate(): boolean {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Required";
    if (!form.phone.trim()) next.phone = "Required";
    if (!form.zip.trim()) next.zip = "Required";
    if (!form.appliance) next.appliance = "Select an appliance";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setServerError(false);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, hp: honeypot }),
      });
      if (res.ok) {
        onSuccess();
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
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Honeypot — invisible to humans, bots fill it */}
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

      {/* Row 1 — Name · Phone · ZIP */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <BookingField htmlFor="b-name" label="Name" required error={errors.name}>
          <input
            id="b-name"
            type="text"
            autoFocus
            autoComplete="name"
            value={form.name}
            onChange={handleChange("name")}
            className={fieldCn(!!errors.name)}
          />
        </BookingField>

        <BookingField htmlFor="b-phone" label="Phone" required error={errors.phone}>
          <input
            id="b-phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange("phone")}
            className={fieldCn(!!errors.phone)}
          />
        </BookingField>

        <BookingField htmlFor="b-zip" label="ZIP code" required error={errors.zip}>
          <input
            id="b-zip"
            type="text"
            inputMode="numeric"
            maxLength={5}
            autoComplete="postal-code"
            value={form.zip}
            onChange={handleChange("zip")}
            className={fieldCn(!!errors.zip)}
          />
        </BookingField>
      </div>

      {/* Row 2 — Email · Brand */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <BookingField htmlFor="b-email" label="Email" optional>
          <input
            id="b-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange("email")}
            className={fieldCn(false)}
          />
        </BookingField>

        <BookingField htmlFor="b-brand" label="Brands" optional>
          <input
            id="b-brand"
            type="text"
            placeholder="e.g. Samsung, LG, Bosch"
            value={form.brand}
            onChange={handleChange("brand")}
            className={fieldCn(false)}
          />
        </BookingField>
      </div>

      {/* Row 3 — Appliance */}
      <BookingField htmlFor="b-appliance" label="Appliance" required error={errors.appliance}>
        <BookingSelect
          id="b-appliance"
          value={form.appliance}
          onChange={(val) => {
            setForm((prev) => ({ ...prev, appliance: val }));
            if (errors.appliance) setErrors((prev) => ({ ...prev, appliance: undefined }));
          }}
          options={APPLIANCE_OPTIONS}
          hasError={!!errors.appliance}
        />
      </BookingField>

      {/* Row 4 — Issue */}
      <BookingField htmlFor="b-issue" label="Describe your issue" optional>
        <textarea
          id="b-issue"
          rows={10}
          value={form.issue}
          onChange={handleChange("issue")}
          className={cn(fieldCn(false), "resize-none h-30")}
        />
      </BookingField>

      {serverError && (
        <p role="alert" className="font-manrope text-[13px] text-red-500 text-center">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="mt-1 inline-flex items-center justify-center gap-1 w-full rounded-xl bg-brand py-2.5 lg:py-4 font-manrope text-[16px] lg:text-[18px] leading-7 font-semibold text-white transition-colors hover:bg-brand/90 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        {loading ? "Sending…" : "Send"}
        {!loading && <RightArrowIcon aria-hidden="true" className="w-5 h-5" />}
      </button>
    </form>
  );
}
