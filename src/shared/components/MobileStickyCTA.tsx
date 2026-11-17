import { CONTACT_INFO } from "@/constants";
import PhoneWhiteIcon from "@/shared/icons/phone-white.svg";
import DateIcon from "@/shared/icons/date.svg";
import { BookNowButton } from "@/shared/components/book";

/**
 * Mobile-only bottom action bar: Call + Book Now, always visible.
 * Renders a spacer of the same height so the bar never hides the end of the page (footer).
 */
export function MobileStickyCTA() {
  return (
    <>
      {/* Spacer so the fixed bar doesn't cover the footer */}
      <div aria-hidden="true" className="lg:hidden h-[calc(78px+env(safe-area-inset-bottom))]" />

      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]">
        <div className="flex gap-3 px-3 py-3">
          <a
            href={CONTACT_INFO.phoneHref}
            aria-label={`Call ${CONTACT_INFO.phone}`}
            className="grow inline-flex items-center justify-center gap-1 rounded-2xl bg-[#14082E] px-3 py-4 font-manrope text-[18px] leading-5.5 font-semibold text-white whitespace-nowrap transition-colors active:bg-[#14082E]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <PhoneWhiteIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
            {CONTACT_INFO.phone}
          </a>

          <BookNowButton className="grow inline-flex items-center justify-center gap-1 rounded-2xl bg-secondary-brand px-5 py-4 font-manrope text-[18px] leading-5.5 font-semibold text-white whitespace-nowrap transition-colors active:bg-secondary-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">
            <DateIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
            Book Now
          </BookNowButton>
        </div>
      </div>
    </>
  );
}
