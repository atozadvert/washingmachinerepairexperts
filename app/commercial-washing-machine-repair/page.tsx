'use client';

import ServiceTypePage, { ServiceTypeData } from '../components/service-type-page';

const DATA: ServiceTypeData = {
  slug: 'commercial-washing-machine-repair',
  breadcrumb: 'Commercial Washing Machine Repair',
  badge: 'Commercial & Industrial Laundry Repair',
  h1Pre: 'Expert',
  h1Highlight: 'Commercial',
  h1Post: 'Washing Machine Repair',
  heroDesc:
    'Is your commercial washing machine down and costing you business? We specialize in same-day emergency repairs for Speed Queen, Electrolux Professional, Maytag Commercial, IPSO, Primus and Girbau — serving hotels, laundromats, hospitals, salons, restaurants, gyms and labor accommodation across Dubai. With 2,600+ successful commercial repairs, we know every hour of downtime means lost revenue, which is why commercial callouts get priority rapid response.',
  heroImage: '/Washing Machine Power Fault Repair Hero Section.png',
  heroImageAlt: 'Commercial washing machine repair in Dubai',
  heroStat: { value: '~4 hrs', label: 'Most repairs on-site' },
  heroBadge: 'Priority Commercial Response',
  stats: [
    { value: '2,600+', label: 'Commercial repairs completed' },
    { value: '15+', label: 'Commercial laundry brands serviced' },
    { value: '24/7', label: 'Priority emergency response' },
    { value: '4.8★', label: 'Customer rating (247 reviews)' },
  ],
  serviceNoun: 'commercial washing machine',
  symptomsHeading: 'Signs Your Commercial Washing Machine Needs Repair',
  symptomsIntro:
    'Commercial machines run heavier loads, longer hours and higher cycle counts than domestic models — so wear patterns, part failures and the urgency of repair are all different.',
  symptoms: [
    { title: "Machine Won't Start", desc: 'No power, no display, completely unresponsive despite coin/card insertion. Power supply fault, blown fuse, payment system relay failure or control board fault. Fix: AED 250–550.' },
    { title: "Won't Drain Water", desc: 'Water remains after the cycle, error codes show and the unit is unusable for the next customer or load. Heavy-duty pump blockage, pump motor failure or blocked external drain line. Fix: AED 250–550.' },
    { title: 'Leaking Under Continuous Use', desc: 'Water pooling during high-frequency use — a door seal worn from heavy cycle counts, cracked commercial hose or loose fitting under continuous pressure. Fix: AED 200–450.' },
    { title: "Won't Spin / Motor Strains", desc: 'Heavy loads stay wet, the motor strains audibly and the spin cycle is incomplete. Heavy-duty belt wear, motor overheating/failure or bearing wear from high-volume use. Fix: AED 400–900.' },
    { title: 'Excessive Vibration Under Heavy Loads', desc: 'Severe shaking with full commercial-capacity loads — worn heavy-duty suspension/shocks, unbalanced large loads or mounting bolts loosening. Fix: AED 250–500.' },
    { title: 'Coin/Card Payment System Fault', desc: "The machine doesn't register payment, dispenses no cycle after payment or jams coins — direct revenue loss even when the machine is mechanically sound. Fix: AED 200–500." },
  ],
  causesHeading: 'What Causes Commercial Machine Failures?',
  causesImage: '/What Causes Washing Machine Power Faults.png',
  causesIntro:
    "We're not just a repair service — we're a business continuity partner for laundromats, hospitality operations, healthcare facilities and any business relying on heavy-duty laundry equipment.",
  causes: [
    'Heavy-duty motor overheating and belt wear from sustained full-capacity loads',
    'Door seals worn by high-frequency opening/closing cycles',
    'Suspension and mounting bolts loosening from continuous vibration cycles',
    'Coin acceptor, card reader or payment relay faults in coin-op units',
    "Limescale forming dramatically faster — Dubai's hard water compounded by dozens of cycles per day",
    'Control board and sensor wear from years of continuous heavy-use operation',
  ],
  ctaTitle: 'Losing revenue to a downed machine?',
  ctaHighlight: "We'll get you running today.",
  ctaDesc:
    "Book within 2 hours — commercial callouts are prioritized and we arrive same day, 24/7 including weekends and holidays. Most commercial repairs are completed on-site within 4 hours, and we carry an expanded commercial parts kit to avoid return visits. Maintenance contracts available for multi-unit operators.",
  brandsHeading: 'Commercial Washing Machine Repair by Brand in Dubai',
  brandsIntro:
    "Each commercial laundry brand is engineered for specific duty cycles, capacities and operational environments. Our specialists are trained on brand-specific issues and maintain genuine parts for the most common commercial brands in Dubai's hospitality, healthcare and laundromat sectors.",
  brands: [
    {
      name: 'Speed Queen Commercial Repair',
      specialization: 'Heavy-duty stainless steel construction, commercial-grade suspension, coin-op and OPL (on-premise laundry) configurations. Priority callout response to minimize revenue loss.',
      issues: [
        { title: 'Heavy-Duty Motor Overheating/Failure', desc: 'Motor strains or cuts out under repeated full-capacity laundromat loads. Repair: AED 450–900' },
        { title: 'Coin Drop / Payment Mechanism Jamming', desc: 'Coin-op units stop accepting payment, causing direct revenue loss. Repair: AED 200–450' },
        { title: 'Suspension Bolt Loosening', desc: 'From continuous high-frequency vibration cycles in commercial settings. Repair: AED 250–500' },
        { title: 'Drain Valve Wear Under High Cycle Counts', desc: 'Slower or incomplete drainage developing over thousands of cycles. Repair: AED 250–500' },
        { title: 'Control Board Faults From Heavy Use', desc: 'Display errors or unresponsive controls after years of continuous operation. Repair: AED 350–650' },
      ],
    },
    {
      name: 'Electrolux Professional Repair',
      specialization: 'Line 3000/5000/6000 commercial series, programmable wash cycles, hygiene and disinfection programs for healthcare and hospitality — including hygiene cycle validation requirements common in Dubai hotels and clinics.',
      issues: [
        { title: 'Programmable Cycle Memory Faults', desc: 'Custom wash programs reset or fail to save, disrupting hygiene protocols. Repair: AED 250–500' },
        { title: 'Heavy-Duty Drum Bearing Wear', desc: 'Grinding noise under commercial load volumes, typically after 3–5 years of intensive use. Repair: AED 500–900' },
        { title: 'Disinfection/Hygiene Cycle Sensor Faults', desc: 'Critical for hospitals and hospitality clients relying on validated hygiene cycles. Repair: AED 300–600' },
        { title: 'Water Inlet Valve Failure Under High-Frequency Use', desc: 'Slower fill times or no fill, affecting throughput. Repair: AED 200–400' },
        { title: 'Drain Pump Failure From Continuous Operation', desc: 'Common in high-turnover hospitality laundry rooms. Repair: AED 250–500' },
      ],
    },
    {
      name: 'Maytag Commercial Repair',
      specialization: "Commercial Technology motor, reinforced stainless steel drum, high-capacity coin-op and OPL models — widely used in Dubai's self-service laundromats and staff accommodation laundry facilities.",
      issues: [
        { title: 'Commercial Technology Motor Wear', desc: 'Reduced spin power or unusual noise after extended heavy-duty service. Repair: AED 400–800' },
        { title: 'Reinforced Drum Bearing Failure', desc: 'Common after several years of high-volume commercial loads. Repair: AED 450–850' },
        { title: 'Control Panel Button Wear', desc: 'Physical buttons fail to register from high-frequency public use in laundromats. Repair: AED 200–400' },
        { title: 'Drain System Blockage', desc: 'From lint and debris buildup typical of multi-user commercial environments. Repair: AED 200–450' },
        { title: 'Door Lock Mechanism Fatigue', desc: 'Wear from constant opening and closing in coin-op settings. Repair: AED 200–400' },
      ],
    },
    {
      name: 'IPSO & Primus Commercial Repair',
      specialization: 'Industrial-grade washer-extractors, high-spin-speed models, programmable commercial wash cycles for laundromats and industrial laundries across Dubai.',
      issues: [
        { title: 'High-Speed Extraction Motor Faults', desc: 'Loss of spin power affecting extraction efficiency and drying time. Repair: AED 500–950' },
        { title: 'Programmable Control Module Errors', desc: 'Wash program corruption or display lockup. Repair: AED 300–600' },
        { title: 'Heavy-Duty Suspension System Wear', desc: 'From the high G-force spin cycles typical of industrial-grade extraction. Repair: AED 300–600' },
        { title: 'Water Supply Valve Failures Under Continuous Cycling', desc: 'Affects fill times across back-to-back commercial loads. Repair: AED 200–450' },
        { title: 'Drain Pump and Filter Blockage', desc: 'From heavy lint and debris loads typical of industrial laundry operations. Repair: AED 250–500' },
      ],
    },
    {
      name: 'Girbau & Other Commercial Brands',
      specialization: 'Girbau, Continental Girbau, Unimac, Dexter, Huebsch, Miele Professional and Whirlpool Commercial — 15+ commercial laundry brands across Dubai hotels, hospitals, salons, gyms, restaurants and laundromats.',
      issues: [
        { title: 'Heavy-Duty Parts Access', desc: 'Reinforced bearings, commercial-grade motors and industrial drain pumps sourced through authorized distributors.' },
        { title: 'Coin-Op, Card & OPL Configurations', desc: 'Full understanding of coin-op, card payment and on-premise laundry setups.' },
        { title: 'Hygiene & Disinfection Requirements', desc: 'Knowledge of hygiene and disinfection cycle requirements for healthcare and hospitality clients.' },
        { title: 'Volume Maintenance Contracts', desc: 'Contract options for multi-unit operators and laundromat owners, with priority response for businesses that cannot afford downtime.' },
      ],
    },
  ],
  processHeading: 'Our Commercial Repair Process',
  processIntro:
    'Priority commercial diagnostic visits, rapid fault isolation and on-site repair with a commercial parts kit wherever possible — to avoid a return visit. Service call fee: AED 89, fully credited toward the repair, with volume-based contract pricing for multi-unit operators.',
  includedHeading: 'A Complete Commercial Machine Service',
  includedIntro:
    'We never use domestic-grade substitutes on commercial machines — they fail prematurely under heavy-duty cycle volumes and void manufacturer warranties. Every part is genuine or OEM-approved commercial-grade with a 2-year warranty.',
  included: [
    'Priority diagnostic visit and rapid fault isolation',
    'Heavy-duty motor and belt testing under load simulation',
    'Coin/card payment system testing and repair',
    'Suspension inspection and mounting hardware re-torque',
    'Commercial descaling and heating element inspection',
    'Payment-to-cycle activation verification after repair',
  ],
  includedImage: '/Complete Washing Machine Power Fault Repair Service.png',
  whyHeading: 'Why Commercial Operators in Dubai Choose Us',
  why: [
    { title: 'Priority Same-Day Emergency Repair', desc: "Book within 2 hours — commercial callouts are prioritized and we arrive same day, 24/7 including weekends and holidays, because commercial downtime doesn't wait for business hours." },
    { title: 'Certified Commercial Technicians (12+ Years)', desc: 'Specialized training on Speed Queen, Electrolux Professional, Maytag Commercial, IPSO, Primus and Girbau — heavy-duty motors, reinforced bearings, commercial suspension and payment integrations.' },
    { title: 'Genuine Commercial-Grade Parts', desc: '100% original or OEM-approved commercial parts only — never domestic-grade substitutes. Heavy-duty motors, bearings, belts and pumps in stock, each with a 2-year warranty.' },
    { title: 'Hard Water & High-Volume Specialist', desc: "Commercial machines run far more cycles, so Dubai's hard water buildup accumulates significantly faster. Maintenance contracts with scheduled descaling minimize unplanned downtime." },
    { title: 'Transparent Commercial Pricing', desc: 'Service call AED 89, fully credited. All labor and parts quoted upfront, with volume-based maintenance contract pricing for multi-unit operators and a 24-hour price match guarantee.' },
    { title: '12-Month Commercial Warranty', desc: 'If the same part fails within 12 months we fix it free. Parts warranty: 2 years, with a priority response guarantee for warranty callouts to minimize repeat downtime.' },
  ],
  tipsHeading: 'Prevent Commercial Machine Downtime',
  tipsIntro:
    'A structured preventive maintenance schedule is significantly more cost-effective than reactive repairs that cause unplanned downtime. Ask about our maintenance contracts.',
  tips: [
    { title: 'Schedule Commercial Descaling', desc: "More frequently than domestic recommendations, given higher cycle volume and Dubai's hard water. AED 200–450 per visit, contract pricing available." },
    { title: 'Train Staff on Load Balancing', desc: 'Proper loading practices reduce suspension and bearing wear dramatically across high daily cycle counts.' },
    { title: 'Clean Lint Filters & Drains Weekly', desc: 'In high-traffic facilities, weekly staff-performed filter and drain line cleaning prevents the most common blockages — free.' },
    { title: 'Track Cycle Counts Per Machine', desc: 'Keeping records lets you anticipate component replacement before failure and address minor noise or vibration changes promptly.' },
  ],
  tipsImage: '/Restore Power to Your Washing Machine.png',
  diagHeading: 'Quick Problem Diagnosis Guide',
  diagIntro:
    'Use this table to identify your commercial washing machine problem and understand what needs to be fixed.',
  diagRows: [
    { name: "Machine Won't Start", symptoms: 'No power, no display, unresponsive despite coin/card insertion', cause: 'Power supply fault, blown fuse, payment system relay failure, control board fault', solution: 'Diagnostic check + targeted repair', cost: 'AED 250–550' },
    { name: "Won't Drain Water", symptoms: 'Water remains after cycle, error codes, unit unusable for next load', cause: 'Heavy-duty drain pump blockage, commercial pump motor failure, blocked external drain line', solution: 'Pump cleaning or replacement', cost: 'AED 250–550' },
    { name: 'Leaking Water', symptoms: 'Water pooling under or around the machine during high-frequency use', cause: 'Worn door seal from heavy cycle counts, cracked commercial hose, loose fitting', solution: 'Seal or hose replacement', cost: 'AED 200–450' },
    { name: "Won't Spin", symptoms: 'Heavy loads stay wet, motor strains audibly, spin cycle incomplete', cause: 'Heavy-duty belt wear, commercial motor overheating/failure, bearing wear from high-volume use', solution: 'Belt or motor repair', cost: 'AED 400–900' },
    { name: 'Excessive Vibration Under Heavy Loads', symptoms: 'Severe shaking with full commercial-capacity loads', cause: 'Worn heavy-duty suspension/shock absorbers, unbalanced large loads, loosened mounting bolts', solution: 'Suspension repair or rebalancing', cost: 'AED 250–500' },
    { name: 'Coin/Card Payment System Fault', symptoms: "Machine doesn't register payment, no cycle after payment, jammed coin mechanism", cause: 'Faulty coin acceptor, card reader malfunction, payment relay wiring fault', solution: 'Payment system diagnosis + repair', cost: 'AED 200–500' },
    { name: 'Limescale & Heavy Mineral Buildup', symptoms: 'Reduced wash performance, slower heating, frequent heating element failures', cause: "Dubai's hard water accelerated by high cycle frequency in commercial use", solution: 'Deep descaling + commercial maintenance contract', cost: 'AED 200–450' },
    { name: 'Control Board / Display Error Codes', symptoms: 'Codes specific to commercial models shown on the panel', cause: 'Heavy-use electrical wear, water ingress, sensor faults from high-frequency cycling', solution: 'Error code diagnosis + targeted repair', cost: 'AED 250–550' },
  ],
  urgency: {
    critical: [
      { title: 'Machine Completely Down', why: 'A single down unit in a laundromat, hotel laundry room or healthcare facility means direct revenue loss or disrupted hygiene operations. We prioritize commercial diagnostic visits.', notice: 'No power, no display response, machine entirely unresponsive to payment or start commands.', cost: 'AED 250–650' },
      { title: 'Water Leaking Under Continuous Use', why: 'Commercial environments often have multiple units close together, multiplying water damage and slip hazard risk from a single leaking unit.', notice: 'Water pooling near or under the unit, leak volume increasing under heavy daily cycle counts.', cost: 'AED 200–500' },
      { title: "Won't Drain Water at All", why: 'A single non-draining unit halts throughput entirely, and standing water across multiple daily loads accelerates mold and odor issues.', notice: 'Water remains in the drum after the cycle, error code displayed, unit unusable for the next customer.', cost: 'AED 250–550' },
    ],
    urgent: [
      { title: "Won't Spin or Incomplete Extraction", why: 'Reduced extraction efficiency increases drying time and energy costs significantly across high cycle volumes, directly affecting throughput.', notice: 'Heavy loads noticeably wet after the cycle, motor straining audibly, spin cutting short or running at reduced speed.', cost: 'AED 400–900' },
      { title: 'Excessive Vibration With Heavy Loads', why: 'Persistent vibration accelerates wear on suspension, mounting bolts and surrounding equipment, and can become a safety hazard in shared laundry spaces.', notice: 'Severe shaking under full-capacity loads, mounting bolts working loose, increasing spin noise.', cost: 'AED 250–500' },
      { title: 'Coin or Card Payment System Failure', why: 'A non-functioning payment system directly stops revenue generation, even if the machine itself is mechanically sound.', notice: 'Coins not registering or jamming, card reader not accepting payment, no cycle dispensed after successful payment.', cost: 'AED 200–500' },
    ],
    preventive: [
      { title: 'Reduced Wash Performance Across Units', why: 'In a multi-unit setting, gradual decline across several machines often signals a shared cause — detergent buildup, limescale or blocked inlet filters — cheaper to address proactively.', notice: 'Customers or staff reporting dirtier results, longer cycle times, increased detergent or energy use.', cost: 'AED 200–450/unit' },
      { title: 'Recurring Heating Element Failures', why: "Commercial machines run far more heating cycles, so Dubai's 500+ ppm water scales elements at an accelerated rate — leading to repeat failures without systematic descaling.", notice: 'Elements failing more frequently than expected, slower heating, rising energy costs, recurring heat-related codes.', cost: 'AED 200–450' },
      { title: 'General Wear From High Cycle Counts', why: 'Commercial machines accumulate wear far faster than domestic units — scheduled preventive inspections with proactive part replacement beat reactive repairs.', notice: 'Gradual increases in noise, minor vibration or slower cycle completion without a specific failure yet.', cost: 'Contract pricing' },
    ],
  },
  faqIntro: 'Get answers to the most common questions about commercial washing machine repair, maintenance contracts and costs.',
  faqs: [
    { q: 'How long does commercial washing machine repair typically take?', a: 'Simple repairs (drain cleaning, hose replacement, payment system reset): 1–2 hours. Moderate repairs (motor, belt or pump replacement): 2–4 hours. Major repairs (drum bearing, heavy-duty motor rebuild): 3–5 hours or next-day if parts require ordering. Emergency same-day repairs are available 24/7 and prioritized for commercial operators — we always confirm a clear timeline upfront.' },
    { q: 'What is the average cost to repair a commercial washing machine in Dubai?', a: 'Service call fee: AED 89, fully credited toward the repair. Minor repairs (drain, seals, hoses, payment systems): AED 200–500. Moderate repairs (motors, belts, bearings): AED 400–800. Major repairs (heavy-duty motor or bearing replacement, control board): AED 600–1,300. The average commercial repair costs AED 450–600 including parts and labor — generally higher than domestic due to heavy-duty components. Volume contract pricing is available.' },
    { q: 'Do you offer maintenance contracts for laundromats, hotels or multi-unit operators?', a: "Yes. We offer scheduled maintenance contracts tailored to your machine count and usage volume, including regular descaling, preventive part inspection and priority emergency response. This significantly reduces unplanned downtime and the higher costs of reactive-only servicing. Contact us for a custom quote based on your facility's needs." },
    { q: 'Why is my commercial washing machine leaking water?', a: 'Leading causes in Dubai commercial settings: door seal worn from high-frequency use (most common — AED 200–380), cracked commercial-grade hose under sustained pressure (AED 150–300), pump failure from extended duty cycles (AED 300–500), blocked drain system from heavy lint volume (AED 200–400) or loose fittings from continuous vibration (AED 80–180).' },
    { q: 'How can I prevent commercial washing machine downtime?', a: 'Schedule commercial descaling more frequently than domestic recommendations (AED 200–450 per visit), set up a structured preventive maintenance contract, train staff on proper load balancing, inspect and clean lint filters and drain lines weekly, address minor noise or vibration changes promptly, and keep cycle-count records per machine to anticipate replacements before failure.' },
    { q: 'What brands of commercial washing machines do you repair?', a: 'All major commercial laundry brands operating in Dubai: Speed Queen, Electrolux Professional, Maytag Commercial, IPSO, Primus, Girbau, Continental Girbau, Unimac, Dexter, Huebsch, Miele Professional and Whirlpool Commercial — across laundromat, hotel, healthcare and OPL configurations.' },
    { q: 'Do you use genuine commercial-grade spare parts or domestic-grade substitutes?', a: '100% genuine or OEM-approved commercial-grade parts only. We never use domestic-grade substitutes on commercial machines — they fail prematurely under heavy-duty cycle volumes and void manufacturer warranties. Every part carries a 2-year warranty and is sourced from authorized commercial equipment distributors.' },
    { q: 'Can you come for emergency same-day commercial repair, including outside business hours?', a: 'Yes. We offer 24/7 emergency commercial service with priority response for laundromats, hotels, hospitals and other businesses where downtime has direct impact. Booking within 2 hours typically means same-day arrival, including weekends, holidays and after-hours callouts. The emergency charge is the same AED 89 — no surcharge.' },
    { q: "How does Dubai's hard water affect commercial washing machines specifically?", a: "Commercial machines run dramatically more wash and heating cycles — often dozens per day. Dubai's 500–600 ppm water hardness causes calcium and magnesium buildup at a proportionally faster rate on heating elements, valves and drum surfaces. Without a structured descaling schedule this leads to frequent element failures, reduced efficiency and higher energy costs. We strongly recommend a maintenance contract for any business operating multiple units." },
  ],
  areas: ['Dubai Marina', 'Downtown Dubai', 'JBR', 'Deira', 'Bur Dubai', 'Jumeirah', 'Arabian Ranches', 'Business Bay', 'Dubai Hills Estate', 'Palm Jumeirah', 'Al Quoz Industrial Areas', 'Dubai Sports City', 'Dubai Investment Park', 'Jebel Ali', 'Labor & Staff Accommodation Zones', 'Karama', 'Satwa'],
  formHint: 'Describe your commercial machine issue (brand, number of units, payment system faults...)',
};

export default function CommercialWashingMachineRepairPage() {
  return <ServiceTypePage data={DATA} />;
}
