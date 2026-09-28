import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const points = [
  "15+ years of expertise",
  "500+ projects completed",
  "2 strategic businesses",
  "100% client satisfaction",
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-[var(--fabricon-soft)]">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <div className="relative min-h-[430px] overflow-hidden rounded-[28px] bg-[var(--fabricon-navy)] p-8 text-white shadow-[var(--shadow-heavy)]">
            <div className="industrial-grid-dark absolute inset-0 opacity-70" />
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute bottom-10 left-10 h-36 w-36 rounded-full border border-[var(--fabricon-blue)]/25" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--fabricon-green)]">
                Engineering Solutions
              </span>
              <div>
                <div className="text-8xl font-black tracking-[-.07em] text-white/10">01</div>
                <h3 className="mt-2 max-w-sm text-3xl font-bold tracking-tight">
                  Building a smarter tomorrow through engineering.
                </h3>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <span className="section-kicker">About Us</span>
          <h2 className="heading-xl mt-5">
            Engineering infrastructure. Enhancing lives.
          </h2>
          <p className="body-lg mt-7 max-w-2xl text-[var(--fabricon-muted)]">
            FABRICON and ACME HVAC bring together complementary engineering capabilities, from power infrastructure to HVAC systems, installation, testing, commissioning and ongoing support.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="flex gap-3">
                <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[var(--fabricon-green)]" />
                <span className="text-sm font-semibold text-[var(--fabricon-text)]">{point}</span>
              </div>
            ))}
          </div>
          <Link href="/about" className="btn btn-secondary mt-9">
            Discover More
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
