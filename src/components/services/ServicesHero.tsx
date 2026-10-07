"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/home/Reveal";

interface ServicesHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  accent: "orange" | "green";
}

export default function ServicesHero({
  eyebrow,
  title,
  description,
  image,
  accent,
}: ServicesHeroProps) {
  const accentColor =
    accent === "orange" ? "text-[#FB5501]" : "text-[#22C55E]";

  const buttonColor =
    accent === "orange"
      ? "bg-[#FB5501] hover:bg-[#E94D00]"
      : "bg-[#22C55E] hover:bg-[#16A34A]";

  return (
    <section className="relative min-h-[540px] overflow-hidden bg-black">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

      <div className="container-x relative z-10 flex min-h-[540px] items-center">
        <Reveal>
          <div className="max-w-3xl py-24">
            <span
              className={`text-sm font-black uppercase tracking-[0.2em] ${accentColor}`}
            >
              {eyebrow}
            </span>

            <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              {title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              {description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#services"
                className={`inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold text-white transition ${buttonColor}`}
              >
                Explore Services
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}