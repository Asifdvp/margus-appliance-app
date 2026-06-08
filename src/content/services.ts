import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "kitchen",
    title: "Kitchen Appliance Repair",
    description:
      "Microwave, range hood, blender & more — same-day repair in Cleveland & Parma.",
    href: "/services/kitchen-appliance-repair",
    icon:"/images/services/kitchen.png"
  },
  {
    id: "washer",
    title: "Washer Repair",
    description:
      "Washer not spinning or draining? Fast, same-day repair for all major brands.",
    href: "/services/washer-repair",
    icon:"/images/services/washer.png"
  },
  {
    id: "dryer",
    title: "Dryer Repair",
    description:
      "No heat or long drying times? We fix all dryer issues fast with quality parts.",
    href: "/services/dryer-repair",
    icon:"/images/services/dryer.png"
  },
  {
    id: "refrigerator",
    title: "Refrigerator Repair",
    description:
      "Fast fridge repair in Cleveland — cooling, ice maker & temperature issues fixed.",
    href: "/services/refrigerator-repair",
    icon:"/images/services/refrigator.png"
  },
  {
    id: "dishwasher",
    title: "Dishwasher Repair",
    description:
      "Not cleaning or draining? Reliable dishwasher repair with upfront pricing.",
    href: "/services/dishwasher-repair",
    icon:"/images/services/dishwasher.png"
  },
  {
    id: "freezer",
    title: "Freezer Repair",
    description:
      "Freezer not freezing? Quick, affordable repair across Cleveland.",
    href: "/services/freezer-repair",
    icon:"/images/services/freezer.png"
  },
  {
    id: "ice-maker",
    title: "Ice Maker Repair",
    description:
      "Not working or leaking? Same-day ice maker repair in Cleveland.",
    href: "/services/ice-maker-repair",
    icon:"/images/services/icemaker.png"
  },
  {
    id: "oven-stove",
    title: "Oven & Stove Repair",
    description:
      "Oven not heating or burner not working? We fix all major brands.",
    href: "/services/oven-stove-repair",
    icon:"/images/services/oven.png"
  },
];

export const services = SERVICES;
