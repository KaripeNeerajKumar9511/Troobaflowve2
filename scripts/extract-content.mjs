/**
 * OPTIONAL one-shot importer from ../trooba-site.
 *
 * Troobaflowsite/src/content + src/styles are the source of truth now.
 * Do NOT run this unless you intentionally want to overwrite Next.js content
 * from the static HTML site. Prefer editing files under Troobaflowsite only.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const FORCE = process.argv.includes("--force");

if (!FORCE) {
  console.error(
    "Refusing to overwrite Troobaflowsite content from trooba-site.\n" +
      "Edit files under Troobaflowsite/ only.\n" +
      "If you really need a re-import, run: node scripts/extract-content.mjs --force",
  );
  process.exit(1);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const sourceDir = path.resolve(root, "..", "trooba-site");
const outDir = path.resolve(root, "src", "content");

const pages = [
  { file: "index.html", key: "home" },
  { file: "how-it-works.html", key: "howItWorks" },
  { file: "proof.html", key: "proof" },
  { file: "about.html", key: "about" },
  { file: "flow-analysis.html", key: "flowAnalysis" },
  { file: "privacy.html", key: "privacy" },
  { file: "terms.html", key: "terms" },
];

const linkMap = [
  [/href="index\.html"/g, 'href="/"'],
  [/href="how-it-works\.html"/g, 'href="/how-it-works"'],
  [/href="proof\.html"/g, 'href="/proof"'],
  [/href="about\.html"/g, 'href="/about"'],
  [/href="flow-analysis\.html"/g, 'href="/flow-analysis"'],
  [/href="privacy\.html"/g, 'href="/privacy"'],
  [/href="terms\.html"/g, 'href="/terms"'],
  [/href="product\.html"/g, 'href="/"'],
  [/src="assets\//g, 'src="/assets/'],
  [/href="assets\//g, 'href="/assets/'],
];

function rewrite(html) {
  let out = html;
  for (const [re, rep] of linkMap) out = out.replace(re, rep);
  return out;
}

function extractMain(html) {
  const start = html.indexOf("<main");
  const end = html.indexOf("</main>");
  if (start === -1 || end === -1) {
    throw new Error("Could not find <main> in source HTML");
  }
  const openEnd = html.indexOf(">", start);
  return html.slice(openEnd + 1, end).trim();
}

function extractMeta(html) {
  const title = (html.match(/<title>([^<]*)<\/title>/) || [, ""])[1];
  const description = (html.match(/name="description" content="([^"]*)"/) || [, ""])[1];
  const canonical = (html.match(/rel="canonical" href="([^"]*)"/) || [, ""])[1];
  const ogTitle = (html.match(/property="og:title" content="([^"]*)"/) || [, title])[1];
  const ogDescription = (html.match(/property="og:description" content="([^"]*)"/) || [, description])[1];
  const ogUrl = (html.match(/property="og:url" content="([^"]*)"/) || [, canonical])[1];
  return { title, description, canonical, ogTitle, ogDescription, ogUrl };
}

fs.mkdirSync(outDir, { recursive: true });

const exports = [];

for (const page of pages) {
  const raw = fs.readFileSync(path.join(sourceDir, page.file), "utf8");
  const meta = extractMeta(raw);
  const main = rewrite(extractMain(raw));
  const fileName = `${page.key}.ts`;
  const content = `/* Owned by Troobaflowsite — edit this file directly. */
export const meta = ${JSON.stringify(meta, null, 2)} as const;

export const mainHtml = ${JSON.stringify(main)};
`;
  fs.writeFileSync(path.join(outDir, fileName), content);
  exports.push(`export * as ${page.key} from "./${page.key}";`);
  console.log(`wrote ${fileName} (${main.length} chars)`);
}

fs.writeFileSync(path.join(outDir, "index.ts"), exports.join("\n") + "\n");
console.log("done");
