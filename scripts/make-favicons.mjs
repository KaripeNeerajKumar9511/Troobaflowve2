import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";
import pngToIco from "png-to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "public/favicon.svg"));

function render(size) {
  return new Resvg(svg, {
    fitTo: { mode: "width", value: size },
    background: "rgba(0,0,0,0)",
  })
    .render()
    .asPng();
}

const png48 = render(48);
const png96 = render(96);
const png180 = render(180);
const png192 = render(192);
const png512 = render(512);

writeFileSync(join(root, "public/favicon-48x48.png"), png48);
writeFileSync(join(root, "public/favicon-96x96.png"), png96);
writeFileSync(join(root, "public/apple-touch-icon.png"), png180);
writeFileSync(join(root, "public/icon-192.png"), png192);
writeFileSync(join(root, "public/icon-512.png"), png512);

const ico = await pngToIco([render(32), render(48), render(64)]);
writeFileSync(join(root, "public/favicon.ico"), ico);

console.log("Wrote favicon.ico from favicon.svg (32/48/64) plus PNG 48/96/180/192/512");
