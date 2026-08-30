/* ==========================================================================
   NEXORA — Icon Helper
   Thin wrapper around the Lucide icon library so dynamically-rendered
   markup can request an icon and have it hydrated on the next paint.
   ========================================================================== */

(function () {
  function render(name, extraClass) {
    return `<i data-lucide="${name}" class="icon ${extraClass || ''}"></i>`;
  }

  function hydrate() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  window.NexoraIcons = { render, hydrate };
})();
