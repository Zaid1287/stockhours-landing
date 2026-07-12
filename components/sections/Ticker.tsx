import { ticker, pressLogos } from "@/lib/content";

export function Ticker() {
  const row = [...ticker, ...ticker]; // duplicate for seamless -50% loop
  return (
    <section className="border-y border-hairline bg-white/[0.015] py-5">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-2.5 font-mono text-sm">
              <span className="font-semibold text-ink">{t.sym}</span>
              <span className={t.dir > 0 ? "text-up" : "text-down"}>
                {t.dir > 0 ? "▲" : "▼"} {t.chg}
              </span>
              <span className="text-hairline">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-5 flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4">
        <span className="text-[11px] uppercase tracking-[0.2em] text-faint">As featured in</span>
        {pressLogos.map((l) => (
          <span key={l} className="font-display text-sm font-medium tracking-wide text-muted/70">
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}
