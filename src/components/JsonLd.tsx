import Script from "next/script";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Sam's Nashville Hot Chicken",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3540 Platinum Dr #4",
      addressLocality: "Mississauga",
      addressRegion: "ON",
      postalCode: "L5M 2R9",
      addressCountry: "CA",
    },
    servesCuisine: ["Chicken", "Halal", "American"],
    telephone: "+1-647-123-4567",
    url: "https://samsnashvillehotchicken.com",
    image: [
      "https://samsnashvillehotchicken.com/og.jpg",
    ],
    priceRange: "$$",
    acceptsReservations: false,
    menu: "https://samsnashvillehotchicken.com/#menu",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.518,
      longitude: -79.689,
    },
  };

  return (
    <Script type="application/ld+json" id="schema-restaurant" strategy="afterInteractive">
      {JSON.stringify(data)}
    </Script>
  );
}


