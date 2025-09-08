import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Menu | Sam's Nashville Hot Chicken",
  description: "Nashville hot sliders, sandos, tenders, mac, dirty fries. Choose your heat.",
};

export default function MenuPage() {
  const items = [
    { name: "Nashville Hot Sliders", price: "$11.99", img: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { name: "Chicken Sando", price: "$12.99", img: "https://images.pexels.com/photos/2271101/pexels-photo-2271101.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { name: "Crispy Tenders", price: "$10.49", img: "https://images.pexels.com/photos/18492135/pexels-photo-18492135.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { name: "Mac Attack", price: "$8.99", img: "https://images.pexels.com/photos/18165942/pexels-photo-18165942.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { name: "Dirty Fries", price: "$7.99", img: "https://images.pexels.com/photos/4109230/pexels-photo-4109230.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { name: "Loaded Box", price: "$15.99", img: "https://images.pexels.com/photos/628752/pexels-photo-628752.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  ];

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
                  <h3 className="font-bold text-lg text-[var(--color-brand)]">{item.name}</h3>
                  <p className="text-white">{item.price}</p>
                </div>
                <a href="#order" className="btn btn-red" data-analytics-event="order_click" data-analytics-label={`menu_page_${item.name}`}>Order</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


