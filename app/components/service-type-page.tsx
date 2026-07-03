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
  Settings,
  Cpu,
  Building2,
  Box,
  CircleDot,
  Hand,
  Cloud,
  ArrowUpCircle,
  Columns2,
  MapPin,
  WashingMachine,
} from 'lucide-react';
import { BRANDS as BRAND_LIST } from '../brands/brand-data';

const LOGO_URL =
  'https://res.cloudinary.com/dbvjzyevy/image/upload/v1782108374/Red_and_Yellow_Modern_Simple_Application_Logogram_250_x_150_px_1_svnokc.png';

const PHONE = '+971508931985';
const WHATSAPP = 'https://wa.me/971508931985';

const NAV_SERVICES = [
  { title: 'Drainage Repair', icon: <Droplets className="h-4 w-4" />, href: '/drainage-repair' },
  { title: 'Spin Cycle Repair', icon: <RotateCw className="h-4 w-4" />, href: '/spin-cycle-repair' },
  { title: 'Water Leakage Repair', icon: <ShieldCheck className="h-4 w-4" />, href: '/water-leakage-repair' },
  { title: 'Drum Repair', icon: <Wrench className="h-4 w-4" />, href: '/drum-repair' },
  { title: 'Door Lock Repair', icon: <Lock className="h-4 w-4" />, href: '/door-lock-repair' },
  { title: 'Noise Repair', icon: <Volume2 className="h-4 w-4" />, href: '/noise-repair' },
  { title: 'Power Fault Repair', icon: <Zap className="h-4 w-4" />, href: '/power-fault-repair' },
  { title: 'Water Inlet Repair', icon: <Droplet className="h-4 w-4" />, href: '/water-inlet-repair' },
  { title: 'Automatic Repair', icon: <Settings className="h-4 w-4" />, href: '/automatic-washing-machine-repair' },
  { title: 'Inverter Repair', icon: <Cpu className="h-4 w-4" />, href: '/inverter-motor-washing-machine-repair' },
  { title: 'Commercial Repair', icon: <Building2 className="h-4 w-4" />, href: '/commercial-washing-machine-repair' },
  { title: 'Freestanding Repair', icon: <Box className="h-4 w-4" />, href: '/freestanding-washing-machine-repair' },
  { title: 'Front-Load Repair', icon: <CircleDot className="h-4 w-4" />, href: '/front-load-washing-machine-repair' },
  { title: 'Manual Repair', icon: <Hand className="h-4 w-4" />, href: '/manual-washing-machine-repair' },
  { title: 'Steam Repair', icon: <Cloud className="h-4 w-4" />, href: '/steam-wash-washing-machine-repair' },
  { title: 'Top-Load Repair', icon: <ArrowUpCircle className="h-4 w-4" />, href: '/top-load-washing-machine-repair' },
  { title: 'Twin-Tub Repair', icon: <Columns2 className="h-4 w-4" />, href: '/twin-tub-washing-machine-repair' },
];

// Top brands shown in the nav dropdown (logos fetched token-free by domain).
const NAV_BRANDS = BRAND_LIST.slice(0, 9).map((b) => ({ name: b.name, domain: b.domain, href: `/${b.slug}` }));

const brandLogoUrl = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

function NavBrandLogo({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = React.useState(false);
  return failed ? (
    <span className="w-7 h-7 rounded-md bg-neutral-800 text-[#f2b134] flex items-center justify-center font-display font-bold text-[13px] select-none">
      {name.charAt(0)}
    </span>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={brandLogoUrl(domain)}
      alt={`${name} washing machine repair Dubai`}
      className="w-7 h-7 object-contain"
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}

const SYMPTOM_ICONS = [
  <AlertTriangle key="i0" className="h-5 w-5" />,
  <Gauge key="i1" className="h-5 w-5" />,
  <Waves key="i2" className="h-5 w-5" />,
  <RotateCw key="i3" className="h-5 w-5" />,
  <Filter key="i4" className="h-5 w-5" />,
  <Droplets key="i5" className="h-5 w-5" />,
];

const PROCESS_ICONS = [
  <Phone key="p0" className="h-5 w-5" />,
  <Truck key="p1" className="h-5 w-5" />,
  <Search key="p2" className="h-5 w-5" />,
  <Wrench key="p3" className="h-5 w-5" />,
  <ClipboardCheck key="p4" className="h-5 w-5" />,
  <BadgeCheck key="p5" className="h-5 w-5" />,
];

const WHY_ICONS = [
  <Timer key="w0" className="h-6 w-6" />,
  <BadgeCheck key="w1" className="h-6 w-6" />,
  <ShieldCheck key="w2" className="h-6 w-6" />,
  <Wrench key="w3" className="h-6 w-6" />,
  <Droplets key="w4" className="h-6 w-6" />,
  <CheckCircle2 key="w5" className="h-6 w-6" />,
];

const TIP_ICONS = [
  <Wrench key="t0" className="h-5 w-5" />,
  <Filter key="t1" className="h-5 w-5" />,
  <Waves key="t2" className="h-5 w-5" />,
  <Gauge key="t3" className="h-5 w-5" />,
  <Droplets key="t4" className="h-5 w-5" />,
  <CheckCircle2 key="t5" className="h-5 w-5" />,
];

const DIAG_BADGES = [
  { dot: 'bg-emerald-500', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100/50', pulse: true },
  { dot: 'bg-amber-500', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-100/50', pulse: false },
  { dot: 'bg-blue-500', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-100/50', pulse: false },
  { dot: 'bg-violet-400', bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-100/50', pulse: false },
  { dot: 'bg-neutral-500', bg: 'bg-neutral-100', text: 'text-neutral-700', border: 'border-neutral-200', pulse: false },
];

export interface BrandInfo {
  name: string;
  specialization: string;
  issues: { title: string; desc: string }[];
}

export interface DiagRow {
  name: string;
  symptoms: string;
  cause: string;
  solution: string;
  cost: string;
}

export interface UrgencyItem {
  title: string;
  why: string;
  notice: string;
  cost: string;
}

export interface ServiceTypeData {
  slug: string;
  breadcrumb: string;
  badge: string;
  h1Pre: string;
  h1Highlight: string;
  h1Post: string;
  heroDesc: string;
  heroImage: string;
  heroImageAlt: string;
  heroStat: { value: string; label: string };
  heroBadge: string;
  stats: { value: string; label: string }[];
  serviceNoun: string;
  symptomsHeading: string;
  symptomsIntro: string;
  symptoms: { title: string; desc: string }[];
  causesHeading: string;
  causesIntro: string;
  causesImage: string;
  causes: string[];
  ctaTitle: string;
  ctaHighlight: string;
  ctaDesc: string;
  brandsHeading: string;
  brandsIntro: string;
  brands: BrandInfo[];
  processHeading: string;
  processIntro: string;
  includedHeading: string;
  includedIntro: string;
  included: string[];
  includedImage: string;
  whyHeading: string;
  why: { title: string; desc: string }[];
  tipsHeading: string;
  tipsIntro: string;
  tips: { title: string; desc: string }[];
  tipsImage: string;
  diagHeading: string;
  diagIntro: string;
  diagRows: DiagRow[];
  urgency: {
    critical: UrgencyItem[];
    urgent: UrgencyItem[];
    preventive: UrgencyItem[];
  };
  faqIntro: string;
  faqs: { q: string; a: string }[];
  areas: string[];
  formHint: string;
}

function CtaButtons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
      <a
        href={`tel:${PHONE}`}
        className="rounded-full text-neutral-900 font-bold px-7 py-3.5 flex items-center gap-2.5 text-sm shadow-md transition-all hover:brightness-105"
        style={{ backgroundColor: '#f2b134' }}
      >
        <Phone className="h-4.5 w-4.5 stroke-[2.5]" /> Book A Repair
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white text-neutral-900 font-bold px-7 py-3.5 flex items-center gap-2.5 text-sm shadow-sm border border-neutral-200 hover:bg-neutral-50 transition-colors"
      >
        <MessageCircle className="h-4.5 w-4.5 stroke-[2.5]" /> WhatsApp Us
      </a>
    </div>
  );
}

export default function ServiceTypePage({ data }: { data: ServiceTypeData }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [brandsOpen, setBrandsOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const process = [
    { title: 'Contact & Booking', desc: `Call or message us and we book a same-day slot for your ${data.serviceNoun} repair anywhere in Dubai.` },
    { title: 'Technician Dispatch', desc: `A certified technician arrives at your door with the most common ${data.serviceNoun} spare parts ready.` },
    { title: 'On-Site Diagnosis', desc: `We test every relevant component to find the exact fault in your ${data.serviceNoun} — then share a clear quote.` },
    { title: 'Professional Repair', desc: 'The faulty part is repaired or replaced using genuine OEM components so your machine works like new.' },
    { title: 'Full Cycle Test', desc: 'We run a complete wash cycle to make sure every function works perfectly before we leave.' },
    { title: 'Service Warranty', desc: 'Every repair is backed by a 12-month workmanship warranty and a 2-year warranty on genuine parts.' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-neutral-900 flex flex-col font-sans selection:bg-[#f2b134]/30">

      {/* ============ HEADER ============ */}
      <header className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 z-40 relative">
        <div
          style={{ backgroundColor: '#1E1E1E' }}
          className="w-full flex items-center justify-between py-4 px-5 md:px-8 shadow-xl rounded-b-3xl border-x border-b border-neutral-800"
        >
          <div className="flex items-center min-w-0">
            <Link href="/" className="relative h-16 w-48 sm:h-20 sm:w-60 lg:h-24 lg:w-72 -my-4 sm:-my-6 flex items-center cursor-pointer select-none z-10 shrink-0 transition-transform hover:scale-[1.02]">
              <Image src={LOGO_URL} alt="Washing Machine Experts" fill sizes="288px" className="object-contain object-left" referrerPolicy="no-referrer" priority />
            </Link>

            <div className="w-[1.5px] h-6 bg-neutral-700/80 mx-3 lg:mx-5 shrink-0" />

            <nav className="hidden md:flex items-center gap-4 lg:gap-6 font-sans text-[15px] lg:text-[16px] font-medium text-neutral-300 whitespace-nowrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>

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
                      className="absolute top-10 -left-40 w-[560px] bg-[#1E1E1E] border border-neutral-800 rounded-2xl shadow-2xl p-4 z-50 max-h-[75vh] overflow-y-auto"
                    >
                      <div className="px-1 pb-3 mb-3 border-b border-neutral-800 flex items-center justify-between">
                        <span className="text-neutral-500 font-mono text-[10px] tracking-wider uppercase">Our Services</span>
                        <span className="text-[#f2b134] text-[10px] font-mono">{NAV_SERVICES.length} Services</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {NAV_SERVICES.map((s) => {
                          const isActive = s.href === `/${data.slug}`;
                          return (
                            <Link
                              key={s.title}
                              href={s.href}
                              onClick={() => setServicesOpen(false)}
                              className={`flex flex-col items-center text-center gap-2 px-3 py-3.5 rounded-xl transition-all group ${isActive ? 'bg-neutral-800' : 'hover:bg-neutral-800'}`}
                            >
                              <span className="w-9 h-9 rounded-lg bg-neutral-800 group-hover:bg-[#f2b134]/15 flex items-center justify-center text-[#f2b134] shrink-0 transition-colors">
                                {s.icon}
                              </span>
                              <span className={`text-[12px] font-medium leading-tight transition-colors ${isActive ? 'text-[#f2b134]' : 'text-neutral-300 group-hover:text-white'}`}>{s.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative">
                <button onClick={() => setBrandsOpen(!brandsOpen)} className="hover:text-white flex items-center gap-1 cursor-pointer">
                  Brands <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${brandsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {brandsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-10 -left-24 w-[340px] bg-[#1E1E1E] border border-neutral-800 rounded-2xl shadow-2xl p-4 z-50"
                    >
                      <div className="px-1 pb-3 mb-3 border-b border-neutral-800 flex items-center justify-between">
                        <span className="text-neutral-500 font-mono text-[10px] tracking-wider uppercase">Brands We Repair</span>
                        <span className="text-[#f2b134] text-[10px] font-mono">38+ Brands</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {NAV_BRANDS.map((brand) => (
                          <Link
                            key={brand.name}
                            href={brand.href}
                            onClick={() => setBrandsOpen(false)}
                            className="flex flex-col items-center text-center gap-2 px-2 py-3 rounded-xl bg-white/[0.03] hover:bg-neutral-800 transition-all group"
                          >
                            <span className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 p-1.5">
                              <NavBrandLogo name={brand.name} domain={brand.domain} />
                            </span>
                            <span className="text-[11px] font-medium leading-tight text-neutral-300 group-hover:text-white transition-colors">{brand.name}</span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/brands"
                        onClick={() => setBrandsOpen(false)}
                        style={{ backgroundColor: '#f2b134' }}
                        className="mt-3 w-full flex items-center justify-center gap-2 rounded-xl text-neutral-900 font-bold text-[13px] py-3 hover:brightness-105 transition-all"
                      >
                        Show All Brands
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          <div className="flex items-center gap-3 md:gap-4 shrink-0 ml-2">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${PHONE}`}
              style={{ backgroundColor: '#f2b134' }}
              className="hidden md:flex rounded-full text-neutral-900 font-bold px-5 lg:px-6 py-2.5 items-center gap-2 text-sm shadow-lg hover:brightness-105 transition-all shrink-0"
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
              className="md:hidden fixed top-4 left-4 right-4 z-40 bg-[#1E1E1E] border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
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
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Brands', href: '/brands' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Contact', href: '/contact' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="w-full text-left py-4 text-[17px] font-semibold flex items-center justify-between text-neutral-300 border-b border-neutral-800/40"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Services Dropdown */}
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full text-left py-4 text-[17px] font-semibold flex items-center justify-between text-neutral-300 border-b border-neutral-800/40"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-[#f2b134]' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-3 gap-1.5 pt-2 pb-3">
                        {NAV_SERVICES.map((s) => (
                          <Link
                            key={s.title}
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex flex-col items-center text-center gap-2 px-2 py-3 rounded-xl hover:bg-neutral-800 transition-all group"
                          >
                            <span className="w-9 h-9 rounded-lg bg-neutral-800 group-hover:bg-[#f2b134]/15 flex items-center justify-center text-[#f2b134] shrink-0 transition-colors">
                              {s.icon}
                            </span>
                            <span className="text-[12px] font-medium leading-tight text-neutral-300 group-hover:text-white transition-colors">{s.title}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
          <span className="text-[#c8901f]">{data.breadcrumb}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] text-[#f2b134] text-[11px] font-mono uppercase tracking-widest mb-6">
              <WashingMachine className="h-3.5 w-3.5" />
              <span>{data.badge}</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] tracking-tight text-neutral-900 mb-6">
              <span className="relative inline-block">
                <span className="relative z-10">{data.h1Highlight}</span>
                <span className="absolute bottom-1.5 left-0 right-0 h-3.5 bg-[#f2b134]/40 -rotate-1 z-0" />
              </span>
              <span className="block">{data.h1Post}</span>
            </h1>

            <p className="text-neutral-600 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mb-8">
              {data.heroDesc}
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
                <span className="text-sm text-neutral-600 font-medium">4.8 / 5 rated</span>
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
                src={data.heroImage}
                alt={data.heroImageAlt}
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
                <p className="text-2xl font-extrabold font-display text-neutral-900 leading-none">{data.heroStat.value}</p>
                <p className="text-xs text-neutral-500 mt-1">{data.heroStat.label}</p>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              className="absolute top-5 right-5 bg-[#f2b134] rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4 text-neutral-900" />
              <span className="text-xs font-bold text-neutral-900">{data.heroBadge}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            {data.stats.map((stat) => (
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
              <span>↳ Warning Signs</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-4">
              {data.symptomsHeading}
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed">
              {data.symptomsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.symptoms.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="group bg-white border border-neutral-200/70 rounded-2xl p-6 hover:border-[#f2b134] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF9F5] group-hover:bg-[#f2b134] flex items-center justify-center text-[#c8901f] group-hover:text-neutral-900 mb-5 transition-colors">
                  {SYMPTOM_ICONS[idx % SYMPTOM_ICONS.length]}
                </div>
                <h3 className="font-bold text-neutral-900 text-[17px] mb-2 font-display">{s.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <CtaButtons />
        </div>
      </section>

      {/* ============ CAUSES + IMAGE ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden border border-neutral-200 shadow-xl">
              <Image
                src={data.causesImage}
                alt={data.causesHeading}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Root Causes</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-neutral-900 leading-[1.1] mb-6">
              {data.causesHeading}
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed mb-8">
              {data.causesIntro}
            </p>
            <ul className="flex flex-col gap-4">
              {data.causes.map((c) => (
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
            <div className="flex items-start gap-4">
              <h2 className="font-display font-extrabold text-[26px] sm:text-4xl text-neutral-900 leading-[1.12] tracking-tight flex-1 mt-6 sm:mt-8">
                {data.ctaTitle} <span className="text-[#c8901f]">{data.ctaHighlight}</span>
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
              {data.ctaDesc}
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
                {data.ctaTitle} <span className="text-[#c8901f]">{data.ctaHighlight}</span>
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed">
                {data.ctaDesc}
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

      {/* ============ BRANDS WE REPAIR ============ */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Repair By Brand</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-4">
              {data.brandsHeading}
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed">
              {data.brandsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {data.brands.map((brand, idx) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.05 }}
                className="bg-white border border-neutral-200/70 rounded-2xl p-7 hover:border-[#f2b134] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#1E1E1E] flex items-center justify-center text-[#f2b134] shrink-0">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-neutral-900 text-lg font-display leading-tight">{brand.name}</h3>
                </div>
                <p className="text-neutral-500 text-[13px] leading-relaxed mb-5">
                  <span className="font-bold text-neutral-700">Brand specialization:</span> {brand.specialization}
                </p>
                <ul className="flex flex-col gap-3">
                  {brand.issues.map((issue) => (
                    <li key={issue.title} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#c8901f] shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">
                        <span className="font-semibold text-neutral-800">{issue.title}:</span>{' '}
                        <span className="text-neutral-500">{issue.desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <CtaButtons />
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ How It Works</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-4">
              {data.processHeading}
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed">
              {data.processIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative bg-[#FAF9F5] border border-neutral-200/70 rounded-2xl p-7 overflow-hidden group hover:border-[#f2b134] hover:shadow-lg transition-all"
              >
                <span className="absolute top-5 right-6 font-display font-extrabold text-5xl text-neutral-200/60 group-hover:text-[#f2b134]/20 transition-colors select-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#f2b134] flex items-center justify-center text-neutral-900 mb-5 relative z-10">
                  {PROCESS_ICONS[idx % PROCESS_ICONS.length]}
                </div>
                <h3 className="text-neutral-900 font-bold text-lg mb-2 font-display relative z-10">{step.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <CtaButtons />
        </div>
      </section>

      {/* ============ WHAT'S INCLUDED ============ */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Whats Included</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-6">
              {data.includedHeading}
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed mb-10 max-w-lg">
              {data.includedIntro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {data.included.map((item) => (
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
                src={data.includedImage}
                alt={data.includedHeading}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Why Choose Us</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1]">
              {data.whyHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.why.map((w, idx) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#FAF9F5] border border-neutral-200/70 rounded-2xl p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1E1E1E] flex items-center justify-center text-[#f2b134] mx-auto mb-5">
                  {WHY_ICONS[idx % WHY_ICONS.length]}
                </div>
                <h3 className="font-bold text-neutral-900 text-lg mb-2 font-display">{w.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
          <CtaButtons />
        </div>
      </section>

      {/* ============ MAINTENANCE TIPS + IMAGE ============ */}
      <section className="w-full bg-[#FAF9F5] border-t border-neutral-200/60 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Maintenance Tips</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-6">
              {data.tipsHeading}
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed mb-8 max-w-lg">
              {data.tipsIntro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.tips.map((tip, idx) => (
                <div key={tip.title} className="bg-white border border-neutral-200/70 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-lg bg-[#f2b134]/15 flex items-center justify-center text-[#c8901f] mb-3.5">
                    {TIP_ICONS[idx % TIP_ICONS.length]}
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
                src={data.tipsImage}
                alt={data.tipsHeading}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="absolute -bottom-6 right-4 sm:-right-6 bg-[#1E1E1E] rounded-2xl shadow-xl px-6 py-5 text-center"
            >
              <p className="font-display font-extrabold text-3xl text-[#f2b134] leading-none">12+</p>
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
              QUICK PROBLEM DIAGNOSIS GUIDE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight leading-none mb-4">
              {data.diagHeading}
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-sans">
              {data.diagIntro}
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block w-full overflow-hidden border border-neutral-200/60 bg-white rounded-3xl shadow-sm">
            <table className="w-full table-auto border-collapse text-left font-sans">
              <thead>
                <tr className="bg-neutral-50/75 border-b border-neutral-200/30 text-neutral-450 text-xs font-mono uppercase tracking-wider">
                  <th className="py-5 px-6 font-bold">Problem</th>
                  <th className="py-5 px-6 font-bold">Symptoms</th>
                  <th className="py-5 px-6 font-bold">Common Cause &amp; Fix</th>
                  <th className="py-5 px-6 font-bold text-center">Typical Cost</th>
                </tr>
              </thead>
              <tbody className="text-sm text-neutral-650 divide-y divide-neutral-100">
                {data.diagRows.map((row, idx) => {
                  const badge = DIAG_BADGES[idx % DIAG_BADGES.length];
                  return (
                    <tr key={row.name} className="hover:bg-neutral-50/40 transition-colors duration-150">
                      <td className="py-5 px-6 font-bold text-neutral-900 font-display text-[15px]">
                        {String(idx + 1).padStart(2, '0')} . {row.name}
                      </td>
                      <td className="py-5 px-6 leading-relaxed max-w-xs text-neutral-500 font-sans">
                        {row.symptoms}
                      </td>
                      <td className="py-5 px-6 leading-relaxed max-w-xs text-neutral-500 font-sans">
                        {row.cause} <span className="font-mono text-xs text-neutral-600 block mt-1">{row.solution}</span>
                      </td>
                      <td className="py-5 px-6 text-center">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold leading-none border ${badge.bg} ${badge.text} ${badge.border} whitespace-nowrap`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${badge.dot} ${badge.pulse ? 'animate-pulse' : ''}`} />
                          {row.cost}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden flex flex-col gap-4">
            {data.diagRows.map((row, idx) => {
              const badge = DIAG_BADGES[idx % DIAG_BADGES.length];
              return (
                <div key={row.name} className="bg-white border border-neutral-200/60 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="font-bold text-neutral-900 font-display text-[15px] leading-tight">
                      {String(idx + 1).padStart(2, '0')} . {row.name}
                    </h4>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${badge.bg} ${badge.text} text-[10px] font-mono font-bold leading-none border ${badge.border} shrink-0 whitespace-nowrap`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${badge.dot}`} />
                      {row.cost}
                    </span>
                  </div>
                  <p className="text-neutral-500 text-[13px] leading-relaxed mb-3">{row.symptoms} — {row.cause}</p>
                  <p className="text-neutral-600 font-mono text-[11px] leading-relaxed">{row.solution}</p>
                </div>
              );
            })}
          </div>
          <CtaButtons />
        </div>
      </section>

      {/* ============ URGENCY GUIDE ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Symptoms &amp; Solutions Guide</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-4">
              How Urgent Is Your Repair?
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed">
              This guide helps you understand what your {data.serviceNoun} symptoms mean and which issues require urgent attention.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { label: 'Critical — Repair Within 24 Hours', sub: 'These problems can cause property damage or safety hazards. Stop using your machine and call immediately.', items: data.urgency.critical, dot: 'bg-red-500', chipBg: 'bg-red-50', chipText: 'text-red-700', chipBorder: 'border-red-100' },
              { label: 'Urgent — Repair Within 48 Hours', sub: 'These problems affect machine functionality significantly and worsen over time.', items: data.urgency.urgent, dot: 'bg-amber-500', chipBg: 'bg-amber-50', chipText: 'text-amber-700', chipBorder: 'border-amber-100' },
              { label: 'Preventive — Schedule Within 1 Week', sub: 'These issues affect performance and efficiency. Address them to prevent bigger problems.', items: data.urgency.preventive, dot: 'bg-orange-400', chipBg: 'bg-orange-50', chipText: 'text-orange-700', chipBorder: 'border-orange-100' },
            ].map((col) => (
              <div key={col.label} className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5 px-1">
                  <span className={`h-2.5 w-2.5 rounded-full ${col.dot} animate-pulse`} />
                  <h3 className="font-display font-bold text-neutral-900 text-lg leading-tight">{col.label}</h3>
                </div>
                <p className="text-neutral-500 text-[13px] leading-relaxed px-1 -mt-2">{col.sub}</p>
                {col.items.map((item) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#FAF9F5] border border-neutral-200/70 rounded-2xl p-6 hover:border-[#f2b134] hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="font-bold text-neutral-900 text-[15px] font-display leading-snug">{item.title}</h4>
                      <span className={`inline-flex px-2.5 py-1 rounded-full ${col.chipBg} ${col.chipText} text-[10px] font-mono font-bold leading-none border ${col.chipBorder} shrink-0 whitespace-nowrap`}>
                        {item.cost}
                      </span>
                    </div>
                    <p className="text-neutral-600 text-[13px] leading-relaxed mb-2">
                      <span className="font-semibold text-neutral-800">Why it matters:</span> {item.why}
                    </p>
                    <p className="text-neutral-500 text-[13px] leading-relaxed">
                      <span className="font-semibold text-neutral-700">What you&apos;ll notice:</span> {item.notice}
                    </p>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
          <CtaButtons />
        </div>
      </section>

      {/* ============ FAQ ============ */}
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
              {data.faqIntro}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {data.faqs.map((item, index) => {
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
          <CtaButtons />
        </div>
      </section>

      {/* ============ SERVICE AREAS ============ */}
      <section className="w-full bg-white border-t border-neutral-200/40 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Service Areas</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-4">
              Service Areas in Dubai
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed">
              We provide same-day {data.serviceNoun} repair service throughout Dubai and surrounding areas, including:
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {data.areas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF9F5] border border-neutral-200/70 text-neutral-700 text-sm font-medium hover:border-[#f2b134] hover:bg-[#f2b134]/10 transition-all"
              >
                <MapPin className="h-3.5 w-3.5 text-[#c8901f]" /> {area}
              </span>
            ))}
          </div>
          <p className="text-center text-neutral-500 text-sm mt-8">
            Not listed? Call us anyway — we service virtually all Dubai areas.
          </p>
          <CtaButtons />
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
                Fill in the form and our team will get back to you within 30 minutes. Same-day {data.serviceNoun} repair available across all areas in Dubai.
              </p>

              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-3 text-neutral-700 text-sm font-medium">
                  <span className="p-2 rounded-lg bg-[#f2b134]/10"><Phone className="h-4 w-4 text-[#f2b134]" /></span>
                  <span>+971 50 893 1985</span>
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
                  <textarea rows={5} placeholder={data.formHint} className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f2b134] focus:border-transparent transition-all placeholder-neutral-400 resize-y" />
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
                <Image src={LOGO_URL} alt="Washing Machine Experts Logo" fill className="object-contain object-left" referrerPolicy="no-referrer" />
              </div>
              <p className="text-neutral-500 text-[13px] leading-relaxed">
                Dubai&apos;s trusted washing machine repair service. Same-day repairs with genuine parts and certified technicians.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Services</h4>
              <div className="w-8 h-0.5 bg-[#f2b134] rounded-full" />
              <ul className="flex flex-col gap-2.5 text-neutral-500 text-[13px]">
                <li className="text-[#f2b134]">{data.breadcrumb}</li>
                <Link href="/automatic-washing-machine-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Automatic Washing Machine Repair</li></Link>
                <Link href="/front-load-washing-machine-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Front Load Washing Machine Repair</li></Link>
                <Link href="/top-load-washing-machine-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Top Load Washing Machine Repair</li></Link>
                <Link href="/commercial-washing-machine-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Commercial Washing Machine Repair</li></Link>
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
                    <p className="text-white">+971 50 893 1985</p>
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
