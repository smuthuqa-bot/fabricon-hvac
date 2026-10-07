"use client";

import {
  Handshake,
  ShieldCheck,
  Target,
  BadgeCheck,
} from "lucide-react";
import Reveal from "@/components/home/Reveal";
import { sharedCommitments } from "@/data/businesses";

const icons = [BadgeCheck, ShieldCheck, Target, Handshake];

export default function SharedCommitment() {
  return (
    <section className="section-padding bg-[var(--fabricon-navy)] text-white">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#FB5501]">
              Shared Commitment
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Different disciplines.
              <br />
              One standard of delivery.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/65">
              Our businesses operate in different engineering environments,
              while maintaining a common commitment to quality, safety,
              reliability and long-term client relationships.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sharedCommitments.map((item, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:bg-white/[0.08]">
                  <Icon
                    size={27}
                    className="text-[#FB5501]"
                    strokeWidth={1.8}
                  />

                  <h3 className="mt-6 text-lg font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}