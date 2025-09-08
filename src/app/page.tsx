"use client";
import Image from "next/image";
// Link imported earlier was used in CTA section; removing to satisfy linter
import { useState } from "react";
import PromoTicker from "@/components/PromoTicker";
import OrderCtaStrip from "@/components/OrderCtaStrip";

export default function Home() {
  const [spiceLevel, setSpiceLevel] = useState<"Mild" | "Medium" | "Hot" | "Extra Hot">("Medium");
  const spiceOptions: Array<typeof spiceLevel> = ["Mild", "Medium", "Hot", "Extra Hot"];

  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="relative section">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge">100% Halal</span>
            <h1 className="section-title mt-4">Hottest Nashville-Style Chicken in Mississauga</h1>
            <p className="section-subtitle">100% Halal • Bold & Flavorful • Ridgeway Plaza</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#order" className="btn btn-primary">Order Now</a>
              <a href="#menu" className="btn btn-accent">View Menu</a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg" aria-label="Hero image: Nashville hot chicken sandwich">
        <Image
              src="https://images.pexels.com/photos/4109136/pexels-photo-4109136.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Nashville hot chicken sandwich"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
          priority
        />
            <span className="absolute top-3 left-3 pill bg-white/90 border-white/0 text-[--color-charcoal]" aria-label="Halal Certified">
              <Image src="/halal.svg" alt="Halal Certified" width={20} height={20} />
              Halal
            </span>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <PromoTicker />

      {/* Menu Highlights */}
      <section id="menu" className="section">
        <div className="container">
          <h2 className="section-title">Menu Highlights</h2>
          <p className="section-subtitle">Choose your heat: Mild • Medium • Hot • Extra Hot</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {spiceOptions.map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setSpiceLevel(level)}
                className={`pill ${
                  spiceLevel === level
                    ? "bg-[--color-brand] text-white border-transparent"
                    : "border-black/20 bg-white text-[--color-charcoal] hover:bg-black/5"
                }`}
                data-analytics-event="spice_select"
                data-analytics-label={level}
                aria-pressed={spiceLevel === level}
              >
                {level}
              </button>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Nashville Hot Sliders",
                price: "$11.99",
                img: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1200",
              },
              {
                name: "Chicken Sando",
                price: "$12.99",
                img: "https://images.pexels.com/photos/2271101/pexels-photo-2271101.jpeg?auto=compress&cs=tinysrgb&w=1200",
              },
              {
                name: "Crispy Tenders",
                price: "$10.49",
                img: "https://images.pexels.com/photos/18492135/pexels-photo-18492135.jpeg?auto=compress&cs=tinysrgb&w=1200",
              },
              {
                name: "Mac Attack",
                price: "$8.99",
                img: "https://images.pexels.com/photos/18165942/pexels-photo-18165942.jpeg?auto=compress&cs=tinysrgb&w=1200",
              },
              {
                name: "Dirty Fries",
                price: "$7.99",
                img: "https://images.pexels.com/photos/4109230/pexels-photo-4109230.jpeg?auto=compress&cs=tinysrgb&w=1200",
              },
              {
                name: "Loaded Box",
                price: "$15.99",
                img: "https://images.pexels.com/photos/628752/pexels-photo-628752.jpeg?auto=compress&cs=tinysrgb&w=1200",
              },
            ].map((item) => (
              <div key={item.name} className="card overflow-hidden">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={item.img} alt={item.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-[var(--color-brand)]">{item.name}</h3>
                    <p className="text-white">{item.price}</p>
                  </div>
                  <a href="#order" className="btn btn-red" data-analytics-event="order_click" data-analytics-label={`menu_${item.name}_${spiceLevel}`} aria-label={`Order ${item.name} - ${spiceLevel}`}>
                    Order
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Our Story */}
      <section id="about" className="section bg-[color:rgba(255,209,102,0.1)]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Frying chicken"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="section-title">Our Story</h2>
            <p className="section-subtitle">
              Opened September 2025 at Ridgeway Plaza to bring real Nashville hot chicken to
              Mississauga’s halal foodies. Crispy, juicy, and unapologetically bold.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="pill border-black/30">Halal Certified</span>
              <span className="pill border-black/30">Local Family-Owned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Social Proof */}
      <section id="gallery" className="section">
        <div className="container">
          <h2 className="section-title">Get Hungry</h2>
          <p className="section-subtitle">See the crunch. Hear the sizzle.</p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "https://images.pexels.com/photos/6288/food-salad-restaurant-person.jpg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/1857736/pexels-photo-1857736.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/4109131/pexels-photo-4109131.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/262945/pexels-photo-262945.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&w=800",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                <Image src={src} alt="Hot chicken" fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-4">
              <div className="aspect-video w-full">
                <iframe
                  loading="lazy"
                  title="Instagram Reel"
                  src="https://www.instagram.com/p/CwR2D8zJ9gG/embed"
                  className="w-full h-full rounded-lg"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </div>
            <div className="card p-4">
              <div className="aspect-video w-full">
                <iframe
                  loading="lazy"
                  title="TikTok Video"
                  src="https://www.tiktok.com/embed/7234567890123456789"
                  className="w-full h-full rounded-lg"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 text-white text-center">
            <p>
              “Crispy, spicy, and addictive. Mississauga’s best Nashville hot.” — Local Foodie
              <span className="ml-2">⭐ 4.4/5 on Uber Eats</span>
            </p>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="location" className="section bg-[color:rgba(230,57,70,0.08)]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="section-title">Visit Us</h2>
            <p className="section-subtitle">Ridgeway Plaza • 3540 Platinum Dr #4, Mississauga, ON L5M 2R9</p>
            <div className="mt-6 space-y-2 text-white">
              <p>Hours: Mon–Thu 11am–10pm • Fri–Sat 11am–11pm • Sun 12pm–9pm</p>
              <p>
                Phone: <a className="underline" href="tel:+16471234567">(647) 123-4567</a>
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
      </section>

      {/* Order Online CTA */}
      <section id="order" className="section">
        <div className="container text-center">
          <h2 className="section-title">Order Online</h2>
          <p className="section-subtitle">Get the heat delivered or pick up at Ridgeway Plaza.</p>
    </div>
      </section>
      <OrderCtaStrip />
    </main>
  );
}
