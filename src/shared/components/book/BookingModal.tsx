"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BookingForm } from "./BookingForm";
import { BookingSuccessView } from "./BookingSuccessView";
import CloseIcon from "@/shared/icons/close.svg";

interface Props {
  onClose: () => void;
}

export function BookingModal({ onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-white rounded-xl w-full max-w-184 max-h-[90vh] shadow-2xl animate-float-in">
        <button
          onClick={onClose}
          aria-label="Close booking modal"
          className="border-[#F6F6F6] absolute top-2 right-3 lg:-top-3 lg:-right-3 cursor-pointer z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white transition-colors hover:bg-[#E5E5E5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <CloseIcon />
        </button>

        <div className="overflow-y-auto scrollbar-none max-h-[90vh]">
          <div className="p-6">
            {submitted ? (
              <BookingSuccessView onClose={onClose} />
            ) : (
              <>
                <div className="mb-6">
                  <h2
                    id="booking-modal-title"
                    className="max-w-[624px] font-work-sans font-bold text-[26px] lg:text-[48px] lg:leading-14 leading-tight text-dark mb-6"
                  >
                    Book Your <br/> <span className="text-brand">Repair Online</span>
                  </h2>
                  <p className="font-manrope text-secondary text-[13px] lg:text-[16px] leading-5.5 lg:leading-6">
                    Have questions or feedback about our services? We are here
                    to help. Get in touch today, and our team will respond
                    within 24 hours.
                  </p>
                </div>
                <BookingForm onSuccess={() => setSubmitted(true)} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
