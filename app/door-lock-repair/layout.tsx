import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Washing Machine Door Lock Repair Dubai | Same-Day Fix',
  description: 'Door stuck or won\'t lock? Our Dubai technicians fix washing machine door locks, interlocks and handles the same day with genuine parts and warranty.',
  alternates: { canonical: '/door-lock-repair' },
  openGraph: {
    title: 'Washing Machine Door Lock Repair Dubai | Same-Day Fix',
    description: 'Door stuck or won\'t lock? Our Dubai technicians fix washing machine door locks, interlocks and handles the same day with genuine parts and warranty.',
    url: '/door-lock-repair',
    type: 'website',
    locale: 'en_AE',
    images: [{ url: '/Washing%20Machine%20Door%20Lock%20Repair%20Hero%20Section.png', width: 1200, height: 630, alt: 'Washing Machine Door Lock Repair Dubai | Same-Day Fix' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Washing Machine Door Lock Repair Dubai | Same-Day Fix',
    description: 'Door stuck or won\'t lock? Our Dubai technicians fix washing machine door locks, interlocks and handles the same day with genuine parts and warranty.',
    images: ['/Washing%20Machine%20Door%20Lock%20Repair%20Hero%20Section.png'],
  },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
