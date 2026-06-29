'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ChevronRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  Star,
  Timer,
  ShieldCheck,
  BadgeCheck,
  Users,
  Target,
  HeartHandshake,
  Sparkles,
  Award,
  ThumbsUp,
  Gauge,
} from 'lucide-react';
import SiteHeader, { PHONE, WHATSAPP } from '../components/site-header';
import SiteFooter from '../components/site-footer';

const STATS = [
  { value: '10+', label: 'Years of experience' },
  { value: '15,000+', label: 'Repairs completed' },
  { value: '20+', label: 'Brands serviced' },
  { value: '4.9★', label: 'Average customer rating' },
];

const VALUES = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Honesty First',
    desc: 'Transparent, fixed quotes approved before any work begins — no inflated bills and no unnecessary part swaps, ever.',
  },
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    title: 'Genuine Quality',
    desc: 'We fit only original manufacturer parts, so every repair we complete is built to last well beyond your warranty.',
  },
  {
    icon: <Timer className="h-6 w-6" />,
    title: 'Respect For Your Time',
    desc: 'Same-day slots, punctual technicians and most faults resolved in a single visit across all areas of Dubai.',
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: 'Customer Care',
    desc: 'A friendly team that explains every fault in plain language and treats your home with the care it deserves.',
  },
];

const WHY = [
  {
    icon: <Timer className="h-6 w-6" />,
    title: 'Same-Day Service',
    desc: 'Most washing machine faults are diagnosed and fixed within a single visit across all Dubai areas.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Genuine OEM Parts',
    desc: 'We fit only original manufacturer components for repairs that genuinely stand the test of time.',
  },
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    title: 'Certified Technicians',
    desc: 'Factory-trained engineers handle every major brand with precision, care and proven expertise.',
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Warranty Backed',
    desc: 'Every repair is covered by a written warranty on both parts and labour — total peace of mind.',
  },
];

const JOURNEY = [
  { year: '2014', title: 'The Beginning', desc: 'Washing Machine Experts started as a small two-technician workshop with a simple promise: honest, reliable appliance repair.' },
  { year: '2017', title: 'Growing Trust', desc: 'Word of mouth doubled our team as Dubai families came to rely on our same-day washing machine repairs.' },
  { year: '2020', title: 'All Brands Covered', desc: 'We invested in factory training and OEM parts sourcing to confidently service 20+ major brands.' },
  { year: '2026', title: 'Dubai-Wide Leaders', desc: 'Today we are one of Dubai\'s most trusted washing machine repair teams, with 15,000+ repairs completed.' },
];

const TEAM = [
  { name: 'Imran Khan', role: 'Lead Repair Technician', img: '/WhatsApp Image 2026-06-22 at 10.47.38.jpeg' },
  { name: 'Rashed Al Marri', role: 'Diagnostics Specialist', img: '/WhatsApp Image 2026-06-22 at 11.11.00.jpeg' },
  { name: 'Sajid Hussain', role: 'Field Service Engineer', img: '/WhatsApp Image 2026-06-22 at 11.14.27.jpeg' },
  { name: 'Maria Santos', role: 'Customer Care Lead', img: '/WhatsApp Image 2026-06-22 at 10.47.03.jpeg' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-neutral-900 flex flex-col font-sans selection:bg-[#f2b134]/30">
      <SiteHeader active="about" />

      {/* ============ HERO ============ */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-12 sm:pb-20">
        <nav className="flex items-center gap-2 text-[13px] text-neutral-500 mb-8 sm:mb-12 font-medium">
          <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-[#c8901f]">About Us</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] text-[#f2b134] text-[11px] font-mono uppercase tracking-widest mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Who We Are</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-neutral-900 mb-6">
              Dubai&apos;s Trusted{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Washing Machine</span>
                <span className="absolute bottom-1.5 left-0 right-0 h-3.5 bg-[#f2b134]/40 -rotate-1 z-0" />
              </span>{' '}
              Repair Team
            </h1>

            <p className="text-neutral-600 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mb-8">
              For over a decade, Washing Machine Experts has kept Dubai&apos;s laundry rooms running.
              We&apos;re a team of certified technicians obsessed with one thing — getting your washing
              machine working perfectly again, the same day, with genuine parts and honest pricing.
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
              <Link
                href="/contact"
                className="rounded-full bg-white text-neutral-900 font-bold px-7 py-3.5 flex items-center gap-2.5 text-sm shadow-sm border border-neutral-200 hover:bg-neutral-50 transition-colors"
              >
                <MessageCircle className="h-4.5 w-4.5 stroke-[2.5]" /> Contact Us
              </Link>
            </div>

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
                <Users className="h-4 w-4 text-[#c8901f]" /> 15,000+ happy customers
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3.4] w-full rounded-[2rem] overflow-hidden border border-neutral-200 shadow-2xl">
              <Image
                src="/WhatsApp Image 2026-06-22 at 10.47.38.jpeg"
                alt="Washing Machine Experts technicians at work in Dubai"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-2 sm:left-6 bg-white rounded-2xl shadow-xl border border-neutral-100 px-5 py-4 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1E1E1E] flex items-center justify-center text-[#f2b134]">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-extrabold font-display text-neutral-900 leading-none">10+ Years</p>
                <p className="text-xs text-neutral-500 mt-1">Serving Dubai homes</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              className="absolute top-5 right-5 bg-[#f2b134] rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4 text-neutral-900" />
              <span className="text-xs font-bold text-neutral-900">Certified Team</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-display font-extrabold text-3xl sm:text-4xl text-neutral-900 mb-1.5">{stat.value}</p>
                <p className="text-neutral-500 text-xs sm:text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUR STORY ============ */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden border border-neutral-200 shadow-xl">
              <Image
                src="/WhatsApp Image 2026-06-22 at 11.14.27.jpeg"
                alt="Our technician repairing a washing machine"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="absolute -bottom-6 right-4 sm:-right-6 bg-[#1E1E1E] rounded-2xl shadow-xl px-6 py-5 text-center"
            >
              <p className="font-display font-extrabold text-3xl text-[#f2b134] leading-none">98%</p>
              <p className="text-neutral-400 text-xs mt-1.5">Same-day fix rate</p>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Our Story</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-6">
              Built On Honest, Reliable Repairs
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed mb-5">
              Washing Machine Experts began in 2014 with two technicians, a single van and a frustration
              shared by every Dubai resident — appliance repair that was slow, overpriced and unreliable.
              We set out to do the opposite.
            </p>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed mb-8">
              More than a decade and 15,000+ repairs later, that founding promise hasn&apos;t changed. We
              still show up the same day, still quote transparently before we touch a single screw, and
              still back every repair with a written warranty. Only now we do it for thousands of homes
              across the city.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                'Family-run, locally trusted business',
                'All major washing machine brands serviced',
                'Genuine OEM parts on every repair',
                'Upfront pricing with zero hidden fees',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#c8901f] shrink-0 mt-0.5" />
                  <span className="text-neutral-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISSION / VISION ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#1E1E1E] rounded-[2rem] p-8 sm:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#f2b134]/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-[#f2b134] flex items-center justify-center text-neutral-900 mb-6 relative z-10">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl mb-4 relative z-10">Our Mission</h3>
              <p className="text-neutral-300 text-[15px] leading-relaxed relative z-10">
                To take the stress out of a broken washing machine — delivering fast, honest and lasting
                repairs that get Dubai families back to everyday life without the worry, the wait or the
                surprise bills.
              </p>
            </div>

            <div className="bg-[#FAF9F5] border border-neutral-200/70 rounded-[2rem] p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#f2b134]/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-[#1E1E1E] flex items-center justify-center text-[#f2b134] mb-6 relative z-10">
                <Gauge className="h-7 w-7" />
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl mb-4 text-neutral-900 relative z-10">Our Vision</h3>
              <p className="text-neutral-600 text-[15px] leading-relaxed relative z-10">
                To be the name Dubai instinctively trusts for appliance repair — known for technicians who
                care, parts you can count on, and a standard of service so good it makes a breakdown feel
                like nothing more than a minor inconvenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ What We Stand For</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-4">
              The Values Behind Every Repair
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed">
              These four principles guide every call we answer and every machine we fix — they&apos;re the
              reason customers come back to us and recommend us to their neighbours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white border border-neutral-200/70 rounded-2xl p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1E1E1E] flex items-center justify-center text-[#f2b134] mx-auto mb-5">
                  {v.icon}
                </div>
                <h3 className="font-bold text-neutral-900 text-lg mb-2 font-display">{v.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ JOURNEY / TIMELINE ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Our Journey</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1]">
              A Decade Of Trusted Service
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {JOURNEY.map((step, idx) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative bg-[#FAF9F5] border border-neutral-200/70 rounded-2xl p-7 overflow-hidden group hover:border-[#f2b134] hover:shadow-lg transition-all"
              >
                <span className="font-display font-extrabold text-3xl text-[#f2b134] block mb-3">{step.year}</span>
                <h3 className="text-neutral-900 font-bold text-lg mb-2 font-display">{step.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Why Choose Us</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1]">
              Why Dubai Chooses Washing Machine Experts
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

      {/* ============ TEAM ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Meet The Team</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-4">
              The People Who Fix It
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed">
              Friendly, factory-trained and fully certified — the technicians who&apos;ll be at your door.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group bg-[#FAF9F5] border border-neutral-200/70 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[4/3.6] w-full overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 280px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-neutral-900 text-[17px] font-display">{member.name}</h3>
                  <p className="text-[#c8901f] text-sm font-medium mt-0.5">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative rounded-[2.5rem] bg-white border border-neutral-200/70 overflow-hidden px-6 sm:px-12 lg:px-16 py-12 sm:py-16 shadow-lg">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f2b134]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2b134]/15 text-[#c8901f] text-[11px] font-mono uppercase tracking-widest mb-6">
              <ThumbsUp className="h-3.5 w-3.5" /> Ready When You Are
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-neutral-900 leading-[1.1] tracking-tight mb-4">
              Let&apos;s Get Your Machine Running Again
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed mb-9">
              Book a same-day washing machine repair with Dubai&apos;s trusted technicians. Transparent
              pricing, genuine parts and a full warranty — guaranteed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
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
                className="rounded-full bg-neutral-900 text-white font-bold px-8 py-4 flex items-center gap-2.5 text-sm border border-neutral-800 hover:bg-neutral-800 transition-colors"
              >
                <MessageCircle className="h-4.5 w-4.5 stroke-[2.5]" /> WhatsApp Us
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
