'use client';

import ServiceTypePage, { ServiceTypeData } from '../components/service-type-page';

const DATA: ServiceTypeData = {
  slug: 'manual-washing-machine-repair',
  breadcrumb: 'Manual Washing Machine Repair',
  badge: 'Manual & Semi-Automatic Washer Repair',
  h1Pre: 'Expert',
  h1Highlight: 'Manual',
  h1Post: 'Washing Machine Repair',
  heroDesc:
    'Is your manual washing machine not agitating, spinning or draining properly? We specialize in same-day emergency repairs for Daewoo, Nikai, Geepas, Toshiba and National — a machine type still widely relied on in villas, staff and labor accommodation and smaller apartments for its simplicity, lower water and electricity consumption and straightforward mechanical repairs. Most faults are mechanical and quick to diagnose.',
  heroImage: '/Washing Machine Water Inlet Repair Hero Section.png',
  heroImageAlt: 'Manual washing machine repair in Dubai',
  heroStat: { value: '2–3 hrs', label: 'Most repairs completed' },
  heroBadge: 'Fast Mechanical Fixes',
  stats: [
    { value: '3,500+', label: 'Manual washer repairs completed' },
    { value: '15+', label: 'Manual washer brands serviced' },
    { value: '24/7', label: 'Emergency availability' },
    { value: '4.8★', label: 'Customer rating (247 reviews)' },
  ],
  serviceNoun: 'manual washing machine',
  symptomsHeading: 'Signs Your Manual Washer Needs Repair',
  symptomsIntro:
    'Manual washing machines (semi-automatic washers) combine a single wash tub with a pulsator or agitator and a mechanical-dial timer — the simpler design means most faults are mechanical and quick to diagnose.',
  symptoms: [
    { title: "Won't Agitate", desc: "The pulsator/agitator doesn't move and the motor hums with no wash action — a worn drive belt, seized wash motor or broken capacitor. Fix: AED 140–320." },
    { title: "Won't Spin (Spin-Dry Models)", desc: "The spin basket doesn't turn and clothes stay soaking wet — a broken spin belt, worn spin motor bearing or lid safety switch fault. Fix: AED 180–380." },
    { title: 'Leaking From Tub', desc: 'Water pooling under or beside the tub during wash — a cracked drain valve, worn drain plug seal or loose hose clamp. Fix: AED 100–260.' },
    { title: "Drain Valve Won't Open or Close Fully", desc: "Water won't drain out, or won't hold in the tub — a stiff or corroded drain valve mechanism or broken pull cable/lever. Fix: AED 100–250." },
    { title: 'Timer Dial Stuck or Not Advancing', desc: "The wash cycle doesn't progress and the dial won't turn or skips settings — a worn mechanical timer motor, broken internal gear or wiring fault. Fix: AED 130–300." },
    { title: 'No Power or Excessive Noise', desc: 'Completely unresponsive (power cord damage, blown thermal fuse, faulty switch — AED 100–250) or loud knocking and rattling from worn motor mounts, a loose pulley or an unlevel machine (AED 120–300).' },
  ],
  causesHeading: 'What Causes Manual Washer Problems?',
  causesImage: '/What Causes Washing Machine Water Inlet Problems.png',
  causesIntro:
    'Households, villa owners and property managers across Dubai trust us because manual washer faults are usually mechanical — and our technicians are trained specifically on these systems.',
  causes: [
    'Worn or snapped pulsator drive belts and couplings',
    'Failed wash motor capacitors — the motor hums but never starts',
    "Cracked or sticking drain valves, often from heat exposure in Dubai's climate",
    'Worn mechanical timer motors and broken internal gears',
    'Loose or worn motor mounts causing noise and vibration',
    "Limescale from Dubai's 500+ ppm hard water on the tub, pulsator fins and drain valve",
  ],
  ctaTitle: 'Manual washer not agitating?',
  ctaHighlight: "We'll fix it today.",
  ctaDesc:
    'Book within 2 hours, we arrive same day — available 24/7 including weekends and holidays. Most manual washer repairs are completed within 2–3 hours of arrival, since the mechanical design is simpler than fully automatic machines.',
  brandsHeading: 'Manual Washing Machine Repair by Brand in Dubai',
  brandsIntro:
    'Manual washing machines sold in the UAE are dominated by a handful of brands favored for affordability, simplicity and ease of repair. Our specialists are trained on brand-specific issues and maintain genuine parts inventory.',
  brands: [
    {
      name: 'Daewoo Manual Washer Repair',
      specialization: 'Single-tub manual design, mechanical dial timers, compact and budget-friendly motors — commonly used in smaller households and staff accommodation across Dubai.',
      issues: [
        { title: 'Wash Motor Capacitor Failure', desc: "Motor hums but won't start agitation. Repair: AED 140–280" },
        { title: 'Drain Valve Cracking or Sticking', desc: "Leaks or fails to drain fully, often from heat exposure in Dubai's climate. Repair: AED 100–240" },
        { title: 'Timer Mechanism Sticking', desc: "Cycle pauses or doesn't complete on the wash dial. Repair: AED 130–280" },
        { title: 'Power Switch / Cord Faults', desc: 'Intermittent power loss during operation. Repair: AED 100–220' },
        { title: 'Pulsator Coupling Wear', desc: 'Wash action becomes weak or inconsistent. Repair: AED 130–280' },
      ],
    },
    {
      name: 'Nikai Manual Washer Repair',
      specialization: 'Single and twin-tub manual models, budget mechanical timers, reinforced plastic tubs — popular in budget-conscious households and labor accommodation across Dubai.',
      issues: [
        { title: 'Drive Belt Slipping or Snapping', desc: 'Pulsator runs weakly or not at all. Repair: AED 140–300' },
        { title: 'Drain Plug/Valve Leak', desc: 'Water seeping from the base of the tub. Repair: AED 100–230' },
        { title: 'Motor Overheating / Thermal Cutout Tripping', desc: "Machine stops mid-cycle and won't restart immediately. Repair: AED 150–300" },
        { title: 'Timer Buzzer Not Sounding', desc: 'Cycle completes silently — easy to miss the end of the wash. Repair: AED 120–250' },
        { title: 'Loose or Worn Motor Mounts', desc: 'Excess noise and vibration during agitation. Repair: AED 120–280' },
      ],
    },
    {
      name: 'Geepas Manual Washer Repair',
      specialization: 'Entry-level manual washers, simple mechanical controls, compact footprint for small spaces — strong parts availability for the Geepas range common in Dubai apartments.',
      issues: [
        { title: 'Pulsator Gear Wear', desc: 'Reduced wash action, clothes not agitating fully. Repair: AED 130–270' },
        { title: 'Drain Hose / Outlet Blockage', desc: 'Slow or no drainage from the tub. Repair: AED 90–200' },
        { title: 'Wash Motor Coupling Failure', desc: "Motor runs but doesn't transfer power to the pulsator. Repair: AED 140–300" },
        { title: 'Control Knob Damage', desc: "Timer or wash-level knob breaks or won't turn. Repair: AED 100–220" },
      ],
    },
    {
      name: 'Toshiba Manual Washer Repair',
      specialization: 'Semi-automatic single-tub design, mechanical dial timers, reinforced agitator assembly — among the most widely sold manual washer lines in the UAE.',
      issues: [
        { title: 'Agitator Drive Belt Wear', desc: "Wash side runs but the agitator doesn't move clothes properly. Repair: AED 140–300" },
        { title: 'Drain Valve Lever/Cable Fault', desc: "Drain won't open or close reliably. Repair: AED 100–240" },
        { title: 'Timer Knob/Gear Failure', desc: "Cycle doesn't progress or the buzzer doesn't sound. Repair: AED 130–280" },
        { title: 'Wash Tub Drain Seal Leak', desc: 'Water drips from the tub during use. Repair: AED 100–230' },
        { title: 'Motor Bearing Noise', desc: 'Grinding or rattling sound during agitation, often in units 4+ years old. Repair: AED 180–350' },
      ],
    },
    {
      name: 'National & Other Manual Washer Brands',
      specialization: 'National, Hisense, Galanz, Sharp, Midea, Haier and other budget and mid-range manual/semi-automatic washer brands sold in the UAE — 15+ brands covered.',
      issues: [
        { title: 'Universal & Brand-Specific Parts', desc: 'Belts, drain valves, motors and mechanical timers stocked or sourced on request.' },
        { title: 'Older Mechanical & Semi-Electronic Models', desc: 'Familiarity with both fully mechanical models and newer semi-electronic manual washer designs.' },
        { title: 'High-Usage Settings', desc: 'Service expertise for labor accommodation, staff quarters and villas.' },
        { title: 'Discontinued Models', desc: 'We repair even older or discontinued models, using compatible replacement parts where originals are unavailable.' },
      ],
    },
  ],
  processHeading: 'Our Manual Washer Repair Process',
  processIntro:
    'Manual washers are mechanically simpler than fully automatic machines, so most repairs finish faster — simple fixes in 45 minutes to 1.5 hours. Service call fee: AED 89, fully credited toward the repair.',
  includedHeading: 'A Complete Manual Washer Service',
  includedIntro:
    'Every manual washer repair includes inspection of the drive system, drain valve, timer and motor — with 100% genuine or manufacturer-approved parts, never low-quality aftermarket substitutes.',
  included: [
    'Drive belt and pulsator coupling inspection',
    'Wash and spin motor + capacitor testing',
    'Drain valve mechanism cleaning or replacement',
    'Mechanical timer and buzzer verification',
    'Tub seal and hose clamp leak check',
    'Full wash and spin test before we leave',
  ],
  includedImage: '/Complete Washing Machine Water Inlet Repair Service.png',
  whyHeading: 'Why Manual Washer Owners in Dubai Choose Us',
  why: [
    { title: 'Same-Day Emergency Repair', desc: 'Book within 2 hours, we arrive same day. Available 24/7 including weekends and holidays — most manual washer repairs completed within 2–3 hours of arrival.' },
    { title: 'Certified Manual Washer Technicians (12+ Years)', desc: 'Specifically trained on manual and semi-automatic mechanical systems — pulsator and agitator drives, single- and dual-motor configurations, mechanical timers and drain valve mechanisms.' },
    { title: 'Genuine Spare Parts Guarantee', desc: '100% original or manufacturer-approved parts only, with belts, drain valves, timers and motors stocked for the most common manual washer brands in the UAE. 2-year parts warranty.' },
    { title: 'Dubai Hard Water Specialist', desc: 'Limescale affects the wash tub and drain valve over time even in simpler manual machines. Preventive descaling packages available to extend machine life.' },
    { title: 'Transparent Pricing', desc: 'Service call fee AED 89, fully credited toward the repair. All labor and parts quoted upfront with a 24-hour price match guarantee.' },
    { title: '12-Month Workmanship Warranty', desc: 'If the same part fails within 12 months due to our repair, we fix it free. Full parts warranty: 2 years. Money-back guarantee if the repair is unsuccessful.' },
  ],
  tipsHeading: 'Prevent Manual Washer Problems',
  tipsIntro:
    'Manual washers are the most affordable repair category thanks to their simple mechanics — and a few free habits keep them running for years.',
  tips: [
    { title: 'Clean the Drain Outlet Often', desc: 'Clean the drain outlet and valve area after every few washes to prevent blockages — free.' },
    { title: 'Descale Monthly', desc: "Run a vinegar or commercial descaler cycle monthly given Dubai's hard water (AED 80–150)." },
    { title: "Don't Overload the Tub", desc: 'Overloading strains the pulsator drive and belt. Also empty pockets of coins, keys and hard objects — free.' },
    { title: 'Dry the Tub Between Uses', desc: 'Open the drain valve and leave the tub empty between uses to prevent odor and mold, and schedule a professional inspection every 12 months (AED 130–220).' },
  ],
  tipsImage: '/Keep Water Flowing into Your Washing Machine.png',
  diagHeading: 'Quick Problem Diagnosis Guide',
  diagIntro:
    'Use this table to identify your manual washing machine problem and understand what needs to be fixed.',
  diagRows: [
    { name: "Won't Agitate", symptoms: "Pulsator/agitator doesn't move, motor hums but no wash action", cause: 'Worn drive belt, seized wash motor, broken capacitor', solution: 'Belt replacement or motor/capacitor repair', cost: 'AED 140–320' },
    { name: "Won't Spin (Spin-Dry Models)", symptoms: "Spin basket doesn't turn, clothes stay soaking wet", cause: 'Broken spin belt, worn spin motor bearing, lid safety switch fault', solution: 'Spin belt or motor repair', cost: 'AED 180–380' },
    { name: 'Leaking From Tub', symptoms: 'Water pooling under or beside the tub during wash', cause: 'Cracked drain valve, worn drain plug seal, loose hose clamp', solution: 'Drain valve or seal replacement', cost: 'AED 100–260' },
    { name: "Drain Valve Won't Open/Close Fully", symptoms: "Water won't drain out, or won't hold water in the tub", cause: 'Stiff or corroded drain valve mechanism, broken pull cable/lever', solution: 'Drain valve mechanism repair or replacement', cost: 'AED 100–250' },
    { name: 'Timer Dial Stuck', symptoms: "Wash cycle doesn't progress, dial won't turn or skips settings", cause: 'Worn mechanical timer motor, broken internal gear, wiring fault', solution: 'Timer replacement', cost: 'AED 130–300' },
    { name: "No Power / Won't Start", symptoms: 'No motor sound, indicator light off, completely unresponsive', cause: 'Power cord damage, blown thermal fuse, faulty on/off switch', solution: 'Diagnostic check + targeted repair', cost: 'AED 100–250' },
    { name: 'Excessive Noise or Vibration', symptoms: 'Loud knocking, rattling or shaking during agitation or spin', cause: 'Worn motor mount, loose pulley, unbalanced load, unlevel machine', solution: 'Mount repair, pulley tightening or leveling', cost: 'AED 120–300' },
    { name: 'Limescale & Residue Buildup', symptoms: 'Reduced wash quality, white deposits inside the tub, musty smell', cause: "Dubai's hard water mineral deposits common in the wash tub", solution: 'Deep descaling + preventive cleaning', cost: 'AED 80–180' },
  ],
  urgency: {
    critical: [
      { title: 'Water Leaking From the Tub', why: 'Can cause water damage to floors, electrical hazards near the motor base and mold growth.', notice: 'Water pooling under or beside the tub, drips during agitation, wet floor near the machine.', cost: 'AED 100–280' },
      { title: 'Burning Smell or Smoke From Motor', why: 'Immediate fire and electrical hazard, especially in older units with worn motor windings. Stop using the machine immediately and unplug it.', notice: 'Burning odor near the motor housing, visible smoke, motor unusually hot to the touch.', cost: 'AED 180–450' },
      { title: "Drain Valve Won't Close (Won't Hold Water)", why: "A drain valve stuck open means the tub can't fill or hold water for washing, making the machine completely unusable until repaired.", notice: "Water fills the tub but immediately drains out, or won't fill at all because of constant drainage.", cost: 'AED 100–250' },
    ],
    urgent: [
      { title: "Won't Agitate / Pulsator Not Moving", why: "Without agitation, clothes don't get properly cleaned and the wash cycle is effectively wasted.", notice: "Wash motor runs (audible hum) but the pulsator doesn't move, or moves only weakly.", cost: 'AED 140–320' },
      { title: "Spin Basket Won't Spin", why: 'Clothes remain heavily soaked without spin extraction, significantly increasing drying time.', notice: "Spin basket doesn't turn, motor runs but no spin action, or the lid safety brake stays engaged.", cost: 'AED 180–380' },
      { title: 'Timer Stuck or Not Advancing', why: "Cycles don't complete properly, which can leave clothes over-washed, under-rinsed, or the machine running indefinitely on one setting.", notice: "Timer dial doesn't move forward, buzzer doesn't sound at cycle end, machine continues running past the expected cycle time.", cost: 'AED 130–300' },
    ],
    preventive: [
      { title: 'Reduced Wash Performance', why: "Clothes don't get properly cleaned and water/detergent is wasted — usually detergent buildup, limescale or worn pulsator fins.", notice: 'Clothes coming out dirtier than expected, soap residue visible, dull fabrics after washing.', cost: 'AED 80–180' },
      { title: 'Slow or Partial Drainage', why: 'Leftover water in the tub causes odor and can affect the next wash cycle — lint and debris buildup in the drain outlet or a worn drain valve seal.', notice: 'Water drains slowly from the tub, some water remains after opening the drain valve, musty smell.', cost: 'AED 80–200' },
      { title: 'White Deposits Inside Tub', why: "Dubai's 500+ ppm hard water minerals reduce wash efficiency and accelerate wear on moving parts like the pulsator and drain valve.", notice: 'White chalky deposits inside the wash tub, residue around the drain valve, water spots on clothes.', cost: 'AED 80–280' },
    ],
  },
  faqIntro: 'Get answers to the most common questions about manual and semi-automatic washing machine repair in Dubai.',
  faqs: [
    { q: 'How long does manual washing machine repair typically take?', a: 'Simple repairs (drain valve, belt replacement, knob/switch fixes): 45 minutes–1.5 hours. Moderate repairs (motor, capacitor, timer replacement): 1.5–3 hours. Complex repairs (motor bearing rebuild): 3–4 hours or next-day if parts need ordering. Manual machines are mechanically simpler than automatics, so most repairs are completed faster — with the time estimate confirmed upfront.' },
    { q: 'What is the average cost to repair a manual washing machine in Dubai?', a: 'Service call fee: AED 89, fully credited toward the repair if you proceed. Minor repairs (drain valve, belts, knobs, switches): AED 90–260. Moderate repairs (motors, capacitors, timers): AED 130–320. Major repairs (motor bearing replacement or rebuild): AED 250–500. The average manual washer repair costs AED 180–260 including parts and labor — generally the most affordable repair category.' },
    { q: 'Why is my manual washing machine leaking water?', a: 'Leading causes in Dubai homes: a cracked or worn drain valve (most common, especially in units 3+ years old — AED 100–250), a worn drain plug seal (AED 80–180), a loose hose clamp that can usually be tightened cheaply (AED 50–120) or a cracked tub housing in older units (AED 180–350).' },
    { q: 'How can I prevent manual washing machine problems?', a: 'Clean the drain outlet and valve area after every few washes, run a vinegar or descaler cycle monthly (AED 80–150), avoid overloading the tub, empty pockets of coins and hard objects, open the drain valve and leave the tub empty between uses to prevent odor and mold, and schedule a professional inspection every 12 months (AED 130–220).' },
    { q: 'What brands of manual washing machines do you repair?', a: 'All major manual and semi-automatic washer brands sold in Dubai: Daewoo, Nikai, Geepas, Toshiba, National, Hisense, Galanz, Sharp, Midea and Haier. We stock common belts, drain valves, timers and motors, and can source less common parts on request.' },
    { q: 'Do you use genuine spare parts or cheap alternatives?', a: "We use 100% genuine or manufacturer-approved replacement parts only — no low-quality aftermarket substitutes that wear out quickly. Every part carries a 2-year warranty and we'll show you the part before installation." },
    { q: 'What warranty do you offer on manual washer repairs?', a: 'A 12-month workmanship warranty on all labor and a 2-year parts warranty. If the same part fails again we fix it free within the warranty period, with a money-back guarantee if the repair is unsuccessful and a free follow-up visit if the issue persists.' },
    { q: "How does Dubai's hard water affect my manual washing machine?", a: "Dubai's 500–600 ppm water hardness causes calcium and magnesium buildup inside the wash tub, on the pulsator or agitator fins and around the drain valve. This reduces wash performance, accelerates wear on moving mechanical parts and can cause drain valves to stick or leak prematurely. Monthly descaling and periodic drain valve checks are the most effective preventive measures." },
    { q: 'Is it worth repairing an older manual washing machine instead of replacing it?', a: "In most cases, yes — even more so than with fully automatic machines. Manual washers have very few electronic components, making repairs fast, inexpensive and highly reliable. Common fixes like belts, capacitors and drain valves cost a small fraction of a replacement machine. We'll always give you an honest assessment — if a repair isn't cost-effective, we'll tell you upfront." },
  ],
  areas: ['Dubai Marina', 'Downtown Dubai', 'JBR', 'Deira', 'Bur Dubai', 'Jumeirah', 'Arabian Ranches', 'The Meadows', 'Emirates Living', 'Dubai Hills Estate', 'Palm Jumeirah', 'Business Bay', 'Dubai Sports City', 'Mirdif', 'Karama', 'Satwa', 'Al Quoz', 'Industrial Areas & Labor Accommodation'],
  formHint: "Describe your manual washer issue (e.g. won't agitate, drain valve stuck, timer not advancing...)",
};

export default function ManualWashingMachineRepairPage() {
  return <ServiceTypePage data={DATA} />;
}
