'use client';

import ServiceTypePage, { ServiceTypeData } from '../components/service-type-page';

const DATA: ServiceTypeData = {
  slug: 'automatic-washing-machine-repair',
  breadcrumb: 'Automatic Washing Machine Repair',
  badge: 'Automatic Washing Machine Repair',
  h1Pre: 'Expert',
  h1Highlight: 'Automatic',
  h1Post: 'Washing Machine Repair',
  heroDesc:
    'Is your automatic washing machine not working? We specialize in same-day emergency repairs for all major brands including LG, Samsung, Bosch, Whirlpool and Panasonic. Our certified technicians have over 12 years of experience and 5,000+ successful repairs — with transparent pricing, genuine spare parts and a 12-month workmanship warranty. Same-day service available 24/7 for emergencies.',
  heroImage: '/Spin Cycle Repair Hero Section.png',
  heroImageAlt: 'Automatic washing machine repair in Dubai',
  heroStat: { value: '~4 hrs', label: 'Most repairs completed' },
  heroBadge: 'Genuine Parts Only',
  stats: [
    { value: '5,000+', label: 'Automatic machine repairs completed' },
    { value: '25+', label: 'Brands serviced' },
    { value: '24/7', label: 'Emergency availability' },
    { value: '4.8★', label: 'Customer rating (247 reviews)' },
  ],
  serviceNoun: 'automatic washing machine',
  symptomsHeading: 'Signs Your Automatic Washing Machine Needs Repair',
  symptomsIntro:
    'Use these common symptoms to identify your washing machine problem. Each one typically has a clear cause and a proven, same-day solution.',
  symptoms: [
    { title: "Won't Drain Water", desc: 'Water stays in the drum, error codes E7/E9 appear and clothes remain wet. Usually a clogged drain hose, blocked pump filter or a foreign object in the drain. Fix: AED 150–300.' },
    { title: 'Leaking Water', desc: "Water pools under the machine or during the wash/spin cycle. A damaged door seal (very common in Dubai's heat), cracked inlet hose or loose connection is the usual cause. Fix: AED 150–300." },
    { title: 'Unusual Noises', desc: 'Grinding, squealing, banging or rattling during the cycle points to drum bearing wear, a foreign object stuck inside or a damaged pump. Fix: AED 300–600.' },
    { title: "Won't Spin", desc: 'Clothes stay wet and the motor runs but there is no spin. Caused by a broken belt, motor failure, lid switch problem or an unbalanced load. Fix: AED 350–700.' },
    { title: "Won't Start", desc: 'The machine is completely unresponsive with no lights or sounds. Power supply issues, door lock problems or control board failure are the usual suspects. Fix: AED 200–500.' },
    { title: 'Limescale Buildup & Error Codes', desc: "Poor wash quality, white deposits and codes like E2, E4, E8, FE, UE or PE. Dubai's hard water creates mineral deposits over time. Descaling: AED 100–200; code diagnosis: AED 200–400." },
  ],
  causesHeading: 'What Causes Automatic Washing Machine Problems?',
  causesImage: '/What Causes Spin Cycle Problems.png',
  causesIntro:
    'Most automatic washing machine faults in Dubai come down to a few recurring causes. Our technicians check each one carefully to find and fix the real problem — not just the symptom.',
  causes: [
    'Clogged drain hose, blocked pump filter or foreign object in the drain system',
    "Damaged door seal or cracked inlet hose — Dubai's heat accelerates rubber degradation",
    'Drum bearing wear, especially in machines 5+ years old',
    'Broken belt, motor failure or a faulty lid switch stopping the spin cycle',
    'Control board failure or sensor faults triggering display error codes',
    "Limescale buildup from Dubai's 500+ ppm hard water damaging heating elements",
  ],
  ctaTitle: 'Automatic machine down?',
  ctaHighlight: "We'll fix it today.",
  ctaDesc:
    'Book within 2 hours and we arrive same day — the fastest response time in Dubai for automatic washing machine emergencies. Available 24/7 including weekends and holidays, with most repairs completed within 4 hours of arrival.',
  brandsHeading: 'Automatic Washing Machine Repair by Brand in Dubai',
  brandsIntro:
    'Each washing machine brand has unique engineering, technology and common failure points. Our specialists are trained on brand-specific issues and maintain genuine parts inventory for all popular brands — so your machine gets exactly the right repair, not a generic fix.',
  brands: [
    {
      name: 'LG Automatic Washing Machine Repair',
      specialization: 'Direct Drive motors, TurboWash technology, AI DD (Artificial Intelligence Fabric Detection). 15+ years specialized LG expertise with same-day parts for the top 20 LG models in the UAE.',
      issues: [
        { title: 'Door Lock Mechanism Failure (FE, FH Series)', desc: "Door won't open after cycle or locks mid-cycle. Most common in machines 3–6 years old. Repair: AED 200–350" },
        { title: 'Drainage Issues with Inverter Motor', desc: "Water doesn't drain properly or drains very slowly, caused by pump blockage or motor issues. Repair: AED 250–450" },
        { title: 'Display Error Codes E7, E9, UE, PE', desc: 'Temperature sensor fault, water supply issue or motor problem — requires a diagnostic scan. Repair: AED 180–400' },
        { title: 'Drum Bearing Wear (6–8 year old models)', desc: 'Grinding noise during spin, clothes not properly extracted. Repair: AED 400–700' },
        { title: 'Control Board Malfunction', desc: "Machine doesn't respond to button presses or stops mid-cycle. Repair: AED 350–600" },
      ],
    },
    {
      name: 'Samsung Automatic Washing Machine Repair',
      specialization: 'EcoBubble technology, Digital Inverter, SmartThings connectivity, VRT (Vibration Reducing Technology). Authorized repair partner with 30+ genuine Samsung components in stock.',
      issues: [
        { title: 'Inverter Motor Failures', desc: "Strange sounds, no spin, or unexpected stops — Samsung's inverter motors are susceptible to Dubai's extreme temperatures. Repair: AED 450–750" },
        { title: 'Control Panel Circuit Board Faults', desc: "Error codes, unresponsive input or programs that don't start; common in the WF series. Repair: AED 300–500" },
        { title: 'Water Inlet Valve Malfunction', desc: "Machine won't fill with water or fills slowly — the valve gets stuck or corroded. Repair: AED 150–300" },
        { title: 'Bearing Issues in WF, WD Series (4–7 yrs)', desc: "Grinding noise, vibration during spin, drum doesn't rotate smoothly. Repair: AED 380–650" },
        { title: 'Drain Pump Blockage', desc: 'Water backs up, error codes displayed, clothes stay wet. Repair: AED 200–400' },
      ],
    },
    {
      name: 'Bosch Automatic Washing Machine Repair',
      specialization: 'VarioPerfect system, PrecisionWash, EcoTherm heating, i-Dos automatic detergent dispensing. Bosch-certified technicians with specialized hard water maintenance packages for Dubai.',
      issues: [
        { title: 'Limescale Buildup in Heating Element (very common in Dubai)', desc: "Poor wash performance, reduced water temperature and rising energy use from Dubai's hard water. Repair: AED 150–300 (preventive: AED 80–120)" },
        { title: 'Door Seal Degradation (3–5 year old machines)', desc: "Leads to leaks, mold growth and foul odors — Dubai's heat accelerates rubber degradation. Repair: AED 180–350" },
        { title: 'Vibration Problems During Spin Cycle', desc: 'Machine shakes excessively or moves across the floor; common in WAQ, WAE series. Repair: AED 200–400' },
        { title: 'Water Temperature Sensor Failures', desc: 'Incorrect water temperature, error codes, energy waste. Repair: AED 120–250' },
        { title: 'Pump Impeller Breakage', desc: 'Drain issues, water backup and noise during drainage. Repair: AED 200–380' },
      ],
    },
    {
      name: 'Whirlpool Automatic Washing Machine Repair',
      specialization: '6th Sense technology, Zen design, Adaptive Wash technology. 10+ years of Whirlpool service history in Dubai — our preventive maintenance packages reduce future repair needs by 60%.',
      issues: [
        { title: 'Drain Pump Failures in Top-Load Models', desc: "Water doesn't drain, clothes stay wet, error codes displayed — very common in older Whirlpool models. Repair: AED 250–450" },
        { title: 'Hose and Connector Deterioration', desc: 'Cracks develop from water pressure and temperature changes, leading to leaks and water damage. Repair: AED 100–250' },
        { title: 'Control Panel Responsiveness Issues', desc: "Buttons stick or don't respond, cycles pause unexpectedly. Repair: AED 200–350" },
        { title: 'Bearing and Drum Problems (5+ years old)', desc: 'Grinding noise, vibration and drum movement; common in WH, AWW series. Repair: AED 350–600' },
        { title: 'Water Level Sensor Faults', desc: 'Machine overfills or underfills, causing wash quality issues. Repair: AED 150–280' },
      ],
    },
    {
      name: 'Panasonic Automatic Washing Machine Repair',
      specialization: 'Econavi technology, stainless steel tubs, Aqua Beat, Quick Wash features. Panasonic-certified repair center with a complete spare parts catalog for all UAE models.',
      issues: [
        { title: 'Water Level Sensor Malfunctions', desc: 'Overfilling or underfilling affects wash quality and energy efficiency; common in the NA series. Repair: AED 120–250' },
        { title: 'Eco-Mode Feature Failures', desc: "Eco programs don't activate or don't work properly. Repair: AED 150–300" },
        { title: 'Door Mechanism Problems', desc: "Door won't lock or unlock, or the cycle starts before the door properly closes. Repair: AED 180–350" },
        { title: 'Stainless Steel Drum Surface Damage', desc: 'Rust spots develop in hard water areas, affecting wash performance. Repair: AED 250–450' },
        { title: 'Motor Speed Control Issues', desc: 'Incorrect spin speeds and inconsistent performance. Repair: AED 200–400' },
      ],
    },
    {
      name: 'Electrolux & Other Brands',
      specialization: 'Electrolux, Siemens, Arçelik, Vestel, Candy, Beko, Bauknecht, AEG, Zanussi and 25+ international brands used in the UAE — including regional models exclusive to the Middle East market.',
      issues: [
        { title: 'European Brand Parts Access', desc: 'Specialized parts sourcing for Siemens, Electrolux and AEG, with knowledge of brand-specific warranty requirements.' },
        { title: 'Complex Electronic Systems', desc: 'Diagnosis and repair of advanced electronic controls in premium brands.' },
        { title: 'Common Multi-Brand Issues', desc: 'Door seal problems, pump failures, bearing wear, electronic control failures and hard water damage.' },
        { title: 'Rare Parts Supply', desc: 'We maintain supplier relationships for rare washing machine parts in the UAE.' },
      ],
    },
  ],
  processHeading: 'Our Automatic Washing Machine Repair Process',
  processIntro:
    'A clear, six-step process to get your automatic washing machine working again — no guesswork and no hidden costs. Service call fee: AED 89, fully credited toward your repair.',
  includedHeading: 'A Complete Automatic Machine Service',
  includedIntro:
    'Every automatic washing machine repair includes a full inspection — not just a quick fix. All labor and parts are quoted upfront before work begins, with a 24-hour price match guarantee.',
  included: [
    'Full diagnostic scan of error codes and sensors',
    'Drain pump, filter and hose inspection',
    'Door seal and inlet hose condition check',
    'Motor, belt and drum bearing test',
    'Limescale and hard water damage assessment',
    'Full wash cycle test before we leave',
  ],
  includedImage: '/Complete Spin Cycle Repair Service.png',
  whyHeading: 'Why Automatic Washing Machine Owners in Dubai Choose Us',
  why: [
    { title: 'Same-Day Emergency Repair', desc: 'Book within 2 hours, we arrive same day. Available 24/7 including weekends and holidays — most repairs completed within 4 hours of arrival.' },
    { title: 'Certified Technicians (12+ Years)', desc: 'International certifications for LG, Samsung, Bosch & Whirlpool, trained on both front-load and top-load automatic machines with continuous training on new models.' },
    { title: 'Genuine Spare Parts Guarantee', desc: '100% original parts only — no counterfeit or refurbished components. 500+ genuine parts in stock for the top 25 brands, each with a 2-year warranty.' },
    { title: 'Transparent Pricing', desc: 'Service call fee AED 89, fully credited toward the repair. All labor and parts quoted upfront — no surprise charges, with a 24-hour price match guarantee.' },
    { title: 'Dubai Hard Water Specialist', desc: "We address limescale buildup unique to Dubai's hard water, with preventive maintenance packages that extend machine life by 5+ years." },
    { title: '12-Month Workmanship Warranty', desc: 'If the same part fails within 12 months, we fix it free. Parts warranty: 2 years. Money-back guarantee if the repair is unsuccessful.' },
  ],
  tipsHeading: 'Prevent Automatic Washing Machine Problems',
  tipsIntro:
    'Preventive maintenance saves thousands in future repairs. Our maintenance packages (AED 200–400/year) prevent 80% of common repairs through regular service.',
  tips: [
    { title: 'Clean the Drum Monthly', desc: 'Run an empty hot cycle with vinegar to prevent limescale — the No.1 Dubai hard water issue. Cost: free.' },
    { title: 'Run a Descaler Quarterly', desc: "Dubai's 500–600 ppm hard water demands a commercial descaler every quarter. Cost: AED 80–150." },
    { title: 'Check Inlet Hoses Quarterly', desc: 'Look for cracks, leaks or bulges and replace if damaged before they flood your laundry room.' },
    { title: 'Empty Pockets & Dose Detergent', desc: 'Coins and metal objects damage the drum, and excess detergent causes buildup and efficiency loss. Cost: free.' },
  ],
  tipsImage: '/Keep Your Washing Machine Spinning Smoothly.png',
  diagHeading: 'Quick Problem Diagnosis Guide',
  diagIntro:
    'Use this table to identify your automatic washing machine problem and understand what needs to be fixed. Each symptom typically has a clear cause and a proven solution.',
  diagRows: [
    { name: "Won't Drain Water", symptoms: 'Water stays in the drum, error codes E7/E9, clothes remain wet', cause: 'Clogged drain hose, blocked pump filter, foreign object in drain', solution: 'Same-day drain cleaning or pump replacement', cost: 'AED 150–300' },
    { name: 'Leaking Water', symptoms: 'Water pools under machine or during wash/spin cycle', cause: "Damaged door seal (very common in Dubai's heat), cracked inlet hose, loose connection", solution: 'Seal or hose replacement', cost: 'AED 150–300' },
    { name: 'Unusual Noises', symptoms: 'Grinding, squealing, banging or rattling during the cycle', cause: 'Drum bearing wear, foreign object stuck inside, damaged pump', solution: 'Bearing replacement or foreign object removal', cost: 'AED 300–600' },
    { name: "Won't Spin", symptoms: 'Clothes stay wet, motor runs but no spin cycle', cause: 'Broken belt, motor failure, lid switch problem, unbalanced load', solution: 'Motor/belt repair or replacement', cost: 'AED 350–700' },
    { name: "Won't Start", symptoms: 'Completely unresponsive, no lights or sounds', cause: 'Power supply issue, door lock problem, control board failure', solution: 'Diagnostic check + targeted repair', cost: 'AED 200–500' },
    { name: 'Limescale Buildup', symptoms: 'Poor wash quality, white deposits, reduced water flow', cause: "Dubai's hard water creates mineral deposits inside the machine over time", solution: 'Deep descaling + preventive maintenance', cost: 'AED 100–200' },
    { name: 'Display Error Codes', symptoms: 'Error codes E2, E4, E8, FE, UE, PE showing on screen', cause: 'Water supply issue, load imbalance, sensor fault, drainage problem', solution: 'Error code diagnosis + specific component repair', cost: 'AED 200–400' },
    { name: 'Vibration During Spin', symptoms: 'Excessive shaking, machine movement across floor, loud noises', cause: 'Drum bearing wear, load imbalance, shipping bolt not removed (new machines)', solution: 'Bearing check/replacement or load balancing', cost: 'AED 200–350' },
  ],
  urgency: {
    critical: [
      { title: 'Water Leaking from Machine', why: 'Can cause water damage to your home, mold growth and electrical hazards.', notice: 'Water pooling under the machine, water visible during the wash cycle, water coming from the door seal, wet floors in the laundry area.', cost: 'AED 200–500' },
      { title: 'Burning Smell or Smoke', why: 'Immediate fire hazard and electrical danger. STOP using the machine, unplug it and call emergency service.', notice: 'Burning odor from the machine, visible smoke or steam, electrical sparks, machine getting very hot.', cost: 'AED 300–700' },
      { title: "Won't Drain Water at All", why: 'Standing water causes mold, mildew and foul odors, can damage clothes permanently and makes the machine unusable.', notice: 'Water still in the drum after the cycle, error code E7 or E9, extremely wet clothes, foul smell inside the machine.', cost: 'AED 150–400' },
    ],
    urgent: [
      { title: 'Grinding, Squealing or Banging Noise', why: 'Indicates internal component wear that will worsen and can cause additional damage if ignored.', notice: 'Loud grinding during spin, high-pitched squealing, banging or thumping that increases over weeks.', cost: 'AED 350–600' },
      { title: "Won't Spin or Very Slow Spin", why: 'Clothes remain wet, leading to mold and mildew, with extended drying times and reduced capacity.', notice: "Cycle completes but clothes stay extremely wet, motor runs but the drum doesn't rotate, error code displayed.", cost: 'AED 250–500' },
      { title: "Door Won't Open After Cycle", why: "You can't access clothes and a faulty lock mechanism risks water damage. Often a door lock solenoid failure.", notice: "Cycle finished but the door handle won't budge, door locked even after power-off, error code on the display.", cost: 'AED 180–400' },
    ],
    preventive: [
      { title: 'Reduced Wash Performance', why: "Clothes don't get properly clean and water and electricity are wasted. Usually detergent buildup or limescale on the heating element.", notice: 'Clothes coming out dirtier than expected, stains not removing, soap residue visible, dull fabrics.', cost: 'AED 100–200' },
      { title: 'Slight Vibration During Spin', why: 'Indicates developing bearing wear or load imbalance that can worsen to severe vibration.', notice: 'Machine vibrates during spin, slight thumping sound, slight movement on the floor increasing over weeks.', cost: 'AED 200–350' },
      { title: 'White Deposits Inside Drum', why: "Dubai's 500+ ppm hard water leaves calcium and magnesium deposits that reduce efficiency and shorten machine lifespan.", notice: 'White chalky deposits on drum walls and rubber seal, decreased heating performance, water spots on clothes, musty smell.', cost: 'AED 80–350' },
    ],
  },
  faqIntro: 'Get answers to the most common questions about our automatic washing machine repair service, costs and maintenance.',
  faqs: [
    { q: 'How long does automatic washing machine repair typically take?', a: 'Simple repairs like drain cleaning or hose replacement take 1–2 hours. Moderate repairs such as motor replacement or bearing work take 2–4 hours. Complex repairs requiring part ordering are next-day. Emergency same-day repairs are available 24/7, and we always provide a time estimate upfront.' },
    { q: 'What is the average cost to repair an automatic washing machine in Dubai?', a: 'The service call fee is AED 89, fully credited toward the repair if you proceed. Minor repairs (drain, seals, hoses) cost AED 150–500, moderate repairs (motors, belts, bearings) AED 350–800 and major repairs AED 600–1,200. The average repair costs AED 350–450 including parts and labor, always quoted before work begins with no hidden charges.' },
    { q: 'Why is my automatic washing machine leaking water?', a: "The top causes in Dubai: a damaged door gasket/seal (40% of cases — Dubai's extreme heat degrades rubber faster, repair AED 150–300), a cracked inlet hose (25%, AED 80–200), pump failure (20%, AED 250–400), a blocked drain system (10%, AED 150–300) or loose connections (5%, AED 50–100). We diagnose and fix leaks same-day with specialized detection equipment." },
    { q: 'How can I prevent automatic washing machine problems?', a: 'Clean the drum monthly with an empty hot vinegar cycle, run a commercial descaler quarterly (AED 80–150), check inlet hoses quarterly, empty pockets before washing, use the correct detergent amount and schedule annual servicing (AED 250–350). Our maintenance packages (AED 200–400/year) prevent 80% of common repairs.' },
    { q: 'What brands of automatic washing machines do you repair?', a: "We repair all major brands used in Dubai: LG, Samsung, Bosch, Whirlpool, Electrolux, Siemens, AEG, Zanussi, Panasonic, Toshiba, Sharp, Hitachi, Arçelik, Vestel, Beko, Candy, Bauknecht, Indesit and more. We carry genuine spare parts for the top 25 brands, and if we can't find genuine parts we'll source them or recommend the best alternative." },
    { q: 'Do you use genuine spare parts or cheap alternatives?', a: "100% genuine parts only — never refurbished, second-hand or counterfeit components. Every replacement part is original from the manufacturer, sourced from authorized distributors, carries a 2-year warranty and we'll show you the part packaging before installation." },
    { q: 'What warranty do you offer on repairs?', a: 'A 12-month workmanship warranty on all labor and a 2-year warranty on all genuine spare parts. If the same part fails within the warranty period we fix it free, there is a money-back guarantee if the repair is unsuccessful, plus a free follow-up visit if the issue persists.' },
    { q: 'Can you come for emergency same-day repair?', a: 'Yes — we offer 24/7 emergency service. Book within 2 hours and we arrive the same day, including weekends and holidays. The emergency service charge is the same AED 89 with no additional surcharge.' },
    { q: "How does Dubai's hard water affect my automatic washing machine?", a: "Dubai's water hardness is 500–600 ppm versus the recommended 60–120 ppm. Calcium and magnesium accumulate in heating elements, pipes and the drum, reducing efficiency, increasing electricity use and shortening machine lifespan. Monthly descaling, professional maintenance and hard-water-specific detergents are the solution — we specialize in exactly this." },
  ],
  areas: ['Dubai Marina', 'Downtown Dubai', 'JBR', 'Deira', 'Bur Dubai', 'Jumeirah', 'Arabian Ranches', 'The Meadows', 'Emirates Living', 'Dubai Hills Estate', 'Palm Jumeirah', 'Business Bay', 'Dubai Sports City', 'Mirdif', 'Karama', 'Satwa'],
  formHint: "Describe your automatic washing machine issue (e.g. won't drain, error code, leaking...)",
};

export default function AutomaticWashingMachineRepairPage() {
  return <ServiceTypePage data={DATA} />;
}
