import Image from "next/image";
import Reveal from "@/components/home/Reveal";

export default function ContactHero() {
  return (
    <section className="relative min-h-[440px] overflow-hidden bg-[var(--fabricon-navy)]">
      <div className="absolute inset-0">
        <Image
          src="/images/acme-hvac/hvac-solutions.jpg"
          alt="Engineering solutions"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[var(--fabricon-navy)]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--fabricon-navy)] via-[var(--fabricon-navy)]/85 to-transparent" />
      </div>

      <div className="container-x relative z-10 flex min-h-[440px] items-center">
        <Reveal>
          <div className="max-w-3xl">
            <span className="section-kicker text-white/70">
              Contact Us
            </span>

            <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-[-0.045em] text-white md:text-7xl">
              Let&apos;s Build a
              <br />
              <span className="text-[#FB5501]">Better Tomorrow.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Get in touch with our team for enquiries, project discussions,
              career opportunities and engineering requirements.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}