/* ==========================================================================
   NEXORA — E-Library
   ========================================================================== */

(function () {
  let activeFilter = 'all';
  let activeQuery = '';

  function cardHtml(f) {
    const driveUrl = f.fileUrl || NEXORA_DATA.drive[f.category] || NEXORA_DATA.drive.all;
    return `
      <div class="lib-card">
        <div class="lib-icon" data-type="${f.category}">${f.type}</div>
        <div class="lib-info">
          <div class="name">${f.name}</div>
          <div class="meta">${f.subject} · Semester ${f.semester}</div>
        </div>
        <div class="lib-actions">
          <a class="btn-icon" href="${driveUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open ${f.name} in Drive" title="Open in Drive">${window.NexoraIcons.render('folder-open')}</a>
        </div>
      </div>`;
  }

  function getFiltered() {
    const q = activeQuery.trim().toLowerCase();
    return NEXORA_DATA.library.filter((f) => {
      const matchesFilter = activeFilter === 'all' || f.category === activeFilter;
      const matchesQuery = !q || [f.name, f.subject, f.type, f.category].join(' ').toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }

  function renderResults() {
    const results = document.getElementById('lib-results');
    const count = document.getElementById('lib-count');
    if (!results) return;

    const files = getFiltered();
    if (count) count.textContent = `${files.length} FILE${files.length === 1 ? '' : 'S'}`;

    if (!files.length) {
      results.innerHTML = `
        <div class="empty-state">
          <div class="icon-wrap">${window.NexoraIcons.render('search-x')}</div>
          <h4>No resources found</h4>
          <p>Try a different search term or clear your filters.</p>
          <button type="button" class="btn btn-ghost" id="lib-clear-btn" style="margin-top:6px;">Clear filters</button>
        </div>`;
      document.getElementById('lib-clear-btn')?.addEventListener('click', clearFilters);
      window.NexoraIcons.hydrate();
      return;
    }

    results.innerHTML = files.map(cardHtml).join('');
    window.NexoraIcons.hydrate();
  }

  function clearFilters() {
    activeFilter = 'all';
    activeQuery = '';
    const input = document.getElementById('lib-search-input');
    if (input) input.value = '';
    document.querySelectorAll('#lib-filters .chip').forEach((c) => c.classList.toggle('is-active', c.dataset.filter === 'all'));
    renderResults();
  }

  function renderHomeSnapshot() {
    const el = document.getElementById('home-library');
    if (!el) return;
    el.innerHTML = NEXORA_DATA.library.slice(0, 7).map(cardHtml).join('');
    window.NexoraIcons.hydrate();
  }

  function openModal(prefillQuery) {
    activeQuery = prefillQuery || '';
    const input = document.getElementById('lib-search-input');
    if (input) input.value = activeQuery;
    window.NexoraModal.open('library-modal');
    renderResults();
  }

  function init() {
    const filters = ['all', 'pdf', 'doc', 'code', 'image'];
    const chipRow = document.getElementById('lib-filters');
    if (chipRow) {
      chipRow.innerHTML = filters.map((f, i) => `<button type="button" class="chip ${i === 0 ? 'is-active' : ''}" data-filter="${f}">${f.toUpperCase()}</button>`).join('');
      chipRow.querySelectorAll('.chip').forEach((chip) => {
        chip.addEventListener('click', () => {
          chipRow.querySelectorAll('.chip').forEach((c) => c.classList.remove('is-active'));
          chip.classList.add('is-active');
          activeFilter = chip.dataset.filter;
          renderResults();
        });
      });
    }

    const input = document.getElementById('lib-search-input');
    if (input) input.addEventListener('input', () => { activeQuery = input.value; renderResults(); });

    document.querySelectorAll('[data-open-library]').forEach((btn) => {
      btn.addEventListener('click', () => openModal());
    });

    renderHomeSnapshot();

    // Library page view: open into the same modal experience for consistency
    document.getElementById('library-page-open')?.addEventListener('click', () => openModal());
  }

  window.NexoraLibrary = { init, openModal };
})();
