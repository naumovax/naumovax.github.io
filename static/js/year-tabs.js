document.querySelectorAll('[data-year-tabs]').forEach((container) => {
  const tabs = [...container.querySelectorAll('[data-year]')];
  const panels = [...container.querySelectorAll('[data-year-panel]')];
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((other) => {
        const active = other === tab;
        other.classList.toggle('is-active', active);
        other.setAttribute('aria-selected', String(active));
      });
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.yearPanel !== tab.dataset.year;
      });
    });
  });
});
