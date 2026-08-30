/* ==========================================================================
   NEXORA — Navigation
   Handles view switching (Home/Learn/Build/Discover/Library), the mobile
   full-screen menu, and keyboard affordances (ESC to close overlays).
   ========================================================================== */

(function () {
  const VIEWS = ['home', 'learn', 'build', 'discover', 'library'];

  function setActiveView(viewId, opts = {}) {
    if (!VIEWS.includes(viewId)) viewId = 'home';

    document.querySelectorAll('.view').forEach((el) => {
      el.classList.toggle('is-active', el.dataset.view === viewId);
    });

    document.querySelectorAll('[data-nav-target]').forEach((el) => {
      el.classList.toggle('is-active', el.dataset.navTarget === viewId);
    });

    if (!opts.silent) {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
      history.replaceState(null, '', viewId === 'home' ? '#' : `#${viewId}`);
    }

    closeMobileMenu();
    document.dispatchEvent(new CustomEvent('nexora:viewchange', { detail: { view: viewId } }));
  }

  function openMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;
    menu.classList.add('is-open');
    document.body.classList.add('no-scroll');
    menu.setAttribute('aria-hidden', 'false');
  }

  function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;
    menu.classList.remove('is-open');
    if (!anyOverlayOpen()) document.body.classList.remove('no-scroll');
    menu.setAttribute('aria-hidden', 'true');
  }

  function anyOverlayOpen() {
    return !!document.querySelector('.overlay.is-open');
  }

  function initNav() {
    document.querySelectorAll('[data-nav-target]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveView(el.dataset.navTarget);
      });
    });

    const menuOpenBtn = document.getElementById('menu-open-btn');
    const menuCloseBtn = document.getElementById('menu-close-btn');
    if (menuOpenBtn) menuOpenBtn.addEventListener('click', openMobileMenu);
    if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeMobileMenu);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
        document.dispatchEvent(new CustomEvent('nexora:escape'));
      }
    });

    // Restore view from hash on load
    const initial = (location.hash || '').replace('#', '') || 'home';
    setActiveView(initial, { silent: true });
  }

  window.NexoraNav = { init: initNav, setActiveView, openMobileMenu, closeMobileMenu, anyOverlayOpen };
})();
