import { about } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* portrait */}
        <Reveal className="order-1 lg:order-none">
          <div className="bezel mx-auto max-w-md">
            <div className="bezel-core relative aspect-[4/5] overflow-hidden">
              <ImageSlot label="Nour — desk / lifestyle (4:5)" src="/nour/opt/about.jpg" alt="Nour Atta trading from home on dual laptops, waterfront view" className="h-full w-full rounded-[inherit]" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-hairline bg-black/55 px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-up" />
                <span className="text-xs font-medium">{about.role.split("·")[0].trim()}</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* story */}
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <span className="eyebrow">{about.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {about.name}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm font-medium text-up">{about.role}</p>
          </Reveal>
          {about.paras.map((p, i) => (
            <Reveal key={i} delay={0.14 + i * 0.05}>
              <p className="max-w-xl text-lg leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.28} className="w-full">
            <dl className="mt-2 grid grid-cols-3 gap-4 border-t border-hairline pt-6">
              {about.miniStats.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <dt className="font-display text-2xl font-semibold text-ink">{m.value}</dt>
                  <dd className="text-[13px] leading-tight text-faint">{m.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
