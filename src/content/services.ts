import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    updated: "2026-11-26",
    id: "refrigerator-repair",
    title: "Refrigerator Repair",
    description:
      "Not cooling? Not making ice? Water leaking?",
    href: "/services/refrigerator-repair",
    icon: "/images/services/refrigator.webp",
    detailImage: "/images/services/refrigator.webp",
    heroTitle: "Refrigerator Repair in Cleveland & Parma",
    metaTitle: "Refrigerator Not Cooling? Cleveland & Parma Repair",
    metaDescription:
      "Same-day refrigerator repair in Cleveland & Parma, OH. Compressors, defrost heaters, condenser coils, water valves. $89 diagnostic waived on approval.",
    badges: [
      "Same-day service",
      "Honest upfront pricing",
      "180-day parts & labor warranty",
    ],
    intro: [
      "A refrigerator is the one appliance that costs you money while it is broken. Food spoils, and the clock runs in hours rather than days. Margus Appliance Repair diagnoses cooling, defrost, ice and leak faults on site for homeowners across Cleveland, Parma and the Greater Cleveland area, and completes most repairs in a single visit. Licensed technicians work on top-freezers, side-by-sides, French-door models and built-in units from every major brand.",
    ],
    commonProblems: [
      "Fresh-food section warm while the freezer still feels cold",
      "Nothing cooling in either compartment",
      "Ice sheeting up behind the rear freezer panel",
      "Ticking, buzzing or a fan scraping against ice",
      "Water pooling under the crisper drawers or on the floor",
      "Compressor running constantly and never cycling off",
      "Temperature swinging well off the setting",
      "Door seals failing and letting cold air escape",
      "Display showing an error code and no cooling",
      "Ice maker producing nothing while the fridge stays cold",
    ],
    brandsText:
      "We repair all major refrigerator brands, including Samsung, LG, Whirlpool, GE, Frigidaire, Maytag, KitchenAid, Bosch, Sub-Zero, Viking, Kenmore, and Amana refrigerators.",
    sections: [
      {
        heading: "A Refrigerator Has Four Systems, and the Symptom Names One",
        paragraphs: [
          "Refrigerant is compressed, pushed through condenser coils to shed heat, then expanded across an evaporator coil to absorb it. That is the sealed system. A fan blows air over that coil and a damper splits it between freezer and fresh-food compartments — the air system. A heater melts the frost that builds on the coil, on a timer or board — the defrost system. And a valve, a filter and a drain handle water in and water out.",
          "Nothing cooling at all points at the sealed system or the start relay. One compartment warm and the other cold almost never does — that is air or defrost. Water on the floor is the drain or the inlet valve. Testing in that order is what keeps a $35 defrost heater from being diagnosed as a compressor.",
        ],
        links: [
          { href: "/blog/clean-refrigerator-coils", label: "How to clean refrigerator coils" },
        ],
      },
      {
        heading: "Why One Compartment Can Be Cold and the Other Warm",
        paragraphs: [
          "Most refrigerators cool both compartments from a single evaporator coil in the freezer, with a fan pushing some of that air forward through a damper. It is an arrangement no other appliance has, and it produces the most misread symptom in the trade: the freezer still works, so the refrigerator is assumed to be fine, and the warm fresh-food section is blamed on the thermostat.",
          "What has usually happened is that the defrost cycle stopped, frost has sealed the evaporator coil, and the fan can no longer move air through it. The freezer coasts on its own mass for a while. The fresh-food section, which depends entirely on air being blown forward, warms up first. A recent Cleveland call was exactly this, and the defrost heater was the failed part.",
        ],
        links: [
          { href: "/blog/refrigerator-not-cooling", label: "Why a refrigerator stops cooling" },
          { href: "/blog/refrigerator-making-loud-noise", label: "What a loud refrigerator means" },
        ],
      },
      {
        heading: "Refrigerator Error Codes and What They Report",
        paragraphs: [
          "A code names the component that reported a fault. It narrows the search; it does not name the repair.",
        ],
        list: [
          "Samsung 22 E — a cooling fan error, often ice contact rather than a dead motor",
          "Samsung 5 E — defrost sensor fault, which stops the defrost cycle running",
          "Samsung OF OF — demo or showroom mode, which disables cooling entirely and is not a fault at all",
          "LG Er FF — freezer fan circuit, usually ice or a failed motor",
          "LG Er dH — defrost heater has not raised coil temperature within its window",
        ],
        note: "Demo mode is worth checking first on any Samsung that cooled fine until the day it suddenly did not. It is a setting, and it looks identical to a dead refrigerator.",
      },
      {
        heading: "Repairing Against Replacing a Refrigerator",
        paragraphs: [
          "The split is cleaner here than on any other appliance: defrost, fan, relay, valve and gasket faults are modest parts on an expensive machine, while a failed compressor on a fifteen-year-old unit rarely justifies the work. The diagnosis tells you which side of that line your refrigerator is on before you decide.",
        ],
        links: [
          {
            href: "/blog/repair-vs-replace-appliance",
            label: "When to repair and when to replace an appliance",
          },
          { href: "/blog/refrigerator-leak-find-source", label: "Tracing a refrigerator leak" },
        ],
      },
      {
        heading: "Refrigerator Repair Across Greater Cleveland",
        paragraphs: [
          "Refrigerator repair runs throughout Cleveland, Parma and the surrounding communities, with same-day and next-day appointments when scheduling allows.",
        ],
        links: [{ href: "/service-areas", label: "See every city we cover" }],
      },
    ],
    faqs: [
      {
        id: "common-refrigerator-problems",
        question: "What are the most common refrigerator problems?",
        answer:
          "Four faults account for most calls: a warm fresh-food section, nothing cooling at all, ice behind the freezer panel, and water on the floor. Each points at a different system — airflow, the sealed system, defrost, or the water path — which is why one complaint can mean a small part or a replacement decision.",
      },
      {
        id: "samsung-refrigerator-faults",
        question: "What fails most on a Samsung refrigerator?",
        answer:
          "Samsung French-door models fail at the evaporator fan, the defrost sensor and the ice maker far more than at the compressor. Ice builds behind the rear panel, the fan starts ticking against it, and cooling drops in the fresh-food section first. Clearing the ice without replacing what stopped the defrost cycle buys weeks, not years.",
      },
      {
        id: "freezer-cold-fridge-warm",
        question: "Why is my freezer cold but the fridge warm?",
        answer:
          "One evaporator cools both compartments, so a freezer that still works while the fridge warms points at airflow, not refrigerant. The usual causes are a failed defrost heater letting ice block the coil, a dead evaporator fan, or a stuck damper. A recent Cleveland call was the defrost heater, replaced with the airflow verified afterward.",
      },
      {
        id: "refrigerator-error-codes",
        question: "What do refrigerator error codes mean?",
        answer:
          "A code names the sensor or motor that reported a fault, not the repair. Samsung 22 E is the evaporator fan, 5 E the defrost sensor, and OF OF is demo mode — a showroom setting that stops cooling entirely. LG's Er FF is the freezer fan, Er dH the defrost heater.",
      },
      {
        id: "built-in-subzero-refrigerators",
        question: "Do you repair built-in and Sub-Zero refrigerators?",
        answer:
          "Yes — Sub-Zero, Viking and other built-in refrigerators are serviced alongside Samsung, LG, Whirlpool, GE, Frigidaire, Maytag and Kenmore. Built-ins are usually the strongest case for repair rather than replacement, because the fault is one component in an expensive cabinet — a compressor, a start relay or a failed control board, not the cabinet it sits in.",
      },
      {
        id: "how-fast-refrigerator",
        question: "How fast can someone come out when a refrigerator stops cooling?",
        answer:
          "Same-day or next-day appointments are available across Cleveland and Parma whenever scheduling allows. Food safety is the reason to call early rather than wait: a fridge above 40°F puts perishables at risk within hours, so moving what matters to a cooler while you wait protects the groceries either way.",
      },
    ],
    whyChoosePoints: [
      "Demo mode and stored fault history are checked before any part is pulled — a Samsung in showroom mode looks exactly like a failed compressor",
      "One warm compartment is treated as an airflow problem, not a thermostat problem, which is where that symptom actually lives",
      "Defrost heaters, evaporator fan motors, start relays and water inlet valves are standard van stock",
      "Leaks are traced through the whole water path — defrost drain, inlet valve, supply line and filter housing — rather than stopping at the first wet spot",
      "180-day parts and labor warranty on every completed refrigerator repair",
    ],
    closingHeading: "Refrigerator Repair That Separates Defrost From Compressor",
    closingText: [
      "The expensive mistake on a refrigerator is reading a defrost failure as a sealed-system failure. Both present as a unit that will not hold temperature, and one of them is a part under fifty dollars while the other is a decision about whether to keep the appliance. A frosted evaporator coil, a dead fan and a bad compressor all feel the same from the kitchen door.",
      "So we test the sealed system, the airflow and the defrost circuit in that order, read the control board's stored faults rather than guessing from the symptom, and tell you which component failed and what the repair costs before any work begins. Same-day and next-day appointments are available across Cleveland, Parma and Greater Cleveland when scheduling allows.",
    ],
  },
  {
    id: "washer-repair",
    title: "Washer Repair",
    description:
      "Not spinning? Not draining? Not starting?",
    href: "/services/washer-repair",
    icon: "/images/services/washer.webp",
    detailImage: "/images/services/washer.webp",
    heroTitle: "Washer & Washing Machine Repair in Cleveland & Parma",
    metaTitle: "Washer Repair Cleveland & Parma | Same-Day Service",
    metaDescription:
      "Fast, same-day washer & washing machine repair in Cleveland & Parma, OH. Honest, upfront pricing, 180-day warranty, all major brands. Call today!",
    badges: [
      "Same-day service",
      "Honest upfront pricing",
      "180-day parts & labor warranty",
    ],
    intro: [
      "A broken washing machine piles up laundry fast and throws off your whole week. Margus Appliance Repair provides same-day washer repair for homeowners across Cleveland, Parma, and the surrounding Greater Cleveland area. As a local, family-owned business based in Parma, our licensed technicians diagnose the problem on-site, give you an honest, upfront price, and complete most repairs in a single visit. We repair all makes and models, from traditional top-load washers to modern high-efficiency front-loaders.",
    ],
    commonProblems: [
      "Washer not spinning or not spinning fast enough",
      "Washer not draining, or water left sitting in the drum",
      "Machine not filling with water",
      "Washer won't start or won't turn on",
      "Water leaking during a cycle",
      "Washer shaking, vibrating, or \"walking\" across the floor",
      "Loud banging, grinding, or squealing noises",
      "Drum not agitating, or clothes still dirty after a wash",
      "Bad odor or mildew smell from the machine",
    ],
    commonProblemsNote:
      "If your problem isn't listed here, call us anyway — our diagnostic visit will pinpoint the exact issue.",
    brandsText:
      "We repair all major washing machine brands, including Whirlpool, Samsung, LG, Maytag, GE, Bosch, Speed Queen, Frigidaire, and Kenmore washers.",
    sections: [
      {
        heading: "Why Isn't Your Washer Working Right?",
        paragraphs: [
          "A washer that won't spin or drain usually traces back to a worn drive belt, a clogged drain pump, a failing door latch, or an electrical control fault. A machine that leaks or shakes often has a loose hose, a worn shock absorber, or an unbalanced load. Ignoring these symptoms can turn a simple fix into a costlier repair — or a flooded laundry room. Our technicians serving Cleveland and Parma diagnose the exact mechanical or electrical cause instead of guessing at symptoms.",
        ],
      },
      {
        heading: "Washer Brands We Repair",
        paragraphs: [
          "We service all major washing machine brands, including Samsung, LG, Whirlpool, GE, Maytag, Bosch, Kenmore, and Frigidaire. Whether it's a high-efficiency front-loader with a digital control board or a dependable older top-loader, our technicians carry the diagnostic knowledge and common parts to fix most problems on the first visit.",
        ],
      },
      {
        heading: "Should You Repair or Replace Your Washer?",
        paragraphs: [
          "It comes down to three things: the machine's age, the repair cost, and warranty coverage. As a rule of thumb, a washer under 8 years old with a common fault (like a bad pump or belt) is usually worth repairing, while a very old machine with a failed motor or transmission may cost more to fix than it's worth. Our technician gives you an honest, upfront quote based on the actual fault found on-site — so you can decide with facts, not guesswork.",
        ],
      },
      {
        heading: "Washer Repair Across Greater Cleveland",
        paragraphs: [
          "We provide washer and washing machine repair throughout the Greater Cleveland area, including Parma, Lakewood, Strongsville, Cleveland Heights, North Olmsted, Westlake, Solon, Euclid, Avon, and Medina, plus many surrounding communities.",
        ],
      },
    ],
    faqs: [
      {
        id: "who-provides",
        question: "Who provides washer repair in Cleveland?",
        answer:
          "Margus Global LLC, a family-owned company based in Parma, OH, serves Cleveland and Greater Cleveland homeowners with same-day washer repair, upfront quotes, and a 180-day parts and labor warranty.",
      },
      {
        id: "why-wont-spin-drain",
        question: "Why won't my washer spin or drain?",
        answer:
          "The most common causes are a worn drive belt, a clogged or failed drain pump, a faulty door latch, or a motor issue. Our technician will diagnose the exact cause on-site.",
      },
      {
        id: "service-call-fee",
        question: "How much is your diagnostic fee for washer repair?",
        answer:
          "Our diagnostic fee is $89. If you proceed with the repair, that fee is waived — so you only pay for the repair itself. You'll always get an upfront price before any work begins.",
      },
      {
        id: "repair-or-replace",
        question: "Should I repair or replace my washing machine?",
        answer:
          "If your washer is relatively new and the repair costs less than half the price of a new machine, repair is usually the smarter choice. Our technician will give you an honest recommendation.",
      },
      {
        id: "same-day",
        question: "Do you offer same-day washer repair?",
        answer:
          "Yes. We offer same-day service across Cleveland, Parma, and surrounding areas whenever our schedule allows.",
      },
    ],
  },
  {
    updated: "2026-11-26",
    id: "dryer-repair",
    title: "Dryer Repair",
    description:
      "Not heating? Not starting? Making loud noises?",
    href: "/services/dryer-repair",
    icon: "/images/services/dryer.webp",
    detailImage: "/images/services/dryer.webp",
    heroTitle: "Dryer Repair in Cleveland & Parma",
    metaTitle: "Dryer Repair Cleveland | Gas & Electric, Same-Day",
    metaDescription:
      "Dryer not heating or not tumbling? Same-day repair in Cleveland & Parma, OH. Heating elements, thermal fuses, belts, blowers. 180-day parts & labor warranty.",
    badges: [
      "Same-day service",
      "Honest upfront pricing",
      "180-day parts & labor warranty",
    ],
    intro: [
      "A dryer that tumbles without heating is one of the most common appliance calls there is, and the most commonly misdiagnosed. The element, the thermostats, the thermal fuse and the vent run all produce the same complaint: the clothes come out damp. Margus Appliance Repair tests the whole heating circuit rather than swapping the obvious part, for homeowners across Cleveland, Parma and the Greater Cleveland area. Licensed technicians work on gas and electric models, freestanding and stacked.",
    ],

    commonProblems: [
      "Drum tumbles but produces no heat at all",
      "Clothes still damp after a full cycle",
      "Cycles running far longer than they used to",
      "Dryer shutting off partway through on its own",
      "Drum will not turn, or turns with a loud thump",
      "Squealing or grinding from the back of the cabinet",
      "Burning or hot-lint smell during a cycle",
      "Dryer will not start, or the start button does nothing",
      "Error code on the display and a cycle that will not run",
      "Gas burner glowing but never igniting",
    ],
    brandsText:
      "We repair all major dryer brands, including LG, Samsung, Whirlpool, Maytag, GE, Bosch, Speed Queen, Frigidaire, and Kenmore dryers, gas and electric.",
    sections: [
      {
        heading: "Four Circuits, and Only One of Them Makes Heat",
        paragraphs: [
          "A dryer is a heater, a motor, a fan and a controller sharing one cabinet. The heat circuit on an electric model runs power through a cycling thermostat, a high-limit thermostat, a thermal fuse and the element. On a gas model the same circuit ends at an igniter, a flame sensor and two valve coils instead. The drive circuit is a motor, a belt, an idler pulley and drum rollers. The airflow circuit is a blower wheel and everything downstream of it. The control circuit is a timer or board plus a moisture sensor.",
          "No heat is the heat circuit, and it is tested end to end because the fuse, the thermostats and the element all produce an identical symptom. No tumble is the drive circuit. Long cycles and mid-cycle shutoffs are almost always airflow, which is why those get measured rather than assumed.",
        ],
        links: [{ href: "/blog/dryer-not-heating", label: "Why a dryer stops heating" }],
      },
      {
        heading: "The Only Appliance Whose Performance Depends on Something Outside It",
        paragraphs: [
          "Every other appliance in the house is self-contained. A dryer is not: it pushes hot, wet air through a duct run that belongs to the building, and it has no control over what happens in there. A dryer in perfect working order attached to a restricted duct will dry slowly, run hot, shut off early, and eventually blow its thermal fuse.",
          "That is why a no-heat call on a dryer is diagnosed as an airflow question as well as an electrical one. The thermal fuse is a one-time safety device — it does not wear out, it responds. Fitting a new fuse and leaving the cause in place means fitting another one later, which is the single most repeated repair in this trade.",
        ],
        note: "Stacked units in tight laundry closets add a second variable: the duct run is often longer and has more turns than the installer intended.",
      },
      {
        heading: "Dryer Error Codes and What They Report",
        paragraphs: [
          "LG dryers are unusual in reporting airflow as a number rather than a symptom, which makes them the clearest illustration of why duct condition matters:",
        ],
        list: [
          "LG d80, d90, d95 — the machine has measured the exhaust duct as 80, 90 or 95 percent blocked",
          "LG tE1, tE2 — thermistor fault in the heat circuit",
          "Samsung HE or HE1 — heating error, element or thermostat side",
          "Samsung tS or tO — temperature sensor shorted or open",
          "Samsung dC, LG dE — door switch not reading closed, so the cycle will not start",
          "Whirlpool and Maytag F22 — exhaust thermistor out of range",
        ],
        note: "A d80 on an LG is not a dryer fault. It is the dryer correctly reporting a duct problem, and replacing parts in response to it fixes nothing.",
      },
      {
        heading: "Repairing Against Replacing a Dryer",
        paragraphs: [
          "Dryers favor repair more than almost any appliance, because the parts that fail are cheap and the machine around them is simple — elements, fuses, thermostats, belts, rollers and pulleys are all modest. A failed motor or a cracked drum on a very old unit is where the arithmetic turns.",
        ],
        links: [
          {
            href: "/blog/repair-vs-replace-appliance",
            label: "When to repair and when to replace an appliance",
          },
        ],
      },
      {
        heading: "Dryer Repair Across Greater Cleveland",
        paragraphs: [
          "Dryer repair covers Cleveland, Parma and the surrounding communities, gas and electric, with same-day and next-day appointments when scheduling allows.",
        ],
        links: [{ href: "/service-areas", label: "See every city we cover" }],
      },
    ],
    faqs: [
      {
        id: "diagnose-dryer-no-heat",
        question: "How do you diagnose a dryer that won't heat?",
        answer:
          "The heat circuit is tested end to end, because the thermal fuse, both thermostats and the element all produce an identical no-heat symptom. Exhaust airflow is checked alongside it, since a restricted duct is what blows fuses. On gas models the igniter, flame sensor and valve coils are tested as a set instead.",
      },
      {
        id: "thermal-fuse-common",
        question: "Are thermal fuse failures common on dryers?",
        answer:
          "Yes — the thermal fuse is one of the most common no-heat failures, because it is designed to be the part that dies. It is a one-time safety device that blows when exhaust temperature climbs too high, usually because airflow is restricted. Replacing the fuse without finding the restriction means blowing the next one too.",
      },
      {
        id: "heating-element-common",
        question: "Are heating element failures common on dryers?",
        answer:
          "Yes — on electric dryers a broken element coil is the single most frequent cause of a drum that tumbles without heat. The coil sags with heat cycling until it touches the housing or snaps. Gas dryers show the same symptom from a failed igniter or valve coil, so the test differs by fuel type.",
      },
      {
        id: "lg-dryer-faults",
        question: "What fails most on an LG dryer?",
        answer:
          "LG dryers report airflow problems directly: a d80, d90 or d95 code is the machine telling you the duct is 80 to 95 percent blocked. Beyond that, the thermistor and the heater relay on the control board are the usual LG-specific faults, while drum rollers and belts wear like any other brand.",
      },
      {
        id: "washer-and-dryer-one-visit",
        question: "Can you repair a washer and dryer on the same visit?",
        answer:
          "Yes — both machines can be diagnosed on one appointment, which is common in Cleveland basements and laundry closets where they sit side by side. Stacked units need the dryer lifted off to reach the washer, so mentioning the setup when you book lets the technician bring the right equipment and plan time for two appliances.",
      },
      {
        id: "gas-and-electric-dryers",
        question: "Do you repair gas dryers as well as electric?",
        answer:
          "Yes — gas and electric dryers are both covered, and the no-heat diagnosis splits at the fuel source. Electric models point to the element, the thermostats and the fuse. Gas models point to the igniter, the flame sensor and the two valve coils, which fail in pairs and leave the burner glowing without lighting.",
      },
    ],
    whyChoosePoints: [
      "The whole heating circuit is tested — fuse, both thermostats, element or valve coils — because all four produce the same no-heat complaint",
      "Airflow is treated as part of the diagnosis, not an afterthought, since a restricted duct is what blows thermal fuses in the first place",
      "Stored error codes are read off the board, including LG's d80 to d95 duct readings, before any part is pulled",
      "Gas models get the igniter, flame sensor and valve coils tested as a set, rather than the igniter replaced on its own",
      "180-day parts and labor warranty on every completed dryer repair",
    ],
    closingHeading: "Dryer Repair That Finds Why the Fuse Blew",
    closingText: [
      "The misdiagnosis that defines this appliance is treating a blown thermal fuse as the fault. It is not — it is a one-time safety device doing exactly what it was fitted to do, and something made the exhaust run hot enough to trip it. Fit a new fuse, hand back the dryer, and the same call comes in a few months later.",
      "So we test the heating circuit end to end, check what the exhaust air is actually able to do, and read the duct readings the machine has already stored before replacing anything. Then you get the failed part named and priced before the work starts. Same-day and next-day appointments across Cleveland, Parma and Greater Cleveland when scheduling allows.",
    ],
  },
  {
    updated: "2026-11-26",
    id: "stove-repair",
    title: "Stove & Cooktop Repair",
    description:
      "Burner not heating? Not igniting? Controls not responding?",
    href: "/services/stove-repair",
    icon: "/images/services/stove.webp",
    detailImage: "/images/services/stove.webp",
    heroTitle: "Stove & Cooktop Repair in Cleveland & Parma",
    metaTitle: "Stove & Cooktop Repair Cleveland | Gas & Electric",
    metaDescription:
      "Same-day stove & cooktop repair in Cleveland & Parma, OH. Burners that won't light, endless clicking, dead elements, cracked glass tops.",
    badges: [
      "Same-day service",
      "Honest upfront pricing",
      "180-day parts & labor warranty",
    ],
    intro: [
      "A burner that clicks without lighting, one element cold while the rest work, or a touch panel that stopped responding are surface problems, and they have their own set of causes — spark electrodes, a spark module, burner ports, infinite switches. Margus Appliance Repair diagnoses the cooking surface for homeowners across Cleveland, Parma and the Greater Cleveland area. Licensed technicians work on gas burners, radiant coil and glass-ceramic electric tops, and induction surfaces.",
    ],

    commonProblems: [
      "Burner clicks continuously and never lights",
      "Burner lights but the clicking carries on afterward",
      "One burner dead while the others light normally",
      "Flame burning yellow, uneven, or lifting off the port",
      "Gas smell around the surface during use",
      "Electric element stays cold or heats only on high",
      "Glass-ceramic top cracked or chipped",
      "Touch controls unresponsive or lighting up at random",
      "Knob turns loosely without changing the flame",
      "Induction surface not recognizing a pan",
    ],
    brandsText:
      "We repair all major stove and cooktop brands, including LG, Samsung, Whirlpool, GE, Maytag, KitchenAid, Bosch, Frigidaire, Viking, and Thermador cooktops, gas, electric, and induction.",
    sections: [
      {
        heading: "A Cooking Surface Has Three Circuits",
        paragraphs: [
          "On a gas top, a spark module sends high voltage to an electrode beside each burner. The spark jumps to the burner head, gas flows through the ports, and the flame carries. On an electric top, an infinite switch cycles power to a radiant coil or a ribbon element under glass. On induction, an inverter board drives a coil that heats the pan rather than the surface.",
          "So a burner that will not light splits three ways immediately: no spark, no gas, or no flame retention. One dead burner with the others working almost never means the module or the board — that would take out the whole surface. It means that burner's electrode, port or switch, which is why the fault gets traced at the burner before anything shared is suspected.",
        ],
      },
      {
        heading: "Clicking Is Information, Not Just Noise",
        paragraphs: [
          "The spark system is the one interface nothing else in the kitchen has, and it tells you where the problem is if you listen to when it happens. Clicking on every burner at once points at the module or a shared ground. Clicking from one position only points at that electrode. Clicking that continues after the flame has caught means the electrode is wet, greasy or cracked, and the module cannot see that the burner lit.",
          "That last case is the one most often mistaken for a failed spark module. The module is expensive and the electrode is not. A ceramic insulator with a hairline crack, or carbon bridging from a boil-over, keeps the module sparking indefinitely into a burner that is already alight.",
        ],
        note: "If you smell gas around the cooktop, turn the appliance off at the supply and call before troubleshooting anything.",
      },
      {
        heading: "Glass-Ceramic and Induction Surfaces",
        paragraphs: [
          "Smooth tops add a failure mode coil elements do not have: the surface is structural. A chip at the edge or a crack through the glass will spread with heat cycling, and on induction the surface sits directly over the coil and inverter board. Cracks are therefore treated as urgent rather than cosmetic.",
          "Underneath, the faults are electrical. Ribbon elements open up and go cold. Touch panels fail at the membrane or lose their connection to the control board, which reads as controls lighting at random or not at all. Induction surfaces that stop recognizing a pan are usually reporting a coil or inverter fault rather than a problem with the cookware.",
        ],
      },
      {
        heading: "Repairing Against Replacing a Cooktop",
        paragraphs: [
          "Electrodes, burner heads, infinite switches and radiant elements are inexpensive, so surface faults are among the most repairable in the kitchen. A cracked glass-ceramic top on an older unit is the exception, since the surface is a large share of what the appliance cost.",
        ],
        links: [
          {
            href: "/blog/repair-vs-replace-appliance",
            label: "When to repair and when to replace an appliance",
          },
        ],
      },
      {
        heading: "Stove & Cooktop Repair Across Greater Cleveland",
        paragraphs: [
          "Stove and cooktop repair covers Cleveland, Parma and the surrounding communities, gas and electric, with same-day and next-day appointments when scheduling allows.",
        ],
        links: [{ href: "/service-areas", label: "See every city we cover" }],
      },
    ],
    faqs: [
      {
        id: "burner-keeps-clicking",
        question: "Why does a gas burner keep clicking after it lights?",
        answer:
          "The spark module cannot tell that the burner caught, so it keeps firing. Nine times in ten that is the electrode rather than the module — a cracked ceramic insulator, or carbon and spill residue bridging the gap. Cleaning or replacing one electrode is a far smaller job than replacing the module behind it.",
      },
      {
        id: "one-burner-dead",
        question: "One burner won't work but the others do — what is that?",
        answer:
          "A single dead burner is nearly always local to that position, since anything shared would take the whole surface down. On gas it is the electrode, a blocked port or the burner head seating badly. On an electric top it is that element or its infinite switch. Either way the test starts at the burner.",
      },
      {
        id: "cracked-glass-cooktop",
        question: "Can a cracked glass cooktop be repaired?",
        answer:
          "Yes — glass-ceramic surfaces are replaceable as a panel on most models, and the elements and wiring underneath are usually unaffected. A crack is worth addressing quickly rather than living with — heat cycling spreads it, and on induction the glass sits directly over the coil and inverter board.",
      },
      {
        id: "lg-samsung-cooktops",
        question: "Do you repair LG and Samsung cooktops?",
        answer:
          "Yes — LG and Samsung cooktops are both serviced, along with Whirlpool, GE, Maytag, KitchenAid, Bosch, Frigidaire, Viking and Thermador. On the electronic-control models from both brands, unresponsive touch panels are more common than burner faults, and the panel and its board connection get tested before anything on the surface.",
      },
      {
        id: "gas-smell-cooktop",
        question: "What should I do if I smell gas near the stove?",
        answer:
          "Turn the appliance off at the gas supply, open a window, and leave the burners alone until it has been looked at. A faint smell at ignition can be normal; a persistent smell with the burners off is not. Gas faults are treated as a scheduling priority rather than a routine call.",
      },
    ],
    whyChoosePoints: [
      "Clicking is diagnosed by pattern — all burners, one burner, or after ignition — because each points somewhere different",
      "Electrodes are cleaned or replaced before a spark module is condemned, since the cheap part is the usual culprit",
      "A single dead burner is traced at that burner, not at the shared module or control board",
      "Cracked glass-ceramic tops are assessed for spread risk rather than written off as cosmetic",
      "180-day parts and labor warranty on every completed stove or cooktop repair",
    ],
    closingHeading: "Cooktop Repair That Starts at the Burner",
    closingText: [
      "The expensive mistake on a cooking surface is replacing a spark module because a burner will not stop clicking. The module is doing its job — it sparks until it detects a flame, and a cracked electrode or a carbon bridge from last week's boil-over means it never detects one. The part that failed costs a fraction of the part that gets replaced.",
      "So we diagnose clicking by its pattern, trace single-burner faults at that burner, and test touch panels and their board connections before condemning a surface. Gas faults get priority. You get the failed part named and priced before the work begins, across Cleveland, Parma and Greater Cleveland.",
    ],
  },
  {
    updated: "2026-11-26",
    id: "dishwasher-repair",
    title: "Dishwasher Repair",
    description:
      "Not drying? Not filling with water? Leaking?",
    href: "/services/dishwasher-repair",
    icon: "/images/services/dishwasher.webp",
    detailImage: "/images/services/dishwasher.webp",
    heroTitle: "Dishwasher Repair in Cleveland & Parma",
    metaTitle: "Dishwasher Repair Cleveland & Parma | Whirlpool, Bosch",
    metaDescription:
      "Same-day dishwasher repair in Cleveland & Parma, OH. Drain pumps, spray arms, Bosch E24 codes. $89 diagnostic waived when the repair goes ahead.",
    badges: [
      "Same-day service",
      "Honest upfront pricing",
      "180-day parts & labor warranty",
    ],
    intro: [
      "A dishwasher that leaves standing water in the tub, runs a full cycle without cleaning, or drips onto the kitchen floor is rarely a whole-machine failure. It is usually one part — a soil filter, a spray arm, a drain pump, a door latch — or the plumbing under the sink that the machine drains into. Margus Appliance Repair diagnoses which, on site, for homeowners across Cleveland, Parma and the Greater Cleveland area. Licensed technicians handle built-in, portable and drawer-style units, and most repairs are finished in a single visit.",
    ],
    commonProblems: [
      "Standing water left in the bottom of the tub",
      "Dishwasher drains slowly or backs up into the sink",
      "Dishes come out gritty, filmed over, or still dirty",
      "Machine won't start, or stops partway through a cycle",
      "Water leaking from the door or pooling under the unit",
      "Door won't latch, or pops open mid-cycle",
      "Error code on the display and a locked-out cycle",
      "Grinding or knocking from the pump during drain",
      "Dishes still wet at the end of a dry cycle",
      "Detergent cup not opening, or soap left behind",
    ],
    brandsText:
      "We repair all major dishwasher brands, including Whirlpool, Bosch, Samsung, KitchenAid, LG, GE, Maytag, Kenmore, Frigidaire, and Fisher & Paykel dishwashers.",
    sections: [
      {
        heading: "What Actually Fails Inside a Dishwasher",
        paragraphs: [
          "A dishwasher has four systems, and a symptom usually names one of them. Water comes in through an inlet valve. It is thrown around by a circulation pump and spray arms. Debris is caught by a soil filter and cut up by a chopper blade. Then a drain pump pushes it out. Standing water means the drain side; dirty dishes mean the wash side; a machine that will not start at all is most often the door latch assembly rather than the control board behind it.",
          "Our technicians test in that order, because the parts that fail most are also the cheapest. Replacing a control board on a dishwasher whose real fault is a $40 latch is the most common way this repair goes wrong.",
        ],
      },
      {
        heading: "The Plumbing Under the Sink Matters as Much as the Machine",
        paragraphs: [
          "A dishwasher is only as good as what it drains into, and a surprising share of \"broken dishwasher\" calls in Greater Cleveland are plumbing rather than appliance. Three things cause most of it:",
        ],
        list: [
          "A drain hose with no high loop, which lets sink water siphon back into the tub",
          "A disposal knockout plug left in place, which blocks the drain line completely",
          "A clogged air gap on the countertop, which stops the pump from clearing water",
        ],
        note: "None of these are faults in the dishwasher itself — which is why a technician who only looks at the machine will keep replacing the pump.",
      },
      {
        heading: "Dishwasher Error Codes and What They Point To",
        paragraphs: [
          "Modern dishwashers lock a cycle out rather than keep running, and the code tells you which system tripped. The ones we see most in Cleveland and Parma kitchens:",
        ],
        list: [
          "Bosch E24 — water not draining: blocked filter, kinked drain hose, or failed drain pump",
          "Bosch E15 — leak sensor tripped and cycle locked out, usually a seeping hose or sump",
          "Samsung LE or LC — leak detected at the sensor in the base pan",
          "Blinking clean light with no code — stored fault history, read through the diagnostic cycle",
        ],
        note: "A code is a starting point, not a diagnosis. Clearing the display without finding the leak or restriction only resets the countdown to the next lockout.",
      },
      {
        heading: "Repairing Against Replacing a Dishwasher",
        paragraphs: [
          "Dishwasher parts sit at the low end of appliance pricing, so the arithmetic usually favors repair — a filter, spray arm, drain hose or latch is a small fraction of a new machine plus fitting. A circulation pump or control board on a very old unit is where that changes.",
        ],
        links: [
          {
            href: "/blog/repair-vs-replace-appliance",
            label: "When to repair and when to replace an appliance",
          },
        ],
      },
      {
        heading: "Dishwasher Repair Across Greater Cleveland",
        paragraphs: [
          "Dishwasher repair runs throughout Cleveland, Parma and the surrounding communities, with same-day or next-day appointments when scheduling allows.",
        ],
        links: [{ href: "/service-areas", label: "See all the cities we cover" }],
      },
    ],
    faqs: [
      {
        id: "common-dishwasher-problems",
        question: "What are the most common dishwasher problems?",
        answer:
          "A dishwasher that will not drain, will not start, or leaves dishes wet covers most calls, and each points to a different subsystem. Built-in, portable and drawer-style machines are all serviced, with drain pumps, spray arms and door latch assemblies carried on the van so most visits end with the machine running.",
      },
      {
        id: "whirlpool-dishwasher-faults",
        question: "What usually fails on a Whirlpool dishwasher?",
        answer:
          "On Whirlpool machines the drain pump, the chopper blade and the door latch assembly account for most calls. A failed latch reads as a dishwasher that will not start at all, which is why the latch gets tested before the control board — the cheaper part fails far more often than the expensive one.",
      },
      {
        id: "bosch-error-codes",
        question: "What does a Bosch E24 or E15 error code mean?",
        answer:
          "E24 means the water is not draining — a blocked filter, a clogged drain hose or a failed pump. E15 is the leak sensor tripping and locking the cycle out, usually from a seeping hose connection or sump. Both clear once the actual leak or restriction is found, not by resetting the display.",
      },
      {
        id: "drain-problem-source",
        question: "Where does a dishwasher drain problem usually start?",
        answer:
          "Standing water in the tub traces to one of four places: the soil filter, the drain hose, the drain pump or the air gap. Under-sink plumbing causes more of these than the machine does — a drain hose without a high loop, or a disposal knockout plug left in place, will back water up every cycle.",
      },
      {
        id: "samsung-kitchenaid-dishwashers",
        question: "Do you repair Samsung and KitchenAid dishwashers?",
        answer:
          "Yes — Samsung and KitchenAid dishwashers are both serviced, along with Bosch, Whirlpool, LG, GE, Maytag, Kenmore and Frigidaire. Samsung units tend toward control-board and sensor faults, while KitchenAid and Whirlpool share a platform, so parts and failure patterns carry across the two.",
      },
      {
        id: "dishwasher-repair-cost",
        question: "How much does a dishwasher repair cost?",
        answer:
          "Most of the cost is the part, and dishwasher parts sit at the low end — a soil filter, a spray arm or a drain hose. A circulation pump or control board costs more. The $89 diagnostic identifies which one failed and is waived when the repair goes ahead, so the figure comes before the work.",
      },
    ],
    whyChoosePoints: [
      "We test the drain path before the pump — filter, hose, air gap and disposal connection — because the machine is often not the problem",
      "Error codes are read through the diagnostic cycle, not just cleared off the display",
      "Door latch assemblies, drain pumps, spray arms and inlet valves ride on the van, so the common faults are fixed on the first visit",
      "Leaks are traced to the joint, so the repair holds instead of reappearing under the cabinet two months later",
      "180-day parts and labor warranty on every completed dishwasher repair",
    ],
    closingHeading: "Dishwasher Repair That Finds the Real Fault",
    closingText: [
      "A dishwasher that will not drain is the fastest kitchen problem to misdiagnose. The symptom is always the same — water in the bottom — but the cause can sit in the filter, the hose, the pump, the air gap, or in a disposal fitting that was never opened up when the machine was first put in. Replacing the pump fixes one of those five.",
      "So we work the whole drain path before anything is ordered, read the stored fault codes rather than clearing them, and tell you which part failed and what it costs before the repair starts. Same-day and next-day appointments are available across Cleveland, Parma and Greater Cleveland when scheduling allows.",
    ],
  },
  {
    updated: "2026-11-26",
    id: "freezer-repair",
    title: "Freezer Repair",
    description:
      "Not freezing? Frost buildup? Temperature problems?",
    href: "/services/freezer-repair",
    icon: "/images/services/freezer.webp",
    detailImage: "/images/services/freezer.webp",
    heroTitle: "Chest & Upright Freezer Repair in Cleveland & Parma",
    metaTitle: "Chest & Upright Freezer Repair | Cleveland & Parma",
    metaDescription:
      "Standalone chest, upright & deep freezer repair in Cleveland & Parma, OH. Cold controls, start relays, lid gaskets, garage units. Licensed technicians.",
    badges: [
      "Same-day service",
      "Honest upfront pricing",
      "180-day parts & labor warranty",
    ],
    intro: [
      "This page is about standalone freezers — the chest unit in the garage, the upright in the basement, the deep freezer holding half a season's groceries. They are a different machine from the freezer compartment of a refrigerator: their own compressor, their own cold control, and in most cases no automatic defrost system at all. Margus Appliance Repair diagnoses them on site across Cleveland, Parma and the Greater Cleveland area. If the problem is the freezer side of your refrigerator, that is a different diagnosis and it lives on our refrigerator repair page.",
    ],
    commonProblems: [
      "Standalone freezer not holding temperature",
      "Compressor humming, then clicking off after a few seconds",
      "Cabinet running warm while the compressor never cycles off",
      "Heavy frost building on the interior walls between defrosts",
      "Lid or door not sealing, with frost forming along the seal line",
      "Lid falling shut, or not staying up on its own",
      "Water pooling around the base of the unit",
      "Chest freezer drain plug leaking after a manual defrost",
      "Temperature alarm sounding on an upright model",
      "Unit in an unheated garage behaving differently in winter",
    ],
    brandsText:
      "We repair all major standalone freezer brands, including Frigidaire, GE, Whirlpool, Amana, Kenmore, Maytag, and Sub-Zero chest, upright, and deep freezers.",
    sections: [
      {
        heading: "A Standalone Freezer Is a Simpler Machine, Deliberately",
        paragraphs: [
          "There are four things in a chest or upright freezer: a sealed system, a PTC start relay with an overload protector beside it, a mechanical cold control with a capillary bulb clipped to the evaporator, and a gasket. That is close to the whole appliance. Most chest models are manual-defrost, which means there is no defrost heater, no defrost timer and no defrost thermostat to fail.",
          "That absence is the useful part. On a refrigerator, a unit that will not hold temperature could be any of six systems. On a manual-defrost freezer the list is four items long, and a compressor that hums and then clicks off within seconds is the relay or the overload almost every time — not the compressor everyone assumes it is.",
        ],
      },
      {
        heading: "Most of These Freezers Live in Unconditioned Space",
        paragraphs: [
          "Garages, basements, back porches and outbuildings. No other appliance in the house routinely runs somewhere with no heating, and in Northeast Ohio that matters twice a year. A freezer is designed to hold its cabinet at a set temperature by removing heat — and in a garage at 20°F there is very little heat to remove, so the compressor may barely run. Many units then let the cabinet drift warmer than the dial says, because the cold control is reading ambient air it was never meant to see.",
          "The reverse happens in August, when a garage at 95°F forces the condenser to work against air hotter than it was rated for. So the first question on a garage or basement unit is where it is standing and what the room has been doing, because a freezer behaving badly in an unheated space is often a correctly functioning freezer in the wrong conditions.",
        ],
        links: [
          {
            href: "/blog/prepare-appliances-for-winter",
            label: "Preparing appliances for a Cleveland winter",
          },
          { href: "/blog/freezer-frost-buildup", label: "What causes freezer frost buildup" },
        ],
      },
      {
        heading: "Repairing Against Replacing a Standalone Freezer",
        paragraphs: [
          "Start relays, overload protectors, cold controls and gaskets are inexpensive, and the cabinet around them is the costly half — so these units repair well. A failed compressor on a very old chest freezer is the one case where the arithmetic goes the other way.",
        ],
        links: [
          {
            href: "/blog/repair-vs-replace-appliance",
            label: "When to repair and when to replace an appliance",
          },
        ],
      },
      {
        heading: "Freezer Repair Across Greater Cleveland",
        paragraphs: [
          "Standalone freezer repair covers Cleveland, Parma and the surrounding communities, with same-day and next-day appointments when scheduling allows.",
        ],
        links: [{ href: "/service-areas", label: "See every city we cover" }],
      },
    ],
    faqs: [
      {
        id: "standalone-freezer-faults",
        question: "What usually fails on a standalone freezer?",
        answer:
          "Three parts account for most standalone freezer calls: the PTC start relay, the mechanical cold control, and the lid gasket. A failed relay leaves the compressor humming and tripping on its overload. A drifting cold control never cycles off. A tired gasket lets humid air in, which shows as frost before it shows as temperature.",
      },
      {
        id: "chest-and-upright",
        question: "Do you repair chest and upright freezers?",
        answer:
          "Yes — chest, upright and deep freezers are all covered, including the ones living in garages and basements. Chest models are mostly manual-defrost, so they have no defrost heater to fail — which narrows the diagnosis to the sealed system, the relay, the cold control and the lid seal rather than widening it.",
      },
      {
        id: "frigidaire-ge-freezers",
        question: "Do you repair Frigidaire and GE freezers?",
        answer:
          "Yes — Frigidaire and GE freezers are both serviced, along with Whirlpool, Amana, Kenmore, Maytag and Sub-Zero. Standalone freezers are mechanically simple across brands — the differences are in the relay type and the cold control, not in the design — so parts are usually available and a repair rarely turns into a hunt for something discontinued.",
      },
      {
        id: "standalone-vs-compartment",
        question: "Is a standalone freezer different from a refrigerator's freezer?",
        answer:
          "Yes, mechanically — a standalone unit has its own compressor, its own cold control and usually no automatic defrost at all. The freezer compartment inside a refrigerator shares an evaporator and a defrost system with the fresh-food side, which makes it a different diagnosis entirely. Those belong on our refrigerator repair page.",
      },
    ],
    whyChoosePoints: [
      "A compressor that hums and clicks off is tested at the start relay and overload first, since that is the fault far more often than the compressor",
      "Where the unit stands is part of the diagnosis — a garage freezer in January and the same freezer in August behave differently for reasons that are not faults",
      "Manual-defrost models are diagnosed as the four-part machines they are, rather than searched for a defrost system they do not have",
      "Lid gaskets and seal lines are checked against the frost pattern, because frost shows a seal leak before the thermometer does",
      "180-day parts and labor warranty on every completed freezer repair",
    ],
    closingHeading: "Freezer Repair That Asks Where the Unit Is Standing",
    closingText: [
      "The misdiagnosis that belongs to this appliance is condemning a garage freezer that is working correctly. A chest unit in an unheated Ohio garage in January has almost no heat to pump out, so the compressor barely runs and the cabinet can drift above where the dial is set. Every symptom says failing freezer. Nothing has failed.",
      "So the first questions are where it lives and what the space has been doing, before anything gets opened up. Then the relay, the overload, the cold control and the seal — the four things that actually fail on these units. You get the answer and the price before work begins, with same-day and next-day appointments across Greater Cleveland when scheduling allows.",
    ],
  },
  {
    updated: "2026-11-26",
    id: "ice-maker-repair",
    title: "Ice Maker Repair",
    description:
      "Not making ice? Leaking water? Frost buildup?",
    href: "/services/ice-maker-repair",
    icon: "/images/services/icemaker.webp",
    detailImage: "/images/services/icemaker.webp",
    heroTitle: "Ice Maker Repair in Cleveland & Parma",
    metaTitle: "Ice Maker Repair Cleveland & Parma | Fridge & Built-In",
    metaDescription:
      "Ice maker not producing? Repair in Cleveland & Parma, OH. Fill valves, fill tubes, mold heaters, ejector motors, Samsung & LG units. Licensed technicians.",
    badges: [
      "Same-day service",
      "Honest upfront pricing",
      "180-day parts & labor warranty",
    ],
    intro: [
      "An ice maker is a small machine with one job and six stages, and when it stops the useful question is which stage it stopped at. Water arrives through a fill tube, sits in a mold, freezes, a heater releases the cubes, an ejector sweeps them into the bucket, and an arm or sensor decides whether to run again. Margus Appliance Repair follows that cycle to find the stage that failed, for homeowners across Cleveland, Parma and the Greater Cleveland area. Licensed technicians work on refrigerator ice makers and freestanding household units from every major brand.",
    ],
    commonProblems: [
      "No ice at all, with the refrigerator otherwise cold",
      "Cubes coming out small, hollow or only partly formed",
      "Mold full of ice that never ejects into the bucket",
      "Ice maker frozen into a solid block",
      "Water running into the bucket and freezing there",
      "Ice tasting or smelling of the freezer",
      "Cubes jamming in the dispenser chute",
      "Dispenser running but no ice arriving",
      "Unit overfilling and spilling water into the compartment",
      "Production stopping and starting with no pattern",
    ],
    brandsText:
      "We repair all major ice maker brands, including Samsung, LG, Whirlpool, GE, Frigidaire, KitchenAid, Sub-Zero, and Kenmore refrigerator ice makers and freestanding units.",
    sections: [
      {
        heading: "Follow the Cycle, Find the Fault",
        paragraphs: [
          "Fill, freeze, harvest, eject, repeat. Each stage has one or two parts that can stop it, which makes an ice maker one of the few appliances where the symptom maps almost directly onto a component. Nothing in the mold means water never arrived: the dual-outlet inlet valve, or a fill tube frozen shut. Water in the mold that never turns to ice means the compartment is not cold enough, which is a refrigerator question rather than an ice maker question.",
          "A full mold that never empties is the harvest stage — the mold heater that releases the cubes, or the ejector motor that sweeps them out. Ice in the bucket but none at the door is the auger motor or the chute. And a unit that runs intermittently with no pattern is usually the shutoff arm or the ice level sensor, which cannot tell whether the bucket is full.",
        ],
        links: [
          {
            href: "/blog/ice-maker-not-working",
            label: "Ice maker not working? What to check first",
          },
        ],
      },
      {
        heading: "The Stage Where It Stopped Is the Diagnosis",
        paragraphs: [
          "This is the one appliance where the most common mistake is skipping straight to the part that carries the appliance's name. The ice maker assembly is the obvious suspect and it is frequently innocent — a freezer running two degrees warm, a water line kinked behind the unit, or a filter restricting flow will all stop ice production while leaving the module in perfect working order.",
          "So compartment temperature and water supply get confirmed before the module is touched. A Parma Heights Whirlpool did turn out to need a new assembly, but that was the conclusion of the test rather than where it started — and that order is why one part was replaced instead of three.",
        ],
      },
      {
        heading: "Repairing Against Replacing an Ice Maker",
        paragraphs: [
          "This is the clearest case on the site: an ice maker fault is a small part inside an expensive refrigerator, so repairing it rather than replacing the appliance is almost never a close call. The only real decision is whether the fault is in the ice maker at all.",
        ],
        links: [
          {
            href: "/blog/repair-vs-replace-appliance",
            label: "When to repair and when to replace an appliance",
          },
        ],
      },
      {
        heading: "Ice Maker Repair Across Greater Cleveland",
        paragraphs: [
          "Ice maker repair covers Cleveland, Parma and the surrounding communities, with same-day and next-day appointments when scheduling allows.",
        ],
        links: [{ href: "/service-areas", label: "See every city we cover" }],
      },
    ],
    faqs: [
      {
        id: "diagnose-ice-maker",
        question: "How is an ice maker fault diagnosed?",
        answer:
          "The cycle is followed in order — fill, freeze, harvest, eject — because the stage where it stops names the part. No water arriving points at the fill valve or a frozen fill tube. A full mold that never empties points at the mold heater or the ejector motor instead.",
      },
      {
        id: "assembly-replacement",
        question: "Is replacing the ice maker assembly the usual fix?",
        answer:
          "Sometimes, but only after the water supply and the compartment temperature have been ruled out first. A module swapped into a freezer running too warm, or fed by a kinked line, fails again within weeks. A Parma Heights Whirlpool did need a new assembly — but that was the conclusion of the test, not the starting point.",
      },
      {
        id: "lg-samsung-ice-makers",
        question: "Do you repair LG and Samsung ice makers?",
        answer:
          "Yes — LG and Samsung ice makers are both serviced, along with Whirlpool, GE, Frigidaire, KitchenAid, Sub-Zero and Kenmore. Samsung French-door units freeze up most often, and the model number matters on those — assemblies differ between revisions, so it gets read off the plate before a part is ordered.",
      },
      {
        id: "built-in-and-freestanding",
        question: "Do you repair built-in and freestanding ice makers?",
        answer:
          "Yes — both the ice maker inside a refrigerator and freestanding household units are covered. They fail differently. A refrigerator ice maker depends on the freezer holding temperature, so its faults are often not in the module. A freestanding unit makes its own cold, which puts the condenser and the water pump in play.",
      },
      {
        id: "water-filter-ice-maker",
        question: "Will a new water filter fix the ice maker?",
        answer:
          "Sometimes — a clogged filter restricts flow enough to produce small, hollow or partial cubes before it stops ice entirely. It is the cheapest thing to rule out, so it gets checked early. If a fresh filter restores flow and the ice is still wrong, the fill valve or fill tube is next.",
      },
    ],
    whyChoosePoints: [
      "The cycle is walked stage by stage, because where it stops identifies the part more reliably than the symptom does",
      "Compartment temperature and water supply are confirmed before the ice maker assembly is touched",
      "Model numbers are read off the plate on Samsung and LG units, since assemblies and fill cups differ between revisions",
      "Filter and line restriction are ruled out early, as the cheapest possible cause of small or hollow cubes",
      "180-day parts and labor warranty on every completed ice maker repair",
    ],
    closingHeading: "Ice Maker Repair That Checks the Freezer First",
    closingText: [
      "The mistake this appliance invites is replacing the ice maker. It has the appliance's name on it, it is the thing that stopped working, and swapping it is satisfying. But a freezer sitting two degrees above where it should be, a supply line pinched behind the cabinet, or a filter overdue by a year will each stop ice production with a perfectly good module in place — and the new module will stop too.",
      "So the freezer temperature and the water path get confirmed before anything is unbolted, and the stage the cycle died at decides which part comes off the van. You get told which one failed and what it costs before the work starts. Same-day and next-day appointments across Cleveland, Parma and Greater Cleveland when scheduling allows.",
    ],
  },

  {
    updated: "2026-11-26",
    id: "oven-repair",
    title: "Oven Repair",
    description:
      "Not heating? Temperature issues? Turning on by itself?",
    href: "/services/oven-repair",
    icon: "/images/services/oven.webp",
    detailImage: "/images/services/oven.webp",
    heroTitle: "Oven & Range Repair in Cleveland & Parma",
    metaTitle: "Oven & Range Repair Cleveland & Parma | Gas & Electric",
    metaDescription:
      "Same-day oven & range repair in Cleveland & Parma, OH. Bake elements, igniters, temperature sensors, wall ovens, Viking & Wolf. Licensed technicians.",
    badges: [
      "Same-day service",
      "Honest upfront pricing",
      "180-day parts & labor warranty",
    ],
    intro: [
      "An oven that will not reach temperature, will not hold it, or bakes dark on one side is almost always one component in the heating cavity — an element, an igniter, a temperature sensor, or a door that stopped sealing. Margus Appliance Repair isolates which, on site, for homeowners across Cleveland, Parma and the Greater Cleveland area. Licensed technicians work on freestanding ranges, slide-ins, built-in wall ovens and double ovens, gas and electric, including premium built-ins.",
    ],

    commonProblems: [
      "Oven not heating or not getting hot enough",
      "Oven won't reach or hold the set temperature",
      "Temperature reading off by twenty-five degrees or more",
      "Gas oven igniter glowing but the burner never lighting",
      "Broil element working while bake does not, or the reverse",
      "Door not closing flush, or heat escaping around the seal",
      "Cracked or shattered oven door glass",
      "Self-clean cycle stuck, with the door still locked",
      "F-code on the display and a cavity that will not run",
      "Convection fan noisy or not turning",
    ],
    brandsText:
      "We repair all major oven and range brands, including Viking, Wolf, Thermador, Jenn-Air, Samsung, LG, Whirlpool, GE, Maytag, KitchenAid, Bosch, and Frigidaire ovens, gas and electric.",
    sections: [
      {
        heading: "What Heats an Oven, and the Order It Gets Tested In",
        paragraphs: [
          "An electric oven is a supply, two elements and a sensor reporting back to a control board. A gas oven swaps the elements for an igniter and a safety valve that only opens once the igniter draws enough current. Either way the cavity is a sealed box, and the door is part of the heating system rather than a lid on it.",
          "Supply voltage is verified first, then the sensor, then the element or igniter, then the board. That order exists because the cheapest possible fault — a lost leg of a 240-volt supply — produces the most alarming symptom, a completely dead cavity on an oven whose controls all light up normally.",
        ],
      },
      {
        heading: "The Door Is Part of the Oven's Heating System",
        paragraphs: [
          "No other appliance depends on a door the way an oven does. A refrigerator door failing costs efficiency; an oven door failing changes the result of every single thing you cook. The gasket, the hinges and the springs hold the cavity closed against pressure and heat, and when a hinge sags by a few millimeters the seal opens along the top edge.",
          "What you notice is uneven baking, longer preheats, or a temperature that drifts under the setting — all of which read as element or sensor faults. The door is checked as a component for exactly that reason, and glass, hinges and springs are all replaceable rather than reasons to replace the oven.",
        ],
        links: [{ href: "/blog/oven-not-heating-evenly", label: "Why an oven bakes unevenly" }],
      },
      {
        heading: "What an Oven F-Code Actually Tells You",
        paragraphs: [
          "An F-code names the circuit that reported a problem. It narrows the search by about half and tells you nothing about which part failed.",
        ],
        list: [
          "F1 — control board fault, on GE electronic ranges",
          "F2 — the cavity ran over temperature, which is the opposite complaint from no heat",
          "F3 — temperature sensor circuit open, usually the sensor or its harness",
          "F4 — temperature sensor circuit shorted",
          "F9 — door lock circuit, most often after a self-clean cycle",
        ],
        note: "A self-clean lockout with an F9 is the one code worth knowing about: the cycle has not finished unlatching, and forcing the door is how a working oven becomes a broken one.",
      },
      {
        heading: "Repairing Against Replacing an Oven",
        paragraphs: [
          "Elements, igniters, sensors, hinges and glass are all modest parts, and a premium built-in is almost always worth the repair because the cabinet is the expensive half. Combined board and element failure on a very old freestanding range is where that stops being true.",
        ],
        links: [
          {
            href: "/blog/repair-vs-replace-appliance",
            label: "When to repair and when to replace an appliance",
          },
        ],
      },
      {
        heading: "Oven & Range Repair Across Greater Cleveland",
        paragraphs: [
          "Oven and range repair covers Cleveland, Parma and the surrounding communities, with same-day and next-day appointments when scheduling allows.",
        ],
        links: [{ href: "/service-areas", label: "See every city we cover" }],
      },
    ],
    faqs: [
      {
        id: "diagnose-oven-no-heat",
        question: "How do you find out why an oven won't heat?",
        answer:
          "The power supply is verified before any heating part is touched, because an oven can look fully powered and still be unable to heat. Most electric ovens run on 240 volts across two 120-volt legs. Lose one and the display lights, the controls respond, and nothing gets hot — which looks exactly like a dead element.",
      },
      {
        id: "premium-built-in-ovens",
        question: "Do you repair Viking, Wolf and Thermador ovens?",
        answer:
          "Yes — Viking, Wolf, Thermador and Jenn-Air built-ins are serviced alongside Samsung, LG, Whirlpool, GE, Maytag, KitchenAid, Bosch and Frigidaire. One Westlake Viking lost heat gradually over several weeks. Confirming the supply voltage ruled out the wiring, and the element turned out to be visibly burned and cracked — a gradual failure, not a sudden one.",
      },
      {
        id: "wall-and-double-ovens",
        question: "Do you repair built-in wall ovens and double ovens?",
        answer:
          "Yes — built-in wall ovens and double ovens are both covered, along with freestanding ranges and slide-ins. Wall ovens take longer because the cabinet has to come out to reach the rear panel, so that gets factored into the appointment rather than discovered halfway through. Double ovens are two separate cavities and can fail independently.",
      },
      {
        id: "oven-f-codes",
        question: "What does an F1 or F3 code on an oven mean?",
        answer:
          "F-codes on GE ovens name the circuit that reported a fault, not the part to replace. F1 is usually the control board itself. F3 and F4 point at the temperature sensor or its wiring — open and shorted respectively. F2 means the cavity ran over temperature, the opposite complaint.",
      },
      {
        id: "oven-door-glass",
        question: "Can you replace cracked oven door glass?",
        answer:
          "Yes — door glass, hinges and springs are all replaceable, and on most ovens the door comes off as a unit. A door that no longer seals is worth fixing beyond appearance: heat escaping past a worn gasket or a sagging hinge throws off every bake and makes the cavity work harder to hold temperature.",
      },
    ],
    whyChoosePoints: [
      "Supply voltage is confirmed before a single heating part is pulled, because a lost 240-volt leg mimics a dead element exactly",
      "The door is treated as a heating component — gasket, hinges and springs checked rather than assumed sound",
      "Stored F-codes are read and interpreted, not cleared off the display",
      "Premium built-ins from Viking, Wolf, Thermador and Jenn-Air are serviced to the same standard as mainstream brands",
      "180-day parts and labor warranty on every completed oven or range repair",
    ],
    closingHeading: "Oven Repair That Checks the Supply First",
    closingText: [
      "The costly misread on an oven is a dead cavity diagnosed as a dead element. Electric ovens take 240 volts across two legs, and losing one leaves an appliance that lights up, beeps, accepts a temperature and never warms. Every symptom points at the element. The element is usually fine.",
      "So we meter the supply, then the sensor, then the heating part, then the board — and we check the door, because a seal that opened along the top edge produces the uneven baking that gets blamed on everything else. You get the failed component named and priced before work starts, with same-day and next-day appointments across Greater Cleveland when scheduling allows.",
    ],
  },
];

export const services = SERVICES;
