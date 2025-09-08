import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samsnashvillehotchicken.com"),
  title: "Sam's Nashville Hot Chicken | Mississauga (Ridgeway Plaza)",
  description:
    "Hottest Nashville-style halal chicken in Mississauga. Sliders, sandos, tenders, mac, dirty fries. 100% Halal.",
  keywords: [
    "Nashville Hot Chicken Mississauga",
    "Halal Fried Chicken Mississauga",
    "Ridgeway Plaza",
    "Halal comfort food",
    "Hot chicken sliders",
  ],
  openGraph: {
    title: "Sam's Nashville Hot Chicken | Mississauga",
    description:
      "Bold, flavorful Nashville-style hot chicken. 100% Halal. Ridgeway Plaza.",
    url: "https://samsnashvillehotchicken.com",
    siteName: "Sam's Nashville Hot Chicken",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Sam's Nashville Hot Chicken - Hero",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam's Nashville Hot Chicken | Mississauga",
    description:
      "Bold, flavorful Nashville-style hot chicken. 100% Halal. Ridgeway Plaza.",
    images: ["/og.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://placehold.co" />
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/og.jpg" as="image" />
        {/* Search Console verification placeholder */}
        <meta name="google-site-verification" content="GSC_VERIFICATION_TOKEN" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* GA4 placeholder (replace with real ID) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
          gtag('config', 'G-XXXXXXX');
        `}</Script>
        {/* Analytics */}
        <Script id="analytics-inline" strategy="afterInteractive">
          {`
            window.analytics = {
              track: (event, data) => {
                try {
                  console.log('[analytics]', event, data || {});
                  if (window.gtag) {
                    window.gtag('event', event, data || {});
                  }
                } catch (e) {}
              }
            };
            document.addEventListener('click', (e) => {
              const target = e.target.closest('[data-analytics-event]');
              if (target) {
                const eventName = target.getAttribute('data-analytics-event');
                const label = target.getAttribute('data-analytics-label');
                window.analytics.track(eventName, { label });
              }
            });
          `}
        </Script>
        <JsonLd />
        <header className="sticky top-0 z-50 bg-[--color-charcoal] text-white border-b border-black/10">
          <div className="container flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.svg" alt="Sam's Nashville Hot Chicken" width={36} height={36} />
              <span className="text-lg font-extrabold tracking-tight text-white">
                Sam&apos;s Nashville Hot Chicken
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
              <Link href="/menu" className="text-white hover:text-[--color-accent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-charcoal] rounded-md">Menu</Link>
              <Link href="/about" className="text-white hover:text-[--color-accent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-charcoal] rounded-md">Our Story</Link>
              <Link href="/gallery" className="text-white hover:text-[--color-accent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-charcoal] rounded-md">Gallery</Link>
              <Link href="/contact" className="text-white hover:text-[--color-accent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-charcoal] rounded-md">Contact</Link>
              <a href="https://www.instagram.com/samsnashvillehotchicken/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[--color-accent]" data-analytics-event="social_click" data-analytics-label="instagram">Instagram</a>
              <a href="https://www.tiktok.com/@samsnashvillehot?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[--color-accent]" data-analytics-event="social_click" data-analytics-label="tiktok">TikTok</a>
              <a href="#order" className="btn btn-white text-[--color-brand]">Order Now</a>
            </nav>
            <div className="flex items-center gap-3 md:hidden">
              <a href="https://www.instagram.com/samsnashvillehotchicken/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" aria-label="Instagram" data-analytics-event="social_click" data-analytics-label="instagram">IG</a>
              <a href="https://www.tiktok.com/@samsnashvillehot?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" aria-label="TikTok" data-analytics-event="social_click" data-analytics-label="tiktok">TikTok</a>
              <a href="#order" className="btn btn-white text-[--color-brand]" aria-label="Order Now (mobile)">🔥 Order Now</a>
            </div>
          </div>
        </header>
        {children}
        <footer className="border-t border-black/5 bg-white">
          <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-white">© {new Date().getFullYear()} Sam&apos;s Nashville Hot Chicken</p>
            <div className="flex items-center gap-3 text-sm">
              <a className="hover:underline" href="tel:+16471234567" data-analytics-event="contact_call" data-analytics-label="footer_phone">Call: (647) 123-4567</a>
              <span className="text-black/30">•</span>
              <a className="hover:underline" href="mailto:hello@samsnashvillehotchicken.com" data-analytics-event="contact_email" data-analytics-label="footer_email">Email</a>
              <span className="text-black/30">•</span>
              <a className="hover:underline" href="https://www.instagram.com/samsnashvillehotchicken/" target="_blank" rel="noopener noreferrer" data-analytics-event="social_click" data-analytics-label="instagram">Instagram</a>
              <span className="text-black/30">•</span>
              <a className="hover:underline" href="https://www.tiktok.com/@samsnashvillehot?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" data-analytics-event="social_click" data-analytics-label="tiktok">TikTok</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
