import { features } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ChartArt } from "@/components/ui/ChartArt";

const spans = [
  "md:col-span-3 md:row-span-2",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
];

type Feature = (typeof features)[number];

export function Features() {
  return (
    <section id="inside" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Inside the room"
          title={
            <>
              Everything you get the
              <br className="hidden sm:block" /> moment you join.
            </>
          }
          sub="One membership, one Discord. Every tool a self-directed trader actually needs to work the open."
        />

        <div className="mt-14 grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 md:grid-cols-6">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 0.06}
              className={`group ${spans[i]}`}
            >
              <FeatureCard f={f} tall={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ f, tall }: { f: Feature; tall: boolean }) {
  return (
    <div className="bezel h-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-1">
      <div className="bezel-core flex h-full flex-col gap-4 p-6">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-up/12 text-up ring-1 ring-up/25">
          <Icon name={f.icon as "bolt"} size={20} />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
            {f.title}
          </h3>
          <p className="text-[15px] leading-relaxed text-muted">{f.body}</p>
        </div>

        {tall && (
          <div className="mt-auto space-y-2 rounded-xl border border-hairline bg-black/30 p-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-up">● TSLA long 248.10</span>
              <span className="font-mono text-up">+1.8%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-down">● SPY put closed</span>
              <span className="font-mono text-down">−0.4%</span>
            </div>
            <ChartArt className="h-14 w-full opacity-80" />
          </div>
        )}
      </div>
    </div>
  );
}
