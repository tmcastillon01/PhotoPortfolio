// ---------------------------------------------------------------
// Add a new roll by copying this shape and dropping photos into
// /images/<slug>/  named 01.jpg, 02.jpg, 03.jpg ...
// index.html and entry.html both read from this file and sort
// entries by `date` automatically (newest first) -- so entries can
// be added in ANY order and the site will still display correctly.
//
// IMPORTANT: title and description use BACKTICKS ( ` ) not quotes,
// so a stray "quote" or 'apostrophe' in your text can't break the
// page. Just don't type a literal backtick (`) inside the text.
//
// tags: keep it to ONE tag per entry for now (multi-tag filtering
// didn't feel right yet -- revisit once there's more of a pattern
// across entries).
//
// voices: TODO for future entries -- once you have names (with
// consent) or direct quotes from people in a roll, add them here,
// e.g. voices: [{ name: "...", quote: "..." }]. Left empty on
// purpose for the entries below since none were collected yet.
// Do not fill this in with anything that wasn't actually said to
// you and confirmed nameable.
// ---------------------------------------------------------------

const ENTRIES = [
  {
    slug: "merkato",
    date: "NOV 2025",
    coords: "09.02°N 38.75°E",
    location: "ADDIS ABABA, ET",
    tag: "Labor & Industry",
    title: `Merkato: The Hide Trade of Addis Ababa`,
    description:
      `Merkato runs on hands most of the city never sees up close. Said to be the largest open-air market in Africa, its hide sellers work outdoors from early morning, stretching raw skins, grading the quality, folding them into rust-orange stacks that will become shoes and bags and belts sold an ocean away, part of an informal trade that a great many households here depend on directly, with little of the recognition that keeps a market its size running. Nobody performed for the camera; they kept working, calling prices to buyers I couldn't see. I didn't come away with names this time, which is a gap I want to close on the next visit, with consent, so this is credited as their skill and their trade, not just described from the outside.`,
    voices: [],
    count: 8,
  },
  {
    slug: "ica",
    date: "JUN 2025",
    coords: "13.83°S 76.28°W",
    location: "ISLAS BALLESTAS, PE",
    tag: "Wildlife & Ecology",
    title: `Islas Ballestas: The Poor Man's Galápagos`,
    description:
      `Islas Ballestas exists because of what nests there. Sea lions, Humboldt penguins, and dense colonies of seabirds whose droppings once made this coastline one of Peru's most valuable 19th-century exports, the foundation of an entire economy built on guano before it became a marine reserve. Today the boats run on tourism instead, steered by local operators whose income depends on the health of an ecosystem they don't control. Warmer Pacific waters during El Niño years can gut the fish stocks these colonies depend on, which makes a bad ocean year here somebody's actual income, not an abstraction. I spent the morning photographing the animals and the rock they live on; what I didn't do enough of was ask the people steering those boats what they've watched change. That's next.`,
    voices: [],
    count: 8,
  },
  {
    slug: "cuzco",
    date: "MAR 2025",
    coords: "13.85°S 71.30°W",
    location: "VINICUNCA, PE",
    tag: "Land & Climate",
    title: `Vinicunca: Life on the Rainbow Mountain`,
    description:
      `Vinicunca's color gets all the attention, but the people who work that trail are what actually keeps the mountain functional for the thousands who climb it. Local families lease their own horses and alpacas for the ascent, walk the route on foot beside tourists who paid for the ride, and do it through weather that can turn from clear sky to hard fog inside an hour. The glaciers above towns like this one are retreating within a single generation's memory, part of a broader, well-documented warming across the Andes, a fact that rarely makes it into a photo of a horse against a mountain. I didn't ask enough on this trip about how families here are adapting to that; I'd like their account of it in this space eventually, not just mine.`,
    voices: [],
    count: 8,
  },
  {
    slug: "nice",
    date: "OCT 2022",
    coords: "43.70°N 7.27°E",
    location: "NICE, FR",
    tag: "Personal",
    title: `Nice: Coastline at Low Tide`,
    description:
      `This one sits apart from the rest of the journal: a personal trip along the Côte d'Azur, not a documentary assignment, and I'd rather say that plainly than dress it up as more than it is. Pastel shutters and centuries-old facades share a block with the modern city without much friction. Mostly this is a record of the beach, not sand here, but smooth gray stones you trade your shoes for, sitting until the sky burns down to orange. There's a particular quiet to how the day ends there, watching the tide, not needing to fill the space between you and whoever you're sitting next to.`,
    voices: [],
    count: 8,
  },

  // Next entry goes here, e.g.:
  // {
  //   slug: "example",
  //   date: "SEP 2026",
  //   coords: "00.00°N 00.00°E",
  //   location: "CITY, COUNTRY",
  //   tag: "Labor & Industry",
  //   title: `Entry Title`,
  //   description: `Lead with the place and the people, not the trip.`,
  //   voices: [],
  //   count: 8,
  // },
];
