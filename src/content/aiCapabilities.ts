/* Owned by Troobaflowsite — edit this file directly. */
export const meta = {
  title: "AI Capabilities — manufacturing intelligence | Trooba Flow",
  description:
    "AI that understands your factory, grounded in manufacturing physics. Trooba Flow combines AI with queueing theory so explanations, predictions and recommendations are validated by the model.",
  canonical: "https://trooba.com/ai-capabilities.html",
  ogTitle: "AI Capabilities — manufacturing intelligence | Trooba Flow",
  ogDescription:
    "AI that understands your factory — grounded in manufacturing physics. The AI proposes. The model validates.",
  ogUrl: "https://trooba.com/ai-capabilities.html",
} as const;

export const mainHtml = `<section class="hero aic-hero">
  <div class="wrap">
    <div class="aic-hero__grid">
      <div class="aic-hero__intro reveal">
        <p class="tr-label u-accent">AI Capabilities</p>
        <h1 class="hero-title">Manufacturing Intelligence</h1>
        <p class="lead">AI that understands your factory &mdash; grounded in manufacturing physics.</p>
        <p class="body u-mt6">Trooba Flow combines AI with queueing theory and factory-flow mathematics, so every explanation, prediction and recommendation is checked against how work actually moves.</p>
        <ul class="aic-pills">
          <li>
            <span class="about-cap__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5 L19.5 8 v8 L12 20.5 4.5 16 V8 Z"/><path d="M12 3.5 V12 L19.5 8"/><path d="M12 12 L4.5 8"/><path d="M12 12 V20.5"/></svg>
            </span>
            <span>AI Propose</span>
          </li>
          <li>
            <span class="about-cap__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.25"/><path d="M8 12.2 L10.8 15 16.2 9"/></svg>
            </span>
            <span>Model Validate</span>
          </li>
          <li>
            <span class="about-cap__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 16 H7 L10 8 13.5 18 16.5 12 H20.5"/><path d="M16.5 8 L20.5 8 L20.5 12"/></svg>
            </span>
            <span>Better Decisions</span>
          </li>
        </ul>
        <p class="aic-hero__status">AI proposes. The model validates.</p>
      </div>
      <figure class="aic-hero__fig reveal">
        <img src="/assets/AI_hero.png" alt="Factory flow overview: lead time, WIP, bottlenecks and on-time delivery projected across an automated production line." width="1536" height="1024">
      </figure>
    </div>
  </div>
</section>

<section class="section section--ruled aic-list" id="capabilities">
  <div class="wrap">

    <article class="aic-row reveal">
      <div class="aic-row__copy">
        <div class="sol-card__head">
          <span class="about-cap__ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.25"/><path d="M12 12 L17 8"/></svg>
          </span>
          <span class="row__idx">01</span>
        </div>
        <h2 class="h3">Understand your factory</h2>
        <p class="body">Connect demand, routings, equipment, labour, variability, utilisation, queues and WIP into one model of how the factory actually behaves.</p>
        <p class="sol-card__tag">The AI reads the factory the way the model does.</p>
      </div>
      <div class="aic-row__fig">
        <div class="aic-hub" data-ai-select data-ai-on="demand">
          <svg class="dg" viewBox="0 0 460 360" role="img" aria-labelledby="aic-hub-t">
            <title id="aic-hub-t">Factory flow at the centre, connected to demand, routings, equipment, labour, variability, utilisation, queues and WIP. Select a factor to see how it enters the model.</title>
            <g data-ai-mark="demand"><line class="aic-spoke" pathLength="100" x1="230" y1="126" x2="230" y2="42"/></g>
            <g data-ai-mark="routings"><line class="aic-spoke" pathLength="100" x1="274.2" y1="149" x2="332" y2="67"/></g>
            <g data-ai-mark="equipment"><line class="aic-spoke" pathLength="100" x1="284" y1="180" x2="338" y2="180"/></g>
            <g data-ai-mark="labour"><line class="aic-spoke" pathLength="100" x1="274.2" y1="211" x2="332" y2="293"/></g>
            <g data-ai-mark="wip"><line class="aic-spoke" pathLength="100" x1="230" y1="234" x2="230" y2="318"/></g>
            <g data-ai-mark="queues"><line class="aic-spoke" pathLength="100" x1="185.8" y1="211" x2="128" y2="293"/></g>
            <g data-ai-mark="utilisation"><line class="aic-spoke" pathLength="100" x1="176" y1="180" x2="122" y2="180"/></g>
            <g data-ai-mark="variability"><line class="aic-spoke" pathLength="100" x1="185.8" y1="149" x2="128" y2="67"/></g>
            <circle class="aic-core-pulse" cx="230" cy="180" r="54"/>
            <circle class="aic-core" cx="230" cy="180" r="54"/>
            <g class="aic-core-ico" aria-hidden="true">
              <path d="M218 174 V158 H226 V150 L232 158 H244 V174 Z"/>
              <rect x="238" y="144" width="3.5" height="14"/>
              <path d="M221 163 h3.5 v4 M227 163 h3.5 v4 M233.5 163 h3.5 v4"/>
              <path d="M227 174 v-5 h6 v5"/>
            </g>
            <text class="dg-strong" x="230" y="204" text-anchor="middle" font-size="11">Factory Flow</text>
            <g data-ai-opt="demand" data-ai-mark="demand" data-ai-msg="Demand mix and its variability &mdash; not a smoothed annual volume." role="button" tabindex="0">
              <rect class="aic-node" x="171" y="8" width="118" height="34" rx="6"/>
              <g class="aic-ico" transform="translate(181 17)" aria-hidden="true">
                <path d="M1 13 H15"/>
                <path d="M2.5 10 L5.5 6 L8.5 8.5 L14 2.5"/>
                <path d="M11 2.5 H14 V5.5"/>
              </g>
              <text class="dg-micro" x="203" y="30">Demand</text>
            </g>
            <g data-ai-opt="routings" data-ai-mark="routings" data-ai-msg="The sequence of operations products actually take, and where they collide." role="button" tabindex="0">
              <rect class="aic-node" x="332" y="50" width="118" height="34" rx="6"/>
              <g class="aic-ico" transform="translate(342 59)" aria-hidden="true">
                <rect x="1" y="1.5" width="5" height="4"/>
                <rect x="10" y="1.5" width="5" height="4"/>
                <rect x="1" y="10.5" width="5" height="4"/>
                <rect x="10" y="10.5" width="5" height="4"/>
                <path d="M6 3.5 H10 M12.5 5.5 V10.5 M10 12.5 H6"/>
              </g>
              <text class="dg-micro" x="364" y="72">Routings</text>
            </g>
            <g data-ai-opt="equipment" data-ai-mark="equipment" data-ai-msg="Machines and pools of unlike machines, modelled as resources." role="button" tabindex="0">
              <rect class="aic-node" x="338" y="163" width="118" height="34" rx="6"/>
              <g class="aic-ico" transform="translate(348 172)" aria-hidden="true">
                <rect x="1.5" y="6" width="13" height="8"/>
                <circle cx="8" cy="10" r="2.2"/>
                <path d="M5 6 V3 H11 V6"/>
              </g>
              <text class="dg-micro" x="370" y="185">Equipment</text>
            </g>
            <g data-ai-opt="labour" data-ai-mark="labour" data-ai-msg="Operators who move between machines, modelled as shared capacity." role="button" tabindex="0">
              <rect class="aic-node" x="332" y="276" width="118" height="34" rx="6"/>
              <g class="aic-ico" transform="translate(342 285)" aria-hidden="true">
                <circle cx="8" cy="4.2" r="2.3"/>
                <path d="M3.2 14 V11.8 C3.2 9.4 5.3 8 8 8 s4.8 1.4 4.8 3.8 V14"/>
              </g>
              <text class="dg-micro" x="364" y="298">Labour</text>
            </g>
            <g data-ai-opt="wip" data-ai-mark="wip" data-ai-msg="Work released but not finished. At a given throughput, more WIP is more lead time." role="button" tabindex="0">
              <rect class="aic-node" x="171" y="318" width="118" height="34" rx="6"/>
              <g class="aic-ico" transform="translate(181 327)" aria-hidden="true">
                <path d="M1 14.5 H15"/>
                <rect x="1.5" y="10" width="4" height="4"/>
                <rect x="1.5" y="6" width="4" height="4"/>
                <rect x="6.2" y="10" width="4" height="4"/>
                <rect x="10.8" y="10" width="4" height="4"/>
                <rect x="10.8" y="6" width="4" height="4"/>
                <rect x="10.8" y="2" width="4" height="4"/>
              </g>
              <text class="dg-micro" x="203" y="340">WIP</text>
            </g>
            <g data-ai-opt="queues" data-ai-mark="queues" data-ai-msg="Time jobs spend waiting for a busy resource &mdash; usually most of lead time." role="button" tabindex="0">
              <rect class="aic-node" x="10" y="276" width="118" height="34" rx="6"/>
              <g class="aic-ico" transform="translate(20 285)" aria-hidden="true">
                <rect x="11.5" y="2" width="4" height="12"/>
                <rect x="1.5" y="6" width="3.5" height="5"/>
                <rect x="5.8" y="6" width="3.5" height="5"/>
              </g>
              <text class="dg-micro" x="42" y="298">Queues</text>
            </g>
            <g data-ai-opt="utilisation" data-ai-mark="utilisation" data-ai-msg="How much of available time a resource is committed. A diagnostic, not a verdict." role="button" tabindex="0">
              <rect class="aic-node" x="4" y="163" width="118" height="34" rx="6"/>
              <g class="aic-ico" transform="translate(14 172)" aria-hidden="true">
                <rect x="1.5" y="2" width="13" height="3"/>
                <rect x="1.5" y="6.5" width="8.5" height="3"/>
                <rect x="1.5" y="11" width="5" height="3"/>
              </g>
              <text class="dg-micro" x="36" y="185">Utilisation</text>
            </g>
            <g data-ai-opt="variability" data-ai-mark="variability" data-ai-msg="Uneven arrivals and process times that propagate downstream." role="button" tabindex="0">
              <rect class="aic-node" x="10" y="50" width="118" height="34" rx="6"/>
              <g class="aic-ico" transform="translate(20 59)" aria-hidden="true">
                <path d="M1 13.5 H15"/>
                <path d="M3 13.5 V9 M6 13.5 V4 M9 13.5 V8 M12 13.5 V5.5 M14.5 13.5 V3"/>
              </g>
              <text class="dg-micro" x="42" y="72">Variability</text>
            </g>
          </svg>
          <p class="meta aic-live" data-ai-live></p>
        </div>
      </div>
    </article>

    <article class="aic-row aic-row--flip reveal" data-ai-select data-ai-on="lead">
      <div class="aic-row__copy">
        <div class="sol-card__head">
          <span class="about-cap__ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 12 H8 L10.5 6.5 13.5 17.5 16 12 H20.5"/></svg>
          </span>
          <span class="row__idx">02</span>
        </div>
        <h2 class="h3">Explain the problem</h2>
        <p class="body">The AI answers the questions operations teams actually ask &mdash; against the model, not against a generic prompt.</p>
        <ul class="aic-q">
          <li>
            <button type="button" data-ai-opt="lead" data-ai-msg="Waiting, not processing, is where most of the increase sits." aria-pressed="true">
              <span class="sol-sim__tick" aria-hidden="true"></span>Why is lead time increasing?
            </button>
          </li>
          <li>
            <button type="button" data-ai-opt="bottle" data-ai-msg="Assembly is the emerging constraint as mix shifts toward longer operations." aria-pressed="false">
              <span class="sol-sim__tick" aria-hidden="true"></span>Where is the bottleneck forming?
            </button>
          </li>
          <li>
            <button type="button" data-ai-opt="wip" data-ai-msg="Inventory is accumulating in front of the constrained resource." aria-pressed="false">
              <span class="sol-sim__tick" aria-hidden="true"></span>Why is WIP accumulating?
            </button>
          </li>
          <li>
            <button type="button" data-ai-opt="queue" data-ai-msg="Queue time rises non-linearly as utilisation crosses the review threshold." aria-pressed="false">
              <span class="sol-sim__tick" aria-hidden="true"></span>What is driving queue time?
            </button>
          </li>
        </ul>
        <p class="meta aic-live" data-ai-live></p>
      </div>
      <div class="aic-row__fig">
        <div class="panel aic-dash">
          <div data-ai-mark="lead">
            <svg class="dg" viewBox="0 0 360 72" role="img" aria-labelledby="aic-ltb-t">
              <title id="aic-ltb-t">Lead time breakdown: processing 2.2 days, waiting 6.2 days. Illustrative.</title>
              <text class="dg-label" x="0" y="12">Lead time breakdown</text>
              <rect x="0" y="28" width="78" height="16" style="fill:var(--chart-neutral-1)"/>
              <rect x="80" y="28" width="220" height="16" style="fill:var(--chart-primary)"/>
              <rect x="302" y="28" width="58" height="16" style="fill:var(--chart-neutral-3)"/>
              <text class="dg-micro" x="0" y="62">Processing 2.2 d</text>
              <text class="dg-micro dg-accent" x="130" y="62">Waiting 6.2 d</text>
              <text class="dg-micro" x="302" y="62">Move</text>
            </svg>
          </div>
          <div data-ai-mark="bottle">
            <svg class="dg" viewBox="0 0 360 88" role="img" aria-labelledby="aic-bn-t">
              <title id="aic-bn-t">Bottleneck analysis: Assembly at 91 percent, Welding 74 percent, Painting 68 percent. Illustrative.</title>
              <text class="dg-label" x="0" y="12">Bottleneck analysis</text>
              <text class="dg-micro" x="0" y="36">Assembly</text>
              <rect x="88" y="26" width="200" height="10" style="fill:var(--chart-neutral-3)"/>
              <rect class="aic-grow" x="88" y="26" width="182" height="10" style="fill:var(--chart-primary)"/>
              <text class="dg-value dg-accent" x="360" y="36" text-anchor="end">91%</text>
              <text class="dg-micro" x="0" y="60">Welding</text>
              <rect x="88" y="50" width="200" height="10" style="fill:var(--chart-neutral-3)"/>
              <rect x="88" y="50" width="148" height="10" style="fill:var(--chart-neutral-1)"/>
              <text class="dg-value" x="360" y="60" text-anchor="end">74%</text>
              <text class="dg-micro" x="0" y="84">Painting</text>
              <rect x="88" y="74" width="200" height="10" style="fill:var(--chart-neutral-3)"/>
              <rect x="88" y="74" width="136" height="10" style="fill:var(--chart-neutral-1)"/>
              <text class="dg-value" x="360" y="84" text-anchor="end">68%</text>
            </svg>
          </div>
          <div data-ai-mark="wip">
            <svg class="dg" viewBox="0 0 360 88" role="img" aria-labelledby="aic-wip-t">
              <title id="aic-wip-t">WIP accumulation rising toward 2,150 units over twelve weeks. Illustrative.</title>
              <text class="dg-label" x="0" y="12">WIP accumulation</text>
              <line class="axis" x1="36" y1="72" x2="360" y2="72"/>
              <path class="series aic-draw" d="M36 64 C90 62 140 58 190 44 C250 28 310 24 360 18"/>
              <text class="dg-micro" x="0" y="28">2,150</text>
              <text class="dg-micro" x="36" y="86">now</text>
              <text class="dg-micro" x="360" y="86" text-anchor="end">+12 w</text>
            </svg>
          </div>
          <div data-ai-mark="queue">
            <svg class="dg" viewBox="0 0 360 88" role="img" aria-labelledby="aic-qt-t">
              <title id="aic-qt-t">Queue time against utilisation. Short at 74 percent, several times longer at 91 percent. Illustrative.</title>
              <text class="dg-label" x="0" y="12">Queue time vs utilisation</text>
              <line class="axis" x1="36" y1="72" x2="360" y2="72"/>
              <path class="series aic-draw" d="M36 68 C90 66 140 64 190 60 C240 52 290 36 360 16"/>
              <circle cx="220" cy="56" r="3" style="fill:var(--chart-neutral-1)"/>
              <text class="dg-micro" x="212" y="50" text-anchor="end">74%</text>
              <circle cx="330" cy="22" r="3" style="fill:var(--chart-primary)"/>
              <text class="dg-value dg-accent" x="322" y="18" text-anchor="end">91%</text>
            </svg>
          </div>
        </div>
      </div>
    </article>

    <article class="aic-row reveal" data-scene="base">
      <div class="aic-row__copy">
        <div class="sol-card__head">
          <span class="about-cap__ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18 V10"/><path d="M10 18 V7"/><path d="M16 18 V12"/><path d="M22 18 V5"/></svg>
          </span>
          <span class="row__idx">03</span>
        </div>
        <h2 class="h3">Predict what happens next</h2>
        <p class="body">Test a change in demand or mix and see where queues and constraints move before they show up on the floor.</p>
        <ul class="aic-q aic-q--static">
          <li><span class="sol-sim__tick" aria-hidden="true"></span>What if demand rises 20%?</li>
          <li><span class="sol-sim__tick" aria-hidden="true"></span>Where does the next bottleneck appear?</li>
          <li><span class="sol-sim__tick" aria-hidden="true"></span>How do queues build over the next weeks?</li>
        </ul>
        <div class="seg u-mt8" role="group" aria-label="Demand scenario">
          <button type="button" data-scene-btn="base" aria-pressed="true">Current demand</button>
          <button type="button" data-scene-btn="scenario" aria-pressed="false">+20% demand</button>
        </div>
        <p class="vh" role="status" data-scene-live
           data-msg-base="Current demand. Assembly at 91 percent utilisation, queue growing."
           data-msg-scenario="Demand up 20 percent. Assembly at 98 percent. Next bottleneck, queue building faster."></p>
      </div>
      <div class="aic-row__fig" data-state="base">
        <svg class="dg" viewBox="0 0 560 168" role="img" aria-labelledby="aic-pred-t">
          <title id="aic-pred-t">Five-operation routing. Assembly is the next bottleneck. Queue grows further at plus 20 percent demand. Illustrative.</title>
          <line class="flow flowdots" x1="94" y1="72" x2="126" y2="72" stroke-dasharray="4 8"/>
          <line class="flow flowdots" x1="210" y1="72" x2="242" y2="72" stroke-dasharray="4 8"/>
          <line class="flow flowdots" x1="326" y1="72" x2="358" y2="72" stroke-dasharray="4 8"/>
          <line class="flow flowdots" x1="442" y1="72" x2="474" y2="72" stroke-dasharray="4 8"/>
          <rect class="unit unit--on" x="235" y="68" width="7" height="7" data-u-base="1" data-u-scenario="1"/>
          <rect class="unit unit--on" x="227" y="68" width="7" height="7" data-u-base="1" data-u-scenario="1"/>
          <rect class="unit unit--on" x="219" y="68" width="7" height="7" data-u-base="0" data-u-scenario="1"/>
          <rect class="unit unit--on" x="211" y="68" width="7" height="7" data-u-base="0" data-u-scenario="1"/>
          <rect class="wc" x="10" y="48" width="84" height="48"/>
          <text class="dg-micro" x="52" y="68" text-anchor="middle">Cutting</text>
          <text class="dg-value" x="52" y="86" text-anchor="middle" data-v-base="62%" data-v-scenario="68%">62%</text>
          <rect class="wc" x="126" y="48" width="84" height="48"/>
          <text class="dg-micro" x="168" y="68" text-anchor="middle">Welding</text>
          <text class="dg-value" x="168" y="86" text-anchor="middle" data-v-base="74%" data-v-scenario="82%">74%</text>
          <rect class="wc wc--con aic-pulse" x="242" y="48" width="84" height="48"/>
          <text class="dg-micro" x="284" y="68" text-anchor="middle">Assembly</text>
          <text class="dg-value dg-accent" x="284" y="86" text-anchor="middle" data-v-base="91%" data-v-scenario="98%">91%</text>
          <rect class="wc" x="358" y="48" width="84" height="48"/>
          <text class="dg-micro" x="400" y="68" text-anchor="middle">Painting</text>
          <text class="dg-value" x="400" y="86" text-anchor="middle" data-v-base="68%" data-v-scenario="74%">68%</text>
          <rect class="wc" x="474" y="48" width="84" height="48"/>
          <text class="dg-micro" x="516" y="68" text-anchor="middle">Packing</text>
          <text class="dg-value" x="516" y="86" text-anchor="middle" data-v-base="58%" data-v-scenario="62%">62%</text>
          <g class="st-b"><text class="dg-accent" x="284" y="28" text-anchor="middle" font-size="12" font-weight="500">Next bottleneck</text></g>
          <g class="st-s"><text class="dg-accent" x="284" y="28" text-anchor="middle" font-size="12" font-weight="500">Constraint under +20% demand</text></g>
          <text class="dg-label" x="0" y="124">Queue build-up</text>
          <path class="series--ctx" d="M8 156 C80 154 160 150 240 146 C360 140 460 138 552 136"/>
          <path class="series aic-draw" d="M8 156 C80 152 160 140 240 118 C360 96 460 88 552 82"/>
          <text class="dg-micro" x="8" y="168">now</text>
          <text class="dg-micro" x="552" y="168" text-anchor="end">+10 weeks</text>
        </svg>
        <p class="fig__note">Current demand vs +20% demand. Illustrative model.</p>
      </div>
    </article>

    <article class="aic-row aic-row--flip reveal" data-ai-select data-ai-on="recommend">
      <div class="aic-row__copy">
        <div class="sol-card__head">
          <span class="about-cap__ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3 H15"/><path d="M10 3 V8.5 L5.5 16.5 A6.5 6.5 0 0 0 18.5 16.5 L14 8.5 V3"/></svg>
          </span>
          <span class="row__idx">04</span>
        </div>
        <h2 class="h3">Recommend and test improvements</h2>
        <p class="body">Evaluate changes to lot sizes, capacity, routings, labour, shifts and manufacturing cells before anything moves on the shop floor.</p>
        <ul class="aic-q aic-q--static">
          <li><span class="sol-sim__tick" aria-hidden="true"></span>Lot sizes</li>
          <li><span class="sol-sim__tick" aria-hidden="true"></span>Capacity</li>
          <li><span class="sol-sim__tick" aria-hidden="true"></span>Routings</li>
          <li><span class="sol-sim__tick" aria-hidden="true"></span>Labour, shifts and cells</li>
        </ul>
        <ol class="aic-steps" aria-label="How a recommendation is tested">
          <li>
            <button type="button" data-ai-opt="recommend" data-ai-msg="The AI proposes a change the routing can already reach." aria-pressed="true">Recommend</button>
          </li>
          <li>
            <button type="button" data-ai-opt="simulate" data-ai-msg="The same model is solved with the change applied." aria-pressed="false">Simulate</button>
          </li>
          <li>
            <button type="button" data-ai-opt="validate" data-ai-msg="Impact is compared on lead time, WIP and queues before the floor moves." aria-pressed="false">Validate</button>
          </li>
        </ol>
        <p class="meta aic-live" data-ai-live></p>
      </div>
      <div class="aic-row__fig">
        <div class="panel aic-scen">
          <p class="tr-label">Improvement scenario: reduce lot size</p>
          <div class="tbl-scroll tbl-scroll--compare u-mt4">
            <table class="tbl">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th data-ai-mark="recommend">Current state</th>
                  <th data-ai-mark="simulate">Simulation result</th>
                  <th data-ai-mark="validate">Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lead time</td>
                  <td class="v" data-ai-mark="recommend"><span class="tbl__k">Current state</span> 8.4 d</td>
                  <td class="v" data-ai-mark="simulate"><span class="tbl__k">Simulation result</span> 5.1 d</td>
                  <td class="v u-accent" data-ai-mark="validate"><span class="tbl__k">Impact</span> &minus;39%</td>
                </tr>
                <tr>
                  <td>WIP</td>
                  <td class="v" data-ai-mark="recommend"><span class="tbl__k">Current state</span> 1,240</td>
                  <td class="v" data-ai-mark="simulate"><span class="tbl__k">Simulation result</span> 750</td>
                  <td class="v u-accent" data-ai-mark="validate"><span class="tbl__k">Impact</span> &minus;40%</td>
                </tr>
                <tr>
                  <td>Queues</td>
                  <td class="v" data-ai-mark="recommend"><span class="tbl__k">Current state</span> 6.2 d</td>
                  <td class="v" data-ai-mark="simulate"><span class="tbl__k">Simulation result</span> 2.9 d</td>
                  <td class="v u-accent" data-ai-mark="validate"><span class="tbl__k">Impact</span> &minus;53%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="fig__note">Illustrative model output. No added capacity.</p>
        </div>
      </div>
    </article>

  </div>
</section>

<section class="section section--ruled aic-more">
  <div class="wrap">
    <div class="aic-more__grid reveal" data-ai-select data-ai-on="leadtime">
      <div>
        <p class="tr-label u-accent">More than an AI assistant</p>
        <h2 class="section-title section-title--wide">Grounded in the model. Not in a generic prompt.</h2>
        <p class="lead u-mt6">Most AI tools summarise what already happened. Trooba is grounded in a quantitative model of factory flow, so the AI can explain, predict and recommend against the same measures the plant already uses.</p>
        <div class="aic-chips">
          <button type="button" data-ai-opt="leadtime" data-ai-msg="Manufacturing critical-path time, decomposed into processing and waiting." aria-pressed="true">Lead Time</button>
          <button type="button" data-ai-opt="wip" data-ai-msg="Work in process, tied to throughput and lead time by Little&rsquo;s Law." aria-pressed="false">WIP</button>
          <button type="button" data-ai-opt="queues" data-ai-msg="Waiting time before each resource, projected forward." aria-pressed="false">Queues</button>
          <button type="button" data-ai-opt="utilisation" data-ai-msg="Committed time as a diagnostic, not a verdict." aria-pressed="false">Utilisation</button>
          <button type="button" data-ai-opt="capacity" data-ai-msg="What is already available, and what would have to change to reach it." aria-pressed="false">Capacity</button>
          <button type="button" data-ai-opt="bottlenecks" data-ai-msg="The resource that will constrain the system next &mdash; and why." aria-pressed="false">Bottlenecks</button>
          <p class="meta aic-live" data-ai-live></p>
        </div>
      </div>
      <div class="aic-math">
        <p class="h4">Complex mathematics underneath. Simple decisions on top.</p>
        <svg class="dg aic-waves u-mt6" viewBox="0 0 420 120" role="img" aria-labelledby="aic-wave-t">
          <title id="aic-wave-t">Three overlapping flow series. The selected measure is drawn in teal.</title>
          <path class="series--ctx aic-draw" data-ai-mark="wip" d="M0 70 C40 62 80 86 120 74 C160 62 200 90 240 68 C280 48 320 72 360 58 C390 50 410 54 420 48"/>
          <path class="series--ctx aic-draw" data-ai-mark="queues" d="M0 88 C50 80 90 100 140 84 C190 68 230 96 280 78 C330 62 380 70 420 64"/>
          <path class="series aic-draw" data-ai-mark="leadtime" d="M0 54 C45 40 85 72 130 50 C175 28 220 66 270 44 C320 24 370 40 420 32"/>
          <path class="series--ctx" data-ai-mark="utilisation" d="M0 40 C70 36 140 48 210 38 C280 28 350 42 420 36"/>
          <path class="series--ctx" data-ai-mark="capacity" d="M0 96 C80 92 160 104 240 90 C320 78 380 88 420 84"/>
          <path class="series--ctx" data-ai-mark="bottlenecks" d="M0 28 C60 18 120 44 180 22 C240 4 300 30 360 16 C390 10 410 14 420 12"/>
        </svg>
        <div class="aic-eq">
          <p class="u-mono">WIP = TH &times; CT</p>
          <p class="u-mono">Wq &asymp; (&rho;<sup>&radic;(2(m+1))&minus;1</sup> / m(1 &minus; &rho;)) &middot; ((Ca&sup2; + Cs&sup2;) / 2) &middot; t<sub>e</sub></p>
          <p class="meta">Little&rsquo;s Law and Allen&ndash;Cunneen. The AI explains the model. The mathematics grounds it.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--ruled">
  <div class="wrap">
    <div class="reveal" style="max-width:52ch">
      <h2 class="section-title">See how work really flows through your factory.</h2>
      <p class="lead u-mt6">Share a small set of factory data and see where queues, bottlenecks and hidden capacity are affecting performance.</p>
      <p class="u-mt10"><a class="btn btn--primary btn--lg" data-primary-cta href="/flow-analysis">Request a Flow Analysis <span class="arw" aria-hidden="true">&rarr;</span></a></p>
    </div>
  </div>
</section>`;
