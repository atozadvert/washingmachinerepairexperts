import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Washing Machine Noise Repair in Dubai | Fast Same-Day Quiet Fixes',
  description: 'Washing machine noise repair in Dubai. Our trusted technicians fix loud banging and grinding sounds on the same day with genuine parts and a warranty.',
  alternates: { canonical: '/noise-repair' },
  openGraph: {
    title: 'Washing Machine Noise Repair in Dubai | Fast Same-Day Quiet Fixes',
    description: 'Washing machine noise repair in Dubai. Our trusted technicians fix loud banging and grinding sounds on the same day with genuine parts and a warranty.',
    url: '/noise-repair',
    type: 'website',
    locale: 'en_AE',
    images: [{ url: '/Washing%20Machine%20Noise%20Repair%20Hero%20Section.png', width: 1200, height: 630, alt: 'Washing Machine Noise Repair in Dubai | Fast Same-Day Quiet Fixes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Washing Machine Noise Repair in Dubai | Fast Same-Day Quiet Fixes',
    description: 'Washing machine noise repair in Dubai. Our trusted technicians fix loud banging and grinding sounds on the same day with genuine parts and a warranty.',
    images: ['/Washing%20Machine%20Noise%20Repair%20Hero%20Section.png'],
  },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
