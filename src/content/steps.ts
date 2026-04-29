import type { Step } from "@/types";

export const STEPS: Step[] = [
  {
    id: "schedule",
    title: "Request & Schedule",
    description:
      "Getting started is quick and easy. You can reach out to us by phone, email, or through our online booking form. Once we receive your request, ",
  },
  {
    id: "diagnosis",
    title: "Diagnosis & Quote",
    description:
      "Our certified technician will arrive at your location on time, fully equipped with the tools and knowledge to assess your appliance.",
  },
  {
    id: "repair",
    title: "Repair & Replace",
    description:
      "Once you approve the quote, we move forward with the repair. We use only high-quality, manufacturer-approved parts to ensure long-term performance and durability. ",
  },
  {
    id: "warranty",
    title: "Test & Guarantee",
    description:
      "After the repair is completed, we thoroughly test your appliance to ensure it’s running at optimal performance. We double-check all settings",
  },
];

export const steps = STEPS;
