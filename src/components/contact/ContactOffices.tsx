import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Reveal from "@/components/home/Reveal";
import { contactOffices } from "@/data/contact";

export default function ContactOffices() {
  return (
    <section className="section-padding bg-[var(--fabricon-soft)]">
      <div className="container-x">
        <Reveal>
          <div>
            <span className="section-kicker">Our Offices</span>

            <h2 className="heading-lg mt-5">
              Connect with the right team.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {contactOffices.map((office, index) => (
            <Reveal key={`${office.company}-${office.location}`} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-[var(--fabricon-line)] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] ${
                      office.accent === "orange"
                        ? "bg-[#FB5501]/10 text-[#FB5501]"
                        : "bg-[var(--fabricon-green)]/10 text-[var(--fabricon-green)]"
                    }`}
                  >
                    {office.company}
                  </span>

                  <span className="text-xs font-bold text-[var(--fabricon-muted)]">
                    {office.location}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-black text-[var(--fabricon-navy)]">
                  {office.title}
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="flex gap-3">
                    <MapPin
                      size={18}
                      className="mt-1 shrink-0 text-[#FB5501]"
                    />

                    <p className="text-sm leading-6 text-[var(--fabricon-muted)]">
                      {office.address}
                    </p>
                  </div>

                  {office.phones.length > 0 && (
                    <div className="flex gap-3">
                      <Phone
                        size={18}
                        className="mt-1 shrink-0 text-[#FB5501]"
                      />

                      <div className="space-y-1">
                        {office.phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="block text-sm font-semibold text-[var(--fabricon-navy)] hover:text-[#FB5501]"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Mail
                      size={18}
                      className="mt-1 shrink-0 text-[#FB5501]"
                    />

                    <a
                      href={`mailto:${office.email}`}
                      className="text-sm font-semibold text-[var(--fabricon-navy)] hover:text-[#FB5501]"
                    >
                      {office.email}
                    </a>
                  </div>

                  <div className="flex gap-3">
                    <Clock3
                      size={18}
                      className="mt-1 shrink-0 text-[#FB5501]"
                    />

                    <p className="text-sm text-[var(--fabricon-muted)]">
                      {office.hours}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}