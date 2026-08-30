/* ==========================================================================
   NEXORA — Shared Modal Helper
   One consistent open/close/focus-trap behavior for every overlay
   (search, library, live demo).
   ========================================================================== */

(function () {
  function openOverlay(id, onOpen) {
    const overlay = document.getElementById(id);
    if (!overlay) return;
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    if (typeof onOpen === 'function') onOpen(overlay);

    const focusTarget = overlay.querySelector('[data-autofocus]');
    if (focusTarget) setTimeout(() => focusTarget.focus(), 50);
  }

  function closeOverlay(id, onClose) {
    const overlay = document.getElementById(id);
    if (!overlay) return;
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    if (!window.NexoraNav.anyOverlayOpen() && !document.getElementById('mobile-menu').classList.contains('is-open')) {
      document.body.classList.remove('no-scroll');
    }
    if (typeof onClose === 'function') onClose(overlay);
  }

  function closeAllOverlays() {
    document.querySelectorAll('.overlay.is-open').forEach((el) => closeOverlay(el.id));
  }

  function initOverlayDismiss() {
    document.querySelectorAll('.overlay').forEach((overlay) => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeOverlay(overlay.id);
      });
      overlay.querySelectorAll('[data-close-modal]').forEach((btn) => {
        btn.addEventListener('click', () => closeOverlay(overlay.id));
      });
    });
    document.addEventListener('nexora:escape', closeAllOverlays);
  }

  window.NexoraModal = { open: openOverlay, close: closeOverlay, closeAll: closeAllOverlays, init: initOverlayDismiss };
})();
