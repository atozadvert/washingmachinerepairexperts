import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Washing Machine Drum Repair in Dubai | Fast Same-Day Expert Fixes',
  description: 'Washing machine drum repair in Dubai. Our trusted technicians fix worn bearings and loose drums the same day with genuine parts and a 90-day warranty.',
  alternates: { canonical: '/drum-repair' },
  openGraph: {
    title: 'Washing Machine Drum Repair in Dubai | Fast Same-Day Expert Fixes',
    description: 'Washing machine drum repair in Dubai. Our trusted technicians fix worn bearings and loose drums the same day with genuine parts and a 90-day warranty.',
    url: '/drum-repair',
    type: 'website',
    locale: 'en_AE',
    images: [{ url: '/Washing%20Machine%20Drum%20Repair%20Hero%20Section.png', width: 1200, height: 630, alt: 'Washing Machine Drum Repair in Dubai | Fast Same-Day Expert Fixes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Washing Machine Drum Repair in Dubai | Fast Same-Day Expert Fixes',
    description: 'Washing machine drum repair in Dubai. Our trusted technicians fix worn bearings and loose drums the same day with genuine parts and a 90-day warranty.',
    images: ['/Washing%20Machine%20Drum%20Repair%20Hero%20Section.png'],
  },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
