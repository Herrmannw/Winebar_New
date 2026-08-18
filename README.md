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

Edit `src/data/business.ts` to change the phone number, email, address, hours, navigation, recurring experiences, or social profiles. Reservation and private-event buttons use the centralized phone actions; Society enrollment uses a separate pre-filled email link.

## Enable email-update requests

The Stay in the Know form uses Formspree to send each submitted address to DaVinci's. The website does not maintain a mailing list; the owner adds each address to their list manually.

1. Create a Formspree form named **DaVinci's Website Updates** in an account owned by `wildflowerwinesllc@gmail.com`.
2. Set and verify `wildflowerwinesllc@gmail.com` as the form's notification destination.
3. Copy the form ID from its endpoint (the portion after `https://formspree.io/f/`).
4. In `src/data/business.ts`, replace `REPLACE_WITH_FORM_ID` with that ID.

The derived Formspree endpoint is public configuration, not a password or secret. Until the placeholder is replaced, subscription controls remain safely disabled and the no-JavaScript fallback reports that updates are temporarily unavailable. No Gmail password, API key, subscriber database, or newsletter automation belongs in this repository.

Formspree stores the relayed submission in the owner's Formspree account as well as sending the notification email. Its current Free plan starts at 50 submissions per month and keeps 30 days of submission history; review [Formspree's account limits](https://help.formspree.io/articles/account-management/account-limits) before launch.

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
