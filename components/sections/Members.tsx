import { testimonials, igSlots, brand } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Icon } from "@/components/ui/Icon";

export function Members() {
  return (
    <section id="members" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="From the floor"
          title="Traders who stopped trading alone."
          sub="Real words from members. Results are illustrative — trading carries risk and outcomes vary."
        />

        {/* testimonials */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <figure className="flex h-full flex-col justify-between gap-6 rounded-[1.6rem] border border-hairline bg-white/[0.02] p-6">
                <blockquote className="text-[15px] leading-relaxed text-ink/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-up/12 font-display text-sm font-semibold text-up ring-1 ring-up/25">
                    {t.name.charAt(0)}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-ink">{t.name}</span>
                    <span className="text-xs text-faint">
                      {t.handle} · {t.stat}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* instagram grid */}
        <div className="mt-20 flex flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <span className="eyebrow">Straight from {brand.handle}</span>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                Off the desk, on the feed.
              </h3>
            </div>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              Follow {brand.handle}
              <Icon name="arrow" size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {igSlots.map((s, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <div className="group overflow-hidden rounded-2xl border border-hairline transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1">
                  <ImageSlot label={s.label} src={s.src} chart className="aspect-square w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
