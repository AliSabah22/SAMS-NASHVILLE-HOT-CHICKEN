import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Sam's Nashville Hot Chicken",
  description: "Photos and videos of our halal Nashville hot chicken in Mississauga.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <main className="font-sans section">
      <div className="container">
        <h1 className="section-title">Gallery</h1>
        <p className="section-subtitle">See the crunch and sizzle from our kitchen.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-4">
            <div className="aspect-video w-full">
              <iframe
                loading="lazy"
                title="Instagram"
                src="https://www.instagram.com/samsnashvillehotchicken/embed"
                className="w-full h-full rounded-lg"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
          <div className="card p-4">
            <div className="aspect-video w-full">
              <iframe
                loading="lazy"
                title="TikTok"
                src="https://www.tiktok.com/@samsnashvillehot?embed=1"
                className="w-full h-full rounded-lg"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


