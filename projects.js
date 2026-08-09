// ---------------------------------------------------------------
// PROJECTS are different from Journal entries: long-form, multi-visit
// investigations tying human, geography, landscape, economy, and
// climate together for one place. Not more than ~5 total, by design.
// Each can grow over time (more photos, more sections) as notes
// come in -- this file is the single source of truth for that.
//
// status: "live" | "coming-soon"
// postGrid: the analytical section that runs AFTER the photo grid,
// tying specific visual choices to specific data. No calls to
// action, no proposed solutions -- just honest observation tied
// back to the mission statement.
// ---------------------------------------------------------------

const PROJECTS = [
  {
    slug: "grindelwald",
    status: "live",
    date: "MAR 2026",
    coords: "46.62°N 8.03°E",
    location: "GRINDELWALD, CH",
    tag: "Land & Climate",
    title: `Grindelwald: The Architecture of Instability`,
    intro:
      `Standing at the foot of the Eiger, it's easy to get swept up in the optical illusion of durability. The massive limestone walls look ancient, and the snow-capped ridges feel entirely unyielding. But spending time walking these trails and watching the ski lifts hum across the valley, I couldn't shake the reality of what's happening underneath: the mountain is quietly losing the structural glue holding its upper slopes together. This project grew out of a desire to document that subtle, underlying tension, the intersection between high-altitude winter tourism and an increasingly fragile geological foundation. It's a strange thing to watch skiers carve through groomed powder on slopes anchored to thawing permafrost, while the rockfaces above slowly destabilize as the glacier below shrinks. Most mornings in the valley are defined by quiet routine: the click of lift cables, snow crunching under boots, cold air clearing off the ridge, all masking an accelerating physical shift happening across the Alpine landscape in real time. I didn't come here to shoot a winter postcard or document a ski holiday. The intention was a grounded, personal record of a dynamic system, capturing the point where daily human presence meets the quiet, relentless retreat of an Alpine glacier.`,
    dataPoints: [
      ["LOCATION", "Lower Grindelwald Glacier, Bernese Oberland, CH"],
      ["GLACIER RETREAT", "1.9 km lost since 2007 alone (6.2 km current length, 2015)"],
      ["PERMAFROST THAW", "Alpine permafrost has warmed ~0.3\u00b0C/decade on average, with some steep high-elevation rock faces exceeding 1\u00b0C/decade"],
      ["2006 EIGER ROCKFALL", "~500,000 m\u00b3 of rock detached after glacier retreat left the slope's base unsupported"],
      ["REGIONAL ROCKFALL PATTERN", "76% of high-Alps rockfalls occur in permafrost zones covering just 22% of the terrain (Eastern Alps study)"],
    ],
    sources: [
      "Wikipedia, 'Lower Grindelwald Glacier'",
      "SWI swissinfo.ch, reporting on the 2006 Eiger rockfall and glacier flood risk",
      "Nature Communications (2024), on enhanced warming of European mountain permafrost",
      "Earth Surface Processes and Landforms, permafrost/rockfall study, Eastern Alps",
    ],
    postGrid: {
      heading: "Reading the Frame: What These Images Are Documenting",
      intro:
        `I don't hold the answers to how mountain towns like Grindelwald should navigate the loss of their glaciers, and I'm not proposing engineering or policy solutions here. The goal with this grid is simpler, but deliberate: to treat color, shadow, and scale as factual information, using the camera to ground abstract environmental data into clear visual notes. When published data records a 1.9 km glacial retreat or rising permafrost temperatures across the Bernese Alps, those numbers represent physical changes in stone and ice that are visible if you know where to look. In these frames, I focused on translating those environmental shifts into visual observation:`,
      bullets: [
        {
          title: "Scale and Structural Strain",
          body: "Framing the weathered rockfaces directly against the fragile, human-made infrastructure of lift lines and access roads, capturing where daily activity happens alongside terrain monitored for deep-seated rockfall.",
        },
        {
          title: "Color as Authentic Reality",
          body: "Keeping the cold, muted tones of deep shadow, bare stone, and flat winter light rather than polishing or over-saturating the snow, so the visual record stays faithful to the atmospheric conditions actually observed in the field.",
        },
        {
          title: "Glacial Footprints",
          body: "Documenting the bare, eroded rock scars and void spaces along the valley floor where ice sat only decades ago, the physical memory of a landscape that supported the slope within living memory.",
        },
      ],
      closing:
        `Like every entry in field/notes, this isn't a formal scientific paper; it's an observational record informed by real earth science data. Understanding starts with clear, honest observation. By pairing documented field metrics with an unvarnished visual record, I hope these notes offer a grounded reference point, letting the actual condition of the land speak for itself beyond the photograph.`,
    },
    captions: [
      "11:20 \u2014 Stillness below, instability above",
      "08:10 \u2014 The Wetterhorn, before the clouds close in",
      "13:05 \u2014 The summit disappearing into weather",
      "10:40 \u2014 Skiers, barely visible against the scale of it",
      "12:15 \u2014 The lift line keeps moving regardless",
      "09:30 \u2014 A glacier's worth of retreat, hard to see in one frame",
      "07:45 \u2014 The Eiger through the treeline",
      "10:05 \u2014 Tracks in the snow, none of them permanent",
    ],
    count: 8,
  },

  {
    slug: "matterhorn",
    status: "coming-soon",
    date: "TBD",
    location: "ZERMATT, CH",
    tag: "Land & Climate",
    title: `Matterhorn (working title)`,
    intro: `Notes still being gathered. This project is planned as a multi-visit series, not a single entry.`,
  },

  // Next project goes here, e.g.:
  // {
  //   slug: "example",
  //   status: "coming-soon", // or "live"
  //   date: "MON YEAR",
  //   coords: "00.00°N 00.00°E",
  //   location: "CITY, COUNTRY",
  //   tag: "Land & Climate",
  //   title: `Project Title`,
  //   intro: `Long-form opening essay.`,
  //   dataPoints: [["LABEL", "value"]],
  //   sources: ["..."],
  //   postGrid: {
  //     heading: "Reading the Frame: ...",
  //     intro: `...`,
  //     bullets: [{ title: "...", body: "..." }],
  //     closing: `...`,
  //   },
  //   captions: ["08:00 -- caption", "..."],
  //   count: 8,
  // },
];
