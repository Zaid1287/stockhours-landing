/* Decorative candlestick + trend-line SVG. Pure presentation, no data. */
export function ChartArt({ className = "" }: { className?: string }) {
  const candles = [
    { x: 8, o: 70, c: 58, h: 74, l: 54, up: true },
    { x: 24, o: 62, c: 66, h: 70, l: 60, up: false },
    { x: 40, o: 66, c: 50, h: 68, l: 47, up: true },
    { x: 56, o: 52, c: 55, h: 60, l: 49, up: false },
    { x: 72, o: 55, c: 40, h: 58, l: 37, up: true },
    { x: 88, o: 42, c: 46, h: 50, l: 39, up: false },
    { x: 104, o: 46, c: 30, h: 49, l: 27, up: true },
    { x: 120, o: 32, c: 34, h: 40, l: 28, up: false },
    { x: 136, o: 34, c: 20, h: 37, l: 17, up: true },
  ];
  return (
    <svg
      viewBox="0 0 160 90"
      className={className}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#00e08a" stopOpacity="0.28" />
          <stop offset="1" stopColor="#00e08a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 66 L20 60 L40 63 L60 52 L80 47 L100 38 L120 33 L140 24 L160 18 L160 90 L0 90 Z"
        fill="url(#area)"
      />
      <path
        d="M0 66 L20 60 L40 63 L60 52 L80 47 L100 38 L120 33 L140 24 L160 18"
        stroke="#00e08a"
        strokeWidth="1.2"
        strokeOpacity="0.7"
      />
      {candles.map((k, i) => {
        const color = k.up ? "#00e08a" : "#ff5470";
        const top = Math.min(k.o, k.c);
        const bh = Math.max(2, Math.abs(k.o - k.c));
        return (
          <g key={i} stroke={color} strokeOpacity="0.5">
            <line x1={k.x} y1={k.h} x2={k.x} y2={k.l} strokeWidth="1" />
            <rect
              x={k.x - 3}
              y={top}
              width={6}
              height={bh}
              fill={color}
              fillOpacity="0.18"
              strokeWidth="1"
            />
          </g>
        );
      })}
    </svg>
  );
}
