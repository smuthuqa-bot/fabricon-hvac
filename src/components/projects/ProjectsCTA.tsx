import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/home/Reveal";

export default function ProjectsCTA() {
  return (
    <section className="bg-[var(--fabricon-navy)] py-20">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#FB5501]">
                Start Your Next Project
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
                Let&apos;s build your next project together.
              </h2>

              <p className="mt-4 text-base leading-7 text-white/65">
                Talk to our team about your engineering, infrastructure or
                HVAC requirements.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-md bg-[#FB5501] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#E94D00]"
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}