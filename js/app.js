/* ==========================================================================
   NEXORA — App
   Particle background, hero signature visual, remaining static renders
   (subjects, quick links, activity, notice, stats), and boot sequence.
   ========================================================================== */

(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- Particle field (ambient background) ---------------- */
  function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let running = !reduceMotion;
    let w, h;

    function resize() {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    }

    function seed() {
      const count = window.innerWidth < 700 ? 26 : 54;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.12 * devicePixelRatio,
        r: (Math.random() * 1.4 + 0.6) * devicePixelRatio,
      }));
    }

    function step() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      const linkDist = 140 * devicePixelRatio;

      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(140, 170, 220, 0.35)';
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(100, 150, 220, ${0.12 * (1 - dist / linkDist)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(step);
    }

    resize();
    seed();
    if (running) requestAnimationFrame(step);

    window.addEventListener('resize', () => { resize(); seed(); });
    document.addEventListener('visibilitychange', () => {
      const shouldRun = !document.hidden && !reduceMotion;
      if (shouldRun && !running) { running = true; requestAnimationFrame(step); }
      running = shouldRun;
    });
  }

  /* ---------------- Hero signature visual: orbiting node graph ---------------- */
  function initHeroVisual() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let angle = 0;
    let running = !reduceMotion;

    function size() {
      const s = canvas.offsetWidth * devicePixelRatio;
      canvas.width = s; canvas.height = s;
    }
    size();
    window.addEventListener('resize', size);

    const nodes = [
      { r: 0.0, a: 0, s: 5.5 },
      { r: 0.32, a: 0.4, s: 3.2 },
      { r: 0.32, a: 2.6, s: 3.2 },
      { r: 0.32, a: 4.6, s: 3.2 },
      { r: 0.46, a: 1.4, s: 2.4 },
      { r: 0.46, a: 3.6, s: 2.4 },
    ];

    function draw() {
      const w = canvas.width, h = canvas.height;
      const cx = w / 2, cy = h / 2;
      const scale = Math.min(w, h) / 2;
      ctx.clearRect(0, 0, w, h);

      const pts = nodes.map((n) => ({
        x: cx + Math.cos(n.a + angle) * n.r * scale,
        y: cy + Math.sin(n.a + angle) * n.r * scale,
        s: n.s * devicePixelRatio,
      }));

      // connections
      ctx.lineWidth = 1 * devicePixelRatio;
      for (let i = 1; i < pts.length; i++) {
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        ctx.lineTo(pts[i].x, pts[i].y);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
        ctx.stroke();
      }
      for (let i = 1; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          if (Math.sqrt(dx * dx + dy * dy) < scale * 0.6) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = 'rgba(167, 139, 250, 0.12)';
            ctx.stroke();
          }
        }
      }

      // nodes
      pts.forEach((p, i) => {
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.s * 3);
        grad.addColorStop(0, i === 0 ? 'rgba(34,211,238,0.9)' : 'rgba(56,189,248,0.8)');
        grad.addColorStop(1, 'rgba(56,189,248,0)');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fillStyle = i === 0 ? '#22d3ee' : '#e6f7ff';
        ctx.fill();
      });

      if (running) angle += 0.0022;
      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
    document.addEventListener('visibilitychange', () => { running = !document.hidden && !reduceMotion; });
  }

  /* ---------------- Static-ish dashboard content ---------------- */
  function renderSubjects() {
    const el = document.getElementById('subjects-row');
    if (!el) return;
    el.innerHTML = NEXORA_DATA.subjects.map((s) => `
      <div class="subject-card glass">
        <div class="subject-icon">${window.NexoraIcons.render(s.icon)}</div>
        <h4>${s.name}</h4>
        <div class="subject-meta"><span>${s.resources} resources</span><span>${s.progress}%</span></div>
        <div class="subject-progress"><div class="subject-progress-fill" style="width:${s.progress}%"></div></div>
      </div>
    `).join('');
    window.NexoraIcons.hydrate();
  }

  function renderLearnGrid() {
    const el = document.getElementById('learn-subjects-grid');
    if (!el) return;
    el.innerHTML = NEXORA_DATA.subjects.map((s) => `
      <div class="subject-card glass" style="min-height:150px;">
        <div class="subject-icon">${window.NexoraIcons.render(s.icon)}</div>
        <h4>${s.name}</h4>
        <div class="subject-meta"><span>${s.resources} resources</span><span>${s.progress}% complete</span></div>
        <div class="subject-progress"><div class="subject-progress-fill" style="width:${s.progress}%"></div></div>
      </div>
    `).join('');
    window.NexoraIcons.hydrate();
  }

  function renderQuickLinks() {
    const el = document.getElementById('quicklinks-list');
    if (!el) return;
    el.innerHTML = NEXORA_DATA.quickLinks.map((l) => `
      <a class="quicklink" href="${l.url}" target="_blank" rel="noopener noreferrer">
        <div class="quicklink-icon">${window.NexoraIcons.render(l.icon)}</div>
        <div class="quicklink-text">
          <div class="name">${l.name}</div>
          <div class="desc">${l.description}</div>
        </div>
        <span class="arrow">${window.NexoraIcons.render('arrow-up-right')}</span>
      </a>
    `).join('');
    window.NexoraIcons.hydrate();
  }

  function renderActivity() {
    const el = document.getElementById('activity-list');
    if (!el) return;
    el.innerHTML = NEXORA_DATA.activities.map((a) => `
      <div class="activity-item">
        <span class="activity-dot"></span>
        <div>
          <div class="activity-text">${a.text}</div>
          <div class="activity-time">${a.time}</div>
        </div>
      </div>
    `).join('');
  }

  function renderNotice() {
    const el = document.getElementById('system-notice');
    if (!el || !NEXORA_DATA.notice.active) return;
    el.innerHTML = `
      <span class="icon">${window.NexoraIcons.render('triangle-alert')}</span>
      <div class="notice-body">
        <div class="notice-title">${NEXORA_DATA.notice.title.toUpperCase()}</div>
        <div class="notice-text">${NEXORA_DATA.notice.text}</div>
      </div>
      <button type="button" class="notice-dismiss" aria-label="Dismiss notice">${window.NexoraIcons.render('x')}</button>
    `;
    el.style.display = 'flex';
    el.querySelector('.notice-dismiss').addEventListener('click', () => { el.style.display = 'none'; });
    window.NexoraIcons.hydrate();
  }

  function animateCount(el, target) {
    if (reduceMotion) { el.textContent = target.toLocaleString(); return; }
    const start = 0;
    const duration = 900;
    const t0 = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(start + (target - start) * eased).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function renderStats() {
    const s = NEXORA_DATA.stats;
    document.querySelectorAll('[data-stat="visitors"]').forEach((el) => animateCount(el, s.visitors));
    document.querySelectorAll('[data-stat="projects"]').forEach((el) => animateCount(el, s.projects));
    document.querySelectorAll('[data-stat="documents"]').forEach((el) => animateCount(el, s.documents));
    document.querySelectorAll('[data-stat="version"]').forEach((el) => { el.textContent = s.version; });
  }

  /* ---------------- Boot ---------------- */
  function boot() {
    window.NexoraTheme.init();
    window.NexoraNav.init();
    window.NexoraModal.init();
    initParticles();
    initHeroVisual();
    renderSubjects();
    renderLearnGrid();
    renderQuickLinks();
    renderActivity();
    renderNotice();
    renderStats();
    window.NexoraProjects.init();
    window.NexoraLibrary.init();
    window.NexoraDiscover.init();
    window.NexoraSearch.init();
    window.NexoraIcons.hydrate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
