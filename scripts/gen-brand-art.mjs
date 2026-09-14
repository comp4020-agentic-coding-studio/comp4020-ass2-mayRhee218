// One-off generator for the two generic brand images (homepage hero, social
// card). Not part of the build; run once with `node scripts/gen-brand-art.mjs`
// and delete afterwards.
import sharp from "sharp";

const GOLD = "#b97d1c";
const BRONZE = "#8a5c13";
const INK = "#211a12";
const CREAM = "#f6efe0";

// A single smooth rounded hill: one cubic bezier per side, control points
// pulled straight up so the silhouette reads as a soft dome rather than a
// pointed peak — the layered-mountain motif from Korean court painting
// (irworobongdo), flattened to two inks.
function hill(xCenter, halfWidth, peakHeight, baseline, floor) {
  const left = xCenter - halfWidth;
  const right = xCenter + halfWidth;
  const liftY = baseline - peakHeight * 1.33;
  return (
    `M ${left} ${floor} L ${left} ${baseline} ` +
    `C ${left} ${liftY} ${right} ${liftY} ${right} ${baseline} ` +
    `L ${right} ${floor} Z`
  );
}

function hillRow(hills) {
  return hills.map((h) => hill(h.x, h.w / 2, h.height, h.baseline, h.floor)).join(" ");
}

function heroSvg() {
  const w = 2400;
  const h = 1350;
  const floor = h;
  const back = hillRow([
    { x: 60, w: 780, height: 260, baseline: 980 },
    { x: 640, w: 900, height: 340, baseline: 940 },
    { x: 1360, w: 900, height: 340, baseline: 940 },
    { x: 2060, w: 780, height: 260, baseline: 980 },
  ].map((d) => ({ ...d, floor })));
  const front = hillRow([
    { x: -80, w: 820, height: 300, baseline: 1120 },
    { x: 560, w: 760, height: 420, baseline: 1060 },
    { x: 1200, w: 820, height: 520, baseline: 1040 },
    { x: 1880, w: 760, height: 420, baseline: 1060 },
    { x: 2480, w: 820, height: 300, baseline: 1120 },
  ].map((d) => ({ ...d, floor })));
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${CREAM}"/>
  <circle cx="1200" cy="420" r="300" fill="${GOLD}"/>
  <path d="${back}" fill="${BRONZE}"/>
  <path d="${front}" fill="${INK}"/>
</svg>`;
}

function cardSvg() {
  const w = 1200;
  const h = 630;
  const floor = h;
  const back = hillRow([
    { x: 40, w: 420, height: 130, baseline: 440 },
    { x: 340, w: 480, height: 180, baseline: 420 },
    { x: 720, w: 480, height: 180, baseline: 420 },
    { x: 1080, w: 420, height: 130, baseline: 440 },
  ].map((d) => ({ ...d, floor })));
  const front = hillRow([
    { x: -40, w: 440, height: 160, baseline: 500 },
    { x: 300, w: 400, height: 220, baseline: 470 },
    { x: 600, w: 440, height: 270, baseline: 460 },
    { x: 900, w: 400, height: 220, baseline: 470 },
    { x: 1240, w: 440, height: 160, baseline: 500 },
  ].map((d) => ({ ...d, floor })));
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${CREAM}"/>
  <circle cx="600" cy="200" r="150" fill="${GOLD}"/>
  <path d="${back}" fill="${BRONZE}"/>
  <path d="${front}" fill="${INK}"/>
</svg>`;
}

await sharp(Buffer.from(heroSvg()))
  .webp({ quality: 90 })
  .toFile("src/assets/images/hero-home.webp");

await sharp(Buffer.from(cardSvg())).png().toFile("src/assets/images/card.png");

console.log("wrote hero-home.webp and card.png");
