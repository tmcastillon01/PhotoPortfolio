// Buttondown sign-up form (list: tcfieldnotes), mounted into any element that
// has a data-subscribe attribute. Posts the way Buttondown documents it
// (plain form POST, not fetch) and opens the confirmation in a new tab so the
// reader keeps their place in the essay.
function mountSubscribe() {
  document.querySelectorAll('[data-subscribe]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    el.innerHTML = `
      <form class="subscribe-form" action="https://buttondown.com/api/emails/embed-subscribe/tcfieldnotes" method="post" target="_blank">
        <label class="subscribe-label" for="sub-${el.dataset.subscribe}">A note when a new roll goes up</label>
        <div class="subscribe-row">
          <input type="email" id="sub-${el.dataset.subscribe}" name="email" placeholder="you@example.com" autocomplete="email" required>
          <input type="hidden" value="1" name="embed">
          <button type="submit">Subscribe</button>
        </div>
        <p class="subscribe-fine">No set schedule. Unsubscribe anytime.</p>
      </form>`;
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountSubscribe);
else mountSubscribe();
