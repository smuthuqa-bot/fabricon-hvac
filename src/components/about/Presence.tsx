import { MapPin } from "lucide-react";
import { aboutContent } from "@/data/about";

export default function Presence() {
  return (
    <section className="section-padding bg-soft">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="section-kicker">
              Our Presence
            </span>

            <h2 className="heading-lg mt-6">
              Serving clients across key South Indian markets.
            </h2>

            <p className="body-md text-muted mt-6 max-w-xl">
              ACME HVAC is based in Chennai and also provides
              services across Andhra Pradesh, Karnataka and
              Telangana.
            </p>
          </div>

          <div className="industrial-grid rounded-xl border border-[var(--fabricon-line)] bg-white p-8 md:p-12">
            <div className="grid gap-4 sm:grid-cols-2">
              {aboutContent.presence.map((location) => (
                <div
                  key={location}
                  className="flex items-center gap-4 border-b border-[var(--fabricon-line)] py-5 last:border-b-0 sm:last:border-b"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--fabricon-soft-blue)]">
                    <MapPin
                      size={18}
                      className="text-[var(--fabricon-blue)]"
                    />
                  </div>

                  <span className="font-bold text-[var(--fabricon-ink)]">
                    {location}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}