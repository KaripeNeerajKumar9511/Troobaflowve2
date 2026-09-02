const SVG = (d: string) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;

const ICONS: Record<string, string> = {
  queue: SVG(
    `<circle cx="12" cy="12" r="8.25"/><path d="M12 8.5 V12 L15 14"/>`,
  ),
  stack: SVG(
    `<path d="M4 8.5 L12 5 L20 8.5 L12 12 Z"/><path d="M4 12.5 L12 16 L20 12.5"/><path d="M4 16.5 L12 20 L20 16.5"/>`,
  ),
  move: SVG(
    `<rect x="3.5" y="8" width="12" height="8" rx="1"/><path d="M15.5 11 H20 L21.5 13.5 V16 H15.5"/><circle cx="7" cy="17.5" r="1.4"/><circle cx="17.5" cy="17.5" r="1.4"/>`,
  ),
  decision: SVG(
    `<path d="M7 4.5 H14 L19 9.5 V19.5 H7 Z"/><path d="M14 4.5 V9.5 H19"/><path d="M9.5 13 H16.5 M9.5 16 H14"/>`,
  ),
  rework: SVG(
    `<path d="M4.5 12 A7.5 7.5 0 1 0 8 6.2"/><path d="M4.5 6.5 V12 H10"/>`,
  ),
  gauge: SVG(
    `<path d="M5 16 A8 8 0 1 1 19 16"/><path d="M12 16 L16 11"/><circle cx="12" cy="16" r="1.2" fill="currentColor" stroke="none"/>`,
  ),
  wip: SVG(
    `<rect x="4" y="6" width="16" height="4" rx="0.5"/><rect x="4" y="12" width="16" height="4" rx="0.5"/><rect x="4" y="18" width="10" height="3" rx="0.5"/>`,
  ),
  calendar: SVG(
    `<rect x="4" y="6" width="16" height="14" rx="1.5"/><path d="M8 4.5 V7.5 M16 4.5 V7.5 M4 10 H20"/>`,
  ),
  package: SVG(
    `<path d="M4 8 L12 4 L20 8 V18 L12 22 L4 18 Z"/><path d="M12 12 V22 M4 8 L12 12 L20 8"/>`,
  ),
  route: SVG(
    `<circle cx="5.5" cy="6" r="2"/><circle cx="18.5" cy="18" r="2"/><path d="M7.5 7.2 C12 8 12 16 16.5 16.8"/>`,
  ),
  search: SVG(
    `<circle cx="11" cy="11" r="6"/><path d="M15.5 15.5 L20 20"/>`,
  ),
  flag: SVG(
    `<path d="M6 4 V20"/><path d="M6 5 H17 L14.5 8.5 L17 12 H6"/>`,
  ),
  back: SVG(
    `<path d="M9 7 L4.5 12 L9 17"/><path d="M4.5 12 H16 A4 4 0 0 1 16 20"/>`,
  ),
  adjust: SVG(
    `<path d="M4 8 H20 M4 16 H20"/><circle cx="9" cy="8" r="2.2"/><circle cx="15" cy="16" r="2.2"/>`,
  ),
  clock: SVG(
    `<circle cx="12" cy="12" r="8.25"/><path d="M12 8 V12 L15 14"/>`,
  ),
  chart: SVG(
    `<path d="M4 19 H20"/><path d="M7 16 V19 M12 11 V19 M17 7 V19"/>`,
  ),
  ruler: SVG(
    `<path d="M4 10 H20 V14 H4 Z"/><path d="M8 10 V13 M12 10 V12.5 M16 10 V13"/>`,
  ),
  wave: SVG(
    `<path d="M3.5 14 C6 8 9 20 12 14 C15 8 18 20 20.5 14"/>`,
  ),
  boxes: SVG(
    `<rect x="3.5" y="3.5" width="8" height="8" rx="1"/><rect x="12.5" y="12.5" width="8" height="8" rx="1"/><path d="M8 12.5 V16.5 H12"/>`,
  ),
  target: SVG(
    `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>`,
  ),
  flask: SVG(
    `<path d="M9 4 H15 M10 4 V9 L6.5 18 A5 5 0 0 0 17.5 18 L14 9 V4"/>`,
  ),
  typical: SVG(
    `<path d="M4 16 L8 10 L12 13 L16 7 L20 11"/><path d="M4 19 H20"/>`,
  ),
};

function pickIcon(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("batch")) return ICONS.stack;
  if (t.includes("move")) return ICONS.move;
  if (t.includes("decision") || t.includes("approval")) return ICONS.decision;
  if (t.includes("rework") || t.includes("expedit")) return ICONS.rework;
  if (t.includes("utili")) return ICONS.gauge;
  if (t.includes("work in process") || t.includes("wip")) return ICONS.wip;
  if (t.includes("lead time")) return ICONS.calendar;
  if (t.includes("queue")) return ICONS.queue;
  if (t.includes("calendar")) return ICONS.calendar;
  if (t.includes("first piece")) return ICONS.package;
  if (t.includes("critical path")) return ICONS.route;
  if (t.includes("typical") && t.includes("job")) return ICONS.adjust;
  if (t.includes("typical")) return ICONS.typical;
  if (t.includes("family") || t.includes("pick")) return ICONS.search;
  if (t.includes("start and end") || t.includes("fix start")) return ICONS.flag;
  if (t.includes("backwards")) return ICONS.back;
  if (t.includes("touch time") || t.includes("record")) return ICONS.clock;
  if (t.includes("map") || t.includes("draw")) return ICONS.chart;
  if (t.includes("measure")) return ICONS.ruler;
  if (t.includes("85%") || t.includes("find")) return ICONS.search;
  if (t.includes("variab")) return ICONS.wave;
  if (t.includes("batch") || t.includes("transfer") || t.includes("cut"))
    return ICONS.boxes;
  if (t.includes("target") || t.includes("defend")) return ICONS.target;
  if (t.includes("test") || t.includes("model") || t.includes("change"))
    return ICONS.flask;
  if (t.includes("release") || t.includes("earlier")) return ICONS.flag;
  if (t.includes("safety") || t.includes("buffer")) return ICONS.ruler;
  if (t.includes("busy") || t.includes("machine")) return ICONS.gauge;
  if (t.includes("priorit")) return ICONS.decision;
  if (t.includes("elapsed") || t.includes("timing")) return ICONS.calendar;
  if (t.includes("routing") || t.includes("map the")) return ICONS.route;
  if (t.includes("pair") || t.includes("variability")) return ICONS.wave;
  if (t.includes("examine") || t.includes("queue decision")) return ICONS.search;
  if (t.includes("system level") || t.includes("spiral")) return ICONS.rework;
  if (t.includes("throughput")) return ICONS.chart;
  if (t.includes("rearrangement")) return ICONS.adjust;
  if (t.includes("where work waits") || t.includes("wait")) return ICONS.queue;
  if (t.includes("which resource")) return ICONS.search;
  if (t.includes("arrival") || t.includes("process var")) return ICONS.wave;
  return ICONS.chart;
}

function slugId(label: string, used: Set<string>): string {
  const base =
    label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "section";
  let id = base;
  let n = 2;
  while (used.has(id)) id = `${base}-${n++}`;
  used.add(id);
  return id;
}

export function prepareBlogHtml(html: string): string {
  const used = new Set<string>();
  const withIds = html.replace(
    /<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi,
    (_full, attrs: string, inner: string) => {
      const existing = attrs.match(/\bid=["']([^"']+)["']/i);
      const label = inner.replace(/<[^>]+>/g, "").trim();
      if (existing) {
        used.add(existing[1]);
        return `<h2${attrs}>${inner}</h2>`;
      }
      const id = slugId(label, used);
      return `<h2${attrs} id="${id}">${inner}</h2>`;
    },
  );
  const withIcons = withIds.replace(
    /<div class="blog-icon"[^>]*>([\s\S]*?)<\/div>/g,
    (_full, inner: string) => {
      const h5 = inner.match(/<h5>([\s\S]*?)<\/h5>/i);
      const title = (h5?.[1] || "").replace(/<[^>]+>/g, "").trim();
      const svg = pickIcon(title);
      const mark = `<span class="blog-icon__mark" aria-hidden="true">${svg}</span>`;
      const next = /blog-icon__mark/.test(inner)
        ? inner.replace(
            /<span class="blog-icon__mark"[^>]*>[\s\S]*?<\/span>/,
            mark,
          )
        : mark + inner;
      return `<div class="blog-icon">${next}</div>`;
    },
  );
  return withIcons.replace(
    /<table class="tbl blog-table"[\s\S]*?<\/table>/gi,
    (table) =>
      table.includes("tbl-scroll")
        ? table
        : `<div class="tbl-scroll blog-table-scroll">${table}</div>`,
  );
}

export function tocFromHtml(html: string): { id: string; label: string }[] {
  const items: { id: string; label: string }[] = [];
  const re = /<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html))) {
    const attrs = match[1] || "";
    const label = match[2].replace(/<[^>]+>/g, "").trim();
    const idMatch = attrs.match(/\bid=["']([^"']+)["']/i);
    if (label && idMatch?.[1]) items.push({ id: idMatch[1], label });
  }
  return items;
}
