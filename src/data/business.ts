export interface ContactInfo {
  readonly phone: string;
  readonly telHref: `tel:${string}`;
  readonly email: string;
  readonly emailHref: `mailto:${string}`;
  readonly newsletterHref: `mailto:${string}`;
}

export interface BusinessLocation {
  readonly streetAddress: string;
  readonly city: string;
  readonly region: string;
  readonly postalCode: string;
  readonly displayAddress: string;
  readonly mapsHref: `https://${string}`;
}

export interface BusinessHour {
  readonly days: string;
  readonly hours: string;
  readonly isClosed?: boolean;
}

export interface NavigationItem {
  readonly label: string;
  readonly href: `/${string}`;
}

export interface RecurringEvent {
  readonly id: string;
  readonly name: string;
  readonly cadence: string;
  readonly time: string;
  readonly description: string;
}

export interface SocialLink {
  readonly label: string;
  readonly handle: string;
  readonly href: `https://${string}`;
}

export interface PhoneActions {
  readonly reservation: ContactInfo["telHref"];
  readonly wineClub: ContactInfo["telHref"];
  readonly privateEvents: ContactInfo["telHref"];
}

export interface BusinessInfo {
  readonly name: string;
  readonly descriptor: string;
  readonly shortDescription: string;
  readonly contact: ContactInfo;
  readonly location: BusinessLocation;
  readonly hours: readonly BusinessHour[];
  readonly navigation: readonly NavigationItem[];
  readonly events: readonly RecurringEvent[];
  readonly socialLinks: readonly SocialLink[];
  readonly phoneActions: PhoneActions;
}

export const contact = {
  phone: "(510) 555-0147",
  telHref: "tel:+15105550147",
  email: "hello@davinciswinebar.example",
  emailHref: "mailto:hello@davinciswinebar.example",
  newsletterHref:
    "mailto:hello@davinciswinebar.example?subject=Join%20the%20DaVinci%27s%20email%20list&body=Please%20add%20me%20to%20the%20DaVinci%27s%20email%20list.",
} as const satisfies ContactInfo;

export const location = {
  streetAddress: "123 Harbor Lane",
  city: "Alameda",
  region: "CA",
  postalCode: "94501",
  displayAddress: "123 Harbor Lane, Alameda, CA 94501",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=123%20Harbor%20Lane%2C%20Alameda%2C%20CA%2094501",
} as const satisfies BusinessLocation;

export const hours = [
  { days: "Monday", hours: "Closed", isClosed: true },
  { days: "Tuesday - Thursday", hours: "4:00 PM - 10:00 PM" },
  { days: "Friday - Saturday", hours: "4:00 PM - 11:00 PM" },
  { days: "Sunday", hours: "2:00 PM - 8:00 PM" },
] as const satisfies readonly BusinessHour[];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Menu & Wine List", href: "/menu/" },
  { label: "Wine Club", href: "/wine-club/" },
] as const satisfies readonly NavigationItem[];

export const recurringEvents = [
  {
    id: "guided-flight",
    name: "First Thursday Guided Flight",
    cadence: "First Thursday of every month",
    time: "6:30 PM",
    description:
      "Explore three distinctive wines with a guided tasting focused on place, craft, and confident tasting.",
  },
  {
    id: "meet-the-maker",
    name: "Second Saturday Meet the Maker",
    cadence: "Second Saturday of every month",
    time: "5:00 PM",
    description:
      "Meet a visiting winemaker or importer and hear the stories behind a featured boutique producer.",
  },
  {
    id: "bottle-shop-preview",
    name: "Last Sunday Bottle-Shop Preview",
    cadence: "Last Sunday of every month",
    time: "3:00 PM",
    description:
      "Taste newly arrived bottles before they reach the shelves and discover a favorite to take home.",
  },
] as const satisfies readonly RecurringEvent[];

export const socialLinks = [
  {
    label: "Instagram",
    handle: "@davinciswinebar",
    href: "https://www.instagram.com/",
  },
] as const satisfies readonly SocialLink[];

// Every phone-based conversion intentionally resolves to the same owner-editable number.
export const phoneActions = {
  reservation: contact.telHref,
  wineClub: contact.telHref,
  privateEvents: contact.telHref,
} as const satisfies PhoneActions;

export const business = {
  name: "DaVinci's",
  descriptor: "Wine Lounge & Bottle Shop",
  shortDescription:
    "A boutique wine lounge where exceptional wines, thoughtful hospitality, and unforgettable experiences come together.",
  contact,
  location,
  hours,
  navigation,
  events: recurringEvents,
  socialLinks,
  phoneActions,
} as const satisfies BusinessInfo;
