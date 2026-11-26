import type { FaqItem } from "@/types";

export const faqs: FaqItem[] = [
  {
    id: "same-day",
    question: "Do you offer same-day appliance repair?",
    answer:
      "Yes — Margus Appliance Repair offers same-day and next-day service for refrigerators, washers, dryers, ovens, and more across Cleveland, Parma, and surrounding areas whenever scheduling allows.",
  },
  {
    id: "diagnostic-fee",
    question: "How much is your diagnostic fee?",
    answer:
      "Our diagnostic fee is $89, and it's waived when you proceed with the repair — so you only pay for the repair itself. You'll always get an upfront price before any work begins.",
  },
  {
    id: "brands",
    question: "Which brands do you repair?",
    answer:
      "We repair all major brands, including Samsung, LG, Whirlpool, GE, Maytag, KitchenAid, Frigidaire, Bosch, and Fisher & Paykel. Our technicians carry parts for most common brands to fix your appliance on the first visit.",
  },
  {
    id: "coverage-area",
    question: "What areas do you serve?",
    answer:
      "We serve Cleveland, Parma, Lakewood, Strongsville, Euclid, Solon, Westlake, North Olmsted, and surrounding Greater Cleveland communities from our Parma, Ohio base.",
  },
  {
    id: "warranty",
    question: "What warranty comes with a repair?",
    answer:
      "Every completed repair includes a 180-day parts & labor warranty. We also provide upfront pricing and complete most repairs in a single visit.",
  },
];

// Hub questions for /services — how a repair is priced, scheduled and
// guaranteed. Appliance-specific questions belong on the individual service
// pages, and the five general ones above are the home page's.
export const servicesFaqs: FaqItem[] = [
  {
    id: "which-appliances",
    question: "Which appliances do you repair?",
    answer:
      "Refrigerators, freezers, ice makers, washers, dryers, dishwashers, ovens, and stoves and cooktops — gas and electric, freestanding and built-in. Each appliance has its own page covering the faults we see most often on it.",
  },
  {
    id: "what-happens-on-a-visit",
    question: "What happens during a repair visit?",
    answer:
      "The technician diagnoses the fault on site, then gives you a price before any work starts. Most repairs are finished in that same visit.",
  },
  {
    id: "parts-on-truck",
    question: "Will the technician have the part on the first visit?",
    answer:
      "Usually. Our technicians carry parts for the most common brands, which is why most repairs are completed on the first visit.",
  },
  {
    id: "not-worth-repairing",
    question: "What if my appliance isn't worth repairing?",
    answer:
      "We'll say so. The diagnosis gives you the actual fault and the actual cost, so the decision is based on your machine rather than a rule of thumb. If you decide not to go ahead, you pay the $89 diagnostic and nothing else.",
  },
];
