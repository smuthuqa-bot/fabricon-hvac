import Link from "next/link";

export default function Brand() {
  return (
    <Link
      href="/"
      aria-label="FABRICON home"
      className="group flex items-center"
    >
      <div className="flex items-center gap-3">
        {/* FABRICON */}
        <div className="leading-none">
          <div className="text-[1.55rem] font-black tracking-[-0.055em] text-[var(--fabricon-navy)]">
            FABRI
            <span className="text-[var(--fabricon-blue)]">
              CON
            </span>
          </div>

          <div className="mt-1 flex items-center gap-1.5">
            <span className="h-[2px] w-5 bg-[var(--fabricon-blue)]" />
            <span className="h-[2px] w-3 bg-[var(--fabricon-green)]" />
          </div>
        </div>

        {/* Divider */}
        <div className="hidden h-9 w-px bg-[var(--fabricon-line)] sm:block" />

        {/* ACME HVAC */}
        <div className="hidden leading-none sm:block">
          <div className="text-[0.9rem] font-extrabold tracking-[0.08em] text-[var(--fabricon-navy)]">
            ACME
          </div>

          <div className="mt-1 text-[0.55rem] font-bold tracking-[0.18em] text-[var(--fabricon-green)]">
            HVAC
          </div>
        </div>
      </div>
    </Link>
  );
}