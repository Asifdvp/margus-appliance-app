export type ServiceArea = {
  name: string;
  coords: [number, number];
};

export const SERVICE_AREA_FAQS = [
  {
    id: "how-fast-response",
    question: "How quickly can you get to my area?",
    answer:
      "Same-day appointments are available across our entire service area. Parma and the immediately surrounding suburbs typically get the fastest response since that's where our shop is based; farther-out cities like Akron may be scheduled a bit later in the day.",
  },
  {
    id: "travel-fee",
    question: "Do you charge extra to come outside of Parma?",
    answer:
      "No. Our $89 diagnostic fee is the same everywhere in our service area — we don't add a separate trip or travel charge, and it's waived entirely once you move forward with the repair.",
  },
  {
    id: "city-not-listed",
    question: "What if I don't see my city listed?",
    answer:
      "We cover 57+ cities across Northeast Ohio, and the map above isn't necessarily exhaustive. If your city isn't shown, call us — there's a good chance we still service your area.",
  },
  {
    id: "apartments-condos",
    question: "Do you repair appliances in apartments and condos, not just houses?",
    answer:
      "Yes. We service appliances in single-family homes, apartments, condos, and rental units throughout our coverage area, including stacked and compact laundry units common in older buildings.",
  },
  {
    id: "same-technicians-everywhere",
    question: "Do all cities get the same technicians and warranty?",
    answer:
      "Yes. Every city in our service area gets the same certified technicians, honest upfront pricing, and 180-day parts and labor warranty — location only affects scheduling, not the quality of the repair.",
  },
];

export const SERVICE_AREAS: ServiceArea[] = [
  { name: "Cleveland", coords: [41.4993, -81.6937] },
  { name: "Parma", coords: [41.3845, -81.7229] },
  { name: "Strongsville", coords: [41.3145, -81.8357] },
  { name: "Akron", coords: [41.0814, -81.519] },
  { name: "Westlake", coords: [41.4553, -81.9179] },
  { name: "North Olmsted", coords: [41.4151, -81.9235] },
  { name: "Lakewood", coords: [41.482, -81.7982] },
  { name: "Euclid", coords: [41.5931, -81.5268] },
  { name: "Cleveland Heights", coords: [41.52, -81.5568] },
  { name: "North Ridgeville", coords: [41.3895, -82.0174] },
  { name: "Avon Lake", coords: [41.5053, -82.0282] },
  { name: "Avon", coords: [41.4512, -82.0354] },
  { name: "Twinsburg", coords: [41.3212, -81.4517] },
  { name: "Berea", coords: [41.3662, -81.8543] },
];

export const MAP_CENTER: [number, number] = [41.36, -81.8];
export const MAP_ZOOM = 10;

export const ALL_SERVICE_AREAS: ServiceArea[] = [
  { name: "Cleveland", coords: [41.49892919660459, -81.6937308337225] },
  { name: "Akron", coords: [41.08045103365166, -81.52111596678733] },
  { name: "Parma", coords: [41.3845, -81.7229] },
  { name: "Lakewood", coords: [41.482, -81.7982] },
  { name: "Euclid", coords: [41.5931, -81.5268] },
  { name: "Strongsville", coords: [41.3145, -81.8357] },
  { name: "Cleveland Heights", coords: [41.52, -81.5568] },
  { name: "North Ridgeville", coords: [41.3895, -82.0174] },
  { name: "Westlake", coords: [41.4553, -81.9179] },
  { name: "North Royalton", coords: [41.3156, -81.7246] },
  { name: "Avon Lake", coords: [41.5053, -82.0282] },
  { name: "Avon", coords: [41.4512, -82.0354] },
  { name: "Willoughby", coords: [41.6398, -81.4068] },
  { name: "Solon", coords: [41.3898, -81.4413] },
  { name: "Hudson", coords: [41.24, -81.4407] },
  { name: "South Euclid", coords: [41.5231, -81.5179] },
  { name: "Rocky River", coords: [41.4737, -81.8427] },
  { name: "Broadview Heights", coords: [41.3139, -81.6851] },
  { name: "Twinsburg", coords: [41.3212, -81.4517] },
  { name: "Brook Park", coords: [41.3987, -81.8018] },
  { name: "Berea", coords: [41.3662, -81.8543] },
  { name: "Aurora", coords: [41.3148, -81.3457] },
  { name: "Fairview Park", coords: [41.4437, -81.8566] },
  { name: "Bay Village", coords: [41.4851, -81.9235] },
  { name: "Brecksville", coords: [41.3145, -81.6265] },
  { name: "Beachwood", coords: [41.476, -81.5023] },
  { name: "Lyndhurst", coords: [41.5201, -81.4887] },
  { name: "Wickliffe", coords: [41.6057, -81.4703] },
  { name: "Macedonia", coords: [41.3134, -81.5043] },
  { name: "Brooklyn", coords: [41.4337, -81.7357] },
  { name: "Richmond Heights", coords: [41.5528, -81.5101] },
  { name: "Columbia Station", coords: [41.3112, -81.936] },
  { name: "Sheffield Lake", coords: [41.4875, -82.1015] },
  { name: "Olmsted Falls", coords: [41.3762, -81.9052] },
  { name: "Hinckley", coords: [41.2273, -81.7235] },
  { name: "Independence", coords: [41.3662, -81.6382] },
  { name: "Elyria", coords: [41.3684, -82.1074] },
  { name: "Cuyahoga Falls", coords: [41.1337, -81.4845] },
  { name: "Brunswick", coords: [41.2384, -81.8418] },
  { name: "Stow", coords: [41.1595, -81.4407] },
  { name: "Garfield Heights", coords: [41.4173, -81.6065] },
  { name: "Medina", coords: [41.1384, -81.864] },
  { name: "Wadsworth", coords: [41.0257, -81.7299] },
  { name: "Maple Heights", coords: [41.4098, -81.5651] },
  { name: "Tallmadge", coords: [41.1012, -81.4407] },
  { name: "Streetsboro", coords: [41.2373, -81.3476] },
  { name: "Eastlake", coords: [41.6539, -81.4504] },
  { name: "Bedford", coords: [41.3926, -81.5368] },
  { name: "Shaker Heights", coords: [41.4726, -81.5368] },
  { name: "Kirtland", coords: [41.6289, -81.3615] },
  { name: "Mentor", coords: [41.6662, -81.3393] },
  { name: "Chagrin Falls", coords: [41.4312, -81.3893] },
  { name: "Richfield", coords: [41.2373, -81.6368] },
  { name: "Fairlawn", coords: [41.1243, -81.6175] },
  { name: "Sagamore Hills", coords: [41.3117, -81.5682] },
  { name: "Gates Mills", coords: [41.5175, -81.4033] },
  // Source: Wikipedia "Parma Heights, Ohio" infobox coordinates
  // (41°23'10"N 81°45'48"W), sourced there from GNIS/USGS.
  { name: "Parma Heights", coords: [41.38611, -81.76333] },
];
