import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section className="section-padding pt-0">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-[var(--fabricon-blue)] p-8 text-white md:p-12 lg:p-14">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/70">Engineering Solutions</span>
                <h2 className="heading-xl mt-5">Let's build a smarter tomorrow.</h2>
                <p className="body-lg mt-5 text-white/75">Connect with our team for your next engineering requirement.</p>
              </div>
              <Link href="/contact" className="btn btn-white shrink-0">Get in Touch <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
