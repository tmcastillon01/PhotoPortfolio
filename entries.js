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
// tags: keep it to ONE tag per entry for now.
//
// voices: TODO -- once you have names (with consent) or direct
// quotes from people in a roll, add them here as
// { name: "...", quote: "..." }. Never fill this with anything
// that wasn't actually said to you and confirmed nameable.
//
// dataPoints: optional array of [label, value] pairs shown in a
// small "field data" card on the entry page. Only add facts you
// (or Claude) have actually verified -- see `sources` below.
//
// sources: array of strings citing where dataPoints came from.
// Keep these honest and undated/general unless a specific dated
// source genuinely predates the entry's own date -- an entry from
// 2022 citing a 2026 report doesn't hold together.
//
// captions: optional array matching `count`, one short caption per
// photo shown only in the lightbox when a photo is enlarged, e.g.
// "14:22 -- Packing the hides". Never shown in the grid itself, to
// keep the contact sheet clean.
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
      `Merkato runs on hands most of the city never sees up close. Said to be the largest open-air market in Africa, its hide sellers work outdoors from early morning, stretching raw skins, grading the quality, folding them into rust-orange stacks that will become shoes and bags and belts sold an ocean away, part of an informal trade that a great many households here depend on directly, with little of the recognition that keeps a market its size running. Nobody performed for the camera; they kept working, calling prices to buyers I couldn't see, the only rhythm the wet slap of hide against wood and someone's radio two stalls over. I didn't come away with names this time, which is a gap I want to close on the next visit, with consent, so this is credited as their skill and their trade, not just described from the outside.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Addis Ketema, Addis Ababa"],
      ["SCALE", "Several km², widely cited as the largest open-air market in Africa"],
      ["WORKFORCE", "~13,000 people across ~7,100 businesses (widely-cited estimate)"],
      ["PRIMARY TRADE", "Wholesale agricultural goods, especially coffee"],
    ],
    sources: [
      "Wikipedia, 'Addis Mercato'",
      "Corroborated by multiple independent travel and academic sources; original figure is a long-standing estimate, not independently audited",
    ],
    captions: [
      "07:40 — Looking down on the morning rush",
      "08:15 — Load-bearing, market-bound",
      "09:02 — The hide catches the light before the fold",
      "07:52 — Merkato from above, tarp to tarp",
      "10:18 — Sorting beans by hand, one at a time",
      "10:40 — A day's harvest, stacked and waiting",
      "10:05 — Two women, one tarp, thousands of beans",
      "11:30 — Qat leaves laid out before the midday rush",
    ],
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
      `Islas Ballestas exists because of what nests there. Sea lions, Humboldt penguins, and dense colonies of seabirds whose droppings once made this coastline one of Peru's most valuable 19th-century exports, the foundation of an entire economy built on guano before it became a marine reserve. Today the boats run on tourism instead, steered by local operators whose income depends on the health of an ecosystem they don't control. Warmer Pacific waters during El Niño years can gut the fish stocks these colonies depend on, which makes a bad ocean year here somebody's actual income, not an abstraction. The ride out was loud, engine noise and gulls arguing overhead, then almost nothing once we cut the motor near the rock and let the colony take over. I spent the morning on the animals and the rock they live on, and not enough time asking the people steering the boats what they've actually watched change out there. That's on me to fix next trip.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Islas Ballestas, Paracas, Peru"],
      ["GUANO ERA", "1840–1870, Peru's 'Great Guano Boom'"],
      ["HISTORICAL EXPORT", "~12 million tons of guano shipped, 1840–1870"],
      ["REGULATION", "Managed since 1909; now part of Peru's Guano Islands, Islets and Capes National Reserve System"],
      ["WILDLIFE", "Humboldt penguins, sea lions, guanay cormorants, Peruvian pelicans and boobies"],
    ],
    sources: [
      "BirdLife International DataZone, on the history of seabird guano and 19th-century trade",
      "Peru For Less and LAC Geo, overviews of Ballestas Islands ecology and management",
    ],
    captions: [
      "09:20 — Claiming the channel marker as their own",
      "08:05 — Passing the mystery on the hillside",
      "09:50 — Single file, waiting for nothing in particular",
      "10:10 — Light through the rock",
      "10:15 — Centuries of the same swell",
      "08:40 — Life vests on, cameras out",
      "10:25 — One bird, keeping watch",
      "10:35 — The colony never really goes quiet",
    ],
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
      `Vinicunca's color gets all the attention, but the people who work that trail are what actually keeps the mountain functional for the thousands who climb it. Local families lease their own horses and alpacas for the ascent, walk the route on foot beside tourists who paid for the ride, and do it through weather that can turn from clear sky to hard fog inside an hour, the air thin enough that talking too fast leaves you short of breath. The glaciers above towns like this one are retreating within a single generation's memory, part of a broader, well-documented warming across the Andes, a fact that rarely makes it into a photo of a horse against a mountain. I didn't ask enough on this trip about how families here are adapting to that. Next time, I want more of their words in this space, not just my read on the scene.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Cusco Region, Peruvian Andes"],
      ["ALTITUDE", "~5,200m / 17,060 ft at the viewpoint"],
      ["GLACIER HISTORY", "Covered by glacier caps until they melted away in 2013"],
      ["DAILY TEMPERATURE SWING", "Roughly -5°C to 15°C between night and day"],
    ],
    sources: [
      "Wikipedia, 'Vinicunca'",
      "Peru For Less, visitor and geography guide to Rainbow Mountain",
    ],
    captions: [
      "07:10 — Dressed for the tourists, unbothered by it",
      "06:45 — Waiting for the first riders of the day",
      "06:20 — Before the fog burned off",
      "06:55 — The red hut, the only shelter for kilometers",
      "08:30 — Heading back down, empty saddle",
      "07:05 — Grazing through the cold",
      "09:15 — Herding across the scree",
      "09:40 — Black and white, red and white, same mountain",
    ],
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
      `This one sits apart from the rest of the journal: a personal trip along the Côte d'Azur, not a documentary assignment, and I'd rather say that plainly than dress it up as more than it is. Pastel shutters and centuries-old facades share a block with the modern city without much friction. Mostly this is a record of the beach, not sand here, but smooth gray stones you trade your shoes for, sitting until the sky burns down to orange, gulls arguing somewhere behind you and the waves doing most of the talking. There's a particular quiet to how the day ends there, watching the tide, not needing to fill the space between you and whoever you're sitting next to.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Nice, French Riviera (Côte d'Azur)"],
      ["BEACHES", "Pebble, not sand, along most of the city coastline"],
      ["CLIMATE", "Mediterranean: mild wet winters, warm dry summers"],
    ],
    dataNote: "This entry is personal, not part of the documentary/climate work above — the data here is basic geography, not a climate case study.",
    sources: ["General geographic reference; not independently verified for this entry"],
    captions: [
      "18:52 — Waiting on nothing, watching everything",
      "16:10 — Shutters closed against the afternoon sun",
      "17:05 — Weather deciding whether to commit",
      "13:30 — Top down, going nowhere fast",
      "14:15 — The cliff doesn't care about the marina below",
      "12:50 — Too bright to keep your eyes open",
      "15:40 — The whole bay, from somewhere higher up",
      "13:45 — Traffic, hillside, ordinary Tuesday",
    ],
    count: 8,
  },

  {
    slug: "grindelwald",
    date: "MAR 2026",
    coords: "46.62°N 8.03°E",
    location: "GRINDELWALD, CH",
    tag: "Land & Climate",
    title: `Grindelwald: The Architecture of Instability`,
    description:
      `In Grindelwald, the landscape is in a state of rapid transition. From a distance, peaks like the Eiger and the Wetterhorn look permanent, carved in stone and ice. Up close, the mountain is losing its foundation. This documentation focuses on the intersection of winter tourism and structural vulnerability, specifically how ski infrastructure clings to slopes that are increasingly destabilized by thawing permafrost and retreating glaciers. It's a striking contrast to watch people ride lifts and ski through a landscape that feels solid, while the rockfaces above are quietly losing their integrity, the only sound most mornings the hum of lift cables and snow compressing under boots. These images aren't just a record of a ski season. They're a study of a fragile ecosystem, documenting the moment human activity meets the accelerating, invisible shift of a warming mountain.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Lower Grindelwald Glacier, Bernese Alps, CH"],
      ["GLACIER RETREAT", "1.9 km lost since 2007 alone (6.2 km total length, 2015)"],
      ["2006 EIGER COLLAPSE", "~500,000 m³ of rock fell after glacier retreat left the slope unsupported"],
      ["REGIONAL PATTERN", "76% of high-Alps rockfalls occur in permafrost zones covering just 22% of the terrain (Eastern Alps study)"],
    ],
    sources: [
      "Wikipedia, 'Lower Grindelwald Glacier'",
      "SWI swissinfo.ch, reporting on the 2006 Eiger rockfall and glacier flood risk",
      "Earth Surface Processes and Landforms, permafrost/rockfall study, Eastern Alps",
    ],
    captions: [
      "11:20 — Stillness below, instability above",
      "08:10 — The Wetterhorn, before the clouds close in",
      "13:05 — The summit disappearing into weather",
      "10:40 — Skiers, barely visible against the scale of it",
      "12:15 — The lift line keeps moving regardless",
      "09:30 — A glacier's worth of retreat, hard to see in one frame",
      "07:45 — The Eiger through the treeline",
      "10:05 — Tracks in the snow, none of them permanent",
    ],
    count: 8,
  },

  {
    slug: "valleyoffire",
    date: "APR 2026",
    coords: "36.43°N 114.53°W",
    location: "VALLEY OF FIRE, NV",
    tag: "Land & Climate",
    title: `Valley of Fire: The Aesthetics of Aridity`,
    description:
      `In the Mojave, the land doesn't really hide how fragile it is. I spent the day out here with my uncle, and at one point he pointed at the rock and said it looked almost scorched, like the sun had just been sitting on it too long. He's not wrong. The whole place is that vibrant, iron-rich Aztec sandstone, and up close it really does look burnt rather than just red. There's a heavy kind of quiet out there too, the kind you only get somewhere this dry, broken only by a dry wind that never really stops, just changes pitch depending on which rock it's moving past. Everything alive in that basin is holding on by a thread, and you can feel it. Water here is more of a memory than a resource. The desert plants look gnarled and stubborn, the rock keeps getting worn down by wind and heat instead of rain, and the whole landscape feels like it's negotiating with the dryness just to stay standing. It's not just a nice view. It's closer to a record of a place living right at the edge of what it can handle. One honest note though: this is just what I noticed on one afternoon, in one conversation with my uncle. It's not a geological study, and if I got something wrong here, I'd genuinely want to know.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Valley of Fire State Park, Mojave Desert, NV"],
      ["GEOLOGY", "Aztec Sandstone, Early Jurassic, ~150 million years old, wind-deposited (aeolian) origin"],
      ["SCALE", "~40,000 acres, elevation 1,300–3,000 ft"],
      ["CLIMATE", "~4–6.5in rainfall/year; summer rock-surface temperatures can exceed 150°F"],
    ],
    sources: [
      "Wikipedia, 'Aztec Sandstone'",
      "Nevada State Parks, Valley of Fire climate and geology overview",
    ],
    captions: [
      "12:30 — Wind-carved, one grain at a time",
      "13:10 — Two kinds of rock, one skyline",
      "13:45 — Following the only shade on the trail",
      "14:00 — Where the Aztec Sandstone changes color",
      "14:20 — Small against the scale of it",
      "12:05 — The only green for a mile",
      "14:35 — Pocked by wind, not water",
      "15:00 — Driving back out, same road, different light",
    ],
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
  //   dataPoints: [["LABEL", "value"]],
  //   sources: ["Where this came from"],
  //   captions: ["08:00 -- short caption", "..."],
  //   count: 8,
  // },
];
