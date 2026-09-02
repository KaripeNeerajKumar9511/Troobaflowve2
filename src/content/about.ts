/* Owned by Troobaflowsite — edit this file directly. */
export const meta = {
  title: "About — built by manufacturing people | Trooba Flow",
  description:
    "Trooba Flow was created to make invisible factory dynamics visible: queues, variability, lot sizes, shared resources and changing demand.",
  canonical: "https://trooba.com/about.html",
  ogTitle: "About — built by manufacturing people | Trooba Flow",
  ogDescription:
    "Trooba Flow was created to make invisible factory dynamics visible: queues, variability, lot sizes, shared resources and changing demand.",
  ogUrl: "https://trooba.com/about.html",
} as const;

export const mainHtml = `<section class="hero about-hero">
  <div class="wrap">
    <div class="about-hero__grid">
      <div class="about-hero__intro reveal">
        <p class="tr-label u-accent">About Trooba</p>
        <h1 class="hero-title">Built by manufacturing people, <span class="u-accent">for manufacturing decisions</span></h1>
        <div class="about-hero__copy">
          <p class="body">Trooba was born from a simple observation:</p>
          <p class="body"><strong class="u-accent">Factories can have available capacity and still struggle with long lead times.</strong></p>
          <p class="body">The reason is often not a lack of machines or people. It is what happens between operations&mdash;queues, variability, lot sizes, shared resources and changing demand.</p>
          <p class="body"><strong class="u-accent">Trooba Flow was created to make those invisible dynamics visible.</strong></p>
        </div>
      </div>

      <div class="about-hero__side">
        <figure class="about-hero__fig reveal">
          <img src="/assets/about_hero.png" alt="Factory flow model with three outcomes: simulate what-if scenarios with confidence, predict bottlenecks before they happen, and improve flow, reduce lead time and boost performance." width="1536" height="1024">
        </figure>

        <div class="well about-data reveal">
          <span class="about-cap__ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <ellipse cx="12" cy="6" rx="7.25" ry="2.75"/>
              <path d="M4.75 6v12c0 1.52 3.25 2.75 7.25 2.75s7.25-1.23 7.25-2.75V6"/>
              <path d="M4.75 12c0 1.52 3.25 2.75 7.25 2.75s7.25-1.23 7.25-2.75"/>
            </svg>
          </span>
          <p class="body"><strong>Using the manufacturing data companies already have,</strong> Trooba models how work actually flows through a factory, predicts where bottlenecks and queues are likely to emerge, and helps teams test improvement scenarios before making changes on the shop floor.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--ruled about-story">
  <div class="wrap">
    <div class="about-split">
      <div class="about-story__text reveal">
        <p class="tr-label u-accent">Our story</p>
        <h2 class="section-title section-title--wide">From a simple observation to a powerful platform.</h2>
        <div class="about-story__copy">
          <p class="body">Trooba was born from a simple observation:</p>
          <p class="body"><strong class="u-accent">Factories can have available capacity and still struggle with long lead times.</strong></p>
          <p class="body">The reason is often not a lack of machines or people. It is what happens between operations&mdash;queues, variability, lot sizes, shared resources and changing demand.</p>
          <p class="body"><strong class="u-accent">Trooba Flow was created to make those invisible dynamics visible.</strong></p>
        </div>
      </div>

      <div class="about-dgs reveal">
        <article class="panel about-dg">
          <p class="h4">Simulate</p>
          <p class="meta">what-if scenarios with confidence</p>
          <svg class="dg" viewBox="0 0 420 118" role="img" aria-labelledby="about-sim-t">
            <title id="about-sim-t">Current model at 8.4 days and 1,240 units against a scenario at 5.1 days and 750 units: 39 per cent less lead time, 40 per cent less work in process. Illustrative.</title>
            <text class="dg-label" x="0" y="12">Current</text>
            <text class="dg-value-lg" x="0" y="46">8.4</text>
            <text class="dg-micro" x="0" y="62">days lead time</text>
            <text class="dg-value" x="0" y="90">1,240</text>
            <text class="dg-micro" x="0" y="106">units WIP</text>
            <text class="dg-label" x="168" y="12">Scenario</text>
            <text class="dg-value-lg dg-accent" x="168" y="46">5.1</text>
            <text class="dg-micro" x="168" y="62">days lead time</text>
            <text class="dg-value dg-accent" x="168" y="90">750</text>
            <text class="dg-micro" x="168" y="106">units WIP</text>
            <path class="flow" d="M136 40 h20" style="stroke:var(--chart-neutral-1)"/>
            <text class="dg-label" x="324" y="12">Impact</text>
            <text class="dg-value-lg dg-accent" x="324" y="46">&minus;39%</text>
            <text class="dg-micro" x="324" y="62">lead time</text>
            <text class="dg-value dg-accent" x="324" y="90">&minus;40%</text>
            <text class="dg-micro" x="324" y="106">WIP</text>
          </svg>
        </article>

        <article class="panel about-dg" data-scene="base">
          <div class="about-dg__head">
            <div>
              <p class="h4">Improve</p>
              <p class="meta">flow, reduce lead time and boost performance</p>
            </div>
            <div class="seg" role="group" aria-label="Model state">
              <button type="button" data-scene-btn="base" aria-pressed="true">Current</button>
              <button type="button" data-scene-btn="scenario" aria-pressed="false">Improved</button>
            </div>
          </div>
          <div class="about-dg__body" data-state="base">
            <svg class="dg" id="about-imp" viewBox="0 0 420 128" role="img" aria-labelledby="about-imp-t">
              <title id="about-imp-t">Four-operation routing with work accumulating at Assembly. In the improved scenario the queue clears. Illustrative model.</title>
              <style>
                [data-state="scenario"] #about-imp-assy{stroke:var(--border-default);stroke-width:1}
                [data-state="scenario"] #about-imp-q2-2,[data-state="scenario"] #about-imp-q2-3,[data-state="scenario"] #about-imp-q2-4,[data-state="scenario"] #about-imp-q2-5{opacity:0}
                @media (prefers-reduced-motion:reduce){#about-imp rect{transition:none}}
              </style>
              <line class="flow flowdots" x1="90" y1="80" x2="134" y2="80" stroke-dasharray="4 8"/>
              <line class="flow flowdots" x1="190" y1="80" x2="234" y2="80" stroke-dasharray="4 8"/>
              <line class="flow flowdots" x1="290" y1="80" x2="334" y2="80" stroke-dasharray="4 8"/>
              <rect class="wc" x="34" y="62" width="56" height="36"/>
              <rect class="unit" x="24" y="76" width="9" height="9"/>
              <text class="dg-micro" x="62" y="116" text-anchor="middle">Milling</text>
              <rect class="wc" x="134" y="62" width="56" height="36"/>
              <rect class="unit" x="124" y="76" width="9" height="9"/>
              <text class="dg-micro" x="162" y="116" text-anchor="middle">Lathe</text>
              <rect class="wc wc--con" id="about-imp-assy" x="234" y="62" width="56" height="36"/>
              <rect class="unit unit--on" id="about-imp-q2-0" x="224" y="76" width="9" height="9" data-u-base="1" data-u-scenario="1" style="transition:opacity 320ms cubic-bezier(0.2,0,0,1)"/>
              <rect class="unit unit--on" id="about-imp-q2-1" x="212" y="76" width="9" height="9" data-u-base="1" data-u-scenario="1" style="transition:opacity 320ms cubic-bezier(0.2,0,0,1)"/>
              <rect class="unit unit--on" id="about-imp-q2-2" x="200" y="76" width="9" height="9" data-u-base="1" data-u-scenario="0" style="transition:opacity 320ms cubic-bezier(0.2,0,0,1)"/>
              <rect class="unit unit--on" id="about-imp-q2-3" x="188" y="76" width="9" height="9" data-u-base="1" data-u-scenario="0" style="transition:opacity 320ms cubic-bezier(0.2,0,0,1)"/>
              <rect class="unit unit--on" id="about-imp-q2-4" x="176" y="76" width="9" height="9" data-u-base="1" data-u-scenario="0" style="transition:opacity 320ms cubic-bezier(0.2,0,0,1)"/>
              <rect class="unit unit--on" id="about-imp-q2-5" x="164" y="76" width="9" height="9" data-u-base="1" data-u-scenario="0" style="transition:opacity 320ms cubic-bezier(0.2,0,0,1)"/>
              <text class="dg-micro" x="262" y="116" text-anchor="middle">Assembly</text>
              <rect class="wc" x="334" y="62" width="56" height="36"/>
              <rect class="unit" x="324" y="76" width="9" height="9" data-u-base="1" data-u-scenario="0" style="transition:opacity 320ms cubic-bezier(0.2,0,0,1)"/>
              <text class="dg-micro" x="362" y="116" text-anchor="middle">Packing</text>
              <line class="flow" x1="184" y1="54" x2="184" y2="32" style="stroke:var(--action-primary)"/>
              <g class="st-b"><text class="dg-accent" x="184" y="24" text-anchor="middle" font-size="12" font-weight="500">Constraint emerging</text></g>
              <g class="st-s"><text class="dg-accent" x="184" y="24" text-anchor="middle" font-size="12" font-weight="500">Queue cleared</text></g>
            </svg>
            <p class="vh" role="status" data-scene-live
               data-msg-base="Current model. Assembly is the emerging constraint, with a growing queue."
               data-msg-scenario="Improved scenario. Load is moved off Assembly and the queue clears."></p>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

<section class="section section--ruled" id="team">
  <div class="wrap">
    <div class="about-team reveal">
      <p class="tr-label u-accent">Our team</p>
      <h2 class="section-title">Decades of Manufacturing Experience</h2>
      <p class="body u-mt6">Trooba was founded by <strong>Raghu Gidda</strong>, an Industrial Engineer with more than two decades of experience across manufacturing, enterprise systems and operational transformation.</p>
      <p class="body about-note u-mt8">Raghu studied Quick Response Manufacturing under Prof. Rajan Suri at the University of Wisconsin&ndash;Madison and has applied these principles in real manufacturing environments.</p>

      <div class="about-result u-mt6">
        <p class="body">In a high-mix jewellery manufacturing operation, redesigning factory flow helped reduce manufacturing lead time from approximately <strong class="u-accent">28 days to 7 days</strong> without adding core production capacity.</p>
      </div>

      <p class="body u-mt8">That experience became the foundation for Trooba.</p>
    </div>

    <hr class="tr-rule about-team__rule">

    <ul class="about-team__grid">
      <li class="reveal">
        <figure class="about-team__photo">
          <div class="about-team__frame">
            <img src="/assets/Team_images/RaghuG.png" alt="Raghu Gidda, founder of Trooba" width="400" height="400">
          </div>
          <figcaption>
            <span class="about-team__name">Raghu Gidda</span>
            <span class="about-team__role">(Founder)</span>
          </figcaption>
        </figure>
      </li>
      <li class="reveal">
        <figure class="about-team__photo">
          <div class="about-team__frame">
            <img src="/assets/Team_images/Vish.png" alt="Vishwanath Srirangam, Chief Technical Architect of Trooba" width="400" height="400">
          </div>
          <figcaption>
            <span class="about-team__name">Vishwanath Srirangam</span>
            <span class="about-team__role">(Chief Technical Architect)</span>
          </figcaption>
        </figure>
      </li>
      <li class="reveal">
        <figure class="about-team__photo">
          <div class="about-team__frame">
            <img src="/assets/Team_images/shakthi.png" alt="Shakti Sharma, Business Development Manager of Trooba" width="400" height="400">
          </div>
          <figcaption>
            <span class="about-team__name">Shakti Sharma</span>
            <span class="about-team__role">(Business Development Manager)</span>
          </figcaption>
        </figure>
      </li>
      <li class="reveal">
        <figure class="about-team__photo">
          <div class="about-team__frame">
            <img src="/assets/Team_images/raviteja.jpeg" alt="Raviteja Vasa, Marketing Manager of Trooba" width="400" height="400">
          </div>
          <figcaption>
            <span class="about-team__name">Raviteja Vasa</span>
            <span class="about-team__role">(Marketing Manager)</span>
          </figcaption>
        </figure>
      </li>
      <li class="reveal">
        <figure class="about-team__photo">
          <div class="about-team__frame">
            <img src="/assets/Team_images/Neeraj.png" alt="Karipe Neeraj Kumar, Lead Technology Engineer of Trooba" width="400" height="400">
          </div>
          <figcaption>
            <span class="about-team__name">Karipe Neeraj Kumar</span>
            <span class="about-team__role">(Lead Technology Engineer)</span>
          </figcaption>
        </figure>
      </li>
      <li class="reveal">
        <figure class="about-team__photo">
          <div class="about-team__frame">
            <img src="/assets/Team_images/Varun.png" alt="Sai Varun Somi Setty, Lead Technology Engineer of Trooba" width="400" height="400">
          </div>
          <figcaption>
            <span class="about-team__name">Sai Varun Somi Setty</span>
            <span class="about-team__role">(Lead Technology Engineer)</span>
          </figcaption>
        </figure>
      </li>
      <li class="reveal">
        <figure class="about-team__photo">
          <div class="about-team__frame">
            <img src="/assets/Team_images/akanksha.jpeg" alt="Guntuku Akanksha, People Operational Manager of Trooba" width="400" height="400">
          </div>
          <figcaption>
            <span class="about-team__name">Guntuku Akanksha</span>
            <span class="about-team__role">(People Operational Manager)</span>
          </figcaption>
        </figure>
      </li>
      <li class="reveal">
        <figure class="about-team__photo">
          <div class="about-team__frame">
            <img src="/assets/Team_images/suraj.png" alt="Suraj D Kammar, IE Specialist of Trooba" width="400" height="400">
          </div>
          <figcaption>
            <span class="about-team__name">SURAJ D KAMMAR</span>
            <span class="about-team__role">(Industrial Engineering Specialist)</span>
          </figcaption>
        </figure>
      </li>
    </ul>
  </div>
</section>

<section class="section section--ruled about-mission">
  <div class="wrap">
    <div class="about-mission__intro reveal">
      <p class="tr-label u-accent">Our mission</p>
      <h2 class="section-title section-title--wide">We believe manufacturers should be able to understand how their factory will behave <span class="u-accent">before</span> they add capacity, increase inventory or change the shop floor.</h2>
      <p class="lead u-mt6">Trooba is building the <strong>Factory Flow Intelligence</strong> layer to make that possible.</p>
    </div>

    <ul class="about-caps">
      <li class="reveal">
        <span class="about-cap__ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.25"/><path d="M12 12 L17 8"/></svg>
        </span>
        <h3>See</h3>
        <p class="body">what&rsquo;s really happening</p>
      </li>
      <li class="reveal">
        <span class="about-cap__ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 12 H8 L10.5 6.5 13.5 17.5 16 12 H20.5"/></svg>
        </span>
        <h3>Predict</h3>
        <p class="body">bottlenecks and delays</p>
      </li>
      <li class="reveal">
        <span class="about-cap__ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5 L19.5 8 v8 L12 20.5 4.5 16 V8 Z"/><path d="M12 3.5 V12 L19.5 8"/><path d="M12 12 L4.5 8"/><path d="M12 12 V20.5"/></svg>
        </span>
        <h3>Simulate</h3>
        <p class="body">scenarios with confidence</p>
      </li>
      <li class="reveal">
        <span class="about-cap__ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12 H7 L10 5.5 14 18.5 17 12 H21"/><path d="M3 12 H21" opacity=".35"/></svg>
        </span>
        <h3>Improve</h3>
        <p class="body">flow and drive better outcomes</p>
      </li>
    </ul>
  </div>
</section>

<section class="section section--ruled">
  <div class="wrap">
    <div class="reveal" style="max-width:52ch">
      <h2 class="section-title">See how work really flows through your factory.</h2>
      <p class="lead u-mt6">Share a small set of factory data and see where queues, bottlenecks and hidden capacity are affecting performance.</p>
      <p class="u-mt10"><a class="btn btn--primary btn--lg" data-primary-cta href="/flow-analysis">Request a Flow Analysis</a></p>
    </div>
  </div>
</section>`;
