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
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "11:00", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday","Saturday"], opens: "11:00", closes: "23:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "12:00", closes: "21:00" },
    ],
    sameAs: [
      "https://www.instagram.com/samsnashvillehotchicken/",
      "https://www.tiktok.com/@samsnashvillehot",
    ],
    servesCuisine: ["Nashville Hot Chicken", "Halal", "Fried Chicken"],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.4", ratingCount: "200" },
    additionalProperty: [{ "@type": "PropertyValue", name: "Halal Certification", value: "Certified Halal" }],
  };

  return (
    <Script type="application/ld+json" id="schema-restaurant" strategy="afterInteractive">
      {JSON.stringify(data)}
    </Script>
  );
}


