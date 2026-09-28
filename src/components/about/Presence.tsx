import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { aboutPage } from "@/data/about";

export default function Presence() {
  return (
    <section className="section-padding bg-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Left */}
          <Reveal>
            <div>
              <span className="section-kicker">Our Presence</span>

              <h2 className="heading-lg mt-5">
                Serving clients across Southern India.
              </h2>

              <p className="body-md mt-5 max-w-xl">
                ACME HVAC is based in Chennai and provides services across
                Andhra Pradesh, Karnataka and Telangana.
              </p>

              <div className="mt-8 h-px w-full bg-[var(--fabricon-line)]" />

              <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-[var(--fabricon-navy)]">
                <MapPin
                  size={18}
                  className="text-[var(--fabricon-green)]"
                />

                <span>ACME HVAC — India</span>
              </div>
            </div>
          </Reveal>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutPage.acme.presence.map((location, index) => (
              <Reveal key={location.name} delay={index * 0.08}>
                <div className="group rounded-2xl border border-[var(--fabricon-line)] bg-[var(--fabricon-soft)] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--fabricon-green)]/10 text-[var(--fabricon-green)]">
                    <MapPin size={20} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-[var(--fabricon-navy)]">
                    {location.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[var(--fabricon-muted)]">
                    {location.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}