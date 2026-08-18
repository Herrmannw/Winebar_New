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

Edit `src/data/business.ts` to change the phone number, email, address, hours, navigation, recurring experiences, or social profiles. Reservation and private-event buttons use the centralized phone actions; email updates and Society enrollment use separate pre-filled email links.

The homepage subscription field does not store or transmit data to a service. It validates the visitor's address and opens their email app with a prepared message to DaVinci's.

## Update experiences and food

Edit `src/data/menu.ts` to change the five experience categories, rotating-wine notice, or food offerings. `foodMenu.items` contains the owner-editable Boards & Bites list; each item uses:

- `name` for the menu label
- `details` for the description
- `singlePrice` for the food price
- an optional `tag`

Named wines are intentionally not published because the selection rotates. Keeping the editable content in typed files makes accidental field errors visible when `npm run check` runs.

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

`public/og.png` is an original 1200×630 social card generated for this design. Replace it when final brand photography is available.

## Publish with GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`, which builds and publishes the site whenever `main` is pushed. Production builds use the project base path `/Winebar_New`, while local development continues to run at `/`.

1. In the GitHub repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Commit and push the project to `main`, or run the workflow manually from the **Actions** tab.

The expected project URL is [https://herrmannw.github.io/Winebar_New/](https://herrmannw.github.io/Winebar_New/). If the repository is renamed or a custom domain is added, update `site` and the production `base` value in `astro.config.mjs`.
