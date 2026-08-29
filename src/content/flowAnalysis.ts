/* Owned by Troobaflowsite — edit this file directly. */
export const meta = {
  title: "Request a Flow Analysis | Trooba Flow",
  description:
    "Request a Trooba Flow Analysis to identify production bottlenecks, uncover costly queues, understand lead-time delays, and find the changes that can improve factory flow.",
  canonical: "https://trooba.com/flow-analysis.html",
  ogTitle: "Request a Flow Analysis | Trooba Flow",
  ogDescription:
    "Request a Trooba Flow Analysis to identify production bottlenecks, uncover costly queues, understand lead-time delays, and find the changes that can improve factory flow.",
  ogUrl: "https://trooba.com/flow-analysis.html",
} as const;

export const mainHtml = `<section class="phead"><div class="wrap">
  <h1 class="section-title section-title--wide">Request a Flow Analysis</h1>
  <p class="lead">We model one product family from data you already have, and show you where the queues form,
    what they cost in lead time, and which change moves them.</p>
</div></section>

<section class="section--tight"><div class="wrap">
  <div class="ba">
    <div data-form-intro>
      <h2 class="tr-label">What happens</h2>
      <dl class="u-mt6">
        <div class="fact"><dt>1 &nbsp;What we need</dt><dd>Routings and operation times for one product
          family, the resources those operations run on, shift patterns, and a recent demand mix. An ERP
          export is usually enough to start.</dd></div>
        <div class="fact"><dt>2 &nbsp;What we do</dt><dd>Build the model, solve it forward, and identify the
          resources heading toward constraint conditions, the queue time each is accumulating, and how lead
          time decomposes across the routing.</dd></div>
        <div class="fact"><dt>3 &nbsp;What you get</dt><dd>A written finding, the model behind it, and two or
          three scenarios tested against it &mdash; including at least one that does not involve adding
          capacity.</dd></div>
        <div class="fact"><dt>4 &nbsp;What happens next</dt><dd>A working session to go through the model with
          your engineers. If it does not tell you something you did not already know, we will say so.</dd></div>
      </dl>
    </div>

    <div>
      <form class="form panel" data-flow-form novalidate method="post"
            action="/api/contact">
        <h2 class="h3" style="margin-bottom:var(--space-2)">Send the details</h2>
        <p class="meta">Five fields. We will ask for the data itself after we have replied.</p>

        <div class="two-up">
          <div class="field">
            <label for="f-name">Name</label>
            <input id="f-name" name="name" type="text" autocomplete="name" required
                   aria-describedby="e-name"><p class="err" id="e-name" hidden></p>
          </div>
          <div class="field">
            <label for="f-email">Work email</label>
            <input id="f-email" name="email" type="email" autocomplete="email" required
                   aria-describedby="e-email"><p class="err" id="e-email" hidden></p>
          </div>
        </div>
        <div class="field">
          <label for="f-co">Company</label>
          <input id="f-co" name="company" type="text" autocomplete="organization" required
                 aria-describedby="e-co"><p class="err" id="e-co" hidden></p>
        </div>
        <div class="field">
          <label for="f-role">Role <span class="u-tert">(optional)</span></label>
          <input id="f-role" name="role" type="text" placeholder="Plant manager, operations, engineering">
        </div>
        <div class="field">
          <label for="f-problem">What is going wrong</label>
          <textarea id="f-problem" name="problem" required aria-describedby="h-problem e-problem"
            placeholder="Late orders on a particular family, lead time that will not come down, a capacity decision you are about to make."></textarea>
          <p class="hint" id="h-problem">Plain description is fine. We would rather have the symptom than a diagnosis.</p>
          <p class="err" id="e-problem" hidden></p>
        </div>

        <p class="form__error" data-form-error hidden role="alert"></p>
        <button class="btn btn--primary btn--lg" data-primary-cta data-form-submit type="submit"
                style="width:100%">Request a Flow Analysis</button>
        <p class="meta">We use this to reply to you and for nothing else. See the
          <a href="/privacy">privacy notice</a>.</p>
      </form>

      <div class="panel form-success" data-form-done hidden tabindex="-1">
        <div class="form-success__mark" aria-hidden="true">
          <svg class="form-success__svg" viewBox="0 0 52 52">
            <circle class="form-success__circle" cx="26" cy="26" r="24"></circle>
            <path class="form-success__check" d="M15.5 27.2 L23.2 34.5 L36.8 18.5"></path>
          </svg>
        </div>
        <h2 class="h3">Request received.</h2>
        <p class="body u-mt4 form-success__copy">Thanks for filling out the form. Our team will personally review your submission and carefully assess the details you&rsquo;ve shared. We&rsquo;ll be in touch shortly with the next steps.</p>
      </div>
    </div>
  </div>
</div></section>`;
