import Image from "next/image";
import Reveal from "@/components/home/Reveal";

export default function QualitySafetyHero() {
  return (
    <section className="relative min-h-[430px] overflow-hidden bg-[var(--fabricon-navy)]">
      <div className="absolute inset-0">
        <Image
          src="/images/acme-hvac/hvac-solutions.jpg"
          alt="Engineering project"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[var(--fabricon-navy)]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--fabricon-navy)] via-[var(--fabricon-navy)]/90 to-transparent" />
      </div>

      <div className="container-x relative z-10 flex min-h-[430px] items-center">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#FB5501]">
              Quality & Safety
            </span>

            <h1 className="mt-5 text-5xl font-black leading-[1.03] tracking-[-0.045em] text-white md:text-7xl">
              Our Commitment
              <br />
              <span className="text-[#FB5501]">
                to a Safer Tomorrow.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Quality in every process. Safety in every project.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}