/* ==========================================================================
   NEXORA — Theme System
   The no-flash initial theme is applied by an inline script in <head>;
   this module only wires up the toggle button after DOM is ready.
   ========================================================================== */

(function () {
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('nexora-theme', theme);
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    });
  }

  function initTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const now = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(now);
      });
    });
    applyTheme(current);
  }

  window.NexoraTheme = { init: initTheme, apply: applyTheme };
})();
