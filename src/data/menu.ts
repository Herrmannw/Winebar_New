export type MenuSectionId =
  | "flights"
  | "by-the-glass"
  | "featured-bottles"
  | "craft-beer"
  | "boards-and-bites";

export interface MenuItem {
  readonly name: string;
  readonly origin?: string;
  readonly details?: string;
  readonly tag?: string;
  readonly glassPrice?: string;
  readonly bottlePrice?: string;
  readonly singlePrice?: string;
}

export interface MenuSection {
  readonly id: MenuSectionId;
  readonly label: string;
  readonly introduction?: string;
  readonly items: readonly MenuItem[];
}

export const menuSections: readonly MenuSection[] = [
  {
    id: "flights",
    label: "Wine Flights",
    introduction:
      "Three thoughtful pours, selected to illuminate a region, grape, or point of view.",
    items: [
      {
        name: "Coast & Current",
        origin: "Atlantic and Mediterranean shores",
        details:
          "Albariño, Vermentino, and Assyrtiko - bright, mineral, and shaped by the sea.",
        tag: "Crisp & coastal",
        singlePrice: "$28",
      },
      {
        name: "Old World, New Stories",
        origin: "France, Italy, and Spain",
        details:
          "Cru Beaujolais, Etna Rosso, and Rioja Crianza with freshness, savory depth, and a sense of place.",
        tag: "Light to medium-bodied",
        singlePrice: "$32",
      },
      {
        name: "The Sommelier's Notebook",
        origin: "A rotating cellar selection",
        details:
          "Three limited-production wines chosen around a changing monthly theme.",
        tag: "Rotating selection",
        singlePrice: "$36",
      },
    ],
  },
  {
    id: "by-the-glass",
    label: "Wine by the Glass",
    introduction:
      "A concise list of benchmark bottles and unexpected discoveries, available by the glass or bottle.",
    items: [
      {
        name: "Jeio Brut Prosecco",
        origin: "Veneto, Italy",
        details: "Green apple, white flowers, and a clean mineral finish.",
        tag: "Sparkling",
        glassPrice: "$14",
        bottlePrice: "$52",
      },
      {
        name: "Leitz Dragonstone Riesling",
        origin: "Rheingau, Germany",
        details: "White peach, lime, and slate with a graceful off-dry finish.",
        tag: "White",
        glassPrice: "$15",
        bottlePrice: "$56",
      },
      {
        name: "Domaine de la Pepiere La Pepie Muscadet",
        origin: "Loire Valley, France",
        details: "Citrus peel, sea spray, and a precise, stony finish.",
        tag: "White",
        glassPrice: "$14",
        bottlePrice: "$52",
      },
      {
        name: "Sandhi Chardonnay",
        origin: "Santa Barbara County, California",
        details: "Meyer lemon, orchard fruit, and restrained oak.",
        tag: "White",
        glassPrice: "$18",
        bottlePrice: "$68",
      },
      {
        name: "Domaine de Colette Regnie",
        origin: "Beaujolais, France",
        details: "Wild strawberry, violet, and silky granite-grown Gamay.",
        tag: "Red",
        glassPrice: "$16",
        bottlePrice: "$60",
      },
      {
        name: "Paolo Scavino Langhe Nebbiolo",
        origin: "Piedmont, Italy",
        details: "Red cherry, rose petal, and fine, savory tannins.",
        tag: "Red",
        glassPrice: "$19",
        bottlePrice: "$72",
      },
    ],
  },
  {
    id: "featured-bottles",
    label: "Featured Bottles",
    introduction:
      "Small-production favorites selected for quality, character, and the story behind each winery.",
    items: [
      {
        name: "Raventos i Blanc Blanc de Blancs",
        origin: "Conca del Riu Anoia, Spain",
        details: "Traditional-method bubbles with citrus, fennel, and toasted almond.",
        tag: "Sparkling",
        bottlePrice: "$58",
      },
      {
        name: "Domaine Vacheron Sancerre",
        origin: "Loire Valley, France",
        details: "Biodynamic Sauvignon Blanc with citrus, herbs, and flinty energy.",
        tag: "White",
        bottlePrice: "$86",
      },
      {
        name: "Massican Annia",
        origin: "Napa Valley, California",
        details: "A floral, saline white blend inspired by northeastern Italy.",
        tag: "White blend",
        bottlePrice: "$64",
      },
      {
        name: "Arnot-Roberts Trousseau",
        origin: "North Coast, California",
        details: "Pale, aromatic, and lively with cranberry, spice, and gentle earth.",
        tag: "Chillable red",
        bottlePrice: "$72",
      },
      {
        name: "La Rioja Alta Vina Alberdi Reserva",
        origin: "Rioja, Spain",
        details: "Tempranillo with red plum, cedar, vanilla, and polished tannins.",
        tag: "Red",
        bottlePrice: "$68",
      },
      {
        name: "Produttori del Barbaresco Langhe Nebbiolo",
        origin: "Piedmont, Italy",
        details: "Fragrant red fruit, dried herbs, and the structure of classic Nebbiolo.",
        tag: "Red",
        bottlePrice: "$70",
      },
      {
        name: "Chateau Musar Rouge",
        origin: "Bekaa Valley, Lebanon",
        details: "Complex red fruit, leather, warm spice, and an unmistakable savory character.",
        tag: "Cellar selection",
        bottlePrice: "$94",
      },
      {
        name: "Ridge Geyserville",
        origin: "Sonoma County, California",
        details: "Old-vine Zinfandel blend with blackberry, pepper, and supple richness.",
        tag: "Red blend",
        bottlePrice: "$88",
      },
    ],
  },
  {
    id: "craft-beer",
    label: "Craft Beer",
    introduction: "A small, local-minded selection for the wine-curious beer drinker.",
    items: [
      {
        name: "Trumer Pils",
        origin: "Berkeley, California",
        details: "Crisp, floral, and classically dry. 12 oz bottle.",
        tag: "Pilsner",
        singlePrice: "$8",
      },
      {
        name: "Fort Point KSA",
        origin: "San Francisco, California",
        details: "Light-bodied Kolsch-style ale with a clean, gently hoppy finish. 12 oz can.",
        tag: "Kolsch-style ale",
        singlePrice: "$9",
      },
      {
        name: "Almanac Love Hazy IPA",
        origin: "Alameda, California",
        details: "Juicy citrus, tropical fruit, and soft bitterness. 16 oz can.",
        tag: "Hazy IPA",
        singlePrice: "$10",
      },
    ],
  },
  {
    id: "boards-and-bites",
    label: "Boards & Bites",
    introduction:
      "Gourmet small plates designed for sharing and pairing with the wines in your glass.",
    items: [
      {
        name: "DaVinci's Board",
        details:
          "Three artisan cheeses, two cured meats, seasonal preserves, olives, Marcona almonds, and grilled bread.",
        tag: "Serves two to three",
        singlePrice: "$32",
      },
      {
        name: "The Fromage Board",
        details:
          "A rotating trio of soft, firm, and blue cheeses with honeycomb, fruit, and seeded crackers.",
        tag: "Vegetarian",
        singlePrice: "$26",
      },
      {
        name: "Truffle Brie Crostini",
        details: "Whipped brie, truffle honey, roasted grapes, and thyme.",
        tag: "Four pieces",
        singlePrice: "$16",
      },
      {
        name: "Wild Mushroom Crostini",
        details: "Herbed ricotta, roasted mushrooms, shallot, and aged balsamic.",
        tag: "Four pieces",
        singlePrice: "$15",
      },
      {
        name: "Castelvetrano Olives",
        details: "Warm citrus-marinated olives with rosemary and toasted fennel.",
        tag: "Vegan",
        singlePrice: "$9",
      },
      {
        name: "Conserva Plate",
        details: "Spanish mussels, lemon aioli, cornichons, potato crisps, and grilled bread.",
        tag: "From the sea",
        singlePrice: "$19",
      },
    ],
  },
];
