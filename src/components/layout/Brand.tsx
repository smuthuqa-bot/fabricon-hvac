import Image from "next/image";
import Link from "next/link";

export default function Brand() {
  return (
    <Link
      href="/"
      aria-label="FABRICON home"
      className="group flex items-center"
    >
      <div className="flex items-center gap-3">
        {/* FABRICON Logo */}
        <div className="relative h-12 w-[150px]">
          <Image
            src="/images/brand/fab-logo.png"
            alt="FABRICON"
            fill
            priority
            className="object-contain object-left"
            sizes="150px"
          />
        </div>

        {/* Divider */}
        <div className="hidden h-9 w-px bg-[var(--fabricon-line)] sm:block" />

        {/* ACME HVAC Logo */}
        {/* <div className="relative hidden h-10 w-[105px] sm:block">
          <Image
            src="/images/brand/acme-hvac-logo.png"
            alt="ACME HVAC"
            fill
            className="object-contain object-left"
            sizes="105px"
          />
        </div> */}
      </div>
    </Link>
  );
}