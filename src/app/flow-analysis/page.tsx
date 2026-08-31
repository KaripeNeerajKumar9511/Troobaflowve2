import { AssessmentForm, type AssessmentCopy } from "@/components/AssessmentForm";
import { SiteShell } from "@/components/SiteShell";
import { cmsMetadata } from "@/components/CmsHtmlPage";
import { getPage } from "@/lib/cms";

export const generateMetadata = () =>
  cmsMetadata(
    "flow-analysis",
    "https://trooba.com/flow-analysis",
    "https://trooba.com/flow-analysis",
  );

type Step = { title?: string; body?: string };

export default async function FlowAnalysisPage() {
  const page = await getPage("flow-analysis");
  const f = page.fields as Record<string, unknown>;
  const steps = (Array.isArray(f.steps) ? f.steps : []) as Step[];
  const copy = f as AssessmentCopy;

  return (
    <SiteShell>
      <main id="main">
        <section className="phead">
          <div className="wrap">
            <h1 className="section-title section-title--wide">
              {String(f.h1 || "Request a Flow Analysis")}
            </h1>
            <p className="lead">
              {String(
                f.lead ||
                  "We model one product family from data you already have, and show you where the queues form, what they cost in lead time, and which change moves them.",
              )}
            </p>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap">
            <div className="ba">
              <div className="ba__intro" data-form-intro>
                <h2 className="tr-label">
                  {String(f.nextHeading || "What happens Next..")}
                </h2>
                <dl className="u-mt6">
                  {steps.map((s) => (
                    <div className="fact" key={s.title}>
                      <dt>{s.title}</dt>
                      <dd>{s.body}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="ba__form">
                <AssessmentForm source="flow-analysis" copy={copy} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
