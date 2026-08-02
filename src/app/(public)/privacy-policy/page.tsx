import type { Metadata } from "next";
import { PageWrapper } from "@/shared/layout/PageWrapper";
import { CONTACT_INFO, ADDRESS, SITE_NAME } from "@/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Margus Appliance",
  description:
    "How Margus Appliance Repair collects, uses, and protects the information you share with us in Cleveland & Parma, OH.",
  alternates: {
    canonical: "https://margusappliancerepair.com/privacy-policy",
  },
  robots: { index: true, follow: true },
};

const sectionHeading = "font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8 mt-8 mb-2";
const paragraph = "font-manrope text-sm md:text-base leading-6 text-secondary mb-3";
const listItem = "font-manrope text-sm md:text-base leading-6 text-secondary";

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper>
      <h1 className="font-work-sans font-bold text-dark text-[28px] md:text-[40px] leading-9 md:leading-12 mb-2">
        Privacy Policy
      </h1>
      <p className="font-manrope text-sm text-secondary mb-6">
        Last updated: August 2, 2026
      </p>

      <p className={paragraph}>
        {SITE_NAME} Repair (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This
        page explains what information we collect through this website, why
        we collect it, and how it&apos;s handled.
      </p>

      <h2 className={sectionHeading}>Information We Collect</h2>
      <p className={paragraph}>
        We only collect information you choose to give us — there is no
        account system or automatic profile-building on this site. When you
        submit our contact form or booking form, we collect:
      </p>
      <ul className="list-disc pl-5 flex flex-col gap-1.5 mb-3">
        <li className={listItem}>Your name and phone number</li>
        <li className={listItem}>Your email address (if provided)</li>
        <li className={listItem}>Your ZIP code or service address</li>
        <li className={listItem}>
          Details about your appliance, brand, and the issue you&apos;re
          reporting
        </li>
      </ul>

      <h2 className={sectionHeading}>How We Use It</h2>
      <p className={paragraph}>
        We use this information for one purpose: to respond to your request,
        schedule a repair, and provide the service you asked for. We do not
        sell, rent, or use your information for advertising.
      </p>

      <h2 className={sectionHeading}>Who We Share It With</h2>
      <p className={paragraph}>
        When you submit a form on this site, the details are delivered
        directly to our team via Telegram, a secure messaging service, so we
        can respond quickly. We do not share your information with data
        brokers, advertisers, or any other third party. We may disclose
        information if required to do so by law.
      </p>

      <h2 className={sectionHeading}>Cookies &amp; Analytics</h2>
      <p className={paragraph}>
        This site does not currently use advertising or analytics tracking
        cookies. If that changes in the future, we will update this policy to
        reflect it.
      </p>

      <h2 className={sectionHeading}>Data Retention</h2>
      <p className={paragraph}>
        We keep the information you submit only as long as needed to respond
        to your request and complete any service you book with us, or as
        required for our business records.
      </p>

      <h2 className={sectionHeading}>Your Choices</h2>
      <p className={paragraph}>
        You can ask us what information we have about you, or ask us to
        delete it, at any time by contacting us using the details below.
      </p>

      <h2 className={sectionHeading}>Children&apos;s Privacy</h2>
      <p className={paragraph}>
        This site is intended for adults seeking appliance repair services
        and is not directed at children under 13.
      </p>

      <h2 className={sectionHeading}>Changes to This Policy</h2>
      <p className={paragraph}>
        We may update this policy from time to time. Changes will be posted
        on this page with an updated &quot;Last updated&quot; date.
      </p>

      <h2 className={sectionHeading}>Contact Us</h2>
      <p className={paragraph}>
        Questions about this policy or your information? Reach us at{" "}
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
