export interface ContactInfo {
  readonly phone: string;
  readonly telHref: `tel:${string}`;
  readonly email: string;
  readonly emailHref: `mailto:${string}`;
  readonly societyHref: `mailto:${string}`;
}

export interface SubscriptionConfig {
  readonly formId: string;
  readonly endpoint: `https://formspree.io/f/${string}`;
  readonly notificationEmail: string;
  readonly isConfigured: boolean;
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

export type SocialPlatform = "instagram" | "facebook";

export interface SocialLink {
  readonly platform: SocialPlatform;
  readonly label: string;
  readonly handle: string;
  readonly href: `https://${string}`;
}

export interface PhoneActions {
  readonly reservation: ContactInfo["telHref"];
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
  readonly subscription: SubscriptionConfig;
}

export const contact = {
  phone: "(504) 432-5636",
  telHref: "tel:+15044325636",
  email: "wildflowerwinesllc@gmail.com",
  emailHref: "mailto:wildflowerwinesllc@gmail.com",
  societyHref:
    "mailto:wildflowerwinesllc@gmail.com?subject=Join%20The%20Society&body=I%27m%20interested%20in%20joining%20The%20Society.%20Please%20send%20membership%20details.",
} as const satisfies ContactInfo;

// Replace this value with the ID from the owner-managed Formspree form.
const subscriptionFormId: string = "REPLACE_WITH_FORM_ID";

export const subscription = {
  formId: subscriptionFormId,
  endpoint: `https://formspree.io/f/${subscriptionFormId}`,
  notificationEmail: contact.email,
  isConfigured:
    subscriptionFormId.trim().length > 0 && !subscriptionFormId.startsWith("REPLACE_"),
} as const satisfies SubscriptionConfig;

export const location = {
  streetAddress: "2900 E. Nasa Pkwy, suite 250",
  city: "Seabrook",
  region: "TX",
  postalCode: "77586",
  displayAddress: "2900 E. Nasa Pkwy, suite 250, Seabrook, TX 77586",
  mapsHref:
    "https://www.google.com/maps/search/2900+E.+Nasa+Pkwy,+suite+250+Seabrook,+TX+77586?entry=gmail&source=g",
} as const satisfies BusinessLocation;

export const hours = [
  { days: "Monday-Tuesday", hours: "Closed", isClosed: true },
  { days: "Wednesday", hours: "3:00 PM – 10:00 PM" },
  { days: "Thursday", hours: "3:00 PM – 10:00 PM" },
  { days: "Friday", hours: "2:00 PM – 12:00 AM" },
  { days: "Saturday", hours: "2:00 PM – 12:00 AM" },
  { days: "Sunday", hours: "10:00 AM – 4:00 PM" },
] as const satisfies readonly BusinessHour[];

export const navigation = [
  { label: "EXPERIENCES", href: "/menu/" },
  { label: "SOCIETY", href: "/wine-club/" },
  { label: "VISIT", href: "/visit/" },
  { label: "OUR STORY", href: "/about/" },
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
    platform: "instagram",
    label: "Instagram",
    handle: "@davincisloungetx",
    href: "https://www.instagram.com/davincisloungetx/",
  },
  {
    platform: "facebook",
    label: "Facebook",
    handle: "DaVincisLoungeTX",
    href: "https://www.facebook.com/DaVincisLoungeTX",
  },
] as const satisfies readonly SocialLink[];

// Reservations and private-event inquiries intentionally share the same owner-editable number.
export const phoneActions = {
  reservation: contact.telHref,
  privateEvents: contact.telHref,
} as const satisfies PhoneActions;

export const business = {
  name: "DaVinci's",
  descriptor: "Wine Lounge & Bottle Shop",
  shortDescription:
    "A curated wine shop and hidden lounge for discovery, education, gourmet provisions, and experiences beyond the bottle.",
  contact,
  location,
  hours,
  navigation,
  events: recurringEvents,
  socialLinks,
  phoneActions,
  subscription,
} as const satisfies BusinessInfo;
