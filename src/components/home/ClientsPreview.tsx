import Reveal from "./Reveal";

const clients = [
  "RMZ Millenia Business Park",
  "VWF (York) – IAMPL",
  "Fujitsu India Pvt Ltd",
  "JBA Metals",
];

export default function ClientsPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-x">
        <Reveal>
          <div className="text-center">
            <span className="section-kicker">Project Experience</span>
            <h2 className="heading-lg mt-5">Selected organizations and project experience.</h2>
          </div>
        </Reveal>

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-[var(--fabricon-line)] md:grid-cols-2 lg:grid-cols-4">
          {clients.map((client, index) => (
            <Reveal key={client} delay={index * 0.05}>
              <div className="flex min-h-32 items-center justify-center border-b border-[var(--fabricon-line)] p-7 text-center transition-colors hover:bg-[var(--fabricon-soft)] md:border-r md:last:border-r-0 lg:border-b-0">
                <span className="text-sm font-bold text-[var(--fabricon-navy)]">{client}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
