interface Props {
  onClose: () => void;
}

export function BookingSuccessView({ onClose }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center gap-5">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <path
            d="M5 14L11 20L23 8"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <h2 className="font-work-sans font-bold text-[26px] leading-8 text-dark mb-2">
          Booking Received!
        </h2>
        <p className="font-manrope text-secondary text-[15px] leading-6 max-w-xs mx-auto">
          Thank you! We&apos;ll contact you within 24 hours to confirm your repair appointment.
        </p>
      </div>
      <button
        onClick={onClose}
        className="inline-flex items-center justify-center rounded-xl bg-brand px-8 py-3 font-manrope text-[15px] font-semibold text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        Close
      </button>
    </div>
  );
}
