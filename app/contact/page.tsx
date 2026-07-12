'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ChevronRight,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  MapPin,
  ArrowRight,
  Send,
  Navigation,
  Sparkles,
  ShieldCheck,
  Timer,
  CheckCircle2,
} from 'lucide-react';
import SiteHeader, { PHONE, WHATSAPP } from '../components/site-header';
import SiteFooter from '../components/site-footer';

const CONTACT_METHODS = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'Call Us',
    detail: '+971 55 787 3590',
    sub: 'Fastest way to book a same-day repair',
    href: `tel:${PHONE}`,
    external: false,
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: 'WhatsApp',
    detail: '+971 55 787 3590',
    sub: 'Send us a photo of the issue',
    href: WHATSAPP,
    external: true,
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'Email Us',
    detail: 'info@atozrepair.com',
    sub: 'We reply within a few hours',
    href: 'mailto:info@atozrepair.com',
    external: false,
  },
];

const SERVICE_OPTIONS = [
  'Drainage Repair',
  'Spin Cycle Repair',
  'Water Leakage Repair',
  'Drum Repair',
  'Door Lock Repair',
  'Noise Repair',
  'Power Fault Repair',
  'Water Inlet Repair',
  'Other / Not Sure',
];

const AREAS = [
  'Dubai Marina', 'Downtown Dubai', 'JBR & JLT', 'Business Bay',
  'Al Barsha', 'Al Quoz', 'Deira', 'Bur Dubai',
  'Jumeirah', 'Mirdif', 'Silicon Oasis', 'International City',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-neutral-900 flex flex-col font-sans selection:bg-[#f2b134]/30">
      <SiteHeader active="contact" />

      {/* ============ HERO ============ */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-10 sm:pb-14">
        <nav className="flex items-center gap-2 text-[13px] text-neutral-500 mb-8 sm:mb-12 font-medium">
          <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-[#c8901f]">Contact Us</span>
        </nav>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] text-[#f2b134] text-[11px] font-mono uppercase tracking-widest mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Get In Touch</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-neutral-900 mb-6">
            Let&apos;s Get Your Machine{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Fixed Today</span>
              <span className="absolute bottom-1.5 left-0 right-0 h-3.5 bg-[#f2b134]/40 -rotate-1 z-0" />
            </span>
          </h1>
          <p className="text-neutral-600 text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
            Call, WhatsApp or send us a message and our friendly team will get back to you within 30
            minutes. Same-day washing machine repair is available across every area of Dubai.
          </p>
        </div>
      </section>

      {/* ============ CONTACT METHODS ============ */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {CONTACT_METHODS.map((m, idx) => (
            <motion.a
              key={m.title}
              href={m.href}
              target={m.external ? '_blank' : undefined}
              rel={m.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group bg-white border border-neutral-200/70 rounded-2xl p-7 hover:border-[#f2b134] hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1E1E1E] group-hover:bg-[#f2b134] flex items-center justify-center text-[#f2b134] group-hover:text-neutral-900 mb-5 transition-colors">
                {m.icon}
              </div>
              <h3 className="font-bold text-neutral-900 text-lg mb-1 font-display">{m.title}</h3>
              <p className="text-neutral-900 font-semibold text-[15px]">{m.detail}</p>
              <p className="text-neutral-500 text-sm mt-1.5 leading-relaxed">{m.sub}</p>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#c8901f] mt-4 group-hover:gap-2.5 transition-all">
                Reach out <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ============ FORM + INFO ============ */}
      <section className="w-full bg-white border-t border-b border-neutral-200/60 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left info */}
            <div className="lg:col-span-5 flex flex-col gap-5 text-left">
              <div className="flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#f2b134] tracking-widest">
                <Send className="h-3.5 w-3.5" />
                <span>SEND A MESSAGE</span>
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-neutral-900 leading-none">
                Need A Repair?
              </h2>
              <h3 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-neutral-400 leading-none">
                Let&apos;s Fix It.
              </h3>
              <p className="text-neutral-500 text-[15px] sm:text-base leading-relaxed font-sans max-w-md mt-2">
                Fill in the form and our team will get back to you within 30 minutes. Tell us what your
                machine is doing and we&apos;ll bring the right parts the first time.
              </p>

              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-3 text-neutral-700 text-sm font-medium">
                  <span className="p-2 rounded-lg bg-[#f2b134]/10"><Phone className="h-4 w-4 text-[#f2b134]" /></span>
                  <span>+971 55 787 3590</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-700 text-sm font-medium">
                  <span className="p-2 rounded-lg bg-[#f2b134]/10"><Mail className="h-4 w-4 text-[#f2b134]" /></span>
                  <span>info@atozrepair.com</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-700 text-sm font-medium">
                  <span className="p-2 rounded-lg bg-[#f2b134]/10"><Clock className="h-4 w-4 text-[#f2b134]" /></span>
                  <span>Available 7 days a week, 8 AM – 10 PM</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-700 text-sm font-medium">
                  <span className="p-2 rounded-lg bg-[#f2b134]/10"><MapPin className="h-4 w-4 text-[#f2b134]" /></span>
                  <span>Serving all areas across Dubai, UAE</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4 pt-5 border-t border-neutral-100">
                <div className="flex items-center gap-2 text-sm text-neutral-600 font-medium">
                  <Timer className="h-4 w-4 text-[#c8901f]" /> Same-day service
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-600 font-medium">
                  <ShieldCheck className="h-4 w-4 text-[#c8901f]" /> Warranty backed
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#FAF9F5] border border-[#f2b134]/30 rounded-2xl p-10 sm:p-14 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#f2b134] flex items-center justify-center text-neutral-900 mb-6">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-neutral-900 mb-3">Message Sent!</h3>
                  <p className="text-neutral-600 text-[15px] leading-relaxed max-w-sm mb-7">
                    Thanks for reaching out. Our team will get back to you within 30 minutes. For an
                    instant response, message us on WhatsApp.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#f2b134' }} className="rounded-full text-neutral-900 font-bold px-7 py-3.5 flex items-center gap-2.5 text-sm shadow-md">
                      <MessageCircle className="h-4.5 w-4.5 stroke-[2.5]" /> WhatsApp Us
                    </a>
                    <button onClick={() => setSubmitted(false)} className="rounded-full bg-white text-neutral-900 font-bold px-7 py-3.5 flex items-center gap-2.5 text-sm border border-neutral-200 hover:bg-neutral-50 transition-colors">
                      Send Another
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-neutral-800">Full Name <span className="text-[#f2b134]">*</span></label>
                      <input type="text" required placeholder="Enter your full name" className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f2b134] focus:border-transparent transition-all placeholder-neutral-400" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-neutral-800">Phone <span className="text-[#f2b134]">*</span></label>
                      <input type="tel" required placeholder="Enter your phone number" className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f2b134] focus:border-transparent transition-all placeholder-neutral-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-neutral-800">Email</label>
                      <input type="email" placeholder="Enter your email" className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f2b134] focus:border-transparent transition-all placeholder-neutral-400" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-neutral-800">Service Needed</label>
                      <select className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f2b134] focus:border-transparent transition-all text-neutral-700">
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-neutral-800">Message</label>
                    <textarea rows={5} placeholder="Describe the issue with your washing machine (brand, fault, error code...)" className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f2b134] focus:border-transparent transition-all placeholder-neutral-400 resize-y" />
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
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MAP + AREAS ============ */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
              <span>↳ Where We Work</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-neutral-900 leading-[1.1] mb-4">
              Serving Every Corner Of Dubai
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed">
              Wherever you are in the city, a certified technician is never far away. We cover all major
              communities for same-day washing machine repair.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Map placeholder */}
            <div className="lg:col-span-7 relative rounded-[2rem] overflow-hidden border border-neutral-200 shadow-xl min-h-[340px] bg-neutral-100">
              <iframe
                title="Washing Machine Experts service area in Dubai"
                src="https://www.openstreetmap.org/export/embed.html?bbox=55.05%2C25.05%2C55.40%2C25.30&layer=mapnik"
                className="absolute inset-0 w-full h-full grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-5 left-5 bg-white rounded-2xl shadow-xl border border-neutral-100 px-5 py-4 flex items-center gap-4 pointer-events-none">
                <div className="w-12 h-12 rounded-xl bg-[#1E1E1E] flex items-center justify-center text-[#f2b134]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display font-extrabold text-base text-neutral-900 leading-none">Dubai, UAE</p>
                  <p className="text-xs text-neutral-500 mt-1">Citywide mobile service</p>
                </div>
              </div>
            </div>

            {/* Areas list */}
            <div className="lg:col-span-5 bg-[#1E1E1E] rounded-[2rem] p-8 sm:p-10 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#f2b134] flex items-center justify-center text-neutral-900 mb-6">
                <Navigation className="h-6 w-6" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white mb-2">Areas We Cover</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Same-day repair available across all these communities and many more.
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-neutral-300 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#f2b134] shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="w-full pb-4 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative rounded-[2.5rem] bg-white border border-neutral-200/70 overflow-hidden px-6 sm:px-12 lg:px-16 py-12 sm:py-16 shadow-lg">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f2b134]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-neutral-900 leading-[1.1] tracking-tight mb-4">
              Prefer To Talk Right Now?
            </h2>
            <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed mb-9">
              Skip the form — call or WhatsApp us directly and we&apos;ll book your same-day repair on the spot.
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
