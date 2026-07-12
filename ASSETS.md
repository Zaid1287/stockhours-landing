# Instagram assets — @nourtrades (WIRED)

Real @nourtrades screenshots are now cropped, optimized, and wired into every image
slot. Persona confirmed real: verified account, Nasdaq/moomoo bell, live trading desks.

## Pipeline
1. Raw phone screenshots (1290×2796 PNG) live in `public/nour/01.jpg`…`10.jpg`.
2. `node scripts/crop-nour.mjs` auto-detects the photo band (strips IG chrome:
   status bar, header, like/caption bar, mute/tag overlays), cover-crops to each slot's
   aspect with `attention` focus, and writes optimized JPEGs (~70–170 KB) to
   `public/nour/opt/`.
3. Components reference `/nour/opt/*.jpg`. Re-run the script anytime to regenerate.

## Slot → source map
| Slot (file in opt/) | Source | Shows | Ratio |
|---|---|---|---|
| `hero.jpg` | 01 | yellow hoodie, dual monitors — big visible face | 4:5 |
| `about.jpg` | 02 | living room, dual laptops, waterfront | 4:5 |
| `ig-recap.jpg` | 10 | standing, presenting to the room | 1:1 |
| `ig-plan.jpg` | 03 | pink hoodie at desk (labelled "the desk setup") | 1:1 |
| `ig-live.jpg` | 09 | back-at-desk, full trading room | 1:1 |
| `ig-win.jpg` | 04 | jet, counting money | 1:1 |
| `ig-nasdaq.jpg` | 06 | moomoo × Nasdaq podium — credibility tile | 1:1 |
| `ig-meetup.jpg` | 07 | group + white Lamborghini | 1:1 |

Wired in: `components/sections/Hero.tsx`, `About.tsx`, and `lib/content.ts` (`igSlots`,
consumed by `components/sections/Members.tsx`).

## Spare (not used, available in public/nour/)
- `05` Rolls-Royce / jet, purple shirt · `08` ballroom group

## To swap an image
Replace the source file (or point a slot at a different `NN.jpg` in `scripts/crop-nour.mjs`),
re-run the script. Per-image edge trims (`l/r/t/b`) in that script push any remaining IG
overlay controls out of frame.
