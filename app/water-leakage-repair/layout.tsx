import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Washing Machine Water Leakage Repair in Dubai | Fast Same-Day Fix',
  description: 'Washing machine water leakage repair in Dubai. Our trusted technicians stop leaks and water damage the same day, with genuine parts and full warranty.',
  alternates: { canonical: '/water-leakage-repair' },
  openGraph: {
    title: 'Washing Machine Water Leakage Repair in Dubai | Fast Same-Day Fix',
    description: 'Washing machine water leakage repair in Dubai. Our trusted technicians stop leaks and water damage the same day, with genuine parts and full warranty.',
    url: '/water-leakage-repair',
    type: 'website',
    locale: 'en_AE',
    images: [{ url: '/Washing%20Machine%20Water%20Leakage%20Repair%20Hero%20Section.png', width: 1200, height: 630, alt: 'Washing Machine Water Leakage Repair in Dubai | Fast Same-Day Fix' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Washing Machine Water Leakage Repair in Dubai | Fast Same-Day Fix',
    description: 'Washing machine water leakage repair in Dubai. Our trusted technicians stop leaks and water damage the same day, with genuine parts and full warranty.',
    images: ['/Washing%20Machine%20Water%20Leakage%20Repair%20Hero%20Section.png'],
  },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
