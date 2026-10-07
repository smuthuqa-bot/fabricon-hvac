import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/home/Reveal";

export default function CareersCTA() {
  return (
    <section className="bg-[var(--fabricon-navy)] py-20">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#FB5501]">
                Join Our Team
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
                Together, we build a better tomorrow.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
                Don&apos;t see the right opening? Get in touch with our team
                and share your profile.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-md bg-[#FB5501] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#E94D00]"
            >
              Send Your Profile
              <ArrowRight size={17} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}