import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden bg-[var(--fabricon-navy)] text-white md:block">
      <div className="container-x flex min-h-10 items-center justify-between">
        <div className="flex items-center gap-6 text-xs text-white/70">
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Kuwait</span>
          </div>

          <div className="h-3 w-px bg-white/15" />

          <span>India</span>

          <div className="h-3 w-px bg-white/15" />

          <span>UAE</span>

          <div className="h-3 w-px bg-white/15" />

          <span>Global Projects</span>
        </div>

        <div className="flex items-center gap-5 text-xs text-white/70">
          <a
            href="#"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone size={13} />
            <span>Contact Us</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail size={13} />
            <span>Email Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}