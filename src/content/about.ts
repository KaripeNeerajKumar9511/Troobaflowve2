/* Owned by Troobaflowsite — edit this file directly. */
export const meta = {
  title: "About — why Trooba Flow exists | Trooba Flow",
  description:
    "Trooba builds Factory Flow Intelligence software, grounded in Quick Response Manufacturing and queueing theory, by people who have run high-mix, low-volume production.",
  canonical: "https://www.trooba.com/about.html",
  ogTitle: "About — why Trooba Flow exists | Trooba Flow",
  ogDescription:
    "Trooba builds Factory Flow Intelligence software, grounded in Quick Response Manufacturing and queueing theory, by people who have run high-mix, low-volume production.",
  ogUrl: "https://www.trooba.com/about.html",
} as const;

export const mainHtml = `<section class="phead"><div class="wrap">
  <h1 class="section-title section-title--wide">The machines are not full, and the orders are still late.</h1>
  <p class="lead">Trooba exists because that sentence is true in most high-mix factories, and because almost
    no software on the plant floor explains it.</p>
</div></section>

<section class="section--tight"><div class="wrap">
  <div class="prose">
    <p class="body">ERP records what happened. Scheduling decides what runs next. MES reports what is running
      now. None of them answers the question a plant manager asks on a Monday: <em>if we take this order mix,
      where will work pile up, and what will that do to the dates we promised?</em></p>
    <p class="body u-mt6">That question is a flow question, and flow behaviour is governed by queueing, not by
      capacity arithmetic. A factory at 75% utilisation with unpredictable arrivals can have longer lead times
      than one at 85% with steady ones. Every operations leader has seen this. Very little software takes it
      seriously.</p>
    <p class="body u-mt6">Trooba is Factory Flow Intelligence: a model of how work actually moves, built to be
      interrogated before decisions are made rather than reported on after they were.</p>

    <h2 class="section-title u-mt14">Where it comes from</h2>
    <p class="body u-mt6">Trooba&rsquo;s founder is an industrial engineer who trained in Quick Response
      Manufacturing under Professor Rajan Suri at the University of Wisconsin&ndash;Madison, who developed the
      methodology, and has spent years applying it inside high-mix, low-volume manufacturing operations —
      including running them.</p>
    <p class="body u-mt6">The first place the method was applied was Tarinika, the founder&rsquo;s own
      jewellery manufacturing company: make-to-order, multi-SKU, and about four weeks of lead time with
      capacity sitting available. The constraint turned out to be lot sizing and queue dynamics rather
      than machine speed. Lead time went to seven days on the same machines.</p>
    <p class="body u-mt6">The product started as a rebuild of a factory-modelling tool that worked but
      had been left behind: correct mathematics, an interface nobody would open twice. Trooba Flow keeps
      the analytical rigour underneath and makes the result immediately understandable — the conclusion
      comes before the chart, and the model behind it stays open to the engineer who has to defend the
      recommendation.</p>
  </div>

  <h2 class="section-title u-mt14">How we work</h2>
  <dl class="u-mt6">
    <div class="fact"><dt>Built with a plant, not for a demo</dt><dd>The first model was built on a real shop
      floor with the plant&rsquo;s own team collecting the data.</dd></div>
    <div class="fact"><dt>Modelled is not measured</dt><dd>We label which is which, every time. It is the only
      way to be trusted by people who read instruments for a living.</dd></div>
    <div class="fact"><dt>The complexity stays in the system</dt><dd>The queueing model can be as sophisticated
      as the physics demands. The screen shows the conclusion.</dd></div>
    <div class="fact"><dt>The factory&rsquo;s vocabulary</dt><dd>Utilisation, queue, WIP, setup, transfer lot,
      routing, variability. Used correctly, or not used.</dd></div>
  </dl>

  <p class="u-mt10"><a class="link" href="/flow-analysis">Request a Flow Analysis <span class="arw" aria-hidden="true">&rarr;</span></a></p>
</div></section>`;
