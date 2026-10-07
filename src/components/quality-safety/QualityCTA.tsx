import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/home/Reveal";

export default function QualityCTA() {
  return (
    <section className="bg-[var(--fabricon-navy)] py-20">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#FB5501]">
                Quality • Safety • Reliability
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
                Engineering with responsibility.
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-md bg-[#FB5501] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#E94D00]"
            >
              Talk to Us
              <ArrowRight size={17} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}