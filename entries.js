// ---------------------------------------------------------------
// Add a new roll by copying this shape and dropping photos into
// /images/<slug>/  named 01.jpg, 02.jpg, 03.jpg ...
// The site builds the contact sheet automatically from `count`.
// ---------------------------------------------------------------

const ENTRIES = [
  {
    slug: "merkato",
    date: "MAR 2026",
    coords: "09.02°N 38.75°E",
    location: "ADDIS ABABA, ET",
    title: "Merkato: The Hide Trade of Addis Ababa",
    description:
      "Inside the largest open-air market in Africa, hides move from raw skin to cured leather in the open air — hand to hand, stall to stall. A study in color, texture, and the quiet skill of the people working it.",
    count: 10,
  },
  {
    slug: "cuzco",
    date: "MAY 2026",
    coords: "13.85°S 71.30°W",
    location: "VINICUNCA, PE",
    title: "Vinicunca: Life on the Rainbow Mountain",
    description:
      "Everyone climbs for the striped mountain. I spent the morning watching the horses instead — saddled, patient, doing the actual work while the color got all the credit.",
    count: 9,
  },
  {
    slug: "ica",
    date: "JUN 2026",
    coords: "13.83°S 76.28°W",
    location: "ISLAS BALLESTAS, PE",
    title: "Islas Ballestas: The Poor Man's Galápagos",
    description:
      "Past the Candelabra cut into the desert hillside, sea lions claim a channel marker as furniture and penguins line up along a cliff, single file, like they're waiting for something.",
    count: 12,
  },

  // Next country goes here, e.g.:
  // {
  //   slug: "example",
  //   date: "SEP 2026",
  //   coords: "00.00°N 00.00°E",
  //   location: "CITY, COUNTRY",
  //   title: "Entry Title",
  //   description: "Short field-note style description.",
  //   count: 8, // number of photos in /images/example/
  // },
];
