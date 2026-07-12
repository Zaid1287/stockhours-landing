"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brand, nav } from "@/lib/content";
import { Cta } from "@/components/ui/Cta";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
  }, [menu]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4">
      <nav
        className="mt-4 flex w-full max-w-5xl items-center justify-between rounded-full border border-hairline px-3 py-2 pl-5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
        style={{
          backdropFilter: "blur(18px)",
          background: scrolled ? "rgba(8,9,11,0.72)" : "rgba(8,9,11,0.35)",
          boxShadow: scrolled ? "0 12px 40px -18px rgba(0,0,0,0.8)" : "none",
        }}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-display text-[15px] font-semibold tracking-tight">
            {brand.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted transition-colors duration-300 hover:text-ink"
            >
              {n.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Cta href={brand.discordUrl} className="!py-2.5 !pl-4 text-sm">
              Join
            </Cta>
          </div>
          <button
            onClick={() => setMenu((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className="absolute left-0 top-0 h-[1.5px] w-4 bg-ink transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                style={{ transform: menu ? "translateY(5.5px) rotate(45deg)" : "none" }}
              />
              <span
                className="absolute bottom-0 left-0 h-[1.5px] w-4 bg-ink transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                style={{ transform: menu ? "translateY(-5.5px) rotate(-45deg)" : "none" }}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30 flex flex-col justify-center gap-1 px-8 md:hidden"
            style={{ backdropFilter: "blur(28px)", background: "rgba(5,5,6,0.86)" }}
          >
            {nav.map((n, i) => (
              <motion.a
                key={n.href}
                href={n.href}
                onClick={() => setMenu(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.05, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="font-display text-4xl font-medium tracking-tight text-ink/90"
              >
                {n.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + nav.length * 0.05, duration: 0.6 }}
              className="mt-8"
            >
              <Cta href={brand.discordUrl}>Join the Discord</Cta>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function LogoMark() {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-up/15 ring-1 ring-up/30">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 15l4-4 3 3 5-6 4 4" stroke="#00e08a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
