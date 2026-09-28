"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type DropdownItem = {
  label: string;
  href: string;
  description: string;
};

type DropdownMenuProps = {
  label: string;
  href: string;
  items: readonly DropdownItem[];
};

export default function DropdownMenu({
  label,
  href,
  items,
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center">
        <Link
          href={href}
          className="focus-ring flex items-center gap-1.5 px-3 py-7 text-[0.78rem] font-bold uppercase tracking-[0.07em] text-[var(--fabricon-ink)] transition-colors hover:text-[var(--fabricon-blue)]"
        >
          {label}
        </Link>

        <button
          type="button"
          aria-label={`Open ${label} menu`}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring -ml-2 mr-1 rounded-md p-1 text-[var(--fabricon-muted)] transition-colors hover:text-[var(--fabricon-blue)]"
        >
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`absolute left-0 top-full z-50 w-80 pt-2 transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-xl border border-[var(--fabricon-line)] bg-white p-2 shadow-[var(--shadow-heavy)]">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block rounded-lg px-4 py-4 transition-colors hover:bg-[var(--fabricon-soft)]"
              onClick={() => setOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[var(--fabricon-ink)] group-hover:text-[var(--fabricon-blue)]">
                  {item.label}
                </span>

                <span className="text-[var(--fabricon-blue)] opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </div>

              <p className="mt-1 text-xs leading-5 text-[var(--fabricon-muted)]">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}