import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Washing Machine Drainage Repair in Dubai | Same-Day Trusted Fixes',
  description: 'Washing machine drainage repair in Dubai. Our trusted technicians fix blocked drains and no-drain faults the same day with genuine parts and warranty.',
  alternates: { canonical: '/drainage-repair' },
  openGraph: {
    title: 'Washing Machine Drainage Repair in Dubai | Same-Day Trusted Fixes',
    description: 'Washing machine drainage repair in Dubai. Our trusted technicians fix blocked drains and no-drain faults the same day with genuine parts and warranty.',
    url: '/drainage-repair',
    type: 'website',
    locale: 'en_AE',
    images: [{ url: '/WhatsApp%20Image%202026-06-22%20at%2010.47.03.jpeg', width: 1200, height: 630, alt: 'Washing Machine Drainage Repair in Dubai | Same-Day Trusted Fixes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Washing Machine Drainage Repair in Dubai | Same-Day Trusted Fixes',
    description: 'Washing machine drainage repair in Dubai. Our trusted technicians fix blocked drains and no-drain faults the same day with genuine parts and warranty.',
    images: ['/WhatsApp%20Image%202026-06-22%20at%2010.47.03.jpeg'],
  },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
