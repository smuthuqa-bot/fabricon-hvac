import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { NAV_ITEMS } from "@/data/navigation";

export default function Navigation() {
  return (
    <nav
      aria-label="Primary navigation"
      className="hidden items-center lg:flex"
    >
      {NAV_ITEMS.map((item) => {
        if ("dropdown" in item && item.dropdown) {
          return (
            <DropdownMenu
              key={item.href}
              label={item.label}
              href={item.href}
              items={item.dropdown}
            />
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className="focus-ring px-3 py-7 text-[0.78rem] font-bold uppercase tracking-[0.07em] text-[var(--fabricon-ink)] transition-colors hover:text-[var(--fabricon-blue)]"
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}