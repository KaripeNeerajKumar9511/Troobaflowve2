import { ContactForm, type ContactCopy } from "@/components/ContactForm";
import { SiteShell } from "@/components/SiteShell";
import { cmsMetadata } from "@/components/CmsHtmlPage";
import { getPage } from "@/lib/cms";

export const generateMetadata = () =>
  cmsMetadata(
    "contact",
    "https://trooba.com/contact",
    "https://trooba.com/contact",
  );

type Step = { title?: string; body?: string };

export default async function ContactPage() {
  const page = await getPage("contact");
  const f = page.fields as Record<string, unknown>;
  const steps = (Array.isArray(f.steps) ? f.steps : []) as Step[];
  const copy = f as ContactCopy;

  return (
    <SiteShell>
      <main id="main">
        <section className="phead">
          <div className="wrap">
            <p className="tr-label">
              {String(f.label || "Trooba Flow™ Factory Flow Assessment")}
            </p>
            <h1 className="section-title section-title--wide u-mt4">
              {String(f.h1 || "We're selective. Intentionally.")}
            </h1>
            <p className="lead">
              {String(
                f.lead ||
                  "We run a structured pilot with manufacturers who have complex operations and a genuine appetite to understand their system.",
              )}
            </p>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap">
            <div className="ba">
              <div className="ba__intro">
                <h2 className="tr-label">
                  {String(f.nextHeading || "What happens next")}
                </h2>
                <dl className="u-mt6">
                  {(steps.length
                    ? steps
                    : [
                        {
                          title: "1  Review",
                          body: "We review your submission within 2 business days.",
                        },
                        {
                          title: "2  Fit call",
                          body: "If there's a fit: a 60-minute call about your operation.",
                        },
                        {
                          title: "3  Walkthrough",
                          body: "We walk through a Trooba Flow analysis using your factory context.",
                        },
                      ]
                  ).map((s) => (
                    <div className="fact" key={s.title}>
                      <dt>{s.title}</dt>
                      <dd>{s.body}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="ba__form">
                <ContactForm copy={copy} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
