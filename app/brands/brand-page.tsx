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
  BadgeCheck,
  Search,
  AlertTriangle,
  Truck,
  ClipboardCheck,
  Gauge,
} from 'lucide-react';
import { BRANDS, BrandEntry } from './brand-data';
import { BrandContentSection } from './brand-content';

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

const NAV_BRANDS = BRANDS.slice(0, 9);

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

const bigLogoUrl = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

function HeroBrandLogo({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = React.useState(false);
  return failed ? (
    <span className="w-14 h-14 rounded-2xl bg-[#1E1E1E] text-[#f2b134] flex items-center justify-center font-display font-extrabold text-2xl select-none">
      {name.charAt(0)}
    </span>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={bigLogoUrl(domain)}
      alt={`${name} logo`}
      className="w-12 h-12 object-contain"
      loading="eager"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}

const PROCESS = [
  { icon: <Phone className="h-5 w-5" />, title: 'Contact & Booking' },
  { icon: <Truck className="h-5 w-5" />, title: 'Technician Dispatch' },
  { icon: <Search className="h-5 w-5" />, title: 'On-Site Diagnosis' },
  { icon: <Wrench className="h-5 w-5" />, title: 'Professional Repair' },
  { icon: <ClipboardCheck className="h-5 w-5" />, title: 'Full Cycle Test' },
  { icon: <BadgeCheck className="h-5 w-5" />, title: 'Service Warranty' },
];

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

export default function BrandPage({ brand }: { brand: BrandEntry }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [brandsOpen, setBrandsOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const process = [
    { desc: `Call or WhatsApp us and we book a same-day slot for your ${brand.name} washing machine repair anywhere in Dubai.` },
    { desc: `A certified technician arrives with the most common ${brand.name} spare parts ready on the van.` },
    { desc: `We test the exact ${brand.name} fault using its own error codes — then share a clear, fixed quote.` },
    { desc: `The faulty part is repaired or replaced with a genuine ${brand.name} component so the machine works like new.` },
    { desc: 'We run a full wash cycle to confirm every function works perfectly before we leave.' },
    { desc: `Your ${brand.name} repair is backed by a 12-month workmanship warranty and a 2-year genuine-parts warranty.` },
  ];

  const FAQS = [
    { q: `How much does a ${brand.name} washing machine repair cost in Dubai?`, a: `The cost depends on the fault. We charge an affordable AED 89 call-out fee (fully credited toward the repair) and give you a fixed quote on-site before any work starts — no hidden charges. Most ${brand.name} repairs fall between AED 150 and AED 700 depending on the part.` },
    { q: `Do you use genuine ${brand.name} spare parts?`, a: `Yes — 100% genuine, manufacturer-original ${brand.name} parts only, never counterfeit or refurbished. Every part carries a 2-year warranty and we show you the packaging before installation.` },
    { q: `Can you repair my ${brand.name} washing machine the same day?`, a: `In most cases, yes. We carry common ${brand.name} parts on the van, so most repairs are completed same-day. Book within 2 hours and we arrive the same day across Dubai, 24/7 including weekends and holidays.` },
    { q: `Which ${brand.name} models do you repair?`, a: `We repair the full ${brand.name} range sold in the UAE — ${brand.models}. Whether your machine is new or several years old, our technicians are trained on it.` },
    { q: `What warranty do you offer on ${brand.name} repairs?`, a: `Every ${brand.name} repair includes a 12-month workmanship warranty on labour and a 2-year warranty on genuine parts. If the same part fails within the warranty period we fix it free, with a money-back guarantee if the repair is unsuccessful.` },
  ];

  const areas = ['Dubai Marina', 'Downtown Dubai', 'JBR', 'Deira', 'Bur Dubai', 'Jumeirah', 'Arabian Ranches', 'The Meadows', 'Emirates Living', 'Dubai Hills Estate', 'Palm Jumeirah', 'Business Bay', 'Dubai Sports City', 'Mirdif', 'Karama', 'Satwa'];

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
                <button onClick={() => setServicesOpen(!servicesOpen)} className="hover:text-white flex items-center gap-1 cursor-pointer">
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
                        {NAV_SERVICES.map((sv) => (
                          <Link
                            key={sv.title}
                            href={sv.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex flex-col items-center text-center gap-2 px-3 py-3.5 rounded-xl transition-all group hover:bg-neutral-800"
                          >
                            <span className="w-9 h-9 rounded-lg bg-neutral-800 group-hover:bg-[#f2b134]/15 flex items-center justify-center text-[#f2b134] shrink-0 transition-colors">
                              {sv.icon}
                            </span>
                            <span className="text-[12px] font-medium leading-tight transition-colors text-neutral-300 group-hover:text-white">{sv.title}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative">
                <button onClick={() => setBrandsOpen(!brandsOpen)} className="hover:text-white flex items-center gap-1 cursor-pointer text-[#f2b134]">
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
                        {NAV_BRANDS.map((b) => (
                          <Link
                            key={b.name}
                            href={`/${b.slug}`}
                            onClick={() => setBrandsOpen(false)}
                            className="flex flex-col items-center text-center gap-2 px-2 py-3 rounded-xl bg-white/[0.03] hover:bg-neutral-800 transition-all group"
                          >
                            <span className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 p-1.5">
                              <NavBrandLogo name={b.name} domain={b.domain} />
                            </span>
                            <span className="text-[11px] font-medium leading-tight text-neutral-300 group-hover:text-white transition-colors">{b.name}</span>
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
                    className={`w-full text-left py-4 text-[17px] font-semibold flex items-center justify-between border-b border-neutral-800/40 ${item.href === '/brands' ? 'text-[#f2b134]' : 'text-neutral-300'}`}
                  >
                    {item.label}
                  </Link>
                ))}

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
                        {NAV_SERVICES.map((sv) => (
                          <Link
                            key={sv.title}
                            href={sv.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex flex-col items-center text-center gap-2 px-2 py-3 rounded-xl hover:bg-neutral-800 transition-all group"
                          >
                            <span className="w-9 h-9 rounded-lg bg-neutral-800 group-hover:bg-[#f2b134]/15 flex items-center justify-center text-[#f2b134] shrink-0 transition-colors">
                              {sv.icon}
                            </span>
                            <span className="text-[12px] font-medium leading-tight text-neutral-300 group-hover:text-white transition-colors">{sv.title}</span>
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
        <nav className="flex items-center gap-2 text-[13px] text-neutral-500 mb-8 sm:mb-12 font-medium flex-wrap">
          <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/brands" className="hover:text-neutral-900 transition-colors">Brands</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-[#c8901f]">{brand.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full bg-[#1E1E1E] text-[#f2b134] text-[11px] font-mono uppercase tracking-widest mb-6">
              <span className="w-6 h-6 rounded-md bg-white flex items-center justify-center p-0.5">
                <NavBrandLogo name={brand.name} domain={brand.domain} />
              </span>
              <span>{brand.tier} Brand</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] tracking-tight text-neutral-900 mb-6">
              <span className="relative inline-block">
                <span className="relative z-10">{brand.name} Washing Machine</span>
                <span className="absolute bottom-1.5 left-0 right-0 h-3.5 bg-[#f2b134]/40 -rotate-1 z-0" />
              </span>
              <span className="block">Repair in Dubai</span>
            </h1>

            <p className="text-neutral-600 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mb-8">
              {brand.intro}
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
                <ShieldCheck className="h-4 w-4 text-[#c8901f]" /> Genuine parts &amp; warranty
              </div>
            </div>
          </div>

          {/* Right - brand logo card */}
          <div className="relative">
            <div className="relative w-full rounded-[2rem] overflow-hidden border border-neutral-200 shadow-2xl bg-[#1E1E1E] aspect-[4/3.4] flex flex-col items-center justify-center gap-6 px-8">
              <div className="w-28 h-28 rounded-3xl bg-white flex items-center justify-center p-5 shadow-lg">
                <HeroBrandLogo name={brand.name} domain={brand.domain} />
              </div>
              <div className="text-center">
                <p className="font-display font-extrabold text-3xl text-white leading-tight">{brand.name}</p>
                <p className="text-[#f2b134] text-[12px] font-mono uppercase tracking-widest mt-2">{brand.tech}</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-2 sm:left-6 bg-white rounded-2xl shadow-xl border border-neutral-100 px-5 py-4 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1E1E1E] flex items-center justify-center text-[#f2b134]">
                <Gauge className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-extrabold font-display text-neutral-900 leading-none">{brand.repairsCount}</p>
                <p className="text-xs text-neutral-500 mt-1">{brand.name} repairs completed</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              className="absolute top-5 right-5 bg-[#f2b134] rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4 text-neutral-900" />
              <span className="text-xs font-bold text-neutral-900">Genuine Parts</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            {[
              { value: brand.repairsCount, label: `${brand.name} repairs completed` },
              { value: '24/7', label: 'Emergency availability' },
              { value: '12 mo', label: 'Workmanship warranty' },
              { value: '4.8★', label: 'Customer rating (247 reviews)' },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-display font-extrabold text-3xl sm:text-4xl text-neutral-900 mb-1.5">{stat.value}</p>
                <p className="text-neutral-500 text-xs sm:text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMMON FAULTS ============ */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Common {brand.name} Faults</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-4">
              {brand.name} Problems We Fix in Dubai
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed">
              These are the {brand.name} washing machine faults our technicians see most often across Dubai — each
              with a clear cause and a fixed, same-day quote.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brand.faults.map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.05 }}
                className="group bg-white border border-neutral-200/70 rounded-2xl p-6 hover:border-[#f2b134] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF9F5] group-hover:bg-[#f2b134] flex items-center justify-center text-[#c8901f] group-hover:text-neutral-900 mb-5 transition-colors">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-neutral-900 text-[17px] mb-2 font-display">{f.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
          <CtaButtons />
        </div>
      </section>

      {/* ============ WHY THIS BRAND + PROCESS ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Why Choose Us for {brand.name}</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-neutral-900 leading-[1.1] mb-6">
              {brand.name} Repair Specialists in Dubai
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed mb-8">
              {brand.whyLine} Every repair is carried out by a certified technician, uses genuine {brand.name} parts,
              and is backed by our full warranty — with transparent pricing quoted before any work begins.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <BadgeCheck className="h-5 w-5" />, title: 'Certified Technicians', desc: `Factory-standard training on ${brand.name} systems and error codes.` },
                { icon: <ShieldCheck className="h-5 w-5" />, title: 'Genuine OEM Parts', desc: `Original ${brand.name} components with a 2-year warranty.` },
                { icon: <Timer className="h-5 w-5" />, title: 'Same-Day Service', desc: 'Book within 2 hours, we arrive same day, 24/7.' },
                { icon: <Wrench className="h-5 w-5" />, title: 'Transparent Pricing', desc: 'A fixed on-site quote before any work starts.' },
              ].map((w) => (
                <div key={w.title} className="bg-[#FAF9F5] border border-neutral-200/70 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-lg bg-[#f2b134]/15 flex items-center justify-center text-[#c8901f] mb-3.5">
                    {w.icon}
                  </div>
                  <h3 className="font-bold text-neutral-900 text-[15px] mb-1.5 font-display">{w.title}</h3>
                  <p className="text-neutral-500 text-[13px] leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ How It Works</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-neutral-900 leading-[1.1] mb-6">
              Our {brand.name} Repair Process
            </h2>
            <div className="flex flex-col gap-3">
              {PROCESS.map((step, idx) => (
                <div key={step.title} className="flex items-start gap-4 bg-[#FAF9F5] border border-neutral-200/70 rounded-2xl p-4">
                  <span className="w-10 h-10 rounded-xl bg-[#f2b134] flex items-center justify-center text-neutral-900 shrink-0">
                    {step.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-neutral-900 text-[15px] font-display flex items-center gap-2">
                      <span className="text-[#c8901f] font-mono text-xs">{String(idx + 1).padStart(2, '0')}</span>
                      {step.title}
                    </h3>
                    <p className="text-neutral-500 text-[13px] leading-relaxed mt-0.5">{process[idx].desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ BRAND CONTENT (editable in brands/brand-content.tsx) ============ */}
      <BrandContentSection brand={brand} />

      {/* ============ FAQ ============ */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#f2b134] font-mono text-[11px] tracking-widest uppercase mb-3 block">
              {brand.name.toUpperCase()} REPAIR — COMMON QUESTIONS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight leading-none mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-sans">
              Everything you need to know about our {brand.name} washing machine repair service in Dubai.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="rounded-2xl border border-neutral-200/65 bg-white overflow-hidden transition-all duration-300">
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

      {/* ============ SERVICE AREAS ============ */}
      <section className="w-full bg-white border-t border-neutral-200/60 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-neutral-900 leading-[1.1] mb-3">
              {brand.name} Repair Across Dubai
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed">
              Same-day {brand.name} washing machine repair throughout Dubai and surrounding areas.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {areas.map((area) => (
              <span key={area} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF9F5] border border-neutral-200/70 text-neutral-700 text-sm font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative rounded-[2.5rem] bg-[#1E1E1E] overflow-hidden px-6 sm:px-12 lg:px-16 py-12 sm:py-16 shadow-lg text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f2b134]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-white leading-[1.1] tracking-tight mb-4">
              {brand.name} acting up? <span className="text-[#f2b134]">We&apos;ll fix it today.</span>
            </h2>
            <p className="text-neutral-400 text-[15px] sm:text-base leading-relaxed mb-8">
              Transparent pricing, genuine {brand.name} parts and a full warranty on every repair, same-day across Dubai.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <motion.a
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href={`tel:${PHONE}`}
                style={{ backgroundColor: '#f2b134' }}
                className="rounded-full text-neutral-900 font-bold px-8 py-4 flex items-center gap-2.5 text-sm shadow-lg"
              >
                <Phone className="h-4.5 w-4.5 stroke-[2.5]" /> Call Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="rounded-full bg-white text-neutral-900 font-bold px-8 py-4 flex items-center gap-2.5 text-sm hover:bg-neutral-100 transition-colors"
              >
                <MessageCircle className="h-4.5 w-4.5 stroke-[2.5]" /> WhatsApp Us
              </motion.a>
            </div>
          </div>
        </div>
      </section>

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
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Popular Brands</h4>
              <div className="w-8 h-0.5 bg-[#f2b134] rounded-full" />
              <ul className="flex flex-col gap-2.5 text-neutral-500 text-[13px]">
                {BRANDS.slice(0, 4).map((b) => (
                  <Link key={b.name} href={`/${b.slug}`}><li className={`hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer ${b.name === brand.name ? 'text-[#f2b134]' : ''}`}>{b.name} Repair</li></Link>
                ))}
                <Link href="/brands"><li className="text-[#f2b134]">All Brands</li></Link>
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
