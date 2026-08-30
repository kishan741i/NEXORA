/* ==========================================================================
   NEXORA — Global Search (command-center style, local data only)
   ========================================================================== */

(function () {
  let index = [];

  function buildIndex() {
    const d = NEXORA_DATA;
    index = [];

    ['home', 'learn', 'build', 'discover', 'library'].forEach((v) => {
      index.push({ group: 'Pages', label: v[0].toUpperCase() + v.slice(1), icon: 'panel-left', action: () => window.NexoraNav.setActiveView(v) });
    });

    d.projects.forEach((p) => {
      index.push({ group: 'Projects', label: p.name, tag: p.status, icon: 'box', action: () => { window.NexoraNav.setActiveView('build'); } });
    });

    d.library.forEach((f) => {
      index.push({ group: 'Documents', label: f.name, tag: f.type, icon: 'file-text', action: () => { window.NexoraNav.setActiveView('library'); window.NexoraLibrary.openModal(f.name); } });
    });

    d.subjects.forEach((s) => {
      index.push({ group: 'Subjects', label: s.name, icon: 'graduation-cap', action: () => window.NexoraNav.setActiveView('learn') });
    });

    d.discoveries.forEach((disc) => {
      index.push({ group: 'Discoveries', label: disc.title, icon: 'compass', action: () => window.NexoraNav.setActiveView('discover') });
    });

    d.quickLinks.forEach((l) => {
      index.push({ group: 'Links', label: l.name, icon: 'external-link', action: () => window.open(l.url, '_blank', 'noopener,noreferrer') });
    });
  }

  function render(query) {
    const results = document.getElementById('cmdk-results');
    if (!results) return;
    const q = query.trim().toLowerCase();

    const matches = q
      ? index.filter((item) => item.label.toLowerCase().includes(q))
      : index.filter((item) => item.group === 'Pages');

    if (!matches.length) {
      results.innerHTML = `
        <div class="empty-state" style="padding:36px 12px;">
          <div class="icon-wrap">${window.NexoraIcons.render('search-x')}</div>
          <h4>No results</h4>
          <p>Try a different term, or browse the sections directly.</p>
        </div>`;
      return;
    }

    const groups = {};
    matches.slice(0, 40).forEach((m) => {
      groups[m.group] = groups[m.group] || [];
      groups[m.group].push(m);
    });

    results.innerHTML = Object.entries(groups).map(([group, items]) => `
      <div class="cmdk-group-label">${group}</div>
      ${items.map((item, i) => `
        <button type="button" class="cmdk-item" data-idx="${index.indexOf(item)}">
          ${window.NexoraIcons.render(item.icon)}
          <span>${item.label}</span>
          ${item.tag ? `<span class="cmdk-tag">${item.tag}</span>` : ''}
        </button>
      `).join('')}
    `).join('');

    results.querySelectorAll('.cmdk-item').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = index[Number(btn.dataset.idx)];
        window.NexoraModal.close('search-modal');
        if (item && item.action) item.action();
      });
    });
  }

  function open() {
    buildIndex();
    window.NexoraModal.open('search-modal');
    const input = document.getElementById('cmdk-input');
    if (input) { input.value = ''; render(''); }
  }

  function initSearch() {
    document.querySelectorAll('[data-open-search]').forEach((btn) => {
      btn.addEventListener('click', open);
    });

    const input = document.getElementById('cmdk-input');
    if (input) input.addEventListener('input', () => render(input.value));

    window.addEventListener('keydown', (e) => {
      const isK = e.key === 'k' || e.key === 'K';
      if ((e.metaKey || e.ctrlKey) && isK) {
        e.preventDefault();
        open();
      }
    });
  }

  window.NexoraSearch = { init: initSearch, open };
})();
