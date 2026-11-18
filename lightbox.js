// Shared photo viewer for entry.html and project.html.
// Click or press Enter on a frame to open. Left/right arrow keys (or the
// on-screen arrows, or a swipe on touch screens) step through the roll.
// Escape, the Close button, or a click on the dark backdrop closes it.
function initLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const stage = lb.querySelector('.lightbox-frame');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  const count = document.getElementById('lightbox-count');
  const closeBtn = document.getElementById('lightbox-close');
  const prev = document.getElementById('lightbox-prev');
  const next = document.getElementById('lightbox-next');
  const frames = Array.from(document.querySelectorAll('.contact-sheet .frame'));
  if (!frames.length) return;

  let index = 0;
  let opener = null;
  let swapTimer = null;
  const pad = (n) => String(n).padStart(2, '0');
  const isOpen = () => lb.classList.contains('open');

  function paint(i) {
    const frame = frames[i];
    const thumb = frame.querySelector('img');
    img.src = thumb.src;
    img.alt = thumb.alt;
    const text = frame.dataset.caption || '';
    cap.textContent = text;
    // Frames that carry data-href (the Board) also link back to their roll.
    if (frame.dataset.href) {
      const a = document.createElement('a');
      a.href = frame.dataset.href;
      a.className = 'lightbox-roll';
      a.textContent = 'Open this roll \u2192';
      cap.appendChild(document.createElement('br'));
      cap.appendChild(a);
    }
    cap.style.display = (text || frame.dataset.href) ? 'block' : 'none';
    count.textContent = pad(i + 1) + ' / ' + pad(frames.length);
    prev.style.visibility = i === 0 ? 'hidden' : 'visible';
    next.style.visibility = i === frames.length - 1 ? 'hidden' : 'visible';
    // Warm the cache for the neighbours so stepping through feels instant.
    [i - 1, i + 1].forEach((j) => {
      if (frames[j]) new Image().src = frames[j].querySelector('img').src;
    });
  }

  function show(i) {
    if (i < 0 || i >= frames.length || i === index) return;
    index = i;
    clearTimeout(swapTimer);
    stage.classList.add('fading');
    swapTimer = setTimeout(() => {
      paint(i);
      const done = () => stage.classList.remove('fading');
      if (img.complete) done();
      else { img.onload = done; img.onerror = done; }
    }, 140);
  }

  function open(i) {
    opener = document.activeElement;
    index = i;
    clearTimeout(swapTimer);
    stage.classList.remove('fading');
    paint(i);
    lb.classList.add('open');
    document.body.classList.add('lb-open');
    closeBtn.focus({ preventScroll: true });
  }

  function close() {
    lb.classList.remove('open');
    document.body.classList.remove('lb-open');
    if (opener && opener.focus) opener.focus({ preventScroll: true });
  }

  frames.forEach((frame, i) => {
    frame.addEventListener('click', () => open(i));
    frame.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); }
    });
  });
  closeBtn.addEventListener('click', close);
  prev.addEventListener('click', () => show(index - 1));
  next.addEventListener('click', () => show(index + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });

  document.addEventListener('keydown', (e) => {
    if (!isOpen()) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') show(index + 1);
    else if (e.key === 'ArrowLeft') show(index - 1);
    else if (e.key === 'Home') show(0);
    else if (e.key === 'End') show(frames.length - 1);
    else if (e.key === 'Tab') {
      // keep keyboard focus inside the viewer while it is open
      const ring = [closeBtn, prev, next, cap.querySelector('a')].filter((b) => b && b.style.visibility !== 'hidden');
      const at = ring.indexOf(document.activeElement);
      e.preventDefault();
      ring[(at + (e.shiftKey ? -1 : 1) + ring.length) % ring.length].focus();
    }
  });

  let startX = null;
  lb.addEventListener('touchstart', (e) => { startX = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
  }, { passive: true });
}
