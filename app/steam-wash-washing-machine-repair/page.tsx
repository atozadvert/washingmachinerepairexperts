'use client';

import ServiceTypePage, { ServiceTypeData } from '../components/service-type-page';

const DATA: ServiceTypeData = {
  slug: 'steam-wash-washing-machine-repair',
  breadcrumb: 'Steam Wash Washing Machine Repair',
  badge: 'Steam Wash Technology Repair',
  h1Pre: 'Expert',
  h1Highlight: 'Steam Wash',
  h1Post: 'Washing Machine Repair',
  heroDesc:
    'Is your steam wash washing machine not steaming, leaking or throwing error codes? We specialize in same-day repairs for LG (TrueSteam), Samsung (EcoBubble Steam), Bosch (Sensitive Steam) and Siemens (iSensoric Steam). Steam machines add a steam generator, extra water lines and extra sensors on top of a standard wash system — so problems can originate in the regular wash mechanics or the dedicated steam components, and correctly diagnosing which one is critical to a lasting repair.',
  heroImage: '/Washing Machine Water Leakage Repair Hero Section.png',
  heroImageAlt: 'Steam wash washing machine repair in Dubai',
  heroStat: { value: '~4 hrs', label: 'Most repairs completed' },
  heroBadge: 'Steam System Specialists',
  stats: [
    { value: '3,200+', label: 'Steam wash repairs completed' },
    { value: '15+', label: 'Steam-enabled brands serviced' },
    { value: '24/7', label: 'Emergency availability' },
    { value: '4.8★', label: 'Customer rating (247 reviews)' },
  ],
  serviceNoun: 'steam wash washing machine',
  symptomsHeading: 'Signs Your Steam Wash Machine Needs Repair',
  symptomsIntro:
    'Whether the steam function has stopped working, the machine throws a steam-specific error code or the steam generator is leaking — each symptom points to a specific fix.',
  symptoms: [
    { title: 'Steam Function Not Activating', desc: 'Steam wash selected but no visible steam and no allergy/sanitize cycle effect — a faulty steam generator heating element, blocked steam nozzle or steam relay fault. Fix: AED 250–500.' },
    { title: 'Steam-Specific Error Codes', desc: 'Codes like tE, SE, AE or a flashing steam icon — a steam temperature sensor fault, steam valve malfunction or wiring fault to the steam module. Fix: AED 220–450.' },
    { title: 'Water/Steam Leaking From Steam Unit', desc: 'Water dripping from the base or rear specifically during a steam cycle — a cracked steam generator housing, worn steam line seal or loose steam hose connection. Fix: AED 200–400.' },
    { title: 'Burning Smell During Steam Cycle', desc: 'An odor specifically during the steam phase — steam heating element scaling and overheating or steam line scorching. Fix: AED 250–550.' },
    { title: 'Steam Generator Limescale Blockage', desc: "Reduced or absent steam output and longer steam cycle times — Dubai's hard water causes heavy mineral buildup in the steam generator. Descaling: AED 150–300." },
    { title: "Won't Complete Steam Cycle", desc: 'The cycle stalls or resets specifically during steam refresh/sanitize programs — a steam pump fault, control board timing fault or restricted water supply to the steam unit. Fix: AED 300–600.' },
  ],
  causesHeading: 'What Causes Steam Wash Problems?',
  causesImage: '/What Causes Washing Machine Water Leaks.png',
  causesIntro:
    'Steam systems are especially vulnerable to Dubai\'s hard water because the steam generator concentrates and heats water repeatedly, accelerating mineral buildup far faster than a standard wash cycle.',
  causes: [
    'Limescale buildup inside the steam generator — the single most common steam wash issue in Dubai',
    'Faulty steam generator heating elements and blocked steam nozzles',
    'Steam temperature sensor faults and sticking steam valves',
    'Steam relay or wiring faults leaving the steam option selectable but inactive',
    'Steam pump faults and control board timing errors stalling sanitize programs',
    'Standard wash/spin faults (pump, belt, bearing, seal) unrelated to the steam system itself',
  ],
  ctaTitle: 'Steam function stopped working?',
  ctaHighlight: "We'll restore it today.",
  ctaDesc:
    'Book within 2 hours and we arrive same day — the fastest response in Dubai for steam wash emergencies. Available 24/7 including weekends and holidays, with most steam wash repairs completed within 4 hours of arrival.',
  brandsHeading: 'Steam Wash Washing Machine Repair by Brand in Dubai',
  brandsIntro:
    'Each steam wash brand engineers its steam delivery system differently — some use a dedicated steam generator, others heat and vaporize water through the main heating element. Our specialists are trained on these brand-specific architectures.',
  brands: [
    {
      name: 'LG TrueSteam Repair',
      specialization: "TrueSteam generator technology, Allergy Care cycle, Steam+ refresh function, AI DD fabric detection — specialized training on LG's TrueSteam generator architecture with same-day parts availability.",
      issues: [
        { title: 'TrueSteam Generator Scaling', desc: "Heavy limescale buildup reduces or stops steam output entirely — very common given Dubai's hard water. Repair: AED 200–400" },
        { title: 'Steam Sensor Fault Codes', desc: 'Allergy Care or steam-related error codes interrupting cycles. Repair: AED 180–380' },
        { title: 'Steam Nozzle Blockage', desc: "Steam isn't reaching the drum evenly, reducing sanitizing effectiveness. Repair: AED 150–300" },
        { title: 'Steam Relay/Wiring Fault', desc: "Steam option selectable but doesn't activate at all. Repair: AED 200–400" },
        { title: 'Standard Door Lock & Drainage Faults', desc: 'Same as conventional LG models, often unrelated to the steam system. Repair: AED 200–450' },
      ],
    },
    {
      name: 'Samsung EcoBubble Steam Repair',
      specialization: 'EcoBubble Steam technology, Digital Inverter motor, Hygiene Steam cycle, SmartThings connectivity — authorized access to genuine Samsung steam components.',
      issues: [
        { title: 'EcoBubble Steam Generator Limescale Failure', desc: 'Reduced steam output or generator overheating from hard water scaling. Repair: AED 220–420' },
        { title: 'Hygiene Steam Cycle Error Codes', desc: 'Codes specific to the steam sanitizing program failing to complete. Repair: AED 200–400' },
        { title: 'Steam Valve Sticking', desc: 'Steam released inconsistently or not at all during the cycle. Repair: AED 180–350' },
        { title: 'Inverter Motor Failures (Dubai heat-related)', desc: 'Affects the broader wash cycle alongside the steam function. Repair: AED 450–750' },
        { title: 'Control Panel Faults Affecting Steam Selection', desc: "Steam mode can't be selected or doesn't register. Repair: AED 250–450" },
      ],
    },
    {
      name: 'Bosch Sensitive Steam Repair',
      specialization: "Sensitive Steam technology, EcoTherm heating, i-Dos automatic detergent dispensing, anti-crease steam refresh — Bosch-certified technicians with expertise in Bosch's combined heating/steam systems.",
      issues: [
        { title: 'Steam Heating Element Scaling (very common in Dubai)', desc: 'Sensitive Steam underperforms or stops, with energy consumption rising. Repair: AED 200–400 (preventive descaling: AED 100–180)' },
        { title: 'Anti-Crease Refresh Cycle Failure', desc: "The steam refresh function for hanging garments doesn't trigger. Repair: AED 180–350" },
        { title: 'Steam Line Seal Leaks', desc: 'Water seepage specifically during steam phases. Repair: AED 200–380' },
        { title: 'Water Temperature Sensor Failures', desc: 'Incorrect steam temperature and error codes. Repair: AED 150–300' },
        { title: 'Door Seal Degradation', desc: "Accelerated by repeated steam exposure and Dubai's heat. Repair: AED 200–380" },
      ],
    },
    {
      name: 'Siemens iSensoric Steam Repair',
      specialization: "iSensoric Steam, iQdrive motor, varioSpeed wash, steam-based crease and odor reduction — specialized experience with Siemens' premium sensor-driven steam systems.",
      issues: [
        { title: 'iSensoric Steam Sensor Drift', desc: 'Inaccurate steam dosing affecting fabric care results. Repair: AED 200–400' },
        { title: 'Steam Generator Scale Buildup', desc: 'Hard water deposits reducing steam output over time. Repair: AED 200–400' },
        { title: 'Steam Module Wiring Faults', desc: 'Steam programs unavailable on the display despite the machine otherwise running normally. Repair: AED 220–420' },
        { title: 'iQdrive Motor Bearing Wear', desc: 'Affecting overall spin performance alongside steam features. Repair: AED 400–700' },
        { title: 'Display/Electronic Control Faults', desc: 'Machine freezes specifically on steam-enabled cycles. Repair: AED 300–550' },
      ],
    },
    {
      name: 'Other Steam-Enabled Brands',
      specialization: 'Panasonic (Aqua Beat Steam), Electrolux (SteamCare), Whirlpool (Steam Refresh), Haier, AEG and Toshiba — 15+ steam-enabled brands sold in the UAE.',
      issues: [
        { title: 'Steam-Specific Parts Access', desc: 'Steam generators, sensors and relay parts across multiple manufacturers.' },
        { title: 'Fault Isolation Expertise', desc: 'We distinguish steam-specific faults from general wash/spin/drain issues to avoid unnecessary part replacement.' },
        { title: 'Steam Warranty Knowledge', desc: 'Steam-related warranty terms often differ from standard machine warranties on premium models — we know the difference.' },
        { title: 'Multi-Brand Diagnosis', desc: '12+ years of appliance repair experience combined with focused steam-system training.' },
      ],
    },
  ],
  processHeading: 'Our Steam Wash Repair Process',
  processIntro:
    'We diagnose the steam circuit separately from the main wash electronics to pinpoint the exact cause without replacing unrelated parts. Service call fee: AED 89, fully credited toward the repair.',
  includedHeading: 'A Complete Steam System Service',
  includedIntro:
    'Every steam wash repair covers both the standard wash mechanics and the dedicated steam subsystem — generator, nozzle, sensors, valve and relay — with 100% genuine steam components.',
  included: [
    'Steam generator and heating element testing',
    'Steam nozzle inspection and cleaning',
    'Steam temperature sensor and valve testing',
    'Steam relay circuit and wiring verification',
    'Dedicated steam system descaling',
    'Full steam and standard cycle test before we leave',
  ],
  includedImage: '/Complete Washing Machine Water Leakage Repair Service.png',
  whyHeading: 'Why Steam Wash Owners in Dubai Choose Us',
  why: [
    { title: 'Same-Day Emergency Repair', desc: 'Book within 2 hours, we arrive same day. Available 24/7 including weekends and holidays — most steam wash repairs completed within 4 hours of arrival.' },
    { title: 'Certified Steam Technology Technicians (12+ Years)', desc: 'Specialized training on LG TrueSteam, Samsung EcoBubble Steam, Bosch Sensitive Steam and Siemens iSensoric Steam — not just generic washing machine repair.' },
    { title: 'Genuine Spare Parts Guarantee', desc: '100% original parts only, including steam generators, nozzles and sensors — particularly important since aftermarket steam generators are a common source of repeat failures. 2-year parts warranty.' },
    { title: 'Dubai Hard Water Specialist', desc: 'Steam generators concentrate and heat water repeatedly, accelerating mineral buildup far faster than a standard wash cycle. We offer dedicated steam system descaling to protect this investment.' },
    { title: 'Transparent Pricing', desc: 'Service call fee AED 89, fully credited toward the repair. All labor and parts quoted upfront with a 24-hour price match guarantee.' },
    { title: '12-Month Workmanship Warranty', desc: 'If the same part fails within 12 months due to our repair, we fix it free — including steam-specific repairs. Full parts warranty: 2 years, money-back guarantee if unsuccessful.' },
  ],
  tipsHeading: 'Protect Your Steam System',
  tipsIntro:
    "Dubai's 500–600 ppm water can noticeably reduce steam output within months of regular use if descaling isn't performed. A steam-specific routine keeps the generator healthy.",
  tips: [
    { title: 'Steam Descaling Monthly', desc: 'Run a dedicated steam system descaling cycle monthly — more frequently than for standard machines (AED 100–200 professionally, or with a compatible product).' },
    { title: 'Let the Generator Cool', desc: 'Avoid back-to-back steam/sanitize cycles without breaks, so the generator cools and scale crystallization is reduced — free.' },
    { title: 'Wipe the Steam Nozzle', desc: 'Check the steam nozzle area for visible residue and wipe it clean periodically; keep the door open between steam cycles so the chamber dries — free.' },
    { title: 'Annual Steam Inspection', desc: 'Schedule a dedicated steam system inspection annually, separate from a standard service (AED 250–400).' },
  ],
  tipsImage: '/Stop Washing Machine Water Leaks Fast.png',
  diagHeading: 'Quick Problem Diagnosis Guide',
  diagIntro:
    'Use this table to identify your steam wash washing machine problem and understand what needs to be fixed.',
  diagRows: [
    { name: 'Steam Function Not Activating', symptoms: 'Steam wash option selected but no visible steam, no allergy/sanitize cycle effect', cause: 'Faulty steam generator heating element, blocked steam nozzle, steam relay fault', solution: 'Steam generator or nozzle repair', cost: 'AED 250–500' },
    { name: 'Steam-Specific Error Codes', symptoms: 'Codes like tE, SE, AE or a steam icon flashing on the display', cause: 'Steam temperature sensor fault, steam valve malfunction, wiring fault to the steam module', solution: 'Steam sensor or module diagnosis + repair', cost: 'AED 220–450' },
    { name: 'Water/Steam Leaking From Steam Unit', symptoms: 'Water dripping from the base or rear during a steam cycle specifically', cause: 'Cracked steam generator housing, worn steam line seal, loose steam hose connection', solution: 'Steam unit seal or hose replacement', cost: 'AED 200–400' },
    { name: 'Burning Smell During Steam Cycle', symptoms: 'Odor specifically during the steam phase, not during a normal wash', cause: 'Steam heating element scaling and overheating, steam line scorching', solution: 'Steam element descaling or replacement', cost: 'AED 250–550' },
    { name: 'Steam Generator Limescale Blockage', symptoms: 'Reduced or absent steam output, longer steam cycle times', cause: "Dubai's hard water causing heavy mineral buildup in the steam generator", solution: 'Deep steam system descaling', cost: 'AED 150–300' },
    { name: "Won't Complete Steam Cycle", symptoms: 'Cycle stalls or resets specifically during steam refresh/sanitize programs', cause: 'Steam pump fault, control board timing fault, water supply restriction to the steam unit', solution: 'Steam pump or control board repair', cost: 'AED 300–600' },
    { name: 'Standard Wash/Spin Faults', symptoms: 'Drainage, spin or leak issues unrelated to the steam system itself', cause: 'Same causes as standard automatic machines — pump, belt, bearing or seal wear', solution: 'Standard component repair', cost: 'AED 150–700' },
    { name: 'Steam Indicator Light Stuck On/Off', symptoms: "The light doesn't reflect actual steam activity, confusing cycle status", cause: 'Faulty indicator relay or control board firmware glitch', solution: 'Relay replacement or control board reset/repair', cost: 'AED 180–380' },
  ],
  urgency: {
    critical: [
      { title: 'Burning Smell During Steam Cycle', why: 'Indicates the steam heating element is overheating, often from heavy scale buildup — a fire and electrical hazard if left unaddressed. Stop using the steam function immediately; if strong or with smoke, unplug the machine.', notice: 'Burning odor specifically when the steam function activates, machine hot to the touch near the steam generator housing.', cost: 'AED 250–550' },
      { title: 'Water/Steam Leaking From the Steam Unit', why: 'The steam generator runs at higher internal temperatures and pressure than a standard wash tub — a leak means a component under genuine strain.', notice: 'Water or condensation pooling near the base or rear during steam cycles, hissing sounds, visible steam escaping outside the drum.', cost: 'AED 200–450' },
      { title: "Won't Drain Water at All", why: 'Standing water — made worse by residual steam condensation — causes mold, mildew and foul odors and can damage clothes permanently. Generally unrelated to the steam system itself.', notice: 'Water remains in the drum after a cycle, error code displayed, extremely wet clothes, foul smell.', cost: 'AED 150–400' },
    ],
    urgent: [
      { title: "Steam Function Won't Activate", why: "A core selling feature of the machine becomes unusable, and the underlying cause (often scaling) tends to worsen the longer it's left.", notice: 'Steam wash, sanitize or allergy-care selected but no visible steam and no improvement in wrinkle reduction or odor removal.', cost: 'AED 250–500' },
      { title: 'Steam-Specific Error Codes Recurring', why: 'Repeated error codes during steam cycles often indicate a developing sensor or generator fault that will eventually disable the steam function entirely.', notice: 'Steam-related codes appearing consistently, cycle interruptions when steam is selected, steam indicator flashing erratically.', cost: 'AED 220–450' },
      { title: 'Machine Stalls During Steam Cycle', why: 'An incomplete steam cycle wastes time and water and may leave clothes only partially treated — indicating an underlying steam pump or timing fault.', notice: 'Cycle pauses, restarts or resets specifically during steam refresh or sanitize programs, while standard wash cycles run normally.', cost: 'AED 300–600' },
    ],
    preventive: [
      { title: 'Reduced Steam Output', why: 'A gradual decline in steam performance is the earliest warning of generator scaling — addressing it early avoids a full heating element replacement later.', notice: 'Steam cycles taking noticeably longer, less visible condensation on the door glass, weaker sanitizing or wrinkle-release results.', cost: 'AED 100–200' },
      { title: 'Steam Generator Limescale Buildup', why: "The generator repeatedly heats and concentrates water to produce vapor, accelerating deposits far faster than a standard drum — the single most common steam wash issue in Dubai.", notice: 'White chalky residue around the steam nozzle, weakening steam output, occasional rattling from loosened scale fragments.', cost: 'AED 100–300' },
      { title: 'Steam Indicator Behaving Inconsistently', why: "An unreliable indicator makes it hard to know whether the steam function is actually working, which can mask a developing fault.", notice: "The steam light stays on when steam isn't active, or doesn't illuminate when steam is running.", cost: 'AED 180–380' },
    ],
  },
  faqIntro: 'Get answers to the most common questions about steam wash washing machine repair, costs and maintenance in Dubai.',
  faqs: [
    { q: 'How long does steam wash washing machine repair typically take?', a: 'Simple repairs (steam nozzle cleaning, relay replacement, indicator faults): 1–2 hours. Moderate repairs (steam sensor, valve or pump replacement): 2–4 hours. Steam generator descaling or replacement: 2–4 hours depending on buildup severity. Complex repairs needing part ordering: next-day. Emergency same-day repairs are available 24/7.' },
    { q: 'What is the average cost to repair a steam wash washing machine in Dubai?', a: 'Service call fee: AED 89, fully credited toward the repair. Minor steam repairs (nozzle, indicator, minor sensor): AED 150–350. Moderate repairs (steam generator descaling, valve, relay): AED 200–450. Major repairs (generator replacement, steam pump, control module): AED 400–700. Average steam wash repair: AED 320–420 including parts and labor — typically higher than a standard repair due to the added steam components.' },
    { q: 'Why has my steam function stopped working but the machine still washes normally?', a: 'This is the most common steam-specific complaint. Because the steam generator and its sensors operate as a semi-independent subsystem, a fault there (scaling, a failed relay, a blocked nozzle or a faulty sensor) frequently leaves the standard wash, rinse and spin cycle completely unaffected. We diagnose the steam circuit separately from the main wash electronics to pinpoint the exact cause without replacing unrelated parts.' },
    { q: 'How can I prevent steam wash washing machine problems?', a: "Run a dedicated steam descaling cycle monthly (AED 100–200 professionally), avoid using the steam/sanitize cycle back-to-back without breaks, wipe the steam nozzle area clean periodically, keep the door open between steam cycles so the chamber dries, and schedule a dedicated steam system inspection annually (AED 250–400)." },
    { q: 'What brands of steam wash washing machines do you repair?', a: 'All major steam-enabled brands sold in Dubai: LG (TrueSteam), Samsung (EcoBubble Steam), Bosch (Sensitive Steam), Siemens (iSensoric Steam), Panasonic (Aqua Beat Steam), Electrolux (SteamCare), Whirlpool (Steam Refresh), Haier, AEG and Toshiba.' },
    { q: 'Do you use genuine spare parts, especially for steam components?', a: "100% genuine parts only, including steam generators, steam valves and steam sensors — never refurbished or counterfeit. This is particularly important for steam parts, since aftermarket steam generators are a common source of repeat failures. Every part carries a 2-year warranty and we'll show you the packaging before installation." },
    { q: 'What warranty do you offer on steam wash repairs?', a: 'A 12-month workmanship warranty on all labor including steam-specific repairs, and a 2-year parts warranty on all genuine spare parts including steam generators and sensors. Money-back guarantee if the repair is unsuccessful, plus a free follow-up visit if the steam issue persists.' },
    { q: 'Can you come for emergency same-day steam wash repair?', a: 'Yes. We offer 24/7 emergency service, booking within 2 hours and arriving the same day in most cases, including weekends and holidays. The emergency service charge is the same AED 89 — no additional surcharge.' },
    { q: "How does Dubai's hard water affect my steam wash washing machine specifically?", a: "Steam wash machines are significantly more exposed to hard water damage than standard machines, because the steam generator repeatedly boils a concentrated volume of water to produce vapor — accelerating calcium and magnesium deposit formation. Dubai's 500–600 ppm hardness can noticeably reduce steam output within months of regular use if descaling isn't performed. We recommend a steam-specific descaling routine monthly, in addition to standard maintenance." },
  ],
  areas: ['Dubai Marina', 'Downtown Dubai', 'JBR', 'Deira', 'Bur Dubai', 'Jumeirah', 'Arabian Ranches', 'The Meadows', 'Emirates Living', 'Dubai Hills Estate', 'Palm Jumeirah', 'Business Bay', 'Dubai Sports City', 'Mirdif', 'Karama', 'Satwa'],
  formHint: 'Describe your steam wash issue (e.g. no steam, steam error code, leak during steam cycle...)',
};

export default function SteamWashWashingMachineRepairPage() {
  return <ServiceTypePage data={DATA} />;
}
