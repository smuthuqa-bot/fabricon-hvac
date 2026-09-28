import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-[var(--fabricon-blue)]">
      <div className="container-x">
        <div className="flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/70">
              Let's Build Together
            </span>

            <h2 className="heading-md mt-4 max-w-2xl text-white">
              Have an engineering or HVAC requirement?
            </h2>
          </div>

          <Link
            href="/contact"
            className="btn btn-white shrink-0"
          >
            Contact Us
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}