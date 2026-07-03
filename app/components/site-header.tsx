'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  MessageCircle,
  Droplets,
  RotateCw,
  ShieldCheck,
  Wrench,
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
} from 'lucide-react';

export const LOGO_URL =
  'https://res.cloudinary.com/dbvjzyevy/image/upload/v1782108374/Red_and_Yellow_Modern_Simple_Application_Logogram_250_x_150_px_1_svnokc.png';

export const PHONE = '+971508931985';
export const WHATSAPP = 'https://wa.me/971508931985';

const NAV_SERVICES = [
  { title: 'Drainage Repair', icon: <Droplets className="h-4 w-4" />, href: '/drainage-repair' },
  { title: 'Spin Cycle Repair', icon: <RotateCw className="h-4 w-4" />, href: '/spin-cycle-repair' },
  { title: 'Water Leakage Repair', icon: <ShieldCheck className="h-4 w-4" />, href: '/water-leakage-repair' },
  { title: 'Drum Repair', icon: <Wrench className="h-4 w-4" />, href: '/drum-repair' },
  { title: 'Door Lock Repair', icon: <Lock className="h-4 w-4" />, href: '/door-lock-repair' },
  { title: 'Noise Repair', icon: <Volume2 className="h-4 w-4" />, href: '/noise-repair' },
  { title: 'Power Fault Repair', icon: <Zap className="h-4 w-4" />, href: '/power-fault-repair' },
  { title: 'Water Inlet Repair', icon: <Droplet className="h-4 w-4" />, href: '/water-inlet-repair' },
  { title: 'Automatic Washing Machine Repair', icon: <Settings className="h-4 w-4" />, href: '/automatic-washing-machine-repair' },
  { title: 'Inverter Motor Washing Machine Repair', icon: <Cpu className="h-4 w-4" />, href: '/inverter-motor-washing-machine-repair' },
  { title: 'Commercial Washing Machine Repair', icon: <Building2 className="h-4 w-4" />, href: '/commercial-washing-machine-repair' },
  { title: 'Freestanding Washing Machine Repair', icon: <Box className="h-4 w-4" />, href: '/freestanding-washing-machine-repair' },
  { title: 'Front Load Washing Machine Repair', icon: <CircleDot className="h-4 w-4" />, href: '/front-load-washing-machine-repair' },
  { title: 'Manual Washing Machine Repair', icon: <Hand className="h-4 w-4" />, href: '/manual-washing-machine-repair' },
  { title: 'Steam Wash Washing Machine Repair', icon: <Cloud className="h-4 w-4" />, href: '/steam-wash-washing-machine-repair' },
  { title: 'Top Load Washing Machine Repair', icon: <ArrowUpCircle className="h-4 w-4" />, href: '/top-load-washing-machine-repair' },
  { title: 'Twin Tub Washing Machine Repair', icon: <Columns2 className="h-4 w-4" />, href: '/twin-tub-washing-machine-repair' },
];

type ActivePage = 'home' | 'about' | 'blog' | 'contact' | 'services' | null;

const NAV_LINKS: { label: string; href: string; key: ActivePage }[] = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'About', href: '/about', key: 'about' },
  { label: 'Blog', href: '/blog', key: 'blog' },
  { label: 'Contact', href: '/contact', key: 'contact' },
];

export default function SiteHeader({ active = null }: { active?: ActivePage }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);

  return (
    <>
      {/* ============ HEADER ============ */}
      <header className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 z-40 relative">
        <div
          style={{ backgroundColor: '#1E1E1E' }}
          className="w-full flex items-center justify-between py-4 px-5 md:px-8 shadow-xl rounded-b-3xl border-x border-b border-neutral-800"
        >
          <div className="flex items-center">
            <Link
              href="/"
              className="relative h-18 w-56 sm:h-24 sm:w-72 md:w-80 -my-5 sm:-my-7 flex items-center cursor-pointer select-none z-10 transition-transform hover:scale-[1.02]"
            >
              <Image src={LOGO_URL} alt="Washing Machine Experts" fill sizes="320px" className="object-contain object-left" referrerPolicy="no-referrer" priority />
            </Link>

            <div className="w-[1.5px] h-6 bg-neutral-700/80 mx-4 md:mx-6 shrink-0" />

            <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-sans text-[18px] font-medium text-neutral-300">
              <Link href="/" className={`transition-colors ${active === 'home' ? 'text-[#f2b134]' : 'hover:text-white'}`}>Home</Link>
              <Link href="/about" className={`transition-colors ${active === 'about' ? 'text-[#f2b134]' : 'hover:text-white'}`}>About</Link>

              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center gap-1 cursor-pointer transition-colors ${active === 'services' ? 'text-[#f2b134]' : 'hover:text-white'}`}
                >
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
                        <span className="text-[#f2b134] text-[10px] font-mono">17 Services</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {NAV_SERVICES.map((s) => (
                          <Link
                            key={s.title}
                            href={s.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all group hover:bg-neutral-800"
                          >
                            <span className="w-8 h-8 rounded-lg bg-neutral-800 group-hover:bg-[#f2b134]/15 flex items-center justify-center text-[#f2b134] shrink-0 transition-colors">
                              {s.icon}
                            </span>
                            <span className="text-[13px] font-medium leading-tight transition-colors text-neutral-300 group-hover:text-white">{s.title}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/blog" className={`transition-colors ${active === 'blog' ? 'text-[#f2b134]' : 'hover:text-white'}`}>Blog</Link>
              <Link href="/contact" className={`transition-colors ${active === 'contact' ? 'text-[#f2b134]' : 'hover:text-white'}`}>Contact</Link>
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
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`w-full text-left py-4 text-[17px] font-semibold flex items-center justify-between border-b border-neutral-800/40 ${
                      active === item.key ? 'text-[#f2b134]' : 'text-neutral-300'
                    }`}
                  >
                    <span>{item.label}</span>
                    {active === item.key && <span className="w-2 h-2 rounded-full bg-[#f2b134]" />}
                  </Link>
                ))}

                {/* Services Dropdown */}
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full text-left py-4 text-[17px] font-semibold flex items-center justify-between border-b border-neutral-800/40 ${
                    active === 'services' ? 'text-[#f2b134]' : 'text-neutral-300'
                  }`}
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
                      <div className="flex flex-col gap-1 pt-2 pb-3">
                        {NAV_SERVICES.map((s) => (
                          <Link
                            key={s.title}
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 px-2 py-3 rounded-xl hover:bg-neutral-800 transition-all group"
                          >
                            <span className="w-8 h-8 rounded-lg bg-neutral-800 group-hover:bg-[#f2b134]/15 flex items-center justify-center text-[#f2b134] shrink-0 transition-colors">
                              {s.icon}
                            </span>
                            <span className="text-[15px] font-medium text-neutral-300 group-hover:text-white transition-colors">{s.title}</span>
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
    </>
  );
}
