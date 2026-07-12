import Image from "next/image";
import { ChartArt } from "./ChartArt";

/*
 * Reusable "replace-me" media slot. The ONLY placeholder component on the page.
 * Drop a real Instagram screenshot into /public and pass `src` to swap it in —
 * no layout change needed. Until then it shows a labeled, on-brand placeholder.
 */
export function ImageSlot({
  label,
  src,
  alt,
  className = "",
  chart = false,
}: {
  label: string;
  src?: string;
  alt?: string;
  className?: string;
  chart?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: "linear-gradient(160deg,#0e1116,#070809)" }}
    >
      {src ? (
        <Image src={src.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}` : src} alt={alt ?? label} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
      ) : (
        <>
          {chart && (
            <ChartArt className="absolute inset-x-0 bottom-0 h-2/3 w-full opacity-40" />
          )}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-muted">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="3.6" />
                <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
              </svg>
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              {label}
            </span>
            <span className="text-[10px] text-faint">drop screenshot here</span>
          </div>
        </>
      )}
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/5" />
    </div>
  );
}
