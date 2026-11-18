// Site header shared by every page: wordmark, desktop links, and a
// three-line menu button on small screens. Each page has an empty
//   <header id="site-header" data-current="projects" data-hero></header>
// followed by <script src="nav.js"></script>.
//   data-current  highlights one link (about, projects, journal, board, contact, subscribe)
//   data-hero     the page opens on a full-bleed photo, so the bar stays
//                 transparent until you scroll
(function () {
  const header = document.getElementById('site-header');
  if (!header) return;
  const current = header.dataset.current || '';
  const hasHero = header.hasAttribute('data-hero');
  const links = [
    ['About', 'index.html#about', 'about'],
    ['Projects', 'projects.html', 'projects'],
    ['Journal', 'index.html#journal', 'journal'],
    ['Board', 'board.html', 'board'],
    ['Contact', 'index.html#contact', 'contact'],
    ['Subscribe', '#subscribe', 'subscribe'],
  ];
  const items = links
    .map(([label, href, key]) => `<a href="${href}"${key === current ? ' class="current"' : ''}>${label}</a>`)
    .join('');

  header.innerHTML = `
    <div class="wrap">
      <nav>
        <a href="index.html" class="wordmark">field<span class="accent">/</span>notes <span class="by">by</span> <span class="accent name">Timothy Castillon</span></a>
        <div class="navlinks">${items}</div>
        <button type="button" class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav-menu"><span></span><span></span><span></span></button>
      </nav>
    </div>
    <div class="nav-menu" id="nav-menu" hidden>${items}</div>`;

  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');

  function sync() {
    const solid = !hasHero || window.scrollY > 24 || header.classList.contains('menu-open');
    header.classList.toggle('solid', solid);
  }
  function setOpen(open) {
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    header.classList.toggle('menu-open', open);
    sync();
  }

  toggle.addEventListener('click', () => setOpen(menu.hidden));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('click', (e) => { if (!menu.hidden && !header.contains(e.target)) setOpen(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) { setOpen(false); toggle.focus(); }
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });
  window.addEventListener('scroll', sync, { passive: true });
  sync();
})();
