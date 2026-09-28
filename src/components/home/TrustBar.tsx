import { Award, Globe2, HardHat, ShieldCheck, Settings2 } from "lucide-react";

const items = [
  { icon: HardHat, label: "Experienced", sub: "Team" },
  { icon: Award, label: "Quality", sub: "Focused" },
  { icon: ShieldCheck, label: "Safety", sub: "First" },
  { icon: Settings2, label: "End-to-End", sub: "Solutions" },
  { icon: Globe2, label: "Serving Kuwait, India", sub: "and Beyond" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-[var(--fabricon-line)] bg-white">
      <div className="container-x grid md:grid-cols-5">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className={`flex items-center gap-4 px-5 py-6 first:pl-0 ${index > 0 ? "border-l border-[var(--fabricon-line)]" : ""}`}>
              <Icon size={30} strokeWidth={1.6} className="shrink-0 text-[var(--fabricon-navy)]" />
              <div>
                <p className="text-sm font-semibold text-[var(--fabricon-text)]">{item.label}</p>
                <p className="text-sm text-[var(--fabricon-muted)]">{item.sub}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
