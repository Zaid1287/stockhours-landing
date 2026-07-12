import { pricing, brand } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

type Tier = (typeof pricing.tiers)[number];

export function Pricing() {
  return (
    <section id="pricing" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="Membership"
            align="center"
            title="One pass. The whole floor."
            sub="Full Discord access — alerts, streams, watchlists, library, and community. Pick the plan that fits."
          />
          <Reveal delay={0.16}>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-white/[0.02] px-4 py-1.5 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-up" />
              {pricing.note}
            </span>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-4 lg:grid-cols-3">
          {pricing.tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <PricingCard t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ t }: { t: Tier }) {
  return (
    <div
      className={
        t.featured
          ? "relative rounded-[2rem] p-[1.5px] lg:scale-[1.04]"
          : "relative rounded-[2rem]"
      }
      style={
        t.featured
          ? { background: "linear-gradient(180deg, rgba(0,224,138,0.6), rgba(0,224,138,0.05))" }
          : undefined
      }
    >
      <div
        className={`flex h-full flex-col gap-6 rounded-[2rem] border p-7 ${
          t.featured
            ? "border-transparent bg-panel shadow-[0_40px_120px_-40px_rgba(0,224,138,0.5)]"
            : "border-hairline bg-white/[0.02]"
        }`}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold tracking-tight">{t.name}</h3>
          {t.badge && (
            <span
              className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] ${
                t.featured ? "bg-up text-[#04160f]" : "border border-hairline text-muted"
              }`}
            >
              {t.badge}
            </span>
          )}
        </div>

        <div className="flex items-end gap-1.5">
          <span className="font-display text-4xl font-semibold tracking-tight">{t.price}</span>
          <span className="pb-1 text-sm text-faint">{t.cadence}</span>
        </div>
        <p className="text-sm text-muted">{t.blurb}</p>

        <a
          href={brand.discordUrl}
          className={`btn group w-full justify-center ${t.featured ? "btn-primary" : "btn-ghost"}`}
        >
          <span>{t.cta}</span>
          {t.featured ? (
            <span className="btn-chip">
              <Icon name="arrow" size={16} />
            </span>
          ) : (
            <Icon name="arrow" size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
          )}
        </a>

        <ul className="flex flex-col gap-3 border-t border-hairline pt-6">
          {t.perks.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-ink/85">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-up">
                <Icon name="check" size={15} />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
