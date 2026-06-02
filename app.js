/* ============================================================
   Volina landing — interactions
   ============================================================ */

(() => {
  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach((el, i) => {
      // Stagger small groups
      el.style.transitionDelay = Math.min(i % 6, 5) * 60 + 'ms';
      io.observe(el);
    });
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  /* ---------- Nav elevation on scroll ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 16) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Number count-up ---------- */
  const counters = document.querySelectorAll('.numbers__big, .problem__num.count, [data-n]');
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.n || '0');
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const start = performance.now();
      const dur = 1600;
      const easeOut = (t) => 1 - Math.pow(1 - t, 3);
      const tick = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const v = target * easeOut(t);
        const formatted = target >= 1000
          ? Math.round(v).toLocaleString('tr-TR')
          : (target % 1 === 0 ? Math.round(v) : v.toFixed(1));
        el.textContent = prefix + formatted + suffix;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countIO.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach((c) => countIO.observe(c));

  /* ---------- Call simulator ---------- */
  const callScript = [
    { who: 'Volina', kind: 'agent', t: 3,  text: 'Merhaba, ben İstanbul\'daki **** Diş Kliniği\'nden Sarah. Bugün nasılsınız?', signals: { persona: 'okunuyor…', intent: 0 } },
    { who: 'Lead',  kind: 'lead',  t: 8,  text: 'Evet, iyiyim. Sen nasılsın?', signals: { persona: 'okunuyor…', intent: 18 } },
    { who: 'Volina', kind: 'agent', t: 13, text: 'İyiyim, teşekkür ederim. Türkiye\'de diş tedavisine olan ilginiz için buradayım. Tatil ile birleştirip paranızın karşılığını iki kat almak için hâlâ araştırma yapıyor musunuz?', signals: { persona: 'temkinli', intent: 28 } },
    { who: 'Lead',  kind: 'lead',  t: 22, text: 'Belki bir noktada. Şu anda değil.', signals: { persona: 'temkinli', intent: 42 } },
    { who: 'Volina', kind: 'agent', t: 28, text: 'Tamamen mantıklı, ama burada aynı tedaviyi yarı fiyatına alabilir ve üzerine bir tatil ekleyebilirsiniz. Açıklamam için sadece 1 dakika daha değer mi?', signals: { persona: 'temkinli', intent: 54 } },
    { who: 'Lead',  kind: 'lead',  t: 36, text: 'Mhmmm, olabilir.', signals: { persona: 'temkinli · meraklı', intent: 66 } },
    { who: 'Volina', kind: 'agent', t: 42, text: 'Çoğu hasta kendi ülkesine kıyasla yaklaşık yarı fiyatına tasarruf ediyor. Paketlerimiz tedavi, otel ve özel transferi kapsıyor; çoğu tedavi birkaç gün içinde tamamlanıyor. Ekibimizle 15 dakikalık bir görüşme ayarlamamı ister misiniz?', signals: { persona: 'temkinli · meraklı', intent: 78 } },
    { who: 'Lead',  kind: 'lead',  t: 54, text: 'Evet. Tamam.', signals: { persona: 'temkinli · meraklı', intent: 86 } },
    { who: 'Volina', kind: 'agent', t: 58, text: 'Harika. Hangi gün sizin için en uygun?', signals: { persona: 'temkinli · meraklı', intent: 86 } },
    { who: 'Lead',  kind: 'lead',  t: 63, text: 'Çarşamba akşama doğru.', signals: { persona: 'temkinli · meraklı', intent: 90 } },
    { who: 'Volina', kind: 'agent', t: 70, text: 'Harika. Görüşmeniz çarşamba akşamı için ayarlandı. Ekibimiz size programı onaylamak için ulaşacak. İyi günler.', signals: { persona: 'temkinli · meraklı', intent: 92 } },
    { who: 'Sistem', kind: 'sys',  t: 78, text: '→ Görüşme çarşamba akşamı için planlandı. CRM\'e kaydedildi, ekip bilgilendirildi.', signals: { persona: 'temkinli · meraklı', intent: 92, decision: 'görüşmeye yönlendir' } },
  ];

  const playBtn = document.getElementById('playBtn');
  const resetBtn = document.getElementById('resetBtn');
  const playLabel = document.getElementById('playLabel');
  const playIcon = document.getElementById('playIcon');
  const callLines = document.getElementById('callLines');
  const callClock = document.getElementById('callClock');
  const waves = document.getElementById('waves');
  const sigPersona = document.getElementById('sigPersona');
  const sigBar = document.getElementById('sigBar');
  const sigPct = document.getElementById('sigPct');
  const sigDecision = document.getElementById('sigDecision');

  let playing = false;
  let timers = [];
  let clockTimer = null;
  let elapsed = 0;
  let cursor = 0;

  const fmtClock = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const renderLine = (item) => {
    const div = document.createElement('div');
    div.className = `line line--${item.kind}`;
    div.innerHTML = `
      <div>
        <div class="line__who">${item.who}</div>
        <div class="line__time">${fmtClock(item.t)}</div>
      </div>
      <div class="line__body">${item.text}</div>
    `;
    callLines.appendChild(div);
    requestAnimationFrame(() => div.classList.add('is-in'));
  };

  const applySignals = (s) => {
    if (s.persona !== undefined) sigPersona.textContent = s.persona;
    if (s.intent !== undefined) {
      sigBar.style.width = s.intent + '%';
      sigPct.textContent = s.intent;
    }
    if (s.decision !== undefined) {
      sigDecision.textContent = s.decision;
      sigDecision.style.color = 'var(--accent)';
    }
  };

  const reset = () => {
    timers.forEach(clearTimeout);
    timers = [];
    clearInterval(clockTimer);
    clockTimer = null;
    playing = false;
    elapsed = 0;
    cursor = 0;
    callLines.innerHTML = '';
    callClock && (callClock.textContent = '00:00');
    sigPersona.textContent = '—';
    sigBar.style.width = '0%';
    sigPct.textContent = '0';
    sigDecision.textContent = '— bekliyor';
    sigDecision.style.color = '';
    waves.classList.remove('is-active');
    playIcon.innerHTML = '<path d="M5 3.5v9l8-4.5-8-4.5z" fill="currentColor"/>';
    playLabel.textContent = 'Aramayı dinle';
  };

  const stop = () => {
    timers.forEach(clearTimeout);
    timers = [];
    clearInterval(clockTimer);
    clockTimer = null;
    playing = false;
    waves.classList.remove('is-active');
    playIcon.innerHTML = '<path d="M5 3.5v9l8-4.5-8-4.5z" fill="currentColor"/>';
    playLabel.textContent = cursor >= callScript.length ? 'Tekrar oynat' : 'Devam et';
  };

  const play = () => {
    if (playing) { stop(); return; }
    if (cursor >= callScript.length) { reset(); }
    playing = true;
    waves.classList.add('is-active');
    playIcon.innerHTML = '<rect x="4" y="3" width="3" height="10" fill="currentColor"/><rect x="9" y="3" width="3" height="10" fill="currentColor"/>';
    playLabel.textContent = 'Duraklat';

    // Clock
    clockTimer = setInterval(() => {
      elapsed += 1;
      callClock && (callClock.textContent = fmtClock(elapsed));
    }, 1000);

    const stepDelay = 1500; // ms between bubbles (compressed real time)
    for (let i = cursor; i < callScript.length; i++) {
      const item = callScript[i];
      const idx = i;
      const tm = setTimeout(() => {
        renderLine(item);
        applySignals(item.signals);
        cursor = idx + 1;
        if (cursor >= callScript.length) {
          setTimeout(() => stop(), 1500);
        }
      }, (i - cursor) * stepDelay + 400);
      timers.push(tm);
    }
  };

  if (playBtn) playBtn.addEventListener('click', play);
  if (resetBtn) resetBtn.addEventListener('click', reset);

  /* ---------- FAQ: only one open at a time ---------- */
  const faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach((it) => {
    it.addEventListener('toggle', () => {
      if (it.open) {
        faqItems.forEach((other) => { if (other !== it) other.open = false; });
      }
    });
  });

  /* ---------- Tweaks panel ---------- */
  const tweaksEl = document.getElementById('tweaks');
  const tweaksClose = document.getElementById('tweaksClose');
  const defaultsScript = document.getElementById('__tweak_defaults');

  const parseDefaults = () => {
    const raw = defaultsScript.textContent
      .replace(/\/\*EDITMODE-BEGIN\*\//, '')
      .replace(/\/\*EDITMODE-END\*\//, '');
    try { return JSON.parse(raw); } catch { return {}; }
  };

  const heroTitleEl = document.querySelector('.hero__title');
  const headlines = {
    default: heroTitleEl ? heroTitleEl.innerHTML.trim() : 'Eski leadlerini<br>gelire dönüştür',
    dead:    'Lead\'in <em>ölmedi.</em><br>Sadece uyuyor — şimdi uyandır.',
    paid:    'Reklamına ödedin.<br><em>Aramadın bile.</em>',
  };

  const applyTweaks = (t) => {
    document.documentElement.dataset.font = t.font || 'sans';
    document.documentElement.dataset.density = t.density || 'airy';
    document.documentElement.style.setProperty('--accent', t.accent || '#E8623F');

    // Headline
    const title = document.querySelector('.hero__title');
    if (title && headlines[t.headline]) {
      title.innerHTML = headlines[t.headline];
    }

    // Update tweak panel button states
    document.querySelectorAll('#tHeadline button').forEach(b => b.classList.toggle('is-on', b.dataset.val === t.headline));
    document.querySelectorAll('#tAccent button').forEach(b => b.classList.toggle('is-on', b.dataset.val === t.accent));
    document.querySelectorAll('#tFont button').forEach(b => b.classList.toggle('is-on', b.dataset.val === t.font));
    document.querySelectorAll('#tDensity button').forEach(b => b.classList.toggle('is-on', b.dataset.val === t.density));
  };

  let state = parseDefaults();
  applyTweaks(state);

  const setTweak = (key, val) => {
    state = { ...state, [key]: val };
    applyTweaks(state);
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: val } }, '*');
    } catch (e) {}
  };

  const wireGroup = (selector, key) => {
    document.querySelectorAll(`${selector} button`).forEach((b) => {
      b.addEventListener('click', () => setTweak(key, b.dataset.val));
    });
  };
  wireGroup('#tHeadline', 'headline');
  wireGroup('#tAccent', 'accent');
  wireGroup('#tFont', 'font');
  wireGroup('#tDensity', 'density');

  // Edit mode protocol
  window.addEventListener('message', (e) => {
    if (!e.data || typeof e.data !== 'object') return;
    if (e.data.type === '__activate_edit_mode') {
      tweaksEl.hidden = false;
    } else if (e.data.type === '__deactivate_edit_mode') {
      tweaksEl.hidden = true;
    }
  });
  try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}

  if (tweaksClose) {
    tweaksClose.addEventListener('click', () => {
      tweaksEl.hidden = true;
      try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch (e) {}
    });
  }

  /* ---------- FAQ slide-open/close ---------- */
  document.querySelectorAll('.faq__item').forEach((d) => {
    const summary = d.querySelector('summary');
    const body = d.querySelector('p');
    if (!summary || !body) return;

    const DUR = 320;
    const easing = 'cubic-bezier(.2,.7,.2,1)';
    let anim = null;

    const expand = () => {
      d.setAttribute('open', '');
      if (anim) anim.cancel();
      const h = body.scrollHeight;
      body.style.overflow = 'hidden';
      anim = body.animate(
        [
          { height: '0px', opacity: 0, marginTop: '0px' },
          { height: h + 'px', opacity: 1, marginTop: getComputedStyle(body).marginTop }
        ],
        { duration: DUR, easing, fill: 'forwards' }
      );
      anim.onfinish = () => { body.style.overflow = ''; body.style.height = ''; body.style.opacity = ''; body.style.marginTop = ''; anim = null; };
    };

    const collapse = () => {
      if (anim) anim.cancel();
      const h = body.scrollHeight;
      body.style.overflow = 'hidden';
      d.classList.add('is-closing');
      anim = body.animate(
        [
          { height: h + 'px', opacity: 1, marginTop: getComputedStyle(body).marginTop },
          { height: '0px', opacity: 0, marginTop: '0px' }
        ],
        { duration: DUR, easing, fill: 'forwards' }
      );
      anim.onfinish = () => {
        d.removeAttribute('open');
        d.classList.remove('is-closing');
        body.style.overflow = '';
        body.style.height = '';
        body.style.opacity = '';
        body.style.marginTop = '';
        anim = null;
      };
    };

    summary.addEventListener('click', (e) => {
      e.preventDefault();
      if (d.hasAttribute('open')) collapse();
      else expand();
    });
  });
})();
