# portfolio

My personal developer portfolio — source for a previous version of [maretyui.com](https://maretyui.com).

**Retired.** maretyui.com has since moved on to further rebuilds. This repo is kept around for reference/rollback only and is no longer deployed.

## Stack

- Next.js (static export) + TypeScript
- Tailwind CSS

## Content

`components/navigation.tsx` is the fixed top nav with an EN/DE language toggle. It only has jump buttons for Home and Contact — the sections in between (`components/services.tsx`, `components/about.tsx`, `components/skills.tsx`, `components/projects.tsx`) have no nav entry of their own and are reached by scrolling past Hero on the way to Contact, in that stacked order.

`components/contact.tsx` holds the actual contact details shown at the bottom of that scroll (email, phone, Hamburg location) alongside social links to GitHub, Discord and WhatsApp.

Note: the language toggle only flips the `EN`/`DE` label shown in the nav — no translated copy exists anywhere in the site, so it has no visible effect beyond that label. Worth knowing before assuming it's broken; it was never wired up to actual content.

## Accessibility

Icon-only links (social icons, language toggle) carry descriptive `aria-label`s, and the nav's active section is exposed via `aria-current="page"`. Project cards in `components/projects.tsx` reveal their description text on hover on desktop; a `group-focus-visible` counterpart to the `group-hover` classes ensures keyboard-only users see the same content when tabbing to a card, not just mouse users.

`app/error.tsx` wraps its heading in a `role="alert"` region and moves focus to it on mount — this boundary swaps in without a route change or title update, so without that there's no normal cue for assistive tech that something happened.

`app/globals.css` also has a `forced-colors: active` block for Windows High Contrast Mode (and other forced-colors user agents), which swaps in a user-chosen system palette rather than just boosting contrast like `prefers-contrast` does — it pins the focus ring and selection highlight to the `CanvasText`/`Highlight`/`HighlightText` system color keywords so both stay visible under forced colors.

## Metadata & SEO

`app/icon.tsx`, `app/apple-icon.tsx` and `app/opengraph-image.tsx` are Next.js file-convention routes — they generate the favicon, home-screen icon, and social-share preview image respectively, and aren't referenced anywhere in `layout.tsx`'s `metadata` object because Next.js picks them up automatically by file name. `app/sitemap.ts` and `app/robots.ts` work the same way for `/sitemap.xml` and `/robots.txt`.

## License

MIT — see [LICENSE](LICENSE).
