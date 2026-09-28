import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

export default function QualitySafety() {
  return (
    <section className="section-padding bg-white">
      <div className="container-x">
        <Reveal>
          <div className="overflow-hidden rounded-[28px] bg-[var(--fabricon-navy)] p-8 text-white md:p-12 lg:p-14">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
              <div className="max-w-3xl">
                <span className="section-kicker">Quality & Safety</span>
                <h2 className="heading-lg mt-5">Professional execution from planning through delivery.</h2>
                <p className="body-lg mt-6 text-white/60">Experienced project managers, engineers and supervisors support supply, installation, testing, commissioning and customer support across HVAC projects.</p>
                <Link href="/quality-safety" className="btn btn-white mt-8">Quality & Safety <ArrowUpRight size={16} /></Link>
              </div>
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5"><ShieldCheck size={42} className="text-[var(--fabricon-green)]" /></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
