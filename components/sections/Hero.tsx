import { hero, stats } from "@/lib/content";
import { brand } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Cta } from "@/components/ui/Cta";
import { StatCounter } from "@/components/ui/StatCounter";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { ChartArt } from "@/components/ui/ChartArt";

export function Hero() {
  return (
    <section id="top" className="relative px-4 pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — message */}
        <div className="flex flex-col items-start gap-7">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-up shadow-[0_0_10px_2px_rgba(0,224,138,0.7)]" />
              {hero.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-[2.7rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.1rem]">
              {hero.titleLead}{" "}
              <span className="bg-gradient-to-r from-up to-[#7CF5C4] bg-clip-text text-transparent">
                {hero.titleAccent}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-lg leading-relaxed text-muted">{hero.sub}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-3">
              <Cta href={brand.discordUrl}>{hero.primaryCta}</Cta>
              <Cta href="#inside" variant="ghost">
                {hero.secondaryCta}
              </Cta>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="w-full">
            <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-hairline pt-7 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <dt className="font-display text-3xl font-semibold tracking-tight text-ink">
                    <StatCounter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                  </dt>
                  <dd className="text-[13px] leading-tight text-faint">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Right — trading-room composition */}
        <Reveal delay={0.15} className="relative">
          <div className="bezel shadow-[0_40px_120px_-40px_rgba(0,224,138,0.35)]">
            <div className="bezel-core relative aspect-[4/5] overflow-hidden">
              <ImageSlot
                label="Nour — hero portrait (4:5)"
                src="/nour/opt/hero.jpg"
                alt="Nour Atta at his trading desk, dual monitors with live charts"
                className="h-full w-full rounded-[inherit]"
              />
              {/* top gradient for legibility */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent" />

              {/* members-online pill */}
              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-hairline bg-black/50 px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-up shadow-[0_0_8px_2px_rgba(0,224,138,0.7)]" />
                <span className="text-xs font-medium text-ink">2,914 online</span>
              </div>
            </div>
          </div>

          {/* floating live-alert card (Z-axis cascade) */}
          <div className="absolute -bottom-6 -left-3 w-[17rem] rounded-2xl border border-hairline bg-panel/80 p-4 shadow-lift backdrop-blur-xl sm:-left-8">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-up">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-up" />
                Live alert
              </span>
              <span className="font-mono text-[11px] text-faint">09:31:04</span>
            </div>
            <div className="mt-3 flex items-end justify-between">
              <div>
                <p className="font-display text-lg font-semibold">NVDA</p>
                <p className="text-xs text-muted">Long · entry 121.40</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-lg font-semibold text-up">+2.4%</p>
                <p className="text-[11px] text-faint">stop 120.10</p>
              </div>
            </div>
            <ChartArt className="mt-3 h-10 w-full" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
