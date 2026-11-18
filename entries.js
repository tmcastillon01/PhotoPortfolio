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
// tags: an array -- one tag is fine (["Land & Climate"]), or add more
// (["Land & Climate", "Wildlife & Ecology"]) when an entry genuinely
// spans categories. An entry with multiple tags shows up under each
// one in the Journal's filter pills, and each tag gets its own small
// pill on the card. Don't overdo it -- 1-2 tags keeps it meaningful.
//
// region: ONE of "Americas", "Asia", "Europe", "Africa", "Antarctica".
// A second, separate filter row on the Journal page, independent of
// tags -- a visitor can filter by tag AND region at the same time.
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
    region: "Africa",
    tags: ["Labor & Industry"],
    title: `Merkato: The Hide Trade of Addis Ababa`,
    description:
      `At Merkato, the market runs on hands most of the city never stops to watch. Donkeys loaded with burlap sacks push through narrow alleys while hide sellers stretch raw qoda across wooden frames. Together with a close friend of mine, a photographer from Slovakia, we sat near the edge of the lane for twenty minutes just taking in the pace of it. I was in awe watching a woman sit on a low stool sorting raw coffee beans by hand, separating grades and defects at a speed that made hours of repetition look effortless. A huge part of the city's economy moves through that kind of informal, low-margin labor, even if the people doing it rarely get seen beyond the market gates. I didn't ask for her name because I didn't want to break her rhythm during a busy morning, which is a gap I want to fix when I go back, with consent, so her words sit beside the frame rather than just my view from the edge of the lane.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Addis Ketema, Addis Ababa"],
      ["SCALE", "Several km², widely cited as the largest open-air market in Africa"],
      ["WORKFORCE", "~13,000 people across ~7,100 businesses (widely-cited estimate)"],
      ["PRIMARY TRADE", "Wholesale agricultural goods, especially coffee"],
    ],
    sources: [
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
    region: "Americas",
    tags: ["Wildlife & Ecology"],
    title: `Islas Ballestas: The Poor Man's Galápagos`,
    description:
      `Islas Ballestas is built on what nests there: sea lions crowding the harbor buoys, Humboldt penguins, and dense colonies of seabirds whose droppings once drove Peru's nineteenth century guano boom before the islands became a marine reserve. Now the boats run on day trippers instead, steered by local captains whose income rises and falls with an ocean they cannot control. When warmer Pacific water during El Niño years drives away the anchovies these colonies feed on, the rock goes quiet. The ride out was loud with outboard noise and gulls overhead, then dead still once the captain cut the engine near the arches. I spent the entire morning pointing my lens at the cliffs and barely spoke a word to the crew sitting right behind me.`,
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
    region: "Americas",
    tags: ["Land & Climate", "Wildlife & Ecology"],
    title: `Vinicunca: Life on the Rainbow Mountain`,
    description:
      `Everyone climbs Vinicunca for the striped ridge, while the local families working the trail carry the real weight of keeping the mountain running. One of the kids offered me a ride up on his horse. I wasn't comfortable putting my weight on an animal already working at that altitude, so I walked up the steep path beside him instead and paid him at the end anyway. Above five thousand meters, I was winded just trying to string a sentence together, while he barely broke stride. Kids out here start working early to help pay for school; you admire the grit, though you can't help wondering what their days would look like with a different set of chances. Above valleys like this, Andean glaciers have pulled back within a single lifetime, shrinking the dry season meltwater that herding and farming families depend on.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Cusco Region, Peruvian Andes"],
      ["ALTITUDE", "~5,200m / 17,060 ft at the viewpoint"],
      ["GLACIER HISTORY", "Covered by glacier caps until they melted away in 2013"],
      ["DAILY TEMPERATURE SWING", "Roughly -5°C to 15°C between night and day"],
    ],
    sources: [
      "Peru For Less, visitor and geography guide to Rainbow Mountain",
      "IPCC AR6 Working Group I (2021), Chapter 9: Ocean, Cryosphere and Sea Level Change; IPCC SROCC (2019), Chapter 2: High Mountain Areas",
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
    region: "Europe",
    tags: ["Personal"],
    title: `Nice: Coastline at Low Tide`,
    description:
      `Pastel shutters and iron balconies share a block with the coastal road without much friction, though most of my time here went to the shore. We woke up a bit late at the hotel and rushed down to the water for a quick, slow dip, sharing the shoreline with a few locals already in the sea. Along the Baie des Anges, there isn't any sand, just smooth gray galets you trade your shoes for, sitting until the sky burns down to orange, gulls arguing somewhere behind you and the Mediterranean doing most of the talking. It is still one of my favorite cities in France, partly for that unhurried rhythm, and partly for how the day ends at l'heure bleue: watching the water darken beside someone, with nothing that needed saying. That kind of quiet stays with you after you've left.`,
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
    date: "MAR 2024",
    coords: "46.62°N 8.03°E",
    location: "GRINDELWALD, CH",
    region: "Europe",
    tags: ["Land & Climate"],
    title: `Grindelwald: The Architecture of Instability`,
    description:
      `From the valley floor in Grindelwald, the north face of the Eiger looks permanent, carved out of solid rock and ice. Up on the lifts, the mountain feels much less settled. It was strange riding up in the cold, listening to the hum of cables while skiers carved down groomed runs below rockfaces destabilized by thawing permafrost and retreating glaciers. Keeping winter tourism open here takes constant anchoring, netting, and slope work on ground that doesn't hold together the way it used to. I came up expecting a straightforward alpine winter and mostly noticed how much engineering it takes just to keep the runs open.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Lower Grindelwald Glacier, Bernese Alps, CH"],
      ["GLACIER RETREAT", "1.9 km lost since 2007 alone (6.2 km total length, 2015)"],
      ["2006 EIGER COLLAPSE", "~500,000 m³ of rock fell after glacier retreat left the slope unsupported"],
      ["REGIONAL PATTERN", "76% of high-Alps rockfalls occur in permafrost zones covering just 22% of the terrain (Eastern Alps study)"],
    ],
    sources: [
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
    region: "Americas",
    tags: ["Land & Climate"],
    title: `Valley of Fire: The Aesthetics of Aridity`,
    description:
      `I spent the afternoon out here with my uncle, and at one point he looked at the red Aztec sandstone and said it looked scorched, like the sun had been sitting on it too long. Watching visitors hurry back into air conditioned cars while park staff and road crews kept working in the glare, his remark stuck with me. In a Mojave basin where summer rock temperatures pass 150°F and extreme heat days keep climbing across the Southwest, nothing gets much relief. Standing out on the trail for even an hour, you start measuring every walk by how far you are from shade and water.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Valley of Fire State Park, Mojave Desert, NV"],
      ["GEOLOGY", "Aztec Sandstone, Early Jurassic, ~150 million years old, wind-deposited (aeolian) origin"],
      ["SCALE", "~40,000 acres, elevation 1,300–3,000 ft"],
      ["CLIMATE", "~4–6.5in rainfall/year; summer rock-surface temperatures can exceed 150°F"],
    ],
    sources: [
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

  {
    slug: "zion",
    date: "SEP 2026",
    coords: "37.30°N 113.03°W",
    location: "ZION NATIONAL PARK, UT",
    region: "Americas",
    tags: ["Land & Climate"],
    title: `Zion: The Grandeur of Verticality`,
    description:
      `In Zion, the canyon walls pull your eyes straight up, though what stayed with me happened down along the trail. Walking beside my uncle, the sheer cliffs of Navajo sandstone felt untouchable until you notice the crowd lines and realize the quiet itself has to be rationed. With millions of people funneling into one narrow canyon, mandatory shuttles and permit lotteries now control who gets in just to keep cars and foot traffic from wearing the floor down. Meanwhile, erratic monsoons, long droughts, and record heat are reshaping how the Virgin River floods and what rangers have to rebuild every season to keep the path passable.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Zion National Park, Springdale, UT"],
      ["GEOLOGY", "Navajo Sandstone, Early Jurassic, ~190 million years old, wind-deposited (aeolian) dune origin"],
      ["SCALE", "~148,000 acres; elevation 3,666–8,726 ft"],
      ["CLIMATE", "~16–18in rainfall/year; summer temperatures frequently exceed 100°F"],
      ["VISITOR PRESSURE", "Among the most-visited U.S. national parks, drawing well over 4 million visitors in recent years"],
      ["MANAGED ACCESS", "Mandatory canyon shuttle since 2000; Angels Landing permit lottery since 2022 due to trail and chain wear"],
    ],
    sources: [
      "National Park Service, Zion National Park visitor and geology overview",
      "National Park Service, Angels Landing wilderness permit program announcements (2022–present)",
    ],
    captions: [
      "10:15 — The Court of the Patriarchs, before the crowd catches up",
      "11:40 — Prickly pear, heavy with fruit",
      "10:30 — White rock giving way to red",
      "09:05 — The trail, shoulder to shoulder",
      "13:10 — Looking out from inside the rock",
      "14:05 — The walls closing in",
      "14:30 — Where the river does the carving",
      "14:20 — Light finding its way to the floor",
    ],
    count: 8,
  },

  {
    slug: "lavaux",
    date: "MAY 2023",
    coords: "46.46°N 6.82°E",
    location: "SAINT-SAPHORIN & CHEXBRES, CH",
    region: "Europe",
    tags: ["Land & Climate"],
    title: `Lavaux: The Mirror of Lake Geneva`,
    description:
      `In Lavaux, the vineyards sit on steep stone terraces stacked by hand over centuries above Lake Geneva. I walked up from Saint-Saphorin toward Chexbres with coworkers for Caves Ouvertes, the spring cellar festival, stopping at small stone doorways along the slope. Over a pour of Chasselas, a winemaker explained the "Three Suns" that make these terraces work: the sun overhead, the glare bouncing off the lake, and the heat trapped in the stone walls and released after dark. For generations, that triple heat setup let families ripen grapes on slopes too steep for tractors. Now, hotter summers are pushing les vendanges weeks earlier, throwing off a balance the whole hillside was built around.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Saint-Saphorin & Chexbres, Lavaux, Vaud, Switzerland"],
      ["GEOLOGY", "Molasse and conglomerate ('pudding stone') bedrock, overlaid with moraine left by the retreating Rhône glacier"],
      ["SCALE", "UNESCO World Heritage core zone of ~2,220 acres (898 hectares); terraces run roughly 30km along the lake's north shore"],
      ["HERITAGE", "Terraces shaped into their current form by monks by the 11th–12th century; UNESCO World Heritage Site since 2007"],
      ["CLIMATE", "Lake-moderated microclimate warmed by the 'three suns' (direct sun, lake reflection, heat stored in the terrace walls); long-term studies show European grape harvests shifting markedly earlier since the 1980s"],
    ],
    sources: [
      "UNESCO World Heritage Centre, 'Lavaux, Vineyard Terraces'",
      "Charlois, on the Lavaux terraces and the 'three suns'",
      "Swiss-Spectator, on Lavaux's glacial and geological landscape",
      "NASA Earth Science, on climate-driven shifts in European grape harvest timing",
    ],
    captions: [
      "10:05 — The terraces falling toward the water",
      "10:20 — A villa keeping watch over the vines",
      "11:15 — Rows pointed straight at the lake",
      "11:40 — Parked for the view, not by accident",
      "12:30 — The paddle steamer, running the line it always has",
      "13:10 — Saint-Saphorin, roof to roof",
      "13:25 — The bell tower keeping watch over the water",
      "15:00 — Caves Ouvertes, glass in hand",
    ],
    count: 8,
  },

  {
    slug: "angkor",
    date: "NOV 2026",
    coords: "13.41°N 103.86°E",
    location: "ANGKOR ARCHAEOLOGICAL PARK, SIEM REAP, KH",
    region: "Asia",
    tags: ["Labor & Industry", "Land & Climate"],
    title: `Angkor: Stone, Water, and the Labor of Upkeep`,
    description: `I walked the rain slicked causeways at Angkor with a fun loving couple I had met, two people who share the same habit of staying out until the light fades. What stayed with me wasn't just the twelfth century stonework but the daily labor keeping it upright. A monk in saffron robes paused along the stone edge of the moat while storm clouds sat low over the towers. I tried speaking to one of the grounds workers clearing moss near the gallery; we didn't share a language, so we nodded and watched the rain run off the laterite. The whole complex rests on sand foundations that depend on steady groundwater to keep the heavy stone from sinking. The temples face heavier monsoon downpours that wear down the carvings and dry season water pumping around Siem Reap, and they survive because local workers tend the edges every single day.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Angkor Archaeological Park, Siem Reap, Cambodia"],
      ["HYDROLOGY & STONE", "12th-century sandstone and laterite, built on an engineered network of moats and reservoirs"],
      ["SCALE", "~154 sq mi (400 sq km) archaeological zone, lowland floodplain"],
      ["GROUNDWATER", "~5 m below the surface; Siem Reap province runs a deficit of ~300 million m³ a year"],
      ["CLIMATE", "Tropical monsoon; erratic wet and dry extremes, groundwater stress"],
    ],
    sources: [
      "UNESCO Courier, 'Angkor water crisis' (groundwater depth, provincial deficit, sand foundations)",
      "Into Cambodia, 'Angkor Archaeological Park' (area of ~401 sq km)",
    ],
    captions: [
      "07:05 — Rain-slicked causeway toward the central towers",
      "07:40 — Scaffolding climbing the Bayon",
      "06:48 — A monk walks the moat's stone edge",
      "07:15 — Resting on the steps, out of the way of the day",
      "08:02 — Apsara relief, worn smooth at the edges",
      "08:20 — Through a window onto the outer gallery",
      "06:30 — Gallery walls and tiered roofs before the crowds",
      "06:10 — A library building under first light",
    ],
    count: 8,
  },
  {
    slug: "atok",
    date: "JAN 2026",
    coords: "16.58°N 120.70°E",
    location: "ATOK, BENGUET, PH",
    region: "Asia",
    tags: ["Labor & Industry", "Land & Climate"],
    title: `Atok: The Salad Bowl Above the Clouds`,
    description: `Driving up Halsema Highway before dawn past sheer rock overhangs, you watch steep mountain ridges give way to neat green rows of gulay that end up on Manila's tables the next morning. From Mount Olis, whole hillsides are terraced into cabbage, carrot, and potato plots, with tin roofed farmhouses tucked right beside the crops and trucks waiting along narrow cliffside turns. Highland farmers here work in cold, thin air above seven thousand feet, counting on steady chill and predictable rain to grow temperate crops in the tropics. Lately, the swings have gotten rougher: sudden frosts that burn leaves overnight, followed by stronger bagyo (storms) that wash topsoil and sections of the highway straight down the ravine.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Atok, Benguet (Halsema Highway and Mount Olis), Cordillera Central, PH"],
      ["ELEVATION", "~2,255 m (7,400 ft) at the Halsema Highroad Point, once the highest point of the Philippine highway system"],
      ["AGRICULTURE", "Highland temperate vegetable terraces (cabbage, carrots, potatoes, leafy greens) supplying Metro Manila"],
      ["CLIMATE", "Cool tropical highland; vulnerable to typhoons, landslides, and frost (Atok has dipped to 4°C)"],
    ],
    sources: [
      "Inquirer.net, 'PH highway's highest point now in Ifugao' (Halsema 2,255 m; Ifugao point 2,428 m)",
      "Inquirer.net, 'Frost hits Benguet farms as temperature drops' (frost on Atok vegetable patches, 4°C lows)",
    ],
    dataNote: `The Halsema point was the country's highest highway point until DPWH revalidated a stretch of road in Tinoc, Ifugao (2,428 m) in 2019.`,
    captions: [
      "08:10 — Terraced rows right up to the rooftops",
      "09:25 — Trucks squeeze under the cliff on Halsema",
      "10:05 — Green steps cut into the ridge",
      "09:40 — Looking down at a farm in the folds",
      "10:30 — Cultivated slopes under the mountain's shadow",
      "13:15 — A town of tin roofs below the pines",
      "05:58 — Sun above the cloud line, crops in the foreground",
      "11:20 — A roadside stop at the edge of the terraces",
    ],
    count: 8,
  },
  {
    slug: "berat",
    date: "AUG 2022",
    coords: "40.70°N 19.96°E",
    location: "BERAT, AL",
    region: "Europe",
    tags: ["Labor & Industry", "Land & Climate"],
    title: `Berat: Stone Walls and Sidewalk Looms`,
    description: `In Berat, daily trade happens right on the walls of the old town. Walking the steep cobblestone lanes toward the citadel, you pass hand knitted wool socks and vests hung on arched doorways, embroidered dresses clipped to wire lines, and woven kilim rugs draped over limestone masonry. Much of the town's tourism runs on this household work: families turn ground floors into small cafes and hang handmade goods outside their own front doors. I bought raki and olive oil from one seller, and when we talked she told me how low her income was, because not many people were coming. Up on the exposed hilltop ruins and along the unshaded alleys, Albania's increasingly brutal summer heatwaves hit these vendors and stone neighborhoods first, shrinking the hours when anyone can comfortably walk the hill.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Mangalem, Gorica and Kala (Berat Castle), Berat, Albania"],
      ["HERITAGE & ARCHITECTURE", "Ottoman-era stacked limestone houses beneath a hilltop citadel; UNESCO World Heritage Site since 2008"],
      ["ECONOMY", "Small-scale family guesthouses, cafes, and informal roadside textile and craft stalls"],
      ["CLIMATE", "Mediterranean; ~1,170 mm rainfall a year; August highs average ~34°C"],
    ],
    dataNote: "Climate figures are long-term modelled averages, not observations from the day of the visit. The heat and drought link to vendors is my field observation, not a measured finding.",
    sources: [
      "UNESCO World Heritage Centre / Wikipedia, 'Historic Centres of Berat and Gjirokastër' (Gjirokastra inscribed 2005; Berat added 2008)",
      "Weather Atlas, 'Berat climate' (annual rainfall ~1,169 mm; August average high 33.6°C)",
    ],
    captions: [
      "11:40 — A cannon and a thatched terrace at the top of the citadel",
      "12:30 — The old town stacked up the hillside",
      "10:50 — A cafe doorway hung with hand-knitted wool",
      "14:05 — Steps up to the church inside the walls",
      "13:20 — Kilims and bags pegged to limestone",
      "13:25 — Embroidered dresses on a wire line",
      "11:55 — Stairs and towers of the citadel",
      "15:10 — Tiled roofs and workmen's rubble in the lower lanes",
    ],
    count: 8,
  },
  {
    slug: "mombasa",
    date: "APR 2022",
    coords: "04.04°S 39.67°E",
    location: "BAMBURI, NYALI & MOMBASA, KE",
    region: "Africa",
    tags: ["Labor & Industry", "Land & Climate"],
    title: `Mombasa: Tides, Reefs, and the Beach Economy`,
    description: `Along the coast in Mombasa, the beach is both a resort backdrop and a crowded workplace. Walk down to the bahari at low tide and the whole informal economy is laid out on the sand: handlers leading camels for tourist photos, boat crews waiting beside glass bottom reef cruisers, fishermen hauling wooden ngalawa canoes through the shallows by hand. I spoke with some of them, and agreed to pay a local for a quick tour of what the low tide leaves behind. He pointed out starfish, small fish, sea anemones and urchins, along with a few others I no longer remember. Everyone working this stretch lives off the same narrow strip of reef and tide, yet none of them control what happens to it. As warming Indian Ocean waters bleach the reef and high tides chew at the shoreline, visitors fly home at the end of the week while the crews stay behind with less reef to show and less sand to stand on.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Bamburi, Nyali and Mombasa Old Town coastline, Mombasa, Kenya"],
      ["MARINE ECOSYSTEM", "Fringing coral reefs, seagrass beds, and tidal lagoons along the Indian Ocean"],
      ["LIVELIHOODS", "Informal beach operators, glass-bottom reef boats, wooden fishing canoes, and camel handlers"],
      ["CLIMATE", "Tropical coastal; ~1,050 to 1,250 mm rainfall a year (station range), two rainy seasons; coral bleaching reported on the North Coast"],
    ],
    dataNote: "Local tourism leaders in Mombasa link bleaching to warming seas but also to dredging, sand harvesting and dumping. The shoreline erosion point is my field observation and I have not sourced it here.",
    sources: [
      "FAO, 'Rainfall at Mombasa stations' (annual totals 1,054 to 1,246 mm, bimodal rainy seasons)",
      "The Star (Kenya), 'Tourism stakeholders decry coral bleaching at the Coast', Feb 2025",
    ],
    captions: [
      "10:15 — Glass-bottom boats waiting in the shallows",
      "17:20 — A camel handler walks the tideline",
      "11:30 — A sail catching the midday light",
      "12:45 — A glass-bottom boat stranded by the low tide",
      "14:10 — Looking out from the old sea wall",
      "09:50 — A boatman watching the water",
      "10:40 — A wooden canoe hauled in through the shallows",
      "13:05 — A palm bent by the wind, the channel behind",
    ],
    count: 8,
  },
  {
    slug: "bethlehem",
    date: "JAN 2023",
    coords: "31.71°N 35.22°E",
    location: "BETHLEHEM & JERUSALEM, WEST BANK",
    region: "Asia",
    tags: ["Personal"],
    title: `Bethlehem & the Judean Hills: Stone, Faith, and Quiet`,
    description: `Looking up inside the dome at the Chapel of the Shepherds' Field in Beit Sahour, with light filtering through the ceiling above the nativity frescoes, there is a stillness that stays with you long after you step back out into the bright limestone streets. Outside, the city spreads across pale terraced hillsides before dropping abruptly into the dry, bare folds of the Judean Desert, where flags snap against utility poles in the wind. Moving through those quiet stone courtyards with people who treated me like family, I mostly just wanted to take in what it feels like to be welcomed into a place where history, faith, and daily life sit side by side without needing much commentary.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Beit Sahour (Shepherds' Field), Bethlehem and the Old City of Jerusalem, West Bank"],
      ["LANDSCAPE", "Limestone Judean Hills transitioning into the arid Judean Desert"],
      ["ARCHITECTURE", "Cream-colored Jerusalem limestone churches, chapels, and terraced hillside neighborhoods"],
    ],
    dataNote: "This entry is personal, not part of the documentary/climate work above. The data here is basic geography, not a climate case study.",
    sources: ["General geographic reference; not independently verified for this entry"],
    captions: [
      "16:20 — Dry folds of the Judean Desert, a dusting of green",
      "11:05 — Limestone-clad block under a grey sky",
      "10:15 — Looking up into the dome, angels around the rim",
      "10:40 — Shepherds and flock in the nativity scene",
      "15:10 — Cross and hillside neighborhoods across the valley",
      "14:30 — Bell tower above the rooftops",
      "08:45 — Prayer at the wall, stone on stone",
      "15:50 — Dome of the Rock over the Old City",
    ],
    count: 8,
  },
  {
    slug: "crete",
    date: "JUL 2022",
    coords: "35.24°N 24.81°E",
    location: "CHANIA, GEORGIOUPOLI, LAKE KOURNAS & TRIOPETRA, CRETE, GR",
    region: "Europe",
    tags: ["Coasts & Islands"],
    title: `Crete: Stone, Salt, and Summer Light`,
    description: `In Crete, everything sits where dry rock meets open water. I came in summer with friends, and it was hot. Between the Venetian harbor in Chania, the stone causeway out to the whitewashed chapel in Georgioupoli, and the layered sea cliffs at Triopetra, life on the island hugs the shoreline. Outside the chapel, we noticed small crabs. Small charter boats run back and forth beneath carved limestone arches. Inland, Lake Kournas settles into a quiet pocket beneath bare, sun baked hills as the light drops and the day trippers head back toward the coast.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Chania, Georgioupoli, Lake Kournas and Triopetra, Crete, Greece"],
      ["LANDSCAPE", "Karst limestone coastline, sea arches, and freshwater Lake Kournas framed by the White Mountains"],
      ["ECONOMY & COAST", "Summer boat charters, harbor tourism, and coastal villages balanced against Mediterranean heat and drought"],
    ],
    dataNote: "This entry is personal, not part of the documentary/climate work above. The data here is basic geography, not a climate case study.",
    sources: ["General geographic reference; not independently verified for this entry"],
    captions: [
      "11:40 — Swell working at the base of the cliff",
      "12:10 — A sea arch from the deck, lifebuoys in the foreground",
      "10:30 — A charter boat tied up in the harbor",
      "18:05 — Tilted limestone layers at Triopetra",
      "12:20 — The bay and pebble beach below the cliff road",
      "11:50 — A cruise boat's bow, life rafts stacked on the roof",
      "19:55 — Walking the causeway to the chapel",
      "13:15 — Old stone lighthouse over the harbor",
    ],
    count: 8,
  },
  {
    slug: "cabrillo",
    date: "OCT 2024",
    coords: "32.67°N 117.24°W",
    location: "POINT LOMA, SAN DIEGO, CA, US",
    region: "Americas",
    tags: ["Land & Climate"],
    title: `Cabrillo: Cliffs at the Edge of the Harbor`,
    description: `On the tip of Point Loma, two coastlines sit back to back. Look east from the ridge and San Diego Bay is packed with naval ships, runways, and concrete piers. Turn west and the city drops away into crumbling sandstone bluffs, dry coastal scrub, and tidepools carved into the rock. I came with my family and we just roamed around. Walking down toward the water, you can see how soft those layered cliffs are, undercut by every swell, with small buildings and radio towers right along the upper rim. Rising seas, stronger winter surf, and thousands of people crossing the intertidal ledges every week are pressing on this strip of coast from both sides.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Cabrillo National Monument, Point Loma Peninsula, San Diego, CA"],
      ["GEOLOGY & COAST", "Late Cretaceous rock (~76 million years old) laid down as mud, sand and gravel; tilted sea cliffs, coastal sage scrub, and rocky intertidal tidepools"],
      ["SETTING", "Southern tip of Point Loma, between the Pacific Ocean and San Diego Bay"],
      ["CLIMATE", "Mediterranean; mean rainfall 9.5 in a year (range 3.4 to 19.4 in), most of it falling November to April"],
    ],
    dataNote: "The park's acreage, the pace of cliff erosion and visitor pressure on the tidepools are my field observations, not figures I have sourced here.",
    sources: [
      "National Park Service, 'Geology of Cabrillo National Monument' (Late Cretaceous, ~76 million years old)",
      "National Park Service, 'Environmental Factors' and 'Climate' at Cabrillo (mean annual rainfall 9.5 in, range 3.4 to 19.4 in)",
    ],
    captions: [
      "11:20 — San Diego Bay and the naval piers from the ridge",
      "13:25 — A cleft in the rock open to the Pacific",
      "11:50 — A lifebuoy post above the tidepools",
      "13:10 — Swell breaking over a shallow ledge",
      "13:40 — Tilted sandstone ledges running up the coast",
      "12:30 — Undercut layers beneath a building on the rim",
      "13:55 — A visitor perched above the surf",
      "12:05 — Red succulents on the bluff edge, surf below",
    ],
    count: 8,
  },
  {
    slug: "nyc",
    date: "APR 2024",
    coords: "40.71°N 74.01°W",
    location: "NEW YORK CITY, NY, US",
    region: "Americas",
    tags: ["Land & Climate"],
    title: `New York City: Concrete, Harbor, and Unpredictable Skies`,
    description: `Tourism in New York doesn't stop for the weather, even when the sky turns sideways. In April 2024, one day opened clear over Times Square and the stone facade of the Met, and the next dropped cold rain and sleet across the East River. People still lined up in ponchos and parkas for the harbor ferries to Liberty Island and crossed the slick wooden planks of the Brooklyn Bridge while low clouds swallowed Lower Manhattan. Even in the rain, it felt overcrowded. Tens of millions of visitors funnel through low lying piers, bridges, and waterfront plazas, which leaves the city exposed to the water around it. New York sells itself as permanent concrete and steel, yet its most famous landmarks sit on a tidal harbor facing rising seas and heavier coastal storms.`,
    voices: [],
    dataPoints: [
      ["LOCATION", "Lower Manhattan, DUMBO, Times Square and Upper New York Bay, NYC"],
      ["TOURISM SCALE", "About 64 million visitors forecast for 2024, concentrated around Times Square, the Brooklyn Bridge and Liberty Island"],
      ["SEA LEVEL", "Seas around NYC have risen about a foot since 1900; at least two more feet projected by 2100"],
      ["CLIMATE & PRESSURE", "Wetter and hotter: rainfall projected to rise up to 14% by the 2050s; more frequent storm-surge and high-tide flooding"],
    ],
    dataNote: "Projections come from New York City climate scientists as reported in January 2024. The shoreline mileage and rainfall totals in my original notes are not included because I could not confirm them.",
    sources: [
      "NYC Tourism + Conventions, 'NYC Tourism year-end 2024 numbers' (about 64.3 million visitors forecast)",
      "THE CITY, 'What's in store for New York City because of climate change?', Jan 2024 (sea level, rainfall, heat, storm-surge projections)",
    ],
    captions: [
      "10:30 — Times Square under a clear April sky",
      "14:20 — The Brooklyn Bridge walkway, wet and nearly empty",
      "13:05 — Liberty Island through sleet",
      "14:40 — Lower Manhattan through the bridge cables",
      "11:15 — The Met, Fifth Avenue, its red banner above the doors",
      "15:30 — The Manhattan Bridge framed from DUMBO",
      "12:50 — Boarding the ferry in ponchos and umbrellas",
      "14:45 — Low cloud swallowing the towers",
    ],
    count: 8,
  },
  // Next entry goes here, e.g.:
  // {
  //   slug: "example",
  //   date: "SEP 2026",
  //   coords: "00.00°N 00.00°E",
  //   location: "CITY, COUNTRY",
  //   region: "Americas", // Americas | Asia | Europe | Africa | Antarctica
  //   tags: ["Labor & Industry"],
  //   title: `Entry Title`,
  //   description: `Lead with the place and the people, not the trip.`,
  //   voices: [],
  //   dataPoints: [["LABEL", "value"]],
  //   sources: ["Where this came from"],
  //   captions: ["08:00 -- short caption", "..."],
  //   count: 8,
  // },
];
