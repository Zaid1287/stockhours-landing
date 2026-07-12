import { brand, nav, disclaimer, prototypeNote } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-hairline px-4 pt-16 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex max-w-sm flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-up/15 ring-1 ring-up/30">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 15l4-4 3 3 5-6 4 4" stroke="#00e08a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-display text-[15px] font-semibold tracking-tight">{brand.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-faint">
              A live day-trading floor led by {brand.trader}. Alerts, streams, and mentorship in one Discord.
            </p>
            <div className="flex gap-2">
              {[
                { label: "Instagram", href: brand.instagramUrl },
                { label: "YouTube", href: brand.youtubeUrl },
                { label: "X", href: brand.xUrl },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-hairline px-3 py-1.5 text-xs text-muted transition-colors hover:text-ink"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <nav className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-[11px] uppercase tracking-[0.2em] text-faint">Explore</span>
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="text-sm text-muted transition-colors hover:text-ink">
                  {n.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[11px] uppercase tracking-[0.2em] text-faint">Join</span>
              <a href={brand.discordUrl} className="text-sm text-muted transition-colors hover:text-ink">Membership</a>
              <a href="#pricing" className="text-sm text-muted transition-colors hover:text-ink">Pricing</a>
              <a href="#faq" className="text-sm text-muted transition-colors hover:text-ink">FAQ</a>
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-8">
          <p className="text-xs leading-relaxed text-faint">
            <span className="font-medium text-muted">Risk disclosure — </span>
            {disclaimer}
          </p>
          <p className="text-xs leading-relaxed text-faint/80">{prototypeNote}</p>
          <p className="text-xs text-faint/70">
            © {2026} {brand.name}. Prototype build.
          </p>
        </div>
      </div>
    </footer>
  );
}
