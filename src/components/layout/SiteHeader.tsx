import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TopBar from "./TopBar";
import Brand from "./Brand";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-[100] bg-white">
      <TopBar />

      <div className="border-b border-[var(--fabricon-line)] bg-white">
        <div className="container-x flex min-h-[72px] items-center justify-between">
          <Brand />

          <div className="flex items-center gap-3">
            <Navigation />

            <Link
              href="/contact"
              className="btn btn-primary hidden min-h-[42px] px-5 text-xs lg:inline-flex"
            >
              Get a Quote
              <ArrowUpRight size={15} />
            </Link>

            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}