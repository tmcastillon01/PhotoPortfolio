// Regenerates feed.xml from entries.js. Run after adding an entry:
//   node tools/build-feed.js
// Buttondown's RSS-to-email reads feed.xml.
//
// Publish dates: entries only carry a month and year, so the first time the
// script sees a slug it records a publish date in tools/feed-dates.json
// (today's date for a new entry; the 1st of the month when the file doesn't
// exist yet, so older entries read as old). Keep feed-dates.json in the repo
// so dates stay stable between runs.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const DATES = path.join(__dirname, 'feed-dates.json');
const BASE = 'https://tmcastillon01.github.io/PhotoPortfolio/';
const MONTHS = { JAN:0, FEB:1, MAR:2, APR:3, MAY:4, JUN:5, JUL:6, AUG:7, SEP:8, OCT:9, NOV:10, DEC:11 };

const entries = vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'entries.js'), 'utf8') + ';ENTRIES');

function monthStart(str) {
  const m = /^([A-Z]{3})\s+(\d{4})$/.exec(String(str || '').trim().toUpperCase());
  if (!m || !(m[1] in MONTHS)) throw new Error('Bad date: ' + str);
  return new Date(Date.UTC(parseInt(m[2], 10), MONTHS[m[1]], 1, 12, 0, 0)).toISOString();
}

const firstRun = !fs.existsSync(DATES);
const saved = firstRun ? {} : JSON.parse(fs.readFileSync(DATES, 'utf8'));
let added = [];
entries.forEach((e) => {
  if (!saved[e.slug]) {
    saved[e.slug] = firstRun ? monthStart(e.date) : new Date().toISOString();
    added.push(e.slug);
  }
});
fs.writeFileSync(DATES, JSON.stringify(saved, null, 2) + '\n');

const xml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const html = xml;

// first two sentences of the description, unedited
function excerpt(text) {
  const parts = String(text).trim().split(/(?<=[.!?])\s+(?=[A-Z])/);
  return parts.slice(0, 2).join(' ');
}

const items = entries
  .map((e) => ({ e, d: new Date(saved[e.slug]) }))
  .sort((a, b) => b.d - a.d);

const itemXml = items.map(({ e, d }) => {
  const link = `${BASE}entry.html?slug=${encodeURIComponent(e.slug)}`;
  const body = `<p><img src="${BASE}images/${e.slug}/01.jpg" alt="${html(e.title)}"></p>` +
    `<p>${html(e.location)}, ${html(e.date)}</p><p>${html(excerpt(e.description))}</p>`;
  if (body.includes(']]>')) throw new Error('CDATA terminator in ' + e.slug);
  const cats = (e.tags || []).map((t) => `      <category>${xml(t)}</category>`).join('\n');
  return `    <item>
      <title>${xml(e.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${d.toUTCString()}</pubDate>
${cats}
      <description><![CDATA[${body}]]></description>
    </item>`;
}).join('\n');

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>field/notes by Timothy Castillon</title>
    <link>${BASE}</link>
    <atom:link href="${BASE}feed.xml" rel="self" type="application/rss+xml"/>
    <description>A field record of the people and places carrying the weight of a changing world: labor, land, and the communities closest to both, documented up close and credited where I can.</description>
    <language>en</language>
    <lastBuildDate>${items[0].d.toUTCString()}</lastBuildDate>
${itemXml}
  </channel>
</rss>
`;
fs.writeFileSync(path.join(ROOT, 'feed.xml'), feed);
console.log(`feed.xml written: ${items.length} items, newest ${items[0].e.slug}.` +
  (added.length ? ` New in dates file: ${added.join(', ')}` : ' No new entries.'));
