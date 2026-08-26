/* Owned by Troobaflowsite — edit this file directly. */
export const meta = {
  title: "Our Solutions — factory problems Trooba Flow solves | Trooba Flow",
  description:
    "Trooba Flow helps manufacturers reduce lead time, find hidden bottlenecks, cut WIP and queues, make better capacity decisions, improve on-time delivery, and test changes before the shop floor.",
  canonical: "https://www.trooba.com/solutions.html",
  ogTitle: "Our Solutions — factory problems Trooba Flow solves | Trooba Flow",
  ogDescription:
    "Trooba Flow helps manufacturers understand what is driving lead time, queues and capacity constraints — and test improvements before changing the shop floor.",
  ogUrl: "https://www.trooba.com/solutions.html",
} as const;

export const mainHtml = `<section class="hero sol-hero">
  <div class="wrap">
    <div class="sol-hero__grid">
      <div class="sol-hero__intro reveal">
        <p class="tr-label u-accent">Our Solutions</p>
        <h1 class="hero-title">Solve the factory problems that slow production.</h1>
        <p class="lead">Trooba Flow helps manufacturers understand what is driving lead time, queues and capacity constraints &mdash; and test improvements before changing the shop floor.</p>
      </div>
      <figure class="sol-hero__fig reveal">
        <img src="/assets/solution_hero.png" alt="Factory flow illustration with lead time reduced from 28 to 7 days, WIP down 50 percent, and on-time delivery improved from 68 to 92 percent." width="1536" height="1024">
      </figure>
    </div>
  </div>
</section>

<section class="section section--ruled sol-list" id="solutions">
  <div class="wrap">
    <div class="sol-grid">

      <article class="panel sol-card reveal">
        <div class="sol-card__copy">
          <div class="sol-card__head">
            <span class="about-cap__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="13" r="7.25"/>
                <path d="M12 13 V9.5"/>
                <path d="M12 5.5 V4M9 4.8 L9.6 6.1M15 4.8 L14.4 6.1"/>
              </svg>
            </span>
            <span class="row__idx">01</span>
          </div>
          <h2 class="h3">Reduce Manufacturing Lead Time</h2>
          <p class="body">See where time is really being lost across processing, equipment queues, labour queues, batching and variability.</p>
          <p class="sol-card__tag">Find the delays. Fix the flow.</p>
        </div>
        <figure class="sol-card__fig">
          <svg class="dg" viewBox="0 0 320 158" role="img" aria-labelledby="sol-lt-t">
            <title id="sol-lt-t">Lead time breakdown: 1.2 days processing, 3.1 days equipment queues, 1.8 days labour queues, 1.4 days batching, 0.9 days variability. Illustrative.</title>
            <text class="dg-label" x="0" y="12">Lead time breakdown</text>
            <text class="dg-micro" x="0" y="36">Processing</text>
            <rect x="108" y="26" width="48" height="10" style="fill:var(--chart-neutral-1)"/>
            <text class="dg-value" x="320" y="36" text-anchor="end">1.2 d</text>
            <text class="dg-micro" x="0" y="62">Queues (eq)</text>
            <rect x="108" y="52" width="200" height="10" style="fill:var(--chart-primary)"/>
            <text class="dg-value dg-accent" x="320" y="62" text-anchor="end">3.1 d</text>
            <text class="dg-micro" x="0" y="88">Queues (labour)</text>
            <rect x="108" y="78" width="116" height="10" style="fill:var(--chart-neutral-2)"/>
            <text class="dg-value" x="320" y="88" text-anchor="end">1.8 d</text>
            <text class="dg-micro" x="0" y="114">Batching</text>
            <rect x="108" y="104" width="90" height="10" style="fill:var(--chart-neutral-2)"/>
            <text class="dg-value" x="320" y="114" text-anchor="end">1.4 d</text>
            <text class="dg-micro" x="0" y="140">Variability</text>
            <rect x="108" y="130" width="58" height="10" style="fill:var(--chart-neutral-3)"/>
            <text class="dg-value" x="320" y="140" text-anchor="end">0.9 d</text>
          </svg>
        </figure>
      </article>

      <article class="panel sol-card reveal">
        <div class="sol-card__copy">
          <div class="sol-card__head">
            <span class="about-cap__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="8.25"/>
                <circle cx="12" cy="12" r="4.25"/>
                <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/>
              </svg>
            </span>
            <span class="row__idx">02</span>
          </div>
          <h2 class="h3">Find Hidden Bottlenecks</h2>
          <p class="body">Identify the resources actually constraining production &mdash; including bottlenecks that emerge as demand and product mix change.</p>
          <p class="sol-card__tag">See the constraint before it becomes a delivery problem.</p>
        </div>
        <figure class="sol-card__fig">
          <svg class="dg" viewBox="0 0 420 158" role="img" aria-labelledby="sol-bn-t">
            <title id="sol-bn-t">Four-operation routing with work accumulating at Assembly, the emerging constraint at 91 percent projected utilisation. Illustrative.</title>
            <line class="flow" x1="90" y1="96" x2="124" y2="96"/>
            <line class="flow" x1="190" y1="96" x2="224" y2="96"/>
            <line class="flow" x1="290" y1="96" x2="324" y2="96"/>
            <rect class="unit" x="24" y="91" width="9" height="9"/>
            <rect class="unit" x="124" y="91" width="9" height="9"/>
            <rect class="unit unit--on" x="224" y="91" width="9" height="9"/>
            <rect class="unit unit--on" x="213" y="91" width="9" height="9"/>
            <rect class="unit unit--on" x="202" y="91" width="9" height="9"/>
            <rect class="unit unit--on" x="191" y="91" width="9" height="9"/>
            <rect class="unit" x="324" y="91" width="9" height="9"/>
            <rect class="wc" x="34" y="76" width="56" height="40"/>
            <text class="dg-micro" x="62" y="134" text-anchor="middle">Milling</text>
            <text class="dg-value" x="62" y="150" text-anchor="middle">62%</text>
            <rect class="wc" x="134" y="76" width="56" height="40"/>
            <text class="dg-micro" x="162" y="134" text-anchor="middle">Lathe</text>
            <text class="dg-value" x="162" y="150" text-anchor="middle">74%</text>
            <rect class="wc wc--con" x="234" y="76" width="56" height="40"/>
            <text class="dg-micro" x="262" y="134" text-anchor="middle">Assembly</text>
            <text class="dg-value dg-accent" x="262" y="150" text-anchor="middle">91%</text>
            <rect class="wc" x="334" y="76" width="56" height="40"/>
            <text class="dg-micro" x="362" y="134" text-anchor="middle">Packing</text>
            <text class="dg-value" x="362" y="150" text-anchor="middle">58%</text>
            <line class="flow" x1="262" y1="72" x2="262" y2="36" style="stroke:var(--action-primary)"/>
            <text class="dg-accent" x="262" y="26" text-anchor="middle" font-size="12" font-weight="500">Constraint emerging</text>
          </svg>
        </figure>
      </article>

      <article class="panel sol-card reveal">
        <div class="sol-card__copy">
          <div class="sol-card__head">
            <span class="about-cap__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="14" width="6" height="6"/>
                <rect x="4" y="7" width="6" height="6"/>
                <rect x="14" y="14" width="6" height="6"/>
              </svg>
            </span>
            <span class="row__idx">03</span>
          </div>
          <h2 class="h3">Reduce WIP &amp; Queues</h2>
          <p class="body">Understand where inventory is waiting, why congestion is building and which changes can improve flow.</p>
          <p class="sol-card__tag">Reduce waiting without starving production.</p>
        </div>
        <figure class="sol-card__fig">
          <svg class="dg" viewBox="0 0 320 156" role="img" aria-labelledby="sol-wip-t">
            <title id="sol-wip-t">WIP over time: current state stays near 2,150 units; the improved scenario falls toward 1,075 units. Illustrative.</title>
            <text class="dg-label" x="0" y="12">WIP over time</text>
            <line class="axis" x1="40" y1="112" x2="320" y2="112"/>
            <line class="axis" x1="40" y1="112" x2="40" y2="28"/>
            <path class="series--ctx" d="M40 48 C94 44 144 42 190 40 C240 46 284 38 320 44"/>
            <path class="series" d="M40 48 C94 54 134 68 180 84 C232 100 276 104 320 108"/>
            <text class="dg-micro" x="0" y="34">2,150</text>
            <text class="dg-micro" x="40" y="126">now</text>
            <text class="dg-micro" x="320" y="126" text-anchor="end">+12 weeks</text>
            <rect x="40" y="140" width="10" height="2" style="fill:var(--chart-neutral-1)"/>
            <text class="dg-micro" x="54" y="144">Current</text>
            <rect x="122" y="140" width="10" height="2" style="fill:var(--chart-primary)"/>
            <text class="dg-micro" x="136" y="144">Improved</text>
          </svg>
        </figure>
      </article>

      <article class="panel sol-card reveal">
        <div class="sol-card__copy">
          <div class="sol-card__head">
            <span class="about-cap__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 18 V10"/>
                <path d="M10 18 V7"/>
                <path d="M16 18 V12"/>
                <path d="M22 18 V5"/>
              </svg>
            </span>
            <span class="row__idx">04</span>
          </div>
          <h2 class="h3">Make Better Capacity Decisions</h2>
          <p class="body">Determine whether you really need more machines, labour or shifts &mdash; or whether existing capacity can be unlocked through better flow.</p>
          <p class="sol-card__tag">Know when to add capacity &mdash; and when not to.</p>
        </div>
        <figure class="sol-card__fig">
          <svg class="dg" viewBox="0 0 320 132" role="img" aria-labelledby="sol-cap-t">
            <title id="sol-cap-t">Capacity utilisation: current 72 percent versus 91 percent after improvement. Illustrative.</title>
            <text class="dg-label" x="0" y="12">Capacity utilisation</text>
            <text class="dg-micro" x="0" y="48">Current</text>
            <rect x="88" y="38" width="200" height="12" style="fill:var(--chart-neutral-3)"/>
            <rect x="88" y="38" width="144" height="12" style="fill:var(--chart-neutral-1)"/>
            <text class="dg-value" x="320" y="48" text-anchor="end">72%</text>
            <text class="dg-micro" x="0" y="88">After improvement</text>
            <rect x="88" y="78" width="200" height="12" style="fill:var(--chart-neutral-3)"/>
            <rect x="88" y="78" width="182" height="12" style="fill:var(--chart-primary)"/>
            <text class="dg-value dg-accent" x="320" y="88" text-anchor="end">91%</text>
            <text class="dg-micro" x="88" y="118">Share of available capacity actually used.</text>
          </svg>
        </figure>
      </article>

      <article class="panel sol-card reveal">
        <div class="sol-card__copy">
          <div class="sol-card__head">
            <span class="about-cap__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 16 V14 H14 V16"/>
                <path d="M14 14 H18 L21 17 V16 H22"/>
                <circle cx="7" cy="17.5" r="1.6"/>
                <circle cx="17.5" cy="17.5" r="1.6"/>
                <path d="M3 10 H11"/>
              </svg>
            </span>
            <span class="row__idx">05</span>
          </div>
          <h2 class="h3">Improve On-Time Delivery</h2>
          <p class="body">Identify the flow conditions that create delivery risk before orders become late.</p>
          <p class="sol-card__tag">Improve delivery by fixing the causes upstream.</p>
        </div>
        <figure class="sol-card__fig">
          <svg class="dg" viewBox="0 0 320 132" role="img" aria-labelledby="sol-otd-t">
            <title id="sol-otd-t">On-time delivery: current 68 percent versus 92 percent improved. Illustrative.</title>
            <text class="dg-label" x="0" y="12">On-time delivery</text>
            <text class="dg-micro" x="0" y="48">Current</text>
            <rect x="88" y="36" width="136" height="16" style="fill:var(--chart-neutral-2)"/>
            <text class="dg-value" x="320" y="50" text-anchor="end">68%</text>
            <text class="dg-micro" x="0" y="88">Improved</text>
            <rect x="88" y="76" width="184" height="16" style="fill:var(--chart-primary)"/>
            <text class="dg-value dg-accent" x="320" y="90" text-anchor="end">92%</text>
            <text class="dg-micro" x="88" y="118">Same factory. Different flow conditions.</text>
          </svg>
        </figure>
      </article>

      <article class="panel sol-card reveal">
        <div class="sol-card__copy">
          <div class="sol-card__head">
            <span class="about-cap__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 3 H15"/>
                <path d="M10 3 V8.5 L5.5 16.5 A6.5 6.5 0 0 0 18.5 16.5 L14 8.5 V3"/>
              </svg>
            </span>
            <span class="row__idx">06</span>
          </div>
          <h2 class="h3">Test Improvements Before Implementation</h2>
          <p class="body">Evaluate changes to demand, lot sizes, capacity, routings, labour, shifts and manufacturing cells before making changes on the shop floor.</p>
          <p class="sol-card__tag">Test the decision before changing the factory.</p>
        </div>
        <div class="sol-card__fig">
          <div class="sol-sim" aria-hidden="true">
            <p class="tr-label">Simulation scenario</p>
            <ul class="sol-sim__list">
              <li><span class="sol-sim__tick"></span>Demand +20%</li>
              <li><span class="sol-sim__tick"></span>Lot size change</li>
              <li><span class="sol-sim__tick"></span>Routing change</li>
              <li><span class="sol-sim__tick"></span>Shift pattern</li>
            </ul>
            <span class="sol-sim__run">Run simulation</span>
          </div>
        </div>
      </article>

    </div>
    <p class="fig__note fig__note--rule">Figures throughout are from an illustrative model, not a customer result.</p>
  </div>
</section>

<section class="section section--ruled sol-process">
  <div class="wrap">
    <div class="sol-process__intro reveal">
      <h2 class="section-title section-title--wide">From problem to quantified improvement</h2>
      <span class="sol-process__mark" aria-hidden="true"></span>
    </div>
    <ol class="sol-flow">
      <li class="reveal">
        <span class="about-cap__ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="6.25"/>
            <path d="M16 16 L20 20"/>
          </svg>
        </span>
        <h3>Problem</h3>
        <p class="body">Understand what is happening on the shop floor.</p>
      </li>
      <li class="reveal">
        <span class="about-cap__ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="8.25"/>
            <path d="M12 12 L17 8"/>
          </svg>
        </span>
        <h3>Root Cause</h3>
        <p class="body">Identify the true cause behind delays, queues and constraints.</p>
      </li>
      <li class="reveal">
        <span class="about-cap__ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3.5 L19.5 8 v8 L12 20.5 4.5 16 V8 Z"/>
            <path d="M12 3.5 V12 L19.5 8"/>
            <path d="M12 12 L4.5 8"/>
            <path d="M12 12 V20.5"/>
          </svg>
        </span>
        <h3>Scenario</h3>
        <p class="body">Simulate changes and test the best options for improvement.</p>
      </li>
      <li class="reveal">
        <span class="about-cap__ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3.5 16 H7 L10 8 13.5 18 16.5 12 H20.5"/>
            <path d="M16.5 8 L20.5 8 L20.5 12"/>
          </svg>
        </span>
        <h3>Impact</h3>
        <p class="body">Quantify the expected improvement before making it real.</p>
      </li>
    </ol>
  </div>
</section>

<section class="section section--ruled">
  <div class="wrap">
    <div class="reveal" style="max-width:52ch">
      <p class="lead">Trooba helps manufacturing teams make better decisions using factory-flow intelligence instead of averages, spreadsheets and intuition.</p>
      <p class="u-mt10"><a class="btn btn--primary btn--lg" data-primary-cta href="/flow-analysis">Request a Flow Analysis <span class="arw" aria-hidden="true">&rarr;</span></a></p>
    </div>
  </div>
</section>`;
