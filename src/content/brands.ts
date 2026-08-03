import type { Brand } from "@/types";

export const brands: Brand[] = [
  { id: "lg",         name: "LG",         logo: "/brands/lg.png" },
  {
    id: "samsung",
    name: "Samsung",
    logo: "/brands/samsung.png",
    description: "Certified Samsung appliance repair in Cleveland & Parma",
    heroTitle: "Samsung Appliance Repair in Cleveland & Parma",
    metaTitle: "Samsung Appliance Repair Cleveland & Parma",
    metaDescription:
      "Certified Samsung refrigerator, washer, dryer & appliance repair in Cleveland & Parma, OH. Same-day service, honest pricing, 180-day warranty. Call today!",
    intro: [
      "Samsung appliances rely on digital inverter compressors, sensor-based diagnostics, and touchscreen control boards that aren't always straightforward to service. Margus Appliance Repair provides same-day Samsung appliance repair for homeowners across Cleveland, Parma, and the surrounding Greater Cleveland area. Our licensed technicians are experienced specifically with Samsung's technology, diagnose the problem on-site, and complete most repairs in a single visit.",
    ],
    commonProblems: [
      "Samsung refrigerator not cooling or ice maker not making ice",
      "Digital Inverter compressor errors or constant cycling",
      "Samsung washer not spinning, draining, or displaying an error code",
      "Samsung dryer not heating or sensor-dry cycle not working",
      "Touchscreen or control panel unresponsive",
      "Samsung dishwasher not draining, cleaning, or leaking",
    ],
    commonProblemsNote:
      "If your problem isn't listed here, call us anyway — our diagnostic visit will pinpoint the exact issue.",
    sections: [
      {
        heading: "Why Samsung Appliances Need Specialized Diagnosis",
        paragraphs: [
          "Samsung's digital inverter compressors, smart sensors, and connected control boards behave differently than older mechanical appliances — a generic repair approach often misses the real cause. Our technicians are trained on this technology specifically, so they diagnose Samsung error codes and sensor faults accurately instead of guessing and replacing parts by trial and error.",
        ],
      },
      {
        heading: "Samsung Appliances We Repair",
        paragraphs: [
          "We repair the full Samsung lineup: French-door, side-by-side, and Family Hub refrigerators; front-load and top-load washers; electric and gas dryers; dishwashers; and ranges. Whether it's a basic model or one with smart, Wi-Fi-connected features, our technicians carry the diagnostic knowledge and common parts to fix most problems on the first visit.",
        ],
      },
      {
        heading: "Genuine and Manufacturer-Approved Parts",
        paragraphs: [
          "We repair using genuine or manufacturer-approved compatible parts, depending on availability and what fits your budget best — we'll always walk you through your options and the price before any work begins.",
        ],
      },
    ],
    faqs: [
      {
        id: "authorized",
        question: "Are you an authorized Samsung repair service?",
        answer:
          "We're an independent, certified appliance repair company — not a Samsung-owned service center — with technicians experienced specifically in Samsung's control-board, sensor, and digital inverter technology, letting us diagnose and repair most Samsung appliances quickly and affordably.",
      },
      {
        id: "cost",
        question: "How much does Samsung appliance repair cost?",
        answer:
          "Our diagnostic fee is $89, and it's waived when you proceed with the repair — so you only pay for the repair itself. You'll always get an upfront price before any work begins.",
      },
      {
        id: "genuine-parts",
        question: "Do you use genuine Samsung parts?",
        answer:
          "We use genuine and manufacturer-approved compatible parts depending on availability and what best fits your budget, and we'll explain your options before starting any repair.",
      },
      {
        id: "family-hub",
        question: "Do you repair Samsung Family Hub and smart refrigerators?",
        answer:
          "Yes — we repair Samsung's smart and Family Hub refrigerators, including touchscreen and connectivity issues as well as standard cooling or ice-maker problems.",
      },
      {
        id: "same-day",
        question: "Do you offer same-day Samsung appliance repair?",
        answer:
          "Yes. We offer same-day service across Cleveland, Parma, and surrounding areas whenever our schedule allows.",
      },
    ],
  },
  { id: "bosch",      name: "Bosch",      logo: "/brands/bosch.png" },
  { id: "electrolux", name: "Electrolux", logo: "/brands/electrolux.png" },
  { id: "amana",      name: "Amana",      logo: "/brands/amana.png" },
  { id: "ge",         name: "GE",         logo: "/brands/ge.png" },
  { id: "whirlpool",  name: "Whirlpool",  logo: "/brands/whirlpool.png" },
  { id: "subzero",    name: "Sub-Zero",   logo: "/brands/subzero.png" },
  { id: "thermador",  name: "Thermador",  logo: "/brands/thermador.png" },
  { id: "kitchenaid", name: "KitchenAid", logo: "/brands/kitchenAid.png" },
  { id: "maytag",     name: "Maytag",     logo: "/brands/maytag.png" },
  { id: "frigidaire", name: "Frigidaire", logo: "/brands/frigidaire.png" },
  { id: "speedqueen", name: "Speed Queen", logo: "/brands/speedQueen.png" },
  { id: "wolf",       name: "Wolf",       logo: "/brands/wolf.png" },
  { id: "viking",     name: "Viking",     logo: "/brands/viking.png" },
  { id: "kenmore",    name: "Kenmore",    logo: "/brands/kenmore.png" },
];