import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Washing Machine Door Lock Repair in Dubai | Same-Day Expert Fixes',
  description: 'Washing machine door lock repair in Dubai. Our trusted technicians fix stuck and faulty door locks the same day with genuine parts plus full warranty.',
  alternates: { canonical: '/door-lock-repair' },
  openGraph: {
    title: 'Washing Machine Door Lock Repair in Dubai | Same-Day Expert Fixes',
    description: 'Washing machine door lock repair in Dubai. Our trusted technicians fix stuck and faulty door locks the same day with genuine parts plus full warranty.',
    url: '/door-lock-repair',
    type: 'website',
    locale: 'en_AE',
    images: [{ url: '/Washing%20Machine%20Door%20Lock%20Repair%20Hero%20Section.png', width: 1200, height: 630, alt: 'Washing Machine Door Lock Repair in Dubai | Same-Day Expert Fixes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Washing Machine Door Lock Repair in Dubai | Same-Day Expert Fixes',
    description: 'Washing machine door lock repair in Dubai. Our trusted technicians fix stuck and faulty door locks the same day with genuine parts plus full warranty.',
    images: ['/Washing%20Machine%20Door%20Lock%20Repair%20Hero%20Section.png'],
  },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
