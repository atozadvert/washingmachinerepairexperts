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
  ArrowRight,
  AlertTriangle,
} from 'lucide-react';
import { BRAND_HREF } from './brand-data';

const LOGO_URL =
  'https://res.cloudinary.com/dbvjzyevy/image/upload/v1782108374/Red_and_Yellow_Modern_Simple_Application_Logogram_250_x_150_px_1_svnokc.png';

const PHONE = '+971557873590';
const WHATSAPP = 'https://wa.me/971557873590';

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

// Official brand domains — used to fetch real logos from the logo.dev CDN.
const BRANDS: { name: string; domain: string }[] = [
  { name: 'LG', domain: 'lg.com' },
  { name: 'Samsung', domain: 'samsung.com' },
  { name: 'Bosch', domain: 'bosch-home.com' },
  { name: 'Siemens', domain: 'siemens-home.bsh-group.com' },
  { name: 'Whirlpool', domain: 'whirlpool.com' },
  { name: 'Hisense', domain: 'hisense.com' },
  { name: 'Panasonic', domain: 'panasonic.com' },
  { name: 'Haier', domain: 'haier.com' },
  { name: 'Beko', domain: 'beko.com' },
  { name: 'Hoover', domain: 'hoover.com' },
  { name: 'Super General', domain: 'sgcgroup.com' },
  { name: 'Daewoo', domain: 'daewooelectronics.co.uk' },
  { name: 'Toshiba', domain: 'toshiba.com' },
  { name: 'Hitachi', domain: 'hitachi.com' },
  { name: 'Midea', domain: 'midea.com' },
  { name: 'Ariston', domain: 'ariston.com' },
  { name: 'Miele', domain: 'miele.com' },
  { name: 'Nikai', domain: 'nikai.com' },
  { name: 'Electrolux', domain: 'electrolux.com' },
  { name: 'AEG', domain: 'aeg.com' },
  { name: 'Sharp', domain: 'sharp.eu' },
  { name: 'Gorenje', domain: 'gorenje.com' },
  { name: 'Candy', domain: 'candy-home.com' },
  { name: 'Zanussi', domain: 'zanussi.com' },
  { name: 'Indesit', domain: 'indesit.com' },
  { name: 'Akai', domain: 'akai.com' },
  { name: 'Geepas', domain: 'geepas.com' },
  { name: 'Black+Decker', domain: 'blackanddecker.com' },
  { name: 'Generaltec', domain: 'generaltec.net' },
  { name: 'Terim', domain: 'terim.ae' },
  { name: 'Olsenmark', domain: 'olsenmark.com' },
  { name: 'Westpoint', domain: 'westpoint.ae' },
  { name: 'National', domain: 'national.com.pk' },
  { name: 'Mika', domain: 'mika.co.ke' },
  { name: 'Mitsubishi Electric', domain: 'mitsubishielectric.com' },
  { name: 'Fisher & Paykel', domain: 'fisherpaykel.com' },
  { name: 'Teka', domain: 'teka.com' },
  { name: 'BPL', domain: 'bpl.in' },
];

// SEO spotlight copy for the most-repaired brands in Dubai — each blurb is unique.
const BRAND_SPOTLIGHT = [
  {
    name: 'LG',
    domain: 'lg.com',
    tech: 'Direct Drive · AI DD · TurboWash',
    desc: "LG washing machines run belt-free Direct Drive motors and AI DD fabric detection, so they are quiet and efficient — until a sensor or drive board acts up. Our LG-certified technicians in Dubai handle the whole range, from front-load WM series to top-load TurboDrum models, with same-day genuine parts.",
    faults: 'LE/CL locked-motor errors, door lock (FE/FH) failures, slow drainage on inverter models, and drum-bearing wear on 6–8 year-old units.',
  },
  {
    name: 'Samsung',
    domain: 'samsung.com',
    tech: 'EcoBubble · Digital Inverter · VRT',
    desc: "Samsung's EcoBubble and Digital Inverter machines are hugely popular in Dubai, but their inverter motors and control boards feel the strain of extreme summer heat. We are an authorised-standard Samsung repair partner carrying genuine WF, WD and AI-series components in stock.",
    faults: '3E/3E1 motor errors, inverter motor failures in high heat, water inlet valve faults, and bearing noise on WF/WD models.',
  },
  {
    name: 'Bosch',
    domain: 'bosch-home.com',
    tech: 'EcoSilence Drive · VarioPerfect · i-Dos',
    desc: "Bosch machines are built for precision with EcoSilence Drive motors and EcoTherm heating, which makes them especially sensitive to Dubai's hard water. Our Bosch-certified team specialises in limescale-related faults and offers dedicated descaling maintenance to protect the heating system.",
    faults: 'Limescale build-up on the heating element, F21 motor faults, door-seal degradation in the heat, and pump impeller breakage.',
  },
  {
    name: 'Siemens',
    domain: 'siemens-home.bsh-group.com',
    tech: 'iQdrive · iSensoric · varioSpeed',
    desc: "Siemens shares the BSH platform with Bosch but adds iSensoric load-and-soil sensing and the brushless iQdrive motor. These premium electronics reward precise, brand-specific diagnosis — exactly what our Dubai technicians provide, with genuine parts sourced for the UAE market.",
    faults: 'iQdrive bearing wear, iSensoric sensor faults causing wrong dosing, door-seal mould in humidity, and electronic control freezes.',
  },
  {
    name: 'Whirlpool',
    domain: 'whirlpool.com',
    tech: '6th Sense · Adaptive Wash · Zen',
    desc: "Whirlpool's 6th Sense technology adapts water and energy to each load, and its top-load models are a common sight in Dubai villas and apartments. We keep genuine Whirlpool parts in stock and have a decade of history repairing both its front-load and top-load ranges.",
    faults: 'Drain pump failures on top-load models, hose and connector cracking, control-panel responsiveness issues, and 5-year-plus bearing wear.',
  },
  {
    name: 'Miele',
    domain: 'miele.com',
    tech: 'Honeycomb Drum · ProfiEco Motor',
    desc: "Miele is the premium end of the market, engineered to last decades with its honeycomb drum and ProfiEco motor. When one does need attention, it demands genuine Miele parts and careful, brand-trained handling — which is exactly how our Dubai specialists approach every Miele repair.",
    faults: 'Water inlet and drain valve faults, electronic control errors, door-lock issues, and heater scaling from hard water.',
  },
  {
    name: 'Electrolux',
    domain: 'electrolux.com',
    tech: 'PerfectCare · SteamCare · UltraMix',
    desc: "Electrolux machines pair PerfectCare drums with SteamCare programs for gentle, thorough washing. Our technicians understand its sensor systems and stock genuine Electrolux components for the full UAE line-up, so steam and standard cycles are both restored properly.",
    faults: 'Water-level sensor malfunctions, door mechanism faults, motor speed-control issues, and drainage faults.',
  },
  {
    name: 'Hitachi',
    domain: 'hitachi.com',
    tech: 'Push & Wash · Beat Wave · Auto Dosing',
    desc: "Hitachi washing machines are known for durable Japanese engineering and gentle Beat Wave washing, and they are widely used across Dubai homes. We diagnose both the mechanical and electronic Hitachi systems and source genuine parts for older and current models alike.",
    faults: 'Motor and belt wear, water-level sensor faults, drainage blockages, and control-board issues on higher-end models.',
  },
];

// Token-free logo source: Google's favicon service returns each brand's mark by domain.
const logoUrl = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

function BrandCard({ brand, index }: { brand: { name: string; domain: string }; index: number }) {
  const [failed, setFailed] = React.useState(false);
  const href = BRAND_HREF[brand.name] ?? '/brands';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.04 }}
    >
      <Link
        href={href}
        aria-label={`${brand.name} washing machine repair in Dubai`}
        className="group relative bg-white border border-neutral-200/70 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-[#f2b134] hover:shadow-lg hover:-translate-y-1 transition-all aspect-[4/3]"
      >
        <div className="h-12 sm:h-14 w-full flex items-center justify-center">
          {failed ? (
            <span className="w-12 h-12 rounded-xl bg-[#1E1E1E] text-[#f2b134] flex items-center justify-center font-display font-extrabold text-lg select-none">
              {brand.name.charAt(0)}
            </span>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoUrl(brand.domain)}
              alt={`${brand.name} washing machine repair Dubai`}
              className="max-h-12 sm:max-h-14 max-w-[85%] w-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setFailed(true)}
            />
          )}
        </div>
        <span className="text-neutral-700 text-[13px] font-semibold text-center leading-tight font-display group-hover:text-neutral-900 transition-colors">
          {brand.name}
        </span>
      </Link>
    </motion.div>
  );
}

// Top brands shown in the nav dropdown (logos fetched token-free by domain).
const NAV_BRANDS = [
  { name: 'LG', domain: 'lg.com' },
  { name: 'Samsung', domain: 'samsung.com' },
  { name: 'Bosch', domain: 'bosch-home.com' },
  { name: 'Siemens', domain: 'siemens-home.bsh-group.com' },
  { name: 'Whirlpool', domain: 'whirlpool.com' },
  { name: 'Panasonic', domain: 'panasonic.com' },
  { name: 'Electrolux', domain: 'electrolux.com' },
  { name: 'Miele', domain: 'miele.com' },
  { name: 'Hitachi', domain: 'hitachi.com' },
];

const navBrandLogoUrl = (domain: string) =>
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
      src={navBrandLogoUrl(domain)}
      alt={`${name} washing machine repair Dubai`}
      className="w-7 h-7 object-contain"
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}

export default function BrandsPage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [brandsOpen, setBrandsOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const FAQS = [
    { q: 'Which washing machine brands do you repair in Dubai?', a: 'We repair every major washing machine brand sold in the UAE — including LG, Samsung, Bosch, Siemens, Whirlpool, Hisense, Panasonic, Haier, Beko, Miele, Electrolux, AEG, Toshiba, Hitachi, Midea, Daewoo, Candy, Nikai, Super General and many more. In total we service over 38 brands, and if yours is not listed, call us — we handle virtually all makes and models.' },
    { q: 'Do you use genuine parts for every brand?', a: 'Yes. We fit 100% genuine, manufacturer-original spare parts for every brand — never counterfeit or refurbished components. We keep over 500 genuine parts in stock for the top brands, source rare components from authorised distributors, and back each part with a 2-year warranty. We will show you the packaging before installation.' },
    { q: 'Are your technicians certified for premium brands like Bosch, Siemens and Miele?', a: 'Absolutely. Our technicians hold international certifications for the major manufacturers and are trained brand by brand — from Bosch and Siemens EcoSilence/iQdrive systems to Miele’s honeycomb-drum machines. This brand-specific training means we read each machine’s own error codes and known failure points rather than applying a generic fix.' },
    { q: 'Does Dubai’s hard water affect some brands more than others?', a: 'Yes. Dubai’s water hardness (500–600 ppm) causes limescale that hits heater-based brands like Bosch, Siemens and Miele hardest, while inverter-motor brands like Samsung and LG are more affected by extreme summer heat stressing their control boards. We tailor both diagnosis and preventive maintenance to your specific brand.' },
    { q: 'Can you repair my brand the same day?', a: 'In most cases, yes. Because we stock genuine parts across all major brands, most repairs are completed same-day. Book within 2 hours and we arrive the same day across Dubai, 24/7 including weekends and holidays. Complex faults needing a rare ordered part are typically finished next-day.' },
    { q: 'What warranty do you offer on brand repairs?', a: 'Every brand repair comes with a 12-month workmanship warranty on labour and a 2-year warranty on genuine spare parts. If the same part fails within the warranty period we fix it free, and there is a money-back guarantee if the repair is unsuccessful.' },
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
                        {NAV_SERVICES.map((s) => (
                          <Link
                            key={s.title}
                            href={s.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex flex-col items-center text-center gap-2 px-3 py-3.5 rounded-xl transition-all group hover:bg-neutral-800"
                          >
                            <span className="w-9 h-9 rounded-lg bg-neutral-800 group-hover:bg-[#f2b134]/15 flex items-center justify-center text-[#f2b134] shrink-0 transition-colors">
                              {s.icon}
                            </span>
                            <span className="text-[12px] font-medium leading-tight transition-colors text-neutral-300 group-hover:text-white">{s.title}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative">
                <button onClick={() => setBrandsOpen(!brandsOpen)} className="flex items-center gap-1 cursor-pointer text-[#f2b134]">
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
                            href={BRAND_HREF[brand.name] ?? '/brands'}
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
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-10 sm:pb-14">
        <nav className="flex items-center gap-2 text-[13px] text-neutral-500 mb-8 sm:mb-12 font-medium">
          <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-[#c8901f]">Brands</span>
        </nav>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] text-[#f2b134] text-[11px] font-mono uppercase tracking-widest mb-6">
            <BadgeCheck className="h-3.5 w-3.5" />
            <span>Every Major Brand Serviced</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] tracking-tight text-neutral-900 mb-6">
            <span className="relative inline-block">
              <span className="relative z-10">Washing Machine Brands</span>
              <span className="absolute bottom-1.5 left-0 right-0 h-3.5 bg-[#f2b134]/40 -rotate-1 z-0" />
            </span>
            <span className="block">We Repair in Dubai</span>
          </h1>
          <p className="text-neutral-600 text-[15px] sm:text-[17px] leading-relaxed max-w-2xl mb-8">
            Our certified technicians repair {BRANDS.length}+ washing machine brands across Dubai — from
            LG, Samsung and Bosch to Miele, Electrolux and every regional favourite. Whatever you own,
            we carry genuine parts, fix it same-day and back every repair with a 12-month warranty.
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
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            {[
              { value: '38+', label: 'Washing machine brands serviced' },
              { value: '500+', label: 'Genuine spare parts in stock' },
              { value: '12+', label: 'Years of brand-specific expertise' },
              { value: '4.8★', label: 'Customer rating (247 reviews)' },
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

      {/* ============ BRAND EXPERTISE INTRO ============ */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Why Brand Matters</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-6">
              Brand-Specific Repair, Not a Generic Fix
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed mb-5">
              Every washing machine brand is engineered differently — LG&apos;s Direct Drive motors,
              Samsung&apos;s Digital Inverter, Bosch&apos;s EcoSilence Drive and Miele&apos;s honeycomb
              drum each fail in their own way and speak their own error-code language. A repair that works
              on one brand can be completely wrong for another.
            </p>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed mb-8">
              That is why our Dubai technicians are trained brand by brand and stock genuine spare parts
              for every major manufacturer. Whether you own a premium European machine or a budget regional
              model, we diagnose the exact fault, fit the correct original component and get your washing
              machine running the same day — backed by a 12-month workmanship warranty.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Search className="h-5 w-5" />, title: 'Brand-Coded Diagnosis', desc: 'We read each brand’s own error codes and known failure points, not a one-size-fits-all guess.' },
                { icon: <ShieldCheck className="h-5 w-5" />, title: 'Genuine OEM Parts', desc: 'Original manufacturer components for every brand — no counterfeit or refurbished substitutes.' },
                { icon: <BadgeCheck className="h-5 w-5" />, title: 'Factory-Trained Techs', desc: 'International certifications across LG, Samsung, Bosch, Siemens and more.' },
                { icon: <Timer className="h-5 w-5" />, title: 'Same-Day Across Dubai', desc: 'Book within 2 hours and we arrive same day, 24/7 including weekends.' },
              ].map((f) => (
                <div key={f.title} className="bg-white border border-neutral-200/70 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-lg bg-[#f2b134]/15 flex items-center justify-center text-[#c8901f] mb-3.5">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-neutral-900 text-[15px] mb-1.5 font-display">{f.title}</h3>
                  <p className="text-neutral-500 text-[13px] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden border border-neutral-200 shadow-2xl">
              <Image
                src="/Washing Machine Drum Repair Hero Section.png"
                alt="Certified technician repairing a branded washing machine in Dubai"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="absolute -bottom-6 right-4 sm:-right-6 bg-[#1E1E1E] rounded-2xl shadow-xl px-6 py-5 text-center"
            >
              <p className="font-display font-extrabold text-3xl text-[#f2b134] leading-none">38+</p>
              <p className="text-neutral-400 text-xs mt-1.5">Brands under one roof</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ BRAND GRID ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Brands We Service</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-4">
              {BRANDS.length}+ Trusted Washing Machine Brands
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed">
              Brand-specific expertise, genuine spare parts and factory-trained technicians for every make
              sold across the UAE. Don&apos;t see yours? Call us — we service virtually all brands.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {BRANDS.map((brand, i) => (
              <BrandCard key={brand.name} brand={brand} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ BRAND SPOTLIGHT ============ */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Brand Spotlight</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-4">
              The Brands We Repair Most in Dubai
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed">
              A closer look at the most popular washing machine brands in UAE homes — the technology inside
              them, the faults we see most often in Dubai&apos;s heat and hard water, and how we fix each one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {BRAND_SPOTLIGHT.map((brand, idx) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.05 }}
                className="bg-white border border-neutral-200/70 rounded-2xl p-7 hover:border-[#f2b134] hover:shadow-lg transition-all"
              >
                <Link href={BRAND_HREF[brand.name] ?? '/brands'} className="flex items-center gap-3.5 mb-4 group/title">
                  <span className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 p-2">
                    <NavBrandLogo name={brand.name} domain={brand.domain} />
                  </span>
                  <div>
                    <h3 className="font-bold text-neutral-900 text-lg font-display leading-tight group-hover/title:text-[#c8901f] transition-colors">{brand.name} Washing Machine Repair</h3>
                    <p className="text-[#c8901f] text-[12px] font-mono uppercase tracking-wider mt-0.5">{brand.tech}</p>
                  </div>
                </Link>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">{brand.desc}</p>
                <div className="flex items-start gap-2.5 mb-4">
                  <AlertTriangle className="h-4 w-4 text-[#c8901f] shrink-0 mt-0.5" />
                  <p className="text-neutral-600 text-[13px] leading-relaxed">
                    <span className="font-semibold text-neutral-800">Common Dubai faults:</span> {brand.faults}
                  </p>
                </div>
                <Link
                  href={BRAND_HREF[brand.name] ?? '/brands'}
                  className="inline-flex items-center gap-1.5 text-[#c8901f] font-semibold text-[13px] hover:gap-2.5 transition-all"
                >
                  View {brand.name} repair page <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            <a
              href={`tel:${PHONE}`}
              className="rounded-full text-neutral-900 font-bold px-7 py-3.5 flex items-center gap-2.5 text-sm shadow-md transition-all hover:brightness-105"
              style={{ backgroundColor: '#f2b134' }}
            >
              <Phone className="h-4.5 w-4.5 stroke-[2.5]" /> Book Your Brand Repair
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
        </div>
      </section>

      {/* ============ WHY / TRUST STRIP ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Why Choose Us</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1]">
              One Team for Every Brand
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <BadgeCheck className="h-6 w-6" />, title: 'Certified on All Makes', desc: 'Factory-trained technicians hold international certifications for LG, Samsung, Bosch, Siemens and every major brand.' },
              { icon: <ShieldCheck className="h-6 w-6" />, title: 'Genuine OEM Parts', desc: 'We stock 500+ original spare parts and source rare components for any brand — each backed by a 2-year warranty.' },
              { icon: <Search className="h-6 w-6" />, title: 'Brand-Specific Diagnosis', desc: 'Every brand fails differently. We diagnose the exact fault for your model — not a generic guess.' },
              { icon: <Timer className="h-6 w-6" />, title: 'Same-Day Service', desc: 'Book within 2 hours and we arrive same day, 24/7 including weekends and holidays across Dubai.' },
            ].map((w, idx) => (
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

      {/* ============ FAQ ============ */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#f2b134] font-mono text-[11px] tracking-widest uppercase mb-3 block">
              BRAND REPAIR — COMMON QUESTIONS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight leading-none mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-sans">
              Everything you need to know about our brand-specific washing machine repair service in Dubai.
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

      {/* ============ CTA BAND ============ */}
      <section className="w-full pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative rounded-[2.5rem] bg-[#1E1E1E] overflow-hidden px-6 sm:px-12 lg:px-16 py-12 sm:py-16 shadow-lg text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f2b134]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-white leading-[1.1] tracking-tight mb-4">
              Whatever brand you own, <span className="text-[#f2b134]">we&apos;ll fix it today.</span>
            </h2>
            <p className="text-neutral-400 text-[15px] sm:text-base leading-relaxed mb-8">
              Transparent pricing, genuine parts and a full warranty on every repair — across all
              {' '}{BRANDS.length}+ brands we service in Dubai.
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
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Services</h4>
              <div className="w-8 h-0.5 bg-[#f2b134] rounded-full" />
              <ul className="flex flex-col gap-2.5 text-neutral-500 text-[13px]">
                <Link href="/automatic-washing-machine-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Automatic Repair</li></Link>
                <Link href="/front-load-washing-machine-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Front-Load Repair</li></Link>
                <Link href="/top-load-washing-machine-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Top-Load Repair</li></Link>
                <Link href="/commercial-washing-machine-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Commercial Repair</li></Link>
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
                    <p className="text-white">+971 55 787 3590</p>
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
