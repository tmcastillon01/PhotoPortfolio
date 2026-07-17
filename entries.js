// ---------------------------------------------------------------
// Add a new roll by copying this shape and dropping photos into
// /images/<slug>/  named 01.jpg, 02.jpg, 03.jpg ...
// Both index.html (the grid) and entry.html (the full roll page)
// read from this file automatically.
//
// IMPORTANT: title and description use BACKTICKS ( ` ) not quotes.
// This is deliberate. Typing a regular "quote" or 'apostrophe' inside
// a backtick string will NOT break anything. Just don't type a
// literal backtick (`) inside the text.
//
// tags: free-form array of strings, shown as filter pills on the
// journal grid. Reuse existing tag names where the theme fits,
// instead of inventing a new one each time -- that's what keeps
// the filter useful instead of turning into 19 one-off tags.
// ---------------------------------------------------------------

const ENTRIES = [
  {
    slug: "merkato",
    date: "NOV 2025",
    coords: "09.02°N 38.75°E",
    location: "ADDIS ABABA, ET",
    tags: ["Labor & Industry"],
    title: `Merkato: The Hide Trade of Addis Ababa`,
    description:
      `The market doesn't start with a sight; it starts with the smell — diesel, wet rope, and the metallic tang of drying skins. Merkato is a chaotic engine, and my documentation focuses on the gears of this trade. I focused on the hide sellers, wedged between rows of industrial shoe stalls. This is a place of rapid-fire commerce; men stretch raw skins, test the grain, and stack them into rust-orange fans against the tin roofs. There is no performance here, only the rhythmic, repetitive folding and the shouting of prices to invisible partners. It is a study of heat, labor, and the raw material pipeline that feeds a city's economy.`,
    count: 8,
  },
  {
    slug: "cuzco",
    date: "AUG 2025",
    coords: "13.85°S 71.30°W",
    location: "VINICUNCA, PE",
    tags: ["Land & Climate", "Wildlife & Ecology"],
    title: `Vinicunca: Life on the Rainbow Mountain`,
    description:
      `The guidebooks focus on the mineral bands, but the mountain is anchored by a brutal, daily economy. At nearly 5,000 meters, the work of climbing is outsourced to horses and alpacas. I spent the morning documenting the intersection of tourism and endurance: horses tied to iron stakes, alpacas adorned with tassels, and local women navigating the fog as if they weren't standing on one of the most volatile tourist sites in the Andes. It is a striking contradiction: a landscape that looks painted, anchored by a harsh reality where the environment and the local community are in constant, quiet negotiation.`,
    count: 8,
  },
  {
    slug: "ica",
    date: "JUN 2025",
    coords: "13.83°S 76.28°W",
    location: "ISLAS BALLESTAS, PE",
    tags: ["Wildlife & Ecology", "Land & Climate"],
    title: `Islas Ballestas: The Poor Man's Galápagos`,
    description:
      `Known locally as "the poor man's Galápagos," these islands are a masterclass in ecosystem stacking. You pass the Candelabra — an archaeological geoglyph on the desert hillside that remains a mystery — and suddenly you are in a theater of wildlife. Sea lions claim channel markers like living room furniture; penguins line up on cliff edges with the stillness of a queue. But the real subject is the architecture of the rock itself — arches carved out by centuries of relentless swell. These caves are deep, dark voids that reveal the true cost of time: an ecosystem built on a physical foundation that is slowly being eroded by the very ocean that feeds it.`,
    count: 8,
  },

  {
    slug: "nice",
    date: "OCT 2025",
    coords: "43.70°N 7.27°E",
    location: "NICE, FR",
    tags: ["Land & Climate"],
    title: `Nice: Coastline at Low Tide`,
    description:
      `Everything in Nice feels dipped in a slow-motion filter, and you stop fighting it almost immediately. The air sits warm on your shoulders, and the pace of the day belongs to whoever is furthest from an appointment. Centuries-old facades in pastel shutters share the block with the modern world, unbothered by each other. Mostly, though, this is a record of the beach — not sand, but smooth gray stones you trade your shoes for, sitting until the sky burns down to orange. There's a particular quiet to how the day ends there: watching the tide, not needing to fill the space between you and whoever you're sitting next to. Nice doesn't ask anything of you. It just hands you the sun, an impossible blue, and lets you lose track of both.`,
    count: 8,
  },

  // Next country goes here, e.g.:
  // {
  //   slug: "example",
  //   date: "SEP 2026",
  //   coords: "00.00°N 00.00°E",
  //   location: "CITY, COUNTRY",
  //   tags: ["Labor & Industry"],
  //   title: `Entry Title`,
  //   description: `Short field-note style description.`,
  //   count: 8,
  // },
];
