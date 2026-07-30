import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "refrigerator-repair",
    title: "Refrigerator Repair",
    description:
      "Not cooling? Not making ice? Water leaking?",
    href: "/services/refrigerator-repair",
    icon: "/images/services/refrigator.png",
    detailImage: "/images/services/refrigator.png",
    heroTitle: "Refrigerator Repair in Cleveland & Parma",
    badges: [
      "Same-day service",
      "Free upfront quotes",
      "180-day parts & labor warranty",
    ],
    intro: [
      "When your refrigerator stops working, every hour counts — spoiled food and rising temperatures can cost you fast. Margus Appliance Repair provides same-day refrigerator repair for homeowners across Cleveland, Parma, and the surrounding Greater Cleveland area. Our technicians diagnose cooling, defrost, and leak problems on-site and complete most repairs in a single visit. We repair all makes and models, from basic top-freezers to high-end French-door and built-in refrigerators.",
    ],
    commonProblems: [
      "Refrigerator not cooling or not cold enough",
      "Freezer section not freezing",
      "Ice maker not working or making too little ice",
      "Water leaking inside or pooling under the fridge",
      "Loud compressor, buzzing, or clicking noises",
      "Temperature swinging too warm or too cold",
      "Frost building up and blocking the freezer vent",
      "Worn door seals and gaskets letting cold air escape",
    ],
    commonProblemsNote:
      "If your problem isn't listed here, call us anyway — our diagnostic visit will pinpoint the exact issue.",
    sections: [
      {
        heading: "Why Isn't Your Refrigerator Cooling?",
        paragraphs: [
          "Warm milk, spoiled leftovers, and a hum that suddenly stops are early warning signs. A refrigerator that won't cool disrupts your whole household within hours. The most common causes are failing compressors, blocked condenser coils, faulty thermostats, and worn door seals. Our technicians serving Cleveland and Parma are trained to diagnose and repair all of these — quickly, because cooling failures rarely wait for a convenient time.",
        ],
      },
      {
        heading: "Refrigerator Brands We Repair",
        paragraphs: [
          "We service all major refrigerator brands, including Samsung, LG, Whirlpool, GE, Frigidaire, Maytag, KitchenAid, Bosch, and Kenmore. Samsung and LG models often have sensor or control-board issues unique to those brands, and our technicians carry the diagnostic knowledge and common parts to fix most problems on the first visit.",
        ],
      },
      {
        heading: "Should You Repair or Replace Your Refrigerator?",
        paragraphs: [
          "The decision comes down to three things: the unit's age, the repair cost, and warranty coverage. As a rule of thumb, a newer fridge with a simple fault (like a bad ice maker) is almost always worth repairing, while a very old unit with a failing compressor may cost more to fix than it's worth. Our technician gives you an honest, upfront quote based on the actual fault found on-site — so you can make the call with facts, not guesswork.",
        ],
      },
      {
        heading: "Refrigerator Repair Across Greater Cleveland",
        paragraphs: [
          "We provide refrigerator repair throughout the Greater Cleveland area, including Parma, Lakewood, Strongsville, Cleveland Heights, North Olmsted, Westlake, Solon, Euclid, Avon, and Medina, plus many surrounding communities.",
        ],
      },
    ],
    faqs: [
      {
        id: "who-provides",
        question: "Who provides refrigerator repair in Cleveland?",
        answer:
          "Margus Appliance Repair LLC, based in Parma, OH, serves Cleveland and Greater Cleveland homeowners with same-day service, free upfront quotes, and a 180-day parts and labor warranty.",
      },
      {
        id: "what-causes-not-cooling",
        question: "What causes a refrigerator to stop cooling?",
        answer:
          "The most common causes are failing compressors, blocked condenser coils, faulty thermostats, and worn door seals — plus sensor or control-board issues on Samsung and LG models.",
      },
      {
        id: "cost",
        question: "How much does refrigerator repair cost in Cleveland?",
        answer:
          "It depends on the brand, the part, and the severity of the fault. Our diagnostic visit and quote are always upfront and transparent, so you'll know the exact price before any work starts.",
      },
      {
        id: "repair-or-replace",
        question: "Should I repair or replace my refrigerator?",
        answer:
          "If your fridge is relatively new and the repair costs less than half the price of a new unit, repair is usually the smarter choice. Our technician will give you an honest recommendation.",
      },
      {
        id: "same-day",
        question: "Do you offer same-day refrigerator repair?",
        answer:
          "Yes. We offer same-day service across Cleveland, Parma, and surrounding areas whenever our schedule allows.",
      },
    ],
  },
  {
    id: "washer-repair",
    title: "Washer Repair",
    description:
      "Not spinning? Not draining? Not starting?",
    href: "/services/washer-repair",
    icon: "/images/services/washer.png",
    detailImage: "/images/services/washer.png",
    intro: [
      "A broken washing machine can quickly disrupt your daily routine. Whether your washer won't drain, spin, start, or is making unusual noises, our professional washer repair service is here to help.",
      "We provide fast, reliable, and affordable repair solutions for all major washing machine brands and models. Our experienced technicians diagnose the issue accurately and work efficiently to restore your appliance as quickly as possible.",
    ],
    commonProblems: [
      "Washer not draining",
      "Washing machine not spinning",
      "Water leakage issues",
      "Loud or unusual noises",
      "Washer won't start",
      "Door or lid lock problems",
      "Error codes and electrical issues",
      "Slow filling or water supply problems",
    ],
    whyChoosePoints: [
      "Experienced and certified technicians",
      "Same-day and emergency repair options",
      "Transparent pricing with no hidden fees",
      "Repairs for all major brands",
      "Quality replacement parts",
      "Friendly and professional customer support",
    ],
    closingHeading: "Fast & Reliable Appliance Repair",
    closingText: [
      "We understand how important a working washing machine is for your home. That's why we focus on quick response times and long-lasting repair solutions that help prevent future problems.",
      "Our goal is simple: get your washer running smoothly again with minimal stress and downtime.",
      "Don't let a faulty washing machine slow you down. Contact our team today to book a professional washer repair service and get your appliance back in perfect working condition.",
    ],
  },
  {
    id: "dryer-repair",
    title: "Dryer Repair",
    description:
      "Not heating? Not starting? Making loud noises?",
    href: "/services/dryer-repair",
    icon: "/images/services/dryer.png",
    detailImage: "/images/services/dryer.png",
    intro: [
      "A malfunctioning dryer can leave you with wet clothes and no way to dry them. Whether your dryer won't heat, takes too long, or stops mid-cycle, our expert technicians can fix it fast.",
      "We service all major dryer brands and models, providing reliable repairs backed by our 180-day warranty.",
    ],
    commonProblems: [
      "Dryer not heating",
      "Clothes taking too long to dry",
      "Dryer won't start",
      "Loud or unusual noises",
      "Drum not turning",
      "Overheating issues",
      "Error codes and electrical problems",
    ],
    whyChoosePoints: [
      "Same-day dryer repair service",
      "Certified technicians for all brands",
      "Transparent flat-rate pricing",
      "Genuine manufacturer-approved parts",
      "180-day parts & labor warranty",
    ],
    closingHeading: "Get Your Dryer Running Again",
    closingText: [
      "Don't let a broken dryer disrupt your household. Our experienced team provides fast, affordable dryer repairs in Cleveland and Parma.",
      "Contact us today to schedule your same-day dryer repair service.",
    ],
  },
  {
    id: "stove-repair",
    title: "Stove & Cooktop Repair",
    description:
      "Burner not heating? Not igniting? Controls not responding?",
    href: "/services/stove-repair",
    icon: "/images/services/stove.png",
    detailImage: "/images/services/stove.png",
    intro: [
      "A broken stove makes cooking at home nearly impossible. Our certified technicians repair all types of stoves — gas, electric, and induction.",
      "We service all major brands and provide fast, reliable repairs with transparent pricing.",
    ],
    commonProblems: [
      "Burners not igniting or heating",
      "Uneven heat distribution",
      "Control panel errors",
      "Gas smell or ignition issues",
      "Surface element not working",
      "Knobs or controls not responding",
    ],
    whyChoosePoints: [
      "Gas and electric stove specialists",
      "Same-day appointments available",
      "Certified and insured technicians",
      "Upfront pricing before any work begins",
      "180-day parts & labor warranty",
    ],
    closingHeading: "Get Back to Cooking",
    closingText: [
      "Don't let a faulty stove disrupt your meals. Our team provides fast, professional stove repairs across Cleveland and Parma.",
      "Schedule your repair today and get your kitchen back in working order.",
    ],
  },
  {
    id: "dishwasher-repair",
    title: "Dishwasher Repair",
    description:
      "Not drying? Not filling with water? Leaking?",
    href: "/services/dishwasher-repair",
    icon: "/images/services/dishwasher.png",
    detailImage: "/images/services/dishwasher.png",
    intro: [
      "A broken dishwasher means more time at the sink. Whether your dishwasher won't drain, clean dishes properly, or won't start at all, our technicians can restore it quickly.",
      "We service all major dishwasher brands with same-day appointments available.",
    ],
    commonProblems: [
      "Dishwasher not cleaning dishes",
      "Standing water after cycle",
      "Dishwasher won't start",
      "Door latch problems",
      "Unusual noises during operation",
      "Water leaking onto floor",
      "Error codes on control panel",
    ],
    whyChoosePoints: [
      "Same-day dishwasher repair",
      "Certified for all major brands",
      "Upfront flat-rate pricing",
      "Genuine replacement parts",
      "180-day parts & labor warranty",
    ],
    closingHeading: "Fast Dishwasher Repair You Can Trust",
    closingText: [
      "Our team provides reliable dishwasher repairs in Cleveland and Parma with minimal disruption to your daily routine.",
      "Book your repair today and have your dishwasher working like new.",
    ],
  },
  {
    id: "freezer-repair",
    title: "Freezer Repair",
    description:
      "Not freezing? Frost buildup? Temperature problems?",
    href: "/services/freezer-repair",
    icon: "/images/services/freezer.png",
    detailImage: "/images/services/freezer.png",
    intro: [
      "A broken freezer puts your frozen food at risk. Our technicians provide fast freezer repair to protect your food and your investment.",
      "We fix all types of freezers — chest, upright, and built-in — for all major brands.",
    ],
    commonProblems: [
      "Freezer not freezing",
      "Frost buildup inside freezer",
      "Freezer making loud noises",
      "Temperature not staying cold",
      "Freezer door not sealing",
      "Compressor issues",
    ],
    whyChoosePoints: [
      "Same-day freezer repair available",
      "All freezer types and brands",
      "Transparent pricing",
      "Quality replacement parts",
      "180-day warranty included",
    ],
    closingHeading: "Protect Your Frozen Food",
    closingText: [
      "Don't let a broken freezer cost you hundreds in spoiled food. Contact our team for fast, affordable freezer repair in Cleveland and Parma.",
    ],
  },
  {
    id: "ice-maker-repair",
    title: "Ice Maker Repair",
    description:
      "Not making ice? Leaking water? Frost buildup?",
    href: "/services/ice-maker-repair",
    icon: "/images/services/icemaker.png",
    detailImage: "/images/services/icemaker.png",
    intro: [
      "An ice maker that stops working or starts leaking can be frustrating. Our technicians diagnose and repair all ice maker issues quickly and affordably.",
      "We service built-in, freestanding, and refrigerator ice makers from all major brands.",
    ],
    commonProblems: [
      "Ice maker not producing ice",
      "Ice maker leaking water",
      "Small or misshapen ice cubes",
      "Ice maker making unusual noises",
      "Ice dispenser not working",
      "Frozen water line issues",
    ],
    whyChoosePoints: [
      "Same-day ice maker service",
      "All brands and models",
      "Flat-rate transparent pricing",
      "180-day warranty on repairs",
    ],
    closingHeading: "Fast Ice Maker Repair",
    closingText: [
      "Our experienced technicians will diagnose and fix your ice maker quickly so you're back to having fresh ice whenever you need it.",
    ],
  },

  {
    id: "oven-repair",
    title: "Oven Repair",
    description:
      "Not heating? Temperature issues? Turning on by itself?",
    href: "/services/oven-repair",
    icon: "/images/services/oven.png",
    detailImage: "/images/services/oven.png",
    intro: [
      "A faulty oven disrupts your entire household routine. Our certified technicians repair all types of ovens — gas, electric, and convection.",
      "We service all major brands and provide same-day appointments to get your oven back up and running fast.",
    ],
    commonProblems: [
      "Oven not heating to correct temperature",
      "Oven door not closing properly",
      "Control panel errors",
      "Uneven baking or cooking",
      "Self-clean cycle problems",
      "Heating element failure",
      "Igniter not working",
    ],
    whyChoosePoints: [
      "Gas and electric oven specialists",
      "Same-day appointments available",
      "Certified and insured technicians",
      "Upfront pricing before any work begins",
      "180-day parts & labor warranty",
    ],
    closingHeading: "Get Your Oven Back in Action",
    closingText: [
      "Don't let a broken oven disrupt your meals. Our team provides fast, professional oven repairs across Cleveland and Parma.",
      "Schedule your repair today and get your kitchen back in working order.",
    ],
  },
];

export const services = SERVICES;
