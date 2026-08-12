type HtmlMainProps = {
  html: string;
};

/** Renders the original page <main> markup with paths rewritten for Next.js. */
export function HtmlMain({ html }: HtmlMainProps) {
  return (
    <main id="main" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
