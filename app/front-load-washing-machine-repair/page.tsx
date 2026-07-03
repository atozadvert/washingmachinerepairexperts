'use client';

import ServiceTypePage, { ServiceTypeData } from '../components/service-type-page';

const DATA: ServiceTypeData = {
  slug: 'front-load-washing-machine-repair',
  breadcrumb: 'Front Load Washing Machine Repair',
  badge: 'Front Loading Washing Machine Repair',
  h1Pre: 'Expert',
  h1Highlight: 'Front-Load',
  h1Post: 'Washing Machine Repair',
  heroDesc:
    'Is your front loading washing machine giving you trouble? We specialize in same-day emergency repairs for LG, Samsung, Bosch, Siemens, Whirlpool and Electrolux. With over 5,500 successful front load repairs, we understand the precision engineering inside these machines — from door seal failures and drum bearing wear to drain pump blockages and inverter motor faults.',
  heroImage: '/Washing Machine Door Lock Repair Hero Section.png',
  heroImageAlt: 'Front loading washing machine repair in Dubai',
  heroStat: { value: '~4 hrs', label: 'Most repairs completed' },
  heroBadge: 'Genuine OEM Parts',
  stats: [
    { value: '5,500+', label: 'Front load repairs completed' },
    { value: '25+', label: 'Front load brands serviced' },
    { value: '24/7', label: 'Emergency availability' },
    { value: '4.8★', label: 'Customer rating (247 reviews)' },
  ],
  serviceNoun: 'front loading washing machine',
  symptomsHeading: 'Signs Your Front Load Machine Needs Repair',
  symptomsIntro:
    'Whether your front loading washing machine is leaking from the door, won\'t drain, is making grinding noises or won\'t spin — each symptom has a clear cause and a proven fix.',
  symptoms: [
    { title: 'Leaking From the Door', desc: "Water pooling at the front of the machine or a wet floor near the door — a damaged door rubber gasket (very common in Dubai's heat), a foreign object trapped in the seal fold or a misaligned hinge. Fix: AED 180–350." },
    { title: "Won't Drain", desc: 'Water remains in the drum with error codes E7/E9/UE and clothes stay wet. A clogged drain pump filter, kinked drain hose or foreign object blocking the pump. Fix: AED 150–350.' },
    { title: "Won't Spin", desc: 'Clothes soaked at the end of the cycle, the drum barely rotates or hums loudly with no movement — a broken drive belt, carbon brush wear on older motors or a door lock not engaging. Fix: AED 300–650.' },
    { title: 'Grinding or Squealing Noise', desc: 'Loud noise increasing during spin, drum wobble or metallic scraping — drum bearing failure (very common in machines 5+ years old) or a foreign object lodged in the drum. Fix: AED 400–750.' },
    { title: "Door Won't Unlock After Cycle", desc: 'The door stays locked even after the cycle ends and power is off — door lock solenoid failure, a control board fault or a temperature interlock delay. Fix: AED 200–380.' },
    { title: 'Excessive Vibration & Error Codes', desc: 'Violent shaking or codes like E2, E4, E8, FE, UE, PE — worn shock absorbers, an unbalanced load, shipping bolts not removed or sensor faults. Fix: AED 200–420.' },
  ],
  causesHeading: 'What Causes Front Load Machine Problems?',
  causesImage: '/What Causes Washing Machine Door Lock Problems.png',
  causesIntro:
    'Front load machines rely on precision drum suspension, door seal systems and inverter motors. Our technicians check each of the usual suspects carefully to find and fix the real problem.',
  causes: [
    "Damaged door rubber gasket — Dubai's heat accelerates rubber degradation in 3–5 year old machines",
    'Clogged drain pump filter from hair, lint and coins',
    'Drum bearing failure, very common in machines 5+ years old',
    'Broken drive belt, carbon brush wear or a door lock not engaging',
    'Worn shock absorbers and suspension springs causing violent vibration',
    "Limescale on the heating element — especially damaging in front loaders where the element sits directly in the wash water",
  ],
  ctaTitle: 'Front loader leaking or grinding?',
  ctaHighlight: "We'll fix it today.",
  ctaDesc:
    'Book within 2 hours and we arrive same day — the fastest response time in Dubai for front loading washing machine emergencies. Available 24/7 including weekends and holidays, with most front load repairs completed within 4 hours of arrival.',
  brandsHeading: 'Front Loading Washing Machine Repair by Brand in Dubai',
  brandsIntro:
    'Each front load brand has unique drum suspension, motor and electronic control design. Our specialists are trained on brand-specific issues and maintain genuine parts inventory for the most popular front load brands in the UAE.',
  brands: [
    {
      name: 'LG Front Load Repair',
      specialization: 'Direct Drive motors, TurboWash technology, AI DD (Artificial Intelligence Fabric Detection). 15+ years of specialized LG expertise with authorized parts access.',
      issues: [
        { title: 'Door Lock Mechanism Failure (FE, FH Series)', desc: "Door won't open after cycle or locks mid-cycle. Most common in machines 3–6 years old. Repair: AED 200–350" },
        { title: 'Drainage Issues With Inverter Motor', desc: "Water doesn't drain properly or drains very slowly. Repair: AED 250–450" },
        { title: 'Display Error Codes E7, E9, UE, PE', desc: 'Temperature sensor fault, water supply issue or motor problem. Repair: AED 180–400' },
        { title: 'Drum Bearing Wear (6–8 year old models)', desc: 'Grinding noise during spin, clothes not properly extracted. Repair: AED 400–700' },
        { title: 'Control Board Malfunction', desc: "Machine doesn't respond to button presses or stops mid-cycle. Repair: AED 350–600" },
      ],
    },
    {
      name: 'Samsung Front Load Repair',
      specialization: 'EcoBubble technology, Digital Inverter, SmartThings connectivity, VRT. Experience with WF, WD and the latest AI series models sold widely in Dubai.',
      issues: [
        { title: 'Inverter Motor Failures (common in Dubai heat)', desc: "Strange sounds, won't spin, or stops unexpectedly. Repair: AED 450–750" },
        { title: 'Control Panel Circuit Board Faults', desc: "Error codes, unresponsive panel, programs won't start. Repair: AED 300–500" },
        { title: 'Water Inlet Valve Malfunction', desc: "Won't fill or fills slowly. Repair: AED 150–300" },
        { title: 'Bearing Issues in WF, WD Series (4–7 years old)', desc: 'Grinding noise and vibration during spin. Repair: AED 380–650' },
        { title: 'Drain Pump Blockage', desc: 'Water backs up, error codes displayed. Repair: AED 200–400' },
      ],
    },
    {
      name: 'Bosch Front Load Repair',
      specialization: "VarioPerfect system, PrecisionWash, EcoTherm heating, i-Dos automatic detergent dispensing. Bosch-certified technicians with hard water packages for Dubai's mineral-rich water.",
      issues: [
        { title: 'Limescale Buildup in Heating Element (very common in Dubai)', desc: 'Poor wash performance, reduced water temperature. Repair: AED 150–300 (preventive: AED 80–120)' },
        { title: 'Door Seal Degradation (3–5 years old)', desc: "Leaks, mold growth, foul odors accelerated by Dubai's heat. Repair: AED 180–350" },
        { title: 'Vibration Problems During Spin Cycle', desc: 'Excessive shaking, machine movement. Repair: AED 200–400' },
        { title: 'Water Temperature Sensor Failures', desc: 'Incorrect temperature, error codes, wasted energy. Repair: AED 120–250' },
        { title: 'Pump Impeller Breakage', desc: 'Drain issues and noise during drainage. Repair: AED 200–380' },
      ],
    },
    {
      name: 'Siemens Front Load Repair',
      specialization: "iQdrive motor, varioSpeed wash, iSensoric load and soil detection — specialized experience with Siemens' premium electronic sensing systems and genuine UAE parts sourcing.",
      issues: [
        { title: 'iQdrive Motor Bearing Wear', desc: 'Grinding or rattling noise during spin in machines 5+ years old. Repair: AED 400–700' },
        { title: 'iSensoric Load Sensor Faults', desc: 'Incorrect water dosing or cycle time. Repair: AED 200–380' },
        { title: 'Door Seal Mold and Leak Issues', desc: "Common in Dubai's humidity and heat. Repair: AED 180–350" },
        { title: 'Drain Pump and Filter Blockages', desc: 'Slow or failed drainage. Repair: AED 180–350' },
        { title: 'Display / Electronic Control Faults', desc: "Machine freezes or won't start a cycle. Repair: AED 300–550" },
      ],
    },
    {
      name: 'Whirlpool & Electrolux Front Load Repair',
      specialization: '6th Sense technology and Adaptive Wash (Whirlpool); PerfectCare and SteamCare (Electrolux). 10+ years of combined repair history in Dubai, with preventive maintenance programs that reduce future repairs by up to 60%.',
      issues: [
        { title: 'Drain Pump Failures', desc: "Water doesn't drain, error codes displayed. Repair: AED 250–450" },
        { title: 'Hose and Connector Deterioration', desc: 'Cracks from water pressure and temperature cycling, leading to leaks. Repair: AED 100–250' },
        { title: 'Control Panel Responsiveness Issues', desc: 'Buttons stick or cycles pause unexpectedly. Repair: AED 200–350' },
        { title: 'Bearing and Drum Problems (5+ years old)', desc: 'Grinding noise, vibration, drum movement. Repair: AED 350–600' },
        { title: 'Water Level Sensor Faults', desc: 'Overfilling or underfilling, affecting wash quality. Repair: AED 150–280' },
      ],
    },
    {
      name: 'Other Front Load Brands',
      specialization: 'Panasonic, Arçelik, Vestel, Candy, Beko, Bauknecht, AEG, Zanussi, Toshiba and Hitachi — 25+ international front load brands commonly used in the UAE.',
      issues: [
        { title: 'European Brand Parts Access', desc: 'Specialized parts for Siemens, Electrolux, AEG and Bosch, with knowledge of brand-specific warranty requirements.' },
        { title: 'Premium Electronic Systems', desc: 'Diagnosis and repair of complex electronic systems in premium models.' },
        { title: 'Regional Middle East Models', desc: 'Knowledge of regional models exclusive to the Middle East market.' },
        { title: 'Rare Parts Sourcing', desc: 'Supplier relationships for rare parts and expert diagnostics across all modern front load technologies.' },
      ],
    },
  ],
  processHeading: 'Our Front Load Repair Process',
  processIntro:
    'A clear six-step process to get your front loader washing perfectly again — no guesswork and no hidden costs. Service call fee: AED 89, fully credited toward the repair.',
  includedHeading: 'A Complete Front Load Service',
  includedIntro:
    'Every front load repair includes a full inspection of the door seal system, drum bearing assembly and drainage — not just a quick fix. All labor and parts quoted upfront before work begins.',
  included: [
    'Door seal and gasket condition inspection',
    'Drain pump filter and hose cleaning',
    'Drum bearing and suspension assembly check',
    'Inverter motor and belt diagnostics',
    'Heating element limescale assessment',
    'Full wash cycle test before we leave',
  ],
  includedImage: '/Complete Washing Machine Door Lock Repair Service.png',
  whyHeading: 'Why Front Load Owners in Dubai Choose Us',
  why: [
    { title: 'Same-Day Emergency Repair', desc: 'Book within 2 hours, we arrive same day — the fastest response in Dubai. Available 24/7 including weekends and holidays, most repairs completed within 4 hours of arrival.' },
    { title: 'Certified Front Load Technicians (12+ Years)', desc: 'International certifications for LG, Samsung, Bosch & Siemens — specifically trained on door seal systems, drum bearing assemblies and inverter motor diagnostics.' },
    { title: 'Genuine Spare Parts Guarantee', desc: '100% original parts only. Over 500 genuine front load parts in stock for the top brands sold in the UAE, each with a 2-year warranty.' },
    { title: 'Dubai Hard Water Specialist', desc: 'Limescale is especially damaging to front load heating elements and door seals. Preventive maintenance packages extend machine life by 5+ years.' },
    { title: 'Transparent Pricing', desc: 'Service call fee AED 89, fully credited toward the repair. All labor and parts quoted upfront with a 24-hour price match guarantee.' },
    { title: '12-Month Workmanship Warranty', desc: 'If the same part fails within 12 months due to our repair, we fix it free. Full parts warranty: 2 years. Money-back guarantee if the repair is unsuccessful.' },
  ],
  tipsHeading: 'Prevent Front Load Machine Problems',
  tipsIntro:
    'Simple habits protect the door seal, drum and heating element — the three most failure-prone parts of any front loader in Dubai.',
  tips: [
    { title: 'Leave the Door Ajar', desc: 'Leaving the door slightly open between washes prevents mold and odor in the door seal — free.' },
    { title: 'Descale Monthly & Quarterly', desc: "Run an empty hot vinegar cycle monthly and a commercial descaler quarterly given Dubai's hard water (AED 80–150)." },
    { title: 'Check Hoses Quarterly', desc: 'Look for cracks, leaks or bulges in the inlet hoses; replace if damaged (AED 80–200 if needed).' },
    { title: 'Empty Pockets & Dose Detergent', desc: 'Coins and metal objects damage the drum, and excess detergent causes buildup — both free to prevent.' },
  ],
  tipsImage: '/Washing Machine Door Lock Repair.png',
  diagHeading: 'Quick Problem Diagnosis Guide',
  diagIntro:
    'Use this table to identify your front loading washing machine problem and understand what needs to be fixed.',
  diagRows: [
    { name: 'Leaking From Door', symptoms: 'Water pooling at the front, wet floor near the door, leak during wash or spin', cause: "Damaged door rubber gasket (very common in Dubai's heat), foreign object in seal fold, misaligned hinge", solution: 'Door seal replacement', cost: 'AED 180–350' },
    { name: "Won't Drain", symptoms: 'Water remains in drum, error codes E7/E9/UE, clothes stay wet', cause: 'Clogged drain pump filter, kinked drain hose, foreign object blocking pump', solution: 'Pump filter cleaning or pump replacement', cost: 'AED 150–350' },
    { name: "Won't Spin", symptoms: 'Clothes soaked at end of cycle, drum barely rotates, loud hum with no movement', cause: 'Broken drive belt, carbon brush wear (older motors), door lock not engaging', solution: 'Belt or motor brush replacement', cost: 'AED 300–650' },
    { name: 'Grinding or Squealing Noise', symptoms: 'Loud noise increasing during spin, drum wobble, metallic scraping', cause: 'Drum bearing failure (very common in machines 5+ years old), foreign object lodged in drum', solution: 'Bearing replacement or drum service', cost: 'AED 400–750' },
    { name: "Door Won't Unlock After Cycle", symptoms: 'Door stays locked even after the cycle ends and power is off', cause: 'Door lock solenoid failure, control board fault, temperature interlock delay', solution: 'Door lock mechanism replacement', cost: 'AED 200–380' },
    { name: 'Excessive Vibration During Spin', symptoms: 'Machine shakes violently, moves across floor, loud banging', cause: 'Worn shock absorbers/springs, unbalanced load, shipping bolts not removed', solution: 'Suspension repair or rebalancing', cost: 'AED 200–400' },
    { name: 'Limescale & Heating Element Buildup', symptoms: 'Poor wash performance, longer cycle times, reduced water temperature', cause: "Dubai's hard water mineral deposits on the heating element and drum", solution: 'Deep descaling + preventive maintenance', cost: 'AED 100–220' },
    { name: 'Display Error Codes', symptoms: 'Codes like E2, E4, E8, FE, UE, PE on the display panel', cause: 'Water supply issue, load imbalance, sensor fault, drainage problem', solution: 'Error code diagnosis + targeted repair', cost: 'AED 200–420' },
  ],
  urgency: {
    critical: [
      { title: 'Water Leaking From the Door', why: 'Can cause water damage to floors, mold growth and electrical hazards — most often a damaged door gasket in 3–5 year old machines.', notice: 'Water pooling at the front of the machine, water visible during the wash cycle, water coming from the door seal.', cost: 'AED 200–500' },
      { title: 'Burning Smell or Smoke', why: 'Immediate fire hazard and electrical danger. Stop using immediately, unplug the machine and call for emergency service.', notice: 'Burning odor, visible smoke, electrical sparks, machine unusually hot.', cost: 'AED 300–700' },
      { title: "Won't Drain Water at All", why: 'Standing water causes mold, mildew and foul odors; clothes can be permanently damaged.', notice: 'Water remains in the drum, error code E7 or E9, extremely wet clothes, foul smell inside the drum.', cost: 'AED 150–400' },
    ],
    urgent: [
      { title: 'Grinding, Squealing or Banging Noise', why: 'Indicates internal component wear that will worsen — most commonly drum bearing wear in machines 5+ years old.', notice: 'Loud grinding during spin, high-pitched squealing, banging or thumping that increases over weeks.', cost: 'AED 350–650' },
      { title: "Won't Spin or Very Slow Spin", why: 'Clothes remain wet, leading to mold and mildew, and washing capacity is reduced. A safety feature prevents spinning without a locked door.', notice: "Cycle completes but clothes stay extremely wet, motor runs but the drum doesn't rotate, error code displayed.", cost: 'AED 300–600' },
      { title: "Door Won't Open After Cycle", why: "You can't access your clothes, and a faulty lock mechanism can signal a deeper electronic fault.", notice: "Cycle finished but the door handle won't budge, door appears locked even after power-off, error code on the display.", cost: 'AED 180–400' },
    ],
    preventive: [
      { title: 'Reduced Wash Performance', why: "Clothes don't get clean properly and water and electricity are wasted — usually detergent buildup or limescale deposits.", notice: 'Clothes coming out dirtier than expected, stains not removing, soap residue visible.', cost: 'AED 100–200' },
      { title: 'Slight Vibration During Spin', why: 'Indicates developing bearing wear or load imbalance that can worsen to severe vibration.', notice: 'Vibration during spin, slight thumping sound, gradually increasing over weeks.', cost: 'AED 200–350' },
      { title: 'White Deposits Inside Drum', why: "Dubai's 500+ ppm water hardness accumulates calcium and magnesium in heating elements, pipes and the drum, shortening machine lifespan.", notice: 'White chalky deposits on the drum and door seal, decreased heating performance, water spots on clothes, musty smell.', cost: 'AED 80–350' },
    ],
  },
  faqIntro: 'Get answers to the most common questions about front loading washing machine repair, costs and maintenance in Dubai.',
  faqs: [
    { q: 'How long does front loading washing machine repair typically take?', a: 'Simple repairs (drain cleaning, hose replacement): 1–2 hours. Moderate repairs (motor replacement, bearing work): 2–4 hours. Complex repairs requiring diagnostics and part ordering: next-day service. Emergency same-day repairs are available 24/7, and we always provide a time estimate upfront.' },
    { q: 'What is the average cost to repair a front loading washing machine in Dubai?', a: 'Service call fee: AED 89, fully credited toward the repair if you proceed. Minor repairs (drain, seals, hoses): AED 150–500. Moderate repairs (motors, belts, bearings): AED 350–800. Major repairs: AED 600–1,200. The average repair costs AED 350–450 including parts and labor, always quoted before work begins with no hidden charges.' },
    { q: 'Why is my front loading washing machine leaking water?', a: "Leading causes in Dubai homes: a damaged door gasket/seal (~40% of cases, especially in 3–5 year old machines due to Dubai's extreme heat — AED 150–300), a cracked inlet hose (~25%, AED 80–200), pump failure (~20%, AED 250–400), a blocked drain system (~10%, AED 150–300) or loose connections (~5%, AED 50–100)." },
    { q: 'How can I prevent front loading washing machine problems?', a: "Clean the drum monthly with an empty hot vinegar cycle, run a commercial descaler quarterly (AED 80–150), check inlet hoses quarterly, empty pockets before washing, use the correct detergent amount, leave the door slightly ajar between washes to prevent mold, and schedule annual professional servicing (AED 250–350)." },
    { q: 'What brands of front loading washing machines do you repair?', a: 'All major brands used in Dubai: LG, Samsung, Bosch, Siemens, Whirlpool, Electrolux, Panasonic, AEG, Zanussi, Arçelik, Vestel, Beko, Candy, Bauknecht, Toshiba and Hitachi. We carry genuine spare parts for the top 25 brands.' },
    { q: 'Do you use genuine spare parts or cheap alternatives?', a: "100% genuine parts only — no refurbished, second-hand or counterfeit components. Every part carries a 2-year warranty, is sourced from authorized distributors, and we'll show you the part packaging before installation." },
    { q: 'What warranty do you offer on front load repairs?', a: 'A 12-month workmanship warranty on all labor and a 2-year parts warranty on all genuine spare parts. If the same part fails again we fix it free within the warranty period, with a money-back guarantee if the repair is unsuccessful and a free follow-up visit if the issue persists.' },
    { q: 'Can you come for emergency same-day front load repair?', a: 'Yes. We offer 24/7 emergency service, booking within 2 hours and arriving the same day in most cases, including weekends and holidays. The emergency service charge is the same AED 89 — no additional surcharge.' },
    { q: "How does Dubai's hard water affect my front loading washing machine?", a: "Dubai's water hardness (500–600 ppm, against a recommended 60–120 ppm) causes calcium and magnesium buildup in heating elements, door seals and the drum. This is especially damaging to front load machines because the heating element sits directly in the wash water. Monthly descaling and an annual professional maintenance visit are the most effective preventive measures." },
  ],
  areas: ['Dubai Marina', 'Downtown Dubai', 'JBR', 'Deira', 'Bur Dubai', 'Jumeirah', 'Arabian Ranches', 'The Meadows', 'Emirates Living', 'Dubai Hills Estate', 'Palm Jumeirah', 'Business Bay', 'Dubai Sports City', 'Mirdif', 'Karama', 'Satwa'],
  formHint: "Describe your front load machine issue (e.g. leaking from door, grinding noise, won't spin...)",
};

export default function FrontLoadWashingMachineRepairPage() {
  return <ServiceTypePage data={DATA} />;
}
