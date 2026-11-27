import type { FaqItem } from "@/types";

export type ServiceAreaHighlight = {
  name: string;
  /** URL slug for /service-areas/{slug}. */
  slug: string;
  text: string;
  /**
   * Questions unique to this city, rendered above the two shared ones. Every
   * question has to match a real query this city already receives impressions
   * for — a city with nothing to say gets none rather than a filler entry.
   */
  faqs?: FaqItem[];
  /** Links the blurb to a real completed job in that city, when we have one. */
  jobSlug?: string;
  jobLabel?: string;
};

export const SERVICE_AREA_HIGHLIGHTS: ServiceAreaHighlight[] = [
  {
    name: "Parma",
    slug: "parma",
    text: "Parma is home base — our shop is on Broadview Road, so Parma and the streets right around it usually get the fastest response time of anywhere we cover. We recently fixed an oven that wouldn't heat for a homeowner a few minutes from the shop.",
    jobSlug: "oven-repair-parma",
    jobLabel: "See the Parma oven repair",
    faqs: [
      {
        id: "who-parma",
        question: "Who repairs appliances in Parma, Ohio?",
        answer:
          "The shop is on Broadview Road in Parma, Ohio, in Cuyahoga County, so Parma addresses are usually the quickest to reach. Licensed technicians cover refrigerators, washers, dryers, ovens and dishwashers here, and most repairs finish in one visit — a recent Parma oven was holding temperature again after a new bake igniter.",
      },
      {
        id: "subzero-parma",
        question: "Do you repair Sub-Zero refrigerators in Parma?",
        answer:
          "Yes — Sub-Zero built-ins are serviced across Parma, Ohio alongside Samsung, LG, Whirlpool, GE and Frigidaire. Premium units normally fail at one component rather than everywhere at once, so a diagnosis usually points to a specific repair, which is what makes a built-in worth keeping.",
      },
      {
        id: "dryers-parma",
        question: "Who repairs dryers in Parma?",
        answer:
          "Gas and electric dryers are both covered in Parma, from no-heat faults to drums that will not turn. Our technicians test the whole heating circuit — element, thermostat and thermal fuse — before changing anything, so the part that actually failed is the part replaced.",
      },
    ],
  },
  {
    name: "Cleveland",
    slug: "cleveland",
    text: "Cleveland is our busiest area outside Parma. From older two-family homes on the East Side to newer builds near Ohio City, we cover refrigerator, washer, dryer, and oven repair across the whole city, usually with same-day availability.",
    jobSlug: "refrigerator-repair-cleveland",
    jobLabel: "See the Cleveland refrigerator repair",
    faqs: [
      {
        id: "who-fridge-cleveland",
        question: "Who repairs refrigerators in Cleveland?",
        answer:
          "Licensed technicians cover refrigerator repair city-wide from a Parma shop just south of the city line. One recent Cleveland call had a cold freezer but a warm fresh-food section: the defrost heater had failed, and replacing it cleared the iced-up evaporator for good.",
      },
      {
        id: "neighborhoods-cleveland",
        question: "Which Cleveland neighborhoods do you cover?",
        answer:
          "Coverage runs across the whole city, including West Park, Ohio City and the East Side. Much of the housing here is older two-family homes, so mentioning the access and the appliance's location when you call lets the technician arrive loaded for the job.",
      },
      {
        id: "dishwashers-cleveland",
        question: "Who repairs dishwashers in Cleveland?",
        answer:
          "Dishwasher repair runs across Cleveland, from built-in units in older kitchens to newer quiet models with digital controls. Standing water in the bottom, dishes that come out dirty and water on the floor are the three faults that come up most, and each points at a different part.",
      },
    ],
  },
  {
    name: "Cleveland Heights",
    slug: "cleveland-heights",
    text: "We've made several recent trips to Cleveland Heights — a washer leaking mid-cycle and a dryer that had stopped heating and started grinding loudly were both fixed same-day for homeowners here.",
    jobSlug: "washer-repair-cleveland-heights",
    jobLabel: "See the Cleveland Heights washer repair",
    faqs: [
      {
        id: "who-cleveland-heights",
        question: "Who repairs appliances in Cleveland Heights?",
        answer:
          "Margus Appliance Repair covers Cleveland Heights for washers, dryers, refrigerators, ovens and dishwashers, with washers and dryers the two most frequent calls. Licensed technicians work out of Parma, most repairs are completed on the first visit, and every finished job carries a 180-day parts and labor warranty.",
      },
      {
        id: "washer-leak-cleveland-heights",
        question: "Who repairs washers that leak in Cleveland Heights?",
        answer:
          "Worn shock absorbers are the usual cause when a washer leaks in Cleveland Heights, not the hose itself. One recent call looked exactly like a loose hose, but the tub had been shaking hard enough to work it free, so both were replaced together.",
      },
    ],
  },
  {
    name: "Lakewood",
    slug: "lakewood",
    text: "Lakewood's older housing stock means a lot of the washers and dryers we service there are stacked units in tight laundry closets — our technicians know to ask about the setup before they arrive so they bring the right tools.",
    jobSlug: "oven-repair-lakewood",
    jobLabel: "See the Lakewood oven & range repair",
    faqs: [
      {
        id: "who-lakewood",
        question: "Who repairs appliances in Lakewood, Ohio?",
        answer:
          "Margus Appliance Repair covers Lakewood for washers, dryers, refrigerators, ovens and dishwashers, working out of Parma. Lakewood's older housing stock puts a lot of the laundry in tight closets, so telling the dispatcher about the setup lets the technician bring the right tools and dolly the first time.",
      },
      {
        id: "ovens-lakewood",
        question: "Who repairs ovens and ranges in Lakewood?",
        answer:
          "Ovens, ranges and cooktops are all covered in Lakewood. One Lakewood range had an oven that would not heat and a burner that would not ignite — similar symptoms, two different fixes: the contaminated burner was cleaned, and the weak oven igniter was replaced.",
      },
    ],
  },
  {
    name: "Westlake",
    slug: "westlake",
    text: "A Westlake customer called us when their washer stopped filling with water partway through a cycle. It's a common fault we see in this area, and one our technicians can usually diagnose and fix in a single visit.",
    jobSlug: "washer-repair-westlake",
    jobLabel: "See the Westlake washer repair",
    faqs: [
      {
        id: "who-dryers-westlake",
        question: "Who repairs dryers in Westlake?",
        answer:
          "Dryer repair covers Westlake and the neighboring west-side suburbs. A dryer that tumbles without heating points to the heating circuit, while long cycles and mid-cycle shutoffs usually mean restricted airflow — two different diagnoses that look identical from the laundry room.",
      },
      {
        id: "cooktops-westlake",
        question: "Do you repair cooktops and ranges in Westlake?",
        answer:
          "Yes — cooktops, ranges and stoves are all serviced in Westlake, gas and electric. Burners that click without lighting, one burner cold while the others work, and touch controls that stop responding are the symptoms seen most often, and each points to a different component.",
      },
      {
        id: "ovens-westlake",
        question: "Who repairs ovens in Westlake?",
        answer:
          "Oven repair in Westlake covers freestanding ranges and built-in wall ovens. One Westlake Viking had been preheating slower for weeks before it quit entirely; the 240-volt supply was verified first, then the burned and cracked heating element was found and replaced.",
      },
    ],
  },
  {
    name: "Avon Lake",
    slug: "avon-lake",
    text: "In Avon Lake, one of our more recent calls was a dishwasher that ran a full cycle but wouldn't drain afterward — a clogged drain hose turned out to be the cause, and it was resolved the same day.",
    jobSlug: "dishwasher-repair-avon-lake",
    jobLabel: "See the Avon Lake dishwasher repair",
    faqs: [
      {
        id: "who-dryers-avon",
        question: "Who repairs dryers in Avon Lake and Avon?",
        answer:
          "Dryer repair covers both Avon Lake and Avon, gas and electric. Clothes still damp after a full cycle usually trace to a heating element, a blown thermal fuse or restricted airflow, and our technicians check all three rather than replacing the first suspect part.",
      },
      {
        id: "ovens-stoves-avon-lake",
        question: "Who repairs ovens and stoves in Avon Lake?",
        answer:
          "Ovens, ranges and cooktops are all covered in Avon Lake, gas and electric. The usual faults are a weak bake igniter, a burned-out element or a temperature sensor reading wrong — each a specific part, which is why a repair normally beats replacing a whole range.",
      },
      {
        id: "dishwasher-drain-avon",
        question: "Who repairs a dishwasher that leaks or won't drain in Avon?",
        answer:
          "Margus Appliance Repair handles dishwasher leaks and drain faults in Avon and Avon Lake, the two most common dishwasher calls here. A recent Avon Lake machine ran a full cycle but never drained — a failed drain pump, replaced and then tested through a complete cycle before the technician left.",
      },
    ],
  },
  {
    name: "Strongsville",
    slug: "strongsville",
    text: "Strongsville has grown fast over the past couple of decades, and most of the appliances we repair there are still well within their expected lifespan — which usually means a straightforward, lower-cost fix rather than a full replacement.",
    faqs: [
      {
        id: "who-strongsville",
        question: "Who repairs appliances in Strongsville, Ohio?",
        answer:
          "Margus Appliance Repair covers Strongsville for refrigerators, washers, dryers, dishwashers and ovens, and the shop is close enough that same-day appointments are the norm. Most of the city's housing stock is recent enough that appliances are still inside their expected lifespan, which usually means a straightforward part replacement.",
      },
      {
        id: "subzero-strongsville",
        question: "Can you service a Sub-Zero refrigerator in Strongsville?",
        answer:
          "Yes — Sub-Zero and other built-in refrigerators are covered in Strongsville. Built-ins need the fault isolated before anything is opened up, since a blocked condenser, a failed defrost heater and a worn door gasket can each leave the cabinet warmer than the setting.",
      },
    ],
  },
  {
    name: "Brecksville",
    slug: "brecksville",
    text: "Brecksville tends to have higher-end kitchens, and it shows in the calls we get — including a Sub-Zero refrigerator whose freezer section had stopped cooling while the fridge side stayed cold. Premium brands like that are worth repairing, not replacing, when the fix is this specific.",
    jobSlug: "refrigerator-repair-brecksville",
    jobLabel: "See the Brecksville refrigerator repair",
    faqs: [
      {
        id: "who-brecksville",
        question: "Who repairs appliances in Brecksville?",
        answer:
          "Margus Appliance Repair covers Brecksville for refrigerators, freezers, ovens, cooktops and dishwashers, and the kitchens here tend toward higher-end built-in equipment. With premium built-ins the difference between a repair and a replacement is usually which single component has gone, not how old the unit is.",
      },
      {
        id: "subzero-brecksville",
        question: "Do you repair Sub-Zero refrigerators in Brecksville?",
        answer:
          "Yes — a Brecksville Sub-Zero had a freezer section that stopped cooling while the fridge side stayed cold. The compressor had failed, so it was replaced, the sealed system tested, and temperatures monitored across both compartments before the technician left.",
      },
    ],
  },
  {
    name: "North Olmsted",
    slug: "north-olmsted",
    text: "North Olmsted sits close enough to our Parma shop that same-day appointments are the norm rather than the exception, especially for refrigerator and dishwasher calls.",
    faqs: [
      {
        id: "who-north-olmsted",
        question: "Who repairs appliances in North Olmsted?",
        answer:
          "Margus Appliance Repair covers North Olmsted for refrigerators, dishwashers, washers, dryers and ovens. The shop is close enough that same-day appointments are the norm rather than the exception, and refrigerator and dishwasher calls — both diagnosed on site before any part is ordered — make up most of the work here.",
      },
    ],
  },
  {
    name: "Euclid",
    slug: "euclid",
    text: "Euclid's mix of older single-family homes and multi-unit buildings means we see a wide range of ages and brands on service calls there — from decades-old top-load washers to newer smart appliances.",
    faqs: [
      {
        id: "who-euclid",
        question: "Who repairs appliances in Euclid, Ohio?",
        answer:
          "Euclid is covered for laundry, refrigeration and cooking appliances alike. The city's mix of older single-family homes and multi-unit buildings means a wide range of ages and brands on any given week — from decades-old top-load washers to newer units with digital controls.",
      },
      {
        id: "subzero-euclid",
        question: "Do you repair Sub-Zero refrigerators in Euclid?",
        answer:
          "Yes — Sub-Zero refrigerators are serviced in Euclid along with the other premium built-in brands. A built-in is almost always worth repairing rather than replacing, because the failure is usually one part — a compressor, a condenser fan motor or a door gasket — not the whole cabinet.",
      },
      {
        id: "south-euclid",
        question: "Do you cover South Euclid as well as Euclid?",
        answer:
          "Yes — South Euclid, Richmond Heights and Lyndhurst are all inside the service area. Scheduling for all of them is handled from the Parma shop, and same-day or next-day appointments on the east side are common when the calendar allows.",
      },
    ],
  },
  {
    name: "Akron",
    slug: "akron",
    text: "Akron is on the far edge of our coverage area, so we schedule appointments there a little further out than closer suburbs, but the same certified technicians, upfront pricing, and 180-day warranty apply.",
    faqs: [
      {
        id: "who-fridge-akron",
        question: "Who repairs refrigerators in Akron?",
        answer:
          "Refrigerator repair reaches Akron and nearby Cuyahoga Falls and Stow. Not cooling at all, cooling unevenly between compartments, and water pooling underneath are the faults that come up most on Akron calls, and each traces to a different part of the sealed or defrost system.",
      },
      {
        id: "akron-same-service",
        question: "Do you service Akron the same as closer suburbs?",
        answer:
          "Yes — Akron gets the same service as the closer suburbs, with appointments scheduled a little further out because it sits at the edge of the coverage area. The certified technicians, the pricing and the 180-day parts and labor warranty are identical; the drive affects when the van arrives, not what happens once it does.",
      },
    ],
  },
  {
    name: "Solon",
    slug: "solon",
    text: "Solon calls skew toward newer-construction homes, and the appliance issues we see most often there are ice maker and water-dispenser problems rather than mechanical breakdowns.",
    faqs: [
      {
        id: "who-solon",
        question: "Who repairs appliances in Solon, Ohio?",
        answer:
          "Margus Appliance Repair covers Solon for ice makers, refrigerators, dishwashers, washers and ovens, and homes here skew toward newer construction. That changes what the calls look like: ice maker and water dispenser faults come up far more often than the worn-out mechanical failures typical of older housing.",
      },
      {
        id: "subzero-solon",
        question: "Is Sub-Zero refrigerator repair available in Solon?",
        answer:
          "Yes — Sub-Zero built-ins are serviced in Solon and the surrounding east-side suburbs. Diagnosing the specific failed component first is what keeps a premium refrigerator repairable, since a sealed-system fault and a failed fan motor can produce the same warm compartment.",
      },
    ],
  },
  {
    name: "Independence",
    slug: "independence",
    text: "Independence sits just southeast of Parma, and one of our more recent calls there was a five-year-old Samsung dryer that had quietly been losing heating power for weeks before it stopped heating altogether — a reminder that gradual symptoms are worth mentioning when you call.",
    jobSlug: "dryer-repair-independence",
    jobLabel: "See the Independence dryer repair",
    faqs: [
      {
        id: "who-independence",
        question: "Who repairs appliances in Independence, Ohio?",
        answer:
          "Margus Appliance Repair covers Independence for refrigerators, freezers, washers, dryers and ovens, working from Parma just northwest of the city. The drive is short enough that same-day appointments are frequently available, and technicians carry the parts that fail most often so most repairs finish on the first visit.",
      },
      {
        id: "dryer-no-heat-independence",
        question: "Who repairs a dryer that tumbles but won't heat in Independence?",
        answer:
          "Margus Appliance Repair handles no-heat dryer faults in Independence, gas and electric. A five-year-old Samsung there had been quietly losing heating power for weeks before it stopped altogether; the full heating circuit was tested first, which confirmed the heating element rather than the thermostat or thermal fuse.",
      },
    ],
  },
  {
    name: "Shaker Heights",
    slug: "shaker-heights",
    text: "In Shaker Heights, a homeowner noticed water collecting near their Whirlpool refrigerator's freezer section. Rather than stopping at the first clogged drain we found, we traced the problem through the full system and caught a second, unrelated leak at the water inlet valve.",
    jobSlug: "refrigerator-repair-shaker-heights",
    jobLabel: "See the Shaker Heights refrigerator repair",
    faqs: [
      {
        id: "who-shaker-heights",
        question: "Who repairs appliances in Shaker Heights, Ohio?",
        answer:
          "Shaker Heights is covered for refrigerators, ovens, dryers and the rest of the appliance list, by licensed technicians working out of Parma. Most calls here are finished in one visit, and every completed repair carries a 180-day parts and labor warranty.",
      },
      {
        id: "water-near-freezer-shaker-heights",
        question: "Why is water collecting near my refrigerator's freezer?",
        answer:
          "Water near the freezer section usually means a clogged defrost drain, a leaking water inlet valve, or both at once. A Shaker Heights Whirlpool had both: the drain was cleared, the seeping inlet valve replaced, the copper line swapped for braided stainless steel, and a shutoff valve added behind the unit.",
      },
    ],
  },
  {
    name: "Parma Heights",
    slug: "parma-heights",
    text: "Parma Heights borders our home base in Parma, so it's one of the fastest areas for us to reach. A recent call there was a Whirlpool refrigerator that had stopped making ice — we worked through freezer temperature and water supply before replacing the ice maker itself, rather than guessing at the part.",
    jobSlug: "refrigerator-repair-parma-heights",
    jobLabel: "See the Parma Heights refrigerator repair",
    faqs: [
      {
        id: "who-parma-heights",
        question: "Who repairs appliances in Parma Heights?",
        answer:
          "Margus Appliance Repair covers Parma Heights for refrigerators, washers, dryers, dishwashers and ovens, and the city borders the Broadview Road shop. That makes it one of the fastest areas to reach, so same-day appointments are usually available and most repairs finish in a single visit.",
      },
      {
        id: "ice-maker-parma-heights",
        question: "Who repairs a refrigerator that stopped making ice in Parma Heights?",
        answer:
          "A Parma Heights Whirlpool had stopped producing ice entirely, which can come from the freezer, the water supply or the ice maker itself. Freezer temperature and water supply were ruled out first, which left the ice maker — one part replaced instead of a guess at three.",
      },
    ],
  },
];
