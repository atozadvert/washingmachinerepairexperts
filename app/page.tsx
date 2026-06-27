'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ShoppingBag, 
  ChevronDown, 
  Menu, 
  X, 
  Calendar, 
  Clock, 
  Globe, 
  Mail, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Share2, 
  Check, 
  Trash2,
  BookmarkCheck,
  TrendingUp,
  FileText,
  MousePointerClick,
  Wrench,
  Search,
  BarChart3,
  RefreshCw,
  Phone,
  MessageCircle,
  Droplets,
  RotateCw,
  ShieldCheck,
  Lock,
  Volume2,
  Zap,
  Droplet,
} from 'lucide-react';

import strategistKeynote from '../src/assets/images/strategist_keynote_1781949481725.jpg';
import emailAuditChart from '../src/assets/images/email_audit_chart_1782113988371.jpg';
import stackAuraLuxe from '../src/assets/images/stack_aura_luxe_1781953062800.jpg';
import stackSocialBoost from '../src/assets/images/stack_social_boost_1781953080695.jpg';
import stackOmnichannel from '../src/assets/images/stack_omnichannel_1781953099178.jpg';
import stackB2BFunnel from '../src/assets/images/stack_b2b_funnel_1781953118481.jpg';

// Custom Type Definitions
interface CartItem {
  id: string;
  title: string;
  category: string;
  price: number;
}

interface ServiceBrand {
  id: string;
  name: string;
  fullName: string;
  logoText: string;
  badgeColor: string;
  accentColor: string;
  specialty: string;
  avgDuration: string;
  satisfaction: string;
  tagLine: string;
  originCountry: string;
  badgeLabel: string;
}

const AVAILABLE_BLUEPRINTS: CartItem[] = [
  { id: 'bp-maintenance', title: 'Washing Machine Maintenance Guide', category: 'Care Tips', price: 0 },
  { id: 'bp-troubleshoot', title: 'Common Fault Troubleshooting Checklist', category: 'Diagnostics', price: 0 },
  { id: 'bp-brands', title: 'Brand-Specific Repair Reference Sheet', category: 'Repair Guide', price: 0 }
];

const BRANDS_LIST: ServiceBrand[] = [
  { 
    id: 'brand-samsung', 
    name: 'Samsung', 
    fullName: 'Samsung Washing Machine Repair Service', 
    logoText: 'SAMSUNG', 
    badgeColor: '#0A4A9B', 
    accentColor: '#3B82F6', 
    specialty: 'Smart Dial control, EcoBubble sensor calibration, & VRT Plus vibration profiling', 
    avgDuration: '45-90 min', 
    satisfaction: '99.4%',
    tagLine: 'ECOBUBBLE TECHNOLOGY',
    originCountry: 'S. Korea',
    badgeLabel: 'WASHER'
  },
  { 
    id: 'brand-lg', 
    name: 'LG', 
    fullName: 'LG Washing Machine Repair Service', 
    logoText: 'LG · Life\'s Good', 
    badgeColor: '#A50034', 
    accentColor: '#EC4899', 
    specialty: 'AI DD intelligence tuning, TurboWash high-pressure nozzle clearance, & DirectDrive motors', 
    avgDuration: '60 min', 
    satisfaction: '99.1%',
    tagLine: 'AI DIRECT DRIVE',
    originCountry: 'S. Korea',
    badgeLabel: 'WASHER'
  },
  { 
    id: 'brand-bosch', 
    name: 'Bosch', 
    fullName: 'Bosch Washing Machine Repair Service', 
    logoText: 'BOSCH', 
    badgeColor: '#005A9C', 
    accentColor: '#0ea5e9', 
    specialty: 'EcoSilence brushless motor servicing, SpeedPerfect timers, & AntiVibration panel isolation', 
    avgDuration: '50-80 min', 
    satisfaction: '99.6%',
    tagLine: 'GERMAN ENGINEERING',
    originCountry: 'Germany',
    badgeLabel: 'WASHER'
  },
  { 
    id: 'brand-siemens', 
    name: 'Siemens', 
    fullName: 'Siemens Washing Machine Repair Service', 
    logoText: 'SIEMENS', 
    badgeColor: '#00857A', 
    accentColor: '#14b8a6', 
    specialty: 'iQdrive magnetic motors, sensoFresh oxygenators, & i-Dos precise liquid auto-dosing', 
    avgDuration: '65 min', 
    satisfaction: '98.9%',
    tagLine: 'IQDRIVE BRUSHLESS',
    originCountry: 'Germany',
    badgeLabel: 'SYSTEM'
  },
  { 
    id: 'brand-whirlpool', 
    name: 'Whirlpool', 
    fullName: 'Whirlpool Washing Machine Repair Service', 
    logoText: 'Whirlpool', 
    badgeColor: '#F58220', 
    accentColor: '#f97316', 
    specialty: '6th Sense heat sensors, Supreme Care belt realignment, & FreshCare+ steam modules', 
    avgDuration: '45-75 min', 
    satisfaction: '98.5%',
    tagLine: '6TH SENSE SENSORS',
    originCountry: 'USA',
    badgeLabel: 'INVERTER'
  },
  { 
    id: 'brand-hover', 
    name: 'Hover', 
    fullName: 'Hover Washing Machine Repair Service', 
    logoText: 'HOVER', 
    badgeColor: '#D81E06', 
    accentColor: '#ef4444', 
    specialty: 'Deep Clean agitators, H-Wash performance logic, & high-capacity bearings', 
    avgDuration: '60-90 min', 
    satisfaction: '98.2%',
    tagLine: 'H-WASH TECHNOLOGY',
    originCountry: 'USA',
    badgeLabel: 'WASHER'
  },
  { 
    id: 'brand-electrolux', 
    name: 'Electrolux', 
    fullName: 'Electrolux Washing Machine Repair Service', 
    logoText: 'Electrolux', 
    badgeColor: '#001A4A', 
    accentColor: '#3b82f6', 
    specialty: 'UltraMix detergent pre-mixers, PerfectSpray shower valves, & SensorWash lint management', 
    avgDuration: '55-80 min', 
    satisfaction: '99.0%',
    tagLine: 'SWEDISH FABRIC CARE',
    originCountry: 'Sweden',
    badgeLabel: 'DRYER'
  },
  { 
    id: 'brand-haier', 
    name: 'Haier', 
    fullName: 'Haier Washing Machine Repair Service', 
    logoText: 'Haier', 
    badgeColor: '#0A5DA5', 
    accentColor: '#2563eb', 
    specialty: 'Direct Motion electromagnetic drives, ABT antibacterial gaskets, & Pillow Drum balance', 
    avgDuration: '50 min', 
    satisfaction: '98.8%',
    tagLine: 'ABT ANTIBACTERIAL',
    originCountry: 'China',
    badgeLabel: 'WASHER'
  },
  { 
    id: 'brand-beko', 
    name: 'Beko', 
    fullName: 'Beko Washing Machine Repair Service', 
    logoText: 'beko', 
    badgeColor: '#001E62', 
    accentColor: '#2563eb', 
    specialty: 'AquaWave curved glass doors, ProSmart Inverter board checks, & SteamCure hygiene valves', 
    avgDuration: '45-60 min', 
    satisfaction: '98.4%',
    tagLine: 'STEAMCURE HYGIENE',
    originCountry: 'Turkey',
    badgeLabel: 'WASHER'
  },
  { 
    id: 'brand-panasonic', 
    name: 'Panasonic', 
    fullName: 'Panasonic Washing Machine Repair Service', 
    logoText: 'Panasonic', 
    badgeColor: '#0000FF', 
    accentColor: '#3b82f6', 
    specialty: 'ActiveFoam high-density generators, StainMaster+ thermal plates, & Econavi infrared sensors', 
    avgDuration: '70 min', 
    satisfaction: '99.2%',
    tagLine: 'ECONAVI INTELLIGENCE',
    originCountry: 'Japan',
    badgeLabel: 'SYSTEM'
  },
  { 
    id: 'brand-hitachi', 
    name: 'Hitachi', 
    fullName: 'Hitachi Washing Machine Repair Service', 
    logoText: 'HITACHI', 
    badgeColor: '#A00000', 
    accentColor: '#ef4444', 
    specialty: 'Wind Iron centrifugal fans, Smart Drive motor couplers, & Dynamic-Stream wash pipelines', 
    avgDuration: '75 min', 
    satisfaction: '98.7%',
    tagLine: 'WIND IRON SYSTEM',
    originCountry: 'Japan',
    badgeLabel: 'DRYER'
  },
  { 
    id: 'brand-miele', 
    name: 'Miele', 
    fullName: 'Miele Washing Machine Repair Service', 
    logoText: 'Miele', 
    badgeColor: '#7D0000', 
    accentColor: '#b91c1c', 
    specialty: 'TwinDos automated dual-phase detergent pods, CapDosing micro-valves, & Honeycomb drum alloys', 
    avgDuration: '90-120 min', 
    satisfaction: '99.8%',
    tagLine: 'PREMIUM QUALITY',
    originCountry: 'Germany',
    badgeLabel: 'WASHER'
  },
  { 
    id: 'brand-ariston', 
    name: 'Ariston', 
    fullName: 'Ariston Washing Machine Repair Service', 
    logoText: 'ARISTON', 
    badgeColor: '#002F6C', 
    accentColor: '#1e3a8a', 
    specialty: 'ActiveCare anti-stain oscillators, Steam Hygiene water heaters, & Woolmark certified timers', 
    avgDuration: '60-80 min', 
    satisfaction: '98.1%',
    tagLine: 'ACTIVE-CARE SENSORS',
    originCountry: 'Italy',
    badgeLabel: 'WASHER'
  },
  { 
    id: 'brand-nikai', 
    name: 'Nikai', 
    fullName: 'Nikai Washing Machine Repair Service', 
    logoText: 'NIKAI', 
    badgeColor: '#006241', 
    accentColor: '#15803d', 
    specialty: 'High Spin Speed stabilization, Anti-Rust heavy metal cases, & ultra-quiet suspension springs', 
    avgDuration: '45-90 min', 
    satisfaction: '98.0%',
    tagLine: 'ULTRA SPIN CONTROL',
    originCountry: 'Japan',
    badgeLabel: 'WASHER'
  },
  { 
    id: 'brand-daewoo', 
    name: 'Daewoo', 
    fullName: 'Daewoo Washing Machine Repair Service', 
    logoText: 'DAEWOO', 
    badgeColor: '#10447A', 
    accentColor: '#1e40af', 
    specialty: 'Air Bubble 4D acoustic dampeners, Nano-Silver self-clean gaskets, & electronic drain pumps', 
    avgDuration: '60 min', 
    satisfaction: '97.9%',
    tagLine: 'AIR BUBBLE POWER',
    originCountry: 'S. Korea',
    badgeLabel: 'SYSTEM'
  },
  { 
    id: 'brand-nobel', 
    name: 'Nobel', 
    fullName: 'Nobel Washing Machine Repair Service', 
    logoText: 'NOBEL', 
    badgeColor: '#CC0000', 
    accentColor: '#dc2626', 
    specialty: 'Heavy-Duty drum agitators, mechanical dial selectors, & child lock system logic bypasses', 
    avgDuration: '50-70 min', 
    satisfaction: '98.3%',
    tagLine: 'HEAVY-DUTY PULSATOR',
    originCountry: 'Sweden',
    badgeLabel: 'WASHER'
  },
  { 
    id: 'brand-super-general', 
    name: 'Super General', 
    fullName: 'Super General Washing Machine Repair Service', 
    logoText: 'SUPER GENERAL', 
    badgeColor: '#005DAB', 
    accentColor: '#1d4ed8', 
    specialty: 'Stainless Steel heavy tubs, high-durability pulsators, & direct-link transmission pulleys', 
    avgDuration: '55 min', 
    satisfaction: '98.6%',
    tagLine: 'INDUSTRIAL STRENGTH',
    originCountry: 'UAE',
    badgeLabel: 'WASHER'
  },
  { 
    id: 'brand-elekta', 
    name: 'Elekta', 
    fullName: 'Elekta Washing Machine Repair Service', 
    logoText: 'ELEKTA', 
    badgeColor: '#004A7F', 
    accentColor: '#1d4ed8', 
    specialty: 'Twin-Tub semi-automatic belt calibration, Eco-Smart micro-switches, & drain selector taps', 
    avgDuration: '40-60 min', 
    satisfaction: '97.8%',
    tagLine: 'ECO-SMART MOTORS',
    originCountry: 'Japan',
    badgeLabel: 'WASHER'
  },
  { 
    id: 'brand-hisense', 
    name: 'Hisense', 
    fullName: 'Hisense Washing Machine Repair Service', 
    logoText: 'Hisense', 
    badgeColor: '#008489', 
    accentColor: '#0d9488', 
    specialty: 'PureJet direct water-inject injectors, Durable Inverter brush replacement, & Steam Tech logic', 
    avgDuration: '50-80 min', 
    satisfaction: '98.4%',
    tagLine: 'PUREJET INJECTORS',
    originCountry: 'China',
    badgeLabel: 'WASHER'
  },
  { 
    id: 'brand-kenwood', 
    name: 'Kenwood', 
    fullName: 'Kenwood Washing Machine Repair Service', 
    logoText: 'KENWOOD', 
    badgeColor: '#1A1A1A', 
    accentColor: '#4b5563', 
    specialty: 'Wide-Drum front loaders, Energy Saver Pro thermistors, & computerized control unit diagnostics', 
    avgDuration: '60-80 min', 
    satisfaction: '99.0%',
    tagLine: 'ENERGY SAVER PRO',
    originCountry: 'UK',
    badgeLabel: 'SYSTEM'
  }
];

interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  desc: string;
  details: string[];
  image: any;
  overview: string;
  problem: string;
  solution: string;
  result: string;
  metric: string;
  metricLabel: string;
}

const CASE_STUDIES_LIST: CaseStudy[] = [
  {
    id: 'card-drainage',
    tag: 'WASHING_MACHINE_DRAINAGE_REPAIR',
    title: 'Washing Machine Drainage Repair',
    desc: 'Water remaining inside the drum after a wash cycle may indicate a blocked filter, drain hose problem or pump fault. The team checks drainage issues and provides suitable repair support.',
    details: [
      'Blocked Filter Cleaning',
      'Drain Hose Inspection',
      'Pump Fault Diagnosis',
      'Water Flow Restoration'
    ],
    image: '/WhatsApp Image 2026-06-22 at 10.47.03.jpeg',
    overview: 'A washing machine that does not drain properly can leave clothes soaking wet and create unpleasant odours inside the drum.',
    problem: 'Water remaining inside the drum after a wash cycle, often caused by a blocked filter, kinked drain hose, or faulty drain pump.',
    solution: 'Our technicians inspect the drainage system, clear blockages, replace faulty pumps, and restore normal water flow in your washing machine.',
    result: 'Washing machine drainage fully restored with same-day service across Dubai.',
    metric: 'Same Day',
    metricLabel: 'Repair Service'
  },
  {
    id: 'card-spin-cycle',
    tag: 'WASHING_MACHINE_SPIN_CYCLE_REPAIR',
    title: 'Washing Machine Spin Cycle Repair',
    desc: 'Clothes coming out soaking wet or a drum that does not spin properly may point to belt, motor or load-balance faults. Technicians inspect spin-cycle problems carefully.',
    details: [
      'Drive Belt Replacement',
      'Motor Inspection & Repair',
      'Load Balance Calibration',
      'Spin Speed Restoration'
    ],
    image: '/WhatsApp Image 2026-06-22 at 10.47.38.jpeg',
    overview: 'A washing machine that fails to spin correctly leaves clothes waterlogged and extends drying time significantly.',
    problem: 'Clothes coming out soaking wet or a drum that does not spin properly, pointing to belt, motor, or load-balance faults.',
    solution: 'Our technicians inspect the spin mechanism, replace worn belts, repair motor issues, and calibrate the load balance system.',
    result: 'Spin cycle fully restored to manufacturer specifications with genuine OEM parts.',
    metric: 'Expert',
    metricLabel: 'Technicians'
  },
  {
    id: 'card-leakage',
    tag: 'WASHING_MACHINE_WATER_LEAKAGE_REPAIR',
    title: 'Washing Machine Water Leakage Repair',
    desc: 'Water leaking from the door, hose or underneath the appliance can damage the surrounding floor. The team checks seals, inlet pipes and internal leakage points.',
    details: [
      'Door Seal Replacement',
      'Inlet Pipe Inspection',
      'Hose Connection Repair',
      'Internal Leak Detection'
    ],
    image: '/WhatsApp Image 2026-06-22 at 11.11.00.jpeg',
    overview: 'Water leaks from a washing machine can cause serious damage to flooring and surrounding cabinetry if left unaddressed.',
    problem: 'Water leaking from the door, hose, or underneath the appliance, risking damage to the surrounding floor and fittings.',
    solution: 'The team checks seals, inlet pipes, hose connections, and internal leakage points to identify and fix the source of the leak.',
    result: 'All leakage points sealed and washing machine restored to leak-free operation.',
    metric: 'All Brands',
    metricLabel: 'Covered'
  },
  {
    id: 'card-drum',
    tag: 'WASHING_MACHINE_DRUM_REPAIR',
    title: 'Washing Machine Drum Repair',
    desc: 'A drum that does not move correctly, becomes loose or produces unusual sounds may need technical inspection. AtoZ handles drum-related washing machine faults in Dubai.',
    details: [
      'Drum Bearing Replacement',
      'Loose Drum Tightening',
      'Noise Diagnosis & Fix',
      'Drum Alignment Service'
    ],
    image: '/WhatsApp Image 2026-06-22 at 11.14.27.jpeg',
    overview: 'Drum problems in a washing machine can cause loud noises, vibration, and even damage to clothing during wash cycles.',
    problem: 'A drum that does not move correctly, becomes loose, or produces unusual sounds during operation.',
    solution: 'AtoZ technicians inspect drum bearings, tighten loose components, diagnose noise sources, and realign the drum assembly.',
    result: 'Drum-related washing machine faults resolved with professional repair service in Dubai.',
    metric: 'Dubai',
    metricLabel: 'Wide Service'
  }
];

export default function Page() {
  const [brandSearchQuery, setBrandSearchQuery] = React.useState('');
  const [showAllBrands, setShowAllBrands] = React.useState(false);
  const [selectedBrand, setSelectedBrand] = React.useState<ServiceBrand>(BRANDS_LIST[0]);
  
  // Parallax scroll hooks for the strategist approach section
  const approachSectionRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: approachSectionRef,
    offset: ["start end", "end start"]
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [-120, 120]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  
  // Interactive Case Studies modal selection state
  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState<CaseStudy | null>(null);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = React.useState(false);

  // Mobile check (using standard state for cross-environment safety)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('Home');
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = React.useState(false);
  
  // Interactive E-Commerce Cart Logic
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [cartSuccessMessage, setCartSuccessMessage] = React.useState<string | null>(null);

  // Booking Consultation Modal Logic
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [bookingName, setBookingName] = React.useState('');
  const [bookingEmail, setBookingEmail] = React.useState('');
  const [bookingWebsite, setBookingWebsite] = React.useState('');
  const [bookingBizType, setBookingBizType] = React.useState('Samsung');
  const [bookingGoals, setBookingGoals] = React.useState<string[]>(['Not Spinning']);
  const [selectedDate, setSelectedDate] = React.useState<string>('2026-06-22');
  const [selectedTime, setSelectedTime] = React.useState<string>('11:30 AM');
  
  // Booking API & Loading States
  const [bookingStage, setBookingStage] = React.useState<'form' | 'loading' | 'success'>('form');
  const [loadingStatuses, setLoadingStatuses] = React.useState<string>('');
  const [aiRoadmap, setAiRoadmap] = React.useState<string>('');
  const [hasCopiedRoadmap, setHasCopiedRoadmap] = React.useState(false);

  // Quick Interaction state for central yellow arrow block
  const [arrowHovered, setArrowHovered] = React.useState(false);

  // FAQ open/close accordion state
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);

  // Cart Functions
  const addToCart = (item: CartItem) => {
    if (cart.find(c => c.id === item.id)) {
      setCartSuccessMessage(`"${item.title}" is already in your briefing load.`);
      setTimeout(() => setCartSuccessMessage(null), 3500);
      return;
    }
    setCart(prev => [...prev, item]);
    setCartSuccessMessage(`Added "${item.title}" to your offline briefcase.`);
    setTimeout(() => setCartSuccessMessage(null), 3500);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(c => c.id !== id));
  };

  const toggleGoal = (goal: string) => {
    if (bookingGoals.includes(goal)) {
      setBookingGoals(prev => prev.filter(g => g !== goal));
    } else {
      setBookingGoals(prev => [...prev, goal]);
    }
  };

  // Submit Call Booking & Fetch customized AI digital roadmap
  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingEmail) return;

    setBookingStage('loading');
    
    // Staggered analytical loading steps to convey professional quality
    const steps = [
      'Initializing crawler parameters for ' + (bookingWebsite || 'business target') + '...',
      'Analyzing high-relevance semantic voids...',
      'Mapping keyword clusters against standard difficulty metrics...',
      'Synthesizing 3 high-impact tactical pivots with standard growth algorithms...',
      'Compiling final professional brief...'
    ];

    for (let i = 0; i < steps.length; i++) {
      setLoadingStatuses(steps[i]);
      await new Promise(resolve => setTimeout(resolve, 600));
    }

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: bookingName,
          email: bookingEmail,
          website: bookingWebsite,
          goals: bookingGoals,
          businessType: bookingBizType
        })
      });

      const data = await response.json();
      if (data.success) {
        setAiRoadmap(data.summary);
      } else {
        setAiRoadmap(`### ↳ CUSTOMIZED ROADMAP ERROR\n\nCould not compile strategic insights automatically. Let's draft this live on our scheduled session call!`);
      }
    } catch (err) {
      console.error(err);
      setAiRoadmap(`### ↳ CUSTOMIZED ROADMAP OFFLINE\n\nUnable to reach our analytics node at this second. Let's blueprint your growth channels live during our session!`);
    }

    setBookingStage('success');
  };

  // Formatter for AI roadmap content to display as beautiful modular elements
  const formatRoadmapItems = (text: string) => {
    if (!text) return null;
    
    // Split into lines
    const lines = text.split('\n');
    const intro: string[] = [];
    const items: { title: string; bullets: string[] }[] = [];
    let currentItem: { title: string; bullets: string[] } | null = null;

    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) return;

      if (trimmed.startsWith('###')) {
        // Main heading or subtitle
        intro.push(trimmed.replace('###', '').trim());
      } else if (trimmed.match(/^\s*\d+\.\s+\*\*(.*)\*\*/)) {
        // Matches numbered list with bold title: e.g., "1. **SEO Optimization**"
        const match = trimmed.match(/^\s*\d+\.\s+\*\*(.*)\*\*/);
        if (match) {
          if (currentItem) items.push(currentItem);
          currentItem = { title: match[1], bullets: [] };
        }
      } else if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        // Matches list bullet points
        const textOnly = trimmed.substring(2).replace(/\*\*/g, '').trim();
        if (currentItem) {
          currentItem.bullets.push(textOnly);
        } else {
          intro.push(textOnly);
        }
      } else {
        // Normal text lines
        if (currentItem) {
          currentItem.bullets.push(trimmed.replace(/\*\*/g, ''));
        } else {
          intro.push(trimmed);
        }
      }
    });

    if (currentItem) items.push(currentItem);

    return { intro: intro.join(' '), items };
  };

  const copyRoadmapToClipboard = () => {
    navigator.clipboard.writeText(aiRoadmap);
    setHasCopiedRoadmap(true);
    setTimeout(() => setHasCopiedRoadmap(false), 2000);
  };

  const parsedRoadmap = formatRoadmapItems(aiRoadmap);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-neutral-900 selection:bg-[#f2b134]/30 flex flex-col font-sans">
      
      {/* SUCCESS POPUP FOR CART */}
      <AnimatePresence>
        {cartSuccessMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            id="toast-notification"
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#1E1E1E] text-white py-3 px-6 rounded-xl shadow-xl flex items-center gap-3 border border-neutral-800 text-xs md:text-sm font-medium"
          >
            <BookmarkCheck className="text-[#f2b134] h-5 w-5 shrink-0" />
            <span>{cartSuccessMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING HEADER: Matches screenshot precisely */}
      <header className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 pt-0 z-40 relative">
        <div 
          style={{ backgroundColor: '#1E1E1E' }} 
          className="w-full flex items-center justify-between py-4 px-5 md:px-8 shadow-xl rounded-b-3xl border-x border-b border-neutral-800"
          id="aelixa-floating-navbar"
        >
          {/* Logo Brand Side */}
          <div className="flex items-center">
            <div 
              onClick={() => setActiveTab('Home')}
              className="relative h-18 w-56 sm:h-24 sm:w-72 md:w-80 -my-5 sm:-my-7 flex items-center justify-start cursor-pointer selection:bg-transparent select-none z-10 transition-transform hover:scale-[1.02]"
            >
              <Image 
                src="https://res.cloudinary.com/dbvjzyevy/image/upload/v1782108374/Red_and_Yellow_Modern_Simple_Application_Logogram_250_x_150_px_1_svnokc.png" 
                alt="Workshop And Modification Logo"
                fill
                sizes="(max-w-768px) 280px, 360px"
                className="object-contain object-left"
                referrerPolicy="no-referrer"
                priority
              />
            </div>

            {/* Vertical Divider */}
            <div className="w-[1.5px] h-6 bg-neutral-700/80 mx-4 md:mx-6 shrink-0" />

            {/* Desktop Navigation Link Menu */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-sans text-[18px] font-medium text-neutral-300">
              <button 
                onClick={() => { setActiveTab('Home'); setIsPagesDropdownOpen(false); }}
                className={`transition-colors duration-200 relative py-1 hover:text-white ${activeTab === 'Home' ? 'text-[#f2b134]' : ''}`}
                style={{ color: activeTab === 'Home' ? '#f2b134' : undefined }}
              >
                Home
                {activeTab === 'Home' && (
                  <motion.div layoutId="navIndicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f2b134]" />
                )}
              </button>

              <button 
                onClick={() => { setActiveTab('About'); setIsPagesDropdownOpen(false); }}
                className={`transition-colors duration-200 hover:text-white ${activeTab === 'About' ? 'text-[#f2b134]' : ''}`}
              >
                About
              </button>

              {/* Services Dropdown Trigger */}
              <div className="relative">
                <button
                  onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                  className="transition-colors duration-200 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  Services <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isPagesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isPagesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-10 -left-20 w-[420px] bg-[#1E1E1E] border border-neutral-800 rounded-2xl shadow-2xl p-4 z-50 text-sm text-neutral-300"
                    >
                      <div className="px-1 pb-3 mb-3 border-b border-neutral-800 flex items-center justify-between">
                        <span className="text-neutral-500 font-mono text-[10px] tracking-wider uppercase">Our Services</span>
                        <span className="text-[#f2b134] text-[10px] font-mono">8 Services</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { title: 'Drainage Repair', icon: <Droplets className="h-4 w-4" />, href: '/drainage-repair' },
                          { title: 'Spin Cycle Repair', icon: <RotateCw className="h-4 w-4" />, href: '/spin-cycle-repair' },
                          { title: 'Water Leakage Repair', icon: <ShieldCheck className="h-4 w-4" />, href: '/water-leakage-repair' },
                          { title: 'Drum Repair', icon: <Wrench className="h-4 w-4" />, href: '/drum-repair' },
                          { title: 'Door Lock Repair', icon: <Lock className="h-4 w-4" />, href: '/door-lock-repair' },
                          { title: 'Noise Repair', icon: <Volume2 className="h-4 w-4" />, href: '/noise-repair' },
                          { title: 'Power Fault Repair', icon: <Zap className="h-4 w-4" />, href: '/power-fault-repair' },
                          { title: 'Water Inlet Repair', icon: <Droplet className="h-4 w-4" />, href: '/water-inlet-repair' },
                        ].map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            onClick={() => setIsPagesDropdownOpen(false)}
                            className="flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-neutral-800 transition-all group text-left"
                          >
                            <span className="w-8 h-8 rounded-lg bg-neutral-800 group-hover:bg-[#f2b134]/15 flex items-center justify-center text-[#f2b134] shrink-0 transition-colors">
                              {service.icon}
                            </span>
                            <span className="text-[13px] font-medium text-neutral-300 group-hover:text-white transition-colors leading-tight">{service.title}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                onClick={() => { setActiveTab('Blog'); setIsPagesDropdownOpen(false); }}
                className={`transition-colors duration-200 hover:text-white ${activeTab === 'Blog' ? 'text-[#f2b134]' : ''}`}
              >
                Blog
              </button>

              <button 
                onClick={() => { setActiveTab('Contact'); setIsPagesDropdownOpen(false); }}
                className={`transition-colors duration-200 hover:text-white ${activeTab === 'Contact' ? 'text-[#f2b134]' : ''}`}
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Right Action Side */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* Desktop: CTA Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsBookingOpen(true)}
              style={{ backgroundColor: '#f2b134' }}
              className="hidden md:flex rounded-full text-neutral-900 font-bold px-6 py-2.5 items-center gap-2 text-sm shadow-lg hover:brightness-105 active:brightness-95 transition-all text-center selection:bg-transparent"
              id="book-call-navbar-btn"
            >
              <span className="tracking-tight whitespace-nowrap">Book A Call</span>
              <svg className="h-3.5 w-3.5 stroke-[2.5] stroke-neutral-900" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>

            {/* Mobile: Hamburger toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-800/80 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-all focus:outline-none"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAV DRAWER - Full overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden fixed top-4 left-4 right-4 z-40 bg-[#1E1E1E] border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800/60">
                <div className="relative h-12 w-40">
                  <Image
                    src="https://res.cloudinary.com/dbvjzyevy/image/upload/v1782108374/Red_and_Yellow_Modern_Simple_Application_Logogram_250_x_150_px_1_svnokc.png"
                    alt="Logo"
                    fill
                    className="object-contain object-left"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="px-6 py-4">
                {[
                  { label: 'Home', tab: 'Home' },
                  { label: 'About', tab: 'About' },
                  { label: 'Contact', tab: 'Contact' },
                ].map((item, idx) => (
                  <motion.button
                    key={item.tab}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    onClick={() => { setActiveTab(item.tab); setIsMobileMenuOpen(false); }}
                    className={`w-full text-left py-4 text-[17px] font-semibold transition-colors flex items-center justify-between ${
                      activeTab === item.tab ? 'text-[#f2b134]' : 'text-neutral-300'
                    } border-b border-neutral-800/40`}
                  >
                    <span>{item.label}</span>
                    {activeTab === item.tab && (
                      <span className="w-2 h-2 rounded-full bg-[#f2b134]" />
                    )}
                  </motion.button>
                ))}

                <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}>
                  <p className="pt-4 pb-2 text-[11px] font-mono uppercase tracking-widest text-neutral-500">Services</p>
                  <div className="flex flex-col gap-1">
                    {[
                      { title: 'Drainage Repair', icon: <Droplets className="h-4 w-4" />, href: '/drainage-repair' },
                      { title: 'Spin Cycle Repair', icon: <RotateCw className="h-4 w-4" />, href: '/spin-cycle-repair' },
                      { title: 'Water Leakage Repair', icon: <ShieldCheck className="h-4 w-4" />, href: '/water-leakage-repair' },
                      { title: 'Drum Repair', icon: <Wrench className="h-4 w-4" />, href: '/drum-repair' },
                      { title: 'Door Lock Repair', icon: <Lock className="h-4 w-4" />, href: '/door-lock-repair' },
                      { title: 'Noise Repair', icon: <Volume2 className="h-4 w-4" />, href: '/noise-repair' },
                      { title: 'Power Fault Repair', icon: <Zap className="h-4 w-4" />, href: '/power-fault-repair' },
                      { title: 'Water Inlet Repair', icon: <Droplet className="h-4 w-4" />, href: '/water-inlet-repair' },
                    ].map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-2 py-3 rounded-xl hover:bg-neutral-800 transition-all group"
                      >
                        <span className="w-8 h-8 rounded-lg bg-neutral-800 group-hover:bg-[#f2b134]/15 flex items-center justify-center text-[#f2b134] shrink-0 transition-colors">
                          {service.icon}
                        </span>
                        <span className="text-[15px] font-medium text-neutral-300 group-hover:text-white transition-colors">{service.title}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="px-6 pb-6 pt-2 flex flex-col gap-3">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => { setIsMobileMenuOpen(false); setIsBookingOpen(true); }}
                  style={{ backgroundColor: '#f2b134' }}
                  className="w-full py-4 rounded-2xl font-bold text-neutral-900 flex items-center justify-center gap-2.5 text-[15px] shadow-lg"
                >
                  <Phone className="h-4.5 w-4.5 stroke-[2.5]" />
                  <span>Book A Call</span>
                </motion.button>
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl font-bold text-neutral-300 border border-neutral-700 flex items-center justify-center gap-2.5 text-[15px] hover:bg-neutral-800 transition-colors"
                >
                  <MessageCircle className="h-4.5 w-4.5 stroke-[2.5]" />
                  <span>WhatsApp Us</span>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* HERO SECTION CONTAINER: Replicated layout, color and exact elements */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 md:px-8 py-10 md:py-16 max-w-7xl mx-auto w-full select-none">
        
        {/* TOP ACCENT CHIPS */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center gap-2 uppercase tracking-[0.22em] text-[11px] md:text-sm font-semibold text-neutral-800 mb-8 mt-4 select-none"
        >
          {/* Custom Yellow Curved Arrow matching the screenshot prefix ↳ */}
          <span className="text-[#f2b134] animate-pulse">
            <svg 
              className="h-4.5 w-4.5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M9 10l5 5 5-5"/>
              <path d="M14 4v11"/>
            </svg>
          </span>
          <span className="font-display tracking-[0.24rem] text-xs md:text-[13px] font-bold">A TO Z APPLIANCES REPAIR DUBAI</span>
        </motion.div>

        {/* MASSIVE TYPOGRAPHY DISPLAY LINES */}
        <div className="flex flex-col text-center w-full max-w-5xl leading-[1.05]">
          {/* Line 1: "Your Next Best" */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-neutral-900 font-display font-bold select-none tracking-tight text-[36px] sm:text-[48px] md:text-[64px]"
          >
            Washing Machine Repair
          </motion.h1>

          {/* Line 2: "Marketing [Custom Icon Block] Decision" */}
          <div className="flex items-center justify-center flex-wrap gap-x-2 md:gap-x-4 h-auto py-1 md:py-3 select-none">
            
            {/* Marketing phrase */}
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-900 font-display font-bold tracking-tight text-[36px] sm:text-[48px] md:text-[64px]"
            >
              in Dubai
            </motion.span>
            
            {/* Custom Yellow Rounded-Square Arrow block matching the center logo */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.4 }}
              onMouseEnter={() => setArrowHovered(true)}
              onMouseLeave={() => setArrowHovered(false)}
              onClick={() => setIsBookingOpen(true)}
              style={{ backgroundColor: '#f2b134' }}
              className="cursor-pointer shadow-md inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-[64px] md:h-[64px] rounded-[14px] sm:rounded-2xl shrink-0 align-middle transform transition-all group active:scale-95 hover:shadow-lg relative overflow-hidden"
              id="central-yellow-arrow-block"
            >
              {/* Subtle hover waves inside block */}
              <AnimatePresence>
                {arrowHovered && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.15, scale: 1.3 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white rounded-full"
                  />
                )}
              </AnimatePresence>

              {/* Precise Wrench icon matching the user request */}
              <motion.div
                animate={{ 
                  rotate: arrowHovered ? [0, -15, 20, 0] : 0, 
                  scale: arrowHovered ? 1.1 : 1 
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <Wrench className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-neutral-900 stroke-[2.5]" />
              </motion.div>
            </motion.div>

            {/* Faded grey "Decision" */}
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-400 font-display font-bold tracking-tight text-[36px] sm:text-[48px] md:text-[64px]"
            >
              – Same Day
            </motion.span>
          </div>

        </div>

        {/* DESCRIPTION PARAGRAPH SUBTEXT */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="text-neutral-600 text-center max-w-3xl px-6 mt-8 md:mt-11 select-none text-[15px] sm:text-base md:text-lg lg:text-[20px] font-normal leading-relaxed tracking-normal"
        >
          Are you searching for a washing machine repair in Dubai! At A To Z Appliances Repair, we provide a complete washing machine repair and service solution in Dubai
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8 md:mt-10 select-none"
        >
          <motion.a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ backgroundColor: '#f2b134' }}
            className="rounded-full text-neutral-900 font-bold px-7 py-3.5 flex items-center gap-2.5 text-sm shadow-md transition-all cursor-pointer font-sans"
          >
            <MessageCircle className="h-4.5 w-4.5 stroke-[2.5]" />
            <span>WhatsApp Us</span>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-white text-neutral-900 font-bold px-7 py-3.5 flex items-center gap-2.5 text-sm shadow-sm hover:bg-neutral-50 border border-neutral-200 transition-all cursor-pointer font-sans"
          >
            <Phone className="h-4.5 w-4.5 stroke-[2.5]" />
            <span>Contact Us</span>
          </motion.a>
        </motion.div>

      </main>

      {/* ABOUT THE STRATEGIST SECTION: Custom replication matching the screenshot */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 select-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          
          {/* LEFT CARD: Dark theme panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: '#1E1E1E' }}
            className="lg:col-span-6 rounded-[2rem] p-6 sm:p-8 md:p-12 flex flex-col justify-between border border-neutral-800 shadow-2xl min-h-[500px] order-2 lg:order-1"
            id="strategist-about-card"
          >
            <div>
              {/* Top Badge Accent */}
              <div className="flex items-center gap-2 uppercase tracking-[0.2em] text-[11px] font-bold text-[#f2b134] mb-8 font-display">
                <svg 
                  className="h-3.5 w-3.5 rotate-90 stroke-[#f2b134]" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  strokeWidth="3m"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 10l5 5 5-5"/>
                  <path d="M14 4v11"/>
                </svg>
                <span>About Our Repair Service</span>
              </div>

              {/* Title Header */}
              <h2 className="font-display font-medium text-4xl sm:text-[45px] md:text-[52px] leading-[1.1] tracking-tight text-white mb-6">
                Expert Repair.<br />
                <span className="text-neutral-400">Same Day Service.</span>
              </h2>

              {/* Description Paragraph */}
              <p className="text-neutral-300 font-sans text-[15px] sm:text-base leading-relaxed tracking-normal max-w-xl mb-10 font-normal">
                A To Z Appliances Repair provides professional washing machine repair services across Dubai. Our certified technicians handle all major brands with genuine spare parts and a commitment to same-day service.
              </p>

              {/* Buttons Row with specialized arrows */}
              <div className="flex flex-wrap gap-4 mb-10 sm:mb-14">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsBookingOpen(true)}
                  style={{ backgroundColor: '#f2b134' }}
                  className="rounded-full text-neutral-900 font-bold px-6 py-3.5 flex items-center gap-2 text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Book A Repair</span>
                  <svg className="h-4 w-4 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>

                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setActiveTab('Contact');
                    setIsBookingOpen(true);
                  }}
                  className="rounded-full bg-white text-neutral-900 font-bold px-6 py-3.5 flex items-center gap-2 text-sm shadow-sm hover:bg-neutral-50 border border-neutral-100 transition-all cursor-pointer"
                >
                  <span>Our Services</span>
                  <svg className="h-4 w-4 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Bottom Inner Card Block: Aura Luxe */}
            <div className="border border-neutral-800 bg-neutral-900/40 rounded-2xl p-4 flex items-center justify-between gap-4 mt-auto">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-neutral-800 border border-neutral-700">
                  {/* Elegant aesthetic element representing the flow in screenshot */}
                  <img 
                    src="https://picsum.photos/seed/aurashe/120/120" 
                    alt="Aura Luxe brand thumbnail"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-white text-sm sm:text-[15px] font-bold leading-normal">
                    Samsung Washer — Drum Repair
                  </h4>
                  <p className="text-xs text-neutral-500">Recent Repair in Dubai Marina</p>
                </div>
              </div>

              <button 
                onClick={() => setIsBookingOpen(true)}
                className="text-xs font-bold text-[#f2b134] hover:underline flex items-center gap-1 shrink-0 px-2 py-1 select-all"
              >
                <span>View Details</span>
                <span className="text-[#f2b134]">↳</span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Video container with overlaid stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 relative rounded-[2rem] overflow-hidden bg-neutral-950 min-h-[350px] sm:min-h-[500px] lg:min-h-full flex flex-col justify-end p-4 sm:p-6 border border-neutral-200/30 shadow-2xl order-1 lg:order-2"
            id="strategist-video-card"
          >
            {/* Background Loop Video */}
            <video 
              src="https://res.cloudinary.com/dbvjzyevy/video/upload/v1781946429/Washing_machine_starts_wash_cycle_202606201210_rohep0.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 object-cover w-full h-full brightness-95"
            />

            {/* Dark overlay for beautiful contrast transition */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-black/10 pointer-events-none" />

            {/* Overlaid Stats Row */}
            <div className="relative z-10 grid grid-cols-2 gap-2.5 sm:gap-4 w-full mt-auto">

              {/* Stat Item 1 */}
              <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl flex flex-col justify-between border border-white/40">
                <div className="text-left">
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    <span className="text-xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display">3.8</span>
                    <span className="text-lg sm:text-2xl font-bold text-[#f2b134] font-display">×</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-neutral-500 font-medium leading-normal mt-0.5 sm:mt-1 max-w-[150px]">
                    Average ROAS on repairs
                  </p>
                </div>
                <div className="mt-2 sm:mt-4 border border-neutral-200/80 rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-bold text-neutral-600 bg-neutral-50/50 w-fit flex items-center gap-1 leading-none">
                  <span>↑ Same day service rate</span>
                </div>
              </div>

              {/* Stat Item 2 */}
              <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl flex flex-col justify-between border border-white/40">
                <div className="text-left">
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    <span className="text-xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display">+240</span>
                    <span className="text-lg sm:text-2xl font-bold text-[#f2b134] font-display">+</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-neutral-500 font-medium leading-normal mt-0.5 sm:mt-1">
                    Washing machines repaired monthly
                  </p>
                </div>
                <div className="mt-2 sm:mt-4 border border-neutral-200/80 rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-bold text-neutral-600 bg-neutral-50/50 w-fit flex items-center gap-1 leading-none">
                  <span>↑ All areas across Dubai</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* COMPACT AUTHORIZED CHANNELS & BRAND DIAGNOSTICS */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 select-none bg-neutral-50/50 border-t border-b border-neutral-200/30">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 text-[#f2b134] text-xs font-mono uppercase tracking-wider mb-4 animate-pulse">
            <Wrench className="h-3 w-3" />
            <span>20+ Manufacturers Supported</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-[45px] tracking-tight text-neutral-900 leading-[1.1]">
            Washing Machine Repair Brands
          </h2>
          <p className="text-neutral-550 text-sm sm:text-base leading-relaxed mt-4 font-sans font-normal">
            Certified technical calibration, electronic control unit diagnostic checks, and original manufacturer replacement parts for all premium appliance models.
          </p>
        </div>

        {/* Dynamic Interactive Search & Quick Filter */}
        <div className="max-w-xl mx-auto mb-10 px-4">
          <div className="relative rounded-2xl bg-white shadow-md border border-neutral-200 p-1.5 flex items-center">
            <span className="pl-3.5 pr-2.5 text-neutral-400">
              <Search className="h-4.5 w-4.5" />
            </span>
            <input 
              type="text" 
              placeholder="Search your washing machine brand... (e.g. Bosch, Miele)" 
              value={brandSearchQuery}
              onChange={(e) => setBrandSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-neutral-900 font-medium focus:outline-none placeholder-neutral-400 py-2"
            />
            {brandSearchQuery && (
              <button 
                onClick={() => setBrandSearchQuery('')}
                className="px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 rounded-lg text-xs font-bold transition mr-1"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Main Grid of Beautiful Customized Brand Cards (Screenshot Style Replication) */}
        <div className="max-w-7xl mx-auto px-4 mt-12">
          {(() => {
            const filteredList = BRANDS_LIST.filter(brand => 
              brand.fullName.toLowerCase().includes(brandSearchQuery.toLowerCase()) || 
              brand.name.toLowerCase().includes(brandSearchQuery.toLowerCase())
            );

            // Hide the last 2 rows (last 10 cards) if search query is empty and showAllBrands is false
            const list = brandSearchQuery ? filteredList : (showAllBrands ? filteredList : filteredList.slice(0, 10));

            if (list.length === 0) {
              return (
                <div className="text-center py-20 bg-white border border-neutral-200/60 rounded-[2rem] shadow-sm">
                  <Wrench className="h-10 w-10 text-neutral-300 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-neutral-700">No matching brand found in official catalogs.</p>
                  <p className="text-xs text-neutral-400 mt-1">We service custom built or non-standard industrial washing models too. Book a consultation below.</p>
                  <button 
                    onClick={() => { setBrandSearchQuery(''); }}
                    className="mt-4 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-xs font-bold transition"
                  >
                    Reset Filter
                  </button>
                </div>
              );
            }

            return (
              <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 w-full">
                  {list.map(brand => (
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      key={brand.id}
                      onClick={() => {
                        setSelectedBrand(brand);
                        setIsBookingOpen(true);
                      }}
                      className="bg-white border border-neutral-200/60 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer min-h-[220px]"
                    >
                      {/* CENTER STYLIZED BRAND GRAPHICS & TYPOGRAPHY LOGO (Hand-crafted replication of the screenshot logo styles) */}
                      <div className="flex-grow flex flex-col items-center justify-center py-4">
                        {brand.id === 'brand-samsung' && (
                          <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-xl sm:text-2xl font-black tracking-widest text-[#0A4A9B] italic leading-none">SAMSUNG</span>
                            <span className="text-[9px] font-bold tracking-widest text-red-650 mt-1 inline-block uppercase">OFFICIAL DEALER</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-lg' && (
                          <div className="flex flex-col items-center justify-center text-center">
                            <div className="flex items-center gap-1.5 justify-center">
                              <span className="w-5.5 h-5.5 rounded-full border-2 border-[#A50034] flex items-center justify-center text-[#A50034] text-[10px] font-black leading-none font-sans">L</span>
                              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#A50034]">LG</span>
                            </div>
                            <span className="text-[9px] font-semibold text-neutral-400 mt-1 uppercase tracking-wider">Life&apos;s Good</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-bosch' && (
                          <div className="flex flex-col items-center justify-center text-center">
                            <div className="border-2 border-neutral-800 px-3 py-1 bg-white inline-block">
                              <span className="text-lg sm:text-xl font-sans font-black tracking-[0.1em] text-neutral-800">BOSCH</span>
                            </div>
                            <span className="text-[9px] font-bold tracking-wider text-[#005A9C] mt-2 uppercase">S6 AGM CALIBRATION</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-siemens' && (
                          <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-xl sm:text-2xl font-sans font-black tracking-widest text-[#00857A]">SIEMENS</span>
                            <span className="text-[9px] font-mono tracking-wider text-neutral-400 mt-1 uppercase">German Performance</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-whirlpool' && (
                          <div className="flex flex-col items-center justify-center text-center relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-14 h-6 border-b border-r border-[#F58220]/75 rounded-full rotate-[-15deg] pointer-events-none" />
                            <span className="text-xl sm:text-2xl font-serif font-extrabold italic text-[#002F6C] relative z-10">Whirlpool</span>
                            <span className="text-[9px] font-bold text-[#F58220] tracking-widest mt-1 uppercase">6th Sense Tech</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-hover' && (
                          <div className="flex flex-col items-center justify-center text-center">
                            <div className="relative">
                              <span className="text-2xl sm:text-3xl font-sans font-black italic tracking-tighter text-[#D81E06]">HOVER</span>
                              <div className="absolute -bottom-0.5 left-0 right-0 h-[2.5px] bg-[#D81E06]" />
                            </div>
                            <span className="text-[9px] font-bold tracking-[0.15em] text-neutral-500 mt-2 uppercase">H-Clean Diagnostics</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-electrolux' && (
                          <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-lg sm:text-xl font-light tracking-[0.15em] text-[#001A4A] uppercase">Electrolux</span>
                            <span className="text-[9px] font-semibold text-neutral-400 mt-1 uppercase tracking-widest">Swedish Integrity</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-haier' && (
                          <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-[22px] font-sans font-black tracking-tighter text-[#0A5DA5]">Haier</span>
                            <span className="text-[9px] font-mono font-medium text-neutral-400 uppercase tracking-widest mt-1">Anti-Bacterial</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-beko' && (
                          <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-xl sm:text-2xl font-sans font-extrabold text-[#001E62] tracking-wide">beko</span>
                            <div className="w-8 h-0.5 bg-sky-500 mt-1" />
                          </div>
                        )}
                        
                        {brand.id === 'brand-panasonic' && (
                          <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-xl sm:text-2xl font-bold tracking-tight text-blue-800">Panasonic</span>
                            <span className="text-[9px] font-bold text-red-650 tracking-[0.2em] mt-1.5 font-mono">JAPAN DESIGN</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-hitachi' && (
                          <div className="flex flex-col items-center justify-center text-center font-serif">
                            <span className="text-xl sm:text-2xl font-black italic tracking-wide text-[#A00000]">HITACHI</span>
                            <span className="text-[9px] font-bold text-[#A00000]/70 tracking-wider mt-1 uppercase">Wind Iron Drum</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-miele' && (
                          <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-xl sm:text-2xl font-serif font-black tracking-wide text-[#7D0000] uppercase">Miele</span>
                            <span className="text-[9px] font-bold text-[#7D0000] mt-1 font-mono tracking-widest">IMMER BESSER</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-ariston' && (
                          <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-lg sm:text-xl font-extrabold italic tracking-[0.12em] text-[#002F6C]">ARISTON</span>
                            <span className="text-[9px] text-neutral-400 mt-1 font-bold uppercase tracking-widest">Active Care Hub</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-nikai' && (
                          <div className="flex flex-col items-center justify-center text-center font-mono">
                            <span className="text-lg sm:text-xl font-bold tracking-[0.22em] text-[#006241]">NIKAI</span>
                            <span className="text-[9px] text-emerald-700 font-bold uppercase mt-1">High Spin Speed</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-daewoo' && (
                          <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-[#10447A] font-black text-xl tracking-[0.12em] italic">DAEWOO</span>
                            <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest mt-1">Air Bubble 4D</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-nobel' && (
                          <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-xl sm:text-2xl font-black text-[#CC0000] tracking-widest bg-yellow-400/5 px-2 py-0.5 border border-yellow-500/25">NOBEL</span>
                            <span className="text-[9px] font-bold font-mono text-neutral-400 mt-1.5 uppercase">Heavy Duty Tech</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-super-general' && (
                          <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-base sm:text-lg font-black tracking-tighter text-[#005DAB] uppercase leading-tight">SUPER GENERAL</span>
                            <span className="text-[9px] text-[#005DAB] font-bold mt-1">CLASSIC TOUGHNESS</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-elekta' && (
                          <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-base sm:text-lg font-mono font-light tracking-[0.25em] text-[#004A7F]">ELEKTA</span>
                            <span className="text-[9px] font-semibold text-[#004A7F]/70 mt-1 uppercase tracking-widest">ECO-SMART CHIP</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-hisense' && (
                          <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-xl sm:text-2xl font-sans font-bold text-[#008489] tracking-tight">Hisense</span>
                            <span className="text-[9px] font-mono text-[#008489]/80 uppercase mt-1">PureJet Calibrate</span>
                          </div>
                        )}
                        
                        {brand.id === 'brand-kenwood' && (
                          <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-lg sm:text-xl font-mono font-black tracking-[0.2em] text-neutral-900 border-b-2 border-neutral-800 pb-0.5 uppercase">KENWOOD</span>
                            <span className="text-[9px] font-bold text-neutral-400 uppercase mt-1.5">Energy Saver Pro</span>
                          </div>
                        )}
                      </div>

                      {/* BOTTOM ROW METRICS */}
                      <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between w-full">
                        <span className="bg-[#f0ad2c]/10 text-[#a07115] font-bold tracking-widest text-[9px] uppercase px-2 py-0.5 rounded">
                          {brand.badgeLabel}
                        </span>
                        <span className="text-[10px] font-mono font-semibold text-neutral-400">
                          {brand.originCountry}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {!brandSearchQuery && filteredList.length > 10 && (
                  <div className="mt-12 flex justify-center">
                    <button 
                      onClick={() => setShowAllBrands(!showAllBrands)}
                      style={{ backgroundColor: '#f2b134' }}
                      className="px-8 py-3 rounded-full text-neutral-900 font-bold text-xs flex items-center gap-2 shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer font-sans"
                    >
                      <span>{showAllBrands ? 'Show Less' : 'Show All'}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showAllBrands ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      </section>

      {/* SCROLL STACK: REPAIR SERVICES */}
      <section className="w-full bg-[#FAF9F5] border-t border-neutral-200/40 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#f2b134] tracking-widest mb-4">
              <span>↳ OUR REPAIR SERVICES</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-neutral-900 font-sans mb-5 leading-none">
              Washing Machine Repair Services in Dubai
            </h2>
            <p className="text-neutral-500 text-[15px] sm:text-base font-sans font-medium">
              Professional washing machine repair solutions for every type of fault. From drainage issues to drum problems, our certified technicians provide expert repair services across Dubai.
            </p>
          </div>

          {/* Sticky Scroll Stack Container */}
          <div className="relative flex flex-col gap-6 lg:gap-24 w-full">
            {CASE_STUDIES_LIST.map((study, idx) => {
              const stickyTop = 110 + idx * 24;

              return (
                <div
                  key={study.id}
                  className="w-full sticky"
                  style={{
                    top: `${stickyTop}px`,
                    zIndex: (idx + 1) * 10,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#1E1E1E] border border-neutral-800 rounded-2xl lg:rounded-[2.5rem] p-5 sm:p-10 lg:p-12 shadow-2xl flex flex-col justify-between"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center">

                      {/* Image: show on top for mobile */}
                      <div className="lg:col-span-5 w-full flex justify-center order-1 lg:order-2">
                        <div className="relative w-full aspect-[16/10] lg:aspect-square rounded-xl lg:rounded-[2rem] overflow-hidden border border-neutral-800 bg-[#252528] group">
                          <Image
                            src={study.image}
                            alt={study.title}
                            fill
                            sizes="(max-w-1024px) 100vw, 420px"
                            className="object-cover brightness-95 group-hover:scale-[1.03] transition-transform duration-700"
                            referrerPolicy="no-referrer"
                            priority={idx === 0}
                          />
                        </div>
                      </div>

                      {/* Text content */}
                      <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">

                        <span className="text-neutral-400 font-mono text-[10px] sm:text-[13px] tracking-widest uppercase mb-2 sm:mb-4 block">
                          {study.tag}
                        </span>

                        <h3 className="text-white text-xl sm:text-4xl lg:text-4xl xl:text-5xl font-black tracking-tight leading-none font-sans mb-2 sm:mb-4">
                          {study.title}
                        </h3>

                        <p className="text-neutral-400 text-xs sm:text-base leading-relaxed font-sans mb-4 sm:mb-8 max-w-xl">
                          {study.desc}
                        </p>

                        <button
                          onClick={() => {
                            setSelectedCaseStudy(study);
                            setIsCaseStudyOpen(true);
                          }}
                          style={{ backgroundColor: '#f2b134' }}
                          className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-neutral-900 font-sans font-black text-xs flex items-center gap-2 hover:bg-[#e0a02c] active:scale-95 transition-all cursor-pointer mb-4 sm:mb-8 shadow-lg hover:shadow-xl"
                        >
                          <span>Call Now</span>
                          <span className="text-xs">↳</span>
                        </button>

                        <div className="w-full border-t border-neutral-800 pt-4 sm:pt-6 mt-1 sm:mt-2">
                          <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-4">
                            {study.details.map((detail, dIdx) => (
                              <div
                                key={detail}
                                className={`flex items-center gap-1.5 sm:gap-2.5 text-neutral-300 pb-1 sm:pb-2 ${
                                  dIdx < 2 ? 'sm:border-b sm:border-neutral-800/20' : ''
                                }`}
                              >
                                <span className="text-[#f2b134] text-[10px] sm:text-xs font-mono">↳</span>
                                <span className="text-[10px] sm:text-sm font-sans font-medium text-neutral-200">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SERVICE OVERVIEW, KEY BENEFITS & WORKFLOW SECTION (Copying screenshot design precisely) */}
      <section className="w-full bg-[#FAF9F5] py-20 sm:py-28 border-t border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
            
            {/* Left Column: Overviews, Benefits, and Workflow Core Blocks */}
            <div className="lg:col-span-7 flex flex-col gap-12 text-left order-2 lg:order-1">
              
              {/* Service Overview Block */}
              <div className="flex flex-col gap-4">
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight leading-none">
                  Service Overview:
                </h2>
                <p className="text-neutral-650 text-[15px] sm:text-base md:text-[17px] leading-relaxed font-sans max-w-2xl">
                  A To Z Appliances Repair Dubai offers professional washing machine repair services for all major brands including Samsung, LG, Bosch, Siemens, Whirlpool, and more. Our certified technicians provide same-day washing machine repair across all Dubai areas with genuine OEM spare parts and a service warranty.
                </p>
              </div>

              {/* Key Benefits Block */}
              <div className="flex flex-col gap-5 border-t border-neutral-200/30 pt-8">
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight leading-none">
                  Key Benefits:
                </h2>
                <ul className="flex flex-col gap-4 font-sans text-neutral-600 text-sm sm:text-base leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#f2b134] text-xs font-bold font-mono mt-1 shrink-0">↳</span>
                    <div>
                      <strong className="text-neutral-950 font-bold">Same Day Washing Machine Repair:</strong> Fast response and on-site repair service across all areas in Dubai.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#f2b134] text-xs font-bold font-mono mt-1 shrink-0">↳</span>
                    <div>
                      <strong className="text-neutral-950 font-bold">Genuine OEM Parts:</strong> We use only original manufacturer parts for lasting washing machine repairs.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#f2b134] text-xs font-bold font-mono mt-1 shrink-0">↳</span>
                    <div>
                      <strong className="text-neutral-950 font-bold">All Brands Covered:</strong> Expert washing machine repair for Samsung, LG, Bosch, Whirlpool, Siemens, and 20+ brands in Dubai.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Our Proven Creative Workflow Block */}
              <div className="flex flex-col gap-6 border-t border-neutral-200/30 pt-8">
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight leading-none">
                  Our Washing Machine Repair Process:
                </h2>
                
                <div className="flex flex-col gap-6 pl-1 pt-2">
                  {/* Step 1 */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <h3 className="font-display font-bold text-lg sm:text-[20px] text-neutral-950">
                      1 . Contact & Booking:
                    </h3>
                    <p className="text-neutral-550 text-sm sm:text-[15px] leading-relaxed max-w-xl pl-1">
                      Call us or book online for same-day washing machine repair in Dubai. We confirm your appointment within minutes.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <h3 className="font-display font-bold text-lg sm:text-[20px] text-neutral-950">
                      2 . Technician Dispatch:
                    </h3>
                    <p className="text-neutral-550 text-sm sm:text-[15px] leading-relaxed max-w-xl pl-1">
                      A certified washing machine repair technician is dispatched to your location anywhere in Dubai.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <h3 className="font-display font-bold text-lg sm:text-[20px] text-neutral-950">
                      3 . On-Site Diagnosis:
                    </h3>
                    <p className="text-neutral-550 text-sm sm:text-[15px] leading-relaxed max-w-xl pl-1">
                      Our technician inspects your washing machine, identifies the fault, and provides a transparent repair quote.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <h3 className="font-display font-bold text-lg sm:text-[20px] text-neutral-950">
                      4 . Washing Machine Repair:
                    </h3>
                    <p className="text-neutral-550 text-sm sm:text-[15px] leading-relaxed max-w-xl pl-1">
                      The repair is carried out using genuine OEM spare parts to restore your washing machine to full working condition.
                    </p>
                  </div>

                  {/* Step 5 */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <h3 className="font-display font-bold text-lg sm:text-[20px] text-neutral-950">
                      5 . Quality Testing:
                    </h3>
                    <p className="text-neutral-550 text-sm sm:text-[15px] leading-relaxed max-w-xl pl-1">
                      We run a full wash cycle test to make sure your washing machine operates smoothly before completing the job.
                    </p>
                  </div>

                  {/* Step 6 */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <h3 className="font-display font-bold text-lg sm:text-[20px] text-neutral-950">
                      6 . Service Warranty:
                    </h3>
                    <p className="text-neutral-550 text-sm sm:text-[15px] leading-relaxed max-w-xl pl-1">
                      Every washing machine repair comes with a service warranty covering parts and labour for your peace of mind.
                    </p>
                  </div>

                  {/* Step 7 */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <h3 className="font-display font-bold text-lg sm:text-[20px] text-neutral-950">
                      7 . Follow-Up Support:
                    </h3>
                    <p className="text-neutral-550 text-sm sm:text-[15px] leading-relaxed max-w-xl pl-1">
                      Our team follows up after the repair to ensure your washing machine continues to perform at its best.
                    </p>
                  </div>
                </div>
              </div>

              {/* STYLISH MATCHING CALL TO ACTION BUTTONS */}
              <div className="flex flex-wrap gap-4 pt-8 border-t border-neutral-200/30">
                <motion.a 
                  href="tel:+1234567890" 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ backgroundColor: '#f2b134' }}
                  className="rounded-full text-neutral-900 font-bold px-6 py-3.5 flex items-center gap-2 text-sm shadow-md transition-all cursor-pointer select-none font-sans"
                >
                  <Phone className="h-4.5 w-4.5 stroke-[2.5]" />
                  <span>Call Now</span>
                </motion.a>

                <motion.a 
                  href="https://wa.me/your-number-here" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full bg-white text-neutral-900 font-bold px-6 py-3.5 flex items-center gap-2 text-sm shadow-sm hover:bg-neutral-50 border border-neutral-100 transition-all cursor-pointer select-none font-sans"
                >
                  <MessageCircle className="h-4.5 w-4.5 stroke-[2.5]" />
                  <span>WhatsApp Us</span>
                </motion.a>
              </div>

            </div>

            {/* Right Column: Sticky Free Audit / Lead Capture Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 z-20 w-full order-1 lg:order-2">
              <div 
                style={{ backgroundColor: '#1E1E1E' }}
                className="rounded-[2.5rem] p-8 sm:p-10 md:p-12 border border-neutral-800 shadow-2xl flex flex-col items-start text-left select-none relative overflow-hidden"
              >
                {/* Background lighting flare effect */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#f2b134]/5 rounded-full blur-[80px] pointer-events-none" />

                {/* Subtitle / Big Bold Header */}
                <h3 className="text-white text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight leading-[1.2] mb-5 font-display max-w-md">
                  Need Washing Machine Repair in Dubai?
                </h3>

                {/* Body paragraph */}
                <p className="text-white text-[14px] sm:text-[15px] leading-relaxed mb-8 font-sans">
                  Get a free diagnosis for your washing machine. Our expert technicians in Dubai will identify the issue and provide a transparent quote before any repair work begins.
                </p>

                <div className="flex flex-row items-center justify-between gap-4 sm:gap-6 w-full mt-2">
                  {/* Book A Strategy Call Action Button with curved arrow */}
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsBookingOpen(true)}
                    style={{ backgroundColor: '#f2b134' }}
                    className="rounded-full text-neutral-900 font-bold px-6 py-3.5 flex items-center justify-between gap-3 text-xs sm:text-sm shadow-xl transition-all select-none font-sans cursor-pointer hover:brightness-105 shrink-0"
                  >
                    <span>Book A Repair Visit</span>
                    {/* SVG bent custom arrow matching screenshot precisely */}
                    <svg className="h-4 w-4 stroke-[2.5] text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 12h11a3 3 0 013 3v2M18 17l-3-3m3 3l3-3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.button>

                  {/* Elegant decorative emailAuditChart Image */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border border-neutral-800 shadow-lg">
                    <Image 
                      src="https://res.cloudinary.com/dbvjzyevy/image/upload/v1782113799/wash_1_qswt69.png" 
                      alt="Professional Washing Machine Repair Dubai" 
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: STRATEGIST-LED, BUILT ON DATA (Replicating exact layout design scheme from the screenshot) */}
      <section ref={approachSectionRef} className="w-full bg-[#FAF9F5] border-t border-neutral-200/40 py-20 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Pill Header, Main Display Typography, and Stacked Info Cards */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-left">
            <div>
              {/* Gold prefix arrow with uppercase tagline pill */}
              <div className="flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#f2b134] tracking-widest mb-4">
                <span>↳ WHY CHOOSE US</span>
              </div>
              
              {/* Display Heading precisely mimicking screenshot alignment & tracking */}
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl tracking-tight leading-none text-neutral-900 mb-6 font-sans">
                Trusted Washing Machine <br />
                <span className="text-neutral-400">Repair Experts</span>
              </h2>
              
              {/* Explanatory subtitle / paragraph */}
              <p className="text-neutral-600 text-[15px] sm:text-base leading-relaxed max-w-lg font-sans">
                We provide reliable, affordable, and professional washing machine repair services throughout Dubai. Our experienced technicians arrive on time with the right tools and genuine spare parts.
              </p>
            </div>

            {/* Custom rounded border card module wrapping the dual strategies */}
            <div className="bg-white border border-neutral-200/60 rounded-[2rem] p-6 sm:p-8 flex flex-col gap-5 shadow-sm max-w-xl">
              
              {/* Strategy Card 1: Revenue-linked reporting (Elegant Dark Aesthetic Card) */}
              <div className="bg-[#1E1E1E] border border-neutral-800 rounded-2xl p-5 sm:p-6 text-white text-left shadow-md transition-transform hover:scale-[1.01]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="p-1 rounded-lg bg-[#f2b134]/15">
                    <BarChart3 className="h-5 w-5 text-[#f2b134]" />
                  </span>
                  <h3 className="font-sans font-bold text-base sm:text-lg text-white">
                    Transparent Pricing & Diagnosis
                  </h3>
                </div>
                <p className="text-neutral-300 text-xs sm:text-[13px] leading-relaxed font-sans">
                  No hidden charges. Our technicians diagnose the washing machine fault on-site and provide a clear quote before starting any repair work. You only pay for what you approve.
                </p>
              </div>

              {/* Strategy Card 2: Compounding channel strategy (Clean Light Minimal Card) */}
              <div className="bg-[#FAF9F6] border border-neutral-200/50 rounded-2xl p-5 sm:p-6 text-neutral-900 text-left shadow-sm transition-transform hover:scale-[1.01]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="p-1 rounded-lg bg-neutral-200/50">
                    <RefreshCw className="h-4.5 w-4.5 text-neutral-800" />
                  </span>
                  <h3 className="font-sans font-semibold text-base sm:text-lg text-neutral-900">
                    All Dubai Areas Covered
                  </h3>
                </div>
                <p className="text-neutral-650 text-xs sm:text-[13px] leading-relaxed font-sans">
                  From Dubai Marina to Deira, JBR to Al Barsha, Downtown to Jumeirah — our washing machine repair technicians serve every neighbourhood across Dubai with same-day availability.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Presenter portrait artwork frame & Superimposed overlay metric badge */}
          <div className="lg:col-span-6 flex justify-center w-full lg:translate-x-12 xl:translate-x-16 transition-transform">
            <div className="relative w-full max-w-[500px] sm:max-w-[535px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-200/50 bg-[#1E1E1E]">
              
              {/* Hero speech portrait from AI asset creation with Scroll Parallax */}
              <motion.div 
                style={{ y: portraitY }}
                className="absolute inset-0 w-full h-[140%] -top-[20%]"
              >
                <Image 
                  src="/Machine_with_folded_clothes_202606232148.jpeg"
                  alt="Professional washing machine repair technician in Dubai"
                  fill
                  sizes="(max-w-768px) 100vw, 535px"
                  className="object-cover brightness-95 object-[center_20%]"
                  referrerPolicy="no-referrer"
                  priority
                />
              </motion.div>

              {/* Dynamic Overlay White Card matching screenshot with Foreground Parallax */}
              <motion.div 
                style={{ y: badgeY }}
                className="absolute bottom-6 left-6 right-6 bg-white rounded-[1.5rem] p-5 shadow-2xl border border-neutral-100 flex flex-col gap-2 z-10"
              >
                <div className="flex items-center justify-between">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-lg bg-[#f2b134]/10">
                      <TrendingUp className="h-4.5 w-4.5 text-[#f2b134]" />
                    </span>
                    <h4 className="font-sans font-extrabold text-[15px] sm:text-base text-neutral-900 leading-none">
                      Repairs completed
                    </h4>
                  </div>
                  {/* Floating green metric scale value */}
                  <span className="text-[11px] font-mono font-bold text-neutral-400 bg-neutral-50 px-2.5 py-1 rounded-md border border-neutral-100">
                    +240/month
                  </span>
                </div>
                {/* Description subtext with generous contrast */}
                <p className="text-neutral-500 text-xs sm:text-[12.5px] leading-relaxed text-left font-sans mt-1">
                  Professional washing machine repairs completed every month across Dubai with same-day service and genuine parts.
                </p>
              </motion.div>

            </div>
          </div>

        </div>
      </section>



      {/* BEAUTIFUL & CLEAN TEXT MATRIX / TABLE SECTION */}
      <section className="w-full bg-[#FAF9F5] py-20 sm:py-28 border-t border-b border-neutral-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          
          {/* Header Block */}
          <div className="text-left max-w-3xl mb-12">
            <span className="text-[#f2b134] font-mono text-[11px] tracking-widest uppercase mb-3 block">
              DIAGNOSTIC BLUEPRINTS & REPAIR BENCHMARKS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight leading-none mb-4">
              Washing Machine Repair & Diagnostic Matrix
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-sans">
              A comprehensive breakdown of professional technical services, genuine OEM replacement parts, and precise speed benchmarks engineered to restore your appliance to perfect operation.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block w-full overflow-hidden border border-neutral-200/60 bg-white rounded-3xl shadow-sm">
            <table className="w-full table-auto border-collapse text-left font-sans">
              <thead>
                <tr className="bg-neutral-50/75 border-b border-neutral-200/30 text-neutral-450 text-xs font-mono uppercase tracking-wider">
                  <th className="py-5 px-6 font-bold">Repair Service</th>
                  <th className="py-5 px-6 font-bold">Problem & Scope</th>
                  <th className="py-5 px-6 font-bold">Genuine Parts & Calibration</th>
                  <th className="py-5 px-6 font-bold text-center">Service Speed</th>
                </tr>
              </thead>
              <tbody className="text-sm text-neutral-650 divide-y divide-neutral-100">
                {[
                  { num: '01', name: 'Bearing & Drum Assembly', problem: 'Resolving heavy spin cycle vibration, loud rumbling sounds, or physical drum sagging.', parts: 'OEM Heavy-Duty Bearings, Tub Seals & Suspension Rods', speed: '24-48 Hours', color: 'emerald', pulse: true },
                  { num: '02', name: 'Drainage & Water Pumps', problem: 'Fixing drainage failure, standing water in the tub, and pump mechanical blocks.', parts: 'High-Flow Drain Pump, Seal Replacement & Pressure Line Flushing', speed: 'Same Day', color: 'amber', pulse: false },
                  { num: '03', name: 'Motor & Drive Belts', problem: 'Correcting spin failures, slips, drum stalling under load, or motor sensor errors.', parts: 'Carbon Brushes, Heavy-Duty Ribbed Belts & Hall Sensors', speed: 'Same Day', color: 'blue', pulse: false },
                  { num: '04', name: 'Control Module & Board', problem: 'Repairing display fault codes, non-responsive buttons, or random mid-cycle shutdowns.', parts: 'Main PCB Diagnostical Reflow, Micro-circuit Tuning & Re-zeroing', speed: '1-3 Days', color: 'violet', pulse: false },
                  { num: '05', name: 'Inlet Valves & Seals', problem: 'Eliminating supply slow-fills, low water pressure filling, and dynamic rubber door seal leaks.', parts: 'Double-Solenoid Inlets, Antimicrobial Door Gaskets', speed: 'Same Day', color: 'neutral', pulse: false },
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
              { num: '01', name: 'Bearing & Drum Assembly', problem: 'Resolving heavy spin cycle vibration, loud rumbling sounds, or physical drum sagging.', parts: 'OEM Heavy-Duty Bearings, Tub Seals & Suspension Rods', speed: '24-48 Hours', dotColor: 'bg-emerald-500', badgeBg: 'bg-emerald-50', badgeText: 'text-emerald-700', badgeBorder: 'border-emerald-100/50' },
              { num: '02', name: 'Drainage & Water Pumps', problem: 'Fixing drainage failure, standing water in the tub, and pump mechanical blocks.', parts: 'High-Flow Drain Pump, Seal Replacement & Pressure Line Flushing', speed: 'Same Day', dotColor: 'bg-amber-500', badgeBg: 'bg-amber-50', badgeText: 'text-amber-700', badgeBorder: 'border-amber-100/50' },
              { num: '03', name: 'Motor & Drive Belts', problem: 'Correcting spin failures, slips, drum stalling under load, or motor sensor errors.', parts: 'Carbon Brushes, Heavy-Duty Ribbed Belts & Hall Sensors', speed: 'Same Day', dotColor: 'bg-blue-500', badgeBg: 'bg-blue-50', badgeText: 'text-blue-700', badgeBorder: 'border-blue-100/50' },
              { num: '04', name: 'Control Module & Board', problem: 'Repairing display fault codes, non-responsive buttons, or random mid-cycle shutdowns.', parts: 'Main PCB Diagnostical Reflow, Micro-circuit Tuning & Re-zeroing', speed: '1-3 Days', dotColor: 'bg-violet-400', badgeBg: 'bg-violet-50', badgeText: 'text-violet-700', badgeBorder: 'border-violet-100/50' },
              { num: '05', name: 'Inlet Valves & Seals', problem: 'Eliminating supply slow-fills, low water pressure filling, and dynamic rubber door seal leaks.', parts: 'Double-Solenoid Inlets, Antimicrobial Door Gaskets', speed: 'Same Day', dotColor: 'bg-neutral-500', badgeBg: 'bg-neutral-100', badgeText: 'text-neutral-700', badgeBorder: 'border-neutral-200' },
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

      {/* FAQ ACCORDION SECTION */}
      <section className="w-full bg-[#FAF9F5] pb-24 sm:pb-32 border-b border-neutral-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#f2b134] font-mono text-[11px] tracking-widest uppercase mb-3 block">
              REPAIR INTELLIGENCE & EXPERT ADVICE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight leading-none mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-sans">
              Get immediate professional answers to common washing machine performance issues and quick diagnostic strategies.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {[
              {
                q: "How do I know if my washing machine bearings need to be replaced?",
                a: "If you hear a loud rumbling, roaring, or metallic grinding noise during the high-speed spin cycle—resembling a jet engine takeoff—it is a classic symptom of worn tub bearings. You might also notice small dark grease stains on your washed laundry or see that the inner stainless drum has excessive vertical play when lifted manually. Prompt replacement extends the life of the outer tub assembly."
              },
              {
                q: "Is it worth repairing an older washing machine or should I replace it?",
                a: "Generally, if a repair cost is less than 50% of buying a comparable new machine, and your current appliance is under 8 years old, repairing is highly cost-effective. Simple mechanical faults such as water valves, drive belts, or drain pumps can be replaced swiftly, adding years of performance to your existing unit without high replacement costs."
              },
              {
                q: "Why won't my washing machine drain water at the end of the program?",
                a: "This is most commonly caused by either a clogged drain pump assembly filter (often trapping hairpins, lint, coins, or fabric threads), a kinked external drain pipe, or mechanical failure of the high-flow drain pump itself. We recommend checking the manual cleanout filter at the bottom front of the machine; if clear, the pump unit may require a technician's inspection."
              },
              {
                q: "What causes a washing machine to vibrate violently or 'walk' across the floor?",
                a: "Severe vibration is usually driven by out-of-balance laundry loads, unlevel legs, or worn-out internal suspension dampers and shock-absorbing rods. First, check that the machine's leveling feet are firmly planted on a stable, flat surface. If the cabinet continues to sway or bounce under standard loads, replacing worn suspension rods will restore quiet stability."
              },
              {
                q: "Do you use original manufacturer (OEM) parts for repairs?",
                a: "Absolute integrity is our baseline. We exclusively source and install genuine, factory-certified OEM replacement components for brands such as LG, Samsung, Whirlpool, Bosch, and Maytag. OEM parts carry structured reliability, guarantee perfect mechanical tolerance, and help maintain any active product protection plans."
              },
              {
                q: "How quickly can a technician diagnose and fix my appliance?",
                a: "Most common electronic and plumbing issues can be diagnosed and resolved on the 'Same Day'—such as pump blockages, pressure sensing failures, and drive belt replacements. Complex structural repairs, including drum main bearing replacements or custom control PCB refitting, are completed with premium speed in 24 to 48 hours."
              }
            ].map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  id={`faq-item-${index}`}
                  className="rounded-2xl border border-neutral-200/65 bg-white overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 font-display font-bold text-neutral-900 hover:text-neutral-950 hover:bg-neutral-50/50 transition-colors focus:outline-none"
                  >
                    <span className="text-base sm:text-lg leading-snug">
                      {item.q}
                    </span>
                    <span className={`shrink-0 h-8 w-8 rounded-full bg-neutral-50 border border-neutral-200/50 flex items-center justify-center text-neutral-500 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#f2b134]/10 text-[#f2b134] border-[#f2b134]/20' : ''}`}>
                      <ChevronDown className="h-4.5 w-4.5 stroke-[2.5]" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
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

      {/* GET IN TOUCH / CONTACT FORM SECTION */}
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
                Fill in the form and our team will get back to you within 30 minutes. Same-day washing machine repair available across all areas in Dubai.
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
                onSubmit={(e) => { e.preventDefault(); setIsBookingOpen(true); }}
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
                  <textarea rows={5} placeholder="Describe your washing machine issue (e.g. not draining, making noise, leaking water...)" className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f2b134] focus:border-transparent transition-all placeholder-neutral-400 resize-y" />
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

      {/* GALLERY SECTION */}
      <section className="w-full bg-[#FAF9F5] border-t border-neutral-200/40 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-14 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#f2b134] tracking-widest mb-4">
              <span>↳ GALLERY</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-neutral-900 font-sans mb-5 leading-none">
              See Our Work
            </h2>
            <p className="text-neutral-500 text-[15px] sm:text-base font-sans font-medium">
              A look at recent washing machine repairs completed by our technicians across Dubai. Every job is carried out with care, precision, and genuine spare parts.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <Link href="/drainage-repair">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="row-span-2 relative rounded-[1.5rem] overflow-hidden border border-neutral-200/60 shadow-sm group">
                <Image src="/WhatsApp Image 2026-06-22 at 10.47.03.jpeg" alt="Washing machine drainage repair in Dubai" width={600} height={900} className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-4 left-4 text-white text-xs sm:text-sm font-bold bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg">Drainage Repair</span>
              </motion.div>
            </Link>
            <Link href="/spin-cycle-repair">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="relative aspect-square rounded-[1.5rem] overflow-hidden border border-neutral-200/60 shadow-sm group">
                <Image src="/WhatsApp Image 2026-06-22 at 10.47.38.jpeg" alt="Washing machine spin cycle repair in Dubai" width={600} height={600} className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-4 left-4 text-white text-xs sm:text-sm font-bold bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg">Spin Cycle Fix</span>
              </motion.div>
            </Link>
            <Link href="/water-leakage-repair">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="relative aspect-square rounded-[1.5rem] overflow-hidden border border-neutral-200/60 shadow-sm group">
                <Image src="/WhatsApp Image 2026-06-22 at 11.11.00.jpeg" alt="Washing machine water leakage repair in Dubai" width={600} height={600} className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-4 left-4 text-white text-xs sm:text-sm font-bold bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg">Leakage Repair</span>
              </motion.div>
            </Link>
            <Link href="/drum-repair">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="relative aspect-square rounded-[1.5rem] overflow-hidden border border-neutral-200/60 shadow-sm group">
                <Image src="/WhatsApp Image 2026-06-22 at 11.14.27.jpeg" alt="Washing machine drum repair in Dubai" width={600} height={600} className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-4 left-4 text-white text-xs sm:text-sm font-bold bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg">Drum Repair</span>
              </motion.div>
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }} className="relative aspect-square rounded-[1.5rem] overflow-hidden border border-neutral-200/60 shadow-sm group">
              <Image src="/Machine_with_folded_clothes_202606232148.jpeg" alt="Clean washing machine after professional repair in Dubai" width={600} height={600} className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-4 left-4 text-white text-xs sm:text-sm font-bold bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg">Service Complete</span>
            </motion.div>
          </div>

        </div>
      </section>

      {/* MARQUEE BAR */}
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

      {/* MODERN FOOTER */}
      <footer className="w-full bg-[#111111] text-white mt-auto">

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-16 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

            {/* Col 1: Brand */}
            <div className="flex flex-col gap-5">
              <div className="relative h-28 w-80">
                <Image
                  src="https://res.cloudinary.com/dbvjzyevy/image/upload/v1782108374/Red_and_Yellow_Modern_Simple_Application_Logogram_250_x_150_px_1_svnokc.png"
                  alt="A To Z Appliances Repair Logo"
                  fill
                  className="object-contain object-left"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-neutral-500 text-[13px] leading-relaxed">
                Dubai&apos;s trusted washing machine repair service. Same-day repairs with genuine parts and certified technicians.
              </p>
              <div className="flex items-center gap-2.5 mt-1">
                {[
                  { href: '#', icon: <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                  { href: '#', icon: <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                  { href: '#', icon: <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                  { href: '#', icon: <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                ].map((social, idx) => (
                  <a key={idx} href={social.href} className="w-8 h-8 rounded-full bg-neutral-800/80 flex items-center justify-center text-neutral-500 hover:bg-[#f2b134] hover:text-neutral-900 transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Services */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Services</h4>
              <div className="w-8 h-0.5 bg-[#f2b134] rounded-full" />
              <ul className="flex flex-col gap-2.5 text-neutral-500 text-[13px]">
                <li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Washing Machine Repair</li>
                <Link href="/drum-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Drum &amp; Bearing Repair</li></Link>
                <Link href="/drainage-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Drainage &amp; Pump Repair</li></Link>
                <Link href="/spin-cycle-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Spin Cycle Repair</li></Link>
                <Link href="/water-leakage-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Water Leakage Repair</li></Link>
                <Link href="/door-lock-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Door Lock Repair</li></Link>
                <Link href="/noise-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Noise Repair</li></Link>
                <Link href="/power-fault-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Power Fault Repair</li></Link>
                <Link href="/water-inlet-repair"><li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Water Inlet Repair</li></Link>
              </ul>
            </div>

            {/* Col 3: Areas */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Areas We Serve</h4>
              <div className="w-8 h-0.5 bg-[#f2b134] rounded-full" />
              <ul className="flex flex-col gap-2.5 text-neutral-500 text-[13px]">
                <li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Dubai Marina</li>
                <li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Downtown Dubai</li>
                <li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">JBR & JLT</li>
                <li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Al Barsha & Al Quoz</li>
                <li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Deira & Bur Dubai</li>
                <li className="hover:text-[#f2b134] hover:translate-x-1 transition-all cursor-pointer">Jumeirah & Umm Suqeim</li>
              </ul>
            </div>

            {/* Col 4: Contact */}
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

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800/60">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-neutral-600 text-xs">
              &copy; 2026 Washing Machine Repair Experts. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-neutral-600 text-xs">
              <span className="hover:text-neutral-400 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-neutral-400 transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>

      </footer>

      {/* CASE STUDY DETAIL DRAWER / POPUP */}
      <AnimatePresence>
        {isCaseStudyOpen && selectedCaseStudy && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCaseStudyOpen(false)}
              className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm z-50 cursor-pointer"
            />
            {/* Modal Body */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-y-4 right-4 left-4 md:left-auto md:right-4 md:w-full md:max-w-xl bg-[#1A1A1A] text-white rounded-[2rem] border border-neutral-800 shadow-2xl z-50 p-6 sm:p-8 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-[#f2b134]">
                    {selectedCaseStudy.tag}
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mt-1">
                    {selectedCaseStudy.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setIsCaseStudyOpen(false)}
                  className="p-1 px-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-350 transition-colors cursor-pointer"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Scrollable Contents */}
              <div className="flex-grow overflow-y-auto pr-1 flex flex-col gap-6 scrollbar-thin scrollbar-thumb-neutral-800">
                
                {/* Hero Graphic inside Modal */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-neutral-800 mb-2 bg-[#252528]">
                  <Image 
                    src={selectedCaseStudy.image} 
                    alt={selectedCaseStudy.title}
                    fill
                    className="object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating metric indicator on image corner */}
                  <div className="absolute top-4 right-4 bg-[#f2b134] text-neutral-950 px-3 py-1.5 rounded-xl font-sans font-black text-sm shadow-md flex flex-col items-center">
                    <span className="leading-none text-base">{selectedCaseStudy.metric}</span>
                    <span className="text-[8.5px] font-bold uppercase tracking-wider text-black/60 mt-0.5">{selectedCaseStudy.metricLabel}</span>
                  </div>
                </div>

                {/* Grid stats overview */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl text-left">
                    <span className="text-[10px] text-neutral-400 uppercase font-mono block">Service Type</span>
                    <span className="text-white font-extrabold text-lg mt-1 block">{selectedCaseStudy.metric}</span>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl text-left">
                    <span className="text-[10px] text-neutral-400 uppercase font-mono block">Coverage</span>
                    <span className="text-white font-extrabold text-lg mt-1 block">{selectedCaseStudy.metricLabel}</span>
                  </div>
                </div>

                {/* Case Sections */}
                <div className="flex flex-col gap-5 text-left">
                  <div>
                    <h4 className="text-[#f2b134] font-mono text-[10px] tracking-wider uppercase mb-1.5">Overview</h4>
                    <p className="text-neutral-300 text-sm leading-relaxed">{selectedCaseStudy.overview}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[#f2b134] font-mono text-[10px] tracking-wider uppercase mb-1.5">The Problem</h4>
                    <p className="text-neutral-300 text-sm leading-relaxed">{selectedCaseStudy.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-[#f2b134] font-mono text-[10px] tracking-wider uppercase mb-1.5">Our Repair Approach</h4>
                    <p className="text-neutral-300 text-sm leading-relaxed">{selectedCaseStudy.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-[#f2b134] font-mono text-[10px] tracking-wider uppercase mb-1.5">Repair Result</h4>
                    <p className="text-white text-sm bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800/60 leading-relaxed font-semibold">
                      {selectedCaseStudy.result}
                    </p>
                  </div>
                </div>

                {/* Sub features Bullet list */}
                <div className="border-t border-neutral-800 pt-5 mt-2">
                  <h4 className="text-neutral-400 font-mono text-[10px] tracking-wider uppercase mb-3 text-left">Repair Steps Included</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                    {selectedCaseStudy.details.map(detail => (
                      <div key={detail} className="flex items-center gap-2 text-xs text-neutral-350">
                        <Check className="h-4 w-4 text-[#f2b134]" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Footer */}
              <div className="border-t border-neutral-800 pt-4 mt-6 flex gap-3">
                <button 
                  onClick={() => {
                    setIsCaseStudyOpen(false);
                    setIsBookingOpen(true);
                  }}
                  style={{ backgroundColor: '#f2b134' }}
                  className="flex-grow py-3 rounded-xl text-neutral-900 font-bold text-xs hover:brightness-105 active:scale-98 transition-transform cursor-pointer uppercase tracking-widest text-center"
                >
                  Book A Washing Machine Repair Visit
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* BRIEFCASE SLIDE-OUT DRAWER */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#FAF9F5] shadow-2xl z-50 p-6 flex flex-col border-l border-neutral-200"
            >
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="text-[#f2b134] h-5 w-5" />
                  <h3 className="font-display font-bold text-lg text-neutral-900">Your Action Briefcase</h3>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 px-2 hover:bg-neutral-100 rounded-lg text-neutral-550 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Briefcase Contents */}
              <div className="flex-grow overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 gap-3">
                    <ShoppingBag className="h-12 w-12 text-neutral-300 stroke-[1.5]" />
                    <h5 className="text-sm font-semibold text-neutral-700">Strategic briefcase is empty</h5>
                    <p className="text-xs text-neutral-550 max-w-xs mt-1">
                      Choose free growth blue prints from the main hub page shelf to arm your operations before booking.
                    </p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      style={{ backgroundColor: '#f2b134' }}
                      className="mt-4 px-4 py-2 rounded-full text-xs font-bold text-neutral-900 hover:brightness-105"
                    >
                      Browse Blueprints
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    <div className="text-neutral-500 font-mono text-[10px] tracking-wider uppercase mb-1">
                      BRIEFCASE INVENTORY ({cart.length})
                    </div>
                    {cart.map(item => (
                      <div 
                        key={item.id}
                        className="bg-white border border-neutral-200 rounded-xl p-4 flex justify-between items-start hover:border-neutral-300 transition-colors"
                      >
                        <div>
                          <span className="text-[10px] uppercase tracking-wider font-mono bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full inline-block mb-1.5">
                            {item.category}
                          </span>
                          <h6 className="text-[14px] font-bold text-neutral-900 leading-tight">{item.title}</h6>
                          <span className="text-xs text-[#f2b134] font-semibold mt-1 inline-block">$0.00 FREE</span>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-neutral-400 hover:text-red-500 p-1 rounded-lg transition-colors focus:outline-none"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Action Floor */}
              {cart.length > 0 && (
                <div className="border-t border-neutral-200 pt-6 mt-6">
                  <div className="flex justify-between items-center text-sm font-medium mb-4">
                    <span className="text-neutral-500">Subtotal Value:</span>
                    <span className="text-neutral-950 font-bold">$0.00 USD</span>
                  </div>
                  <button 
                    onClick={() => { setIsCartOpen(false); setIsBookingOpen(true); }}
                    style={{ backgroundColor: '#f2b134' }}
                    className="w-full py-3.5 rounded-full text-neutral-900 font-bold flex items-center justify-center gap-2 hover:brightness-105 transition shadow-lg select-none"
                  >
                    <span>Download Briefcase & Book</span>
                    <ArrowRight className="h-4.5 w-4.5 text-neutral-950" />
                  </button>
                  <p className="text-[11px] text-neutral-500 text-center mt-3">
                    Briefcase blueprints will be sent with your curated strategy advisor checklist instantly.
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ADVANCED CONSULTATION BOOKING & ROADMAP MODAL */}
      <AnimatePresence>
        {isBookingOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (bookingStage !== 'loading') setIsBookingOpen(false);
              }}
              className="fixed inset-0 bg-black/60 z-50 cursor-pointer"
            />
            
            {/* Centered Modal */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:max-w-xl md:max-w-2xl bg-[#fbfbfb] shadow-2xl rounded-2xl md:rounded-3xl z-50 flex flex-col max-h-[90vh] overflow-hidden border border-neutral-200"
              id="aelixa-booking-modal"
            >
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-neutral-200 p-5 md:p-6 shrink-0 bg-white">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 bg-[#f2b134]/15 rounded-lg">
                    <Sparkles className="h-5 w-5 text-[#f2b134]" />
                  </span>
                  <div>
                    <h3 className="font-display font-extrabold text-base md:text-lg text-neutral-900">
                      Book Washing Machine Repair
                    </h3>
                    <p className="text-xs text-neutral-500">Fill in your details and schedule a repair visit.</p>
                  </div>
                </div>
                {bookingStage !== 'loading' && (
                  <button 
                    onClick={() => setIsBookingOpen(false)}
                    className="p-1.5 hover:bg-neutral-100 rounded-lg text-neutral-500 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Scrollable Contents */}
              <div className="flex-grow overflow-y-auto p-5 md:p-6 bg-[#FAF9C5]/10">
                
                {/* STAGE 1: INTAKE FORM */}
                {bookingStage === 'form' && (
                  <form onSubmit={handleBookingSubmit} className="flex flex-col gap-5">
                    
                    {/* Basic info side-by-side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-neutral-700">Your Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={bookingName}
                          onChange={e => setBookingName(e.target.value)}
                          placeholder="e.g. Alexis Carter"
                          className="w-full bg-white border border-neutral-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#f2b134] focus:border-transparent transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-neutral-700">Digital Mail Address</label>
                        <input 
                          type="email" 
                          required
                          value={bookingEmail}
                          onChange={e => setBookingEmail(e.target.value)}
                          placeholder="e.g. alexis@brand.com"
                          className="w-full bg-white border border-neutral-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#f2b134] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Channel selector */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-neutral-700">Your Location in Dubai</label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-3 h-4.5 w-4.5 text-neutral-400" />
                          <input 
                            type="text"
                            value={bookingWebsite}
                            onChange={e => setBookingWebsite(e.target.value)}
                            placeholder="e.g. Dubai Marina, JBR"
                            className="w-full bg-white border border-neutral-200 rounded-xl pl-9.5 pr-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#f2b134] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-neutral-700">Washing Machine Brand</label>
                        <select 
                          value={bookingBizType}
                          onChange={e => setBookingBizType(e.target.value)}
                          className="w-full bg-white border border-neutral-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#f2b134] focus:border-transparent transition-all cursor-pointer"
                        >
                          <option value="Samsung">Samsung</option>
                          <option value="LG">LG</option>
                          <option value="Bosch">Bosch</option>
                          <option value="Whirlpool">Whirlpool</option>
                          <option value="Siemens">Siemens</option>
                          <option value="Other Brand">Other Brand</option>
                        </select>
                      </div>
                    </div>

                    {/* Session Schedulers */}
                    <div className="flex flex-col gap-2.5 bg-neutral-50 p-4 rounded-xl border border-neutral-200/50">
                      <div className="text-neutral-500 font-mono text-[9px] tracking-wider uppercase mb-1">
                        SELECT REPAIR TIME SLOT
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-xs font-semibold text-neutral-600 flex items-center gap-1.5">
                            <Calendar className="h-4 w-4 text-[#f2b134]" /> Date Preferred
                          </span>
                          <select 
                            value={selectedDate}
                            onChange={e => setSelectedDate(e.target.value)}
                            className="bg-white border border-neutral-200 rounded-lg px-2.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#f2b134] cursor-pointer"
                          >
                            <option value="2026-06-22">Mon, June 22, 2026</option>
                            <option value="2026-06-23">Tue, June 23, 2026</option>
                            <option value="2026-06-24">Wed, June 24, 2026</option>
                            <option value="2026-06-25">Thu, June 25, 2026</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-xs font-semibold text-neutral-600 flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-[#f2b134]" /> Session Time
                          </span>
                          <select 
                            value={selectedTime}
                            onChange={e => setSelectedTime(e.target.value)}
                            className="bg-white border border-neutral-200 rounded-lg px-2.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#f2b134] cursor-pointer"
                          >
                            <option value="09:00 AM">09:00 AM EST (Morning)</option>
                            <option value="11:30 AM">11:30 AM EST (Mid-day)</option>
                            <option value="02:00 PM">02:00 PM EST (Afternoon)</option>
                            <option value="04:30 PM">04:30 PM EST (Late)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Target Goals Pills */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-neutral-700">Washing Machine Issue</label>
                      <div className="flex flex-wrap gap-2">
                        {['Not Draining', 'Not Spinning', 'Water Leaking', 'Strange Noise'].map(goal => {
                          const isSelected = bookingGoals.includes(goal);
                          return (
                            <button
                              type="button"
                              key={goal}
                              onClick={() => toggleGoal(goal)}
                              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                                isSelected 
                                  ? 'bg-[#f2b134] text-neutral-950 border-[#f2b134]' 
                                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300'
                              }`}
                            >
                              {goal}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Selected Briefcase Counter info */}
                    {cart.length > 0 && (
                      <div className="flex items-center gap-2 bg-[#f2b134]/10 border border-[#f2b134]/20 p-3 rounded-xl">
                        <CheckCircle2 className="h-4 w-4 text-[#f2b134] shrink-0" />
                        <span className="text-xs text-neutral-700">
                          <strong>{cart.length} briefing blueprints</strong> inside your briefcase will be injected with your audit.
                        </span>
                      </div>
                    )}

                    {/* Submit action */}
                    <button 
                      type="submit"
                      style={{ backgroundColor: '#f2b134' }}
                      className="w-full py-4 mt-2 rounded-full font-bold text-neutral-900 shadow-xl hover:brightness-105 active:scale-99 transition flex items-center justify-center gap-2 select-none"
                    >
                      <span>Book Washing Machine Repair Now</span>
                      <ArrowRight className="h-4.5 w-4.5 text-neutral-950" />
                    </button>
                  </form>
                )}

                {/* STAGE 2: DIAGNOSTIC CRAWLING LOADER */}
                {bookingStage === 'loading' && (
                  <div className="flex flex-col items-center justify-center py-16 text-center select-none">
                    <div className="relative mb-6">
                      {/* outer spinning radar ring */}
                      <div className="w-16 h-16 rounded-full border-4 border-[#f2b134]/20 border-t-[#f2b134] animate-spin" />
                      <Sparkles className="h-6 w-6 text-[#f2b134] absolute inset-0 m-auto animate-pulse" />
                    </div>
                    <h5 className="font-display font-extrabold text-neutral-900 text-lg">Processing your repair booking...</h5>
                    <p className="text-xs text-neutral-500 max-w-sm mt-2 select-all h-10 italic">
                      {loadingStatuses}
                    </p>
                  </div>
                )}

                {/* STAGE 3: INTERACTIVE DYNAMIC AI GROWTH BLUEPRINT */}
                {bookingStage === 'success' && (
                  <div className="flex flex-col gap-6">
                    
                    {/* Confirmation alert */}
                    <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h6 className="text-sm font-bold text-emerald-950 leading-tight">Session Scheduled Successfully!</h6>
                        <p className="text-xs text-emerald-800 mt-1">
                          Hi <strong>{bookingName}</strong>, we have scheduled your growth discussion on <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>. A login invite card has been dispatched to <strong>{bookingEmail}</strong>.
                        </p>
                      </div>
                    </div>

                    {/* Pre-call action blueprint cards formatted from Gemini response */}
                    <div className="bg-white border border-neutral-200/85 rounded-2xl p-5 shadow-sm">
                      <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-4">
                        <span className="text-[10px] font-mono tracking-widest text-[#f2b134] uppercase font-bold">
                          DIAGNOSTIC ADVICE PREVIEW
                        </span>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={copyRoadmapToClipboard}
                            className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 flex items-center gap-1 bg-neutral-100 py-1.5 px-3 rounded-lg transition-all"
                          >
                            {hasCopiedRoadmap ? (
                              <>
                                <Check className="h-3.5 w-3.5 text-emerald-600" />
                                <span className="text-emerald-700">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Share2 className="h-3.5 w-3.5 text-neutral-400" />
                                <span className="text-neutral-600">Copy Plan</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Display Custom Parsed Roadmap Elements */}
                      {parsedRoadmap ? (
                        <div className="flex flex-col gap-4">
                          <p className="text-[14px] font-bold text-neutral-800 leading-tight">
                            {parsedRoadmap.items.length > 0 ? 'Custom roadmap compiled for your session:' : parsedRoadmap.intro}
                          </p>

                          <div className="grid grid-cols-1 gap-3.5 mt-2">
                            {parsedRoadmap.items.map((item, index) => (
                              <div 
                                key={index} 
                                className="bg-[#FAF9F5]/45 hover:bg-[#FAF9C5]/10 border border-neutral-200/60 rounded-xl p-4 transition-all"
                              >
                                <div className="flex items-start gap-2.5">
                                  <span className="bg-[#f2b134] text-neutral-950 text-[11px] font-bold tracking-tight rounded-md w-6 h-6 flex items-center justify-center shrink-0">
                                    0{index + 1}
                                  </span>
                                  <div className="text-left w-full">
                                    <h5 className="text-[14px] font-extrabold text-neutral-900 leading-tight">
                                      {item.title}
                                    </h5>
                                    {item.bullets.length > 0 && (
                                      <ul className="list-disc pl-4 text-xs text-neutral-600 space-y-1 mt-2 font-normal leading-relaxed">
                                        {item.bullets.map((bullet, idx) => (
                                          <li key={idx} className="select-text">{bullet}</li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="whitespace-pre-line text-xs font-mono text-neutral-700 bg-neutral-50 p-4 rounded-xl border select-text max-h-64 overflow-y-auto">
                          {aiRoadmap}
                        </div>
                      )}
                    </div>

                    {/* Reset Button */}
                    <button 
                      onClick={() => {
                        setBookingStage('form');
                        setBookingName('');
                        setBookingEmail('');
                        setBookingWebsite('');
                      }}
                      className="text-xs text-neutral-500 hover:text-neutral-900 font-semibold underline text-center"
                    >
                      Book Another Repair Visit
                    </button>
                  </div>
                )}

              </div>
              
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
