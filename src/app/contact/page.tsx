import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sam's Nashville Hot Chicken",
  description: "Contact Sam's Nashville Hot Chicken in Mississauga. Call, visit, or order online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="font-sans section">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">Halal Nashville hot chicken near me in Mississauga and the Toronto area.</p>
          <div className="mt-6 space-y-3">
            <p>
              Address: 3540 Platinum Dr #4, Mississauga, ON L5M 2R9
            </p>
            <p>
              Phone: <a className="underline" href="tel:+16471234567">(647) 123-4567</a>
            </p>
            <p>
              Email: <a className="underline" href="mailto:hello@samsnashvillehotchicken.com">hello@samsnashvillehotchicken.com</a>
            </p>
            <p>
              Hours: Mon–Thu 11am–10pm • Fri–Sat 11am–11pm • Sun 12pm–9pm
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps?q=3540+Platinum+Dr+%234,+Mississauga,+ON+L5M+2R9&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Sam's Nashville Hot Chicken",
        telephone: "+1-647-123-4567",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3540 Platinum Dr #4",
          addressLocality: "Mississauga",
          addressRegion: "ON",
          postalCode: "L5M 2R9",
          addressCountry: "CA"
        },
        url: "https://samsnashvillehotchicken.com/contact"
      }) }} />
    </main>
  );
}


