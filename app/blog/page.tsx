'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ChevronRight,
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Search,
} from 'lucide-react';
import SiteHeader, { PHONE, WHATSAPP } from '../components/site-header';
import SiteFooter from '../components/site-footer';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

const POSTS: BlogPost[] = [
  {
    id: 'why-machine-wont-drain',
    title: '7 Reasons Your Washing Machine Won\'t Drain (And How To Fix Them)',
    excerpt:
      'Water pooling in the drum after a cycle? From blocked filters to worn pumps, here are the most common drainage culprits and what each one means for your repair.',
    category: 'Troubleshooting',
    date: 'June 18, 2026',
    readTime: '6 min read',
    image: '/WhatsApp Image 2026-06-22 at 10.47.03.jpeg',
    author: 'WM Experts Team',
  },
  {
    id: 'spin-cycle-not-working',
    title: 'Clothes Coming Out Soaking Wet? Inside Spin Cycle Failures',
    excerpt:
      'A drum that refuses to spin usually points to a belt, motor or balance issue. We break down the warning signs and when it\'s time to call a technician.',
    category: 'Troubleshooting',
    date: 'June 12, 2026',
    readTime: '5 min read',
    image: '/WhatsApp Image 2026-06-22 at 10.47.38.jpeg',
    author: 'Imran Khan',
  },
  {
    id: 'extend-machine-lifespan',
    title: '10 Habits That Add Years To Your Washing Machine\'s Life',
    excerpt:
      'Simple maintenance routines — from monthly filter cleans to the right detergent dose — that keep your machine running smoothly and prevent costly breakdowns.',
    category: 'Maintenance',
    date: 'June 5, 2026',
    readTime: '8 min read',
    image: '/WhatsApp Image 2026-06-22 at 11.14.27.jpeg',
    author: 'WM Experts Team',
  },
  {
    id: 'stop-water-leaks',
    title: 'Washing Machine Leaking Water? Find The Source Fast',
    excerpt:
      'A leak can quietly damage your floor and cabinets. Learn how to trace it back to the door seal, inlet hose or internal connections before it gets worse.',
    category: 'Troubleshooting',
    date: 'May 28, 2026',
    readTime: '5 min read',
    image: '/WhatsApp Image 2026-06-22 at 11.11.00.jpeg',
    author: 'Rashed Al Marri',
  },
  {
    id: 'understanding-error-codes',
    title: 'Decoding Washing Machine Error Codes Across Top Brands',
    excerpt:
      'Samsung 5E, LG OE, Bosch F05 — error codes can feel cryptic. Here\'s what the most common drain, spin and heating codes really mean.',
    category: 'Guides',
    date: 'May 20, 2026',
    readTime: '7 min read',
    image: '/Washing Machine Power Fault Repair Hero Section.png',
    author: 'WM Experts Team',
  },
  {
    id: 'noisy-machine-causes',
    title: 'Why Is My Washing Machine So Loud? 6 Common Causes',
    excerpt:
      'Banging, grinding or rattling during a wash isn\'t normal. We explain what worn bearings, loose drums and foreign objects sound like — and the fix for each.',
    category: 'Troubleshooting',
    date: 'May 14, 2026',
    readTime: '5 min read',
    image: '/Washing Machine Noise Repair Hero Section.png',
    author: 'Sajid Hussain',
  },
  {
    id: 'choosing-detergent',
    title: 'Liquid, Powder Or Pods? Choosing The Right Detergent',
    excerpt:
      'The wrong detergent can leave residue, clog pipes and dull your clothes. A practical guide to picking the best option for your machine and water type.',
    category: 'Maintenance',
    date: 'May 6, 2026',
    readTime: '4 min read',
    image: '/Machine_with_folded_clothes_202606232148.jpeg',
    author: 'Maria Santos',
  },
  {
    id: 'repair-vs-replace',
    title: 'Repair Or Replace? When Your Washing Machine Isn\'t Worth Fixing',
    excerpt:
      'Not every breakdown means a new machine. Use our simple cost-and-age framework to decide whether a repair makes financial sense.',
    category: 'Guides',
    date: 'April 29, 2026',
    readTime: '6 min read',
    image: '/Washing Machine Door Lock Repair Hero Section.png',
    author: 'WM Experts Team',
  },
  {
    id: 'door-wont-open',
    title: 'Washing Machine Door Stuck Shut? Here\'s What To Do',
    excerpt:
      'A locked door mid-cycle is more common than you think. Learn the safe ways to release it and what a faulty interlock means for your machine.',
    category: 'Troubleshooting',
    date: 'April 22, 2026',
    readTime: '4 min read',
    image: '/Washing Machine Door Lock Repair.png',
    author: 'Imran Khan',
  },
];

const CATEGORIES = ['All', 'Troubleshooting', 'Maintenance', 'Guides'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [query, setQuery] = React.useState('');

  const featured = POSTS[0];

  const filtered = POSTS.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesQuery =
      query.trim() === '' ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-neutral-900 flex flex-col font-sans selection:bg-[#f2b134]/30">
      <SiteHeader active="blog" />

      {/* ============ HERO ============ */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-10 sm:pb-14">
        <nav className="flex items-center gap-2 text-[13px] text-neutral-500 mb-8 sm:mb-12 font-medium">
          <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-[#c8901f]">Blog</span>
        </nav>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] text-[#f2b134] text-[11px] font-mono uppercase tracking-widest mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Tips, Guides &amp; Advice</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-neutral-900 mb-6">
            The{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Repair Blog</span>
              <span className="absolute bottom-1.5 left-0 right-0 h-3.5 bg-[#f2b134]/40 -rotate-1 z-0" />
            </span>
          </h1>
          <p className="text-neutral-600 text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
            Practical washing machine care tips, brand troubleshooting guides and maintenance advice
            from Dubai&apos;s trusted technicians — written to help you spot trouble early and keep your
            machine running longer.
          </p>
        </div>
      </section>

      {/* ============ FEATURED POST ============ */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <Link href="#" className="group block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white border border-neutral-200/70 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all">
            <div className="relative aspect-[16/11] lg:aspect-auto lg:h-full w-full overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <span className="absolute top-5 left-5 bg-[#f2b134] text-neutral-900 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                Featured
              </span>
            </div>
            <div className="p-7 sm:p-10 lg:pr-12">
              <div className="flex items-center gap-3 text-[12px] text-neutral-500 font-medium mb-4">
                <span className="text-[#c8901f] font-mono uppercase tracking-wider">{featured.category}</span>
                <span className="w-1 h-1 rounded-full bg-neutral-300" />
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
                <span className="w-1 h-1 rounded-full bg-neutral-300" />
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {featured.readTime}</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] leading-[1.12] tracking-tight text-neutral-900 mb-4 group-hover:text-[#c8901f] transition-colors">
                {featured.title}
              </h2>
              <p className="text-neutral-600 text-[15px] leading-relaxed mb-6">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 group-hover:gap-3 transition-all">
                Read Article <ArrowRight className="h-4 w-4 text-[#c8901f]" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* ============ FILTER + SEARCH ============ */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div className="flex flex-wrap items-center gap-2.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                  activeCategory === cat
                    ? 'bg-[#1E1E1E] text-[#f2b134] border-[#1E1E1E]'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:border-[#f2b134] hover:text-neutral-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-white border border-neutral-200 rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#f2b134] focus:border-transparent transition-all placeholder-neutral-400"
            />
          </div>
        </div>
      </section>

      {/* ============ POST GRID ============ */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display font-bold text-xl text-neutral-900 mb-2">No articles found</p>
            <p className="text-neutral-500 text-sm">Try a different category or search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.05 }}
              >
                <Link href="#" className="group flex flex-col h-full bg-white border border-neutral-200/70 rounded-2xl overflow-hidden hover:border-[#f2b134] hover:shadow-lg transition-all">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur text-neutral-900 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                      {post.category}
                    </span>
                    <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f2b134] flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all">
                      <ArrowUpRight className="h-4.5 w-4.5 text-neutral-900 stroke-[2.5]" />
                    </span>
                  </div>

                  <div className="flex flex-col flex-grow p-6">
                    <div className="flex items-center gap-3 text-[12px] text-neutral-500 font-medium mb-3">
                      <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-300" />
                      <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg leading-snug text-neutral-900 mb-3 group-hover:text-[#c8901f] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed mb-5 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                      <span className="text-[13px] font-semibold text-neutral-700">{post.author}</span>
                      <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-neutral-900 group-hover:gap-2.5 transition-all">
                        Read <ArrowRight className="h-3.5 w-3.5 text-[#c8901f]" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      {/* ============ NEWSLETTER / CTA BAND ============ */}
      <section className="w-full py-4 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative rounded-[2.5rem] bg-[#1E1E1E] overflow-hidden px-6 sm:px-12 lg:px-16 py-12 sm:py-16 shadow-lg">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f2b134]/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2b134]/15 text-[#f2b134] text-[11px] font-mono uppercase tracking-widest mb-5">
                <Sparkles className="h-3.5 w-3.5" /> Need A Repair Now?
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-[1.1] tracking-tight mb-4">
                Don&apos;t Wait For It To Get Worse
              </h2>
              <p className="text-neutral-400 text-[15px] leading-relaxed max-w-md">
                Reading up is great — but if your machine is already acting up, our certified technicians
                can be at your door the same day with genuine parts and a full warranty.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:justify-end">
              <motion.a
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href={`tel:${PHONE}`}
                style={{ backgroundColor: '#f2b134' }}
                className="rounded-full text-neutral-900 font-bold px-8 py-4 flex items-center gap-2.5 text-sm shadow-lg"
              >
                <Phone className="h-4.5 w-4.5 stroke-[2.5]" /> Book A Repair
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="rounded-full bg-white/10 text-white font-bold px-8 py-4 flex items-center gap-2.5 text-sm border border-white/20 hover:bg-white/15 transition-colors"
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
