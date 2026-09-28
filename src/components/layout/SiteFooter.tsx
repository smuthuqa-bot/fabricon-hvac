import Link from "next/link";
import {
  ArrowUpRight,
 
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import FooterColumn from "./FooterColumn";
import { FOOTER_NAVIGATION } from "@/data/footer";

export default function SiteFooter() {
  return (
    <footer className="bg-[var(--fabricon-dark)] text-white">
      {/* Main footer */}
      <div className="section-padding-sm">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="focus-ring inline-block"
              >
                <div className="text-2xl font-black tracking-[-0.05em]">
                  FABRI
                  <span className="text-[var(--fabricon-blue)]">
                    CON
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-1.5">
                  <span className="h-[2px] w-7 bg-[var(--fabricon-blue)]" />
                  <span className="h-[2px] w-4 bg-[var(--fabricon-green)]" />
                </div>
              </Link>

              <p className="mt-7 max-w-sm text-sm leading-7 text-white/55">
                Engineering infrastructure and delivering
                professional solutions across our business
                areas.
              </p>

              <Link
                href="/contact"
                className="btn btn-white mt-7"
              >
                Get in Touch
                <ArrowUpRight size={15} />
              </Link>
            </div>

            {/* Explore */}
            <FooterColumn
              title="Explore"
              links={FOOTER_NAVIGATION.explore}
            />

            {/* Businesses */}
            <FooterColumn
              title="Businesses"
              links={FOOTER_NAVIGATION.businesses}
            />

            {/* Services */}
            <FooterColumn
              title="Services"
              links={FOOTER_NAVIGATION.services}
            />
          </div>

          {/* Contact strip */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <MapPin
                    size={17}
                    className="text-[var(--fabricon-blue)]"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">
                    Locations
                  </p>

                  <p className="mt-2 text-sm text-white/65">
                    Kuwait · India · UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <Phone
                    size={17}
                    className="text-[var(--fabricon-green)]"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">
                    Contact
                  </p>

                  <Link
                    href="/contact"
                    className="mt-2 block text-sm text-white/65 hover:text-white"
                  >
                    Contact our team
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <Mail
                    size={17}
                    className="text-[var(--fabricon-blue)]"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">
                    Email
                  </p>

                  <Link
                    href="/contact"
                    className="mt-2 block text-sm text-white/65 hover:text-white"
                  >
                    Send an enquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x flex min-h-16 flex-col items-center justify-between gap-4 py-5 text-xs md:flex-row">
          <p className="text-white/40">
            © {new Date().getFullYear()} FABRICON. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="focus-ring text-white/40 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="focus-ring text-white/40 transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>

            
          </div>
        </div>
      </div>
    </footer>
  );
}