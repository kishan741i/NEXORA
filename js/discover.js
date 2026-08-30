/* ==========================================================================
   NEXORA — Discover
   ========================================================================== */

(function () {
  let lastIndex = -1;

  function pickRandom() {
    const list = NEXORA_DATA.discoveries;
    let i = Math.floor(Math.random() * list.length);
    if (list.length > 1 && i === lastIndex) i = (i + 1) % list.length;
    lastIndex = i;
    return list[i];
  }

  function cardHtml(disc, { withPreview } = {}) {
    return `
      <div class="discover-source">${disc.source} · ${disc.category}</div>
      <h3>${disc.title}</h3>
      <p>${disc.description}</p>
      <div class="discover-actions">
        <a class="btn btn-primary" href="${disc.url}" target="_blank" rel="noopener noreferrer">${window.NexoraIcons.render('external-link')}Explore</a>
        <button type="button" class="btn btn-ghost" data-next-discovery>${window.NexoraIcons.render('shuffle')}Another Discovery</button>
      </div>
      ${withPreview ? `
        <div class="discover-preview" data-preview>
          <iframe src="${disc.url}" title="${disc.title} preview" loading="lazy"></iframe>
        </div>` : ''}
    `;
  }

  function mountFallback(container, disc) {
    const preview = container.querySelector('[data-preview]');
    if (!preview) return;
    preview.innerHTML = `
      <div class="fallback">
        ${window.NexoraIcons.render('shield-alert')}
        <span>Preview unavailable for this source.</span>
        <a class="btn btn-ghost" href="${disc.url}" target="_blank" rel="noopener noreferrer">${window.NexoraIcons.render('external-link')}Open Source</a>
      </div>`;
    window.NexoraIcons.hydrate();
  }

  function render(containerId, opts) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const disc = pickRandom();
    container.innerHTML = cardHtml(disc, opts);

    const iframe = container.querySelector('iframe');
    if (iframe) {
      const timer = setTimeout(() => mountFallback(container, disc), 3500);
      iframe.addEventListener('load', () => clearTimeout(timer));
      iframe.addEventListener('error', () => { clearTimeout(timer); mountFallback(container, disc); });
    }

    container.querySelector('[data-next-discovery]')?.addEventListener('click', () => render(containerId, opts));
    window.NexoraIcons.hydrate();
  }

  function init() {
    if (document.getElementById('home-discover')) render('home-discover', { withPreview: false });
    if (document.getElementById('discover-workspace')) render('discover-workspace', { withPreview: true });
  }

  window.NexoraDiscover = { init, render };
})();
