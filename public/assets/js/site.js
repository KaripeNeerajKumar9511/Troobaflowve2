/* ============================================================================
   TROOBA.COM — behaviour
   No framework, no animation library. Three jobs:
     1. Navigation: shrink on scroll, mobile drawer.
     2. Reveal: one 8px fade per section, once, respecting reduced motion.
     3. Scenario state: swap a diagram and its measured values between the
        current model and a tested scenario.
   Everything degrades: with JavaScript off, every page renders complete and
   every diagram shows its baseline state.
   ============================================================================ */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -- 1. Navigation ------------------------------------------------------ */
  var nav = document.querySelector('[data-nav]');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    var toggle = nav.querySelector('[data-nav-toggle]');
    var drawer = nav.querySelector('[data-nav-drawer]');
    if (toggle && drawer) {
      toggle.addEventListener('click', function () {
        var open = drawer.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      });
      drawer.addEventListener('click', function (e) {
        if (e.target.closest('a')) {
          drawer.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
          drawer.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.focus();
        }
      });
    }
  }

  /* -- 1b. One primary action in view ------------------------------------- */
  /* While the page's own teal button is visible the navigation CTA is a quiet
     link. When it scrolls out of view the navigation takes over. */
  if (nav) {
    var ctas = document.querySelectorAll('[data-primary-cta]');
    if (!ctas.length) {
      nav.classList.remove('has-page-cta');
    } else if (!('IntersectionObserver' in window)) {
      nav.classList.remove('has-page-cta');
    } else {
      var onScreen = [];
      var ctaObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          var i = onScreen.indexOf(e.target);
          if (e.isIntersecting && i === -1) onScreen.push(e.target);
          if (!e.isIntersecting && i !== -1) onScreen.splice(i, 1);
        });
        nav.classList.toggle('has-page-cta', onScreen.length > 0);
      }, { threshold: 0 });
      ctas.forEach(function (el) { ctaObserver.observe(el); });
      nav.classList.add('has-page-cta');
    }
  }

  /* -- 2. Reveal ---------------------------------------------------------- */
  var targets = document.querySelectorAll('.reveal');
  if (!targets.length) { /* nothing */ }
  else if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* -- 3. Scenario state -------------------------------------------------- */
  /* A [data-scene] region holds:
       [data-scene-btn="base|scenario"]  segmented control
       [data-state]                      diagrams that swap layers
       [data-v-base][data-v-scenario]    measured values that swap text     */
  document.querySelectorAll('[data-scene]').forEach(function (scene) {
    var buttons = scene.querySelectorAll('[data-scene-btn]');

    function apply(state) {
      scene.setAttribute('data-scene', state);
      buttons.forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-scene-btn') === state));
      });
      scene.querySelectorAll('[data-state]').forEach(function (d) {
        d.setAttribute('data-state', state);
      });
      scene.querySelectorAll('[data-v-base]').forEach(function (v) {
        var next = state === 'scenario' ? v.getAttribute('data-v-scenario')
                                        : v.getAttribute('data-v-base');
        if (next !== null && v.textContent !== next) v.textContent = next;
      });
      scene.querySelectorAll('[data-on-scenario]').forEach(function (v) {
        v.classList.toggle('metric__v--on', state === 'scenario');
      });
      /* Narrow-viewport diagrams: bar widths and queue units are attributes,
         not text, so they swap here too. */
      scene.querySelectorAll('[data-w-base]').forEach(function (el) {
        el.style.width = el.getAttribute(
          state === 'scenario' ? 'data-w-scenario' : 'data-w-base') + '%';
      });
      scene.querySelectorAll('[data-u-base]').forEach(function (el) {
        el.style.opacity = el.getAttribute(
          state === 'scenario' ? 'data-u-scenario' : 'data-u-base');
      });
      var live = scene.querySelector('[data-scene-live]');
      if (live) {
        live.textContent = live.getAttribute(
          state === 'scenario' ? 'data-msg-scenario' : 'data-msg-base'
        ) || '';
      }
    }

    buttons.forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-scene-btn')); });
    });

    apply(scene.getAttribute('data-scene') || 'base');
  });

  /* -- 3b. Product tabs --------------------------------------------------- */
  /* Capabilities are shown, not listed. The tab strip swaps the product view
     beneath it. Full keyboard support: arrows, Home and End. */
  document.querySelectorAll('[data-tabs]').forEach(function (group) {
    var buttons = [].slice.call(group.querySelectorAll('[data-tab-btn]'));
    var panels = [].slice.call(group.querySelectorAll('[data-tab-panel]'));

    function select(id, focus) {
      buttons.forEach(function (b) {
        var on = b.getAttribute('data-tab-btn') === id;
        b.setAttribute('aria-selected', String(on));
        b.tabIndex = on ? 0 : -1;
        if (on && focus) b.focus();
      });
      panels.forEach(function (p) {
        p.hidden = p.getAttribute('data-tab-panel') !== id;
      });
    }

    buttons.forEach(function (b, i) {
      b.addEventListener('click', function () { select(b.getAttribute('data-tab-btn')); });
      b.addEventListener('keydown', function (e) {
        var next = null;
        if (e.key === 'ArrowRight') next = (i + 1) % buttons.length;
        else if (e.key === 'ArrowLeft') next = (i - 1 + buttons.length) % buttons.length;
        else if (e.key === 'Home') next = 0;
        else if (e.key === 'End') next = buttons.length - 1;
        if (next === null) return;
        e.preventDefault();
        select(buttons[next].getAttribute('data-tab-btn'), true);
      });
    });
  });

  /* -- 4. Flow-analysis form ---------------------------------------------
     Real submission. The endpoint is the form's own `action` attribute — that
     is the single place to configure it. Any service that accepts a POST works
     (Formspree, Basin, Netlify Forms, a Lambda, your own handler).

     If the action has not been configured, the form does NOT pretend to
     succeed. It falls back to opening a pre-filled email to hello@trooba.com,
     which is a real delivery path, and says so.                             */

  var FALLBACK_EMAIL = 'hello@trooba.com';

  var form = document.querySelector('[data-flow-form]');
  if (form) {
    var submitBtn = form.querySelector('[data-form-submit]');
    var errorBox = form.querySelector('[data-form-error]');
    var done = document.querySelector('[data-form-done]');
    var sending = false;

    function fieldError(input, message) {
      var box = input.getAttribute('aria-describedby');
      var el = box && document.getElementById(box.split(' ').pop());
      if (!el || !el.classList.contains('err')) return;
      el.textContent = message || '';
      el.hidden = !message;
      input.setAttribute('aria-invalid', message ? 'true' : 'false');
    }

    function validate() {
      var firstBad = null;
      [].forEach.call(form.elements, function (el) {
        if (!el.name || el.type === 'submit') return;
        var msg = '';
        if (el.required && !el.value.trim()) {
          msg = 'This one is needed.';
        } else if (el.type === 'email' && el.value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(el.value)) {
          msg = 'That does not look like an email address.';
        }
        fieldError(el, msg);
        if (msg && !firstBad) firstBad = el;
      });
      if (firstBad) firstBad.focus();
      return !firstBad;
    }

    [].forEach.call(form.elements, function (el) {
      if (!el.name) return;
      el.addEventListener('input', function () {
        if (el.getAttribute('aria-invalid') === 'true') fieldError(el, '');
      });
    });

    function showError(message) {
      if (!errorBox) return;
      errorBox.textContent = message;
      errorBox.hidden = false;
    }

    function succeed() {
      form.hidden = true;
      var intro = document.querySelector('[data-form-intro]');
      if (intro) intro.hidden = true;
      if (done) {
        done.hidden = false;
        done.setAttribute('tabindex', '-1');
        done.focus();
      }
    }

    function mailtoFallback(data) {
      var body = Object.keys(data).map(function (k) {
        return k.charAt(0).toUpperCase() + k.slice(1) + ': ' + data[k];
      }).join('\n');
      window.location.href = 'mailto:' + FALLBACK_EMAIL +
        '?subject=' + encodeURIComponent('Flow Analysis request — ' + (data.company || '')) +
        '&body=' + encodeURIComponent(body);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (sending) return;                       /* no double submission */
      if (errorBox) errorBox.hidden = true;
      if (!validate()) return;

      var data = {};
      [].forEach.call(form.elements, function (el) {
        if (el.name) data[el.name] = el.value.trim();
      });

      var action = form.getAttribute('action') || '';
      if (!action || action.indexOf('YOUR-FORM-ID') !== -1) {
        /* Not configured. Hand the data to the person rather than drop it. */
        showError('Opening your email client — the form endpoint is not connected yet.');
        mailtoFallback(data);
        return;
      }

      sending = true;
      submitBtn.disabled = true;
      var label = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';

      fetch(action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      }).then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        succeed();
      }).catch(function () {
        sending = false;
        submitBtn.disabled = false;
        submitBtn.textContent = label;
        showError('That did not send. Please try again, or email ' + FALLBACK_EMAIL + ' directly.');
      });
    });
  }
})();
