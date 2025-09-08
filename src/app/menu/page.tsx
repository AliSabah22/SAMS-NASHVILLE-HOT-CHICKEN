import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MENU_ITEMS } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu | Sam's Nashville Hot Chicken",
  description: "Nashville hot sliders, sandos, tenders, mac, dirty fries. Choose your heat.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  const items = MENU_ITEMS;
  const menuLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Sam's Nashville Hot Chicken Menu",
    hasMenuItem: items.map((i) => ({
      "@type": "MenuItem",
      name: i.name,
      description: i.description,
      image: i.image,
      offers: {
        "@type": "Offer",
        price: i.price.replace(/\$/g, ""),
        priceCurrency: "CAD",
      },
    })),
  };

  return (
    <main className="font-sans section">
      <div className="container">
        <h1 className="section-title">Menu</h1>
        <p className="section-subtitle">100% Halal • Choose your heat: Mild • Medium • Hot • Extra Hot</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.name} className="card overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image src={item.img} alt={item.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg text-[var(--color-brand)]">
                    <Link href={`/menu/${item.slug}`}>{item.name}</Link>
                  </h3>
                  <p className="text-white">{item.price}</p>
                </div>
                <a href="#order" className="btn btn-red" data-analytics-event="order_click" data-analytics-label={`menu_page_${item.name}`}>Order</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuLd) }} />
    </main>
  );
}


