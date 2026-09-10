import { Suspense } from "react";
import { SiteShell } from "@/components/SiteShell";
import { UnsubscribeClient } from "./UnsubscribeClient";

export const metadata = {
  title: "Unsubscribe | Trooba Flow Insights",
  robots: { index: false, follow: false },
};

export default function UnsubscribePage() {
  return (
    <SiteShell>
      <main id="main">
        <Suspense
          fallback={
            <section className="phead">
              <div className="wrap">
                <p className="lead">Unsubscribing you from Trooba Flow Insights…</p>
              </div>
            </section>
          }
        >
          <UnsubscribeClient />
        </Suspense>
      </main>
    </SiteShell>
  );
}
