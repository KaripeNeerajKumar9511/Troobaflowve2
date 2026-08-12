import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SiteShell } from "@/components/SiteShell";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Trooba Flow",
  description:
    "Contact Trooba Flow. Tell us what is going wrong in your factory and we will follow up.",
  canonical: "https://www.trooba.com/contact",
  ogTitle: "Contact | Trooba Flow",
  ogDescription:
    "Contact Trooba Flow. Tell us what is going wrong in your factory and we will follow up.",
  ogUrl: "https://www.trooba.com/contact",
});

export default function ContactPage() {
  return (
    <SiteShell>
      <main id="main">
        <section className="phead">
          <div className="wrap">
            <p className="tr-label">Trooba Flow™ Factory Flow Assessment</p>
            <h1 className="section-title section-title--wide u-mt4">
              We&apos;re selective. Intentionally.
            </h1>
            <p className="lead">
              We run a structured pilot with manufacturers who have complex
              operations and a genuine appetite to understand their system.
            </p>
          </div>
        </section>

        <section className="section--tight">
          <div className="wrap">
            <div className="ba">
              <div className="ba__intro">
                <h2 className="tr-label">What happens next</h2>
                <dl className="u-mt6">
                  <div className="fact">
                    <dt>1&nbsp;&nbsp;Review</dt>
                    <dd>
                      We review your submission within 2 business days.
                    </dd>
                  </div>
                  <div className="fact">
                    <dt>2&nbsp;&nbsp;Fit call</dt>
                    <dd>
                      If there&apos;s a fit: a 60-minute call about your
                      operation.
                    </dd>
                  </div>
                  <div className="fact">
                    <dt>3&nbsp;&nbsp;Walkthrough</dt>
                    <dd>
                      We walk through a Trooba Flow analysis using your factory
                      context.
                    </dd>
                  </div>
                </dl>
                {/* <p className="tr-label"> For Flow Analysis requests, please email:</p> <a href="mailto:flow@trooba.com">flow@trooba.com</a> */}
              </div>

              <div className="ba__form">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
