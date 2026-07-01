"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/shared/lib/utils";

interface Props {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  hasError?: boolean;
}

export function BookingSelect({ id, value, onChange, options, hasError }: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function select(opt: string) {
    onChange(opt);
    setOpen(false);
    buttonRef.current?.focus();
  }

  const displayValue = value || "";

  return (
    <div ref={containerRef} className="relative">
      {/* Hidden input for form association */}
      <input type="hidden" id={id} value={value} />

      {/* Trigger button */}
      <button
        ref={buttonRef}
        type="button"
        role="combobox"
        aria-controls={`${id}-listbox`}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "w-full flex items-center justify-between rounded-xl bg-[#F6F6F6] px-4 py-3 font-manrope text-[14px] lg:text-[15px] text-left outline-none",
          "focus-visible:ring-2 focus-visible:ring-brand/30",
          open && "ring-2 ring-brand/30 bg-white",
          hasError && "ring-2 ring-red-400 bg-red-50",
          !displayValue && "text-grey"
        )}
      >
        <span className={displayValue ? "text-dark" : "text-grey"}>
          {displayValue || ""}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
          className={cn("text-grey shrink-0 transition-transform duration-150", open && "rotate-180")}
        >
          <path
            d="M2.5 5L7 9.5L11.5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown list */}
      {open && (
        <ul
          ref={listRef}
          id={`${id}-listbox`}
          role="listbox"
          aria-label="Select appliance"
          className="absolute left-0 right-0 top-[calc(100%+4px)] z-20 max-h-56 overflow-y-auto scrollbar-none rounded-xl bg-white shadow-lg border border-black/8 py-1"
        >
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={opt === value}
              onMouseDown={(e) => {
                e.preventDefault();
                select(opt);
              }}
              className={cn(
                "px-4 py-2.5 font-manrope text-[14px] lg:text-[15px] cursor-pointer select-none",
                opt === value
                  ? "bg-brand/10 text-brand font-semibold"
                  : "text-dark hover:bg-[#F6F6F6]"
              )}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
