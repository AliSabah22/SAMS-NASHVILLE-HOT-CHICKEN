import Link from "next/link";

export default function OrderCtaStrip() {
  return (
    <section className="bg-[--color-charcoal]">
      <div className="container py-8 text-center">
        <h3 className="text-white text-2xl font-extrabold">Hungry now?</h3>
        <p className="text-white/80 mt-2">Order for pickup or delivery.</p>
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <Link href="https://www.ubereats.com" target="_blank" className="btn btn-primary" data-analytics-event="order_platform" data-analytics-label="ubereats">
            Uber Eats
          </Link>
          <Link href="https://www.ritual.co" target="_blank" className="btn btn-accent" data-analytics-event="order_platform" data-analytics-label="ritual">
            Ritual
          </Link>
          <Link href="#" className="btn btn-primary" data-analytics-event="order_platform" data-analytics-label="direct">
            Order Direct
          </Link>
        </div>
      </div>
    </section>
  );
}


