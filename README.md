# DaVinci's Wine Lounge

A static Astro website for an upscale, approachable neighborhood wine lounge and boutique bottle shop.

## Run locally

```bash
npm install
npm run dev
```

The production checks are:

```bash
npm run check
npm run build
npm run preview
```

## Update the business details

Edit `src/data/business.ts` to change the phone number, email, address, hours, navigation, events, or social profile. Every phone-based action uses the single `contact.telHref` value, and the email-list button uses `contact.newsletterHref`.

The current address, phone number, email address, hours, and Instagram profile are placeholders. The `.example` email address intentionally cannot receive messages and must be replaced before a public launch.

## Update the menu and wine list

Edit `src/data/menu.ts`. Each `MenuSection` contains an `items` array. A `MenuItem` can use:

- `glassPrice` for a glass price
- `bottlePrice` for a bottle price
- `singlePrice` for flights, beer, or food
- optional `origin`, `details`, and `tag` fields

Keeping content in these typed files makes accidental field errors visible when `npm run check` runs.

## Photography credits

The local photos are temporary, free-to-use selections from Pexels and should be replaced with DaVinci's own photography when available.

- Wine bar interior — [Polina Chistyakova / Pexels](https://www.pexels.com/photo/cozy-wine-bar-interior-with-wine-bottles-36129310/)
- Sommelier and guests — [Pavel Danilyuk / Pexels](https://www.pexels.com/photo/friends-sitting-at-the-table-8775093/)
- Wine pour — [Rojda / Pexels](https://www.pexels.com/photo/pouring-wine-to-glass-15170729/)
- Charcuterie board — [Fernanda Leticia / Pexels](https://www.pexels.com/photo/delicious-gourmet-charcuterie-board-with-cheese-and-fruits-32978321/)
- Wine shelves — [Florent Bertiaux / Pexels](https://www.pexels.com/photo/photo-of-wine-bottles-on-rack-2664149/)
- Couple enjoying wine — [Jep Gambardella / Pexels](https://www.pexels.com/photo/a-loving-couple-drinking-wine-in-a-restaurant-5086769/)

See the [Pexels license](https://www.pexels.com/license/) for usage terms. The files in `Ref/` are private design references and are not included in the built website.

## Social sharing image

`public/og.png` is an original 1200×630 social card generated for this design. Replace it alongside the placeholder business details when final brand photography and a production domain are available.
