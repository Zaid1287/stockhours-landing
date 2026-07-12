import { steps } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Method() {
  return (
    <section id="method" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How it works"
          title="From link to live trade in four steps."
          sub="No onboarding maze. You're following real calls the same morning you join."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative flex h-full flex-col gap-4 rounded-[1.6rem] border border-hairline bg-white/[0.02] p-6">
                <span className="font-mono text-sm text-up">{s.n}</span>
                <span className="h-px w-full bg-gradient-to-r from-up/40 to-transparent" />
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
