// ============================================================================
// PER-BRAND CONTENT SECTION — EDIT THIS FILE TO MANAGE BRAND PAGE CONTENT
// ============================================================================
//
// Every brand page renders a "brand content" section built from the blocks
// returned by getBrandContent(). To customise a specific brand, add an entry
// to BRAND_CONTENT below keyed by the brand's slug (e.g.
// 'lg-washing-machine-repair'). Brands without an entry automatically get
// sensible default content, so the section always appears on every page.
//
// Available blocks:
//   { type: 'heading',   text: '...' }
//   { type: 'paragraph', text: '...' }            (plain rich text paragraph)
//   { type: 'list',      items: ['...', '...'] }  (bulleted list)
//   { type: 'image',     src: 'https://... or /images/...', alt: '...', caption?: '...' }
//
// You can mix any number of blocks in any order, and include as many images
// as you like.
// ============================================================================

import { BrandEntry } from './brand-data';

export type BrandContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface BrandContent {
  /** Small eyebrow label above the section title */
  eyebrow?: string;
  /** Section title (H2) */
  title?: string;
  /** The content blocks rendered inside the section */
  blocks: BrandContentBlock[];
}

/**
 * Manual overrides — add rich content and images for individual brands here.
 * Key = brand slug. Any brand not listed falls back to the default content.
 */
export const BRAND_CONTENT: Partial<Record<string, BrandContent>> = {
  // Example (uncomment and edit):
  // 'lg-washing-machine-repair': {
  //   title: 'Expert LG Washing Machine Repair in Dubai',
  //   blocks: [
  //     { type: 'paragraph', text: 'Your custom intro paragraph here…' },
  //     { type: 'image', src: '/images/lg-repair.jpg', alt: 'LG washing machine repair in Dubai', caption: 'Our technician servicing an LG Direct Drive machine' },
  //     { type: 'heading', text: 'Why LG machines fail in Dubai' },
  //     { type: 'list', items: ['Hard water scaling', 'Voltage fluctuation', 'Bearing wear'] },
  //   ],
  // },
};

/** Default content generated for any brand without a manual override. */
function defaultContent(brand: BrandEntry): BrandContent {
  return {
    eyebrow: `About ${brand.name} Repair`,
    title: `${brand.name} Washing Machine Repair in Dubai — What You Should Know`,
    blocks: [
      {
        type: 'paragraph',
        text: `${brand.name} washing machines (${brand.tech}) are among the most common machines our Dubai technicians service. ${brand.whyLine}`,
      },
      {
        type: 'paragraph',
        text: `We repair the full ${brand.name} range sold in the UAE — including ${brand.models} — using 100% genuine spare parts carried on our service vans. Most ${brand.name} repairs are completed the same day, and every job is covered by a 12-month workmanship warranty plus a 2-year warranty on parts.`,
      },
      {
        type: 'heading',
        text: `Why choose us for your ${brand.name} machine`,
      },
      {
        type: 'list',
        items: [
          `Technicians trained on ${brand.name} error codes and diagnostics`,
          `Genuine ${brand.name} spare parts stocked for same-day repair`,
          'Fixed, transparent quote on-site before any work begins',
          '24/7 availability across all Dubai neighbourhoods',
        ],
      },
      {
        type: 'paragraph',
        text: `Whether your ${brand.name} machine won't drain, won't spin, leaks, makes noise or shows an error code, call or WhatsApp us and a certified technician will be at your door the same day — anywhere in Dubai.`,
      },
    ],
  };
}

/** Returns the content for a brand: manual override if present, else default. */
export function getBrandContent(brand: BrandEntry): BrandContent {
  return BRAND_CONTENT[brand.slug] ?? defaultContent(brand);
}

/** Renders the brand content section. Used by brand-page.tsx on every brand page. */
export function BrandContentSection({ brand }: { brand: BrandEntry }) {
  const content = getBrandContent(brand);

  return (
    <section className="w-full py-20 sm:py-28 border-t border-neutral-200/60 bg-[#FAF9F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-1.5 uppercase font-mono text-[11px] font-bold text-[#c8901f] tracking-widest mb-4">
          <span>↳ {content.eyebrow ?? `About ${brand.name} Repair`}</span>
        </div>
        {content.title && (
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-neutral-900 leading-[1.1] mb-8">
            {content.title}
          </h2>
        )}

        <div className="flex flex-col gap-6">
          {content.blocks.map((block, i) => {
            switch (block.type) {
              case 'heading':
                return (
                  <h3 key={i} className="font-display font-bold text-xl sm:text-2xl text-neutral-900 tracking-tight mt-4">
                    {block.text}
                  </h3>
                );
              case 'paragraph':
                return (
                  <p key={i} className="text-neutral-600 text-[15px] sm:text-base leading-relaxed">
                    {block.text}
                  </p>
                );
              case 'list':
                return (
                  <ul key={i} className="flex flex-col gap-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-neutral-600 text-[15px] sm:text-base leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#f2b134] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              case 'image':
                return (
                  <figure key={i} className="my-2">
                    <div className="rounded-2xl overflow-hidden border border-neutral-200/70 shadow-md bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={block.src}
                        alt={block.alt}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {block.caption && (
                      <figcaption className="text-neutral-500 text-[13px] mt-3 text-center">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
            }
          })}
        </div>
      </div>
    </section>
  );
}
