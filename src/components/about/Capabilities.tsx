import {
  CheckCircle2,
  ClipboardCheck,
  HardHat,
  Settings,
  Wrench,
} from "lucide-react";

import { aboutContent } from "@/data/about";

const icons = [
  ClipboardCheck,
  Settings,
  HardHat,
  Wrench,
  CheckCircle2,
];

export default function Capabilities() {
  return (
    <section className="section-padding bg-[var(--fabricon-navy)] text-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="section-kicker text-white">
              Capabilities
            </span>

            <h2 className="heading-lg mt-6">
              From planning to commissioning.
            </h2>

            <p className="body-md mt-6 max-w-md text-white/60">
              A project-focused team equipped to support
              supply, installation, testing, commissioning,
              low-side contracts and customer support.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {aboutContent.capabilities.map(
              (capability, index) => {
                const Icon = icons[index % icons.length];

                return (
                  <div
                    key={capability}
                    className="bg-[var(--fabricon-navy)] p-6 transition-colors hover:bg-[var(--fabricon-navy-light)]"
                  >
                    <Icon
                      size={21}
                      className="text-[var(--fabricon-blue)]"
                    />

                    <p className="mt-5 text-sm font-semibold text-white/80">
                      {capability}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
}