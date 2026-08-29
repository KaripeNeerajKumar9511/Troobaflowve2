/* Owned by Troobaflowsite — edit this file directly. */
export const meta = {
  title: "Case Studies — a measured manufacturing lead-time reduction | Trooba Flow",
  description:
    "Factory flow case studies: a completed transformation that cut manufacturing lead time from 28 days to 7, and an in-progress design-partner model validation.",
  canonical: "https://trooba.com/proof.html",
  ogTitle: "Case Studies — a measured manufacturing lead-time reduction | Trooba Flow",
  ogDescription:
    "Factory flow case studies: a completed transformation that cut manufacturing lead time from 28 days to 7, and an in-progress design-partner model validation.",
  ogUrl: "https://trooba.com/proof.html",
} as const;

export const mainHtml = `<section class="phead"><div class="wrap">
  <h1 class="section-title section-title--wide">Proven on the factory floor.</h1>
  <p class="lead">One completed transformation with measured results, and one design-partner model
    still being validated. We say which is which.</p>

  <div class="cases-index">
    <a class="cases-card" href="#case-01">
      <div class="cases-card__copy">
        <p class="cases-card__meta">
          <span class="cases-card__badge">Case 01</span>
          <span class="cases-card__status">Completed &middot; Measured result</span>
        </p>
        <h2 class="cases-card__title">Tarinika</h2>
        <p class="cases-card__metric">28 <span>&rarr;</span> <em>7</em> days</p>
        <p class="cases-card__cap">&gt; 75% reduction in manufacturing lead time</p>
      </div>
      <figure class="cases-card__media">
        <img src="/Tarinika.png" alt="Factory floor at Tarinika" width="720" height="540">
      </figure>
    </a>
    <a class="cases-card" href="#case-02">
      <div class="cases-card__copy">
        <p class="cases-card__meta">
          <span class="cases-card__badge">Case 02</span>
          <span class="cases-card__status">In progress &middot; Modelled scenario</span>
        </p>
        <h2 class="cases-card__title">High-mix packaging manufacturer</h2>
        <p class="cases-card__note">Modelled scenario, not a measured outcome.</p>
      </div>
      <figure class="cases-card__media cases-card__media--dark">
        <img src="/packing.png" alt="Packaging line model for a high-mix manufacturer" width="720" height="540">
      </figure>
    </a>
  </div>
</div></section>

<section class="section--tight"><div class="wrap">

  <article class="case" id="case-01" tabindex="-1">
    <p class="case__tag"><i class="measured"></i>Case 01 &middot; Completed &middot; Measured result</p>
    <h2 class="section-title">Tarinika</h2>

    <p class="result__v u-mt10">28 <span>&rarr;</span> <em>7</em> days</p>
    <p class="result__cap u-mt5"><span class="u-mono u-accent">&gt;75%</span> reduction in
      manufacturing lead time · same factory, same machines</p>

    <div class="u-mt10 case__chart"><svg class="dg" viewBox="0 0 560 176" role="img" aria-labelledby="ba-t"><title id="ba-t">Manufacturing lead time fell from 28 days to 7 days — a reduction of more than 75 per cent.</title><text class="dg-micro" x="0" y="46">Before</text><rect x="96.0" y="30" width="368.0" height="24" style="fill:var(--chart-neutral-2)"/><text class="dg-value" x="474.0" y="47">28 days</text><text class="dg-micro" x="0" y="106">After</text><rect x="96.0" y="90" width="92.0" height="24" style="fill:var(--chart-primary)"/><text class="dg-value dg-accent" x="198.0" y="107">7 days</text><line class="ref" x1="188.0" y1="24" x2="188.0" y2="120"/><line class="rule" x1="0" y1="140" x2="560" y2="140"/><text class="dg-micro" x="0" y="162">Manufacturing lead time, order to ship. Measured, same factory, same machines.</text></svg></div>

    <dl class="u-mt10">
      <div class="fact"><dt>The factory</dt><dd>Jewellery manufacturer. Multi-SKU, make-to-order,
        several hundred active SKUs.</dd></div>
      <div class="fact"><dt>The problem</dt><dd>Manufacturing lead time of about four weeks, order
        to ship, while production capacity was available. Adding capacity had not fixed it.</dd></div>
      <div class="fact"><dt>What the analysis revealed</dt><dd>The constraint was not machine speed
        or nominal capacity. Lot sizing and queue dynamics were driving lead time: work was spending
        most of its time waiting between operations, not being worked on.</dd></div>
      <div class="fact"><dt>What changed</dt><dd>Lot sizing and the way work was released and moved
        through the system. Same factory, same machines.</dd></div>
      <div class="fact"><dt>Result</dt><dd><strong>Make-to-ship reduced from 28 days to 7 days</strong>
        — a reduction of more than 75%.</dd></div>
    </dl>

    <p class="disclose u-mt10">&ldquo;We were solving for the wrong
      thing.&rdquo;<br><span class="meta">Tarinika is the founder&rsquo;s manufacturing company.
      We state that rather than presenting this as an arm&rsquo;s-length customer result — the
      measurement is real, and so is the relationship.</span></p>
  </article>

  <article class="case" id="case-02" tabindex="-1">
    <p class="case__tag"><i class="modelled"></i>Case 02 &middot; In progress &middot; Modelled scenario</p>
    <h2 class="section-title">High-mix packaging manufacturer</h2>
    <p class="lead u-mt6">A design partner running a high-mix, low-volume
      packaging plant: orders arriving late while capacity was not the visible constraint.</p>

    <dl class="u-mt10">
      <div class="fact"><dt>What Trooba modelled</dt><dd>The plant&rsquo;s observed routings, grouped
        into product families. Machine pools containing unlike machines, labour shared across
        operations, and low-volume adhoc jobs carried at their real variability rather than folded
        into an average.</dd></div>
      <div class="fact"><dt>How the data was collected</dt><dd>Structured shop-floor collection run
        by the plant&rsquo;s own team &mdash; job travellers, work-centre snapshots, downtime logs
        and resource registers &mdash; rather than an ERP export alone.</dd></div>
      <div class="fact"><dt>What the model showed</dt><dd>The delay was not where utilisation was
        highest. It was in queueing created by batch policy, shared-resource contention and the
        variability that low-volume work pushed into operations sized for steady demand.</dd></div>
      <div class="fact"><dt>Status</dt><dd><strong>Model built and validated against observed flow.
        Scenario testing under way.</strong> Everything this engagement has produced so far is a
        <strong>modelled projection</strong>, not a measured outcome. Before-and-after results will
        be published here once the changes have run on the floor and been verified &mdash; not
        before.</dd></div>
    </dl>
  </article>

  <article class="case">
    <p class="case__tag">Evidence</p>
    <div class="prose">
      <h2 class="section-title">Measured and modelled are not the same word.</h2>
      <p class="body u-mt6">A <strong>measured</strong> result was observed in a factory after a change was made. A <strong>modelled</strong> result is what the model projects if a change is made. Both are useful. Presenting the second as the first is how manufacturing software earns the reputation it has.</p>
      <p class="body u-mt4">Everything on this site is labelled. Every figure the product shows can
        be traced to the model that produced it, and the model can be opened and argued with.</p>
    </div>
  </article>

</div></section>

<section class="section section--ruled"><div class="wrap">
  <div class="prose">
    <h2 class="section-title">Run the same analysis on your plant.</h2>
    <p class="lead u-mt6">One product family, your routings, your demand mix.</p>
    <p class="u-mt10"><a class="btn btn--primary btn--lg" data-primary-cta href="/flow-analysis">Request a Flow Analysis</a></p>
  </div>
</div></section>`;
