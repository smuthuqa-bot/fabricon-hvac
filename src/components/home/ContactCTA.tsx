"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "@/components/home/Reveal";

export default function ContactCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--fabricon-navy)] py-20 text-white md:py-28">
      <Image
        src="/images/fabricon/power-infrastructure.jpeg"
        alt="FABRICON engineering infrastructure"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[var(--fabricon-navy)]/88" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--fabricon-navy)] via-[var(--fabricon-navy)]/90 to-transparent" />

      <div className="container-x relative z-10">
        <Reveal>
          <div className="max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#FB5501]">
              Tender & Commercial Inquiries
            </span>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] md:text-6xl">
              Let&apos;s build Kuwait&apos;s grid.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              Talk to FABRICON about substations, underground EHV networks, civil
              infrastructure, structural steel and integrated engineering services.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FB5501] px-6 py-3.5 text-sm font-black text-white transition hover:bg-[#E94D00]"
              >
                Request Tender Proposal
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+96594077827"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-black text-white"
              >
                <Phone className="h-4 w-4" />
                +965 9407 7827
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
