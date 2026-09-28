import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2rem] bg-[var(--fabricon-navy)] px-7 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">Continue exploring</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Explore our businesses and capabilities.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">Discover the services, applications and project capabilities of FABRICON and ACME HVAC.</p>
          </div>
          <Link href="/businesses" className="mt-7 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-[var(--fabricon-navy)] hover:bg-blue-50 lg:mt-0">
            Our Businesses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
