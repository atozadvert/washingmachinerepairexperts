'use client';

import ServiceTypePage, { ServiceTypeData } from '../components/service-type-page';

const DATA: ServiceTypeData = {
  slug: 'top-load-washing-machine-repair',
  breadcrumb: 'Top Load Washing Machine Repair',
  badge: 'Top Loading Washing Machine Repair',
  h1Pre: 'Expert',
  h1Highlight: 'Top-Load',
  h1Post: 'Washing Machine Repair',
  heroDesc:
    "Is your top loading washing machine acting up? We specialize in same-day emergency repairs for LG, Samsung, Whirlpool, Haier, Toshiba and more. With over 4,500 successful top load repairs, we understand the unique mechanics of top loading machines — from agitator and pulsator faults to lid switch failures and out-of-balance spin cycles.",
  heroImage: '/Machine_with_folded_clothes_202606232148.jpeg',
  heroImageAlt: 'Top loading washing machine repair in Dubai',
  heroStat: { value: '~4 hrs', label: 'Most repairs completed' },
  heroBadge: 'Genuine Parts Only',
  stats: [
    { value: '4,500+', label: 'Top load repairs completed' },
    { value: '20+', label: 'Top load brands serviced' },
    { value: '24/7', label: 'Emergency availability' },
    { value: '4.8★', label: 'Customer rating (247 reviews)' },
  ],
  serviceNoun: 'top loading washing machine',
  symptomsHeading: 'Signs Your Top Load Machine Needs Repair',
  symptomsIntro:
    "Whether your top loader won't fill, won't spin, is leaking from the base or is stuck mid-cycle — each symptom has a clear cause and a proven fix.",
  symptoms: [
    { title: "Won't Fill With Water", desc: 'The drum stays empty, the machine hums but no water enters and the cycle is stuck on fill — a faulty water inlet valve, blocked inlet screen or lid switch not engaging. Fix: AED 150–280.' },
    { title: 'Leaking From Base', desc: 'Puddles under the machine and water visible during fill or wash — a worn tub seal, cracked hose or loose pump connection. Fix: AED 150–320.' },
    { title: 'Agitator/Pulsator Not Working', desc: 'Clothes not moving, the drum spins but there is no wash action, tangled laundry — worn agitator dogs/cogs, a broken drive coupling or stripped pulsator gear. Fix: AED 200–450.' },
    { title: "Won't Spin", desc: 'Clothes soaking wet at the end of the cycle and the drum barely moves — a broken drive belt, lid switch failure or worn clutch assembly. Fix: AED 300–650.' },
    { title: "Stuck Mid-Cycle / Won't Advance", desc: 'The machine pauses indefinitely, the timer does not progress and water sits in the drum — a timer/control board fault, water level sensor issue or lid lock fault. Fix: AED 200–500.' },
    { title: 'Vibration, Odor & Error Codes', desc: 'Violent shaking or "walking" (AED 180–400), musty limescale smell (descaling AED 100–200), or codes like UE, LE, dE, F21 from load imbalance, lid lock faults or sensor errors (AED 200–400).' },
  ],
  causesHeading: 'What Causes Top Load Machine Problems?',
  causesImage: '/What Causes Spin Cycle Problems.png',
  causesIntro:
    'Top loaders have unique mechanics — agitators, pulsators, clutches and lid switches — that fail differently from front loaders. Our technicians check each carefully to find the real problem.',
  causes: [
    'Worn agitator dogs/cogs and stripped pulsator gears killing the wash action',
    'Lid switch and lid lock failures preventing fill or spin',
    'Broken drive belts and worn clutch assemblies',
    'Faulty water inlet valves and blocked inlet screens',
    'Worn suspension springs/shocks and unlevel feet causing violent vibration',
    "Limescale from Dubai's 500+ ppm hard water on heating elements and drum surfaces",
  ],
  ctaTitle: 'Top loader stuck mid-cycle?',
  ctaHighlight: "We'll fix it today.",
  ctaDesc:
    'Book within 2 hours and we arrive same day — the fastest response time in Dubai for top loading washing machine emergencies. Available 24/7 including weekends and holidays, with most top load repairs completed within 4 hours of arrival.',
  brandsHeading: 'Top Loading Washing Machine Repair by Brand in Dubai',
  brandsIntro:
    'Each top load brand has unique mechanical and electronic design. Our specialists are trained on brand-specific issues and maintain genuine parts inventory for the most popular top load brands in the UAE.',
  brands: [
    {
      name: 'LG Top Load Repair',
      specialization: 'Smart Inverter Direct Drive, TurboDrum technology, 6Motion fabric care. 15+ years of specialized LG expertise with authorized parts access.',
      issues: [
        { title: 'Lid Lock / Switch Failure', desc: "Machine won't start or spin because the lid lock isn't sensed as closed. Repair: AED 180–320" },
        { title: 'Direct Drive Motor Noise', desc: 'Humming or clicking during agitation/spin from worn motor bearings. Repair: AED 400–700' },
        { title: 'UE (Unbalanced) Error Recurring', desc: 'Load sensor miscalibration or worn suspension. Repair: AED 200–380' },
        { title: 'Water Inlet Valve Sticking', desc: 'Slow fill or no fill at all. Repair: AED 150–280' },
        { title: 'Control Board Freeze', desc: 'Machine stops responding mid-cycle. Repair: AED 350–600' },
      ],
    },
    {
      name: 'Samsung Top Load Repair',
      specialization: "Active WaterJet, VRT Plus (Vibration Reduction Technology), Wobble Technology drum — deep experience with Samsung's WaterJet and Wobble platforms used widely in Dubai homes.",
      issues: [
        { title: 'VRT Sensor / Suspension Faults', desc: 'Excessive shaking during spin even with balanced loads. Repair: AED 250–450' },
        { title: 'Pulsator Drive Coupling Wear', desc: 'Pulsator spins freely without moving clothes. Repair: AED 200–400' },
        { title: 'dE / dC Door Error Codes', desc: 'Lid lock sensor or wiring fault. Repair: AED 180–350' },
        { title: 'Drain Pump Blockage', desc: 'Water remains after the cycle, error code displayed. Repair: AED 200–400' },
        { title: 'Control Panel Unresponsive', desc: "Buttons don't register, display flickers. Repair: AED 300–500" },
      ],
    },
    {
      name: 'Whirlpool Top Load Repair',
      specialization: '6th Sense technology, Hard Water Wash cycle, Stainwash technology. 10+ years of Whirlpool top load repair history in Dubai with 20+ genuine parts in stock.',
      issues: [
        { title: 'Drain Pump Failures', desc: "The most common Whirlpool top load issue — water won't drain, clothes stay wet. Repair: AED 250–450" },
        { title: 'Agitator Dog/Cog Wear', desc: "The agitator spins but doesn't grip the drive shaft properly. Repair: AED 180–350" },
        { title: 'Lid Switch Malfunction', desc: "Machine won't spin with the lid closed. Repair: AED 150–280" },
        { title: 'Water Level Sensor Faults', desc: 'Overfilling or underfilling. Repair: AED 150–280' },
        { title: 'Timer/Control Knob Issues', desc: "The cycle doesn't advance or skips steps. Repair: AED 200–380" },
      ],
    },
    {
      name: 'Haier Top Load Repair',
      specialization: "Direct Motion motor, Magic Filter lint system, Fuzzy Logic load sensing — increasingly common in new Dubai apartment installations.",
      issues: [
        { title: 'Magic Filter Clogging', desc: 'Reduced wash performance and drainage issues from lint buildup. Repair: AED 100–200' },
        { title: 'Direct Motion Motor Faults', desc: 'Inconsistent agitation or spin speed. Repair: AED 350–600' },
        { title: 'Lid Lock Sensor Errors', desc: 'Machine pauses repeatedly during the cycle. Repair: AED 180–320' },
        { title: 'Fuzzy Logic Sensor Miscalibration', desc: 'Incorrect water levels for the load size. Repair: AED 150–300' },
      ],
    },
    {
      name: 'Toshiba & Other Top Load Brands',
      specialization: 'Toshiba, Hitachi, Midea, Galanz, Daewoo, Hisense, Nikai and Geepas — 20+ top load brands commonly sold in UAE retail outlets.',
      issues: [
        { title: 'Mechanical & Electronic Systems', desc: 'We diagnose and repair both mechanical (agitator) and electronic (impeller/sensor) top load systems.' },
        { title: 'Asian & Regional Value Brands', desc: 'Access to specialized parts for Asian and regional value brands.' },
        { title: 'Budget & Mid-Range Models', desc: 'Knowledge of budget and mid-range top load models exclusive to the Middle East market.' },
        { title: 'Older Mechanical-Timer Models', desc: 'From older mechanical-timer machines to the latest sensor-driven models — we handle virtually any brand sold in Dubai.' },
      ],
    },
  ],
  processHeading: 'Our Top Load Repair Process',
  processIntro:
    'A clear six-step process to get your top loader washing, agitating and spinning properly again — no guesswork and no hidden costs. Service call fee: AED 89, fully credited toward the repair.',
  includedHeading: 'A Complete Top Load Service',
  includedIntro:
    'Every top load repair includes a full inspection of the agitator/pulsator drive, lid switch, clutch and suspension — not just a quick fix. All labor and parts quoted upfront before work begins.',
  included: [
    'Agitator/pulsator drive and coupling inspection',
    'Lid switch and lid lock testing',
    'Drive belt and clutch assembly check',
    'Water inlet valve and level sensor testing',
    'Suspension and leveling verification',
    'Full wash cycle test before we leave',
  ],
  includedImage: '/Complete Spin Cycle Repair Service.png',
  whyHeading: 'Why Top Load Owners in Dubai Choose Us',
  why: [
    { title: 'Same-Day Emergency Repair', desc: 'Book within 2 hours, we arrive same day — the fastest response in Dubai. Available 24/7 including weekends and holidays, most repairs completed within 4 hours of arrival.' },
    { title: 'Certified Top Load Technicians (12+ Years)', desc: 'International certifications for LG, Samsung, Whirlpool & Haier — specifically trained on agitator, impeller and direct-drive top load mechanisms.' },
    { title: 'Genuine Spare Parts Guarantee', desc: '100% original parts only. Over 400 genuine top load parts in stock for the top brands sold in the UAE, each with a 2-year warranty.' },
    { title: 'Dubai Hard Water Specialist', desc: 'Limescale is especially damaging to top load heating elements and drum surfaces. Preventive maintenance packages extend machine life by 5+ years.' },
    { title: 'Transparent Pricing', desc: 'Service call fee AED 89, fully credited toward the repair. All labor and parts quoted upfront with a 24-hour price match guarantee.' },
    { title: '12-Month Workmanship Warranty', desc: 'If the same part fails within 12 months due to our repair, we fix it free. Full parts warranty: 2 years. Money-back guarantee if the repair is unsuccessful.' },
  ],
  tipsHeading: 'Prevent Top Load Machine Problems',
  tipsIntro:
    'Simple habits protect the agitator drive, suspension and drum — the most failure-prone parts of any top loader in Dubai.',
  tips: [
    { title: 'Run a Vinegar Cycle Monthly', desc: 'An empty hot cycle with vinegar reduces limescale — free. Add a commercial descaler quarterly (AED 80–150).' },
    { title: "Don't Overload the Drum", desc: 'Overloading strains the agitator/pulsator and suspension, causing premature wear — free to avoid.' },
    { title: 'Check Hoses Regularly', desc: 'Inspect inlet hoses for cracks or bulges every few months (AED 80–200 if replacement is needed).' },
    { title: 'Empty Pockets & Service Annually', desc: 'Coins, keys and hard objects damage the drum. Schedule annual professional servicing (AED 250–350).' },
  ],
  tipsImage: '/Keep Your Washing Machine Spinning Smoothly.png',
  diagHeading: 'Quick Problem Diagnosis Guide',
  diagIntro:
    'Use this table to identify your top loading washing machine problem and understand what needs to be fixed.',
  diagRows: [
    { name: "Won't Fill With Water", symptoms: 'Drum stays empty, machine hums but no water enters, cycle stuck on fill', cause: 'Faulty water inlet valve, blocked inlet screen, lid switch not engaging', solution: 'Inlet valve replacement or screen cleaning', cost: 'AED 150–280' },
    { name: 'Leaking From Base', symptoms: 'Puddles under the machine, water visible during fill or wash', cause: 'Worn tub seal, cracked hose, loose pump connection', solution: 'Seal or hose replacement', cost: 'AED 150–320' },
    { name: 'Agitator/Pulsator Not Working', symptoms: 'Clothes not moving, drum spins but no wash action, tangled laundry', cause: 'Worn agitator dogs/cogs, broken drive coupling, stripped pulsator gear', solution: 'Agitator repair or coupling replacement', cost: 'AED 200–450' },
    { name: "Won't Spin", symptoms: 'Clothes soaking wet at end of cycle, drum barely moves', cause: 'Broken drive belt, lid switch failure, worn clutch assembly', solution: 'Belt, clutch or lid switch repair', cost: 'AED 300–650' },
    { name: 'Stuck Mid-Cycle', symptoms: "Machine pauses indefinitely, timer doesn't progress, water sits in drum", cause: 'Timer/control board fault, water level sensor issue, lid lock fault', solution: 'Diagnostic check + targeted repair', cost: 'AED 200–500' },
    { name: 'Excessive Vibration / Walking', symptoms: 'Machine shakes violently, moves across the floor during spin', cause: 'Unbalanced load, worn suspension springs/shocks, unlevel feet', solution: 'Suspension repair or leveling', cost: 'AED 180–400' },
    { name: 'Limescale & Odor Buildup', symptoms: 'Musty smell, white residue on the drum, poor rinse performance', cause: "Dubai's hard water mineral deposits, detergent buildup", solution: 'Deep descaling + preventive maintenance', cost: 'AED 100–200' },
    { name: 'Display/Buzzer Error Codes', symptoms: 'Codes like UE, LE, dE, F21 flashing or a beeping pattern', cause: 'Load imbalance, lid lock fault, drain or sensor error', solution: 'Error code diagnosis + component repair', cost: 'AED 200–400' },
  ],
  urgency: {
    critical: [
      { title: 'Water Leaking From the Base', why: 'Can cause water damage, mold growth and electrical hazards near the base panel.', notice: 'Puddles under the machine, water during fill or spin, wet floor near the laundry area.', cost: 'AED 200–450' },
      { title: 'Burning Smell or Smoke', why: 'Immediate fire and electrical hazard — motor overheating, a slipping and burning belt, wiring short or control board fault. Stop using the machine immediately and unplug it.', notice: 'Burning odor, visible smoke, sparking, machine unusually hot to the touch.', cost: 'AED 300–700' },
      { title: "Won't Drain Water at All", why: 'Standing water causes mold, mildew and foul odors; clothes can be permanently damaged.', notice: 'Water remains in the drum, error/buzzer codes, persistently wet laundry.', cost: 'AED 150–400' },
    ],
    urgent: [
      { title: 'Excessive Vibration or "Walking"', why: 'Indicates suspension or leveling problems that worsen over time and can damage the cabinet or floor.', notice: 'Loud banging during spin, the machine moving across the floor, increasing noise over weeks.', cost: 'AED 180–400' },
      { title: "Won't Spin or Very Slow Spin", why: 'Clothes remain soaked, drying takes much longer and laundry capacity is effectively reduced.', notice: 'Cycle finishes but clothes are still very wet, drum barely turns, error code shown.', cost: 'AED 250–550' },
      { title: 'Agitator or Pulsator Not Moving Clothes', why: 'Wash performance drops sharply and clothes can tangle or stay dirty.', notice: 'Drum/agitator turns but laundry barely moves, twisted or knotted clothes after the cycle.', cost: 'AED 200–450' },
    ],
    preventive: [
      { title: 'Reduced Wash Performance', why: 'Wastes water and electricity and leaves clothes less clean — detergent buildup, limescale, a clogged dispenser or blocked inlet filter.', notice: 'Dirtier-than-expected results, soap residue, dull fabrics.', cost: 'AED 100–200' },
      { title: 'White Deposits Inside Drum', why: "Dubai's 500+ ppm hard water leaves calcium and magnesium deposits that reduce efficiency and shorten machine lifespan.", notice: 'Chalky white deposits on the drum and agitator, water spots on clothes, musty smell.', cost: 'AED 80–350' },
      { title: 'Slow Cycle Times & Rising Energy Use', why: 'Gradual limescale accumulation on heating elements makes the machine work harder and heats water slower.', notice: 'Longer cycles, higher electricity bills, lukewarm hot washes.', cost: 'AED 80–150' },
    ],
  },
  faqIntro: 'Get answers to the most common questions about top loading washing machine repair, costs and maintenance in Dubai.',
  faqs: [
    { q: 'How long does top loading washing machine repair typically take?', a: 'Simple repairs (drain cleaning, hose replacement, lid switch): 1–2 hours. Moderate repairs (belt, clutch, agitator coupling): 2–4 hours. Complex repairs requiring diagnostics and part ordering: next-day service. Emergency same-day repairs are available 24/7, and we always provide a time estimate upfront.' },
    { q: 'What is the average cost to repair a top loading washing machine in Dubai?', a: 'Service call fee: AED 89, fully credited toward the repair if you proceed. Minor repairs (drain, seals, hoses, lid switch): AED 150–450. Moderate repairs (belts, clutches, agitator couplings): AED 300–650. Major repairs (motor replacement, extensive suspension damage): AED 600–1,100. The average top load repair costs AED 320–420 including parts and labor.' },
    { q: 'Why is my top loading washing machine leaking water?', a: 'Leading causes in Dubai homes: a worn tub seal or pump seal (most common, especially in machines 3–5 years old — AED 150–320), a cracked inlet hose from pressure cycling and heat exposure (AED 80–200), pump failure (AED 250–400), a blocked drain system (AED 150–300) or loose hose connections (AED 50–100).' },
    { q: 'How can I prevent top loading washing machine problems?', a: "Run an empty hot cycle with vinegar monthly, use a commercial descaler quarterly (AED 80–150), check inlet hoses for cracks or bulges every few months, avoid overloading the drum (it strains the agitator/pulsator and suspension), empty pockets of coins and keys, and schedule annual professional servicing (AED 250–350)." },
    { q: 'What brands of top loading washing machines do you repair?', a: 'All major top load brands sold in Dubai: LG, Samsung, Whirlpool, Haier, Toshiba, Hitachi, Midea, Galanz, Daewoo, Hisense, Nikai and Geepas. We stock genuine parts for the top-selling brands and can source less common parts on request.' },
    { q: 'Do you use genuine spare parts or cheap alternatives?', a: "100% genuine parts only — no refurbished, second-hand or counterfeit components. Every part carries a 2-year warranty, is sourced from authorized distributors, and we'll show you the part packaging before installation." },
    { q: 'What warranty do you offer on top load repairs?', a: 'A 12-month workmanship warranty on all labor and a 2-year parts warranty on all genuine spare parts. If the same part fails again we fix it free within the warranty period, with a money-back guarantee if the repair is unsuccessful and a free follow-up visit if the issue persists.' },
    { q: 'Can you come for emergency same-day top load repair?', a: 'Yes. We offer 24/7 emergency service, booking within 2 hours and arriving the same day in most cases, including weekends and holidays. The emergency service charge is the same AED 89 — no additional surcharge.' },
    { q: "How does Dubai's hard water affect my top loading washing machine?", a: "Dubai's water hardness (500–600 ppm, against a recommended 60–120 ppm) causes calcium and magnesium buildup in heating elements, hoses and the drum. This reduces efficiency, increases electricity use and shortens the machine's lifespan. Monthly descaling and an annual professional maintenance visit are the most effective preventive measures." },
  ],
  areas: ['Dubai Marina', 'Downtown Dubai', 'JBR', 'Deira', 'Bur Dubai', 'Jumeirah', 'Arabian Ranches', 'The Meadows', 'Emirates Living', 'Dubai Hills Estate', 'Palm Jumeirah', 'Business Bay', 'Dubai Sports City', 'Mirdif', 'Karama', 'Satwa'],
  formHint: "Describe your top load machine issue (e.g. won't fill, agitator not moving, stuck mid-cycle...)",
};

export default function TopLoadWashingMachineRepairPage() {
  return <ServiceTypePage data={DATA} />;
}
