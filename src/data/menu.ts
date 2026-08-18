export type ExperienceCategoryId =
  | "wine-tastings"
  | "education-and-classes"
  | "visiting-winemakers"
  | "members-events"
  | "special-experiences";

export interface ExperienceCategory {
  readonly id: ExperienceCategoryId;
  readonly label: string;
  readonly description: string;
}

export interface FoodMenuItem {
  readonly name: string;
  readonly details: string;
  readonly tag?: string;
  readonly singlePrice: string;
}

export interface FoodMenu {
  readonly id: "boards-and-bites";
  readonly label: string;
  readonly introduction: string;
  readonly rotatingWineNote: string;
  readonly items: readonly FoodMenuItem[];
}

export const experienceCategories = [
  {
    id: "wine-tastings",
    label: "Wine Tastings",
    description:
      "Thoughtfully guided tastings that invite you to follow your curiosity and find a new favorite.",
  },
  {
    id: "education-and-classes",
    label: "Education & Classes",
    description:
      "Approachable classes that make regions, varieties, pairings, and the stories behind each bottle easier to explore.",
  },
  {
    id: "visiting-winemakers",
    label: "Visiting Winemakers",
    description:
      "Meet the people behind distinctive wines and hear firsthand how place, craft, and character shape every pour.",
  },
  {
    id: "members-events",
    label: "Members’ Events",
    description:
      "Private Society gatherings created around limited bottles, shared tables, and deeper discovery.",
  },
  {
    id: "special-experiences",
    label: "Special Experiences",
    description:
      "Seasonal menus, unexpected collaborations, and evenings worth discovering beyond the door.",
  },
] as const satisfies readonly ExperienceCategory[];

export const foodMenu = {
  id: "boards-and-bites",
  label: "Boards & Bites",
  introduction:
    "Gourmet small plates designed for sharing and pairing with whatever discovery is in your glass.",
  rotatingWineNote:
    "Our wine selection rotates often. Visit us to discover what is currently pouring and available by the bottle.",
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
} as const satisfies FoodMenu;
