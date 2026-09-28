"use client";

import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS } from "@/data/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const closeMenu = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="focus-ring rounded-lg border border-[var(--fabricon-line)] p-2.5 text-[var(--fabricon-navy)] transition-colors hover:border-[var(--fabricon-blue)] hover:text-[var(--fabricon-blue)]"
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 top-[72px] z-40 bg-[var(--fabricon-navy)]/30 backdrop-blur-sm"
            />

            <motion.div
              initial={{
                opacity: 0,
                y: -12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.2,
              }}
              className="absolute left-0 right-0 top-full z-50 border-t border-[var(--fabricon-line)] bg-white shadow-[var(--shadow-heavy)]"
            >
              <nav
                aria-label="Mobile navigation"
                className="container-x max-h-[calc(100vh-72px)] overflow-y-auto py-4"
              >
                {NAV_ITEMS.map((item) => {
                  if ("dropdown" in item && item.dropdown) {
                    const isExpanded =
                      expanded === item.label;

                    return (
                      <div
                        key={item.href}
                        className="border-b border-[var(--fabricon-line)] last:border-b-0"
                      >
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className="focus-ring flex-1 py-4 text-sm font-bold uppercase tracking-[0.06em]"
                          >
                            {item.label}
                          </Link>

                          <button
                            type="button"
                            aria-label={`Expand ${item.label}`}
                            aria-expanded={isExpanded}
                            onClick={() =>
                              setExpanded(
                                isExpanded
                                  ? null
                                  : item.label
                              )
                            }
                            className="focus-ring rounded-lg p-3"
                          >
                            <ChevronDown
                              size={18}
                              className={`transition-transform ${
                                isExpanded
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                        </div>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              className="overflow-hidden"
                            >
                              <div className="mb-3 ml-3 border-l-2 border-[var(--fabricon-blue)] pl-4">
                                {item.dropdown.map(
                                  (subItem) => (
                                    <Link
                                      key={subItem.href}
                                      href={subItem.href}
                                      onClick={closeMenu}
                                      className="focus-ring block py-3"
                                    >
                                      <div className="text-sm font-bold">
                                        {subItem.label}
                                      </div>

                                      <div className="mt-1 text-xs text-[var(--fabricon-muted)]">
                                        {subItem.description}
                                      </div>
                                    </Link>
                                  )
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="focus-ring block border-b border-[var(--fabricon-line)] py-4 text-sm font-bold uppercase tracking-[0.06em] last:border-b-0"
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="btn btn-primary mt-5 w-full"
                >
                  Get a Quote
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}