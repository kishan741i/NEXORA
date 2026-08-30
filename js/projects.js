/* ==========================================================================
   NEXORA — Projects (Build)
   ========================================================================== */

(function () {
  function statusLabel(status) {
    return { live: 'LIVE', active: 'ACTIVE', development: 'DEVELOPMENT', archived: 'ARCHIVED' }[status] || status.toUpperCase();
  }

  function cardHtml(p) {
    return `
      <article class="project-card glass">
        <div class="project-top">
          <div>
            <div class="project-title">${p.name}</div>
            <div class="project-updated">Updated ${p.updated}</div>
          </div>
          <span class="status-pill" data-status="${p.status}"><span class="dot"></span>${statusLabel(p.status)}</span>
        </div>
        <p class="project-desc">${p.description}</p>
        <div class="tech-tags">${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}</div>
        <div class="project-foot">
          ${p.github ? `<a class="btn btn-ghost" href="${p.github}" target="_blank" rel="noopener noreferrer">${window.NexoraIcons.render('github')}Code</a>` : ''}
          ${p.demo ? `<button type="button" class="btn btn-primary" data-demo="${p.id}">${window.NexoraIcons.render('play')}Live Demo</button>` : `<button type="button" class="btn btn-ghost" disabled style="opacity:.5;cursor:default;">${window.NexoraIcons.render('hammer')}In Progress</button>`}
        </div>
      </article>`;
  }

  function renderInto(el, list) {
    if (!list.length) {
      el.innerHTML = `
        <div class="empty-state">
          <div class="icon-wrap">${window.NexoraIcons.render('folder-x')}</div>
          <h4>No projects found</h4>
          <p>Try a different filter to see more of the build history.</p>
        </div>`;
      window.NexoraIcons.hydrate();
      return;
    }
    el.innerHTML = `<div class="grid-cards stagger">${list.map(cardHtml).join('')}</div>`;
    wireDemoButtons(el);
    window.NexoraIcons.hydrate();
  }

  function wireDemoButtons(scope) {
    scope.querySelectorAll('[data-demo]').forEach((btn) => {
      btn.addEventListener('click', () => openDemo(btn.dataset.demo));
    });
  }

  function openDemo(projectId) {
    const project = NEXORA_DATA.projects.find((p) => p.id === projectId);
    if (!project || !project.demo) return;

    document.getElementById('demo-title').textContent = `Live Demo: ${project.name}`;
    const frameWrap = document.getElementById('demo-frame-wrap');
    frameWrap.innerHTML = `<iframe src="${project.demo}" title="${project.name} live demo" loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>`;

    window.NexoraModal.open('demo-modal');

    const iframe = frameWrap.querySelector('iframe');
    const fallbackTimer = setTimeout(() => showDemoFallback(project), 4000);
    iframe.addEventListener('load', () => clearTimeout(fallbackTimer));
    iframe.addEventListener('error', () => { clearTimeout(fallbackTimer); showDemoFallback(project); });
  }

  function showDemoFallback(project) {
    const frameWrap = document.getElementById('demo-frame-wrap');
    if (!frameWrap.querySelector('iframe')) return;
    frameWrap.innerHTML = `
      <div class="demo-fallback">
        <div class="icon-wrap">${window.NexoraIcons.render('shield-alert')}</div>
        <h4>Preview unavailable</h4>
        <p>This site doesn't allow embedded previews. Open it directly in a new tab instead.</p>
        <a class="btn btn-primary" href="${project.demo}" target="_blank" rel="noopener noreferrer">${window.NexoraIcons.render('external-link')}Open in New Tab</a>
      </div>`;
    window.NexoraIcons.hydrate();
  }

  function initHomeProjects() {
    const el = document.getElementById('home-projects');
    if (el) renderInto(el, NEXORA_DATA.projects.slice(0, 3));
  }

  function initBuildView() {
    const grid = document.getElementById('build-grid');
    const chipRow = document.getElementById('build-filters');
    if (!grid || !chipRow) return;

    const categories = ['All', ...new Set(NEXORA_DATA.projects.map((p) => p.category))];
    chipRow.innerHTML = categories.map((c, i) => `<button type="button" class="chip ${i === 0 ? 'is-active' : ''}" data-filter="${c}">${c}</button>`).join('');

    renderInto(grid, NEXORA_DATA.projects);

    chipRow.querySelectorAll('.chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        chipRow.querySelectorAll('.chip').forEach((c) => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        const f = chip.dataset.filter;
        const filtered = f === 'All' ? NEXORA_DATA.projects : NEXORA_DATA.projects.filter((p) => p.category === f);
        renderInto(grid, filtered);
      });
    });
  }

  function init() {
    initHomeProjects();
    initBuildView();

    document.getElementById('demo-close-btn')?.addEventListener('click', () => {
      document.getElementById('demo-frame-wrap').innerHTML = '';
    });
    document.addEventListener('nexora:escape', () => {
      document.getElementById('demo-frame-wrap').innerHTML = '';
    });
  }

  window.NexoraProjects = { init, openDemo };
})();
