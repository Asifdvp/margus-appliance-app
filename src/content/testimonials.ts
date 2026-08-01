import type { Testimonial } from "@/types";

// Fallback content only — rendered when live Google review data
// (src/shared/lib/googleReviews.ts) is unavailable or has too few entries.
// These are placeholder quotes, not real customer reviews.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    text: "I called them when my fridge suddenly stopped cooling, and they showed up within a few hours. The technician was professional, explained everything clearly, and fixed the problem on the spot. Excellent service at a fair price — I highly recommend them!",
    name: "Sarah M.",
    location: "Cleveland, OH",
    image: "/images/jobs/job-1.png",
  },
  {
    id: "t2",
    text: "Our washer broke down on a Friday evening and they came out Saturday morning. Fixed it fast and even cleaned up after themselves. Will definitely use them again.",
    name: "Marcus T.",
    location: "Brooklyn, OH",
    image: "/images/jobs/job-1.png",
  },
  {
    id: "t3",
    text: "My dryer stopped working right before the holidays. They squeezed me in the next day and had it running in under an hour. Fair price, great attitude — couldn't ask for more.",
    name: "Patricia L.",
    location: "Parma Heights, OH",
    image: "/images/jobs/job-1.png",
  },
  {
    id: "t4",
    text: "Scheduled online in minutes, technician arrived on time, and our dishwasher was fixed the same morning. Couldn't be happier with the experience.",
    name: "Rachel S.",
    location: "Westlake, OH",
    image: "/images/jobs/job-1.png",
  },
];
