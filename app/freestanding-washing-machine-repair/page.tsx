'use client';

import ServiceTypePage, { ServiceTypeData } from '../components/service-type-page';

const DATA: ServiceTypeData = {
  slug: 'freestanding-washing-machine-repair',
  breadcrumb: 'Freestanding Washing Machine Repair',
  badge: 'Freestanding Washing Machine Repair',
  h1Pre: 'Expert',
  h1Highlight: 'Freestanding',
  h1Post: 'Washing Machine Repair',
  heroDesc:
    'Is your freestanding washing machine acting up? We specialize in same-day emergency repairs for LG, Samsung, Bosch, Whirlpool, Electrolux and Panasonic across Dubai villas, apartments and laundry rooms. With 5,800+ successful freestanding repairs, we understand every issue these standalone units face — from leveling and vibration problems caused by uneven floors to drum bearing wear, door seal failure and drainage faults.',
  heroImage: '/Washing Machine Noise Repair Hero Section.png',
  heroImageAlt: 'Freestanding washing machine repair in Dubai',
  heroStat: { value: '~4 hrs', label: 'Most repairs completed' },
  heroBadge: 'Leveling Specialists',
  stats: [
    { value: '5,800+', label: 'Freestanding repairs completed' },
    { value: '25+', label: 'Freestanding brands serviced' },
    { value: '24/7', label: 'Emergency availability' },
    { value: '4.8★', label: 'Customer rating (247 reviews)' },
  ],
  serviceNoun: 'freestanding washing machine',
  symptomsHeading: 'Signs Your Freestanding Machine Needs Repair',
  symptomsIntro:
    'Freestanding machines — front load or top load — sit independently rather than built into cabinetry, so leveling, ventilation and floor surface all play a bigger role in their performance and longevity.',
  symptoms: [
    { title: "Won't Drain Water", desc: 'Water stays in the drum with error codes E7/E9 and clothes remain wet. Clogged drain hose, blocked pump filter or a foreign object in the drain. Fix: AED 150–350.' },
    { title: 'Leaking Water', desc: 'Water pools under or around the machine during a cycle — damaged door/tub seal, cracked inlet hose or a loose connection. Fix: AED 150–320.' },
    { title: 'Excessive Vibration / Machine "Walking"', desc: 'Shaking, banging or movement across the floor during spin. Unlevel feet (very common with freestanding units), worn suspension or an unbalanced load. Fix: AED 150–400.' },
    { title: "Won't Spin", desc: "Clothes stay wet, motor runs but the drum doesn't spin — broken belt, motor failure or a door/lid switch fault. Fix: AED 300–650." },
    { title: "Won't Start / Unusual Noises", desc: 'No response when powered on, or grinding, squealing and rattling during the cycle — power supply issue, control board failure, drum bearing wear or a stuck foreign object. Fix: AED 200–700.' },
    { title: 'Limescale & Error Codes', desc: "Poor wash quality, white deposits inside the drum and codes like E2, E4, E8, FE, UE, PE. Dubai's hard water mineral deposits over time. Descaling: AED 100–220; diagnosis: AED 200–420." },
  ],
  causesHeading: 'What Causes Freestanding Machine Problems?',
  causesImage: '/What Causes Washing Machine Noise.png',
  causesIntro:
    "We're your partner in keeping your freestanding washing machine running reliably for years. Thousands of Dubai households and property managers trust us with these common root causes:",
  causes: [
    'Unlevel feet — the single most common cause of vibration in freestanding installations',
    'Worn suspension springs and shock absorbers from years of spin cycles',
    "Damaged door/tub gasket or seal — Dubai's heat accelerates rubber degradation in units 3–5 years old",
    'Clogged drain pump filters and hoses from hair, lint and coins',
    'Drum bearing wear, most common in machines 5+ years old',
    "Limescale buildup from Dubai's 500+ ppm hard water in heating elements, hoses and the drum",
  ],
  ctaTitle: 'Machine walking across the floor?',
  ctaHighlight: "We'll fix it today.",
  ctaDesc:
    'Book within 2 hours and we arrive same day — the fastest response time in Dubai for freestanding washing machine emergencies. Available 24/7 including weekends and holidays, with most repairs completed within 4 hours of arrival.',
  brandsHeading: 'Freestanding Washing Machine Repair by Brand in Dubai',
  brandsIntro:
    'Each freestanding brand has its own motor, suspension and electronic control design. Our specialists are trained on brand-specific issues and maintain genuine parts inventory for the most popular freestanding brands sold in the UAE.',
  brands: [
    {
      name: 'LG Freestanding Repair',
      specialization: 'Direct Drive motors, TurboWash technology, AI DD fabric detection, freestanding front load and top load ranges. 15+ years of specialized LG expertise.',
      issues: [
        { title: 'Door/Lid Lock Mechanism Failure', desc: "Door or lid won't open after a cycle, or locks mid-cycle. Most common in units 3–6 years old. Repair: AED 200–350" },
        { title: 'Drainage Issues With Inverter Motor', desc: "Water doesn't drain properly or drains very slowly. Repair: AED 250–450" },
        { title: 'Display Error Codes E7, E9, UE, PE', desc: 'Temperature sensor fault, water supply issue or motor problem. Repair: AED 180–400' },
        { title: 'Drum Bearing Wear (6–8 year old models)', desc: 'Grinding noise during spin, clothes not properly extracted. Repair: AED 400–700' },
        { title: 'Leveling-Related Vibration', desc: 'Excessive shaking traced back to uneven floor placement rather than an internal fault. Repair: AED 80–150 (leveling adjustment)' },
      ],
    },
    {
      name: 'Samsung Freestanding Repair',
      specialization: 'EcoBubble technology, Digital Inverter, SmartThings connectivity, VRT (Vibration Reducing Technology). Authorized access to genuine Samsung components.',
      issues: [
        { title: 'Inverter Motor Failures (common in Dubai heat)', desc: "Strange sounds, won't spin, or stops unexpectedly. Repair: AED 450–750" },
        { title: 'Control Panel Circuit Board Faults', desc: "Error codes, unresponsive panel, programs won't start. Repair: AED 300–500" },
        { title: 'Water Inlet Valve Malfunction', desc: "Won't fill or fills slowly. Repair: AED 150–300" },
        { title: 'VRT Suspension Faults', desc: 'Vibration during spin even with a balanced load, often related to feet leveling. Repair: AED 200–400' },
        { title: 'Drain Pump Blockage', desc: 'Water backs up, error codes displayed. Repair: AED 200–400' },
      ],
    },
    {
      name: 'Bosch Freestanding Repair',
      specialization: 'VarioPerfect system, PrecisionWash, EcoTherm heating, i-Dos automatic detergent dispensing. Bosch-certified technicians with hard water maintenance packages.',
      issues: [
        { title: 'Limescale Buildup in Heating Element (very common in Dubai)', desc: 'Poor wash performance, reduced water temperature. Repair: AED 150–300 (preventive: AED 80–120)' },
        { title: 'Door Seal Degradation (3–5 years old)', desc: "Leaks, mold growth and foul odors accelerated by Dubai's heat. Repair: AED 180–350" },
        { title: 'Vibration Problems During Spin Cycle', desc: 'Excessive shaking, often tied to floor surface and leveling on freestanding installations. Repair: AED 150–400' },
        { title: 'Water Temperature Sensor Failures', desc: 'Incorrect temperature, error codes, wasted energy. Repair: AED 120–250' },
        { title: 'Pump Impeller Breakage', desc: 'Drain issues and noise during drainage. Repair: AED 200–380' },
      ],
    },
    {
      name: 'Whirlpool Freestanding Repair',
      specialization: '6th Sense technology, Zen design, Adaptive Wash technology across freestanding top load and front load models. 10+ years of Whirlpool repair history in Dubai.',
      issues: [
        { title: 'Drain Pump Failures', desc: "Water doesn't drain, clothes stay wet, error codes displayed. Repair: AED 250–450" },
        { title: 'Hose and Connector Deterioration', desc: 'Cracks develop over time from water pressure and temperature changes. Repair: AED 100–250' },
        { title: 'Control Panel Responsiveness Issues', desc: "Buttons stick or don't respond, cycles pause unexpectedly. Repair: AED 200–350" },
        { title: 'Bearing and Drum Problems (5+ years old)', desc: 'Grinding noise, vibration, drum movement. Repair: AED 350–600' },
        { title: 'Leveling-Related Imbalance', desc: 'Vibration traced to an uneven floor or unadjusted feet. Repair: AED 80–150' },
      ],
    },
    {
      name: 'Electrolux & Panasonic Freestanding Repair',
      specialization: 'PerfectCare and SteamCare (Electrolux); Econavi technology and stainless steel tubs (Panasonic) — complete spare parts catalogs for both brands in the UAE.',
      issues: [
        { title: 'Water Level Sensor Malfunctions', desc: 'Overfilling or underfilling affecting wash quality and efficiency. Repair: AED 120–280' },
        { title: 'Door Mechanism Problems', desc: "Door won't lock or unlock, cycle starts before the door properly closes. Repair: AED 180–350" },
        { title: 'Motor Speed Control Issues', desc: 'Incorrect spin speeds, inconsistent performance. Repair: AED 200–400' },
        { title: 'Drain System Faults', desc: 'Slow or failed drainage. Repair: AED 180–380' },
        { title: 'Suspension and Leveling Issues', desc: 'Vibration during spin caused by uneven flooring common in some Dubai laundry room setups. Repair: AED 150–350' },
      ],
    },
    {
      name: 'Other Freestanding Brands',
      specialization: 'Siemens, Arçelik, Vestel, Candy, Beko, Bauknecht, AEG, Zanussi, Toshiba, Hitachi, Haier and Midea — 25+ international freestanding brands used in the UAE.',
      issues: [
        { title: 'European, Korean & Asian Model Parts', desc: 'Access to specialized parts across all major manufacturing regions.' },
        { title: 'Premium Electronic Systems', desc: 'Diagnosis and repair of complex electronic controls in premium freestanding models.' },
        { title: 'Regional Middle East Models', desc: 'Knowledge of regional models exclusive to the Middle East market and brand-specific warranty requirements.' },
        { title: 'Rare Parts Sourcing', desc: 'Supplier relationships for rare parts and expert diagnostics across all modern technologies.' },
      ],
    },
  ],
  processHeading: 'Our Freestanding Machine Repair Process',
  processIntro:
    'A clear six-step process — including a spirit-level leveling check unique to standalone units. Service call fee: AED 89, fully credited toward the repair, with a 24-hour price match guarantee.',
  includedHeading: 'A Complete Freestanding Machine Service',
  includedIntro:
    'Every freestanding repair includes a full inspection of leveling, suspension, seals and drainage — not just a quick fix. All labor and parts are quoted upfront before work begins.',
  included: [
    'Full leveling adjustment using a spirit level',
    'Suspension springs and shock absorber inspection',
    'Door/tub seal and hose condition check',
    'Drain pump, filter and hose cleaning',
    'Motor, belt and drum bearing testing',
    'Full wash cycle verification before we leave',
  ],
  includedImage: '/Complete Washing Machine Noise Repair Service.png',
  whyHeading: 'Why Freestanding Machine Owners in Dubai Choose Us',
  why: [
    { title: 'Same-Day Emergency Repair', desc: 'Book within 2 hours, we arrive same day — the fastest response in Dubai. Available 24/7 including weekends and holidays, with most repairs completed within 4 hours of arrival.' },
    { title: 'Certified Freestanding Technicians (12+ Years)', desc: 'International certifications across LG, Samsung, Bosch & Whirlpool freestanding models — trained specifically on leveling, suspension and ventilation considerations unique to standalone units.' },
    { title: 'Genuine Spare Parts Guarantee', desc: '100% original parts only. Over 500 genuine parts in stock covering the top 25 freestanding brands sold in the UAE, each with a 2-year warranty.' },
    { title: 'Dubai Hard Water Specialist', desc: 'We address limescale buildup affecting heating elements, drum surfaces and pump components. Preventive maintenance packages extend machine life by 5+ years.' },
    { title: 'Transparent Pricing', desc: 'Service call fee AED 89, fully credited toward the repair. All labor and parts quoted upfront with a 24-hour price match guarantee.' },
    { title: '12-Month Workmanship Warranty', desc: 'If the same part fails within 12 months due to our repair, we fix it free. Full parts warranty: 2 years. Money-back guarantee if the repair is unsuccessful.' },
  ],
  tipsHeading: 'Prevent Freestanding Machine Problems',
  tipsIntro:
    'A few simple habits keep your standalone unit stable, quiet and efficient — and help you spot problems before they turn into costly repairs.',
  tips: [
    { title: 'Re-Check Leveling Regularly', desc: 'Check your machine leveling every few months, especially after moving it. A simple adjustment resolves the majority of vibration cases — free.' },
    { title: 'Clean the Drum Monthly', desc: "Run an empty hot cycle with vinegar to prevent limescale, plus a commercial descaler quarterly given Dubai's hard water (AED 80–150)." },
    { title: 'Leave a Ventilation Gap', desc: 'A small gap behind and beside the machine improves ventilation and reduces vibration transfer to floors and walls — free.' },
    { title: 'Check Hoses & Empty Pockets', desc: 'Inspect inlet hoses quarterly for cracks or bulges, and empty pockets of coins and metal objects before washing.' },
  ],
  tipsImage: '/Washing Machine Noise Repair.png',
  diagHeading: 'Quick Problem Diagnosis Guide',
  diagIntro:
    'Use this table to identify your freestanding washing machine problem and understand what needs to be fixed.',
  diagRows: [
    { name: "Won't Drain Water", symptoms: 'Water stays in the drum, error codes E7/E9, clothes remain wet', cause: 'Clogged drain hose, blocked pump filter, foreign object in the drain', solution: 'Drain cleaning or pump replacement', cost: 'AED 150–350' },
    { name: 'Leaking Water', symptoms: 'Water pools under or around the machine during a cycle', cause: 'Damaged door seal or wash tub seal, cracked inlet hose, loose connection', solution: 'Seal or hose replacement', cost: 'AED 150–320' },
    { name: 'Excessive Vibration / "Walking"', symptoms: 'Shaking, banging or movement across the floor during spin', cause: 'Unlevel feet (very common with freestanding units), worn suspension, unbalanced load', solution: 'Leveling adjustment or suspension repair', cost: 'AED 150–400' },
    { name: "Won't Spin", symptoms: "Clothes stay wet, motor runs but the drum doesn't spin", cause: 'Broken belt, motor failure, door/lid switch fault', solution: 'Belt or motor repair', cost: 'AED 300–650' },
    { name: "Won't Start", symptoms: 'No response, no lights or sounds when powered on', cause: 'Power supply issue, door lock fault, control board failure', solution: 'Diagnostic check + targeted repair', cost: 'AED 200–500' },
    { name: 'Unusual Noises During Cycle', symptoms: 'Grinding, squealing, banging or rattling sounds', cause: 'Drum bearing wear, foreign object stuck inside, worn pulley', solution: 'Bearing replacement or object removal', cost: 'AED 350–700' },
    { name: 'Limescale & Residue Buildup', symptoms: 'Poor wash quality, white deposits inside the drum', cause: "Dubai's hard water mineral deposits over time", solution: 'Deep descaling + preventive maintenance', cost: 'AED 100–220' },
    { name: 'Display Error Codes', symptoms: 'Codes like E2, E4, E8, FE, UE, PE on the panel', cause: 'Water supply issue, load imbalance, sensor fault', solution: 'Error code diagnosis + targeted repair', cost: 'AED 200–420' },
  ],
  urgency: {
    critical: [
      { title: 'Water Leaking From the Machine', why: 'Can cause water damage to floors, mold growth and electrical hazards — particularly where a freestanding unit sits directly on tiled or wooden flooring.', notice: 'Water pooling under or around the machine, water visible during the wash cycle, water coming from the door or tub seal.', cost: 'AED 200–500' },
      { title: 'Burning Smell or Smoke', why: 'Immediate fire hazard and electrical danger. Stop using immediately, unplug the machine and call for emergency service.', notice: 'Burning odor coming from the machine, visible smoke or steam, electrical sparks, machine getting very hot.', cost: 'AED 300–700' },
      { title: "Won't Drain Water at All", why: 'Standing water causes mold, mildew and foul odors and can damage clothes permanently.', notice: 'Water remains in the drum after a cycle, error code E7 or E9, extremely wet clothes, foul smell inside the machine.', cost: 'AED 150–400' },
    ],
    urgent: [
      { title: 'Excessive Vibration or "Walking"', why: "A leading complaint specific to freestanding units that aren't anchored — uneven leveling worsens over time and can damage the machine or surrounding fixtures.", notice: 'Loud banging during spin, the machine visibly shifting position, vibration increasing in frequency over weeks.', cost: 'AED 150–400' },
      { title: 'Grinding, Squealing or Banging Noise', why: 'Indicates internal component wear that will worsen and can cause additional damage if ignored — most commonly drum bearing wear in machines 5+ years old.', notice: 'Loud grinding during spin, high-pitched squealing, banging or thumping that increases over weeks.', cost: 'AED 350–650' },
      { title: "Won't Spin or Very Slow Spin", why: 'Clothes remain wet, leading to mold and mildew, and laundry capacity is reduced.', notice: "Cycle completes but clothes stay extremely wet, motor runs but the drum doesn't rotate, error code displayed.", cost: 'AED 300–600' },
    ],
    preventive: [
      { title: 'Reduced Wash Performance', why: "Clothes don't get clean properly and water and electricity are wasted — usually detergent buildup or limescale deposits on the heating element and drum.", notice: 'Clothes coming out dirtier than expected, stains not removing, soap residue visible.', cost: 'AED 100–200' },
      { title: 'Slight Vibration During Spin', why: 'A frequent early-stage issue on freestanding units that, left unaddressed, can develop into severe vibration and bearing damage.', notice: 'Slight shaking during spin, mild thumping sound, slight floor movement that increases over weeks.', cost: 'AED 100–300' },
      { title: 'White Deposits Inside Drum', why: "Dubai's 500+ ppm hard water minerals reduce efficiency, damage clothes over time and shorten machine lifespan.", notice: 'White chalky deposits on the drum and seal, decreased heating performance, water spots on clothes, musty smell.', cost: 'AED 80–350' },
    ],
  },
  faqIntro: 'Get answers to the most common questions about freestanding washing machine repair, costs and maintenance in Dubai.',
  faqs: [
    { q: 'How long does freestanding washing machine repair typically take?', a: 'Simple repairs (drain cleaning, hose replacement, leveling adjustment): 1–2 hours. Moderate repairs (motor replacement, bearing work): 2–4 hours. Complex repairs requiring diagnostics and part ordering: next-day service. Emergency same-day repairs are available 24/7, and we always provide a time estimate upfront.' },
    { q: 'What is the average cost to repair a freestanding washing machine in Dubai?', a: 'Service call fee: AED 89, fully credited toward the repair if you proceed. Minor repairs (drain, seals, hoses, leveling): AED 150–500. Moderate repairs (motors, belts, bearings): AED 350–800. Major repairs: AED 600–1,200. The average freestanding repair costs AED 350–450 including parts and labor, quoted before work begins with no hidden charges.' },
    { q: 'Why does my freestanding washing machine vibrate or move during spin?', a: "This is one of the most common freestanding-specific complaints, since the unit isn't anchored or built into cabinetry. The leading causes are unlevel feet, a load imbalance, worn suspension springs or an uneven/soft floor surface. A simple leveling adjustment resolves the majority of cases (AED 80–150); persistent vibration after leveling usually points to suspension or bearing wear (AED 200–400)." },
    { q: 'Why is my freestanding washing machine leaking water?', a: "Leading causes in Dubai homes: a damaged door/tub gasket or seal (~40% of cases, especially in units 3–5 years old due to Dubai's extreme heat — AED 150–300), a cracked inlet hose (~25%, AED 80–200), pump failure (~20%, AED 250–400), a blocked drain system (~10%, AED 150–300) or loose connections (~5%, AED 50–100)." },
    { q: 'How can I prevent freestanding washing machine problems?', a: 'Re-check leveling every few months (especially after moving the machine), clean the drum monthly with a hot vinegar cycle, run a commercial descaler quarterly (AED 80–150), check inlet hoses quarterly, empty pockets before washing, leave a small ventilation gap behind and beside the machine, and schedule annual professional servicing (AED 250–350).' },
    { q: 'What brands of freestanding washing machines do you repair?', a: 'All major freestanding brands sold in Dubai: LG, Samsung, Bosch, Whirlpool, Electrolux, Panasonic, Siemens, AEG, Zanussi, Arçelik, Vestel, Beko, Candy, Bauknecht, Toshiba, Hitachi, Haier and Midea — covering both front load and top load freestanding configurations.' },
    { q: 'Do you use genuine spare parts or cheap alternatives?', a: "100% genuine parts only — no refurbished, second-hand or counterfeit components. Every part carries a 2-year warranty, is sourced from authorized distributors, and we'll show you the part packaging before installation." },
    { q: 'What warranty do you offer on freestanding repairs?', a: 'A 12-month workmanship warranty on all labor and a 2-year parts warranty on all genuine spare parts. If the same part fails again we fix it free within the warranty period, with a money-back guarantee if the repair is unsuccessful and a free follow-up visit if the issue persists.' },
    { q: "How does Dubai's hard water affect my freestanding washing machine?", a: "Dubai's water hardness (500–600 ppm, against a recommended 60–120 ppm) causes calcium and magnesium buildup in heating elements, hoses and the drum, regardless of whether the machine is freestanding or built-in. Reduced efficiency, slower heating, higher electricity use and a shortened lifespan all result. Monthly descaling and an annual professional maintenance visit are the most effective preventive measures." },
  ],
  areas: ['Dubai Marina', 'Downtown Dubai', 'JBR', 'Deira', 'Bur Dubai', 'Jumeirah', 'Arabian Ranches', 'The Meadows', 'Emirates Living', 'Dubai Hills Estate', 'Palm Jumeirah', 'Business Bay', 'Dubai Sports City', 'Mirdif', 'Karama', 'Satwa'],
  formHint: 'Describe your freestanding machine issue (e.g. vibrating, walking, leaking, not draining...)',
};

export default function FreestandingWashingMachineRepairPage() {
  return <ServiceTypePage data={DATA} />;
}
