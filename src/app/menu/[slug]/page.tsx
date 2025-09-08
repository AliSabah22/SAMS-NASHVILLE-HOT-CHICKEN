import type { Metadata } from "next";
import Image from "next/image";
import { MENU_ITEMS } from "@/data/menu";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return MENU_ITEMS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const item = MENU_ITEMS.find((m) => m.slug === params.slug);
  if (!item) return {};
  return {
    title: `${item.name} | Sam's Nashville Hot Chicken (Mississauga)`,
    description: `${item.description} Halal. ${item.price}. Choose spice level.`,
    alternates: { canonical: `/menu/${item.slug}` },
    openGraph: {
      title: `${item.name} | Sam's Nashville Hot Chicken`,
      description: item.description,
      images: [{ url: item.image }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default function MenuItemPage({ params }: Params) {
  const item = MENU_ITEMS.find((m) => m.slug === params.slug);
  if (!item) return null;
  return (
    <main className="font-sans section">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md">
          <Image src={item.image} alt={`${item.name} at Sam's Nashville Hot Chicken in Mississauga`} fill className="object-cover" />
        </div>
        <div>
          <h1 className="section-title">{item.name}</h1>
          <p className="section-subtitle">{item.description}</p>
          <p className="mt-4 text-white">Price: {item.price}</p>
          <div className="mt-6 flex gap-2 items-center">
            {item.spiceLevels.map((s) => (
              <span key={s} className="pill">{s}</span>
            ))}
          </div>
          <div className="mt-8">
            <a href="#order" className="btn btn-red" data-analytics-event="order_click" data-analytics-label={`menu_detail_${item.slug}`}>Order Now</a>
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        image: item.image,
        offers: { "@type": "Offer", price: item.price.replace(/\$/g, ''), priceCurrency: "CAD" }
      }) }} />
    </main>
  );
}


