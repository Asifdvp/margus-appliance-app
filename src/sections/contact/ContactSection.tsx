"use client";

import { Container } from "@/shared/layout/Container";
import { ServiceAreaMapDynamic } from "@/shared/ui/ServiceAreaMapDynamic";
import { CONTACT_INFO } from "@/constants";
import ArrowIcon from "@/shared/icons/right-arrow.svg";
import MailIcon from "@/shared/icons/mail.svg";

const inputClass =
  "w-full border border-[#D2D2D2] rounded-xl bg-[#F6F6F6] px-4 py-3 font-manrope text-sm leading-5.5 text-dark placeholder:text-grey outline-none focus:ring-2 focus:ring-brand transition-shadow";

const labelClass = "block font-manrope text-base leading-6 text-dark mb-1";

export function ContactSection() {
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
              Have questions or feedback about our services? We are here to
              help. Get in touch today, and our team will respond within 24
              hours.
            </p>

            <form className="flex flex-col gap-3 ">
              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-3 lg:gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name Surname
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    className={inputClass}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="zip" className={labelClass}>
                    ZIP code
                  </label>
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    placeholder="44101"
                    className={inputClass}
                    autoComplete="postal-code"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className={inputClass}
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className={inputClass}
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe your appliance issue..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-1 rounded-xl bg-brand py-3 font-manrope text-[14px] lg:text-[18px] md:py-4 lg:leading-7 font-semibold leading-5.5 text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Send
                <ArrowIcon aria-hidden="true" />
              </button>
            </form>
          </div>

          {/* Right — map + email */}
          <div className="flex flex-col gap-4 lg:h-full">
            <div className="isolate flex-1 min-h-70 rounded-3xl overflow-hidden shadow-sm">
              <ServiceAreaMapDynamic />
            </div>

            <div className="flex items-center gap-2 lg:gap-4 bg-[#F6F6F6] rounded-xl py-3 px-2.5 lg:py-5 lg:px-6 ">
             <MailIcon className="shrink-0 w-4 h-4 lg:w-6 lg:h-6" aria-hidden="true"/>
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
