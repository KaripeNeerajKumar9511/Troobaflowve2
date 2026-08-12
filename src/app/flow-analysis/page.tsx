import type { Metadata } from "next";
import { AssessmentForm } from "@/components/AssessmentForm";
import { SiteShell } from "@/components/SiteShell";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a Flow Analysis | Trooba Flow",
  description:
    "Request a Trooba Flow Analysis to identify production bottlenecks, uncover costly queues, understand lead-time delays, and find the changes that can improve factory flow.",
  canonical: "https://www.trooba.com/flow-analysis",
  ogTitle: "Request a Flow Analysis | Trooba Flow",
  ogDescription:
    "Request a Trooba Flow Analysis to identify production bottlenecks, uncover costly queues, understand lead-time delays, and find the changes that can improve factory flow.",
  ogUrl: "https://www.trooba.com/flow-analysis",
});

export default function FlowAnalysisPage() {
  return (
    <SiteShell>
      <main id="main">
        <section className="phead">
          <div className="wrap">
            <h1 className="section-title section-title--wide">
              Request a Flow Analysis
            </h1>
            <p className="lead">
              We model one product family from data you already have, and show
              you where the queues form, what they cost in lead time, and which
              change moves them.
            </p>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap">
            <div className="ba">
              <div className="ba__intro" data-form-intro>
                <h2 className="tr-label">What happens Next..</h2>
                <dl className="u-mt6">
                  <div className="fact">
                    <dt>1&nbsp;&nbsp;Submit your details</dt>
                    <dd>
                     Tell us about your company, production environment, current challenges, and priorities. The form helps us understand your operation before we reach out.
                    </dd>
                  </div>
                  <div className="fact">
                    <dt>2&nbsp;&nbsp;We review your operation</dt>
                    <dd>
                    Our team reviews your responses to understand your production environment, operational challenges, and the information available to get started.
                    </dd>
                  </div>
                  <div className="fact">
                    <dt>3&nbsp;&nbsp;We follow up</dt>
                    <dd>
                    We’ll reach out to confirm a few details, answer any questions, and understand what you want to investigate first.
                    </dd>
                  </div>
                  <div className="fact">
                    <dt>4&nbsp;&nbsp;We start the analysis</dt>
                    <dd>
                    Once we have what we need, we’ll use your production information to build the initial model and identify where the biggest opportunities or constraints may be.
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="ba__form">
                <AssessmentForm source="flow-analysis" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
