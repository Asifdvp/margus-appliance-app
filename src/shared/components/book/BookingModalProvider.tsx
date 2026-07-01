"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { BookingModal } from "./BookingModal";

interface BookingModalContextValue {
  openModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export function useBookingModal(): BookingModalContextValue {
  const ctx = useContext(BookingModalContext);
  if (!ctx) throw new Error("useBookingModal must be used inside <BookingModalProvider>");
  return ctx;
}

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <BookingModalContext.Provider value={{ openModal }}>
      {children}
      {isOpen && <BookingModal onClose={closeModal} />}
    </BookingModalContext.Provider>
  );
}
