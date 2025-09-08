import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Sam's Nashville Hot Chicken",
  description: "Opened Sept 2025 at Ridgeway Plaza to bring real Nashville hot chicken to Mississauga's halal foodie hub.",
};

export default function AboutPage() {
  return (
    <main className="font-sans section">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Hot chicken being fried"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="section-title">Our Story</h1>
          <p className="section-subtitle">
            We opened in September 2025 at Ridgeway Plaza to answer Mississauga’s call for real Nashville hot chicken.
            100% halal, made fresh, and unapologetically bold.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="pill border-black/30">Halal Certified</span>
            <span className="pill border-black/30">Local Family-Owned</span>
          </div>
        </div>
      </div>
    </main>
  );
}


