'use client';

import ServiceTypePage, { ServiceTypeData } from '../components/service-type-page';

const DATA: ServiceTypeData = {
  slug: 'inverter-motor-washing-machine-repair',
  breadcrumb: 'Inverter Motor Washing Machine Repair',
  badge: 'Inverter & Direct-Drive Repair',
  h1Pre: 'Expert',
  h1Highlight: 'Inverter Motor',
  h1Post: 'Washing Machine Repair',
  heroDesc:
    "An inverter motor is the heart of every modern washing machine — brushless, belt-free on most direct-drive models, and precisely controlled by an inverter board. It's the technology behind LG's Direct Drive, Samsung's Digital Inverter and Bosch/Siemens' EcoSilence Drive. But inverter systems fail differently: the motor is usually robust; the problems tend to be in the inverter board, Hall sensor or speed sensor. We diagnose with proper test equipment — not guesswork — so you never pay to replace a healthy motor.",
  heroImage: '/Washing Machine Drum Repair Hero Section.png',
  heroImageAlt: 'Inverter motor washing machine repair in Dubai',
  heroStat: { value: '2–4 hrs', label: 'Board & motor repairs' },
  heroBadge: 'Component-Level Diagnosis',
  stats: [
    { value: '5,000+', label: 'Repairs completed in Dubai' },
    { value: '12+', label: 'Years of inverter expertise' },
    { value: '24/7', label: 'Emergency availability' },
    { value: '4.8★', label: 'Customer rating (247 reviews)' },
  ],
  serviceNoun: 'inverter motor washing machine',
  symptomsHeading: 'Signs of an Inverter Motor or Drive Board Fault',
  symptomsIntro:
    "Inverter and direct-drive faults often look the same from the outside — the drum won't turn — but the cause can be the board, a sensor, the bearings or the windings.",
  symptoms: [
    { title: "Drum Won't Spin or Turn", desc: 'The motor stays silent, the cycle stalls and clothes are left soaking. Caused by an inverter board fault, Hall/position sensor failure or motor winding open circuit. Fix: AED 250–900.' },
    { title: 'Loud Humming, No Rotation', desc: "The machine buzzes but the drum won't move — a locked rotor, failed Hall sensor or seized bearing on a direct-drive motor. Fix: AED 200–650." },
    { title: 'Motor Error Code Displayed', desc: 'LG LE/CL, Samsung 3E/3E1/3E2, Bosch F21 and similar codes point to motor–board communication loss, a sensor fault or drum obstruction. Fix: AED 200–500.' },
    { title: 'Cuts Out Mid-Cycle', desc: 'Stops part-way, often as the spin starts — inverter board overheating, a failing capacitor or cracked solder joints on the drive board. Fix: AED 400–900.' },
    { title: 'Spins at the Wrong Speed', desc: 'Over- or under-speeds, never reaches full spin, inconsistent cycles. A tachometer/speed sensor fault or board control error. Fix: AED 200–450.' },
    { title: 'Burning Smell from the Motor Area', desc: 'A hot smell during or after a cycle, sometimes a tripped breaker — a motor winding short or inverter board component failure. STOP using it. Fix: AED 350–900.' },
  ],
  causesHeading: 'What Causes Inverter Motor Problems?',
  causesImage: '/What Causes Washing Machine Drum Problems.png',
  causesIntro:
    "Inverter systems reward accurate diagnosis and punish guesswork. Replacing a whole motor when only a AED 200 sensor or a board has failed is a common and expensive mistake — we test each component separately.",
  causes: [
    'Inverter (drive) board faults — cracked solder joints, failed capacitors, blown relays',
    'Hall (rotor-position) sensor failure — the classic cause behind LG LE/CL errors',
    'Tachometer / speed sensor faults feeding the board bad data',
    'Motor winding shorts or open circuits (humming, burning smell, no rotation)',
    'Rotor/drum bearing wear — direct-drive motors load the bearing directly',
    "Dubai's ambient heat stressing inverter boards and hard-water limescale making the drum work harder",
  ],
  ctaTitle: "Drum won't turn?",
  ctaHighlight: "We'll find the real fault.",
  ctaDesc:
    "An inverter machine is usually worth repairing — the motor is built to last, and the fault is often a board or sensor that costs a fraction of a new machine. Get it diagnosed properly before you consider replacing it. Same-day service, 24/7.",
  brandsHeading: 'Inverter Motor Repair by Brand in Dubai',
  brandsIntro:
    'Each manufacturer builds its inverter system differently, with its own drive board, sensor layout and error codes. Our specialists are trained brand by brand and keep genuine inverter parts in stock.',
  brands: [
    {
      name: 'LG Direct Drive Inverter Repair',
      specialization: 'Direct Drive (motor bolted straight to the drum, no belt), Inverter Direct Drive, AI DD. Internationally certified technicians on the dominant inverter platform.',
      issues: [
        { title: 'LE / CL Error (locked motor / Hall sensor)', desc: "The classic LG inverter fault: drum won't turn, board reports a locked motor. Often the Hall sensor or a loose rotor bolt — not the motor itself. Repair: AED 200–450" },
        { title: 'Inverter PCB Failure', desc: "Machine cuts out, won't spin or won't power the motor. Repair: AED 400–800" },
        { title: 'Rotor / Stator & Bearing Wear (6–8 yrs)', desc: 'Grinding and poor spin extraction on older Direct Drive machines. Repair: AED 400–750' },
        { title: 'Hall Sensor Degradation', desc: 'Erratic spin and intermittent LE codes. Repair: AED 180–400' },
      ],
    },
    {
      name: 'Samsung Digital Inverter Repair',
      specialization: 'Digital Inverter Motor with a 10–20 year motor warranty on many models — meaning the fault is usually elsewhere.',
      issues: [
        { title: '3E / 3E1 / 3E2 Motor Errors', desc: 'Hall sensor or motor connector fault rather than a dead motor. Repair: AED 200–450' },
        { title: 'Inverter / Main PCB Faults', desc: 'Display errors, no spin, mid-cycle stops — common in Dubai heat. Repair: AED 350–650' },
        { title: 'Bearing Wear (WF/WD series, 4–7 yrs)', desc: 'Grinding and vibration. Repair: AED 380–650' },
        { title: 'Tachometer / Speed-Sensor Faults', desc: 'Wrong spin speeds and unbalanced behaviour. Repair: AED 200–400' },
      ],
    },
    {
      name: 'Bosch & Siemens EcoSilence / iQdrive Repair',
      specialization: 'Bosch EcoSilence Drive and Siemens iQdrive — brushless inverter motors on a shared platform with distinct control boards.',
      issues: [
        { title: 'F21 Motor Fault', desc: "Drum won't turn or turns erratically; often the carbon-free motor's control module or wiring. Repair: AED 350–700" },
        { title: 'Inverter / Control Module Failure', desc: "Error codes, unresponsive, won't start the spin. Repair: AED 300–650" },
        { title: 'Bearing Wear (5+ yrs)', desc: 'Noise and vibration. Repair: AED 380–650' },
        { title: 'Speed / Position Sensor Faults', desc: 'Inconsistent spin speeds. Repair: AED 200–450' },
      ],
    },
    {
      name: 'Whirlpool, Panasonic, Haier & Other Inverter Brands',
      specialization: 'Whirlpool inverter direct-drive, Panasonic inverter, and Haier/Hisense/Midea BLDC inverter motors increasingly common in Dubai. Genuine inverter parts carried for the top 25 brands.',
      issues: [
        { title: 'Inverter Board / Driver-Stage Failures', desc: 'No motor power, mid-cycle cut-out. Repair: AED 300–650' },
        { title: 'Position / Hall Sensor Faults', desc: 'Spin failure and error codes. Repair: AED 180–400' },
        { title: 'Motor Winding Faults', desc: 'Humming, burning smell, no rotation. Repair: AED 400–800' },
        { title: 'Bearing and Rotor Wear', desc: 'Noise and vibration on direct-drive units. Repair: AED 350–650' },
      ],
    },
  ],
  processHeading: 'Our Inverter Motor Repair Process',
  processIntro:
    'True component-level diagnosis: we test the inverter board, Hall sensor, speed sensor and windings separately, so you only pay to replace what has actually failed. Service call: AED 89, fully credited toward the repair.',
  includedHeading: 'Board Repair, Not Just Replacement',
  includedIntro:
    "Many inverter (drive) board faults are repairable at component level — cracked solder joints, a failed capacitor, a blown relay — saving you the cost of a full board. We repair where it's safe and lasting, and replace with a genuine board where it isn't.",
  included: [
    'Full fault-code scan with diagnostic equipment',
    'Inverter board test under load',
    'Hall / rotor-position sensor testing',
    'Tachometer / speed sensor signal check',
    'Motor winding insulation & continuity test',
    'Bearing inspection and full spin-cycle verification',
  ],
  includedImage: '/Complete Washing Machine Drum Repair Service.png',
  whyHeading: 'Why Dubai Owners Trust Us With Inverter & Direct-Drive Machines',
  why: [
    { title: 'True Component-Level Diagnosis', desc: 'We test the inverter board, Hall sensor, speed sensor and windings separately, so you only pay to replace what has actually failed — not a whole motor when a AED 200 sensor was the culprit.' },
    { title: 'Certified Technicians (12+ Years)', desc: 'Internationally certified on LG Direct Drive, Samsung Digital Inverter and Bosch/Siemens EcoSilence Drive, with ongoing training on the latest BLDC motor systems.' },
    { title: 'Genuine Spare Parts Guarantee', desc: '100% original inverter boards, sensors and motors — no counterfeit or refurbished components. Every replacement carries a 2-year warranty from authorised distributors.' },
    { title: 'Dubai Heat & Hard Water Aware', desc: "Dubai's ambient heat stresses inverter boards, and hard-water limescale strains the motor by making the drum work harder. We factor both into diagnosis and prevention." },
    { title: 'Transparent Pricing', desc: 'Service call: AED 89, fully credited toward the repair. All parts and labour quoted upfront before any work begins — no hidden charges.' },
    { title: '12-Month Workmanship Warranty', desc: 'If the same part fails within 12 months because of our repair, we fix it free. Parts warranty: 2 years. Money-back guarantee if a repair is unsuccessful.' },
  ],
  tipsHeading: 'Protect Your Inverter System',
  tipsIntro:
    "The motor copes well with Dubai's climate, but the inverter board doesn't love heat, and limescale quietly adds drag that shortens motor and bearing life.",
  tips: [
    { title: 'Keep the Board Cool', desc: 'Good ventilation around the machine and avoiding long hot cycles in peak heat reduce mid-cycle cut-outs and capacitor failures.' },
    { title: 'Descale Regularly', desc: "Dubai's 500–600 ppm water furs up the heater and drum, so the motor works harder. Preventive descaling: AED 80–150." },
    { title: "Don't Ignore Spin Glitches", desc: 'The odd missed spin or brief self-clearing code is an early warning of a sensor or solder-joint problem. A pre-emptive check costs AED 150–350.' },
    { title: 'Watch Rising Vibration', desc: 'On direct-drive machines the motor sits on the drum bearing, so bearing wear shows as rising vibration — ignoring it can eventually damage the motor.' },
  ],
  tipsImage: '/Keep Your Washing Machine Drum Running Smoothly.png',
  diagHeading: 'Quick Problem Diagnosis Guide',
  diagIntro:
    "This table helps you understand what's likely happening before we arrive — whether the fault is the board, a sensor, the bearings or the windings.",
  diagRows: [
    { name: "Drum Won't Spin or Turn", symptoms: 'Motor stays silent, cycle stalls, clothes left soaking', cause: 'Inverter (drive) board fault, Hall/position sensor failure, motor winding open circuit', solution: 'Diagnostic scan + board, sensor or motor repair', cost: 'AED 250–900' },
    { name: 'Loud Humming, No Rotation', symptoms: "Machine buzzes but the drum won't move", cause: 'Locked rotor, failed Hall sensor, seized bearing on a direct-drive motor', solution: 'Sensor or bearing repair', cost: 'AED 200–650' },
    { name: 'Motor Error Code Displayed', symptoms: 'LG LE/CL, Samsung 3E/3E1/3E2, Bosch F21, generic motor faults', cause: 'Motor–board communication loss, sensor fault, drum obstruction', solution: 'Error-code diagnosis + targeted repair', cost: 'AED 200–500' },
    { name: 'Cuts Out Mid-Cycle', symptoms: 'Stops part-way, sometimes after the spin starts, may restart then fail', cause: 'Inverter board overheating, failing capacitor, solder-joint cracks on the drive board', solution: 'Board repair or replacement', cost: 'AED 400–900' },
    { name: 'Spins at the Wrong Speed', symptoms: 'Over- or under-speeds, never reaches full spin, inconsistent cycles', cause: 'Tachometer / speed sensor fault, board control error', solution: 'Speed-sensor or board repair', cost: 'AED 200–450' },
    { name: 'Burning Smell from Motor Area', symptoms: 'Hot smell during or after a cycle, sometimes a tripped breaker', cause: 'Motor winding short, inverter board component failure', solution: 'STOP using — diagnostic + repair', cost: 'AED 350–900' },
    { name: 'No Power to the Motor', symptoms: 'Everything else works, drum never engages', cause: 'Relay or driver stage on the inverter board, wiring/connector fault', solution: 'Board repair or harness fix', cost: 'AED 300–700' },
    { name: 'Vibration & Rumble on Spin', symptoms: 'Noise and shaking from the drum on direct-drive models', cause: 'Rotor/drum bearing wear (direct-drive motors load the bearing directly)', solution: 'Bearing replacement', cost: 'AED 400–750' },
  ],
  urgency: {
    critical: [
      { title: 'Burning Smell from Motor or Board', why: "Inverter boards switch high currents, and Dubai's heat raises the risk. A burning smell means a winding short or failing board component — a real electrical and fire hazard. Stop the machine and switch off at the wall.", notice: 'Hot electrical smell during or after a cycle, sometimes a tripped breaker.', cost: 'AED 350–900' },
      { title: "Drum Won't Turn at All", why: 'Wet laundry sits breeding mould and odour, and repeated start attempts stress the board further. We scan fault codes and test the board, sensors and windings independently.', notice: 'The motor is silent and the cycle stalls; sometimes a foreign object is simply jamming the drum.', cost: 'AED 250–900' },
      { title: 'Machine Trips the Breaker', why: 'An inverter board or motor short can trip your electrics every time the motor engages — shorted winding, failed board component or moisture ingress.', notice: 'Breaker trips whenever the wash or spin engages.', cost: 'AED 300–800' },
    ],
    urgent: [
      { title: 'Motor Error Code Showing', why: 'LG LE/CL, Samsung 3E, Bosch F21 and similar point to a motor or inverter communication problem. They often start intermittently and become permanent.', notice: 'Error codes appearing during wash or spin, drum refusing to start.', cost: 'AED 200–500' },
      { title: 'Cuts Out Mid-Cycle', why: 'Inverter board overheating, a failing capacitor or cracked solder joints that lose contact under vibration — heat-related faults are more frequent in Dubai.', notice: 'The machine runs, then stops — often as the spin ramps up; may restart then fail again.', cost: 'AED 400–900' },
      { title: 'Spins at the Wrong Speed', why: "A tachometer/speed-sensor fault feeds the board bad data, or the board's control logic is failing.", notice: 'Never reaches full spin, or speeds up and slows erratically.', cost: 'AED 200–450' },
    ],
    preventive: [
      { title: 'Increasing Vibration on Spin', why: 'On direct-drive machines the motor sits on the drum bearing, so bearing wear shows up as rising vibration — ignoring it can eventually damage the motor.', notice: 'Rising vibration and noise during spin, worsening over weeks.', cost: 'AED 400–750' },
      { title: 'Limescale Straining the Motor', why: "Dubai's 500–600 ppm water furs up the heater and drum, so the motor works harder against added drag and heat, shortening motor and bearing life over years.", notice: 'Longer cycles, hotter machine, gradually louder operation.', cost: 'AED 80–350' },
      { title: 'Intermittent Spin Glitches', why: 'The odd missed spin or a brief code that clears itself is an early warning of a sensor or solder-joint problem — fix it before it fails completely.', notice: 'Occasional skipped spin cycles or transient error codes.', cost: 'AED 150–350' },
    ],
  },
  faqIntro: 'Get answers to the most common questions about inverter and direct-drive washing machine repair in Dubai.',
  faqs: [
    { q: 'My machine has an inverter motor — does that mean the motor has failed?', a: "Usually not. Inverter and direct-drive motors are among the most reliable parts in a modern machine (Samsung and LG warrant theirs for 10–20 years). When the drum won't turn, the cause is far more often the inverter board, the Hall/position sensor or the speed sensor. We test each independently so you don't pay to replace a healthy motor." },
    { q: 'Can you repair an inverter (drive) board, or only replace it?', a: "Both. Many board faults — a cracked solder joint, a blown capacitor, a failed relay — are repairable at component level, which costs far less than a new board. We repair where it's safe and durable, and replace with a genuine board where it isn't." },
    { q: 'What do the motor error codes mean?', a: 'They flag a problem in the motor circuit, not necessarily a dead motor. LG LE/CL = locked motor or Hall-sensor fault; Samsung 3E series = motor/Hall-sensor error; Bosch F21 = motor drive fault. Each needs a scan and component testing to pinpoint the real cause.' },
    { q: 'How long does an inverter motor repair take?', a: 'Sensor or connection repairs: 1–2 hours. Board repair or replacement and motor/bearing work: 2–4 hours. Faults needing an ordered board: next-day. Emergency same-day service is available 24/7.' },
    { q: 'What does it cost to repair an inverter washing machine in Dubai?', a: 'Service call: AED 89, fully credited if you proceed. Sensor or connection faults: AED 150–450. Inverter board repair or replacement: AED 400–900. Motor or bearing work: AED 400–800. The average repair is AED 350–500 including parts and labour, always quoted before work begins.' },
    { q: "Does Dubai's heat affect inverter motors?", a: "The motor copes well, but the inverter board doesn't love heat — high ambient temperatures stress its components and make mid-cycle cut-outs and capacitor failures more common. Good ventilation around the machine and not running long hot cycles in peak heat both help." },
    { q: 'Do you use genuine inverter parts?', a: "100% genuine, original boards, sensors and motors only — no refurbished or counterfeit parts. Every part carries a 2-year warranty and we'll show you the packaging before installation." },
    { q: 'Which inverter brands do you repair?', a: 'LG (Direct Drive Inverter), Samsung (Digital Inverter), Bosch and Siemens (EcoSilence Drive / iQdrive), Whirlpool, Panasonic, Haier, Hisense, Midea and more. We carry genuine inverter parts for the top 25 brands.' },
    { q: 'What warranty do you offer?', a: '12-month workmanship warranty on labour, 2-year warranty on genuine parts, a money-back guarantee if the repair is unsuccessful, and a free follow-up visit if the issue persists.' },
  ],
  areas: ['Dubai Marina', 'Downtown Dubai', 'JBR', 'Deira', 'Bur Dubai', 'Jumeirah', 'Arabian Ranches', 'The Meadows', 'Emirates Living', 'Dubai Hills Estate', 'Palm Jumeirah', 'Business Bay', 'Dubai Sports City', 'Mirdif', 'Al Karama', 'Al Satwa'],
  formHint: "Describe your inverter machine issue (e.g. LE/3E/F21 error, drum won't turn, cuts out...)",
};

export default function InverterMotorWashingMachineRepairPage() {
  return <ServiceTypePage data={DATA} />;
}
