'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Phone,
  MessageCircle,
  Clock,
  Mail,
  Globe,
  Droplets,
  RotateCw,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Star,
  Gauge,
  Filter,
  Waves,
  AlertTriangle,
  Truck,
  Search,
  ClipboardCheck,
  BadgeCheck,
  Timer,
  Lock,
  Volume2,
  Zap,
  Droplet,
} from 'lucide-react';

const LOGO_URL =
  'https://res.cloudinary.com/dbvjzyevy/image/upload/v1782108374/Red_and_Yellow_Modern_Simple_Application_Logogram_250_x_150_px_1_svnokc.png';

const PHONE = '+971501234567';
const WHATSAPP = 'https://wa.me/971501234567';

const NAV_SERVICES = [
  { title: 'Drainage Repair', icon: <Droplets className="h-4 w-4" />, href: '/drainage-repair' },
  { title: 'Spin Cycle Repair', icon: <RotateCw className="h-4 w-4" />, href: '/spin-cycle-repair' },
  { title: 'Water Leakage Repair', icon: <ShieldCheck className="h-4 w-4" />, href: '/water-leakage-repair' },
  { title: 'Drum Repair', icon: <Wrench className="h-4 w-4" />, href: '/drum-repair', active: true },
  { title: 'Door Lock Repair', icon: <Lock className="h-4 w-4" />, href: '/door-lock-repair' },
  { title: 'Noise Repair', icon: <Volume2 className="h-4 w-4" />, href: '/noise-repair' },
  { title: 'Power Fault Repair', icon: <Zap className="h-4 w-4" />, href: '/power-fault-repair' },
  { title: 'Water Inlet Repair', icon: <Droplet className="h-4 w-4" />, href: '/water-inlet-repair' },
];

const SYMPTOMS = [
  {
    icon: <Gauge className="h-5 w-5" />,
    title: 'Loud Rumbling or Grinding Noise',
    desc: 'Deep metallic rumbling or grinding that worsens at high spin speeds — a sign of worn bearings or damaged supports.',
  },
  {
    icon: <RotateCw className="h-5 w-5" />,
    title: 'Drum Won\'t Rotate',
    desc: 'The motor runs but the drum does not turn at all, leaving clothes sitting in still water.',
  },
  {
    icon: <Waves className="h-5 w-5" />,
    title: 'Excessive Wobble or Play',
    desc: 'The inner drum rocks noticeably when pushed by hand, indicating worn bearings or a broken support arm.',
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    title: 'Clothes Getting Snagged or Torn',
    desc: 'Protruding drum paddles, sharp edges or loose components catching and tearing fabrics during the wash.',
  },
  {
    icon: <Filter className="h-5 w-5" />,
    title: 'Visible Rust or Corrosion',
    desc: 'Rust stains appearing on your laundry or visible corrosion on the inner drum surface.',
  },
  {
    icon: <Droplets className="h-5 w-5" />,
    title: 'Drum Scraping Against Housing',
    desc: 'Metal-on-metal scraping sound during any phase of the cycle, signalling misalignment or collapsed bearings.',
  },
];

const CAUSES = [
  'Worn or collapsed drum bearings no longer supporting smooth rotation',
  'Broken spider arm or drum support bracket',
  'Damaged or loose drum paddles (lifters)',
  'Corroded inner drum surface from mineral deposits',
  'Failed drum shaft seal causing water ingress to bearings',
  'Bent or misaligned drum shaft after heavy load damage',
];

const PROCESS = [
  {
    icon: <Phone className="h-5 w-5" />,
    title: 'Contact & Booking',
    desc: 'Call or message us and we confirm a same-day slot for your drum repair anywhere in Dubai.',
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: 'Technician Dispatch',
    desc: 'A certified drum specialist arrives at your door fully equipped with bearings, seals and support parts.',
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: 'On-Site Diagnosis',
    desc: 'We inspect the bearings, spider arm, paddles and shaft to pinpoint the exact cause — then share a transparent quote.',
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: 'Professional Repair',
    desc: 'The fault is fixed using genuine OEM parts: replacing bearings, seals or restoring full drum integrity.',
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: 'Full Cycle Test',
    desc: 'We run a complete drum rotation and spin test to confirm smooth, quiet operation before we finish.',
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: 'Service Warranty',
    desc: 'Every drum repair is backed by a written warranty covering both parts and labour.',
  },
];

const INCLUDED = [
  'Full drum bearing & seal replacement',
  'Spider arm / cross bracket inspection',
  'Drum paddle (lifter) replacement',
  'Shaft alignment & runout check',
  'Outer tub seal integrity test',
  'Full drum rotation & balance verification',
];

const WHY = [
  {
    icon: <Timer className="h-6 w-6" />,
    title: 'Same-Day Service',
    desc: 'Most drum faults are diagnosed and fixed within a single visit across all Dubai areas.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Genuine OEM Parts',
    desc: 'We fit only original manufacturer bearings, seals and drum components for repairs that genuinely last.',
  },
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    title: 'Certified Technicians',
    desc: 'Factory-trained engineers handle every major brand with precision and care.',
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: 'Transparent Pricing',
    desc: 'You approve a clear, fixed quote before any work begins — no surprises, ever.',
  },
];

const FAQS = [
  {
    q: 'How much does a washing machine drum repair cost in Dubai?',
    a: 'A standard drum repair starts from an affordable call-out and diagnosis fee. Once our technician identifies the exact cause on-site, you receive a transparent fixed quote before any work begins — so you always approve the price first.',
  },
  {
    q: 'Can you fix the drum problem on the same day?',
    a: 'In most cases, yes. Common drum faults like paddle replacement and minor bearing issues are resolved same-day. Full bearing overhauls on some models may require 24-48 hours for OEM parts sourcing.',
  },
  {
    q: 'Which brands do you repair?',
    a: 'We service all major brands including Samsung, LG, Bosch, Siemens, Whirlpool, Hoover and 20+ others, covering both front-load and top-load washing machines.',
  },
  {
    q: 'Do you provide a warranty on drum repairs?',
    a: 'Absolutely. Every drum repair comes with a written service warranty covering both the replaced parts and the labour, giving you complete peace of mind.',
  },
  {
    q: 'Is it safe to keep using my machine if the drum is noisy?',
    a: 'We recommend stopping use until it’s inspected. A noisy drum usually means bearings or supports are failing — continued use can cause catastrophic damage to the tub, shaft and surrounding components, leading to a much costlier repair.',
  },
];

export default function DrumRepairPage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-neutral-900 flex flex-col font-sans selection:bg-[#f2b134]/30">

      {/* ============ HEADER ============ */}
      <header className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 z-40 relative">
        <div
          style={{ backgroundColor: '#1E1E1E' }}
          className="w-full flex items-center justify-between py-4 px-5 md:px-8 shadow-xl rounded-b-3xl border-x border-b border-neutral-800"
        >
          <div className="flex items-center">
            <Link href="/" className="relative h-18 w-56 sm:h-24 sm:w-72 md:w-80 -my-5 sm:-my-7 flex items-center cursor-pointer select-none z-10 transition-transform hover:scale-[1.02]">
              <Image src={LOGO_URL} alt="A To Z Appliances Repair" fill sizes="320px" className="object-contain object-left" referrerPolicy="no-referrer" priority />
            </Link>

            <div className="w-[1.5px] h-6 bg-neutral-700/80 mx-4 md:mx-6 shrink-0" />

            <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-sans text-[18px] font-medium text-neutral-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/" className="hover:text-white transition-colors">About</Link>

              <div className="relative">
                <button onClick={() => setServicesOpen(!servicesOpen)} className="hover:text-white flex items-center gap-1 cursor-pointer text-[#f2b134]">
                  Services <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-10 -left-20 w-[420px] bg-[#1E1E1E] border border-neutral-800 rounded-2xl shadow-2xl p-4 z-50"
                    >
                      <div className="px-1 pb-3 mb-3 border-b border-neutral-800 flex items-center justify-between">
                        <span className="text-neutral-500 font-mono text-[10px] tracking-wider uppercase">Our Services</span>
                        <span className="text-[#f2b134] text-[10px] font-mono">8 Services</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {NAV_SERVICES.map((s) => (
                          <Link
                            key={s.title}
                            href={s.href}
                            onClick={() => setServicesOpen(false)}
                            className={`flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all group ${s.active ? 'bg-neutral-800' : 'hover:bg-neutral-800'}`}
                          >
                            <span className="w-8 h-8 rounded-lg bg-neutral-800 group-hover:bg-[#f2b134]/15 flex items-center justify-center text-[#f2b134] shrink-0 transition-colors">
                              {s.icon}
                            </span>
                            <span className={`text-[13px] font-medium leading-tight transition-colors ${s.active ? 'text-[#f2b134]' : 'text-neutral-300 group-hover:text-white'}`}>{s.title}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          <div className="flex items-center gap-3 md:gap-5">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${PHONE}`}
              style={{ backgroundColor: '#f2b134' }}
              className="hidden md:flex rounded-full text-neutral-900 font-bold px-6 py-2.5 items-center gap-2 text-sm shadow-lg hover:brightness-105 transition-all"
            >
              <span className="tracking-tight whitespace-nowrap">Book A Call</span>
              <svg className="h-3.5 w-3.5 stroke-[2.5] stroke-neutral-900" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-800/80 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-all"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ============ MOBILE DRAWER ============ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden fixed top-4 left-4 right-4 z-40 bg-[#1E1E1E] border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800/60">
                <div className="relative h-12 w-40">
                  <Image src={LOGO_URL} alt="Logo" fill className="object-contain object-left" referrerPolicy="no-referrer" />
                </div>
                <button onClick={() => setMobileOpen(false)} className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-all">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="px-6 py-4">
                {['Home', 'About', 'Services', 'Contact'].map((label, idx) => (
                  <Link
                    key={label}
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className={`w-full text-left py-4 text-[17px] font-semibold flex items-center justify-between text-neutral-300 ${idx < 3 ? 'border-b border-neutral-800/40' : ''}`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <div className="px-6 pb-6 pt-2 flex flex-col gap-3">
                <a href={`tel:${PHONE}`} style={{ backgroundColor: '#f2b134' }} className="w-full py-4 rounded-2xl font-bold text-neutral-900 flex items-center justify-center gap-2.5 text-[15px] shadow-lg">
                  <Phone className="h-4.5 w-4.5 stroke-[2.5]" /> Book A Call
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-2xl font-bold text-neutral-300 border border-neutral-700 flex items-center justify-center gap-2.5 text-[15px]">
                  <MessageCircle className="h-4.5 w-4.5 stroke-[2.5]" /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ============ HERO ============ */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-12 sm:pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[13px] text-neutral-500 mb-8 sm:mb-12 font-medium">
          <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-neutral-400">Services</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-[#c8901f]">Drum Repair</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] text-[#f2b134] text-[11px] font-mono uppercase tracking-widest mb-6">
              <Wrench className="h-3.5 w-3.5" />
              <span>Drum &amp; Bearing Repair</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-neutral-900 mb-6">
              Washing Machine{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Drum Repair</span>
                <span className="absolute bottom-1.5 left-0 right-0 h-3.5 bg-[#f2b134]/40 -rotate-1 z-0" />
              </span>{' '}
              in Dubai
            </h1>

            <p className="text-neutral-600 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mb-8">
              Loud grinding noises, drum won&apos;t turn or clothes getting torn? Our certified technicians
              diagnose and fix every drum and bearing fault — same day, with genuine OEM parts and
              a full service warranty.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-9">
              <motion.a
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href={`tel:${PHONE}`}
                style={{ backgroundColor: '#f2b134' }}
                className="rounded-full text-neutral-900 font-bold px-7 py-3.5 flex items-center gap-2.5 text-sm shadow-md"
              >
                <Phone className="h-4.5 w-4.5 stroke-[2.5]" /> Book A Repair
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="rounded-full bg-white text-neutral-900 font-bold px-7 py-3.5 flex items-center gap-2.5 text-sm shadow-sm border border-neutral-200 hover:bg-neutral-50 transition-colors"
              >
                <MessageCircle className="h-4.5 w-4.5 stroke-[2.5]" /> WhatsApp Us
              </motion.a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#f2b134] text-[#f2b134]" />
                  ))}
                </div>
                <span className="text-sm text-neutral-600 font-medium">4.9 / 5 rated</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600 font-medium">
                <Timer className="h-4 w-4 text-[#c8901f]" /> Same-day service
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600 font-medium">
                <ShieldCheck className="h-4 w-4 text-[#c8901f]" /> Warranty backed
              </div>
            </div>
          </div>

          {/* Right - image with floating card */}
          <div className="relative">
            <div className="relative aspect-[4/3.4] w-full rounded-[2rem] overflow-hidden border border-neutral-200 shadow-2xl">
              <Image
                src="/Washing Machine Drum Repair Hero Section.png"
                alt="Washing machine drum repair in Dubai"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-2 sm:left-6 bg-white rounded-2xl shadow-xl border border-neutral-100 px-5 py-4 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1E1E1E] flex items-center justify-center text-[#f2b134]">
                <Gauge className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-extrabold font-display text-neutral-900 leading-none">~120 min</p>
                <p className="text-xs text-neutral-500 mt-1">Average repair time</p>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              className="absolute top-5 right-5 bg-[#f2b134] rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4 text-neutral-900" />
              <span className="text-xs font-bold text-neutral-900">OEM Parts Only</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            {[
              { value: '2,500+', label: 'Drum repairs completed' },
              { value: '20+', label: 'Brands serviced' },
              { value: '120 min', label: 'Average fix time' },
              { value: '4.9★', label: 'Customer rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-display font-extrabold text-3xl sm:text-4xl text-neutral-900 mb-1.5">
                  {stat.value}
                </p>
                <p className="text-neutral-500 text-xs sm:text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SYMPTOMS ============ */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>&#8627; Warning Signs</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-4">
              Signs You Need a Drum Repair
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed">
              If your washing machine shows any of these symptoms, the drum, bearings or support structure likely needs
              professional attention. Catching them early prevents catastrophic damage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SYMPTOMS.map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="group bg-white border border-neutral-200/70 rounded-2xl p-6 hover:border-[#f2b134] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF9F5] group-hover:bg-[#f2b134] flex items-center justify-center text-[#c8901f] group-hover:text-neutral-900 mb-5 transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-bold text-neutral-900 text-[17px] mb-2 font-display">{s.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CAUSES + IMAGE ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden border border-neutral-200 shadow-xl">
              <Image
                src="/What Causes Washing Machine Drum Problems.png"
                alt="Technician inspecting washing machine drum"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>&#8627; Root Causes</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-neutral-900 leading-[1.1] mb-6">
              What Causes Drum Problems?
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed mb-8">
              A washing machine with drum issues almost always traces back to one of a handful of
              culprits. Our technicians check each one methodically to find the real fault — not just
              the symptom.
            </p>
            <ul className="flex flex-col gap-4">
              {CAUSES.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-[#f2b134]/15 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-[#c8901f]" />
                  </span>
                  <span className="text-neutral-700 text-[15px] leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative rounded-[2.5rem] bg-white border border-neutral-200/70 overflow-hidden lg:overflow-visible px-6 sm:px-12 lg:px-16 py-10 sm:py-14 shadow-lg">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f2b134]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* ---- MOBILE LAYOUT (below lg) ---- */}
          <div className="lg:hidden relative z-10 flex flex-col gap-6">
            {/* Top row: heading left + image right */}
            <div className="flex items-start gap-4">
              <h2 className="font-display font-extrabold text-[26px] sm:text-4xl text-neutral-900 leading-[1.12] tracking-tight flex-1 mt-6 sm:mt-8">
                Drum making noise? <span className="text-[#c8901f]">We&apos;ll fix it today.</span>
              </h2>
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0 -mt-4 -mr-1">
                <Image
                  src="/94ae7b96-8bc3-418b-8223-7fedec7da6a1.png"
                  alt="Washing machine repair"
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed">
              Book a same-day drum repair with Dubai&apos;s trusted technicians. Transparent pricing,
              genuine parts and a full warranty — guaranteed.
            </p>

            <div className="flex flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href={`tel:${PHONE}`}
                style={{ backgroundColor: '#f2b134' }}
                className="rounded-full text-neutral-900 font-bold px-6 py-3.5 flex items-center justify-center gap-2.5 text-sm shadow-lg whitespace-nowrap"
              >
                <Phone className="h-4.5 w-4.5 stroke-[2.5]" /> Call Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="rounded-full bg-neutral-900 text-white font-bold px-6 py-3.5 flex items-center justify-center gap-2.5 text-sm border border-neutral-800 hover:bg-neutral-800 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="h-4.5 w-4.5 stroke-[2.5]" /> WhatsApp Us
              </motion.a>
            </div>
          </div>

          {/* ---- DESKTOP LAYOUT (lg and up) ---- */}
          <div className="hidden lg:flex relative z-10 flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-display font-extrabold text-[44px] text-neutral-900 leading-[1.1] tracking-tight mb-4">
                Drum making noise? <span className="text-[#c8901f]">We&apos;ll fix it today.</span>
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed">
                Book a same-day drum repair with Dubai&apos;s trusted technicians. Transparent pricing,
                genuine parts and a full warranty — guaranteed.
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 shrink-0 mr-4">
              <div className="relative w-96 h-96 -mt-44 -mb-28 mx-auto">
                <Image
                  src="/94ae7b96-8bc3-418b-8223-7fedec7da6a1.png"
                  alt="Washing machine repair technician"
                  fill
                  sizes="384px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-row gap-3.5">
                <motion.a
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  href={`tel:${PHONE}`}
                  style={{ backgroundColor: '#f2b134' }}
                  className="rounded-full text-neutral-900 font-bold px-8 py-4 flex items-center justify-center gap-2.5 text-sm shadow-lg whitespace-nowrap"
                >
                  <Phone className="h-4.5 w-4.5 stroke-[2.5]" /> Call Now
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="rounded-full bg-neutral-900 text-white font-bold px-8 py-4 flex items-center justify-center gap-2.5 text-sm border border-neutral-800 hover:bg-neutral-800 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="h-4.5 w-4.5 stroke-[2.5]" /> WhatsApp Us
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>&#8627; How It Works</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-4">
              Our Drum Repair Process
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed">
              A clear, six-step process designed to restore your washing machine drum to smooth, quiet operation —
              with no guesswork and no hidden costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative bg-white border border-neutral-200/70 rounded-2xl p-7 overflow-hidden group hover:border-[#f2b134] hover:shadow-lg transition-all"
              >
                <span className="absolute top-5 right-6 font-display font-extrabold text-5xl text-neutral-100 group-hover:text-[#f2b134]/20 transition-colors select-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#f2b134] flex items-center justify-center text-neutral-900 mb-5 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-neutral-900 font-bold text-lg mb-2 font-display relative z-10">{step.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INCLUDED ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>&#8627; Whats Included</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-6">
              A Complete Drum Service
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed mb-10 max-w-lg">
              Every drum repair booking includes a full inspection of the entire drum assembly — not
              just a quick fix. Here&apos;s exactly what your visit covers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {INCLUDED.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#c8901f] shrink-0 mt-0.5" />
                  <span className="text-neutral-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              href={`tel:${PHONE}`}
              style={{ backgroundColor: '#f2b134' }}
              className="inline-flex mt-10 rounded-full text-neutral-900 font-bold px-7 py-3.5 items-center gap-2.5 text-sm shadow-lg"
            >
              <Phone className="h-4.5 w-4.5 stroke-[2.5]" /> Book This Service
            </motion.a>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden border border-neutral-200 shadow-2xl">
              <Image
                src="/Complete Washing Machine Drum Repair Service.png"
                alt="Washing machine working perfectly after drum repair"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>&#8627; Why Choose Us</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1]">
              Dubai&apos;s Drum Repair Specialists
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY.map((w, idx) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white border border-neutral-200/70 rounded-2xl p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1E1E1E] flex items-center justify-center text-[#f2b134] mx-auto mb-5">
                  {w.icon}
                </div>
                <h3 className="font-bold text-neutral-900 text-lg mb-2 font-display">{w.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXPERTISE + IMAGE (light) ============ */}
      <section className="w-full bg-[#FAF9F5] border-t border-neutral-200/60 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>&#8627; Maintenance Tips</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-6">
              Keep Your Drum in Top Shape
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed mb-8 max-w-lg">
              A few simple habits keep your washing machine drum running smoothly between professional
              visits — and help you spot trouble before it becomes a costly repair.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Filter className="h-5 w-5" />, title: 'Avoid Overloading', desc: 'Heavy loads strain bearings, the spider arm and suspension — stick to the recommended weight limit.' },
                { icon: <Waves className="h-5 w-5" />, title: 'Listen for Changes', desc: 'New rumbling, grinding or scraping sounds often signal bearing wear — catch it early before it worsens.' },
                { icon: <Droplets className="h-5 w-5" />, title: 'Remove Foreign Objects', desc: 'Check pockets for coins, keys and small items that can damage drum paddles and the inner surface.' },
                { icon: <Gauge className="h-5 w-5" />, title: 'Run Monthly Cleaning Cycles', desc: 'A hot empty wash with drum cleaner prevents mineral build-up and corrosion on the drum surface.' },
              ].map((tip) => (
                <div key={tip.title} className="bg-white border border-neutral-200/70 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-lg bg-[#f2b134]/15 flex items-center justify-center text-[#c8901f] mb-3.5">
                    {tip.icon}
                  </div>
                  <h3 className="font-bold text-neutral-900 text-[15px] mb-1.5 font-display">{tip.title}</h3>
                  <p className="text-neutral-500 text-[13px] leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden border border-neutral-200 shadow-2xl">
              <Image
                src="/Keep Your Washing Machine Drum Running Smoothly.png"
                alt="Well-maintained washing machine drum in Dubai"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="absolute -bottom-6 right-4 sm:-right-6 bg-[#1E1E1E] rounded-2xl shadow-xl px-6 py-5 text-center"
            >
              <p className="font-display font-extrabold text-3xl text-[#f2b134] leading-none">10+</p>
              <p className="text-neutral-400 text-xs mt-1.5">Years of experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ DIAGNOSTIC TABLE ============ */}
      <section className="w-full bg-[#FAF9F5] py-20 sm:py-28 border-t border-neutral-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-left max-w-3xl mb-12">
            <span className="text-[#f2b134] font-mono text-[11px] tracking-widest uppercase mb-3 block">
              DRUM DIAGNOSTIC &amp; REPAIR BENCHMARKS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight leading-none mb-4">
              Drum Fault &amp; Repair Matrix
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-sans">
              A clear breakdown of the most common drum faults we resolve, the genuine OEM parts
              involved, and realistic speed benchmarks for restoring smooth drum operation.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block w-full overflow-hidden border border-neutral-200/60 bg-white rounded-3xl shadow-sm">
            <table className="w-full table-auto border-collapse text-left font-sans">
              <thead>
                <tr className="bg-neutral-50/75 border-b border-neutral-200/30 text-neutral-450 text-xs font-mono uppercase tracking-wider">
                  <th className="py-5 px-6 font-bold">Drum Fault</th>
                  <th className="py-5 px-6 font-bold">Symptom &amp; Scope</th>
                  <th className="py-5 px-6 font-bold">Genuine Parts &amp; Fix</th>
                  <th className="py-5 px-6 font-bold text-center">Service Speed</th>
                </tr>
              </thead>
              <tbody className="text-sm text-neutral-650 divide-y divide-neutral-100">
                {[
                  { num: '01', name: 'Bearing Collapse', problem: 'Loud grinding at high RPM, drum has excessive play and wobble, water leaking through rear seal.', parts: 'OEM Drum Bearing Kit & Shaft Seal Assembly', speed: '24-48 Hours', color: 'emerald', pulse: true },
                  { num: '02', name: 'Spider Arm Fracture', problem: 'Drum detaches from rear support, severe wobble, metallic banging during any cycle phase.', parts: 'Spider Arm / Cross Bracket Assembly Replacement', speed: '24-48 Hours', color: 'amber', pulse: false },
                  { num: '03', name: 'Drum Paddle Damage', problem: 'Loose, cracked or missing paddles causing clothes to snag, tear or wash unevenly.', parts: 'OEM Drum Paddle (Lifter) Replacement Set', speed: 'Same Day', color: 'blue', pulse: false },
                  { num: '04', name: 'Shaft Seal Failure', problem: 'Water bypassing the shaft seal, reaching bearings and causing premature bearing wear.', parts: 'Shaft Seal Replacement & Bearing Inspection', speed: 'Same Day', color: 'violet', pulse: false },
                  { num: '05', name: 'Drum Corrosion', problem: 'Rust stains on laundry, pitting on inner drum surface from mineral deposits and moisture.', parts: 'Inner Drum Surface Treatment or Drum Replacement', speed: '24-48 Hours', color: 'neutral', pulse: false },
                ].map((row) => (
                  <tr key={row.num} className="hover:bg-neutral-50/40 transition-colors duration-150">
                    <td className="py-5 px-6 font-bold text-neutral-900 font-display text-[15px]">
                      {row.num} . {row.name}
                    </td>
                    <td className="py-5 px-6 leading-relaxed max-w-xs text-neutral-500 font-sans">
                      {row.problem}
                    </td>
                    <td className="py-5 px-6 font-mono text-xs text-neutral-600">
                      {row.parts}
                    </td>
                    <td className="py-5 px-6 text-center">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold leading-none border bg-${row.color}-50 text-${row.color}-700 border-${row.color}-100/50`}>
                        <span className={`h-1.5 w-1.5 rounded-full bg-${row.color}-500 ${row.pulse ? 'animate-pulse' : ''}`} />
                        {row.speed}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden flex flex-col gap-4">
            {[
              { num: '01', name: 'Bearing Collapse', problem: 'Loud grinding at high RPM, drum has excessive play and wobble, water leaking through rear seal.', parts: 'OEM Drum Bearing Kit & Shaft Seal Assembly', speed: '24-48 Hours', dotColor: 'bg-emerald-500', badgeBg: 'bg-emerald-50', badgeText: 'text-emerald-700', badgeBorder: 'border-emerald-100/50' },
              { num: '02', name: 'Spider Arm Fracture', problem: 'Drum detaches from rear support, severe wobble, metallic banging during any cycle phase.', parts: 'Spider Arm / Cross Bracket Assembly Replacement', speed: '24-48 Hours', dotColor: 'bg-amber-500', badgeBg: 'bg-amber-50', badgeText: 'text-amber-700', badgeBorder: 'border-amber-100/50' },
              { num: '03', name: 'Drum Paddle Damage', problem: 'Loose, cracked or missing paddles causing clothes to snag, tear or wash unevenly.', parts: 'OEM Drum Paddle (Lifter) Replacement Set', speed: 'Same Day', dotColor: 'bg-blue-500', badgeBg: 'bg-blue-50', badgeText: 'text-blue-700', badgeBorder: 'border-blue-100/50' },
              { num: '04', name: 'Shaft Seal Failure', problem: 'Water bypassing the shaft seal, reaching bearings and causing premature bearing wear.', parts: 'Shaft Seal Replacement & Bearing Inspection', speed: 'Same Day', dotColor: 'bg-violet-400', badgeBg: 'bg-violet-50', badgeText: 'text-violet-700', badgeBorder: 'border-violet-100/50' },
              { num: '05', name: 'Drum Corrosion', problem: 'Rust stains on laundry, pitting on inner drum surface from mineral deposits and moisture.', parts: 'Inner Drum Surface Treatment or Drum Replacement', speed: '24-48 Hours', dotColor: 'bg-neutral-500', badgeBg: 'bg-neutral-100', badgeText: 'text-neutral-700', badgeBorder: 'border-neutral-200' },
            ].map((row) => (
              <div key={row.num} className="bg-white border border-neutral-200/60 rounded-2xl p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h4 className="font-bold text-neutral-900 font-display text-[15px] leading-tight">
                    {row.num} . {row.name}
                  </h4>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${row.badgeBg} ${row.badgeText} text-[10px] font-mono font-bold leading-none border ${row.badgeBorder} shrink-0`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${row.dotColor}`} />
                    {row.speed}
                  </span>
                </div>
                <p className="text-neutral-500 text-[13px] leading-relaxed mb-3">{row.problem}</p>
                <p className="text-neutral-600 font-mono text-[11px] leading-relaxed">{row.parts}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ (home-page style) ============ */}
      <section className="w-full bg-[#FAF9F5] pb-24 sm:pb-32 pt-20 sm:pt-28 border-t border-neutral-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#f2b134] font-mono text-[11px] tracking-widest uppercase mb-3 block">
              REPAIR INTELLIGENCE &amp; EXPERT ADVICE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight leading-none mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-sans">
              Get immediate professional answers to common washing machine drum issues and quick diagnostic guidance.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-neutral-200/65 bg-white overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 font-display font-bold text-neutral-900 hover:text-neutral-950 hover:bg-neutral-50/50 transition-colors focus:outline-none"
                  >
                    <span className="text-base sm:text-lg leading-snug">{item.q}</span>
                    <span className={`shrink-0 h-8 w-8 rounded-full bg-neutral-50 border border-neutral-200/50 flex items-center justify-center text-neutral-500 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#f2b134]/10 text-[#f2b134] border-[#f2b134]/20' : ''}`}>
                      <ChevronDown className="h-4.5 w-4.5 stroke-[2.5]" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 text-neutral-550 leading-relaxed text-sm sm:text-[15px] border-t border-neutral-100 pt-4 font-sans">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ GET IN TOUCH / CONTACT FORM ============ */}
      <section className="w-full bg-[#FAF9F5] border-t border-neutral-200/40 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-5 flex flex-col gap-5 text-left">
              <div className="flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#f2b134] tracking-widest">
                <Phone className="h-3.5 w-3.5" />
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-neutral-900 leading-none">
                Need A Repair?
              </h2>
              <h3 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-neutral-400 leading-none">
                {"Let's Fix it."}
              </h3>
              <p className="text-neutral-500 text-[15px] sm:text-base leading-relaxed font-sans max-w-md mt-2">
                Fill in the form and our team will get back to you within 30 minutes. Same-day washing machine drum repair available across all areas in Dubai.
              </p>

              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-3 text-neutral-700 text-sm font-medium">
                  <span className="p-2 rounded-lg bg-[#f2b134]/10"><Phone className="h-4 w-4 text-[#f2b134]" /></span>
                  <span>+971 50 123 4567</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-700 text-sm font-medium">
                  <span className="p-2 rounded-lg bg-[#f2b134]/10"><Mail className="h-4 w-4 text-[#f2b134]" /></span>
                  <span>info@atozappliancesrepair.com</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-700 text-sm font-medium">
                  <span className="p-2 rounded-lg bg-[#f2b134]/10"><Clock className="h-4 w-4 text-[#f2b134]" /></span>
                  <span>Available 7 days a week, 8 AM – 10 PM</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP, '_blank'); }}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-neutral-800">Full Name <span className="text-[#f2b134]">*</span></label>
                    <input type="text" required placeholder="Enter your full name" className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f2b134] focus:border-transparent transition-all placeholder-neutral-400" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-neutral-800">Email <span className="text-[#f2b134]">*</span></label>
                    <input type="email" required placeholder="Enter your email" className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f2b134] focus:border-transparent transition-all placeholder-neutral-400" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-neutral-800">Phone <span className="text-[#f2b134]">*</span></label>
                  <input type="tel" required placeholder="Enter your phone number" className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f2b134] focus:border-transparent transition-all placeholder-neutral-400" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-neutral-800">Message</label>
                  <textarea rows={5} placeholder="Describe your drum issue (e.g. loud grinding noise, drum won't turn, clothes getting torn...)" className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f2b134] focus:border-transparent transition-all placeholder-neutral-400 resize-y" />
                </div>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <p className="text-xs text-neutral-400 max-w-xs leading-relaxed">
                    By submitting you agree to our <span className="text-[#f2b134] font-semibold">Terms of Service</span> and <span className="text-[#f2b134] font-semibold">Privacy Policy</span>
                  </p>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{ backgroundColor: '#f2b134' }}
                    className="rounded-full text-neutral-900 font-bold px-8 py-3.5 text-sm shadow-lg hover:brightness-105 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Send message</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ============ MARQUEE BAR ============ */}
      <div className="w-full py-6 sm:py-8 overflow-hidden select-none">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <div key={`m-${i}`} className="flex items-center gap-6 sm:gap-8 mx-4 sm:mx-6 shrink-0">
              <span style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }} className="text-[32px] sm:text-[50px] md:text-[65px] text-neutral-900 tracking-tight uppercase leading-none">GET STARTED TODAY</span>
              <span className="inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-[#f2b134] shrink-0 shadow-md">
                <Phone className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-neutral-900 stroke-[2.5]" />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ============ FOOTER ============ */}
      <footer className="w-full bg-[#111111] text-white mt-auto">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-16 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            <div className="flex flex-col gap-5">
              <div className="relative h-28 w-80">
                <Image src={LOGO_URL} alt="A To Z Appliances Repair Logo" fill className="object-contain object-left" referrerPolicy="no-referrer" />
              </div>
              <p className="text-neutral-500 text-[13px] leading-relaxed">
                Dubai&apos;s trusted washing machine repair service. Same-day repairs with genuine parts and certified technicians.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Services</h4>
              <div className="w-8 h-0.5 bg-[#f2b134] rounded-full" />
              <ul className="flex flex-col gap-2.5 text-neutral-500 text-[13px]">
                <Link href="/drainage-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Drainage &amp; Pump Repair</li></Link>
                <Link href="/spin-cycle-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Spin Cycle Repair</li></Link>
                <Link href="/water-leakage-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Water Leakage Repair</li></Link>
                <li className="text-[#f2b134]">Drum &amp; Bearing Repair</li>
                <li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Control Board Repair</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Areas We Serve</h4>
              <div className="w-8 h-0.5 bg-[#f2b134] rounded-full" />
              <ul className="flex flex-col gap-2.5 text-neutral-500 text-[13px]">
                <li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Dubai Marina</li>
                <li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Downtown Dubai</li>
                <li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">JBR &amp; JLT</li>
                <li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Al Barsha &amp; Al Quoz</li>
                <li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Deira &amp; Bur Dubai</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Get In Touch</h4>
              <div className="w-8 h-0.5 bg-[#f2b134] rounded-full" />
              <div className="flex flex-col gap-4 text-[13px]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-neutral-800/80 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-[#f2b134]" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-[11px] uppercase tracking-wider">Phone</p>
                    <p className="text-white">+971 50 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-neutral-800/80 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 text-[#f2b134]" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-[11px] uppercase tracking-wider">Email</p>
                    <p className="text-white">info@atozrepair.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-neutral-800/80 flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4 text-[#f2b134]" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-[11px] uppercase tracking-wider">Hours</p>
                    <p className="text-white">7 Days &middot; 8 AM – 10 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-neutral-800/80 flex items-center justify-center shrink-0">
                    <Globe className="h-4 w-4 text-[#f2b134]" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-[11px] uppercase tracking-wider">Location</p>
                    <p className="text-white">Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800/60">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-neutral-600 text-xs">&copy; 2026 Washing Machine Repair Experts. All rights reserved.</p>
            <div className="flex items-center gap-6 text-neutral-600 text-xs">
              <span className="hover:text-neutral-400 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-neutral-400 transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
