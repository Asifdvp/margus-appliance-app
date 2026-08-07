import type { Metadata } from "next";
import { PageWrapper } from "@/shared/layout/PageWrapper";
import { CONTACT_INFO, ADDRESS, SITE_NAME } from "@/constants";
import { canonicalUrl } from "@/shared/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of the Margus Appliance Repair website and our appliance repair services in Cleveland & Parma, OH.",
  alternates: {
    canonical: canonicalUrl("/terms-of-service"),
  },
  robots: { index: true, follow: true },
};

const sectionHeading = "font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8 mt-8 mb-2";
const paragraph = "font-manrope text-sm md:text-base leading-6 text-secondary mb-3";

export default function TermsOfServicePage() {
  return (
    <PageWrapper>
      <h1 className="font-work-sans font-bold text-dark text-[28px] md:text-[40px] leading-9 md:leading-12 mb-2">
        Terms of Service
      </h1>
      <p className="font-manrope text-sm text-secondary mb-6">
        Last updated: August 2, 2026
      </p>

      <p className={paragraph}>
        These terms govern your use of the {SITE_NAME} Repair website
        (margusappliancerepair.com) and the appliance repair services we
        provide. By using this site or booking a service with us, you agree
        to these terms.
      </p>

      <h2 className={sectionHeading}>Our Services</h2>
      <p className={paragraph}>
        We provide residential appliance diagnostic and repair services in
        Cleveland, Parma, and the surrounding Greater Cleveland area. Our
        diagnostic fee is $89, which is waived when you proceed with the
        repair. Completed repairs are backed by a 180-day parts &amp; labor
        warranty covering the specific repair performed.
      </p>

      <h2 className={sectionHeading}>Estimates &amp; Pricing</h2>
      <p className={paragraph}>
        Any pricing shown on this website is general and for informational
        purposes only. The exact price for your repair is confirmed on-site
        after a technician diagnoses the issue, and no repair work begins
        without your approval of that price.
      </p>

      <h2 className={sectionHeading}>Scheduling &amp; Booking</h2>
      <p className={paragraph}>
        Booking requests submitted through this site (by form, phone, or
        email) are appointment requests, not guaranteed confirmations, until
        we contact you to confirm a time. Same-day and next-day availability
        depends on our current schedule.
      </p>

      <h2 className={sectionHeading}>Warranty</h2>
      <p className={paragraph}>
        Our 180-day parts &amp; labor warranty covers defects related to the
        specific repair we performed. It does not cover new or unrelated
        issues, damage from misuse, or normal wear and tear on other parts of
        the appliance.
      </p>

      <h2 className={sectionHeading}>Cancellations</h2>
      <p className={paragraph}>
        We ask that you give us as much notice as possible if you need to
        reschedule or cancel an appointment, so we can offer that time to
        another customer.
      </p>

      <h2 className={sectionHeading}>Website Content</h2>
      <p className={paragraph}>
        The text, images, and branding on this website belong to {SITE_NAME}{" "}
        Repair and may not be copied or reused without permission. Content is
        provided for general informational purposes and is not a substitute
        for an on-site diagnosis.
      </p>

      <h2 className={sectionHeading}>Limitation of Liability</h2>
      <p className={paragraph}>
        To the extent permitted by law, {SITE_NAME} Repair is not liable for
        indirect or incidental damages arising from use of this website. This
        does not limit any liability related to the actual repair services
        we perform, which is governed by the terms agreed to at the time of
        service.
      </p>

      <h2 className={sectionHeading}>Governing Law</h2>
      <p className={paragraph}>
        These terms are governed by the laws of the State of Ohio.
      </p>

      <h2 className={sectionHeading}>Changes to These Terms</h2>
      <p className={paragraph}>
        We may update these terms from time to time. Changes will be posted
        on this page with an updated &quot;Last updated&quot; date.
      </p>

      <h2 className={sectionHeading}>Contact Us</h2>
      <p className={paragraph}>
        Questions about these terms? Reach us at{" "}
        <a href={CONTACT_INFO.emailHref} className="text-brand font-semibold hover:underline">
          {CONTACT_INFO.email}
        </a>{" "}
        or{" "}
        <a href={CONTACT_INFO.phoneHref} className="text-brand font-semibold hover:underline">
          {CONTACT_INFO.phone}
        </a>
        , or by mail at {ADDRESS.full}.
      </p>
    </PageWrapper>
  );
}
