import {
  Award,
  RefreshCw,
  ShieldCheck,
  Target,
} from "lucide-react";
import Reveal from "@/components/home/Reveal";
import { qualityPrinciples } from "@/data/qualitySafety";

const icons = [Award, ShieldCheck, Target, RefreshCw];

export default function QualityPrinciples() {
  return (
    <section className="section-padding bg-white">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <span className="section-kicker">Our Commitment</span>

            <h2 className="heading-lg mt-5">
              Built around quality. Delivered with safety.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {qualityPrinciples.map((item, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={item.number} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-[var(--fabricon-line)] bg-[var(--fabricon-soft)] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FB5501]/10 text-[#FB5501]">
                      <Icon size={23} />
                    </div>

                    <span className="text-xs font-black text-black/20">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-black text-[var(--fabricon-navy)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--fabricon-muted)]">
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