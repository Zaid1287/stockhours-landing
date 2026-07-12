import { finalCta, brand } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Cta } from "@/components/ui/Cta";
import { ChartArt } from "@/components/ui/ChartArt";

export function FinalCta() {
  return (
    <section id="join" className="px-4 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-5xl">
        <div className="bezel overflow-hidden shadow-[0_60px_160px_-50px_rgba(0,224,138,0.5)]">
          <div className="bezel-core relative overflow-hidden px-6 py-16 text-center sm:px-16 sm:py-24">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(40rem 22rem at 50% 120%, rgba(0,224,138,0.22), transparent 60%)",
              }}
            />
            <ChartArt className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-25" />
            <div className="relative flex flex-col items-center gap-6">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-up shadow-[0_0_10px_2px_rgba(0,224,138,0.7)]" />
                Next bell is coming
              </span>
              <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                {finalCta.title}
              </h2>
              <p className="max-w-xl text-lg text-muted">{finalCta.sub}</p>
              <div className="mt-2">
                <Cta href={brand.discordUrl}>{finalCta.cta}</Cta>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
