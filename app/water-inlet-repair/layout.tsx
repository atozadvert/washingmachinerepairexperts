import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Washing Machine Water Inlet Repair in Dubai | Same-Day Expert Fix',
  description: 'Washing machine water inlet repair in Dubai. Our trusted technicians fix slow-filling and no-water faults the same day, with genuine parts & warranty.',
  alternates: { canonical: '/water-inlet-repair' },
  openGraph: {
    title: 'Washing Machine Water Inlet Repair in Dubai | Same-Day Expert Fix',
    description: 'Washing machine water inlet repair in Dubai. Our trusted technicians fix slow-filling and no-water faults the same day, with genuine parts & warranty.',
    url: '/water-inlet-repair',
    type: 'website',
    locale: 'en_AE',
    images: [{ url: '/Washing%20Machine%20Water%20Inlet%20Repair%20Hero%20Section.png', width: 1200, height: 630, alt: 'Washing Machine Water Inlet Repair in Dubai | Same-Day Expert Fix' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Washing Machine Water Inlet Repair in Dubai | Same-Day Expert Fix',
    description: 'Washing machine water inlet repair in Dubai. Our trusted technicians fix slow-filling and no-water faults the same day, with genuine parts & warranty.',
    images: ['/Washing%20Machine%20Water%20Inlet%20Repair%20Hero%20Section.png'],
  },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
