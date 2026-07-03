'use client';

import ServiceTypePage, { ServiceTypeData } from '../components/service-type-page';

const DATA: ServiceTypeData = {
  slug: 'twin-tub-washing-machine-repair',
  breadcrumb: 'Twin Tub Washing Machine Repair',
  badge: 'Twin Tub Washing Machine Repair',
  h1Pre: 'Expert',
  h1Highlight: 'Twin-Tub',
  h1Post: 'Washing Machine Repair',
  heroDesc:
    'Is your twin tub washing machine not working properly? We specialize in same-day emergency repairs for Toshiba, Daewoo, Midea, Haier, Nikai and Geepas — a machine type still widely used in villas, labor accommodation, staff quarters and households that value its simplicity, durability and lower water consumption. Twin tubs have a distinct layout: a separate wash tub with a pulsator and a separate spin tub with its own motor and timer — so problems are usually isolated to one side and quick to diagnose.',
  heroImage: '/Washing Machine Drum Repair Hero Section.png',
  heroImageAlt: 'Twin tub washing machine repair in Dubai',
  heroStat: { value: '~3 hrs', label: 'Most repairs completed' },
  heroBadge: 'Dual-Motor Specialists',
  stats: [
    { value: '3,800+', label: 'Twin tub repairs completed' },
    { value: '15+', label: 'Twin tub brands serviced' },
    { value: '24/7', label: 'Emergency availability' },
    { value: '4.8★', label: 'Customer rating (247 reviews)' },
  ],
  serviceNoun: 'twin tub washing machine',
  symptomsHeading: 'Signs Your Twin Tub Needs Repair',
  symptomsIntro:
    "Whether your twin tub washer won't agitate, the spinner won't spin, it's leaking from the wash tub or the timer won't advance — each fault sits on one side of the machine and has a clear fix.",
  symptoms: [
    { title: "Wash Tub Won't Agitate", desc: "The pulsator doesn't move and the motor hums with no wash action — a worn pulsator drive belt, seized wash motor or broken capacitor. Fix: AED 150–350." },
    { title: "Spin Tub Won't Spin", desc: "The spin basket doesn't turn and clothes stay soaking wet — a broken spin belt, worn spin motor bearing or faulty lid safety switch. Fix: AED 180–400." },
    { title: 'Wash Tub Leaking Water', desc: 'Water pooling under the wash side and drips during agitation — a cracked drain valve, worn drain plug seal or loose hose clamp. Fix: AED 120–280.' },
    { title: 'Spin Tub Excessive Vibration', desc: 'The spin basket shakes violently and the machine "walks" across the floor — an unbalanced load, worn spin tub bearing or an unlevel machine. Fix: AED 200–400.' },
    { title: "Timer Won't Advance", desc: "The wash or spin cycle is stuck on one setting and the buzzer doesn't sound — a worn mechanical timer motor, broken timer gear or wiring fault. Fix: AED 150–300." },
    { title: 'No Power or Drain Blockage', desc: 'No motor sound on either side (power cord damage, blown thermal fuse, faulty switch — AED 100–250), or the wash tub won\'t drain from lint and debris buildup (AED 100–220).' },
  ],
  causesHeading: 'What Causes Twin Tub Problems?',
  causesImage: '/What Causes Washing Machine Drum Problems.png',
  causesIntro:
    'Twin tub machines sold in the UAE are favored for affordability and rugged simplicity. Their dual-motor, mechanical-timer design fails in predictable ways our technicians know inside out.',
  causes: [
    'Worn or snapped pulsator drive belts on the wash side',
    'Spin motor bearing wear and slipping spin belts on the spin side',
    "Cracked drain valves and worn drain plug seals — often from heat exposure in Dubai's climate",
    'Worn mechanical timer motors, broken gears and silent buzzers',
    'Faulty lid safety switches stopping the spin tub from engaging',
    "Limescale from Dubai's 500+ ppm hard water in both the wash and spin compartments",
  ],
  ctaTitle: 'Twin tub down on one side?',
  ctaHighlight: "We'll fix it today.",
  ctaDesc:
    'Book within 2 hours, we arrive same day — available 24/7 including weekends and holidays. Most twin tub repairs are completed within 3 hours of arrival since the mechanical design is simpler than automatic machines.',
  brandsHeading: 'Twin Tub Washing Machine Repair by Brand in Dubai',
  brandsIntro:
    'Twin tub machines sold in the UAE are dominated by a handful of brands favored for affordability and rugged simplicity. Our specialists are trained on brand-specific issues and maintain genuine parts inventory.',
  brands: [
    {
      name: 'Toshiba Twin Tub Repair',
      specialization: "Dual-motor wash/spin design, mechanical dial timers, SK series — one of the most widely sold twin tub lines in the UAE, with same-day parts availability for common components.",
      issues: [
        { title: 'Pulsator Drive Belt Slipping or Snapping', desc: "The wash side runs but the pulsator doesn't move clothes. Repair: AED 150–300" },
        { title: 'Spin Tub Bearing Wear', desc: 'Grinding or rattling noise during spin, often in units 4+ years old. Repair: AED 200–400' },
        { title: 'Timer Knob/Gear Failure', desc: "The cycle doesn't progress or the buzzer doesn't sound. Repair: AED 150–300" },
        { title: 'Lid Safety Switch Fault', desc: "The spin tub won't run even with the lid closed. Repair: AED 100–220" },
        { title: 'Wash Tub Drain Valve Leak', desc: 'Water drips from the wash side during use. Repair: AED 120–250' },
      ],
    },
    {
      name: 'Daewoo Twin Tub Repair',
      specialization: 'Compact dual-tub design, manual water-level control, budget-friendly motors — commonly used in smaller households and staff accommodation across Dubai.',
      issues: [
        { title: 'Wash Motor Capacitor Failure', desc: "The motor hums but won't start agitation. Repair: AED 150–280" },
        { title: 'Spin Belt Wear and Slippage', desc: 'The spin tub turns slowly or stalls under load. Repair: AED 150–300' },
        { title: 'Water Inlet/Drain Valve Cracking', desc: "Leaks from heat exposure over time, common in Dubai's climate. Repair: AED 120–250" },
        { title: 'Timer Mechanism Sticking', desc: "The cycle pauses or doesn't complete. Repair: AED 150–300" },
        { title: 'Power Switch / Cord Faults', desc: 'Intermittent power loss during operation. Repair: AED 100–220' },
      ],
    },
    {
      name: 'Midea Twin Tub Repair',
      specialization: 'Reinforced plastic tub construction, semi-automatic timer dials, high-capacity spin baskets — popular in larger households and labor camps across Dubai.',
      issues: [
        { title: 'Spin Tub Imbalance / Excessive Vibration', desc: 'The machine shakes or "walks" during spin. Repair: AED 200–380' },
        { title: 'Pulsator Gear Wear', desc: 'Reduced wash action, clothes not agitating fully. Repair: AED 180–350' },
        { title: 'Drain Outlet Blockage', desc: 'Slow or no drainage from the wash tub. Repair: AED 100–220' },
        { title: 'Motor Overheating / Thermal Cutout Tripping', desc: "The machine stops mid-cycle and won't restart immediately. Repair: AED 180–350" },
        { title: 'Timer Buzzer Not Sounding', desc: 'The cycle completes silently — easy to miss the end of the spin. Repair: AED 120–250' },
      ],
    },
    {
      name: 'Haier Twin Tub Repair',
      specialization: "Dual-motor efficiency design, transparent lid windows, easy-clean lint filters — Haier's twin tub platform is increasingly common in newer Dubai property installations.",
      issues: [
        { title: 'Lint Filter Clogging Affecting Drainage', desc: 'Reduced wash and drain performance from debris buildup. Repair: AED 80–180' },
        { title: 'Wash Motor Coupling Wear', desc: 'The pulsator turns inconsistently or stalls. Repair: AED 150–300' },
        { title: 'Spin Tub Motor Bearing Noise', desc: 'A grinding sound that worsens over weeks. Repair: AED 200–400' },
        { title: 'Lid Lock / Safety Interlock Fault', desc: "The spin tub won't engage. Repair: AED 100–220" },
      ],
    },
    {
      name: 'Nikai, Geepas & Other Twin Tub Brands',
      specialization: 'Nikai, Geepas, Hisense, Galanz, Sharp, National and other budget and mid-range twin tub brands sold in the UAE — 15+ brands covered.',
      issues: [
        { title: 'Universal & Brand-Specific Parts', desc: 'Belts, pulsators, motors and mechanical timers stocked or sourced on request.' },
        { title: 'Mechanical & Semi-Electronic Designs', desc: 'Familiarity with older mechanical-only models and newer semi-electronic twin tub designs.' },
        { title: 'High-Usage Settings', desc: 'Service expertise for labor accommodation, staff quarters and villas.' },
        { title: 'Older & Discontinued Models', desc: 'We repair virtually any twin tub brand sold in Dubai, using compatible replacement parts where originals are unavailable.' },
      ],
    },
  ],
  processHeading: 'Our Twin Tub Repair Process',
  processIntro:
    'Because problems are usually isolated to one side — wash or spin — diagnosis is fast, and most repairs complete within 45 minutes to 3 hours. Service call fee: AED 89, fully credited toward the repair.',
  includedHeading: 'A Complete Twin Tub Service',
  includedIntro:
    'Every twin tub repair inspects both sides of the machine — pulsator drive, spin motor, timer, drain valve and lid interlock — with 100% genuine or manufacturer-approved parts.',
  included: [
    'Pulsator drive belt and coupling inspection',
    'Wash and spin motor + capacitor testing',
    'Spin tub bearing and balance check',
    'Mechanical timer and buzzer verification',
    'Drain valve, hose and lint filter cleaning',
    'Lid safety interlock function test before handover',
  ],
  includedImage: '/Complete Washing Machine Drum Repair Service.png',
  whyHeading: 'Why Twin Tub Owners in Dubai Choose Us',
  why: [
    { title: 'Same-Day Emergency Repair', desc: 'Book within 2 hours, we arrive same day. Available 24/7 including weekends and holidays — most twin tub repairs completed within 3 hours of arrival.' },
    { title: 'Certified Twin Tub Technicians (12+ Years)', desc: 'Specifically trained on twin tub mechanical systems — pulsator drives, dual-motor assemblies, mechanical timers and centrifugal spin tub bearings.' },
    { title: 'Genuine Spare Parts Guarantee', desc: '100% original or manufacturer-approved parts only, with belts, pulsators, timers and motors stocked for the most common twin tub brands in the UAE. 2-year parts warranty.' },
    { title: 'Dubai Hard Water Specialist', desc: 'Limescale affects both the wash tub and spin tub over time. Preventive descaling packages available to extend machine life.' },
    { title: 'Transparent Pricing', desc: 'Service call fee AED 89, fully credited toward the repair. All labor and parts quoted upfront with a 24-hour price match guarantee.' },
    { title: '12-Month Workmanship Warranty', desc: 'If the same part fails within 12 months due to our repair, we fix it free. Full parts warranty: 2 years. Money-back guarantee if the repair is unsuccessful.' },
  ],
  tipsHeading: 'Prevent Twin Tub Problems',
  tipsIntro:
    'Twin tub repairs are generally the cheapest category thanks to the simple mechanics — and these free habits stretch machine life even further.',
  tips: [
    { title: 'Clean the Lint Filter Often', desc: 'Clean the lint filter and drain outlet after every few washes to prevent blockages — free.' },
    { title: 'Descale Monthly', desc: "Run a vinegar or commercial descaler cycle monthly given Dubai's hard water (AED 80–150)." },
    { title: "Don't Overload the Wash Tub", desc: 'Overloading strains the pulsator drive and belt. Also empty pockets of coins, keys and hard objects — free.' },
    { title: 'Drain & Dry Both Tubs', desc: 'Drain and dry both tubs after the last use of the day to prevent odor and mold, and schedule a professional inspection every 12 months (AED 150–250).' },
  ],
  tipsImage: '/Keep Your Washing Machine Drum Running Smoothly.png',
  diagHeading: 'Quick Problem Diagnosis Guide',
  diagIntro:
    'Use this table to identify your twin tub washing machine problem and understand what needs to be fixed.',
  diagRows: [
    { name: "Wash Tub Won't Agitate", symptoms: "Pulsator doesn't move, motor hums but no wash action, clothes sit still in water", cause: 'Worn pulsator drive belt, seized wash motor, broken capacitor', solution: 'Belt replacement or motor/capacitor repair', cost: 'AED 150–350' },
    { name: "Spin Tub Won't Spin", symptoms: "Spin basket doesn't turn, clothes stay soaking wet, lid safety brake engaged", cause: 'Broken spin belt, worn spin motor bearing, faulty lid safety switch', solution: 'Spin belt or motor repair', cost: 'AED 180–400' },
    { name: 'Wash Tub Leaking Water', symptoms: 'Water pooling under the wash side, drips during agitation', cause: 'Cracked wash tub drain valve, worn drain plug seal, loose hose clamp', solution: 'Drain valve or seal replacement', cost: 'AED 120–280' },
    { name: 'Spin Tub Excessive Vibration', symptoms: 'Spin basket shakes violently, machine "walks" across the floor', cause: 'Unbalanced load, worn spin tub bearing, machine not level', solution: 'Bearing replacement or leveling', cost: 'AED 200–400' },
    { name: "Timer Won't Advance", symptoms: "Wash or spin cycle stuck on one setting, buzzer doesn't sound at cycle end", cause: 'Worn mechanical timer motor, broken timer gear, wiring fault', solution: 'Timer replacement', cost: 'AED 150–300' },
    { name: "No Power / Won't Start", symptoms: 'No motor sound on either side, indicator light off', cause: 'Power cord damage, blown thermal fuse, faulty on/off switch', solution: 'Diagnostic check + targeted repair', cost: 'AED 100–250' },
    { name: 'Limescale & Residue Buildup', symptoms: 'Reduced wash quality, white deposits inside the wash tub, musty smell', cause: "Dubai's hard water mineral deposits common in both tubs", solution: 'Deep descaling + preventive cleaning', cost: 'AED 80–180' },
    { name: 'Drain Hose / Outlet Blockage', symptoms: "Water won't drain from the wash tub, slow drainage, backflow", cause: 'Lint and debris buildup in the drain outlet or hose', solution: 'Drain hose cleaning or replacement', cost: 'AED 100–220' },
  ],
  urgency: {
    critical: [
      { title: 'Water Leaking From the Wash Tub', why: 'Can cause water damage to floors, electrical hazards near the motor base and mold growth.', notice: 'Water pooling under the wash side, drips during agitation, wet floor near the machine.', cost: 'AED 120–320' },
      { title: 'Burning Smell or Smoke From Motor', why: 'Immediate fire and electrical hazard, especially in older units with worn motor windings. Stop using the machine immediately and unplug it.', notice: 'Burning odor near the wash or spin motor housing, visible smoke, motor unusually hot to the touch.', cost: 'AED 200–500' },
      { title: "Spin Tub Won't Stop / Lid Lock Stuck", why: 'A spin tub that continues running with the lid open, or a lid lock that won\'t release, poses a safety risk requiring immediate inspection of the interlock system.', notice: "Spin tub continues spinning unexpectedly, lid won't open after the cycle ends, safety switch unresponsive.", cost: 'AED 150–350' },
    ],
    urgent: [
      { title: 'Spin Tub Excessive Vibration or "Walking"', why: 'Indicates bearing wear or imbalance that worsens over time and can damage the cabinet or surrounding floor.', notice: 'Loud banging during spin, the machine moving across the floor, vibration increasing over weeks.', cost: 'AED 200–400' },
      { title: "Wash Side Won't Agitate", why: "Without agitation, clothes don't get properly cleaned and the wash cycle is effectively wasted.", notice: "The wash motor runs (audible hum) but the pulsator doesn't move, or moves only weakly.", cost: 'AED 150–350' },
      { title: 'Timer Stuck or Not Advancing', why: "Cycles don't complete properly, which can leave clothes over-washed, under-rinsed or stuck mid-spin.", notice: "The timer dial doesn't move forward, the buzzer doesn't sound at cycle end, the machine runs indefinitely on one setting.", cost: 'AED 150–320' },
    ],
    preventive: [
      { title: 'Reduced Wash Performance', why: "Clothes don't get properly cleaned and water/detergent is wasted — detergent buildup, limescale, worn pulsator fins or a low water level setting.", notice: 'Clothes coming out dirtier than expected, soap residue visible, dull fabrics after washing.', cost: 'AED 80–180' },
      { title: 'Slow or Partial Drainage', why: 'Leftover water in the wash tub causes odor and can affect the next wash cycle — lint buildup in the drain outlet or a worn drain valve seal.', notice: 'Water drains slowly from the wash tub, some water remains after the drain cycle, musty smell.', cost: 'AED 80–200' },
      { title: 'White Deposits Inside Tubs', why: "Dubai's 500+ ppm hard water leaves calcium and magnesium deposits inside both the wash and spin compartments, reducing efficiency and accelerating wear.", notice: 'White chalky deposits inside the wash tub, residue on the spin basket, water spots on clothes.', cost: 'AED 80–300' },
    ],
  },
  faqIntro: 'Get answers to the most common questions about twin tub washing machine repair, costs and maintenance in Dubai.',
  faqs: [
    { q: 'How long does twin tub washing machine repair typically take?', a: 'Simple repairs (drain valve, belt replacement, lid switch): 45 minutes–1.5 hours. Moderate repairs (motor, capacitor, timer replacement): 1.5–3 hours. Complex repairs (bearing replacement, full motor rebuild): 3–4 hours or next-day if parts need ordering. Twin tubs are mechanically simpler than automatics, so most repairs finish faster — with the estimate confirmed upfront.' },
    { q: 'What is the average cost to repair a twin tub washing machine in Dubai?', a: 'Service call fee: AED 89, fully credited toward the repair if you proceed. Minor repairs (drain valve, belts, lid switch): AED 100–280. Moderate repairs (motors, capacitors, timers): AED 150–400. Major repairs (bearing replacement, motor rebuild): AED 300–600. The average twin tub repair costs AED 220–300 including parts and labor — generally lower than automatic machine repairs.' },
    { q: 'Why is my twin tub washing machine leaking water?', a: 'Leading causes in Dubai homes: a cracked or worn drain valve (most common, especially in units 3+ years old — AED 120–280), a worn drain plug seal (AED 80–180), a loose hose clamp that can usually be tightened cheaply (AED 50–120) or a cracked wash tub housing in older units (AED 200–400).' },
    { q: 'How can I prevent twin tub washing machine problems?', a: 'Clean the lint filter and drain outlet after every few washes, run a vinegar or descaler cycle monthly (AED 80–150), avoid overloading the wash tub, empty pockets of coins and hard objects, drain and dry both tubs after the last use of the day, and schedule a professional inspection every 12 months (AED 150–250).' },
    { q: 'What brands of twin tub washing machines do you repair?', a: 'All major twin tub brands sold in Dubai: Toshiba, Daewoo, Midea, Haier, Nikai, Geepas, Hisense, Galanz, Sharp and National. We stock common belts, pulsators, timers and motors, and can source less common parts on request.' },
    { q: 'Do you use genuine spare parts or cheap alternatives?', a: "We use 100% genuine or manufacturer-approved replacement parts only — no low-quality aftermarket substitutes that wear out quickly. Every part carries a 2-year warranty and we'll show you the part before installation." },
    { q: 'What warranty do you offer on twin tub repairs?', a: 'A 12-month workmanship warranty on all labor and a 2-year parts warranty. If the same part fails again we fix it free within the warranty period, with a money-back guarantee if the repair is unsuccessful and a free follow-up visit if the issue persists.' },
    { q: "How does Dubai's hard water affect my twin tub washing machine?", a: "Dubai's 500–600 ppm water hardness causes calcium and magnesium buildup inside both the wash tub and spin tub, on the pulsator fins and around the drain valve. This reduces wash performance, accelerates wear on moving mechanical parts and can cause drain valves to stick or leak prematurely. Monthly descaling and periodic drain valve checks are the most effective preventive measures." },
    { q: 'Is it worth repairing an older twin tub machine instead of replacing it?', a: "In most cases, yes. Twin tub machines have fewer electronic components than automatic washers, making repairs generally faster and cheaper. Common fixes like belts, capacitors and drain valves cost a fraction of a replacement machine. We'll always give you an honest assessment — if a repair isn't cost-effective compared to replacement, we'll tell you upfront." },
  ],
  areas: ['Dubai Marina', 'Downtown Dubai', 'JBR', 'Deira', 'Bur Dubai', 'Jumeirah', 'Arabian Ranches', 'The Meadows', 'Emirates Living', 'Dubai Hills Estate', 'Palm Jumeirah', 'Business Bay', 'Dubai Sports City', 'Mirdif', 'Karama', 'Satwa', 'Al Quoz', 'Industrial Areas & Labor Accommodation'],
  formHint: "Describe your twin tub issue (e.g. wash side won't agitate, spinner not spinning, timer stuck...)",
};

export default function TwinTubWashingMachineRepairPage() {
  return <ServiceTypePage data={DATA} />;
}
