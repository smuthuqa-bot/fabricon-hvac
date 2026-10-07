import { CheckCircle2, ShieldCheck } from "lucide-react";
import Reveal from "@/components/home/Reveal";
import {
  qualityPolicy,
  safetyPolicy,
} from "@/data/qualitySafety";

function PolicyCard({
  title,
  description,
  items,
  safety = false,
}: {
  title: string;
  description: string;
  items: readonly string[];
  safety?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-[var(--fabricon-line)] bg-white p-8">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${
          safety
            ? "bg-[var(--fabricon-green)]/10 text-[var(--fabricon-green)]"
            : "bg-[#FB5501]/10 text-[#FB5501]"
        }`}
      >
        {safety ? (
          <ShieldCheck size={24} />
        ) : (
          <CheckCircle2 size={24} />
        )}
      </div>

      <h3 className="mt-6 text-2xl font-black text-[var(--fabricon-navy)]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[var(--fabricon-muted)]">
        {description}
      </p>

      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm font-medium text-[var(--fabricon-navy)]"
          >
            <CheckCircle2
              size={17}
              className={
                safety
                  ? "mt-0.5 shrink-0 text-[var(--fabricon-green)]"
                  : "mt-0.5 shrink-0 text-[#FB5501]"
              }
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function QualityPolicies() {
  return (
    <section className="section-padding bg-[var(--fabricon-soft)]">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <span className="section-kicker">Our Approach</span>

            <h2 className="heading-lg mt-5">
              Responsible execution at every stage.
            </h2>

            <p className="body-md mt-5">
              Our approach combines quality-focused execution with safe
              working practices to support reliable project delivery.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <PolicyCard
              title="Quality Policy"
              description="We focus on dependable execution, customer satisfaction and continuous improvement."
              items={qualityPolicy}
            />
          </Reveal>

          <Reveal delay={0.08}>
            <PolicyCard
              title="Safety Policy"
              description="We promote safe working practices and safety awareness across project activities."
              items={safetyPolicy}
              safety
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}