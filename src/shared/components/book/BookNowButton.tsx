"use client";

import { useBookingModal } from "./BookingModalProvider";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function BookNowButton({ children, className, onClick }: Props) {
  const { openModal } = useBookingModal();
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={() => {
        onClick?.();
        openModal();
      }}
      className={`cursor-pointer ${className ?? ""}`}
    >
      {children}
    </button>
  );
}
