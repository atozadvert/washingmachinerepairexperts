import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Washing Machine Noise Repair Dubai | Same-Day Quiet Fix',
  description: 'Loud banging, grinding or vibration? Our Dubai technicians fix washing machine noise faults the same day with genuine OEM parts and full warranty.',
  alternates: { canonical: '/noise-repair' },
  openGraph: {
    title: 'Washing Machine Noise Repair Dubai | Same-Day Quiet Fix',
    description: 'Loud banging, grinding or vibration? Our Dubai technicians fix washing machine noise faults the same day with genuine OEM parts and full warranty.',
    url: '/noise-repair',
    type: 'website',
    locale: 'en_AE',
    images: [{ url: '/Washing%20Machine%20Noise%20Repair%20Hero%20Section.png', width: 1200, height: 630, alt: 'Washing Machine Noise Repair Dubai | Same-Day Quiet Fix' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Washing Machine Noise Repair Dubai | Same-Day Quiet Fix',
    description: 'Loud banging, grinding or vibration? Our Dubai technicians fix washing machine noise faults the same day with genuine OEM parts and full warranty.',
    images: ['/Washing%20Machine%20Noise%20Repair%20Hero%20Section.png'],
  },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
