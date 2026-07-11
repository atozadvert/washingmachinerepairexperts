import type {Metadata} from 'next';
import Script from 'next/script';
import { Inter, Inter_Tight } from 'next/font/google';
import FloatingButtons from './floating-buttons';
import './globals.css'; // Global styles

const GTM_ID = 'GTM-TVTFZ2ZH';
const GA_ID = 'G-BQRYVWYVEE';

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

const siteUrl = process.env.APP_URL || 'https://washingmachineexperts.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Washing Machine Repair Experts in Dubai | Trusted Same-Day Fixers',
  description: 'Washing machine repair in Dubai. Our certified technicians fix all brands and faults the same day with genuine OEM parts, clear pricing, and warranty.',
  verification: {
    google: 'XbfD2bdnd6t-rni-W5_ZWqOREACh4REiQupjIAqhyzI',
  },
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
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </head>
      <body className="antialiased text-neutral-900 bg-[#FAF9F5]" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
