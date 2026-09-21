export type ServiceAreaHighlight = {
  name: string;
  text: string;
  /** Links the blurb to a real completed job in that city, when we have one. */
  jobSlug?: string;
  jobLabel?: string;
};

export const SERVICE_AREA_HIGHLIGHTS: ServiceAreaHighlight[] = [
  {
    name: "Parma",
    text: "Parma is home base — our shop is on Broadview Road, so Parma and the streets right around it usually get the fastest response time of anywhere we cover. We recently fixed an oven that wouldn't heat for a homeowner a few minutes from the shop.",
    jobSlug: "oven-repair-parma",
    jobLabel: "See the Parma oven repair",
  },
  {
    name: "Cleveland",
    text: "Cleveland is our busiest area outside Parma. From older two-family homes on the East Side to newer builds near Ohio City, we cover refrigerator, washer, dryer, and oven repair across the whole city, usually with same-day availability.",
  },
  {
    name: "Cleveland Heights",
    text: "We've made several recent trips to Cleveland Heights — a washer leaking mid-cycle and a dryer that had stopped heating and started grinding loudly were both fixed same-day for homeowners here.",
    jobSlug: "washer-repair-cleveland-heights",
    jobLabel: "See the Cleveland Heights washer repair",
  },
  {
    name: "Lakewood",
    text: "Lakewood's older housing stock means a lot of the washers and dryers we service there are stacked units in tight laundry closets — our technicians know to ask about the setup before they arrive so they bring the right tools.",
  },
  {
    name: "Westlake",
    text: "A Westlake customer called us when their washer stopped filling with water partway through a cycle. It's a common fault we see in this area, and one our technicians can usually diagnose and fix in a single visit.",
    jobSlug: "washer-repair-westlake",
    jobLabel: "See the Westlake washer repair",
  },
  {
    name: "Avon Lake",
    text: "In Avon Lake, one of our more recent calls was a dishwasher that ran a full cycle but wouldn't drain afterward — a clogged drain hose turned out to be the cause, and it was resolved the same day.",
    jobSlug: "dishwasher-repair-avon-lake",
    jobLabel: "See the Avon Lake dishwasher repair",
  },
  {
    name: "Strongsville",
    text: "Strongsville has grown fast over the past couple of decades, and most of the appliances we repair there are still well within their expected lifespan — which usually means a straightforward, lower-cost fix rather than a full replacement.",
  },
  {
    name: "Brecksville",
    text: "Brecksville tends to have higher-end kitchens, and it shows in the calls we get — including a Sub-Zero refrigerator whose freezer section had stopped cooling while the fridge side stayed cold. Premium brands like that are worth repairing, not replacing, when the fix is this specific.",
    jobSlug: "refrigerator-repair-brecksville",
    jobLabel: "See the Brecksville refrigerator repair",
  },
  {
    name: "North Olmsted",
    text: "North Olmsted sits close enough to our Parma shop that same-day appointments are the norm rather than the exception, especially for refrigerator and dishwasher calls.",
  },
  {
    name: "Euclid",
    text: "Euclid's mix of older single-family homes and multi-unit buildings means we see a wide range of ages and brands on service calls there — from decades-old top-load washers to newer smart appliances.",
  },
  {
    name: "Akron",
    text: "Akron is on the far edge of our coverage area, so we schedule appointments there a little further out than closer suburbs, but the same certified technicians, upfront pricing, and 180-day warranty apply.",
  },
  {
    name: "Solon",
    text: "Solon calls skew toward newer-construction homes, and the appliance issues we see most often there are ice maker and water-dispenser problems rather than mechanical breakdowns.",
  },
];
