import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const SRC = fileURLToPath(new URL("../public/nour/", import.meta.url));
const OUT = fileURLToPath(new URL("../public/nour/opt/", import.meta.url));
mkdirSync(OUT, { recursive: true });

// slot, src, ratio. The photo's vertical position varies per screenshot (location
// row, carousel dots, a previous post's caption scrolled in), so we DETECT the photo
// band instead of hardcoding: IG dark chrome = near-black low-variance rows; the photo
// is the tallest contiguous run of high-variance (textured) rows. Then cover-crop to
// the slot ratio with sharp "attention" so the subject/face survives.
// 5th arg = edge trims (fraction of the detected band) to push IG overlay controls
// (mute pill, tag icon) that sit ON the photo out of frame. l/r/t/b.
const JOBS = [
  ["hero",      "01.jpg", "4:5"],                 // yellow hoodie, dual monitors — big visible face
  ["about",     "02.jpg", "4:5"],                 // living room, laptops, skyline
  ["ig-nasdaq", "06.jpg", "1:1", { b: 0.06 }],    // podium — trim mute icon bottom-right
  ["ig-recap",  "10.jpg", "1:1"],                 // standing, presenting to room
  ["ig-live",   "09.jpg", "1:1", { l: 0.15, r: 0.03 }], // back-at-desk — trim mute pill + right sliver
  ["ig-win",    "04.jpg", "1:1"],                 // jet, counting money
  ["ig-plan",   "03.jpg", "1:1", { b: 0.1 }],     // pink hoodie — trim tag icon bottom-left
  ["ig-meetup", "07.jpg", "1:1"],                 // group + white Lambo
];
const DIM = { "4:5": [1200, 1500], "1:1": [1080, 1080] };

// Detect [top,bottom] of the photo. IG dark-mode chrome rows are DARK AND FLAT
// (low mean luminance + low std). A photo row is anything else — including flat but
// bright walls/ceilings (high mean) and dark trading screens (low mean, high std from
// candles). Longest contiguous non-chrome run = the photo.
async function detectBand(inPath, fullH) {
  const W = 48;
  const H = 466; // ~1/6 of 2796; each detect-row = 6 full px
  const { data } = await sharp(inPath)
    .resize(W, H, { fit: "fill" })
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const chrome = new Array(H);
  for (let y = 0; y < H; y++) {
    let s = 0, s2 = 0;
    for (let x = 0; x < W; x++) { const v = data[y * W + x]; s += v; s2 += v * v; }
    const m = s / W;
    const sd = Math.sqrt(Math.max(0, s2 / W - m * m));
    chrome[y] = m < 32 && sd < 34; // dark & flat -> UI, not photo
  }
  let best = [0, 0], cur = -1;
  for (let y = 0; y <= H; y++) {
    const on = y < H && !chrome[y];
    if (on && cur < 0) cur = y;
    if (!on && cur >= 0) { if (y - cur > best[1] - best[0]) best = [cur, y]; cur = -1; }
  }
  const scale = fullH / H;
  const inset = 2; // drop the thin transition rows at the seams
  return [Math.round((best[0] + inset) * scale), Math.round((best[1] - inset) * scale)];
}

for (const [slot, file, ratio, ins = {}] of JOBS) {
  const [rw, rh] = DIM[ratio];
  const inPath = join(SRC, file);
  const meta = await sharp(inPath).metadata();
  const [top, bot] = await detectBand(inPath, meta.height);
  const bandH = Math.min(bot - top, meta.height - top);
  const left = Math.round(meta.width * (ins.l ?? 0));
  const t = Math.round(bandH * (ins.t ?? 0));
  const width = meta.width - left - Math.round(meta.width * (ins.r ?? 0));
  const height = bandH - t - Math.round(bandH * (ins.b ?? 0));
  await sharp(inPath)
    .extract({ left, top: top + t, width, height })
    .resize(rw, rh, { fit: "cover", position: sharp.strategy.attention })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(join(OUT, `${slot}.jpg`));
  console.log(`${slot}.jpg <- ${file}  band ${top}..${bot} trim${JSON.stringify(ins)} -> ${rw}x${rh}`);
}
console.log("done");
