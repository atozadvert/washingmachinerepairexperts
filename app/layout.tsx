import type {Metadata} from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import FloatingButtons from './floating-buttons';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const siteUrl = process.env.APP_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Washing Machine Repair Experts in Dubai | Trusted Same-Day Fixers',
  description: 'Washing machine repair in Dubai. Our certified technicians fix all brands and faults the same day with genuine OEM parts, clear pricing, and warranty.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var originalFetch = window.fetch;
                  var customFetch = originalFetch;
                  Object.defineProperty(window, 'fetch', {
                    get: function() {
                      return customFetch || originalFetch;
                    },
                    set: function(val) {
                      customFetch = val;
                    },
                    configurable: true,
                    enumerable: true
                  });
                } catch (e) {
                  console.warn("Failed to patch window.fetch property descriptor:", e);
                }
              })();
            `
          }}
        />
      </head>
      <body className="antialiased text-neutral-900 bg-[#FAF9F5]" suppressHydrationWarning>
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
