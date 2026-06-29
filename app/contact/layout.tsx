import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Washing Machine Repair Experts in Dubai',
  description:
    'Contact Washing Machine Experts for same-day washing machine repair in Dubai. Call, WhatsApp or send us a message — friendly support 7 days a week, 8 AM to 10 PM.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | Washing Machine Repair Experts in Dubai',
    description:
      'Get in touch for same-day washing machine repair in Dubai. Call, WhatsApp or message us — 7 days a week.',
    url: '/contact',
    type: 'website',
    locale: 'en_AE',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
