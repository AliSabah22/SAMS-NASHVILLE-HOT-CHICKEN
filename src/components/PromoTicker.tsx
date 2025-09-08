"use client";
import { useEffect, useState } from "react";

const messages = [
  "Grand Opening • Sept 2025",
  "Free Slider for First 100 Orders",
  "50% Off Tuesdays",
];

export default function PromoTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-[--color-brand] text-white">
      <div className="container py-3 flex items-center justify-center text-sm sm:text-base" aria-live="polite">
        <span className="pill border-white/20 bg-white/10 transition-all duration-300 will-change-transform">
          {messages[index]}
        </span>
      </div>
    </div>
  );
}


